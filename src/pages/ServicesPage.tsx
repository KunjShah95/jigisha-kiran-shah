import Services from '../components/Services'
import FAQ from '../components/FAQ'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'
import { SITE_URL } from '../lib/seo'
import { SERVICE_PAGES } from '../data/servicePages'

export default function ServicesPage() {
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
      <FAQ compact />
    </>
  )
}
