function Lightbox({ isOpen, image, images, currentIndex, onClose, onNext, onPrev }) {
  if (!isOpen || !image) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'var(--color-overlay)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        cursor: 'pointer'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '90%',
          maxHeight: '90%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-40px',
            right: 0,
            background: 'none',
            border: 'none',
            color: 'var(--color-bg)',
            fontSize: '2rem',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
        >
          ×
        </button>
        
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              style={{
                position: 'absolute',
                left: '-50px',
                background: 'none',
                border: 'none',
                color: 'var(--color-bg)',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: '0.5rem'
              }}
            >
              ‹
            </button>
            <button
              onClick={onNext}
              style={{
                position: 'absolute',
                right: '-50px',
                background: 'none',
                border: 'none',
                color: 'var(--color-bg)',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: '0.5rem'
              }}
            >
              ›
            </button>
          </>
        )}
        
        <img
          src={image.url}
          alt={image.alt}
          style={{
            maxWidth: '100%',
            maxHeight: '90vh',
            objectFit: 'contain'
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
            width: '600px',
            height: '400px',
            backgroundColor: 'var(--color-accent)',
            color: 'var(--color-bg)',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem'
          }}
        >
          Image Placeholder
        </div>
      </div>
    </div>
  )
}

export default Lightbox

