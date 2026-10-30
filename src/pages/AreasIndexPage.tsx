import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSEO } from '../hooks/useSEO';
import { useSpotlight } from '../hooks/useSpotlight';
import { AREAS } from '../data/areas';

const AREAS_FAQS: { q: string; a: string }[] = [
  {
    q: 'Which areas of Ahmedabad does Jigisha Kiran Shah serve?',
    a: 'Jigisha Kiran Shah serves all 12 Ahmedabad areas listed on this page — Shela, South Bopal, Bopal, Satellite, SG Highway, Science City, Vastrapur, Ambawadi, Maninagar, Naranpura, Gota and Chandkheda — plus nearby Gujarat towns by phone, WhatsApp and in-person meetings.',
  },
  {
    q: "Can I get LIC consultation if I don't live near Shela?",
    a: 'Yes. The Shela office at Orchid Legacy, Applewoods Township is the base, but consultations, policy reviews and claim support are handled over phone and WhatsApp for families anywhere in Ahmedabad, so distance from Shela is not a barrier.',
  },
  {
    q: 'Does she visit homes/offices or is it office-only?',
    a: 'Both. Many clients meet at the Shela office; home or office visits can also be arranged across Ahmedabad depending on the appointment. Call or WhatsApp +91 98240 25435 to set up whichever works for you.',
  },
  {
    q: 'How do I know which area page to read?',
    a: 'Pick the area page closest to where you live or work — each one lists local landmarks, a map, and FAQs specific to that part of Ahmedabad. If your area is not listed individually, any nearby area page still applies since plans and service are the same citywide.',
  },
  {
    q: 'Is there an extra charge for areas further from Shela?',
    a: 'No. LIC premiums and advisory service are the same regardless of how far an area is from the Shela office — there is no travel-based pricing difference for consultations, policy servicing or claims help.',
  },
];

export default function AreasIndexPage() {
  const onMove = useSpotlight();
  useSEO({
    title: 'Areas Served | LIC Advisor Shela, Bopal, Satellite, SG Highway',
    description:
      'LIC advisor Jigisha Kiran Shah serves Shela, South Bopal, Bopal, Satellite, SG Highway, Science City and all Ahmedabad areas. Term insurance, pension, child education plans & claims support. Call +91 98240 25435.',
    path: '/areas',
    keywords:
      'LIC advisor Shela, LIC agent South Bopal, LIC advisor Satellite Ahmedabad, LIC agent SG Highway, LIC advisor Bopal, LIC agent Science City',
    breadcrumbLabel: 'Areas Served',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: AREAS_FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  });
  useScrollReveal();

  return (
    <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream relative overflow-hidden">
      <div className="container relative z-10">
        <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">
          LIC Advisor Areas Served Across Ahmedabad
        </h1>
        <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed font-light max-w-3xl">
          <strong className="text-midnight font-semibold">Jigisha Kiran Shah serves 12 Ahmedabad areas as a senior LIC advisor based in Shela.</strong>{' '}
          From her office at Orchid Legacy, Applewoods Township, she has supported 2,700+ families since 2004 by
          phone, WhatsApp, and in-person meetings. Choose your area below for local directions, landmarks, and plan
          guidance.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AREAS.map((a) => (
            <Link
              key={a.slug}
              to={`/areas/${a.slug}`}
              onMouseMove={onMove}
              className="spotlight-card group flex items-center gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-gold/40 transition-all min-h-11 relative overflow-hidden"
            >
              <span className="relative z-10 w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                <MapPin className="w-5 h-5 text-gold-dark group-hover:text-white transition-colors" aria-hidden="true" />
              </span>
              <span className="relative z-10 flex-1 min-w-0">
                <span className="block font-bold text-midnight text-[15px]">LIC Advisor {a.name}</span>
                <span className="block text-xs text-gray-500 font-light">Plans, directions & FAQs</span>
              </span>
              <ArrowRight className="relative z-10 w-5 h-5 text-gold-dark shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 max-w-3xl">
          <h2 className="text-2xl font-display font-bold text-midnight mb-6">
            Areas served — common questions
          </h2>
          <div className="space-y-4">
            {AREAS_FAQS.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl border border-border p-5">
                <h3 className="font-bold text-midnight mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
