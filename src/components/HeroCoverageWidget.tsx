import { useState } from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

/** Rupees → compact INR (₹1.80 Cr / ₹15 L). */
function formatINR(n: number) {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`
  return `₹${Math.round(n / 1e5)} L`
}

const LAKH = 100_000
const INCOME_MULTIPLE = 12 // midpoint of the 10–15× rule used on the term insurance page

/** Lakh-denominated number input; empty means 0. */
function LakhInput({ id, label, value, onChange }: { id: string; label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="block text-[11px] text-gray-500 mb-1">
        {label}
      </label>
      <div className="flex items-center rounded-lg border border-border bg-white focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/40">
        <span className="pl-2.5 text-xs text-gray-400" aria-hidden="true">₹</span>
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={0}
          step={1}
          value={value}
          placeholder="0"
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-w-0 bg-transparent px-1.5 py-2 text-sm font-semibold text-midnight outline-none tabular-nums min-h-10"
        />
        <span className="pr-2.5 text-xs text-gray-400" aria-hidden="true">L</span>
      </div>
    </div>
  )
}

/**
 * Interactive hero artifact: drag income → indicative life cover.
 * Rough educational illustration: 12× income + loans − existing life cover.
 * It deliberately ignores dependants, goals and assets — the consultation
 * does the real sizing, and the copy says so.
 */
export default function HeroCoverageWidget() {
  const [income, setIncome] = useState(15 * LAKH)
  const [loans, setLoans] = useState('')
  const [existing, setExisting] = useState('')
  const toRupees = (lakhs: string) => Math.max(0, Number(lakhs) || 0) * LAKH
  const cover = Math.max(0, income * INCOME_MULTIPLE + toRupees(loans) - toRupees(existing))
  const min = 5 * LAKH
  const max = 100 * LAKH
  const pct = ((income - min) / (max - min)) * 100

  return (
    <div className="mt-6 max-w-sm lg:max-w-md mx-auto rounded-2xl border border-gold/20 bg-white/85 backdrop-blur-lg shadow-xl p-4 lg:p-5">
      <div className="flex items-center gap-2 mb-3">
        <ShieldCheck className="w-4 h-4 text-gold-dark" aria-hidden="true" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-gold-dark">
          Quick Cover Check
        </span>
      </div>

      <div className="flex items-baseline justify-between mb-2">
        <label htmlFor="hero-income" className="text-xs text-gray-500">
          Your annual income
        </label>
        <span className="text-sm font-bold text-midnight tabular-nums">{formatINR(income)}</span>
      </div>

      <div className="py-2 -my-1">
      <input
        id="hero-income"
        type="range"
        min={min}
        max={max}
        step={LAKH}
        value={income}
        onChange={(e) => setIncome(+e.target.value)}
        aria-label="Annual income"
        className="w-full h-2 appearance-none rounded-full cursor-pointer accent-gold"
        style={{
          background: `linear-gradient(to right, var(--color-gold) ${pct}%, var(--color-border) ${pct}%)`,
        }}
      />
      </div>

      <div className="grid grid-cols-2 gap-3 mt-3">
        <LakhInput id="hero-loans" label="Loans outstanding" value={loans} onChange={setLoans} />
        <LakhInput id="hero-existing" label="Existing life cover" value={existing} onChange={setExisting} />
      </div>

      <div className="mt-4 rounded-xl bg-midnight p-3.5 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-widest text-white/60">Indicative cover gap</div>
          <div className="text-2xl font-display font-bold text-gold tabular-nums leading-tight" aria-live="polite">
            {formatINR(cover)}
          </div>
        </div>
        <Link
          to="/protection-check"
          data-cta="hero-cover-check"
          className="inline-flex items-center gap-1.5 shrink-0 px-3.5 py-2 rounded-lg bg-gold text-midnight text-xs font-bold hover:bg-gold-light active:scale-95 transition-all min-h-11"
        >
          Full Protection Check
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>

      <p className="mt-2 text-[10px] text-gray-500 leading-relaxed">
        Rough illustration only (12× income + loans − existing cover). It does not consider your
        dependants, future goals, savings or health — the full Protection Check covers those, and a free review gives a personal number.
      </p>
    </div>
  )
}
