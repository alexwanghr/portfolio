import { useEffect, useState } from 'react'
import webProjects from '../data/webProjects'
import ScrollReveal from '../components/common/ScrollReveal'

function WebProjects({ onNavigateToRongCrochet, onNavigateToReelRoom }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const handleProjectClick = (e, project) => {
    if (project.title === 'Rong Crochet' && onNavigateToRongCrochet) {
      e.preventDefault()
      onNavigateToRongCrochet()
    } else if (project.title === 'ReelRoom' && onNavigateToReelRoom) {
      e.preventDefault()
      onNavigateToReelRoom()
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ScrollReveal>
        <h2 style={{ textAlign: 'center' }}>Web Projects</h2>
      </ScrollReveal>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--component-gap-lg)', marginTop: 'var(--component-gap-lg)', width: '100%' }}>
        {webProjects.map((project, index) => (
          <ScrollReveal key={project.id} delay={200 + index * 100}>
          <a
            href={(project.title === 'Rong Crochet' || project.title === 'ReelRoom') ? '#' : project.url}
            target={(project.title === 'Rong Crochet' || project.title === 'ReelRoom') ? '_self' : '_blank'}
            rel={(project.title === 'Rong Crochet' || project.title === 'ReelRoom') ? '' : 'noopener noreferrer'}
            onClick={(e) => handleProjectClick(e, project)}
            style={{
              display: 'flex',
              gap: 'var(--component-gap-lg)',
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: 'var(--color-surface)',
              borderRadius: '8px',
              padding: 'var(--element-padding-md)',
              transition: prefersReducedMotion 
                ? 'background-color 0.3s ease-in-out' 
                : 'transform 0.4s ease-in-out, background-color 0.4s ease-in-out',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              if (!prefersReducedMotion) {
                e.currentTarget.style.transform = 'translateY(-2px)'
              }
              e.currentTarget.style.backgroundColor = 'var(--color-border)'
            }}
            onMouseLeave={(e) => {
              if (!prefersReducedMotion) {
                e.currentTarget.style.transform = 'translateY(0)'
              }
              e.currentTarget.style.backgroundColor = 'var(--color-surface)'
            }}
          >
            <div style={{ flex: '0 0 300px' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-border)'
                }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  const placeholder = e.target.nextSibling
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div
                style={{
                  display: 'none',
                  width: '100%',
                  height: '200px',
                  backgroundColor: 'var(--color-border)',
                  borderRadius: '4px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-secondary)'
                }}
              >
                Project Image
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>{project.title}</h3>
              <p style={{ marginBottom: '1rem' }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: 'var(--color-surface)',
                      borderRadius: '4px',
                      fontSize: '0.9rem'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

export default WebProjects

