import { useEffect, useState } from 'react'
import cookingGallery from '../data/cookingGallery'
import ScrollReveal from '../components/common/ScrollReveal'

function Cooking() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  const getSizeStyles = (size) => {
    switch (size) {
      case 'large':
        return { gridRow: 'span 2', gridColumn: 'span 2' }
      case 'medium':
        return { gridRow: 'span 1', gridColumn: 'span 2' }
      case 'small':
      default:
        return { gridRow: 'span 1', gridColumn: 'span 1' }
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ScrollReveal>
        <h2 style={{ textAlign: 'center' }}>Cooking</h2>
      </ScrollReveal>
       
      
      <ScrollReveal delay={200}>
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '200px',
            gap: 'var(--component-gap-sm)',
            marginTop: 'var(--component-gap-lg)'
          }}
        >
        {cookingGallery.map((item) => (
          <div
            key={item.id}
            style={{
              ...getSizeStyles(item.size),
              backgroundColor: 'var(--color-border)',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: prefersReducedMotion ? 'none' : 'transform 0.4s ease-in-out',
              overflow: 'hidden',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              if (!prefersReducedMotion) {
                e.currentTarget.style.transform = 'scale(1.02)'
              }
            }}
            onMouseLeave={(e) => {
              if (!prefersReducedMotion) {
                e.currentTarget.style.transform = 'scale(1)'
              }
            }}
          >
            <img
              src={item.url}
              alt={item.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
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
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-secondary)',
                backgroundColor: 'var(--color-border)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                {item.size}
              </div>
              <div style={{ fontSize: '0.8rem' }}>Photo {item.id}</div>
            </div>
          </div>
        ))}
        </div>
      </ScrollReveal>
    </div>
  )
}

export default Cooking

