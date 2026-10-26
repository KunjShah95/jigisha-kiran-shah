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

export interface LeadResult {
  /** The enquiry was stored in at least one destination. */
  ok: boolean;
  /** How many destinations accepted it (0 = nowhere configured or all failed). */
  saved: number;
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

export function submitLeadResult(lead: LeadPayload): Promise<LeadResult> {
  const body = JSON.stringify({ ...lead, page: window.location.pathname, source: source() });
  return fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  })
    .then(async (r) => {
      // `saved` is the number of destinations that actually stored the lead.
      // A 200 with saved: 0 means nothing was captured (no Sheet / email
      // configured) — callers must treat that as a failure, not a success.
      const data = (await r.json().catch(() => null)) as { saved?: number } | null;
      const saved = Number(data?.saved) || 0;
      return { ok: r.ok && saved > 0, saved };
    })
    .catch(() => ({ ok: false, saved: 0 }));
}

/** True only when the enquiry was actually stored somewhere. */
export async function submitLead(lead: LeadPayload): Promise<boolean> {
  const result = await submitLeadResult(lead);
  return result.ok;
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
