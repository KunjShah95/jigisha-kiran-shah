import { useEffect } from 'react'

export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | Jigisha Kiran Shah`
    window.scrollTo(0, 0)
  }, [title])
}
