import { useEffect } from 'react'

/**
 * Reveals `.reveal*` blocks as they enter the viewport.
 *
 * Uses IntersectionObserver rather than a scroll handler: the previous version
 * called getBoundingClientRect() on every matching element on every scroll
 * event, forcing a layout pass per frame and making long pages scroll badly.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Opt in to hidden-before-reveal only when JS is running,
    // so content stays visible if JS fails.
    document.documentElement.classList.add('js-reveal')

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    )
    if (!elements.length) return

    // No observer support: show everything rather than leave it hidden.
    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((element) => element.classList.add('active'))
      return
    }

    // Matches the old trigger point: reveal once the element is 150px inside
    // the viewport, then stop observing it forever.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -150px 0px' }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}
