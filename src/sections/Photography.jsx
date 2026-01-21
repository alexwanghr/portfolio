import { useState, useEffect } from 'react'
import photographyCategories from '../data/photographyCategories'
import Lightbox from '../components/gallery/Lightbox'
import ScrollReveal from '../components/common/ScrollReveal'

function Photography() {
  const [selectedCategory, setSelectedCategory] = useState(photographyCategories[0].id)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const currentCategory = photographyCategories.find(cat => cat.id === selectedCategory)
  const currentImages = currentCategory ? currentCategory.images : []

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ScrollReveal>
        <h2 style={{ textAlign: 'center' }}>Photography</h2>
      </ScrollReveal>
       
      
      <div style={{ display: 'flex', gap: 'var(--component-gap-lg)', marginTop: 'var(--component-gap-lg)', width: '100%' }}>
        <ScrollReveal delay={200}>
          <div style={{ flex: '0 0 200px', maxWidth: '200px' }}>
             
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
            {photographyCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setCurrentImageIndex(0)
                }}
                style={{
                  padding: 'var(--element-padding-sm) var(--element-padding-md)',
                  textAlign: 'left',
                  backgroundColor: selectedCategory === category.id ? 'var(--color-accent)' : 'var(--color-surface)',
                  color: selectedCategory === category.id ? 'var(--color-bg)' : 'var(--color-text-primary)',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  border: '1px solid #000000',
                  outline: 'none',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
          </div>
        </ScrollReveal>
        
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 'var(--component-gap-sm)'
            }}
          >
            {currentImages.map((image, index) => (
              <div
                key={`${selectedCategory}-${image.id}`}
                onClick={() => openLightbox(index)}
                style={{
                  aspectRatio: '1',
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
                  src={image.url}
                  alt={image.alt}
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
                    backgroundColor: 'var(--color-border)'
                  }}
                >
                  Photo {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        image={currentImages[currentImageIndex]}
        images={currentImages}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  )
}

export default Photography

