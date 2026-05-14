import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
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

    window.addEventListener('scroll', reveal)
    reveal()

    return () => window.removeEventListener('scroll', reveal)
  }, [])
}
