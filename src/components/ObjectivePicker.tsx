import { Link } from 'react-router-dom';
import { Shield, FileSearch, GraduationCap, Sunset, LifeBuoy, Building2, ArrowRight, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { OBJECTIVES, objectiveWhatsAppText, whatsappUrl, type ObjectiveValue } from '../lib/contact';
import { trackEvent } from '../lib/analytics';
import { useSpotlight } from '../hooks/useSpotlight';

const PICKS: Array<{ value: ObjectiveValue; icon: LucideIcon; title: string; hint: string }> = [
  { value: 'term', icon: Shield, title: 'Protect my family’s income', hint: 'How much term cover is enough?' },
  { value: 'review', icon: FileSearch, title: 'Review my existing policies', hint: 'Gaps, nominees, lapsed policies' },
  { value: 'child', icon: GraduationCap, title: 'Plan my child’s education', hint: 'Fund school, college, abroad' },
  { value: 'retirement', icon: Sunset, title: 'Plan retirement income', hint: 'Turn savings into a monthly pension' },
  { value: 'claim', icon: LifeBuoy, title: 'Customer services', hint: 'Nomination changes, minor to major, survival, maturity & death claims' },
  { value: 'business', icon: Building2, title: 'Business insurance', hint: 'Employer-employee, partnership, HUF, MWP' },
];

/**
 * Objective-first entry point: visitors pick their goal before anything else,
 * land on the page that answers it, or open WhatsApp with the goal prefilled.
 */
export default function ObjectivePicker() {
  const onMove = useSpotlight();

  return (
    <section aria-labelledby="objective-heading" className="py-12 lg:py-20 bg-white relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-6 lg:mb-10">
          <div className="max-w-xl">
            <h2 id="objective-heading" className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-midnight">
              What would you like <span className="text-gold italic">help with?</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-500 font-light max-w-sm">
            Pick your goal — read the plain-language guide, or send it straight to Jigisha on WhatsApp.
            {' '}<Link to="/guides" data-cta="home-compare-guides" className="font-semibold text-gold-dark underline underline-offset-2 hover:text-midnight">Prefer a plan comparison?</Link>
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PICKS.map(({ value, icon: Icon, title, hint }) => {
            const to = OBJECTIVES.find((o) => o.value === value)!.to;
            return (
              <li
                key={value}
                onMouseMove={onMove}
                className="spotlight-card group relative flex flex-col rounded-2xl border border-border bg-cream/60 overflow-hidden transition-colors duration-300 hover:border-gold/40"
              >
                <Link
                  to={to}
                  onClick={() => trackEvent('objective_select', { objective: value, action: 'read' })}
                  className="relative z-10 flex items-center gap-3 p-3.5 sm:items-start sm:gap-4 sm:p-5 flex-1 min-h-11"
                >
                  <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 group-hover:border-gold/50 group-hover:bg-gold/10 transition-colors">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold-dark" aria-hidden="true" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-bold text-midnight text-sm sm:text-[15px] leading-snug group-hover:text-gold-dark transition-colors">{title}</span>
                    <span className="hidden sm:block text-xs md:text-sm text-gray-500 font-light mt-0.5">{hint}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-gold-dark shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
                <a
                  href={whatsappUrl(objectiveWhatsAppText(value))}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={`objective-${value}`}
                  className="relative z-10 hidden sm:flex items-center justify-center gap-2 border-t border-border px-5 py-2.5 text-xs font-bold text-midnight hover:bg-whatsapp/10 transition-colors min-h-11"
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
          className="mt-3 flex sm:hidden items-center justify-center gap-2 rounded-xl border border-whatsapp/30 bg-whatsapp/10 px-4 py-3 text-sm font-bold text-midnight min-h-11"
        >
          <MessageCircle className="w-4 h-4 text-whatsapp-dark" aria-hidden="true" />
          Or tell Jigisha your goal on WhatsApp
        </a>
      </div>
    </section>
  );
}
