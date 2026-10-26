import { Link, useParams } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight, CheckCircle2, Star, ExternalLink } from 'lucide-react';
import { pageWhatsAppText, whatsappUrl } from '../lib/contact';
import { NextSteps } from '../components/lead-fields';
import CallbackCard from '../components/CallbackCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSEO } from '../hooks/useSEO';
import { SITE_URL, PHONE_DISPLAY, REVIEW_URL } from '../lib/seo';
import { services } from '../data/services';
import { SERVICE_PAGES, getServicePage } from '../data/servicePages';

const OFFICIAL_SOURCES = [
  { label: 'LIC of India — plans & brochures', href: 'https://licindia.in/' },
  { label: 'IRDAI — insurance regulator', href: 'https://irdai.gov.in/' },
  { label: 'Bima Bharosa — IRDAI grievance portal', href: 'https://bimabharosa.irdai.gov.in/' },
];

/** Service slug → contact-form objective, so "Book" preselects the right goal. */
const CONTACT_OBJECTIVE: Record<string, string> = {
  'term-insurance': 'term',
  retirement: 'retirement',
  'child-education': 'child',
  'wealth-creation': 'savings',
  'health-insurance': 'health',
  'money-back': 'savings',
  'corporate-insurance': 'business',
  'business-insurance-gidc-vatva': 'business',
  'policy-review-claims': 'review',
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const meta = getServicePage(slug);
  const service = services.find((s) => s.id === (meta?.productsFrom ?? slug));

  useSEO({
    title: meta ? meta.title : 'Service not found',
    description: meta
      ? meta.description
      : 'The requested LIC plan page does not exist.',
    path: meta ? `/services/${meta.slug}` : '/services',
    keywords: meta ? meta.keywords : undefined,
    breadcrumbLabel: meta ? meta.h1 : undefined,
    noindex: !meta,
    jsonLd: meta
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: meta.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `${meta.h1} — Jigisha Kiran Shah, LIC Advisor`,
            serviceType: meta.targetQuery,
            description: meta.description,
            url: `${SITE_URL}/services/${meta.slug}`,
            provider: { '@id': `${SITE_URL}/#business` },
            areaServed: { '@type': 'City', name: 'Ahmedabad' },
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'INR',
              description: 'Free initial consultation',
            },
          },
        ]
      : [],
  });
  useScrollReveal();

  if (!meta || !service) {
    return (
      <main style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h1>Service not found</h1>
        <p><Link to="/services">Compare all LIC plans</Link></p>
      </main>
    );
  }

  const others = SERVICE_PAGES.filter((s) => s.slug !== meta.slug);
  const Icon = service.icon;

  return (
    <>
      <section className="pt-28 lg:pt-32 pb-10 lg:pb-14 bg-cream relative overflow-hidden">
        <div className="container relative z-10">
          <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-4">
            <Link to="/" className="hover:text-gold-dark">Home</Link>
            {' · '}
            <Link to="/services" className="hover:text-gold-dark">Services</Link>
            {' · '}
            <span aria-current="page">{service.title}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-gold-dark" aria-hidden="true" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark">
              {service.tagline}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">
            {meta.h1}
          </h1>
          {meta.intro.map((p, i) => (
            <p key={i} className="text-base lg:text-lg text-gray-600 leading-relaxed font-light max-w-3xl mb-4">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="tel:+919824025435"
              data-cta="service-call"
              className="inline-flex items-center gap-2 bg-midnight text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-midnight-light transition-colors min-h-11"
            >
              <Phone className="w-5 h-5" aria-hidden="true" /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={whatsappUrl(pageWhatsAppText(`/services/${meta.slug}`))}
              data-cta="service-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-whatsapp-dark transition-colors min-h-11"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" /> WhatsApp
            </a>
            <a
              href={REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-border text-midnight font-bold py-3 px-6 rounded-xl text-sm hover:border-gold/40 transition-colors min-h-11"
            >
              <Star className="w-5 h-5 text-gold-dark" aria-hidden="true" /> 5.0★ Google Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-10 bg-white">
        <div className="container max-w-4xl">
          <CallbackCard
            objective={CONTACT_OBJECTIVE[meta.slug]}
            context={`${meta.h1} — /services/${meta.slug}`}
          />
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-display font-bold text-midnight mb-6">
            {service.id === 'policy-review-claims' ? 'What the review & claim help includes' : `${service.title} plans compared`}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.products.map((p) => (
              <div key={p.name} className="p-6 bg-cream rounded-2xl border border-border">
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-dark mb-1">
                  {p.type}
                </div>
                <h3 className="font-bold text-midnight text-lg mb-2">{p.name}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{p.description}</p>
                <ul className="space-y-2">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-cream">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-display font-bold text-midnight mb-6">
            {service.title} — common questions
          </h2>
          <div className="space-y-4">
            {meta.faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl border border-border p-5">
                <h3 className="font-bold text-midnight mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          {meta.relatedPost && (
            <Link
              to={meta.relatedPost.to}
              className="group flex items-center justify-between gap-4 mt-6 p-5 bg-midnight rounded-2xl border border-white/10 hover:border-gold/40 transition-colors"
            >
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-gold mb-1">
                  Related story
                </span>
                <span className="font-bold text-white group-hover:text-gold transition-colors">
                  {meta.relatedPost.label}
                </span>
              </span>
              <ArrowRight className="w-5 h-5 text-gold shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          )}
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-border p-5">
              <NextSteps />
              <Link
                to={`/contact?objective=${CONTACT_OBJECTIVE[meta.slug] ?? ''}`}
                data-cta="service-book"
                className="mt-4 inline-flex items-center gap-2 bg-midnight text-white font-bold py-3 px-5 rounded-xl text-sm hover:bg-gold transition-colors min-h-11"
              >
                Book a free consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl border border-border p-5">
              <p className="text-[11px] font-bold uppercase tracking-wider mb-2 text-gold-dark">Check the official terms</p>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                Plan features on this page are simplified summaries. Benefits, bonus rates, eligibility and
                exclusions are set by LIC and can change — always read the current sales brochure and policy
                document before you buy.
              </p>
              <ul className="space-y-2 text-sm">
                {OFFICIAL_SOURCES.map((src) => (
                  <li key={src.href}>
                    <a href={src.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-midnight hover:text-gold-dark">
                      {src.label} <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h2 className="text-xl font-display font-bold text-midnight mt-10 mb-4">Explore other LIC plans</h2>
          <div className="flex flex-wrap gap-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/services/${o.slug}`}
                className="px-4 py-2 bg-white border border-border rounded-full text-sm font-bold text-midnight hover:border-gold/40 transition-colors"
              >
                {o.h1}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
