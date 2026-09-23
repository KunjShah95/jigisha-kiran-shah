/**
 * Environment guards for deployment hygiene.
 *
 * Problem: 20+ preview/staging deployments pollute Vercel Analytics and
 * risk AI crawlers indexing non-production URLs.
 *
 * Fix (no dashboard access needed):
 * - Analytics renders ONLY on the production host.
 * - Every page forces noindex on non-production hosts (useSEO honors this).
 * (Vercel also auto-serves X-Robots-Tag: noindex on *.vercel.app previews;
 *  enabling Deployment Protection in the dashboard is still recommended
 *  as the stronger gate — see README note in commit message.)
 */
export const PROD_HOSTS = new Set([
  'www.jigishakiranshah.in',
  'jigishakiranshah.in',
]);

export function isProductionHost(): boolean {
  if (typeof window === 'undefined') return true;
  return PROD_HOSTS.has(window.location.hostname);
}
