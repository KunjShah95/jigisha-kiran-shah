import Contact from '../components/Contact'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'

export default function ContactPage() {
  useSEO({
    title: 'Contact LIC Advisor Ahmedabad | Book Free Consultation',
    description:
      'Contact Jigisha Kiran Shah — LIC advisor in Shela, Ahmedabad. Free consultation for retirement, pension, term insurance & child plans. Call +91 98240 25435, WhatsApp, or visit Orchid Legacy, Applewoods Township. Mon–Sat 9–6.',
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
