import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQS } from '../lib/seo';

// Visible FAQ — mirrors the FAQPage JSON-LD exactly.
// Required for Google rich results + AI citation (AEO/GEO).
export default function FAQ({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const items = compact ? FAQS.slice(0, 5) : FAQS;

  return (
    <section aria-labelledby="faq-heading" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="container relative z-10 max-w-4xl">
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-block px-3 py-1 bg-gold/10 text-gold-dark text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-4">
            FAQ — Answered by Jigisha Kiran Shah
          </div>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">
            Frequently Asked <span className="text-gold italic">Questions</span>
          </h2>
          <p className="text-gray-600 font-light">
            Direct answers about LIC plans, retirement, claims & consultations in Ahmedabad.
          </p>
        </div>

        <div className="space-y-3">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen ? 'border-gold/40 shadow-lg shadow-gold/5 bg-[#fffdf8]' : 'border-gray-200 bg-white hover:border-gold/30'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-center justify-between gap-4 text-left px-4 sm:px-5 lg:px-6 py-4 lg:py-5 min-h-11"
                >
                  <h3 className="font-bold text-midnight text-[15px] lg:text-base wrap-anywhere">{f.q}</h3>
                  <span
                    aria-hidden="true"
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? 'bg-gold text-white rotate-45' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
                <div id={`faq-panel-${i}`} hidden={!isOpen} className="px-5 lg:px-6 pb-5">
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed font-light">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
