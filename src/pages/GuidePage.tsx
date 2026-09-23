import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Phone, MessageCircle, Calendar, Clock, Linkedin, Link2, Share2, Check, Plus } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSEO } from '../hooks/useSEO';
import { SITE_URL, OG_IMAGE, PHONE_DISPLAY, REVIEW_URL } from '../lib/seo';
import { getGuide, GUIDES } from '../data/guides';

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export default function GuidePage() {
  const { slug } = useParams<{ slug: string }>();
  const guide = getGuide(slug);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pageUrl = guide ? `${SITE_URL}/guides/${guide.slug}` : SITE_URL;
  const shareText = guide ? `${guide.title} — by Jigisha Kiran Shah` : '';
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
  const whatsAppUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${pageUrl}`)}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  useSEO({
    title: guide ? guide.seoTitle : 'Guide not found',
    description: guide ? guide.metaDescription : 'The requested guide does not exist.',
    path: guide ? `/guides/${guide.slug}` : '/guides',
    keywords: guide ? `${guide.targetQuery}, LIC advisor Jigisha Kiran Shah` : undefined,
    breadcrumbLabel: guide ? guide.title : undefined,
    noindex: !guide,
    jsonLd: guide
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            '@id': `${SITE_URL}/guides/${guide.slug}#article`,
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/guides/${guide.slug}` },
            headline: guide.title,
            description: guide.metaDescription,
            image: OG_IMAGE,
            datePublished: guide.date,
            dateModified: guide.updated,
            author: {
              '@type': 'Person',
              '@id': `${SITE_URL}/#person`,
              name: 'Jigisha Kiran Shah',
              url: `${SITE_URL}/#person`,
            },
            publisher: { '@id': `${SITE_URL}/#business` },
            inLanguage: 'en-IN',
            about: guide.targetQuery,
            mentions: ['LIC of India', 'Ahmedabad'],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            '@id': `${SITE_URL}/guides/${guide.slug}#faq`,
            mainEntity: guide.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]
      : [],
  });
  useScrollReveal();

  if (!guide) {
    return (
      <main className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream">
        <div className="container relative z-10 max-w-xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">Guide not found</h1>
          <p className="text-base text-gray-600 font-light mb-8">That guide does not exist or was moved.</p>
          <Link to="/guides" className="inline-flex items-center justify-center px-6 py-3 bg-midnight text-white text-sm font-bold rounded-xl hover:bg-gold active:scale-[0.98] transition-all min-h-11">All comparisons & guides</Link>
        </div>
      </main>
    );
  }

  const others = GUIDES.filter((g) => g.slug !== guide.slug);

  return (
    <article className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream relative overflow-hidden">
      <div className="container relative z-10 max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-6">
          <Link to="/" className="hover:text-gold-dark">Home</Link>
          {' · '}
          <Link to="/guides" className="hover:text-gold-dark">Comparisons & Guides</Link>
          {' · '}
          <span aria-current="page" className="line-clamp-1">{guide.title}</span>
        </nav>

        <header className="mb-10">
          <div className="inline-block px-3 py-1 bg-white border border-gold/20 text-gold-dark text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-4">
            {guide.kind === 'comparison' ? 'Plan comparison' : 'Guide'}
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-5 leading-tight">
            {guide.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
            <span className="font-bold text-midnight">By Jigisha Kiran Shah</span>
            <span className="text-gray-400">LIC Advisor, Ahmedabad — since 2004</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gold-dark" aria-hidden="true" />
              Published {fmt(guide.date)} · Updated {fmt(guide.updated)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gold-dark" aria-hidden="true" /> {guide.readMinutes} min read
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-widest mr-1">
              <Share2 className="w-4 h-4" aria-hidden="true" /> Share
            </span>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" title="Share on LinkedIn" className="inline-flex items-center gap-1.5 text-xs font-bold py-2 px-3 rounded-lg bg-[#0A66C2] text-white hover:opacity-90 hover:-translate-y-0.5 active:scale-95 transition-all min-h-11">
              <Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn
            </a>
            <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp" title="Share on WhatsApp" className="inline-flex items-center gap-1.5 text-xs font-bold py-2 px-3 rounded-lg bg-whatsapp text-white hover:bg-whatsapp-dark hover:-translate-y-0.5 active:scale-95 transition-all min-h-11">
              <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp
            </a>
            <button type="button" onClick={copyLink} aria-label="Copy link" title="Copy link" className="inline-flex items-center gap-1.5 text-xs font-bold py-2 px-3 rounded-lg bg-white border border-border text-midnight hover:border-gold/50 hover:-translate-y-0.5 active:scale-95 transition-all min-h-11">
              {copied ? <Check className="w-4 h-4 text-green-600" aria-hidden="true" /> : <Link2 className="w-4 h-4" aria-hidden="true" />}
              {copied ? 'Copied!' : 'Copy link'}
            </button>
          </div>
        </header>

        {guide.intro.map((p, i) => (
          <p key={i} className="text-base lg:text-lg text-gray-700 leading-relaxed font-light mb-5">
            {p}
          </p>
        ))}

        {guide.sections.map((sec, i) => (
          <section key={i} className="mb-10">
            <h2 className="text-2xl font-display font-bold text-midnight mb-4 mt-2">{sec.heading}</h2>
            {sec.paras.map((p, j) => (
              <p key={j} className="text-[15px] lg:text-base text-gray-700 leading-relaxed font-light mb-5">
                {p}
              </p>
            ))}
          </section>
        ))}

        <section aria-labelledby="guide-faq-heading" className="mb-10">
          <h2 id="guide-faq-heading" className="text-2xl font-display font-bold text-midnight mb-4">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {guide.faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen ? 'border-gold/40 shadow-lg shadow-gold/5 bg-[#fffdf8]' : 'border-gray-200 bg-white hover:border-gold/30'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`guide-faq-panel-${i}`}
                    className="w-full flex items-center justify-between gap-4 text-left px-4 sm:px-5 py-4 min-h-11"
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
                  <div id={`guide-faq-panel-${i}`} hidden={!isOpen} className="px-5 pb-5">
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed font-light">{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="rounded-2xl bg-midnight text-white p-7 md:p-8 my-10">
          <h2 className="text-xl font-display font-bold mb-2">Talk to an advisor, free of charge</h2>
          <p className="text-sm text-white/70 font-light mb-5 leading-relaxed">
            Every consultation is a sheet of paper and honest arithmetic. Serving Shela, South Bopal, Bopal, Satellite, SG Highway &amp; all Ahmedabad.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+919824025435" className="inline-flex items-center gap-2 bg-gold text-midnight font-bold py-2.5 px-5 rounded-xl text-sm hover:bg-gold-light active:scale-[0.98] transition-all min-h-11">
              <Phone className="w-4 h-4" aria-hidden="true" /> {PHONE_DISPLAY}
            </a>
            <a href="https://wa.me/919824025435" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold py-2.5 px-5 rounded-xl text-sm hover:bg-whatsapp-dark active:scale-[0.98] transition-all min-h-11">
              <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp
            </a>
            <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 text-white font-bold py-2.5 px-5 rounded-xl text-sm hover:bg-white/20 active:scale-[0.98] transition-all min-h-11">
              5.0★ Google Reviews
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed mb-10">
          Premiums, payouts and illustrations mentioned are examples, not quotations; actual figures depend on age, health
          and plan terms. Plans referenced are LIC of India products; this page is an independent advisor&rsquo;s
          commentary and not an official LIC communication.
        </p>

        {guide.related.length > 0 && (
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-display font-bold text-midnight mb-4">Keep reading</h2>
            <div className="flex flex-col gap-3">
              {guide.related.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="group flex items-center justify-between gap-4 p-4 bg-white rounded-xl border border-border hover:border-gold/40 hover:-translate-y-0.5 active:scale-[0.99] transition-all"
                >
                  <span className="font-bold text-midnight text-sm group-hover:text-gold-dark transition-colors">{r.label}</span>
                  <span className="text-gold-dark font-bold" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {others.length > 0 && (
          <div className="border-t border-border pt-8 mt-8">
            <h2 className="text-lg font-display font-bold text-midnight mb-4">More guides</h2>
            <div className="flex flex-col gap-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/guides/${p.slug}`}
                  className="group flex items-center justify-between gap-4 p-4 bg-white rounded-xl border border-border hover:border-gold/40 transition-colors"
                >
                  <span className="font-bold text-midnight text-sm group-hover:text-gold-dark transition-colors">{p.title}</span>
                  <span className="text-xs text-gray-400 shrink-0">{p.readMinutes} min</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
