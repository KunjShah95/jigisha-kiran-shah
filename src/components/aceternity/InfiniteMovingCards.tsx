import type { CSSProperties, ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface InfiniteMovingCardsProps {
  /** One node per card. Rendered twice; the copy is hidden from screen readers. */
  items: ReactNode[]
  /** Travel direction. */
  direction?: 'left' | 'right'
  /** Seconds for one full pass. Longer = slower. */
  durationSec?: number
  /** Freeze the row while the pointer or keyboard focus is inside it. */
  pauseOnHover?: boolean
  /** Fade the left and right edges into the background. */
  fadeEdges?: boolean
  className?: string
  /** Extra classes applied to each card slot (gap/padding live here). */
  itemClassName?: string
}

/**
 * Aceternity "infinite moving cards": a seamless marquee of cards.
 *
 * Two identical groups sit in one track; the CSS animation translates the
 * track by exactly -50%, so the second group lands where the first began and
 * the loop never seams. All motion is CSS (see `.marquee-track` in index.css),
 * which keeps it off the main thread and lets prefers-reduced-motion turn it
 * into a static wrapped row with no JS branch.
 */
export function InfiniteMovingCards({
  items,
  direction = 'left',
  durationSec = 48,
  pauseOnHover = true,
  fadeEdges = true,
  className,
  itemClassName,
}: InfiniteMovingCardsProps) {
  const style = { '--marquee-duration': `${durationSec}s` } as CSSProperties

  const group = (hidden: boolean) => (
    <div
      className={cn('flex shrink-0', itemClassName)}
      role={hidden ? undefined : 'list'}
      aria-hidden={hidden || undefined}
    >
      {items.map((item, i) => (
        <div key={i} {...(hidden ? {} : { role: 'listitem' })} className="shrink-0">
          {item}
        </div>
      ))}
    </div>
  )

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        pauseOnHover && 'marquee-pause',
        className
      )}
      style={
        fadeEdges
          ? {
              maskImage:
                'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
            }
          : undefined
      }
    >
      <div
        className="marquee-track"
        data-direction={direction === 'right' ? 'reverse' : undefined}
        style={style}
      >
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}
