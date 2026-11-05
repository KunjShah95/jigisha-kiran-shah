import { useEffect, useRef } from 'react'

/**
 * Thin gold reading-progress bar pinned to the top of the page.
 *
 * Deliberately holds no React state: the width is written straight to the DOM
 * inside a rAF-throttled scroll handler. Keeping this out of the page component
 * matters — a `useState` here would re-render every section on every scroll
 * event, which is what made the homepage scroll feel stuck.
 */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0

    const paint = () => {
      frame = 0
      const el = ref.current
      if (!el) return
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0
      el.style.width = `${Math.min(100, Math.max(0, progress))}%`
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }

    paint()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return <div ref={ref} className="scroll-progress" style={{ width: 0 }} aria-hidden="true" />
}
