import { useEffect } from 'react'

const BASE_URL = 'https://jigishakiran.vercel.app'

interface SEOProps {
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
  path?: string
}

export function useSEO({ title, description, ogTitle, ogDescription, path = '/' }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Jigisha Kiran Shah`

    const canonicalUrl = `${BASE_URL}${path}`

    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let el = document.querySelector(selector) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        if (property) el.setAttribute('property', name)
        else el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    setMeta('description', description)
    setMeta('og:title', ogTitle || title, true)
    setMeta('og:description', ogDescription || description, true)
    setMeta('og:url', canonicalUrl, true)
    setMeta('twitter:title', ogTitle || title)
    setMeta('twitter:description', ogDescription || description)
    setLink('canonical', canonicalUrl)

    window.scrollTo(0, 0)
  }, [title, description, ogTitle, ogDescription, path])
}
