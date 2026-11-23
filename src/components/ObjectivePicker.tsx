import { Link } from 'react-router-dom';
import { Shield, FileSearch, GraduationCap, Sunset, LifeBuoy, Building2, ArrowRight, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { OBJECTIVES, objectiveWhatsAppText, whatsappUrl, type ObjectiveValue } from '../lib/contact';
import { trackEvent } from '../lib/analytics';
import { useSpotlight } from '../hooks/useSpotlight';

const PICKS: Array<{ value: ObjectiveValue; icon: LucideIcon; title: string; hint: string }> = [
  { value: 'term', icon: Shield, title: 'Protect my family', hint: 'How much cover is enough?' },
  { value: 'review', icon: FileSearch, title: 'Check my existing policies', hint: 'Find gaps, lapsed policies, wrong nominees' },
  { value: 'child', icon: GraduationCap, title: 'Save for my child’s education', hint: 'School, college or studying abroad' },
  { value: 'retirement', icon: Sunset, title: 'Plan my retirement income', hint: 'Turn savings into a monthly pension' },
  { value: 'claim', icon: LifeBuoy, title: 'Claims & policy paperwork', hint: 'Claims, nominee changes, address updates' },
  { value: 'business', icon: Building2, title: 'Insurance for my business', hint: 'For owners, partners and staff' },
];

/**
 * Objective-first entry point: visitors pick their goal before anything else,
 * land on the page that answers it, or open WhatsApp with the goal prefilled.
 */
export default function ObjectivePicker() {
  const onMove = useSpotlight();

  return (
    <section aria-labelledby="objective-heading" className="py-14 lg:py-24 bg-white">
      <div className="container">
        <div className="max-w-2xl mb-8 lg:mb-12">
          <h2 id="objective-heading" className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] leading-[1.05]">
            What would you like <span className="text-emerald">help with?</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink/60 max-w-xl">
            Pick your goal. Read a simple guide, or message Jigisha on WhatsApp and get a direct answer.
            {' '}<Link to="/guides" data-cta="home-compare-guides" className="font-bold text-emerald-deep underline underline-offset-2 hover:text-emerald">Prefer a plan comparison?</Link>
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {PICKS.map(({ value, icon: Icon, title, hint }) => {
            const to = OBJECTIVES.find((o) => o.value === value)!.to;
            return (
              <li
                key={value}
                onMouseMove={onMove}
                className="spotlight-card group relative flex flex-col rounded-2xl border border-border bg-paper/60 overflow-hidden transition-all duration-300 hover:border-emerald/40 hover:-translate-y-0.5"
              >
                <Link
                  to={to}
                  onClick={() => trackEvent('objective_select', { objective: value, action: 'read' })}
                  className="relative z-10 flex items-center gap-3 p-4 sm:items-start sm:gap-4 sm:p-5 flex-1 min-h-11"
                >
                  <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-sage flex items-center justify-center shrink-0 group-hover:bg-emerald transition-colors duration-300">
                    <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-emerald-deep group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-bold text-ink text-sm sm:text-[15px] leading-snug group-hover:text-emerald-deep transition-colors">{title}</span>
                    <span className="hidden sm:block text-xs md:text-sm text-ink/55 mt-0.5">{hint}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-emerald-deep shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
                <a
                  href={whatsappUrl(objectiveWhatsAppText(value))}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={`objective-${value}`}
                  className="relative z-10 hidden sm:flex items-center justify-center gap-2 border-t border-border px-5 py-2.5 text-xs font-bold text-ink/70 hover:bg-whatsapp/10 hover:text-ink transition-colors min-h-11"
                >
                  <MessageCircle className="w-4 h-4 text-whatsapp-dark" aria-hidden="true" />
                  Ask about this on WhatsApp
                </a>
              </li>
            );
          })}
        </ul>

        {/* One WhatsApp entry point on mobile instead of six rows */}
        <a
          href={whatsappUrl(objectiveWhatsAppText('term'))}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="objective-whatsapp-all"
          className="mt-3 flex sm:hidden items-center justify-center gap-2 rounded-full border border-whatsapp/30 bg-whatsapp/10 px-4 py-3 text-sm font-bold text-ink min-h-11"
        >
          <MessageCircle className="w-4 h-4 text-whatsapp-dark" aria-hidden="true" />
          Or tell Jigisha your goal on WhatsApp
        </a>
      </div>
    </section>
  );
}