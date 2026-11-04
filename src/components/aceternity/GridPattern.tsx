import { useId } from 'react'
import { cn } from '../../lib/utils'

interface GridPatternProps {
  className?: string
  /** Cell size in px. */
  size?: number
  /** Render the 1px grid lines as well as the corner dots. */
  lines?: boolean
  /** Stroke colour for the lines/dots. */
  color?: string
}

/**
 * Aceternity "grid and dot background": an SVG grid that fades out toward the
 * edges via a radial mask, plus an optional dot at each intersection.
 *
 * The pattern is drawn with `patternUnits="userSpaceOnUse"` so it stays crisp
 * at any size and costs nothing on the main thread. `useId` keeps the defs
 * unique when several grids mount on one page.
 */
export function GridPattern({
  className,
  size = 56,
  lines = true,
  color = 'currentColor',
}: GridPatternProps) {
  const uid = useId().replace(/:/g, '')
  const gridId = `grid-${uid}`
  const fadeId = `grid-fade-${uid}`

  return (
    <svg
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={gridId}
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          x={-1}
          y={-1}
        >
          <path
            d={`M.5 ${size}V.5H${size}`}
            fill="none"
            stroke={color}
            strokeOpacity="0.35"
            strokeWidth={lines ? 1 : 0}
          />
        </pattern>
        <radialGradient id={fadeId}>
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={`${fadeId}-mask`}>
          <rect width="100%" height="100%" fill={`url(#${fadeId})`} />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${gridId})`} mask={`url(#${fadeId}-mask)`} />
    </svg>
  )
}
