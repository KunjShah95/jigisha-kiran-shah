import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSEO } from '../hooks/useSEO';
import { AREAS } from '../data/areas';

export default function AreasIndexPage() {
  useSEO({
    title: 'Areas Served | LIC Advisor Shela, Bopal, Satellite, SG Highway',
    description:
      'LIC advisor Jigisha Kiran Shah serves Shela, South Bopal, Bopal, Satellite, SG Highway, Science City and all Ahmedabad areas. Term insurance, pension, child education plans & claims support. Call +91 98240 25435.',
    path: '/areas',
    keywords:
      'LIC advisor Shela, LIC agent South Bopal, LIC advisor Satellite Ahmedabad, LIC agent SG Highway, LIC advisor Bopal, LIC agent Science City',
    breadcrumbLabel: 'Areas Served',
  });
  useScrollReveal();

  return (
    <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream relative overflow-hidden">
      <div className="container relative z-10">
        <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">
          LIC Advisor Areas Served Across Ahmedabad
        </h1>
        <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed font-light max-w-3xl">
          Based in Shela at Orchid Legacy, Applewoods Township — serving families across
          Ahmedabad by phone, WhatsApp, and in-person meetings. Choose your area for
          local directions, landmarks, and plan guidance.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AREAS.map((a) => (
            <Link
              key={a.slug}
              to={`/areas/${a.slug}`}
              className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-gold/40 transition-all min-h-11"
            >
              <span className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                <MapPin className="w-5 h-5 text-gold-dark group-hover:text-white transition-colors" aria-hidden="true" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-bold text-midnight text-[15px]">LIC Advisor {a.name}</span>
                <span className="block text-xs text-gray-500 font-light">Plans, directions & FAQs</span>
              </span>
              <ArrowRight className="w-5 h-5 text-gold-dark shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
