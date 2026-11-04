import type { CSSProperties, ElementType, ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface GlowCardProps {
  children: ReactNode
  className?: string
  /** Colour of the travelling ring. */
  glowColor?: string
  /** Element to render. Defaults to a plain div. */
  as?: ElementType
  style?: CSSProperties
}

/**
 * Aceternity "hover border gradient": wraps content and reveals a conic
 * gradient ring that sweeps the border on hover or keyboard focus.
 *
 * The ring is a real child element (`.glow-ring`) rather than a pseudo-element,
 * so it composes with `.spotlight-card`, which already owns `::before`. The
 * consumer must carry the `group` class for the reveal to fire.
 */
export function GlowCard({
  children,
  className,
  glowColor = 'rgba(196, 119, 42, 0.9)',
  as: Tag = 'div',
  style,
}: GlowCardProps) {
  return (
    <Tag
      className={cn('group relative', className)}
      style={{ ...style, '--glow-color': glowColor } as CSSProperties}
    >
      <span aria-hidden="true" className="glow-ring" />
      {children}
    </Tag>
  )
}
