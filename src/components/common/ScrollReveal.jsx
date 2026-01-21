import { useRef, useEffect, useState } from 'react'
import useReducedMotion from '../../hooks/useReducedMotion'

function ScrollReveal({ children, delay = 0, direction = 'up' }) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Animation settings
  const animationDuration = prefersReducedMotion ? '0ms' : '450ms'
  const translateDistance = prefersReducedMotion ? '0px' : '20px'
  const easing = 'ease-in-out'

  const getTransform = () => {
    if (prefersReducedMotion || isVisible) return 'translateY(0)'
    
    switch (direction) {
      case 'up':
        return `translateY(${translateDistance})`
      case 'down':
        return `translateY(-${translateDistance})`
      case 'left':
        return `translateX(${translateDistance})`
      case 'right':
        return `translateX(-${translateDistance})`
      default:
        return `translateY(${translateDistance})`
    }
  }

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible || prefersReducedMotion ? 1 : 0,
        transform: getTransform(),
        transition: prefersReducedMotion
          ? 'none'
          : `opacity ${animationDuration} ${easing} ${delay}ms, transform ${animationDuration} ${easing} ${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal

