import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'

/**
 * Route path that was on screen the last time we showed something.
 *
 * Module scope on purpose: lazy routes suspend, so this component is unmounted
 * and remounted around the Suspense fallback on the first visit to any page.
 * A ref would reset on that remount and swallow the animation for exactly the
 * navigations that need it most.
 */
let shownPath: string | null = null

/**
 * One-beat enter transition whenever the route changes.
 *
 * Deliberate constraints, all for reasons this site has already paid for once:
 *
 * - **Enter only.** Holding the old page on screen so it can animate out would
 *   delay every navigation by the length of the exit, and this is a lead-
 *   generation site — the next page should appear as soon as React commits it.
 * - **Keyed on `pathname`.** In-page state changes (tabs, filters, `?goal=`
 *   deep links on /book, the language toggle on /protection-check) keep the
 *   same path, so they never re-animate the whole page.
 * - **No animation on first paint.** The prerendered HTML must be visible the
 *   instant it renders; a fade-in on load would push LCP out by the duration of
 *   the animation for no benefit, and would fight hydration.
 * - **Web Animations API, not a class toggle.** The effect is discarded by the
 *   browser when it finishes, so no `transform` is left on a wrapper that
 *   contains `position: fixed` children (the reading-progress bar), and no
 *   reflow hack is needed to restart the animation on a fast second click.
 * - **Reduced motion is checked explicitly** rather than relying on the global
 *   `animation-duration: 0.01ms` rule, because that rule only touches CSS
 *   animations — not an imperative `element.animate()` call.
 *
 * It also hides something that used to be visible: `useSEO` jumps to the top of
 * the new page in an effect, so without this the outgoing scroll position
 * flashes for a frame before the jump.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (shownPath === pathname) return
    const isFirstPaint = shownPath === null
    shownPath = pathname
    if (isFirstPaint) return

    const element = wrapper.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // No cleanup on purpose: cancelling on StrictMode's dev-only double mount
    // would erase the animation before it runs, and a finished animation
    // removes its own effect.
    element.animate(
      [
        { opacity: 0, transform: 'translate3d(0, 12px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      ],
      { duration: 420, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
    )
  }, [pathname])

  return <div ref={wrapper}>{children}</div>
}
