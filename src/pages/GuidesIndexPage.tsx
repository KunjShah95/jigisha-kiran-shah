import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, GitCompareArrows, Users } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSEO } from '../hooks/useSEO';
import { SITE_URL } from '../lib/seo';
import { GUIDES } from '../data/guides';

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export default function GuidesIndexPage() {
  useSEO({
    title: 'LIC Plan Comparisons & Guides for Ahmedabad Families',
    description:
      'Compare LIC plans side-by-side (term vs endowment, Akshay vs Umang, Labh vs Tarun) and read persona guides for salaried, business owners & seniors. Free advice: +91 98240 25435.',
    path: '/guides',
    keywords:
      'LIC plan comparison Ahmedabad, term vs endowment, Jeevan Akshay vs Umang, Jeevan Labh vs Tarun, LIC for salaried, LIC for business owners, LIC for senior citizens',
    breadcrumbLabel: 'Comparisons & Guides',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/guides/#collection`,
        name: 'LIC Plan Comparisons & Guides — Jigisha Kiran Shah, Ahmedabad',
        url: `${SITE_URL}/guides`,
        publisher: { '@id': `${SITE_URL}/#business` },
        hasPart: GUIDES.map((g) => ({
          '@type': 'Article',
          headline: g.title,
          url: `${SITE_URL}/guides/${g.slug}`,
          datePublished: g.date,
          dateModified: g.updated,
        })),
      },
    ],
  });
  useScrollReveal();

  const comparisons = GUIDES.filter((g) => g.kind === 'comparison');
  const personas = GUIDES.filter((g) => g.kind === 'persona');

  const card = (guide: (typeof GUIDES)[number]) => (
    <Link
      key={guide.slug}
      to={`/guides/${guide.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-gold/40 hover:-translate-y-0.5 active:scale-[0.99] transition-all p-6 lg:p-7"
    >
      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-gold-dark" aria-hidden="true" /> {fmt(guide.date)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-gold-dark" aria-hidden="true" /> {guide.readMinutes} min read
        </span>
      </div>
      <h3 className="text-xl font-display font-bold text-midnight mb-3 group-hover:text-gold-dark transition-colors leading-snug">
        {guide.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed font-light flex-1">
        {guide.metaDescription}
      </p>
      <span className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-gold-dark group-hover:gap-3 transition-all">
        Read the guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </span>
    </Link>
  );

  return (
    <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream relative overflow-hidden">
      <div className="container relative z-10">
        <div className="inline-block px-3 py-1 bg-white border border-gold/20 text-gold-dark text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-4">
          Comparisons & Guides
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">
          Compare LIC Plans <span className="text-gold italic">Side by Side</span>
        </h1>
        <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed font-light max-w-3xl">
          No brochure language. Honest plan-vs-plan comparisons and guides written for
          salaried employees, business owners and senior citizens in Ahmedabad —
          the same advice I give across my Shela desk.
        </p>

        <h2 className="flex items-center gap-2 text-xl font-display font-bold text-midnight mb-4 mt-10">
          <GitCompareArrows className="w-5 h-5 text-gold-dark" aria-hidden="true" /> Plan comparisons
        </h2>
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-4">
          {comparisons.map(card)}
        </div>

        <h2 className="flex items-center gap-2 text-xl font-display font-bold text-midnight mb-4 mt-10">
          <Users className="w-5 h-5 text-gold-dark" aria-hidden="true" /> Guides by who you are
        </h2>
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {personas.map(card)}
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Prefer stories?{' '}
          <Link to="/blog" className="font-bold text-gold-dark hover:underline">
            Read the client stories & guides
          </Link>{' '}
          · or{' '}
          <Link to="/contact" className="font-bold text-gold-dark hover:underline">
            book a free consultation
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
