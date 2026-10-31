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
    <section aria-labelledby="objective-heading" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-9 lg:mb-12">
          <div className="max-w-xl">
            <h2 id="objective-heading" className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-midnight">
              What would you like <span className="text-gold italic">help with?</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-500 font-light max-w-sm">
            Pick your goal — read the plain-language guide, or send it straight to Jigisha on WhatsApp.
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
                  className="relative z-10 flex items-start gap-4 p-5 flex-1 min-h-11"
                >
                  <span className="w-11 h-11 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 group-hover:border-gold/50 group-hover:bg-gold/10 transition-colors">
                    <Icon className="w-5 h-5 text-gold-dark" aria-hidden="true" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-bold text-midnight text-[15px] leading-snug group-hover:text-gold-dark transition-colors">{title}</span>
                    <span className="block text-xs md:text-sm text-gray-500 font-light mt-0.5">{hint}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-gold-dark shrink-0 mt-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
                <a
                  href={whatsappUrl(objectiveWhatsAppText(value))}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={`objective-${value}`}
                  className="relative z-10 flex items-center justify-center gap-2 border-t border-border px-5 py-2.5 text-xs font-bold text-midnight hover:bg-whatsapp/10 transition-colors min-h-11"
                >
                  <MessageCircle className="w-4 h-4 text-whatsapp-dark" aria-hidden="true" />
                  Ask about this on WhatsApp
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
