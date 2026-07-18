import About from '../components/About'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'

export default function AboutPage() {
  useSEO({
    title: 'About Jigisha Kiran Shah | Life Insurance Advisor Ahmedabad',
    description: 'Meet Jigisha Kiran Shah - senior life insurance advisor & LIC agent in Ahmedabad (Shela, Satellite, SG Highway areas). 22+ years experience, 2 Times MDRT Achiever 2023 & 2024. Trusted by 2,700+ families. Specializing in retirement planning, pension & life insurance.',
    ogTitle: 'Jigisha Kiran Shah - Top LIC Agent in Ahmedabad',
    ogDescription: 'Senior life insurance advisor with 22+ years expertise. 2 Times MDRT award winner. Serving all Ahmedabad areas with personalized retirement & insurance planning.',
    path: '/about'
  })
  useScrollReveal()

  return <About />
}
