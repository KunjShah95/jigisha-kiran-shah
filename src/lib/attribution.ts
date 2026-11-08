/**
 * First-touch lead attribution without a database.
 *
 * Enquiries leave the site as WhatsApp messages, so the channel that brought
 * the visitor (Google, LinkedIn post, Business Profile...) used to be lost.
 * On the first page of a visit we record where the visitor came from — UTM
 * tags first, else the referring site — in sessionStorage (this tab only,
 * cleared when it closes), and form messages carry it as one readable line
 * that Jigisha copies into the lead sheet.
 *
 * Nothing personal is stored: only a channel name, a campaign tag and the
 * landing path. /privacy describes this.
 */
const KEY = 'jks_first_touch';

export interface FirstTouch {
  /** Human-readable channel, e.g. "Google search", "LinkedIn". */
  channel: string;
  /** utm_campaign, e.g. "w01" or "gbp". Empty when absent. */
  campaign: string;
  /** First page of the visit. */
  landing: string;
}

const REFERRERS: Array<[RegExp, string]> = [
  [/(^|\.)google\./, 'Google search'],
  [/(^|\.)bing\.com$/, 'Bing search'],
  [/(^|\.)duckduckgo\.com$/, 'DuckDuckGo'],
  [/(^|\.)(chatgpt\.com|chat\.openai\.com)$/, 'ChatGPT'],
  [/(^|\.)perplexity\.ai$/, 'Perplexity'],
  [/(^|\.)linkedin\.com$|^lnkd\.in$/, 'LinkedIn'],
  [/(^|\.)(facebook\.com|fb\.com)$|^l\.facebook\.com$/, 'Facebook'],
  [/(^|\.)instagram\.com$/, 'Instagram'],
  [/(^|\.)(youtube\.com|youtu\.be)$/, 'YouTube'],
  [/(^|\.)whatsapp\.com$|^wa\.me$/, 'WhatsApp'],
];

const SOURCES: Record<string, string> = {
  google: 'Google',
  gbp: 'Google Business Profile',
  linkedin: 'LinkedIn',
  facebook: 'Facebook',
  instagram: 'Instagram',
  whatsapp: 'WhatsApp',
  youtube: 'YouTube',
};

function classify(): FirstTouch {
  const params = new URLSearchParams(window.location.search);
  const landing = window.location.pathname;
  const source = (params.get('utm_source') || '').toLowerCase();
  const campaign = (params.get('utm_campaign') || '').slice(0, 40);
  if (source) {
    // The GBP website link is tagged utm_source=google&utm_campaign=gbp.
    const channel = campaign === 'gbp' ? SOURCES.gbp : SOURCES[source] ?? source.slice(0, 30);
    return { channel, campaign, landing };
  }
  let host = '';
  try {
    host = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : '';
  } catch {
    host = '';
  }
  if (!host || host.endsWith('jigishakiranshah.in')) return { channel: 'Direct', campaign: '', landing };
  const match = REFERRERS.find(([re]) => re.test(host));
  return { channel: match ? match[1] : host, campaign: '', landing };
}

/** Call once at startup. Keeps the first touch of the visit; later pages don't overwrite it. */
export function captureFirstTouch() {
  if (typeof window === 'undefined') return;
  try {
    if (window.sessionStorage.getItem(KEY)) return;
    window.sessionStorage.setItem(KEY, JSON.stringify(classify()));
  } catch {
    // Storage blocked (private mode, settings): attribution is a nice-to-have.
  }
}

export function getFirstTouch(): FirstTouch | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as FirstTouch) : null;
  } catch {
    return null;
  }
}

/**
 * The line appended to lead messages, e.g. "LinkedIn (w03), landed on /areas/shela".
 * Empty for direct visits: nothing useful to record.
 */
export function firstTouchSummary(): string {
  const t = getFirstTouch();
  if (!t || t.channel === 'Direct') return '';
  return `${t.channel}${t.campaign && t.campaign !== 'gbp' ? ` (${t.campaign})` : ''}, landed on ${t.landing}`;
}
