import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSEO } from '../hooks/useSEO';
import { SITE_URL } from '../lib/seo';
import { POSTS } from '../data/posts';

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogIndexPage() {
  useSEO({
    title: 'Stories & Guides | LIC Advice from 22 Years in Ahmedabad',
    description:
      'Real stories and plain-language guides from LIC advisor Jigisha Kiran Shah (22+ years, 2x MDRT): term insurance, pension plans, child education savings, and claims — written for Ahmedabad families.',
    path: '/blog',
    keywords:
      'LIC blog Ahmedabad, term insurance stories, LIC pension advice, child education plan India, LIC claims help',
    breadcrumbLabel: 'Stories & Guides',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': `${SITE_URL}/blog/#blog`,
        name: 'Stories & Guides — Jigisha Kiran Shah, LIC Advisor Ahmedabad',
        url: `${SITE_URL}/blog`,
        publisher: { '@id': `${SITE_URL}/#business` },
        blogPost: POSTS.map((p) => ({
          '@type': 'BlogPosting',
          headline: p.title,
          url: `${SITE_URL}/blog/${p.slug}`,
          datePublished: p.date,
          dateModified: p.updated,
        })),
      },
    ],
  });
  useScrollReveal();

  return (
    <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream relative overflow-hidden">
      <div className="container relative z-10">
        <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">
          Stories &amp; Guides
        </h1>
        <p className="text-base lg:text-lg text-gray-600 mb-10 leading-relaxed font-light max-w-3xl">
          Twenty-two years of advising Ahmedabad families teaches you more than any brochure.
          These are true-to-life stories — names changed — and the practical rules behind them:
          term cover, pensions, children&rsquo;s education, and getting claims paid.
        </p>
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-gold/40 transition-all p-6 lg:p-7"
            >
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-dark" aria-hidden="true" /> {fmt(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold-dark" aria-hidden="true" /> {post.readMinutes} min read
                </span>
              </div>
              <h2 className="text-xl font-display font-bold text-midnight mb-3 group-hover:text-gold-dark transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed font-light flex-1">
                {post.metaDescription}
              </p>
              <span className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-gold-dark group-hover:gap-3 transition-all">
                Read the story <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
