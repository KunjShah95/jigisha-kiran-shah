import { useCallback } from 'react'

/**
 * Returns an onMouseMove handler that writes the cursor position (relative to
 * the hovered element) into --mx / --my CSS vars. Pair with `.spotlight-card`.
 * Pure CSS-var write — no re-render, cheap on every move.
 */
export function useSpotlight() {
  return useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }, [])
}
