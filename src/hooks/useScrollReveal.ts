import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    // Opt in to hidden-before-reveal only when JS is running,
    // so content stays visible if JS fails.
    document.documentElement.classList.add('js-reveal')

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')

    const reveal = () => {
      revealElements.forEach(element => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const revealPoint = 150
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', reveal, { passive: true })
    reveal()

    return () => window.removeEventListener('scroll', reveal)
  }, [])
}
