import Contact from '../components/Contact'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'

export default function ContactPage() {
  useSEO({
    title: 'Contact | LIC Advisor Ahmedabad | Free Consultation',
    description: 'Contact Jigisha Kiran Shah, LIC advisor in Shela, Ahmedabad. Book a free consultation for retirement planning, pension plans, term insurance & more. Call +91 98240 25435 or visit Orchid Legacy.',
    ogTitle: 'Contact | Free Consultation | Jigisha Kiran Shah',
    ogDescription: 'Book a free consultation with LIC advisor Jigisha Kiran Shah. Call +91 98240 25435 or visit Orchid Legacy, Shela, Ahmedabad.'
  })
  useScrollReveal()

  return <Contact />
}
