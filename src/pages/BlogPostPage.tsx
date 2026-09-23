import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Phone, MessageCircle, Calendar, Clock, CheckCircle2, Linkedin, Facebook, Twitter, Link2, Share2, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSEO } from '../hooks/useSEO';
import { SITE_URL, OG_IMAGE, PHONE_DISPLAY, REVIEW_URL } from '../lib/seo';
import { getPost, POSTS } from '../data/posts';

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug);

  useSEO({
    title: post ? post.seoTitle : 'Story not found',
    description: post ? post.metaDescription : 'The requested story does not exist.',
    path: post ? `/blog/${post.slug}` : '/blog',
    keywords: post ? `${post.targetQuery}, LIC advisor Jigisha Kiran Shah` : undefined,
    breadcrumbLabel: post ? post.title : undefined,
    noindex: !post,
    jsonLd: post
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            '@id': `${SITE_URL}/blog/${post.slug}#article`,
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
            headline: post.title,
            description: post.metaDescription,
            image: OG_IMAGE,
            datePublished: post.date,
            dateModified: post.updated,
            author: {
              '@type': 'Person',
              '@id': `${SITE_URL}/#person`,
              name: 'Jigisha Kiran Shah',
              url: `${SITE_URL}/#person`,
            },
            publisher: { '@id': `${SITE_URL}/#business` },
            inLanguage: 'en-IN',
            about: post.targetQuery,
            mentions: ['LIC of India', 'Ahmedabad'],
          },
        ]
      : [],
  });
  useScrollReveal();

  if (!post) {
    return (
      <main style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h1>Story not found</h1>
        <p><Link to="/blog">All stories &amp; guides</Link></p>
      </main>
    );
  }

  const others = POSTS.filter((p) => p.slug !== post.slug);
  const [copied, setCopied] = useState(false);
  const pageUrl = post ? `${SITE_URL}/blog/${post.slug}` : SITE_URL;
  const shareText = post ? `${post.title} — by Jigisha Kiran Shah` : '';
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
  const whatsAppUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${pageUrl}`)}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream relative overflow-hidden">
      <div className="container relative z-10 max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-6">
          <Link to="/" className="hover:text-gold-dark">Home</Link>
          {' \u00b7 '}
          <Link to="/blog" className="hover:text-gold-dark">Stories &amp; Guides</Link>
          {' \u00b7 '}
          <span aria-current="page" className="line-clamp-1">{post.title}</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-5 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
            <span className="font-bold text-midnight">By Jigisha Kiran Shah</span>
            <span className="text-gray-400">LIC Advisor, Ahmedabad — since 2004</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gold-dark" aria-hidden="true" />
              Published {fmt(post.date)} · Updated {fmt(post.updated)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gold-dark" aria-hidden="true" /> {post.readMinutes} min read
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-widest mr-1">
              <Share2 className="w-4 h-4" aria-hidden="true" /> Share
            </span>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" title="Share on LinkedIn" className="inline-flex items-center gap-1.5 text-xs font-bold py-2 px-3 rounded-lg bg-[#0A66C2] text-white hover:opacity-90 transition-opacity min-h-9">
              <Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn
            </a>
            <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp" title="Share on WhatsApp" className="inline-flex items-center gap-1.5 text-xs font-bold py-2 px-3 rounded-lg bg-whatsapp text-white hover:bg-whatsapp-dark transition-colors min-h-9">
              <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp
            </a>
            <a href={xUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on X" title="Share on X" className="inline-flex items-center gap-1.5 text-xs font-bold py-2 px-3 rounded-lg bg-midnight text-white hover:opacity-90 transition-opacity min-h-9">
              <Twitter className="w-4 h-4" aria-hidden="true" /> Post
            </a>
            <a href={fbUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" title="Share on Facebook" className="inline-flex items-center gap-1.5 text-xs font-bold py-2 px-3 rounded-lg bg-[#1877F2] text-white hover:opacity-90 transition-opacity min-h-9">
              <Facebook className="w-4 h-4" aria-hidden="true" /> Facebook
            </a>
            <button type="button" onClick={copyLink} aria-label="Copy link" title="Copy link" className="inline-flex items-center gap-1.5 text-xs font-bold py-2 px-3 rounded-lg bg-white border border-border text-midnight hover:border-gold/50 transition-colors min-h-9">
              {copied ? <Check className="w-4 h-4 text-green-600" aria-hidden="true" /> : <Link2 className="w-4 h-4" aria-hidden="true" />}
              {copied ? 'Copied!' : 'Copy link'}
            </button>
            <a href="https://www.linkedin.com/in/jigisha-kiran-shah-4b48851b2" target="_blank" rel="noopener noreferrer" aria-label="Follow on LinkedIn" title="Follow Jigisha on LinkedIn" className="inline-flex items-center gap-1.5 text-xs font-bold py-2 px-3 rounded-lg bg-white border border-border text-[#0A66C2] hover:border-[#0A66C2]/50 transition-colors min-h-9">
              <Linkedin className="w-4 h-4" aria-hidden="true" /> Follow
            </a>
          </div>
        </header>

        {post.sections.map((sec, i) => (
          <section key={i} className="mb-10">
            {sec.heading && (
              <h2 className="text-2xl font-display font-bold text-midnight mb-4 mt-2">{sec.heading}</h2>
            )}
            {sec.paras.map((p, j) => (
              <p key={j} className="text-[15px] lg:text-base text-gray-700 leading-relaxed font-light mb-5">
                {p}
              </p>
            ))}
            {sec.quote && (
              <blockquote className="border-l-4 border-gold bg-white rounded-r-2xl px-6 py-5 my-7 shadow-sm">
                <p className="font-display text-lg md:text-xl text-midnight italic mb-2">{sec.quote.text}</p>
                <cite className="text-xs font-bold text-gray-500 not-italic">— {sec.quote.by}</cite>
              </blockquote>
            )}
            {sec.takeaway && (
              <div className="bg-white border border-gold/25 rounded-2xl p-6 my-7">
                <h3 className="font-bold text-midnight mb-3 uppercase text-xs tracking-[0.18em]">
                  What to take away
                </h3>
                <ul className="space-y-2.5">
                  {sec.takeaway.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}

        <div className="rounded-2xl bg-midnight text-white p-7 md:p-8 my-10">
          <h2 className="text-xl font-display font-bold mb-2">Talk to an advisor, free of charge</h2>
          <p className="text-sm text-white/70 font-light mb-5 leading-relaxed">
            Every consultation is a sheet of paper and honest arithmetic — term cover, pension gap, or your
            child&rsquo;s milestone year. Serving Shela, South Bopal, Bopal, Satellite, SG Highway &amp; all Ahmedabad.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+919824025435" className="inline-flex items-center gap-2 bg-gold text-midnight font-bold py-2.5 px-5 rounded-xl text-sm hover:bg-gold-light transition-colors min-h-11">
              <Phone className="w-4 h-4" aria-hidden="true" /> {PHONE_DISPLAY}
            </a>
            <a href="https://wa.me/919824025435" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold py-2.5 px-5 rounded-xl text-sm hover:bg-whatsapp-dark transition-colors min-h-11">
              <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp
            </a>
            <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 text-white font-bold py-2.5 px-5 rounded-xl text-sm hover:bg-white/20 transition-colors min-h-11">
              5.0&#9733; Google Reviews
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed mb-10">
          Names and identifying details in these stories have been changed to protect client privacy. Premiums,
          payouts and illustrations mentioned are examples, not quotations; actual figures depend on age, health
          and plan terms. Plans referenced are LIC of India products; this page is an independent advisor&rsquo;s
          commentary and not an official LIC communication.
        </p>

        {others.length > 0 && (
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-display font-bold text-midnight mb-4">More stories</h2>
            <div className="flex flex-col gap-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
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
