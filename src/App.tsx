import { lazy } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import { useSEO } from './hooks/useSEO'

// Route-level code splitting: home eager (LCP), rest lazy.
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const AreasIndexPage = lazy(() => import('./pages/AreasIndexPage'))
const AreaPage = lazy(() => import('./pages/AreaPage'))
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))

function NotFound() {
  useSEO({
    title: 'Page not found',
    description: 'The page you are looking for does not exist. Explore LIC plans, about, reviews, or contact Jigisha Kiran Shah, LIC advisor in Ahmedabad.',
    path: '/404',
    noindex: true,
  })
  return (
    <main className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream">
      <div className="container relative z-10 max-w-xl mx-auto text-center">
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold-dark mb-4">Error 404</p>
        <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">Page not found</h1>
        <p className="text-base text-gray-600 font-light mb-8">The page you are looking for does not exist or was moved.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="inline-flex items-center justify-center px-6 py-3 bg-midnight text-white text-sm font-bold rounded-xl hover:bg-gold active:scale-[0.98] transition-all min-h-11">Go back to homepage</Link>
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-border text-midnight text-sm font-bold rounded-xl hover:border-gold/60 hover:text-gold-dark active:scale-[0.98] transition-all min-h-11">Contact us</Link>
        </div>
      </div>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/areas" element={<AreasIndexPage />} />
        <Route path="/areas/:slug" element={<AreaPage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
