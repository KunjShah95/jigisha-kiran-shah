import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Shield, GraduationCap, Sunset, FileSearch, ArrowLeft, ArrowRight, Calendar, MessageCircle, RotateCcw, Check, AlertCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { SITE_URL } from '../lib/seo';
import { COPY, type Lang } from '../data/protectionCopy';
import {
  DEFAULT_ASSUMPTIONS,
  childEducation,
  familyProtection,
  formatINR,
  missingInputs,
  retirement,
  type Assumptions,
  type CheckGoal,
  type CheckInputs,
} from '../lib/protection';
import { whatsappUrl } from '../lib/contact';
import { trackEvent } from '../lib/analytics';
import { submitLead, honeypotProps } from '../lib/leads';
import { inputClass } from '../components/lead-fields';

const LAKH = 100_000;
const LANG_KEY = 'jks_check_lang';

const GOALS: Array<{ value: CheckGoal; icon: LucideIcon }> = [
  { value: 'family', icon: Shield },
  { value: 'child', icon: GraduationCap },
  { value: 'retirement', icon: Sunset },
  { value: 'review', icon: FileSearch },
];

/** Check goal → site-wide objective (booking + lead forms). */
const OBJECTIVE: Record<CheckGoal, string> = { family: 'term', child: 'child', retirement: 'retirement', review: 'review' };

type Fields = {
  age: string;
  dependants: string;
  income: string;
  expenses: string;
  loans: string;
  existingCover: string;
  savings: string;
  supportYears: string;
  childAge: string;
  eduCost: string;
  retireAge: string;
  retireMonthly: string;
  retireSavings: string;
};

const INITIAL: Fields = {
  age: '',
  dependants: '2',
  income: '',
  expenses: '',
  loans: '',
  existingCover: '',
  savings: '',
  supportYears: '15',
  childAge: '',
  eduCost: '25',
  retireAge: '60',
  retireMonthly: '',
  retireSavings: '',
};

type ReviewKey = keyof (typeof COPY)['en']['reviewItems'];
const REVIEW_KEYS = Object.keys(COPY.en.reviewItems) as ReviewKey[];

const num = (s: string) => Math.max(0, Number(s) || 0);

function toInputs(goal: CheckGoal, f: Fields): CheckInputs {
  return {
    goal,
    age: num(f.age),
    dependants: num(f.dependants),
    annualIncome: num(f.income) * LAKH,
    monthlyExpenses: num(f.expenses),
    loans: num(f.loans) * LAKH,
    existingCover: num(f.existingCover) * LAKH,
    savings: num(f.savings) * LAKH,
    supportYears: Math.min(40, num(f.supportYears)),
    childAge: goal === 'child' ? Math.min(17, num(f.childAge)) : 0,
    educationCostToday: goal === 'child' ? num(f.eduCost) * LAKH : 0,
    retireAge: num(f.retireAge),
    retirementMonthlyToday: num(f.retireMonthly),
    retirementSavings: num(f.retireSavings) * LAKH,
  };
}

function NumberInput({
  id,
  label,
  hint,
  value,
  onChange,
  unit,
  prefix = '₹',
  min = 0,
  max,
}: {
  id: string;
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  unit?: string;
  prefix?: string;
  min?: number;
  max?: number;
}) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-semibold text-midnight">
        {label}
      </label>
      <div className="flex items-center rounded-xl border border-border bg-gray-50 focus-within:bg-white focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/40 transition-all">
        {prefix ? <span className="pl-4 text-sm text-gray-400" aria-hidden="true">{prefix}</span> : null}
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          step="any"
          value={value}
          placeholder="0"
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-w-0 bg-transparent px-3 py-3 text-midnight font-semibold outline-none tabular-nums min-h-11"
        />
        {unit ? <span className="pr-4 text-sm text-gray-400 whitespace-nowrap" aria-hidden="true">{unit}</span> : null}
      </div>
      {hint ? <p className="text-xs text-gray-500 leading-relaxed">{hint}</p> : null}
    </div>
  );
}

function Pct({ id, label, value, onChange }: { id: string; label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-xs font-semibold text-gray-600">{label}</label>
      <div className="flex items-center rounded-lg border border-border bg-white focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/40">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          step="0.5"
          min={0}
          max={20}
          value={Math.round(value * 1000) / 10}
          onChange={(e) => onChange(Math.min(0.2, Math.max(0, Number(e.target.value) || 0) / 100))}
          className="w-full min-w-0 bg-transparent px-3 py-2 text-sm font-semibold text-midnight outline-none tabular-nums min-h-11"
        />
        <span className="pr-3 text-sm text-gray-400" aria-hidden="true">%</span>
      </div>
    </div>
  );
}

function Row({ label, value, strong, negative }: { label: string; value: string; strong?: boolean; negative?: boolean }) {
  return (
    <div className={`flex items-baseline justify-between gap-4 py-2.5 border-b border-border last:border-0 ${strong ? 'font-bold text-midnight' : 'text-gray-700'}`}>
      <span className="text-sm leading-snug">{label}</span>
      <span className={`text-sm tabular-nums whitespace-nowrap ${negative ? 'text-gray-500' : ''}`}>
        {negative ? '− ' : ''}
        {value}
      </span>
    </div>
  );
}

export default function ProtectionCheckPage() {
  useSEO({
    title: 'Free Life Insurance Needs Calculator — Protection Check',
    description:
      'How much life cover does your family need? Free needs-based check for term cover, child education and retirement, with every assumption shown. English & Gujarati. By Jigisha Kiran Shah, LIC advisor, Ahmedabad.',
    path: '/protection-check',
    keywords:
      'life insurance needs calculator, how much term insurance do I need, child education planning calculator, retirement corpus calculator India, LIC advisor Ahmedabad, insurance calculator Gujarati',
    breadcrumbLabel: 'Protection Check',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Protection Check — life insurance needs calculator',
        url: `${SITE_URL}/protection-check`,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        inLanguage: ['en-IN', 'gu-IN'],
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        provider: { '@id': `${SITE_URL}/#business` },
      },
    ],
  });

  const [searchParams] = useSearchParams();
  const [lang, setLang] = useState<Lang>('en');
  const t = COPY[lang];
  const [goal, setGoal] = useState<CheckGoal | null>(null);
  const [step, setStep] = useState(0);
  const [f, setF] = useState<Fields>(INITIAL);
  const [a, setA] = useState<Assumptions>(DEFAULT_ASSUMPTIONS);
  const [checks, setChecks] = useState<Record<ReviewKey, boolean>>(
    () => Object.fromEntries(REVIEW_KEYS.map((k) => [k, false])) as Record<ReviewKey, boolean>,
  );
  const [cb, setCb] = useState({ name: '', phone: '', website: '' });
  const [cbState, setCbState] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');
  const topRef = useRef<HTMLDivElement>(null);
  const completedRef = useRef(false);

  // Language: ?lang=gu wins, then the visitor's last choice. Applied after
  // hydration so the prerendered (English) markup still matches.
  useEffect(() => {
    const q = searchParams.get('lang');
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(LANG_KEY);
    } catch {
      // storage blocked
    }
    const next = q === 'gu' || q === 'en' ? q : saved === 'gu' ? 'gu' : null;
    if (next) setLang(next);
  }, [searchParams]);

  const toggleLang = () => {
    const next: Lang = lang === 'en' ? 'gu' : 'en';
    setLang(next);
    try {
      localStorage.setItem(LANG_KEY, next);
    } catch {
      // storage blocked
    }
  };

  const set = (k: keyof Fields) => (v: string) => setF((s) => ({ ...s, [k]: v }));
  const go = (n: number) => {
    setStep(n);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const pickGoal = (g: CheckGoal) => {
    setGoal(g);
    trackEvent('protection_check_started', { goal: g, lang });
    go(1);
  };

  const inputs = goal ? toInputs(goal, f) : null;
  const report = useMemo(() => {
    if (!inputs) return null;
    return {
      family: familyProtection(inputs, a),
      child: goal === 'child' ? childEducation(inputs, a) : null,
      ret: goal === 'retirement' ? retirement(inputs, a) : null,
      missing: missingInputs(inputs),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goal, f, a]);

  useEffect(() => {
    if (step === 4 && goal && !completedRef.current) {
      completedRef.current = true;
      trackEvent('protection_check_completed', { goal, lang });
    }
  }, [step, goal, lang]);

  const reset = () => {
    setGoal(null);
    setF(INITIAL);
    setA(DEFAULT_ASSUMPTIONS);
    setCbState('idle');
    completedRef.current = false;
    go(0);
  };

  /** Plain-English summary for Jigisha (WhatsApp + call-back lead). */
  const summaryLines = (): Array<[string, string]> => {
    if (!goal || !report || !inputs) return [];
    const rows: Array<[string, string]> = [
      ['Goal', COPY.en.goals[goal].title],
      ['Age', f.age],
      ['Dependants', COPY.en.dependantOptions[num(f.dependants)] ?? f.dependants],
      ['Annual income', f.income ? `${f.income} L` : ''],
      ['Monthly expenses', f.expenses ? formatINR(inputs.monthlyExpenses) : ''],
      ['Loans', f.loans ? `${f.loans} L` : ''],
      ['Existing cover', f.existingCover ? `${f.existingCover} L` : ''],
    ];
    if (goal === 'family' || goal === 'review' || goal === 'child') {
      rows.push(['Estimated cover gap', formatINR(report.family.gap)]);
    }
    if (report.child) rows.push(['Education goal', `${formatINR(report.child.futureCost)} in ${report.child.yearsToGoal} yrs`]);
    if (report.ret) rows.push(['Retirement shortfall', formatINR(report.ret.shortfall)]);
    if (goal === 'review') {
      const open = REVIEW_KEYS.filter((k) => !checks[k]).map((k) => COPY.en.reviewItems[k]);
      if (open.length) rows.push(['Not sure about', open.join('; ')]);
    }
    return rows.filter(([, v]) => v);
  };

  const waText = () =>
    [
      'Hi Jigisha ben, I did the Protection Check on your website. Can we discuss my results?',
      ...summaryLines().map(([k, v]) => `${k}: ${v}`),
    ].join('\n');

  const sendCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal || cbState === 'sending') return;
    setCbState('sending');
    submitLead({
      kind: 'check',
      name: cb.name,
      phone: cb.phone,
      objective: OBJECTIVE[goal],
      details: Object.fromEntries(summaryLines()),
      website: cb.website,
    }).then((ok) => {
      setCbState(ok ? 'sent' : 'failed');
      if (ok) {
        trackEvent('lead_saved', { form: 'check' });
        trackEvent('protection_check_handoff', { goal, via: 'callback' });
      }
    });
  };

  const totalSteps = 4;
  const card = 'bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-border p-6 lg:p-8';

  return (
    <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream relative overflow-hidden" lang={lang === 'gu' ? 'gu' : 'en'}>
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'url("/noise.svg")' }} />
      <div ref={topRef} className="container relative z-10 max-w-3xl mx-auto scroll-mt-28">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="inline-block px-3 py-1 bg-white border border-gold/20 text-gold-dark text-[11px] font-bold tracking-[0.2em] uppercase rounded-full">
            {t.eyebrow}
          </div>
          <button
            type="button"
            onClick={toggleLang}
            className="px-4 py-2 rounded-full border border-border bg-white text-sm font-semibold text-midnight hover:border-gold/60 transition-colors min-h-11"
            lang={lang === 'en' ? 'gu' : 'en'}
          >
            {t.langToggle}
          </button>
        </div>

        <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">{t.title}</h1>
        {step === 0 ? (
          <>
            <p className="text-base lg:text-lg text-gray-600 font-light leading-relaxed mb-3">{t.intro}</p>
            <Link to="/book" data-cta="check-skip-book" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark underline underline-offset-2 hover:text-gold mb-8 min-h-11">
              <Calendar className="w-4 h-4" aria-hidden="true" /> {t.skipToBook}
            </Link>
          </>
        ) : null}

        {step >= 1 && step <= 3 ? (
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-2">
              <span>{t.stepOf(step + 1, totalSteps)}</span>
              {goal ? <span>{t.goals[goal].title}</span> : null}
            </div>
            <div className="h-1.5 rounded-full bg-border overflow-hidden" aria-hidden="true">
              <div className="h-full bg-gold transition-all duration-500" style={{ width: `${((step + 1) / totalSteps) * 100}%` }} />
            </div>
          </div>
        ) : null}

        {step === 0 ? (
          <div>
            <h2 className="text-lg font-bold text-midnight mb-4">{t.goalQ}</h2>
            <ul className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {GOALS.map(({ value, icon: Icon }) => (
                <li key={value}>
                  <button
                    type="button"
                    onClick={() => pickGoal(value)}
                    className="group w-full h-full text-left flex items-start gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-gold/40 active:scale-[0.99] transition-all min-h-11"
                  >
                    <span className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                      <Icon className="w-5 h-5 text-gold-dark group-hover:text-white transition-colors" aria-hidden="true" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-bold text-midnight text-[15px] leading-snug">{t.goals[value].title}</span>
                      <span className="block text-sm text-gray-500 font-light mt-0.5">{t.goals[value].hint}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-gray-500 leading-relaxed">{t.disclaimer}</p>
          </div>
        ) : null}

        {step === 1 ? (
          <div className={card}>
            <h2 className="text-xl font-display font-bold text-midnight mb-6">{t.aboutQ}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <NumberInput id="pc-age" label={t.age} value={f.age} onChange={set('age')} prefix="" min={18} max={75} />
              <div className="space-y-1">
                <label htmlFor="pc-dependants" className="block text-sm font-semibold text-midnight">{t.dependants}</label>
                <select id="pc-dependants" value={f.dependants} onChange={(e) => set('dependants')(e.target.value)} className={inputClass}>
                  {t.dependantOptions.map((label, i) => (
                    <option key={label} value={String(i)}>{label}</option>
                  ))}
                </select>
              </div>
              <NumberInput id="pc-income" label={t.income} value={f.income} onChange={set('income')} unit={t.lakh} />
              <NumberInput id="pc-expenses" label={t.expenses} hint={t.expensesHint} value={f.expenses} onChange={set('expenses')} unit={t.perMonth} />
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className={card}>
            <h2 className="text-xl font-display font-bold text-midnight mb-6">{t.haveQ}</h2>
            <div className="grid gap-5">
              <NumberInput id="pc-loans" label={t.loans} value={f.loans} onChange={set('loans')} unit={t.lakh} />
              <NumberInput id="pc-cover" label={t.existingCover} hint={t.existingCoverHint} value={f.existingCover} onChange={set('existingCover')} unit={t.lakh} />
              <NumberInput id="pc-savings" label={t.savings} value={f.savings} onChange={set('savings')} unit={t.lakh} />
            </div>
          </div>
        ) : null}

        {step === 3 && goal ? (
          <div className={card}>
            <h2 className="text-xl font-display font-bold text-midnight mb-6">{goal === 'review' ? t.reviewQ : t.goalStepQ}</h2>
            {goal === 'review' ? (
              <ul className="space-y-2">
                {REVIEW_KEYS.map((k) => (
                  <li key={k}>
                    <label className="flex items-start gap-3 p-3 rounded-xl border border-border hover:border-gold/40 cursor-pointer min-h-11">
                      <input
                        type="checkbox"
                        checked={checks[k]}
                        onChange={(e) => setChecks((c) => ({ ...c, [k]: e.target.checked }))}
                        className="mt-0.5 w-5 h-5 accent-gold shrink-0"
                      />
                      <span className="text-sm text-midnight">{t.reviewItems[k]}</span>
                    </label>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="grid md:grid-cols-2 gap-5">
                {goal !== 'retirement' ? (
                  <NumberInput id="pc-years" label={t.supportYears} hint={t.supportYearsHint} value={f.supportYears} onChange={set('supportYears')} prefix="" unit={t.yrs} max={40} />
                ) : null}
                {goal === 'child' ? (
                  <>
                    <NumberInput id="pc-child-age" label={t.childAge} value={f.childAge} onChange={set('childAge')} prefix="" unit={t.yrs} max={17} />
                    <NumberInput id="pc-edu" label={t.eduCost} hint={t.eduCostHint} value={f.eduCost} onChange={set('eduCost')} unit={t.lakh} />
                  </>
                ) : null}
                {goal === 'retirement' ? (
                  <>
                    <NumberInput id="pc-retire-age" label={t.retireAge} value={f.retireAge} onChange={set('retireAge')} prefix="" unit={t.yrs} min={40} max={75} />
                    <NumberInput id="pc-retire-monthly" label={t.retireMonthly} value={f.retireMonthly} onChange={set('retireMonthly')} unit={t.perMonth} />
                    <NumberInput id="pc-retire-savings" label={t.retireSavings} value={f.retireSavings} onChange={set('retireSavings')} unit={t.lakh} />
                  </>
                ) : null}
              </div>
            )}
          </div>
        ) : null}

        {step >= 1 && step <= 3 ? (
          <div className="flex items-center justify-between gap-3 mt-6">
            <button type="button" onClick={() => go(step - 1)} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-white text-midnight font-semibold text-sm hover:border-gold/60 min-h-11">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> {t.back}
            </button>
            <button type="button" onClick={() => go(step + 1)} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-midnight text-white font-bold text-sm hover:bg-gold active:scale-[0.98] transition-all min-h-11">
              {step === 3 ? t.seeReport : t.next} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        ) : null}

        {step === 4 && goal && report && inputs ? (
          <div className="space-y-6">
            <p className="text-base text-gray-600 font-light">{t.reportIntro}</p>

            {report.missing.length ? (
              <div className="flex gap-3 p-4 rounded-2xl bg-gold/10 border border-gold/30" role="status">
                <AlertCircle className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm text-midnight">
                  <p className="font-bold mb-1">{t.missingTitle}</p>
                  <p>{report.missing.map((m) => t.missing[m as keyof typeof t.missing]).join(', ')}</p>
                  <button type="button" onClick={() => go(1)} className="mt-2 font-semibold text-gold-dark underline underline-offset-2 min-h-11">
                    {t.back}
                  </button>
                </div>
              </div>
            ) : null}

            {goal !== 'retirement' ? (
              <div className={card}>
                <div className="rounded-2xl bg-midnight p-5 mb-5">
                  <div className="text-[11px] uppercase tracking-widest text-white/60">{t.gapLabel}</div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-gold tabular-nums" aria-live="polite">
                    {formatINR(report.family.gap)}
                  </div>
                  {report.family.gap === 0 && report.family.need > 0 ? <p className="text-sm text-white/80 mt-2">{t.noGap}</p> : null}
                </div>
                <h3 className="text-sm font-bold text-midnight uppercase tracking-wider mb-1">{t.breakdown}</h3>
                <div>
                  {report.family.lines.map((l) => (
                    <Row key={l.key} label={t.lines[l.key as keyof typeof t.lines]} value={formatINR(l.amount)} negative={l.sign < 0} />
                  ))}
                  <Row label={t.needLabel} value={formatINR(report.family.need)} strong />
                </div>
              </div>
            ) : null}

            {report.child ? (
              <div className={card}>
                <h3 className="text-xl font-display font-bold text-midnight mb-3">{t.childTitle}</h3>
                <Row label={t.childFuture(report.child.yearsToGoal)} value={formatINR(report.child.futureCost)} strong />
                <Row label={t.childMonthly} value={`${formatINR(report.child.monthlySaving)}${t.perMonth}`} />
                <Row label={t.childProtect} value={formatINR(report.child.protectionNeeded)} />
              </div>
            ) : null}

            {report.ret ? (
              <div className={card}>
                <div className="rounded-2xl bg-midnight p-5 mb-5">
                  <div className="text-[11px] uppercase tracking-widest text-white/60">{t.retShortfall}</div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-gold tabular-nums" aria-live="polite">
                    {formatINR(report.ret.shortfall)}
                  </div>
                </div>
                <h3 className="text-sm font-bold text-midnight uppercase tracking-wider mb-1">{t.retTitle}</h3>
                <Row label={t.retMonthlyAt(report.ret.yearsToRetire)} value={`${formatINR(report.ret.monthlyAtRetirement)}${t.perMonth}`} />
                <Row label={t.retCorpus} value={formatINR(report.ret.corpusNeeded)} />
                <Row label={t.retHave} value={formatINR(report.ret.savingsAtRetirement)} negative />
                <Row label={t.retMonthly} value={`${formatINR(report.ret.monthlySaving)}${t.perMonth}`} strong />
              </div>
            ) : null}

            {goal === 'review' ? (
              <div className={card}>
                <h3 className="text-xl font-display font-bold text-midnight mb-3">{t.reviewTitle}</h3>
                {REVIEW_KEYS.every((k) => checks[k]) ? (
                  <p className="text-sm text-gray-700">{t.reviewAllGood}</p>
                ) : (
                  <ul className="space-y-2">
                    {REVIEW_KEYS.filter((k) => !checks[k]).map((k) => (
                      <li key={k} className="flex gap-2 text-sm text-midnight">
                        <AlertCircle className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" aria-hidden="true" />
                        {t.reviewItems[k]}?
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : null}

            <details className={`${card} group`}>
              <summary className="cursor-pointer list-none flex items-center justify-between text-sm font-bold text-midnight min-h-11">
                {t.assumptionsTitle}
                <ArrowRight className="w-4 h-4 text-gold-dark group-open:rotate-90 transition-transform" aria-hidden="true" />
              </summary>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <Pct id="as-infl" label={t.inflation} value={a.inflation} onChange={(v) => setA((s) => ({ ...s, inflation: v }))} />
                <Pct id="as-edu" label={t.eduInflation} value={a.eduInflation} onChange={(v) => setA((s) => ({ ...s, eduInflation: v }))} />
                <Pct id="as-ret" label={t.returnRate} value={a.returnRate} onChange={(v) => setA((s) => ({ ...s, returnRate: v }))} />
                <div className="space-y-1">
                  <label htmlFor="as-life" className="block text-xs font-semibold text-gray-600">{t.lifeExpectancy}</label>
                  <input
                    id="as-life"
                    type="number"
                    inputMode="numeric"
                    min={60}
                    max={100}
                    value={a.lifeExpectancy}
                    onChange={(e) => setA((s) => ({ ...s, lifeExpectancy: Math.min(100, Math.max(60, Number(e.target.value) || 85)) }))}
                    className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm font-semibold text-midnight outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 tabular-nums min-h-11"
                  />
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-500 leading-relaxed">{t.assumptionsNote}</p>
            </details>

            <div className={card}>
              <h3 className="text-xl font-display font-bold text-midnight mb-3">{t.questionsTitle}</h3>
              <ul className="space-y-2">
                {t.questions[goal].map((q) => (
                  <li key={q} className="flex gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" aria-hidden="true" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-midnight rounded-3xl p-6 lg:p-8 text-white">
              <h3 className="text-2xl font-display font-bold mb-2">{t.ctaTitle}</h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">{t.ctaBody}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/book?objective=${OBJECTIVE[goal]}&from=check`}
                  data-cta="check-book"
                  onClick={() => trackEvent('protection_check_handoff', { goal, via: 'book' })}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold text-midnight font-bold text-sm hover:bg-gold-light active:scale-[0.98] transition-all min-h-11"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" /> {t.ctaBook}
                </Link>
                <a
                  href={whatsappUrl(waText())}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="check-whatsapp"
                  onClick={() => trackEvent('protection_check_handoff', { goal, via: 'whatsapp' })}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-whatsapp text-white font-bold text-sm hover:bg-whatsapp-dark active:scale-[0.98] transition-all min-h-11"
                >
                  <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" /> {t.ctaWhatsApp}
                </a>
              </div>

              <form onSubmit={sendCallback} className="mt-6 pt-6 border-t border-white/10 relative">
                <input {...honeypotProps} value={cb.website} onChange={(e) => setCb((s) => ({ ...s, website: e.target.value }))} />
                <p className="font-bold mb-1">{t.callbackTitle}</p>
                <p className="text-xs text-gray-400 mb-4">{t.callbackBody}</p>
                {cbState === 'sent' ? (
                  <p role="status" className="text-sm text-gold font-semibold">{t.callbackSent}</p>
                ) : (
                  <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-3">
                    <label className="sr-only" htmlFor="cb-name">{t.name}</label>
                    <input id="cb-name" required autoComplete="name" placeholder={t.name} value={cb.name} onChange={(e) => setCb((s) => ({ ...s, name: e.target.value }))} className={`${inputClass} bg-white`} />
                    <label className="sr-only" htmlFor="cb-phone">{t.phone}</label>
                    <input id="cb-phone" required type="tel" inputMode="tel" autoComplete="tel" pattern="[0-9+\(\)\- ]{10,18}" placeholder="+91 98765 43210" value={cb.phone} onChange={(e) => setCb((s) => ({ ...s, phone: e.target.value }))} className={`${inputClass} bg-white`} />
                    <button type="submit" disabled={cbState === 'sending'} className="px-5 py-3 rounded-xl bg-white text-midnight font-bold text-sm hover:bg-gold-light disabled:opacity-70 min-h-11">
                      {t.callbackSend}
                    </button>
                  </div>
                )}
                {cbState === 'failed' ? <p role="alert" className="mt-3 text-sm text-gold-light">{t.callbackFailed}</p> : null}
              </form>
            </div>

            <div className="flex items-center justify-between gap-4">
              <button type="button" onClick={reset} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-midnight min-h-11">
                <RotateCcw className="w-4 h-4" aria-hidden="true" /> {t.startOver}
              </button>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{t.disclaimer}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
