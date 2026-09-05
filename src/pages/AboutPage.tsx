import About from '../components/About'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'

export default function AboutPage() {
  useSEO({
    title: 'About Jigisha Kiran Shah | LIC Advisor Ahmedabad, 2x MDRT',
    description:
      'Meet Jigisha Kiran Shah — senior LIC advisor in Shela, Ahmedabad. 22+ years since 2004, 2-time MDRT achiever 2023 & 2024, 2,700+ families, 5.0★ Google rating. Retirement, pension & life insurance specialist.',
    ogTitle: 'Jigisha Kiran Shah — Top LIC Agent in Ahmedabad',
    ogDescription:
      'Senior LIC advisor with 22+ years expertise. 2-time MDRT winner serving Shela, Satellite, SG Highway & all Ahmedabad with retirement & insurance planning.',
    path: '/about',
    keywords:
      'Jigisha Kiran Shah, LIC advisor Shela, best LIC agent Ahmedabad, MDRT advisor Gujarat, life insurance advisor Ahmedabad about',
    breadcrumbLabel: 'About',
  })
  useScrollReveal()

  return <About />
}
