import Testimonials from '../components/Testimonials'
import Reviews from '../components/Reviews'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'

export default function ReviewsPage() {
  useSEO({
    title: 'Client Reviews & Testimonials | LIC Advisor Ahmedabad',
    description: 'Real client reviews for LIC advisor Jigisha Kiran Shah in Ahmedabad. 5.0 Google rating with 100+ reviews. Watch video testimonials from families who secured their financial future.',
    ogTitle: 'Client Reviews & Testimonials | Jigisha Kiran Shah',
    ogDescription: 'See why families trust Jigisha Kiran Shah. 5.0 ★ Google rating, 100+ reviews, and video testimonials from real clients in Ahmedabad.',
    path: '/reviews'
  })
  useScrollReveal()

  return (
    <>
      <Testimonials />
      <Reviews />
    </>
  )
}
