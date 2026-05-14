import About from '../components/About'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'

export default function AboutPage() {
  useSEO({
    title: 'About | 2 Times MDRT LIC Advisor Ahmedabad',
    description: 'Meet Jigisha Kiran Shah, senior LIC advisor in Ahmedabad with 22+ years of experience. 2 Times MDRT Achiever (2023 & 2024). Office at Orchid Legacy, Shela. Serving 2700+ families since 2004.',
    ogTitle: 'About Jigisha Kiran Shah - 2 Times MDRT Advisor',
    ogDescription: 'Senior LIC advisor with 22+ years of experience. 2 Times MDRT Achiever. Serving 2700+ families in Ahmedabad.'
  })
  useScrollReveal()

  return <About />
}
