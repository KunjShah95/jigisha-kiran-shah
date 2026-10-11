import { Link } from 'react-router-dom';
import { Shield, FileSearch, GraduationCap, Sunset, LifeBuoy, Building2, ArrowRight, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { OBJECTIVES, objectiveWhatsAppText, whatsappUrl, type ObjectiveValue } from '../lib/contact';
import { trackEvent } from '../lib/analytics';

const PICKS: Array<{ value: ObjectiveValue; icon: LucideIcon; title: string; hint: string }> = [
  { value: 'term', icon: Shield, title: 'Protect my family’s income', hint: 'How much term cover is enough?' },
  { value: 'review', icon: FileSearch, title: 'Review my existing policies', hint: 'Gaps, nominees, lapsed policies' },
  { value: 'child', icon: GraduationCap, title: 'Plan my child’s education', hint: 'Fund school, college, abroad' },
  { value: 'retirement', icon: Sunset, title: 'Plan retirement income', hint: 'Turn savings into a monthly pension' },
  { value: 'claim', icon: LifeBuoy, title: 'Get help with a claim', hint: 'Death, maturity or survival claims' },
  { value: 'business', icon: Building2, title: 'Cover my business & team', hint: 'Key-person, employee, HUF, MWP' },
];

/**
 * Objective-first entry point: visitors pick their goal before anything else,
 * land on the page that answers it, or open WhatsApp with the goal prefilled.
 */
export default function ObjectivePicker() {
  return (
    <section aria-labelledby="objective-heading" className="py-12 lg:py-16 bg-cream relative overflow-hidden">
      <div className="container reveal">
        <div className="max-w-2xl mb-6 lg:mb-8">
          <div className="inline-block px-3 py-1 bg-gold/10 text-gold-dark text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-3">
            Start Here
          </div>
          <h2 id="objective-heading" className="text-2xl md:text-3xl font-display font-medium text-midnight">
            What would you like <span className="text-gold italic">help with?</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-light mt-2">
            Pick your goal — read the plain-language guide, or send it straight to Jigisha on WhatsApp.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {PICKS.map(({ value, icon: Icon, title, hint }) => {
            const to = OBJECTIVES.find((o) => o.value === value)!.to;
            return (
              <li key={value} className="flex flex-col bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-gold/40 transition-all">
                <Link
                  to={to}
                  onClick={() => trackEvent('objective_select', { objective: value, action: 'read' })}
                  className="group flex items-start gap-4 p-5 flex-1 min-h-11"
                >
                  <span className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                    <Icon className="w-5 h-5 text-gold-dark group-hover:text-white transition-colors" aria-hidden="true" />
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
                  className="flex items-center justify-center gap-2 border-t border-border px-5 py-2.5 text-xs font-bold text-midnight hover:bg-whatsapp/10 rounded-b-2xl transition-colors min-h-11"
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
