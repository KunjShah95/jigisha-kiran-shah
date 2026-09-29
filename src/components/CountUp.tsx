import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  end: number
  /** decimals to show, e.g. 1 for "5.0" */
  decimals?: number
  suffix?: string
  prefix?: string
  /** ms */
  duration?: number
  className?: string
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Counts from 0 to `end` once, the first time it scrolls into view.
 * Reduced-motion users see the final value immediately.
 */
export default function CountUp({
  end,
  decimals = 0,
  suffix = '',
  prefix = '',
  duration = 1600,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  // Start at the final value so prerendered HTML (what crawlers and AI bots
  // read) shows real numbers; the animation resets to 0 only on the client.
  const [value, setValue] = useState(end)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      setValue(end)
      return
    }
    if (!done.current) setValue(0)

    const run = () => {
      if (done.current) return
      done.current = true
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        // easeOutExpo for a premium settle
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
        setValue(end * eased)
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run()
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
