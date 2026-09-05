import Testimonials from '../components/Testimonials'
import Reviews from '../components/Reviews'
import FAQ from '../components/FAQ'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'

export default function ReviewsPage() {
  useSEO({
    title: 'Client Reviews & Testimonials | 5.0★ LIC Agent Ahmedabad',
    description:
      'Verified reviews for LIC advisor Jigisha Kiran Shah in Ahmedabad: 5.0 Google rating, 100+ reviews, video testimonials from 2,700+ families. Retirement, term, pension & child-plan client stories.',
    ogTitle: 'Top Rated LIC Agent Ahmedabad — Client Testimonials',
    ogDescription:
      'Why families rate Jigisha Kiran Shah 5.0★ on Google. 100+ verified reviews & video testimonials from Ahmedabad clients.',
    path: '/reviews',
    keywords:
      'LIC agent reviews Ahmedabad, Jigisha Kiran Shah reviews, best LIC advisor ratings, life insurance testimonials Gujarat',
    breadcrumbLabel: 'Reviews',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'LIC Advisory Services — Jigisha Kiran Shah',
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: 100, bestRating: '5' },
      },
    ],
  })
  useScrollReveal()

  return (
    <>
      <Testimonials />
      <Reviews />
      <FAQ compact />
    </>
  )
}
