/**
 * Google Apps Script: receives website leads from /api/lead and appends a row.
 *
 * Setup (5 minutes, Jigisha's Google account):
 * 1. Create a Google Sheet "Website leads". Extensions → Apps Script.
 * 2. Paste this file, Save.
 * 3. Deploy → New deployment → type "Web app".
 *    Execute as: Me. Who has access: Anyone. Deploy, authorise, copy the /exec URL.
 * 4. Vercel → Project → Settings → Environment Variables (Production):
 *    LEAD_WEBHOOK_URL = <the /exec URL>. Redeploy.
 * 5. Test: submit the form on /book. A row appears within seconds.
 *    Rows from preview deployments have env = "test".
 *
 * The URL is a write-only endpoint; keep it out of the repo.
 */
const HEADERS = ['receivedAt', 'env', 'kind', 'name', 'phone', 'objective', 'page', 'source', 'details', 'status', 'notes'];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  const lead = JSON.parse(e.postData.contents);
  // Leading apostrophe stops Sheets from treating "+91…" or "=…" as a formula.
  const safe = (v) => {
    const s = v == null ? '' : String(v);
    return /^[=+\-@]/.test(s) ? "'" + s : s;
  };
  sheet.appendRow(HEADERS.map((h) => (h === 'status' ? 'new' : h === 'notes' ? '' : safe(lead[h]))));
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
