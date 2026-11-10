import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Trash2, Printer, Share2, MessageCircle, AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { faqJsonLd, PHONE_DISPLAY, SITE_URL } from '../lib/seo';
import { whatsappUrl } from '../lib/contact';
import { trackEvent } from '../lib/analytics';
import { Field, inputClass } from '../components/lead-fields';

/**
 * Family Policy Card — a one-page summary of every LIC policy a family holds.
 *
 * Why it exists (docs/PRODUCT-INTELLIGENCE-REPORT.md §11): the largest
 * non-brand search intent is people who already own policies, and the
 * practice's own principle is that "a claim becomes a nightmare when the
 * family does not know the policy exists".
 *
 * Privacy: everything stays in the browser tab. Nothing is stored or sent;
 * analytics record only that a card was printed or shared, never its
 * contents. Full policy numbers are deliberately not asked for.
 */

interface PolicyRow {
  id: number;
  insured: string;
  plan: string;
  sumAssured: string; // rupees, digits only
  maturity: string; // yyyy-mm from <input type="month">
  nominee: string;
  branch: string;
  last4: string;
}

const FAQS = [
  {
    q: 'How do I keep a list of my family’s LIC policies?',
    a: 'Write one page with each policy’s plan, sum assured, maturity date, nominee and servicing branch, and give a copy to one trusted family member. This free tool makes that page for you, and flags missing nominees and maturities that are due.',
  },
  {
    q: 'Is the information I enter stored anywhere?',
    a: 'No. The card is built in your browser and disappears when you close the tab. Nothing is sent to this website or anyone else unless you choose to print or share it yourself. Full policy numbers are not needed.',
  },
  {
    q: 'What should I do if the card shows a missing nominee?',
    a: 'Register a nominee with the servicing branch as soon as possible. Without one, a claim needs legal-heir documents and can take months. Jigisha Kiran Shah can help with the form for any LIC policy, whoever sold it.',
  },
];

const rupees = (n: number) => `₹${new Intl.NumberFormat('en-IN').format(n)}`;
const digits = (s: string) => s.replace(/\D/g, '');
const emptyRow = (id: number): PolicyRow => ({ id, insured: '', plan: '', sumAssured: '', maturity: '', nominee: '', branch: '', last4: '' });

function monthLabel(yyyymm: string) {
  if (!/^\d{4}-\d{2}$/.test(yyyymm)) return '—';
  const [y, m] = yyyymm.split('-').map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
}

/** Whole months from now until the maturity month (negative = already past). */
function monthsUntil(yyyymm: string, now: Date) {
  if (!/^\d{4}-\d{2}$/.test(yyyymm)) return null;
  const [y, m] = yyyymm.split('-').map(Number);
  return (y - now.getFullYear()) * 12 + (m - 1 - now.getMonth());
}

interface Flag {
  text: string;
  to: string;
  label: string;
}

/**
 * One policy's inputs as a self-contained card: a header with the policy
 * number and remove action, then a two-column field grid. Every grid child
 * gets `min-w-0` so native controls (notably `type="month"`, which has a
 * wide intrinsic width in Chrome) shrink to the card instead of overflowing.
 */
function PolicyInputCard({
  row: r,
  index,
  canRemove,
  onChange,
  onRemove,
}: {
  row: PolicyRow;
  index: number;
  canRemove: boolean;
  onChange: (key: keyof PolicyRow, value: string) => void;
  onRemove: () => void;
}) {
  const titleId = `pc-policy-${r.id}-title`;
  const summary = [r.plan.trim(), r.insured.trim()].filter(Boolean).join(' · ');
  return (
    <div role="group" aria-labelledby={titleId} className="min-w-0 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-border bg-cream/60 px-5 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-midnight text-sm font-bold text-white" aria-hidden="true">
            {index + 1}
          </span>
          <div className="min-w-0">
            <h3 id={titleId} className="text-sm font-bold text-midnight">Policy {index + 1}</h3>
            {summary && <p className="truncate text-xs text-gray-500">{summary}</p>}
          </div>
        </div>
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove policy ${index + 1}`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold text-gray-500 hover:bg-red-50 hover:text-red-700 min-h-11"
          >
            <Trash2 className="w-4 h-4" aria-hidden="true" /> <span className="hidden sm:inline">Remove</span>
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
        <Field id={`pc-plan-${r.id}`} label="Plan name">
          <input id={`pc-plan-${r.id}`} value={r.plan} onChange={(e) => onChange('plan', e.target.value)} placeholder="e.g. Jeevan Labh" className={inputClass} />
        </Field>
        <Field id={`pc-insured-${r.id}`} label="Life insured">
          <input id={`pc-insured-${r.id}`} value={r.insured} onChange={(e) => onChange('insured', e.target.value)} placeholder="e.g. Kiran" className={inputClass} />
        </Field>
        <Field id={`pc-sa-${r.id}`} label="Sum assured (₹)">
          <input id={`pc-sa-${r.id}`} inputMode="numeric" value={r.sumAssured} onChange={(e) => onChange('sumAssured', digits(e.target.value))} placeholder="e.g. 1000000" className={inputClass} />
        </Field>
        <Field id={`pc-mat-${r.id}`} label="Maturity month">
          <input id={`pc-mat-${r.id}`} type="month" value={r.maturity} onChange={(e) => onChange('maturity', e.target.value)} className={inputClass} />
        </Field>
        <Field id={`pc-nom-${r.id}`} label="Nominee">
          <input id={`pc-nom-${r.id}`} value={r.nominee} onChange={(e) => onChange('nominee', e.target.value)} placeholder="Leave blank if unsure" className={inputClass} />
        </Field>
        <Field id={`pc-branch-${r.id}`} label="Servicing branch">
          <input id={`pc-branch-${r.id}`} value={r.branch} onChange={(e) => onChange('branch', e.target.value)} placeholder="Printed on the policy bond" className={inputClass} />
        </Field>
        <div className="sm:col-span-2">
          <Field id={`pc-last4-${r.id}`} label="Last 4 digits of policy no. (optional)">
            <input id={`pc-last4-${r.id}`} inputMode="numeric" maxLength={4} value={r.last4} onChange={(e) => onChange('last4', digits(e.target.value).slice(0, 4))} placeholder="1234" className={`${inputClass} sm:max-w-[calc(50%-0.5rem)]`} />
          </Field>
        </div>
      </div>
    </div>
  );
}

export default function PolicyCardPage() {
  useSEO({
    title: 'Family LIC Policy Card — Free One-Page Summary Tool',
    description:
      'List your family’s LIC policies on one printable page: plan, cover, maturity, nominee and branch. Flags missing nominees and due maturities. Nothing is stored.',
    path: '/policy-card',
    keywords: 'LIC policy list format, family insurance summary, list of LIC policies, LIC policy record sheet, check nominee LIC policy',
    breadcrumbLabel: 'Family policy card',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        '@id': `${SITE_URL}/policy-card#app`,
        name: 'Family LIC Policy Card',
        url: `${SITE_URL}/policy-card`,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any (runs in the browser)',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        provider: { '@id': `${SITE_URL}/#person` },
      },
      faqJsonLd(FAQS),
    ],
  });

  const [family, setFamily] = useState('');
  const [income, setIncome] = useState('');
  const [rows, setRows] = useState<PolicyRow[]>([emptyRow(1)]);
  const [nextId, setNextId] = useState(2);

  const update = (id: number, key: keyof PolicyRow, value: string) =>
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, [key]: value } : r)));
  const addRow = () => {
    setRows((rs) => [...rs, emptyRow(nextId)]);
    setNextId((n) => n + 1);
  };
  const removeRow = (id: number) => setRows((rs) => (rs.length > 1 ? rs.filter((r) => r.id !== id) : rs));

  // A row counts once it has a plan or a sum assured.
  const filled = rows.filter((r) => r.plan.trim() || digits(r.sumAssured));
  const hasCard = filled.length > 0;
  const now = new Date();
  const total = filled.reduce((s, r) => s + (Number(digits(r.sumAssured)) || 0), 0);
  const incomeNum = Number(digits(income)) || 0;
  const title = `${family.trim() || 'Our family'} — LIC policy summary`;

  const flags: Flag[] = [];
  for (const r of filled) {
    const name = `${r.plan.trim() || 'Policy'}${r.insured.trim() ? ` (${r.insured.trim()})` : ''}`;
    if (!r.nominee.trim()) {
      flags.push({ text: `${name}: no nominee noted. Without one, a claim needs legal-heir papers.`, to: '/services/nominee-change', label: 'How to register a nominee' });
    }
    const m = monthsUntil(r.maturity, now);
    if (m !== null && m < 0) {
      flags.push({ text: `${name}: maturity date has passed. Check that the amount was received.`, to: '/services/lic-policy-tracing', label: 'Trace a policy or unclaimed amount' });
    } else if (m !== null && m <= 12) {
      flags.push({ text: `${name}: matures in ${m === 0 ? 'this month' : `${m} month${m === 1 ? '' : 's'}`}. Keep the policy bond and bank details ready.`, to: '/guides/lic-maturity-claim-process', label: 'Maturity claim checklist' });
    }
  }
  if (incomeNum > 0 && total > 0 && total < incomeNum * 10) {
    flags.push({
      text: `Total sum assured (${rupees(total)}) is below 10× the main earner’s yearly income (${rupees(incomeNum * 10)}). A common starting point is 10–15× income plus loans.`,
      to: '/protection-check',
      label: 'Check your cover gap',
    });
  }

  const shareText = [
    title,
    ...filled.map((r) =>
      [
        `• ${r.plan.trim() || 'Policy'}${r.last4 ? ` (…${digits(r.last4)})` : ''}`,
        r.insured.trim() && `life insured: ${r.insured.trim()}`,
        digits(r.sumAssured) && `cover ${rupees(Number(digits(r.sumAssured)))}`,
        r.maturity && `matures ${monthLabel(r.maturity)}`,
        `nominee: ${r.nominee.trim() || 'NOT NOTED'}`,
        r.branch.trim() && `branch: ${r.branch.trim()}`,
      ]
        .filter(Boolean)
        .join(', '),
    ),
    '',
    'Made with the free family policy card: https://www.jigishakiranshah.in/policy-card',
  ].join('\n');

  const reviewText = [
    'Hi Jigisha ben, I made a family policy card on your website and would like a review.',
    `Policies listed: ${filled.length}.`,
    ...(flags.length ? ['Points it flagged:', ...flags.map((f) => `- ${f.text}`)] : []),
  ].join('\n');

  return (
    <div className="pt-20 lg:pt-24 pb-16 lg:pb-24 bg-cream">
      <div className="container max-w-5xl">
        <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-4 print:hidden">
          <Link to="/" className="hover:text-gold-dark">Home</Link>
          {' · '}
          <span aria-current="page">Family policy card</span>
        </nav>

        <header className="mb-8 max-w-3xl print:hidden">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark mb-3">Free tool · nothing is stored</p>
          <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">Your family’s LIC policies, on one page</h1>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-light">
            A claim becomes hard not when the policy fails, but when the family doesn’t know it exists. List each policy below,
            then print the card or share it with one family member. It also flags missing nominees and maturities that are due.
          </p>
        </header>

        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] gap-8 items-start">
          {/* ---- Inputs ---- */}
          <section aria-labelledby="pc-inputs" className="min-w-0 space-y-5 print:hidden">
            <h2 id="pc-inputs" className="sr-only">Enter your policies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm">
              <Field id="pc-family" label="Family name">
                <input id="pc-family" value={family} onChange={(e) => setFamily(e.target.value)} placeholder="e.g. Shah family" className={inputClass} />
              </Field>
              <Field id="pc-income" label="Main earner’s yearly income (₹, optional)">
                <input id="pc-income" inputMode="numeric" value={income} onChange={(e) => setIncome(digits(e.target.value))} placeholder="e.g. 1200000" className={inputClass} />
              </Field>
            </div>

            {rows.map((r, i) => (
              <PolicyInputCard
                key={r.id}
                row={r}
                index={i}
                canRemove={rows.length > 1}
                onChange={(key, value) => update(r.id, key, value)}
                onRemove={() => removeRow(r.id)}
              />
            ))}

            <button type="button" onClick={addRow} className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-sm font-bold text-midnight hover:border-gold/60 min-h-11">
              <Plus className="w-4 h-4" aria-hidden="true" /> Add another policy
            </button>
            <p className="text-xs text-gray-500 leading-relaxed">
              Nothing you type leaves this page. Don’t enter full policy numbers, bank or medical details.{' '}
              <Link to="/privacy" className="underline underline-offset-2">Privacy policy</Link>
            </p>
          </section>

          {/* ---- The card ---- */}
          <section aria-labelledby="pc-card-title" className="min-w-0 lg:sticky lg:top-24">
            <div id="policy-card" className="rounded-2xl border border-border bg-white p-6">
              <div className="flex items-start gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-gold-dark shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 id="pc-card-title" className="font-display font-bold text-xl text-midnight leading-tight">{title}</h2>
                  {hasCard && <p className="text-xs text-gray-500 mt-1">Prepared {now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>}
                </div>
              </div>

              {!hasCard ? (
                <p className="text-sm text-gray-500 leading-relaxed">Your card appears here as you add policies.</p>
              ) : (
                <>
                  <ul className="divide-y divide-border border-y border-border mb-4">
                    {filled.map((r) => (
                      <li key={r.id} className="py-3 text-sm">
                        <p className="font-semibold text-midnight">
                          {r.plan.trim() || 'Policy'}
                          {r.last4 && <span className="font-normal text-gray-500"> · …{r.last4}</span>}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {[
                            r.insured.trim() && `Life insured: ${r.insured.trim()}`,
                            digits(r.sumAssured) && `Cover ${rupees(Number(digits(r.sumAssured)))}`,
                            r.maturity && `Matures ${monthLabel(r.maturity)}`,
                          ]
                            .filter(Boolean)
                            .join(' · ')}
                        </p>
                        <p className="text-gray-600">
                          Nominee: {r.nominee.trim() || <span className="font-semibold text-red-700">not noted</span>}
                          {r.branch.trim() && <> · Branch: {r.branch.trim()}</>}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold text-midnight mb-4">Total sum assured: {rupees(total)}</p>

                  {flags.length > 0 ? (
                    <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 mb-4">
                      <p className="flex items-center gap-2 text-sm font-bold text-amber-900 mb-2">
                        <AlertTriangle className="w-4 h-4" aria-hidden="true" /> Worth checking
                      </p>
                      <ul className="space-y-2 text-sm text-amber-950">
                        {flags.map((f) => (
                          <li key={f.text}>
                            {f.text}{' '}
                            <Link to={f.to} className="font-semibold underline underline-offset-2 print:no-underline">{f.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="flex items-center gap-2 text-sm text-green-800 mb-4">
                      <CheckCircle2 className="w-4 h-4" aria-hidden="true" /> No gaps flagged from what you entered.
                    </p>
                  )}
                </>
              )}

              <p className="text-[11px] text-gray-500 leading-relaxed border-t border-border pt-3">
                Keep a copy with one family member. Made with the free policy card at jigishakiranshah.in/policy-card ·
                Jigisha Kiran Shah, LIC advisor, Shela, Ahmedabad · {PHONE_DISPLAY}. Check policy details against your
                policy bond or LIC’s customer portal.
              </p>
            </div>

            {hasCard && (
              <div className="mt-4 grid sm:grid-cols-3 gap-3 print:hidden">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('policy_card_printed', { policies: String(filled.length), flags: String(flags.length) });
                    window.print();
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-midnight px-4 py-3 text-sm font-bold text-white hover:bg-midnight-light min-h-11"
                >
                  <Printer className="w-4 h-4" aria-hidden="true" /> Print / PDF
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="policy-card-share"
                  onClick={() => trackEvent('policy_card_shared', { policies: String(filled.length) })}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm font-bold text-midnight hover:border-gold/60 min-h-11"
                >
                  <Share2 className="w-4 h-4" aria-hidden="true" /> Share with family
                </a>
                <a
                  href={whatsappUrl(reviewText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="policy-card-review"
                  onClick={() => trackEvent('policy_card_review_request', { flags: String(flags.length) })}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3 text-sm font-bold text-white hover:bg-whatsapp-dark min-h-11"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" /> Ask for a review
                </a>
              </div>
            )}
            {hasCard && (
              <p className="mt-2 text-[11px] text-gray-500 print:hidden">
                “Share with family” sends the card to whoever you choose. “Ask for a review” opens WhatsApp with the number of
                policies and the points flagged above, not the full card. You can edit the message before sending.
              </p>
            )}
          </section>
        </div>

        <section className="mt-14 max-w-3xl print:hidden" aria-labelledby="pc-faq">
          <h2 id="pc-faq" className="text-2xl font-display font-bold text-midnight mb-5">Common questions</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl border border-border p-5">
                <h3 className="font-bold text-midnight mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
