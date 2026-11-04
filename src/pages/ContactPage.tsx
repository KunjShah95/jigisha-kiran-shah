import Contact from '../components/Contact'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'

export default function ContactPage() {
  useSEO({
    title: 'Contact LIC Advisor Ahmedabad | Jigisha Kiran Shah',
    description:
      'Call or WhatsApp LIC advisor Jigisha Kiran Shah at +91 98240 25435. Free first consultation by phone or at the Shela office, Monday to Saturday, 9 am–6 pm.',
    ogTitle: 'Free Consultation — LIC Agent Near Me in Ahmedabad',
    ogDescription:
      'Book free consultation with top-rated LIC advisor in Ahmedabad. Call +91 98240 25435. Shela, Satellite, SG Highway & all areas served.',
    path: '/contact',
    keywords:
      'contact LIC advisor Ahmedabad, book LIC consultation, LIC agent phone number Shela, Jigisha Kiran Shah contact, free insurance consultation Ahmedabad',
    breadcrumbLabel: 'Contact',
  })
  useScrollReveal()

  return <Contact />
}
