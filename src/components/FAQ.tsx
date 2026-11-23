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
    <section aria-labelledby="faq-heading" className="py-14 lg:py-24 bg-paper border-t border-border">
      <div className="container max-w-3xl">
        <div className="mb-6 lg:mb-9">
          <h2 id="faq-heading" className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl leading-[1.05]">
            Frequently asked <span className="text-emerald">questions.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink/60">
            Simple answers about LIC plans, retirement, claims and how to get in touch.
          </p>
        </div>

        {searchable && (
          <div className="mb-5">
            <label htmlFor="faq-search" className="sr-only">Search frequently asked questions</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40" aria-hidden="true" />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setOpen(null); }}
                placeholder="Search questions (e.g. claims, pension, fees)"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-emerald/40 focus:border-emerald min-h-11"
              />
            </div>
            {query.trim() && (
              <p className="text-xs text-ink/55 mt-2">
                {filtered.length} result{filtered.length === 1 ? '' : 's'} for "{query.trim()}"
              </p>
            )}
          </div>
        )}

        <div className="border-t border-border">
          {filtered.length === 0 ? (
            <div className="py-10">
              <p className="text-ink/60 mb-4">No matching questions. Try a different word, or ask Jigisha directly.</p>
              <a
                href={whatsappUrl('Hi Jigisha ben, I searched your FAQ and could not find an answer. My question is: ')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-whatsapp text-white font-bold text-sm hover:bg-whatsapp-dark transition-colors min-h-11"
              >
                Ask on WhatsApp
              </a>
            </div>
          ) : (
            filtered.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-center justify-between gap-4 text-left py-4 lg:py-5 min-h-11 group"
                  >
                    <h3 className={`font-bold text-[15px] lg:text-base wrap-anywhere transition-colors ${isOpen ? 'text-emerald-deep' : 'text-ink group-hover:text-emerald-deep'}`}>{f.q}</h3>
                    <span
                      aria-hidden="true"
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-emerald text-white rotate-45' : 'bg-sage text-emerald-deep'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>
                  <div id={`faq-panel-${i}`} hidden={!isOpen} className="pb-5 pr-12">
                    <p className="text-sm lg:text-base text-ink/65 leading-relaxed">{f.a}</p>
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