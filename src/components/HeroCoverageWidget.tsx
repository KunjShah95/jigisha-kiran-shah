import { useState } from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

/** Rupees → compact INR (₹1.8 Cr / ₹15 L). Trailing zeros dropped so a round
 *  number reads "₹1 Cr", not "₹1.00 Cr". */
function formatINR(n: number) {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2).replace(/\.?0+$/, '')} Cr`
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
    <div className="mt-2 w-full rounded-xl bg-[#faf8f4] p-3 sm:p-4">
      <div className="flex items-center gap-2 mb-3">
        <ShieldCheck className="w-4 h-4 text-gold-dark" aria-hidden="true" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-gold-dark">
          Estimate
        </span>
      </div>

      <div className="flex items-baseline justify-between mb-2">
        <label htmlFor="hero-income" className="text-xs text-gray-500">
          Annual income
        </label>
        <span className="text-sm font-bold text-midnight tabular-nums">{formatINR(income)} / year</span>
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
        className="range-gold w-full h-2 appearance-none rounded-full cursor-pointer accent-gold"
        style={{
          background: `linear-gradient(to right, var(--color-gold) ${pct}%, var(--color-border) ${pct}%)`,
        }}
      />
      </div>

      <div className="grid grid-cols-2 gap-3 mt-3">
        <LakhInput id="hero-loans" label="Loans outstanding" value={loans} onChange={setLoans} />
        <LakhInput id="hero-existing" label="Existing life cover" value={existing} onChange={setExisting} />
      </div>

      {/* Result and action are stacked, not side by side. Sharing one row at
          ~430 px squeezed the ₹ figure against its label and left the CTA
          fighting the panel edge; the number now gets the full width and the
          button gets a proper 44 px target. */}
      <div className="mt-4 rounded-xl bg-midnight px-4 py-3.5">
        <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/65">Rough cover estimate</div>
        <div
          className="font-display font-bold text-gold tabular-nums leading-none text-[1.75rem] lg:text-3xl mt-1.5"
          aria-live="polite"
        >
                  {formatINR(cover)}
        </div>
      </div>

      <Link
        to="/protection-check"
        data-cta="hero-cover-check"
        className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 text-sm font-bold text-midnight hover:bg-gold-light active:scale-[0.99] transition-all min-h-11"
      >
        Continue to full protection check
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>

      <p className="mt-2.5 text-[10px] leading-relaxed text-gray-600">
        Illustration only: 12× income + loans − existing cover. It does not include dependants, goals, savings or health.
      </p>
    </div>
  )
}
