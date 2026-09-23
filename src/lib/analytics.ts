import { track } from '@vercel/analytics';

/**
 * Conversion + engagement events for Vercel Web Analytics.
 * Wired via a single delegated listener (initAnalytics) so every
 * tel:/wa.me/mailto link and every form works without per-component edits.
 * Events appear in Vercel Dashboard → Analytics → Events.
 */
export type ConversionEvent =
  | 'contact_call'
  | 'contact_whatsapp'
  | 'contact_email'
  | 'directions_click'
  | 'consultation_form_submit'
  | 'calculator_whatsapp_cta';

export function trackEvent(event: ConversionEvent, props?: Record<string, string>) {
  try {
    track(event, { page: window.location.pathname, ...props });
  } catch {
    // Analytics blocked (adblock) — never break the UX.
  }
}

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof document === 'undefined') return;
  initialized = true;

  document.addEventListener('click', (e) => {
    const anchor = (e.target as HTMLElement).closest?.('a[href]');
    if (!anchor) return;
    const href = anchor.getAttribute('href') || '';
    if (href.startsWith('tel:')) trackEvent('contact_call');
    else if (href.includes('wa.me')) {
      // Lead form and calculator CTAs carry prefilled text — tag them precisely.
      if (href.includes('New%20Inquiry') || href.includes('New%20Inquiry:')) {
        trackEvent('consultation_form_submit');
      } else {
        trackEvent('contact_whatsapp');
      }
    } else if (href.startsWith('mailto:')) trackEvent('contact_email');
    else if (href.includes('share.google')) trackEvent('directions_click');
  });

  // Belt-and-braces: any form submit counts as a lead attempt even if
  // the wa.me redirect shape changes later.
  document.addEventListener('submit', () => trackEvent('consultation_form_submit'));
}
