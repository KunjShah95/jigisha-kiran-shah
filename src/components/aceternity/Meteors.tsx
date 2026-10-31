import { useMemo } from 'react'
import { cn } from '../../lib/utils'

interface MeteorsProps {
  count?: number
  className?: string
}

/**
 * Aceternity "meteors" signature: thin gradient streaks drifting diagonally
 * across a dark surface. Pure CSS transform/opacity so it's cheap and respects
 * prefers-reduced-motion via the global rule in index.css.
 */
export function Meteors({ count = 14, className }: MeteorsProps) {
  const meteors = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 97) % 100}%`,
        delay: `${(i * 0.37) % 6}s`,
        duration: `${5 + (i % 5)}s`,
      })),
    [count]
  )

  return (
    <div aria-hidden="true" className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {meteors.map((m) => (
        <span
          key={m.id}
          className="meteor absolute top-[-10%] h-0.5 w-0.5 rounded-full bg-gold shadow-[0_0_0_1px_rgba(196,119,42,0.1)]"
          style={{
            left: m.left,
            animationDelay: m.delay,
            animationDuration: m.duration,
          }}
        />
      ))}
    </div>
  )
}
