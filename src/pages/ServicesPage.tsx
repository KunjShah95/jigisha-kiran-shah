import Services from '../components/Services'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'

export default function ServicesPage() {
  useSEO({
    title: 'Insurance Services | LIC Plans in Ahmedabad',
    description: 'Explore LIC insurance plans in Ahmedabad: Term Life, Endowment, ULIP, Retirement Planning, Child Education & Health Cover. Expert guidance from 2 Times MDRT advisor Jigisha Kiran Shah.',
    ogTitle: 'LIC Insurance Plans | Jigisha Kiran Shah',
    ogDescription: 'Comprehensive LIC insurance solutions in Ahmedabad. Term life, retirement planning, ULIP, child education plans & more.',
    path: '/services'
  })
  useScrollReveal()

  return <Services />
}
