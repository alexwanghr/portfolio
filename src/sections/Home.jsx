import ScrollReveal from '../components/common/ScrollReveal'

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--component-gap-lg)', marginTop: 'var(--component-gap-xl)' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--component-gap-md)' }}>
        <ScrollReveal delay={100}>
          <h1 style={{ textAlign: 'center', marginBottom: 'var(--component-gap-md)' }}>Hello, I'm Huirong</h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div 
            style={{ 
              width: '200px', 
              height: '200px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--color-border)',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <img
              src="/img/home/me.jpg"
              alt="Profile"
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
              Photo
            </div>
          </div>
        </ScrollReveal>
        
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--component-gap-md)' }}>Call me Alex</h2>
        <ScrollReveal delay={300}>
          <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          A creative and passionate fiber artist who loves coding, travel, photography, and food.
          </p>
          <a 
            href="/cv.pdf" 
            download="CV.pdf"
            style={{ 
              display: 'inline-block', 
              padding: '0.75rem 1.5rem', 
              backgroundColor: 'var(--color-accent)', 
              color: 'var(--color-bg)', 
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            Download CV
          </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

export default Home

