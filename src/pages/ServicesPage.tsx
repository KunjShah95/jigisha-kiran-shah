import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Services from '../components/Services'
import FAQ from '../components/FAQ'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'
import { useSpotlight } from '../hooks/useSpotlight'
import { SITE_URL } from '../lib/seo'
import { SERVICE_PAGES } from '../data/servicePages'

export default function ServicesPage() {
  const onMove = useSpotlight()
  useSEO({
    title: 'LIC Insurance Plans Ahmedabad | Term, Endowment, ULIP, Pension',
    description:
      'All LIC insurance plans & services in Ahmedabad: Term Life (Tech Term, Jeevan Amar), Endowment (Jeevan Labh), Money-Back, Retirement & Pension (Jeevan Akshay VII, Jeevan Umang), Child Education (Jeevan Tarun), Health, Corporate cover and policy review & claims help. Advisor Jigisha Kiran Shah.',
    ogTitle: 'LIC Insurance Plans & Services Ahmedabad',
    ogDescription:
      'Term life, retirement, ULIP, pension, child education & health insurance in Ahmedabad. Compare LIC plans with expert advisor Jigisha Kiran Shah. Free consultation.',
    path: '/services',
    keywords:
      'LIC plans Ahmedabad, term insurance Ahmedabad, LIC Tech Term, Jeevan Amar, Jeevan Labh, Jeevan Umang, Jeevan Akshay, Jeevan Tarun, pension plans Ahmedabad, child education plans LIC, ULIP Ahmedabad',
    breadcrumbLabel: 'Services',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'LIC Insurance Services in Ahmedabad',
        itemListElement: SERVICE_PAGES.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: p.h1,
          url: `${SITE_URL}/services/${p.slug}`,
        })),
      },
    ],
  })
  useScrollReveal()

  return (
    <>
      <Services />

      {/* Servicing work for policies already owned. Kept separate from the plan
          cards above because the visitor is not shopping for a product —
          they are trying to fix, find or claim something. */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-midnight mb-3">
            Servicing an existing LIC policy
          </h2>
          <p className="text-base text-gray-600 font-light leading-relaxed max-w-3xl mb-8">
            Already hold a LIC policy — yours, a parent’s, or one whose agent has disappeared? These
            are the jobs that decide whether a claim is paid in weeks or in months, and they are
            handled for any LIC policy regardless of who sold it.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {SERVICE_PAGES.filter((p) => p.sections?.length).map((p) => (
              <Link
                key={p.slug}
                to={`/services/${p.slug}`}
                onMouseMove={onMove}
                className="spotlight-card group flex flex-col justify-between bg-white rounded-2xl border border-border p-6 hover:border-gold/40 hover:shadow-lg transition-all relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-lg text-midnight mb-2 group-hover:text-gold-dark transition-colors">
                    {p.h1}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{p.description}</p>
                </div>
                <span className="relative z-10 inline-flex items-center gap-2 mt-4 text-sm font-bold text-gold-dark group-hover:gap-3 transition-all">
                  What it involves <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ compact />
    </>
  )
}
