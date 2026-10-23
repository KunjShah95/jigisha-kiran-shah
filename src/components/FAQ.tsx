import { useState, useMemo } from 'react';
import { Plus, Search } from 'lucide-react';
import { FAQS } from '../lib/seo';
import { whatsappUrl } from '../lib/contact';

// Visible FAQ — mirrors the FAQPage JSON-LD exactly.
// Required for Google rich results + AI citation (AEO/GEO).
export default function FAQ({ compact = false, searchable = false }: { compact?: boolean; searchable?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState('');
  const items = compact ? FAQS.slice(0, 5) : FAQS;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((f) => `${f.q} ${f.a}`.toLowerCase().includes(q));
  }, [items, query]);

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

        {searchable && (
          <div className="mb-6">
            <label htmlFor="faq-search" className="sr-only">Search frequently asked questions</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setOpen(null); }}
                placeholder="Search questions (e.g. claims, pension, MDRT)"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white text-midnight focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold min-h-11"
              />
            </div>
            {query.trim() && (
              <p className="text-xs text-gray-500 mt-2 font-light">
                {filtered.length} result{filtered.length === 1 ? '' : 's'} for "{query.trim()}"
              </p>
            )}
          </div>
        )}

        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 font-light mb-4">No matching questions. Try a different word, or ask Jigisha directly.</p>
              <a
                href={whatsappUrl('Hi Jigisha ben, I searched your FAQ and could not find an answer. My question is: ')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-midnight text-white font-bold text-sm hover:bg-gold transition-colors min-h-11"
              >
                Ask on WhatsApp
              </a>
            </div>
          ) : (
            filtered.map((f, i) => {
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
            })
          )}
        </div>
      </div>
    </section>
  );
}
