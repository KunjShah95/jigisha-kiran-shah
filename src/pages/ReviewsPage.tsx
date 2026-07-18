import Testimonials from '../components/Testimonials'
import Reviews from '../components/Reviews'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'

export default function ReviewsPage() {
  useSEO({
    title: 'Client Reviews & Testimonials | LIC Agent Ahmedabad Ratings',
    description: 'Real client reviews & ratings for life insurance advisor Jigisha Kiran Shah in Ahmedabad. 5.0 Google rating with 100+ verified reviews. Watch video testimonials from 2,700+ families who trusted their financial future with best LIC advisor.',
    ogTitle: 'Top Rated LIC Agent Ahmedabad - Client Testimonials',
    ogDescription: 'See why families trust Jigisha Kiran Shah for life insurance. 5.0 ★ Google rating, 100+ reviews & testimonials from real clients across all Ahmedabad areas.',
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
