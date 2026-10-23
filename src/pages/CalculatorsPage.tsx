import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator as CalcIcon, ArrowRight, PiggyBank, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSEO } from '../hooks/useSEO';

type Tab = 'retirement' | 'education';

const fmt = (n: number) =>
  '₹' + Math.round(n).toLocaleString('en-IN');

// ── Retirement corpus ────────────────────────────────────────────────────────
const RetirementCalc = () => {
  const [monthlyExpense, setMonthlyExpense] = useState('50000');
  const [yearsToRetire, setYearsToRetire] = useState('15');
  const [retirementYears, setRetirementYears] = useState('20');
  const [inflation, setInflation] = useState('6');
  const [returnRate, setReturnRate] = useState('7');
  const [existingCorpus, setExistingCorpus] = useState('0');

  const me = Number(monthlyExpense) || 0;
  const ytr = Number(yearsToRetire) || 0;
  const ry = Number(retirementYears) || 0;
  const inf = (Number(inflation) || 0) / 100;
  const rr = (Number(returnRate) || 0) / 100;
  const ec = Number(existingCorpus) || 0;

  // Monthly need at retirement, in future money
  const futureMonthly = me * Math.pow(1 + inf, ytr);
  // Annuity: corpus = PMT * (1 - (1+r)^-n) / r, monthly
  const mr = rr / 12;
  const n = ry * 12;
  const annuityFactor = mr > 0 ? (1 - Math.pow(1 + mr, -n)) / mr : n;
  const corpusNeeded = futureMonthly * annuityFactor;
  // Existing corpus grown to retirement
  const grownExisting = ec * Math.pow(1 + rr, ytr);
  const gap = Math.max(0, corpusNeeded - grownExisting);
  // Monthly SIP needed to fill gap over ytr years
  const sipMonths = ytr * 12;
  const sipRate = rr / 12;
  const sipFactor = sipRate > 0 ? (Math.pow(1 + sipRate, sipMonths) - 1) / sipRate * (1 + sipRate) : sipMonths;
  const monthlySip = sipMonths > 0 && sipFactor > 0 ? gap / sipFactor : 0;

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="space-y-5">
        <Field label="Monthly household expense today (₹)" value={monthlyExpense} onChange={setMonthlyExpense} />
        <Field label="Years to retirement" value={yearsToRetire} onChange={setYearsToRetire} />
        <Field label="Years money must last in retirement" value={retirementYears} onChange={setRetirementYears} />
        <Field label="Expected inflation (%/yr)" value={inflation} onChange={setInflation} />
        <Field label="Expected return in retirement (%/yr)" value={returnRate} onChange={setReturnRate} />
        <Field label="Existing retirement corpus (₹)" value={existingCorpus} onChange={setExistingCorpus} />
      </div>
      <div className="bg-midnight text-white rounded-2xl p-6 space-y-4">
        <Result label="Monthly need at retirement (inflated)" value={fmt(futureMonthly)} />
        <Result label="Total corpus needed" value={fmt(corpusNeeded)} highlight />
        <Result label="Existing corpus grown to retirement" value={fmt(grownExisting)} />
        <Result label="Shortfall to fill" value={fmt(gap)} />
        <Result label="Monthly SIP needed now" value={fmt(monthlySip)} highlight />
        <p className="text-[11px] text-white/60 font-light pt-2 border-t border-white/10">
          Illustrative only. Assumes constant inflation and returns, no taxes, no other income (EPF pension, rent). A real plan needs a personalised review.
        </p>
      </div>
    </div>
  );
};

// ── Child education corpus ───────────────────────────────────────────────────
const EducationCalc = () => {
  const [costToday, setCostToday] = useState('2000000');
  const [yearsAway, setYearsAway] = useState('12');
  const [inflation, setInflation] = useState('10');
  const [returnRate, setReturnRate] = useState('8');
  const [existingCorpus, setExistingCorpus] = useState('0');

  const ct = Number(costToday) || 0;
  const ya = Number(yearsAway) || 0;
  const inf = (Number(inflation) || 0) / 100;
  const rr = (Number(returnRate) || 0) / 100;
  const ec = Number(existingCorpus) || 0;

  const futureCost = ct * Math.pow(1 + inf, ya);
  const grownExisting = ec * Math.pow(1 + rr, ya);
  const gap = Math.max(0, futureCost - grownExisting);
  const months = ya * 12;
  const mr = rr / 12;
  const sipFactor = mr > 0 ? (Math.pow(1 + mr, months) - 1) / mr * (1 + mr) : months;
  const monthlySip = months > 0 && sipFactor > 0 ? gap / sipFactor : 0;

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="space-y-5">
        <Field label="Cost of the course today (₹)" value={costToday} onChange={setCostToday} />
        <Field label="Years until the milestone" value={yearsAway} onChange={setYearsAway} />
        <Field label="Education inflation (%/yr)" value={inflation} onChange={setInflation} />
        <Field label="Expected return (%/yr)" value={returnRate} onChange={setReturnRate} />
        <Field label="Existing savings for this goal (₹)" value={existingCorpus} onChange={setExistingCorpus} />
      </div>
      <div className="bg-midnight text-white rounded-2xl p-6 space-y-4">
        <Result label="Future cost of the course" value={fmt(futureCost)} highlight />
        <Result label="Existing savings grown" value={fmt(grownExisting)} />
        <Result label="Shortfall to fill" value={fmt(gap)} />
        <Result label="Monthly SIP needed now" value={fmt(monthlySip)} highlight />
        <p className="text-[11px] text-white/60 font-light pt-2 border-t border-white/10">
          Illustrative only. Match the plan's maturity year to the milestone year; consider a
          premium-waiver rider so the goal survives the parent. Jigisha can size a Jeevan
          Tarun / Children's Money Back plan to a share of this number.
        </p>
      </div>
    </div>
  );
};

const Field = ({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) => (
  <label className="block">
    <span className="block text-sm font-semibold text-midnight mb-1.5">{label}</span>
    <input
      type="number"
      inputMode="numeric"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-midnight focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
    />
  </label>
);

const Result = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
  <div className={`flex items-center justify-between gap-4 ${highlight ? 'py-2' : ''}`}>
    <span className={`text-sm ${highlight ? 'font-bold text-white' : 'text-white/70'}`}>{label}</span>
    <span className={`font-display font-bold ${highlight ? 'text-gold text-xl' : 'text-white text-base'}`}>{value}</span>
  </div>
);

export default function CalculatorsPage() {
  const [tab, setTab] = useState<Tab>('retirement');
  useSEO({
    title: 'Retirement & Child Education Calculators | LIC Advisor Ahmedabad',
    description:
      'Free retirement corpus and child-education corpus calculators from Jigisha Kiran Shah, LIC advisor in Ahmedabad. Illustrative numbers — book a free review to size a LIC plan to your goal.',
    path: '/calculators',
    keywords:
      'retirement corpus calculator India, child education corpus calculator, SIP calculator retirement, LIC retirement planning Ahmedabad',
    breadcrumbLabel: 'Calculators',
  });
  useScrollReveal();

  return (
    <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream relative overflow-hidden">
      <div className="container relative z-10">
        <div className="inline-block px-3 py-1 bg-white border border-gold/20 text-gold-dark text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-4">Calculators</div>
        <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">
          Retirement &amp; Child-Education Corpus Calculators
        </h1>
        <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed font-light max-w-3xl">
          Two quick, transparent calculators so you can see the size of the goal before you
          choose a plan. Numbers are illustrative — Jigisha can size a Jeevan Akshay VII
          pension or a Jeevan Tarun education plan to your number in a free review.
        </p>

        <div className="flex gap-2 mb-8" role="tablist" aria-label="Calculator type">
          <button
            role="tab"
            aria-selected={tab === 'retirement'}
            onClick={() => setTab('retirement')}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all min-h-11 ${tab === 'retirement' ? 'bg-midnight text-white' : 'bg-white border border-border text-midnight hover:border-gold/40'}`}
          >
            <PiggyBank className="w-4 h-4" aria-hidden="true" /> Retirement corpus
          </button>
          <button
            role="tab"
            aria-selected={tab === 'education'}
            onClick={() => setTab('education')}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all min-h-11 ${tab === 'education' ? 'bg-midnight text-white' : 'bg-white border border-border text-midnight hover:border-gold/40'}`}
          >
            <GraduationCap className="w-4 h-4" aria-hidden="true" /> Child education corpus
          </button>
        </div>

        {tab === 'retirement' ? <RetirementCalc /> : <EducationCalc />}

        <div className="mt-10 p-6 bg-white rounded-2xl border border-border">
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            Want a number that also accounts for your dependants, loans, existing policies and
            goals?{' '}
            <Link to="/protection-check" className="font-semibold text-gold-dark underline underline-offset-2 hover:text-gold">
              Run the free Protection Check
            </Link>{' '}
            or{' '}
            <Link to="/contact" className="font-semibold text-gold-dark underline underline-offset-2 hover:text-gold">
              book a free consultation
            </Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
