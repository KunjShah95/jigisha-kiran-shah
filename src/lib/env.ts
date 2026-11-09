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

/**
 * Exclude your own devices from analytics. Open the site once with
 * ?notrack=1 on each phone/computer you use (owner, developer, family);
 * ?notrack=0 turns counting back on. Stored per device in localStorage.
 * Without this, test visits and the owner's own checks inflate Vercel
 * Analytics: the first year's data showed 23% US visitors, 61% desktop
 * and vercel.com as a referrer on a local Ahmedabad site.
 */
const NOTRACK_KEY = 'jks_notrack';

export function applyTrackingOptOut() {
  if (typeof window === 'undefined') return;
  try {
    const flag = new URLSearchParams(window.location.search).get('notrack');
    if (flag === '1') window.localStorage.setItem(NOTRACK_KEY, '1');
    if (flag === '0') window.localStorage.removeItem(NOTRACK_KEY);
  } catch {
    // Storage blocked: counting stays on.
  }
}

export function isTrackingDisabled(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.localStorage.getItem(NOTRACK_KEY) === '1';
  } catch {
    return false;
  }
}
