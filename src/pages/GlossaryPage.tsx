import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Search } from 'lucide-react';
import { GLOSSARY, GLOSSARY_FAQS, GLOSSARY_TERMS } from '../data/glossary';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSEO } from '../hooks/useSEO';
import { SITE_URL, faqJsonLd } from '../lib/seo';
import { whatsappUrl } from '../lib/contact';

/**
 * Plain-English glossary. The copy is written to be quotable: each definition
 * leads with the meaning, names the term, and avoids hedging in the first
 * sentence (the AEO standard in docs/SEO-GEO-AEO-AUDIT.md §4).
 */
export default function GlossaryPage() {
  const [query, setQuery] = useState('');
  useScrollReveal();

  const definedTerms = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${SITE_URL}/glossary#terms`,
    name: 'LIC and life insurance terms explained in plain English',
    url: `${SITE_URL}/glossary`,
    inLanguage: 'en-IN',
    hasDefinedTerm: GLOSSARY_TERMS.map((t) => ({
      '@type': 'DefinedTerm',
      '@id': `${SITE_URL}/glossary#${t.id}`,
      name: t.term,
      description: t.answer,
      url: `${SITE_URL}/glossary#${t.id}`,
      inDefinedTermSet: `${SITE_URL}/glossary#terms`,
    })),
  };

  useSEO({
    title: 'LIC & Life Insurance Glossary in Plain English',
    description:
      `Plain-English meanings for ${GLOSSARY_TERMS.length} LIC and life insurance terms: sum assured, nominee, maturity, lapsed policy, revival, surrender value, MDRT and more. By an LIC advisor in Ahmedabad.`,
    path: '/glossary',
    keywords:
      'LIC glossary, life insurance terms in plain English, what is sum assured, what is a nominee, lapsed policy meaning, surrender value meaning, MDRT meaning, insurance terms Ahmedabad',
    breadcrumbLabel: 'Glossary',
    jsonLd: [definedTerms, faqJsonLd(GLOSSARY_FAQS)],
  });

  const q = query.trim().toLowerCase();
  const matches = useMemo(() => {
    if (!q) return GLOSSARY;
    return GLOSSARY.map((group) => ({
      ...group,
      terms: group.terms.filter((t) => `${t.term} ${t.answer} ${t.example}`.toLowerCase().includes(q)),
    })).filter((group) => group.terms.length > 0);
  }, [q]);

  const resultCount = matches.reduce((n, group) => n + group.terms.length, 0);

  return (
    <section className="pt-20 lg:pt-24 pb-16 lg:pb-24 bg-cream relative overflow-hidden">
      <div className="container relative z-10 max-w-4xl">
        <p className="inline-block px-3 py-1 bg-white border border-gold/20 text-gold-dark text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-4">
          Plain-English glossary
        </p>
        <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">
          LIC &amp; Life Insurance Terms, <span className="text-gold italic">Explained Simply</span>
        </h1>
        <p className="text-base lg:text-lg text-gray-600 mb-3 leading-relaxed font-light">
          <strong className="text-midnight font-semibold">
            Jigisha Kiran Shah, an LIC advisor in Shela, Ahmedabad practising since 2004, wrote this glossary so any family can read its policy without a glossary of its own.
          </strong>{' '}
          Each entry gives the meaning first, then a concrete example. No jargon on purpose.
        </p>
        <p className="text-xs text-gray-500 font-light mb-8">
          {GLOSSARY_TERMS.length} terms · Updated November 2026 · Conditions depend on your policy document and current LIC rules; official sources are linked below.
        </p>

        <div className="spotlight-card bg-white rounded-2xl border border-border shadow-sm p-4 sm:p-5 mb-8">
          <label htmlFor="glossary-search" className="sr-only">Search insurance terms</label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
            <input
              id="glossary-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a term — try “nominee”, “lapsed” or “MDRT”"
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white text-midnight text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold min-h-11"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 font-light" aria-live="polite">
            {q ? `${resultCount} of ${GLOSSARY_TERMS.length} terms match “${query.trim()}”.` : `Showing all ${GLOSSARY_TERMS.length} terms.`}
          </p>
        </div>

        {q && resultCount === 0 && (
          <div className="text-center py-8 mb-8">
            <p className="text-gray-600 font-light mb-4">No matching term. Ask Jigisha directly — she answers questions like this every day.</p>
            <a
              href={whatsappUrl('Hi Jigisha ben, I could not find this insurance term in your glossary. My question is: ')}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="glossary-whatsapp-no-result"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-midnight text-white font-bold text-sm hover:bg-gold transition-colors min-h-11"
            >
              Ask on WhatsApp
            </a>
          </div>
        )}

        <div className="space-y-12">
          {matches.map((group) => (
            <section key={group.id} aria-labelledby={`group-${group.id}`}>
              <div className="mb-5">
                <h2 id={`group-${group.id}`} className="text-xl sm:text-2xl font-display font-bold text-midnight mb-2">
                  {group.title}
                </h2>
                <p className="text-sm text-gray-600 font-light">{group.intro}</p>
              </div>

              <div className="space-y-3">
                {group.terms.map((term) => (
                  <article
                    key={term.id}
                    id={term.id}
                    className="spotlight-card bg-white rounded-2xl border border-border p-5 sm:p-6 scroll-mt-24 relative overflow-hidden"
                  >
                    <h3 className="font-display font-bold text-midnight text-lg mb-2">
                      {term.term}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-2">
                      {term.answer}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                      <span className="font-semibold text-midnight">In practice:</span> {term.example}
                    </p>
                    {term.href && (
                      <p className="mt-3 text-sm">
                        {/^https?:\/\//.test(term.href) ? (
                          <a
                            href={term.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-semibold text-gold-dark underline underline-offset-2 hover:text-gold"
                          >
                            Read the official source <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                          </a>
                        ) : (
                          <Link
                            to={term.href}
                            className="inline-flex items-center gap-1.5 font-semibold text-gold-dark underline underline-offset-2 hover:text-gold"
                          >
                            Read more <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                          </Link>
                        )}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-border p-5 sm:p-6">
            <BookOpen className="w-5 h-5 text-gold-dark mb-3" aria-hidden="true" />
            <h2 className="font-display font-bold text-midnight text-lg mb-2">Still confusing?</h2>
            <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
              Read the{' '}
              <Link to="/resources" className="font-semibold text-gold-dark underline underline-offset-2 hover:text-gold">
                official LIC links and forms
              </Link>
              , or ask about a specific line in your own policy. Jigisha reviews existing policies from any agent — no obligation to buy.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-3 bg-midnight text-white text-sm font-bold rounded-xl hover:bg-gold transition-colors min-h-11"
            >
              Ask a question <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-border p-5 sm:p-6">
            <h2 className="font-display font-bold text-midnight text-lg mb-2">One page for all your policies</h2>
            <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
              The free{' '}
              <Link to="/policy-card" className="font-semibold text-gold-dark underline underline-offset-2 hover:text-gold">
                family policy card
              </Link>{' '}
              lists every policy, its cover, maturity date and nominee in one printable page — the fastest way to spot a missing nominee or a lapsed policy.
            </p>
            <a
              href={whatsappUrl('Hi Jigisha ben, I would like my family policy card reviewed.')}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="glossary-whatsapp"
              className="inline-flex items-center justify-center px-5 py-3 bg-white border border-gold/40 text-gold-dark text-sm font-bold rounded-xl hover:bg-gold hover:text-white transition-colors min-h-11"
            >
              Message Jigisha on WhatsApp
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-500 font-light mt-8 leading-relaxed">
          This glossary is general information, not advice or an official LIC communication. Products of Life Insurance Corporation of India are subject to their current brochures and policy terms. For a decision about your own policy, check the policy document or speak to Jigisha Kiran Shah, LIC advisor in Shela, Ahmedabad, +91 98240 25435.
        </p>
      </div>
    </section>
  );
}
