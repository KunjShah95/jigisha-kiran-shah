import Services from '../components/Services'
import FAQ from '../components/FAQ'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'

export default function ServicesPage() {
  useSEO({
    title: 'LIC Insurance Plans Ahmedabad | Term, Endowment, ULIP, Pension',
    description:
      'All LIC insurance plans & services in Ahmedabad: Term Life (Tech Term, Jeevan Amar), Endowment (Jeevan Labh), Money-Back, Retirement & Pension (Jeevan Akshay VII, Jeevan Umang), Child Education (Jeevan Tarun), Health & Corporate cover. Advisor Jigisha Kiran Shah.',
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
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Term Life Insurance', url: 'https://jigishakiranshah.in/services' },
          { '@type': 'ListItem', position: 2, name: 'Retirement & Pension Planning', url: 'https://jigishakiranshah.in/services' },
          { '@type': 'ListItem', position: 3, name: 'Child Education Plans', url: 'https://jigishakiranshah.in/services' },
          { '@type': 'ListItem', position: 4, name: 'Wealth Creation & Endowment', url: 'https://jigishakiranshah.in/services' },
          { '@type': 'ListItem', position: 5, name: 'Health Insurance', url: 'https://jigishakiranshah.in/services' },
          { '@type': 'ListItem', position: 6, name: 'Corporate & HUF Insurance', url: 'https://jigishakiranshah.in/services' },
        ],
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
