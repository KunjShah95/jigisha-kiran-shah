import { Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ReviewsPage from './pages/ReviewsPage'
import ContactPage from './pages/ContactPage'
import { useSEO } from './hooks/useSEO'

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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
