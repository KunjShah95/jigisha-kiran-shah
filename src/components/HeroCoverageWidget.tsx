import { useState } from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

/** Rupees → compact INR (₹1.80 Cr / ₹15 L). */
function formatINR(n: number) {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`
  return `₹${Math.round(n / 1e5)} L`
}

/**
 * Interactive hero artifact: drag income → live recommended life cover.
 * Human-life-value rule of thumb (~12× annual income). Not a competing
 * animation — the aurora stays the one signature effect.
 */
export default function HeroCoverageWidget() {
  const [income, setIncome] = useState(1_500_000) // ₹15L
  const cover = income * 12
  const min = 500_000
  const max = 10_000_000
  const pct = ((income - min) / (max - min)) * 100

  return (
    <div className="mt-6 max-w-sm lg:max-w-md mx-auto rounded-2xl border border-gold/20 bg-white/85 backdrop-blur-lg shadow-xl p-4 lg:p-5">
      <div className="flex items-center gap-2 mb-3">
        <ShieldCheck className="w-4 h-4 text-gold-dark" aria-hidden="true" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-gold-dark">
          Instant Coverage Estimate
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
        step={100_000}
        value={income}
        onChange={(e) => setIncome(+e.target.value)}
        aria-label="Annual income"
        className="w-full h-2 appearance-none rounded-full cursor-pointer accent-gold"
        style={{
          background: `linear-gradient(to right, var(--color-gold) ${pct}%, var(--color-border) ${pct}%)`,
        }}
      />
      </div>

      <div className="mt-4 rounded-xl bg-midnight p-3.5 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-widest text-white/60">Recommended cover</div>
          <div className="text-2xl font-display font-bold text-gold tabular-nums leading-tight">
            {formatINR(cover)}
          </div>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 shrink-0 px-3.5 py-2 rounded-lg bg-gold text-midnight text-xs font-bold hover:bg-gold-light active:scale-95 transition-all min-h-11"
        >
          Get exact plan
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>

      <p className="mt-2 text-[10px] text-gray-400 leading-relaxed">
        Estimate only, based on 12× income. Book a consult for a tailored plan.
      </p>
    </div>
  )
}
