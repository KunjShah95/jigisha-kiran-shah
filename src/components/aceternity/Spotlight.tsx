import { cn } from '../../lib/utils'

interface SpotlightProps {
  className?: string
  /** Tint of the beam. Defaults to brand gold. */
  fill?: string
}

/**
 * Aceternity "spotlight" signature: a heavily blurred ellipse that fades in
 * once on mount and then holds, casting a cone of light behind the content.
 *
 * Rendered as inline SVG rather than a radial-gradient div so the ellipse's
 * rotation is exact at any viewport width. The animation lives in index.css
 * (`.spotlight-cone`) and is disabled under prefers-reduced-motion.
 */
export function Spotlight({ className, fill = '#c4772a' }: SpotlightProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        'spotlight-cone pointer-events-none absolute z-0 h-[169%] w-[138%] select-none lg:w-[84%]',
        className
      )}
      viewBox="0 0 3787 2842"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#spotlight-blur)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity="0.32"
        />
      </g>
      <defs>
        <filter
          id="spotlight-blur"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  )
}
