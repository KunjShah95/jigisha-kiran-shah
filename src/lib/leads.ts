/**
 * Saves an enquiry to /api/lead before the WhatsApp hand-off.
 *
 * Fire-and-forget with keepalive: the request survives the tab switching to
 * WhatsApp, and window.open stays synchronous in the click handler so popup
 * blockers don't stop it. A failed save never blocks the visitor.
 */
export type LeadKind = 'contact' | 'assessment' | 'booking' | 'check';

export interface LeadPayload {
  kind: LeadKind;
  name: string;
  phone: string;
  objective?: string;
  details?: Record<string, string>;
  /** Honeypot — bound to a hidden input; must stay empty. */
  website?: string;
}

const SOURCE_KEY = 'jks_source';

/**
 * First-touch source for this visit (utm_* or referrer host), kept for the
 * session so a lead sent from /contact still says it came from Google or GBP.
 */
export function captureSource() {
  if (typeof window === 'undefined') return;
  try {
    if (sessionStorage.getItem(SOURCE_KEY)) return;
    const q = new URLSearchParams(window.location.search);
    const utm = ['utm_source', 'utm_medium', 'utm_campaign']
      .map((k) => q.get(k))
      .filter(Boolean)
      .join(' / ');
    let ref = '';
    if (document.referrer) {
      const host = new URL(document.referrer).hostname;
      if (host !== window.location.hostname) ref = host;
    }
    const landing = window.location.pathname;
    sessionStorage.setItem(SOURCE_KEY, `${utm || ref || 'direct'} → ${landing}`);
  } catch {
    // storage blocked — source just stays unknown
  }
}

function source() {
  try {
    return sessionStorage.getItem(SOURCE_KEY) || '';
  } catch {
    return '';
  }
}

export function submitLead(lead: LeadPayload): Promise<boolean> {
  const body = JSON.stringify({ ...lead, page: window.location.pathname, source: source() });
  return fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  })
    .then((r) => r.ok)
    .catch(() => false);
}

/** Hidden honeypot input props — spread onto an <input>. */
export const honeypotProps = {
  type: 'text',
  name: 'website',
  tabIndex: -1,
  autoComplete: 'off',
  'aria-hidden': true,
  className: 'absolute -left-[9999px] w-px h-px opacity-0',
} as const;
