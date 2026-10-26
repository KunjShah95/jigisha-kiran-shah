/**
 * Is the deployed site actually storing leads?
 *
 * Usage:
 *   npm run check:leads
 *   npm run check:leads -- https://preview-url.vercel.app
 *
 * The failure this exists for: /api/lead answered {"ok":true,"saved":0} on
 * every enquiry while the forms told visitors their message was sent. Nothing
 * was stored. Run this after any deploy that touches forms or environment
 * variables.
 */
const base = (process.argv[2] || 'https://www.jigishakiranshah.in').replace(/\/$/, '');
const url = `${base}/api/lead`;

const res = await fetch(url, { headers: { Accept: 'application/json' } });
const body = await res.json().catch(() => ({}));

console.log(`GET ${url} -> ${res.status}`);
console.log(JSON.stringify(body, null, 2));

if (res.ok && body.ok) {
  console.log('\nPASS — leads are being stored.');
  process.exit(0);
}

console.error(
  '\nFAIL — leads are NOT being stored. Set LEAD_WEBHOOK_URL (Google Sheet) or\n' +
    'RESEND_API_KEY + LEAD_EMAIL_TO in Vercel, then redeploy.\n' +
    'Step-by-step: docs/LEADS-ROOT-CAUSE.md §2',
);
process.exit(1);
