import Services from '../components/Services'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'

export default function ServicesPage() {
  useSEO({
    title: 'LIC Insurance Plans Ahmedabad | Life Insurance Agent Services',
    description: 'Explore all LIC insurance plans & services in Ahmedabad: Term Life Insurance, Endowment, ULIP, Retirement Planning, Pension Plans, Child Education Plans & Health Cover. Expert guidance from life insurance advisor Jigisha Kiran Shah serving all Ahmedabad areas.',
    ogTitle: 'LIC Insurance Plans & Services Ahmedabad',
    ogDescription: 'Comprehensive LIC insurance solutions in Ahmedabad. Term life, retirement planning, ULIP, pension plans, child education & health insurance. Find your nearest LIC agent now.',
    path: '/services'
  })
  useScrollReveal()

  return <Services />
}
