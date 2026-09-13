import { lazy } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import { useSEO } from './hooks/useSEO'

// Route-level code splitting: home eager (LCP), rest lazy.
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
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
    <main style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <p><Link to="/">Go back to the homepage</Link></p>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
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
