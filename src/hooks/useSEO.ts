import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
}

export function useSEO({ title, description, ogTitle, ogDescription }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Jigisha Kiran Shah`

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

    setMeta('description', description)
    setMeta('og:title', ogTitle || title, true)
    setMeta('og:description', ogDescription || description, true)

    window.scrollTo(0, 0)
  }, [title, description, ogTitle, ogDescription])
}
