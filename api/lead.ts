/**
 * POST /api/lead — saves every website enquiry before WhatsApp opens.
 *
 * Why: the forms hand off to WhatsApp, and a visitor who doesn't press send
 * there used to leave no trace. Now the enquiry is stored first, so Jigisha
 * can call back and lead counts are real.
 *
 * Destinations (any combination, set in Vercel → Settings → Environment Variables):
 *   LEAD_WEBHOOK_URL   Google Apps Script web app that appends a row to a Sheet
 *                      (script in docs/lead-capture-apps-script.gs)
 *   RESEND_API_KEY     + LEAD_EMAIL_TO (and optional LEAD_EMAIL_FROM): email alert
 * With neither set, the lead is written to the function log so nothing is lost
 * while setup is pending.
 */

const PROD_ORIGINS = new Set(['https://www.jigishakiranshah.in', 'https://jigishakiranshah.in']);
const KINDS = new Set(['contact', 'assessment', 'booking', 'check']);
const MAX = 600;

type Lead = {
  kind: string;
  name: string;
  phone: string;
  objective: string;
  page: string;
  source: string;
  details: Record<string, string>;
};

const clean = (v: unknown, max = MAX) =>
  typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max) : '';

function parse(body: unknown): Lead | string {
  if (!body || typeof body !== 'object') return 'invalid body';
  const b = body as Record<string, unknown>;
  // Honeypot: real visitors never see or fill this field.
  if (clean(b.website)) return 'spam';
  const kind = clean(b.kind, 20);
  if (!KINDS.has(kind)) return 'invalid kind';
  const name = clean(b.name, 80);
  const phone = clean(b.phone, 20);
  const digits = phone.replace(/\D/g, '');
  if (!name) return 'name required';
  if (digits.length < 10 || digits.length > 13) return 'invalid phone';
  const details: Record<string, string> = {};
  if (b.details && typeof b.details === 'object') {
    for (const [k, v] of Object.entries(b.details as Record<string, unknown>).slice(0, 30)) {
      const val = clean(v);
      if (val) details[clean(k, 40)] = val;
    }
  }
  return {
    kind,
    name,
    phone,
    objective: clean(b.objective, 40),
    page: clean(b.page, 200),
    source: clean(b.source, 200),
    details,
  };
}

function summary(lead: Lead) {
  const rows = [
    `Type: ${lead.kind}`,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    lead.objective && `Goal: ${lead.objective}`,
    lead.page && `Page: ${lead.page}`,
    lead.source && `Source: ${lead.source}`,
    ...Object.entries(lead.details).map(([k, v]) => `${k}: ${v}`),
  ];
  return rows.filter(Boolean).join('\n');
}

async function toWebhook(url: string, record: Record<string, unknown>) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record),
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`webhook ${res.status}`);
}

async function toEmail(key: string, to: string, from: string, lead: Lead, env: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: to.split(',').map((s) => s.trim()),
      subject: `${env === 'production' ? '' : '[TEST] '}New website enquiry: ${lead.name} (${lead.objective || lead.kind})`,
      text: `${summary(lead)}\n\nCall: tel:${lead.phone.replace(/[^\d+]/g, '')}`,
    }),
  });
  if (!res.ok) throw new Error(`email ${res.status}`);
}

const json = (status: number, data: unknown, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers },
  });

/**
 * GET /api/lead — is this deployment actually storing leads?
 *
 * Added after a live audit found the endpoint answering
 * `{"ok":true,"saved":0}` on every enquiry: the forms looked successful while
 * every lead was being dropped into a log that expires. Open
 * https://www.jigishakiranshah.in/api/lead in a browser to check.
 */
export async function GET() {
  const webhook = Boolean(process.env.LEAD_WEBHOOK_URL);
  const email = Boolean(process.env.RESEND_API_KEY && process.env.LEAD_EMAIL_TO);
  const configured = webhook || email;
  return json(configured ? 200 : 503, {
    ok: configured,
    destinations: { webhook, email },
    message: configured
      ? 'Leads are being stored.'
      : 'NO LEAD DESTINATION CONFIGURED. Form submissions are only written to the function log and will be lost. Set LEAD_WEBHOOK_URL (Google Sheet) or RESEND_API_KEY + LEAD_EMAIL_TO in Vercel, then redeploy. See docs/LEADS-ROOT-CAUSE.md.',
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json(400, { ok: false, error: 'invalid json' });
  }
  const lead = parse(body);
  // Pretend success to bots so they don't retry with variations.
  if (lead === 'spam') return json(200, { ok: true });
  if (typeof lead === 'string') return json(400, { ok: false, error: lead });

  const origin = request.headers.get('origin') || '';
  const env = PROD_ORIGINS.has(origin) ? 'production' : 'test';
  const record = {
    receivedAt: new Date().toISOString(),
    env,
    ...lead,
    details: Object.entries(lead.details)
      .map(([k, v]) => `${k}: ${v}`)
      .join(' | '),
  };

  const { LEAD_WEBHOOK_URL, RESEND_API_KEY, LEAD_EMAIL_TO, LEAD_EMAIL_FROM } = process.env;
  const jobs: Promise<void>[] = [];
  if (LEAD_WEBHOOK_URL) jobs.push(toWebhook(LEAD_WEBHOOK_URL, record));
  if (RESEND_API_KEY && LEAD_EMAIL_TO) {
    jobs.push(toEmail(RESEND_API_KEY, LEAD_EMAIL_TO, LEAD_EMAIL_FROM || 'Website <onboarding@resend.dev>', lead, env));
  }

  if (jobs.length === 0) {
    console.warn(
      'LEAD DROPPED — no destination configured (LEAD_WEBHOOK_URL / RESEND_API_KEY). Lead follows:',
      JSON.stringify(record),
    );
    return json(200, {
      ok: true,
      saved: 0,
      warning: 'no destination configured — lead not stored',
    });
  }

  const results = await Promise.allSettled(jobs);
  const saved = results.filter((r) => r.status === 'fulfilled').length;
  for (const r of results) if (r.status === 'rejected') console.error('lead destination failed', r.reason);
  if (saved === 0) {
    // Every destination failed — keep the lead in the log rather than lose it.
    console.log('LEAD (all destinations failed)', JSON.stringify(record));
    return json(502, { ok: false, saved: 0 });
  }
  return json(200, { ok: true, saved });
}
