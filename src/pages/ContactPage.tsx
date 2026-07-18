import Contact from '../components/Contact'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'

export default function ContactPage() {
  useSEO({
    title: 'Contact Life Insurance Advisor Ahmedabad | Book Free Consultation',
    description: 'Contact Jigisha Kiran Shah - best LIC advisor & life insurance agent in Ahmedabad (Shela, Satellite, SG Highway). Book your free consultation for retirement planning, pension plans, term insurance & more. Call +91 98240 25435 or WhatsApp now.',
    ogTitle: 'Free Consultation - LIC Agent Near Me in Ahmedabad',
    ogDescription: 'Book free consultation with top-rated LIC advisor Jigisha Kiran Shah in Ahmedabad. Call +91 98240 25435. Serving all areas including Shela, Satellite & SG Highway.',
    path: '/contact'
  })
  useScrollReveal()

  return <Contact />
}
