import useScrollAnimation from '../../hooks/useScrollAnimation'
import useReducedMotion from '../../hooks/useReducedMotion'

function SectionWrapper({ id, children }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, once: true })
  const prefersReducedMotion = useReducedMotion()

  // Map section IDs to background colors for subtle visual distinction
  const getBackgroundColor = () => {
    const colorMap = {
      'home': 'var(--color-section-home)',
      'web-projects': 'var(--color-section-projects)',
      'photography': 'var(--color-section-photography)',
      'cooking': 'var(--color-section-cooking)',
      'messages': 'var(--color-section-messages)'
    }
    return colorMap[id] || 'var(--color-bg)'
  }

  // Animation settings - subtle fade and translate
  const animationDuration = prefersReducedMotion ? '0ms' : '450ms'
  const translateDistance = prefersReducedMotion ? '0px' : '20px'
  const easing = 'ease-in-out' // No elastic or bouncing

  return (
    <section
      ref={ref}
      id={id}
      style={{
        padding: 'var(--section-padding)',
        backgroundColor: getBackgroundColor(),
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : `translateY(${translateDistance})`,
        transition: prefersReducedMotion 
          ? 'background-color 0.3s ease' 
          : `opacity ${animationDuration} ${easing}, transform ${animationDuration} ${easing}, background-color 0.3s ease`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div style={{ width: '100%', maxWidth: '1200px' }}>
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper

