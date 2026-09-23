import { Link, useParams } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Star, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSEO } from '../hooks/useSEO';
import { SITE_URL, PHONE_DISPLAY, ADDRESS, REVIEW_URL } from '../lib/seo';
import { AREAS, getArea } from '../data/areas';

const SERVICES = [
  'Term Life Insurance (Tech Term, Jeevan Amar)',
  'Retirement & Pension (Jeevan Akshay VII, Jeevan Umang)',
  'Child Education (Jeevan Tarun, Children\u2019s Money Back)',
  'Endowment & Money-Back (Jeevan Labh, Bima Shree)',
  'Health Cover (Arogya Rakshak, Cancer Cover)',
  'Claims assistance & policy servicing',
];

export default function AreaPage() {
  const { slug } = useParams<{ slug: string }>();
  const area = getArea(slug);

  useSEO({
    title: area
      ? `LIC Advisor in ${area.name}, Ahmedabad | Term, Pension, Child Plans`
      : 'Area not found',
    description: area
      ? `LIC advisor serving ${area.name}, Ahmedabad — term insurance, retirement & pension plans, child education and claims support from Jigisha Kiran Shah (22+ yrs, 2x MDRT). Call ${PHONE_DISPLAY}.`
      : 'The requested area page does not exist.',
    path: area ? `/areas/${area.slug}` : '/areas',
    keywords: area
      ? `LIC advisor ${area.name}, LIC agent ${area.name} Ahmedabad, life insurance ${area.name}, term insurance ${area.name}, pension plans ${area.name}`
      : undefined,
    breadcrumbLabel: area ? `LIC Advisor ${area.name}` : undefined,
    noindex: !area,
    jsonLd: area
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: area.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'InsuranceAgency',
            name: `Jigisha Kiran Shah - LIC Advisor (${area.name})`,
            url: `${SITE_URL}/areas/${area.slug}`,
            telephone: '+919824025435',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Orchid Legacy, D3-1303, Applewoods Township, Shela',
              addressLocality: 'Ahmedabad',
              addressRegion: 'Gujarat',
              postalCode: '380058',
              addressCountry: 'IN',
            },
            areaServed: { '@type': 'Place', name: `${area.name}, Ahmedabad` },
          },
        ]
      : [],
  });
  useScrollReveal();

  if (!area) {
    return (
      <main className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream">
        <div className="container relative z-10 max-w-xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">Area not found</h1>
          <p className="text-base text-gray-600 font-light mb-8">That service area does not exist.</p>
          <Link to="/areas" className="inline-flex items-center justify-center px-6 py-3 bg-midnight text-white text-sm font-bold rounded-xl hover:bg-gold active:scale-[0.98] transition-all min-h-11">See all areas served</Link>
        </div>
      </main>
    );
  }

  const others = AREAS.filter((a) => a.slug !== area.slug);

  return (
    <>
      <section className="pt-28 lg:pt-32 pb-10 lg:pb-14 bg-cream relative overflow-hidden">
        <div className="container relative z-10">
          <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-4">
            <Link to="/" className="hover:text-gold-dark">Home</Link>
            {' \u00b7 '}
            <Link to="/areas" className="hover:text-gold-dark">Areas Served</Link>
            {' \u00b7 '}
            <span aria-current="page">{area.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">
            LIC Advisor in {area.name}, Ahmedabad
          </h1>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-light max-w-3xl">
            {area.intro}
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="tel:+919824025435"
              className="inline-flex items-center gap-2 bg-midnight text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-midnight-light transition-colors min-h-11"
            >
              <Phone className="w-5 h-5" aria-hidden="true" /> Call {PHONE_DISPLAY}
            </a>
            <a
              href="https://wa.me/919824025435"
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
              <Star className="w-5 h-5 text-gold-dark" aria-hidden="true" /> 5.0\u2605 Google Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-white">
        <div className="container grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-display font-bold text-midnight mb-4">
              LIC plans for {area.name} families
            </h2>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s} className="flex items-start gap-3 text-gray-600">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-gold-dark hover:gap-3 transition-all"
            >
              Compare all LIC plans <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <h2 className="text-2xl font-display font-bold text-midnight mt-10 mb-4">
              {area.name}: nearby landmarks & reach
            </h2>
            <ul className="flex flex-wrap gap-2 mb-4">
              {area.landmarks.map((l) => (
                <li key={l} className="px-3 py-1.5 bg-cream border border-border rounded-full text-sm text-gray-600">
                  {l}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed font-light">{area.commute}</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-midnight mb-4">
              Visit the {area.name}-side office
            </h2>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                title={`Map — office serving ${area.name}, Ahmedabad`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(area.mapQuery)}&output=embed`}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-4 p-5 bg-cream rounded-2xl border border-border">
              <p className="flex items-start gap-2 text-sm text-gray-600 mb-3">
                <MapPin className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" aria-hidden="true" />
                {ADDRESS}
              </p>
              <p className="text-sm text-gray-600 mb-4">Open Monday\u2013Saturday, 9:00 AM\u20136:00 PM IST</p>
              <a
                href={REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-gold-dark hover:underline"
              >
                Get directions & read Google reviews \u2192
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-cream">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-display font-bold text-midnight mb-6">
            {area.name} — common questions
          </h2>
          <div className="space-y-4">
            {area.faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl border border-border p-5">
                <h3 className="font-bold text-midnight mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <h2 className="text-xl font-display font-bold text-midnight mt-10 mb-4">Also serving nearby</h2>
          <div className="flex flex-wrap gap-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/areas/${o.slug}`}
                className="px-4 py-2 bg-white border border-border rounded-full text-sm font-bold text-midnight hover:border-gold/40 transition-colors"
              >
                LIC Advisor {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
