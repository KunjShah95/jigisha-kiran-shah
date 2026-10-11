import { track } from '@vercel/analytics';

/**
 * Conversion + engagement events for Vercel Web Analytics (and GA4 when
 * VITE_GA4_ID is set — see initGA4).
 * Wired via a single delegated listener (initAnalytics) so every
 * tel:/wa.me/mailto link works without per-component edits. Links can carry
 * data-cta="hero" etc. so the dashboard shows WHICH button converted.
 * Forms call trackEvent('consultation_form_submit') themselves, with the
 * visitor's objective, so leads can be split by intent.
 * Events appear in Vercel Dashboard → Analytics → Events.
 */
export type ConversionEvent =
  | 'contact_call'
  | 'contact_whatsapp'
  | 'contact_email'
  | 'directions_click'
  | 'consultation_form_submit'
  | 'objective_select'
  | 'share_whatsapp';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(event: ConversionEvent, props?: Record<string, string>) {
  const payload = { page: window.location.pathname, ...props };
  try {
    track(event, payload);
  } catch {
    // Analytics blocked (adblock) — never break the UX.
  }
  try {
    window.gtag?.('event', event, payload);
  } catch {
    // ignore
  }
}

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof document === 'undefined') return;
  initialized = true;

  document.addEventListener('click', (e) => {
    const anchor = (e.target as HTMLElement).closest?.('a[href]') as HTMLAnchorElement | null;
    if (!anchor) return;
    const href = anchor.getAttribute('href') || '';
    const props = anchor.dataset.cta ? { cta: anchor.dataset.cta } : undefined;
    if (href.startsWith('tel:')) trackEvent('contact_call', props);
    else if (href.includes('wa.me/?')) trackEvent('share_whatsapp', props);
    else if (href.includes('wa.me')) trackEvent('contact_whatsapp', props);
    else if (href.startsWith('mailto:')) trackEvent('contact_email', props);
    else if (href.includes('share.google')) trackEvent('directions_click', props);
  });
}

/**
 * Optional GA4 (needed for Search Console ↔ conversion reporting and
 * Google Ads later). Loads only when VITE_GA4_ID is set at build time and
 * the page runs on the production host.
 */
export function initGA4(measurementId: string | undefined) {
  if (!measurementId || typeof document === 'undefined' || window.gtag) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);
}
