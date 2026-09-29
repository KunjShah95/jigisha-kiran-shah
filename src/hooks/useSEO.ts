import { useEffect } from 'react';
import { SITE_URL, OG_IMAGE, breadcrumbJsonLd } from '../lib/seo';
import { isProductionHost } from '../lib/env';

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  path?: string;
  keywords?: string;
  breadcrumbLabel?: string;
  jsonLd?: Record<string, unknown>[];
  noindex?: boolean;
}

export interface PageHead {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonical: string;
  keywords?: string;
  noindex: boolean;
  jsonLd: Record<string, unknown>[];
}

export function buildHead({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = OG_IMAGE,
  path = '/',
  keywords,
  breadcrumbLabel,
  jsonLd = [],
  noindex = false,
}: SEOProps): PageHead {
  // Homepage title already leads with the brand; don't append it twice.
  const fullTitle = title.startsWith('Jigisha Kiran Shah') ? title : `${title} | Jigisha Kiran Shah`;
  const blocks: Record<string, unknown>[] = [];
  if (breadcrumbLabel) blocks.push(breadcrumbJsonLd(path, breadcrumbLabel));
  blocks.push(...jsonLd);
  return {
    title: fullTitle,
    description,
    ogTitle: ogTitle || fullTitle,
    ogDescription: ogDescription || description,
    ogImage,
    canonical: `${SITE_URL}${path}`,
    keywords,
    noindex,
    jsonLd: blocks,
  };
}

// Server render (scripts/prerender.mjs) reads the head of the page it just
// rendered from here, so route meta has one source of truth: the page itself.
export const ssrHead: { current: PageHead | null } = { current: null };

function setMetaAttr(selector: string, create: () => HTMLMetaElement, content: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaName(name: string, content: string) {
  setMetaAttr(`meta[name="${name}"]`, () => {
    const el = document.createElement('meta');
    el.setAttribute('name', name);
    return el;
  }, content);
}

function setMetaProperty(prop: string, content: string) {
  setMetaAttr(`meta[property="${prop}"]`, () => {
    const el = document.createElement('meta');
    el.setAttribute('property', prop);
    return el;
  }, content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSEO(props: SEOProps) {
  if (typeof window === 'undefined') ssrHead.current = buildHead(props);

  const { title, description, ogTitle, ogDescription, ogImage, path, keywords, breadcrumbLabel, noindex } = props;

  useEffect(() => {
    const head = buildHead(props);
    document.title = head.title;

    setMetaName('description', head.description);
    if (head.keywords) setMetaName('keywords', head.keywords);
    // Staging/preview deployments must never be indexed, even if a page
    // forgets noindex — the host check overrides everything.
    const robots = !isProductionHost() || head.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1';
    setMetaName('robots', robots);
    setMetaName('author', 'Jigisha Kiran Shah');

    setMetaProperty('og:type', 'website');
    setMetaProperty('og:site_name', 'Jigisha Kiran Shah - LIC Advisor');
    setMetaProperty('og:title', head.ogTitle);
    setMetaProperty('og:description', head.ogDescription);
    setMetaProperty('og:url', head.canonical);
    setMetaProperty('og:image', head.ogImage);
    setMetaProperty('og:locale', 'en_IN');

    setMetaName('twitter:card', 'summary_large_image');
    setMetaName('twitter:title', head.ogTitle);
    setMetaName('twitter:description', head.ogDescription);
    setMetaName('twitter:image', head.ogImage);

    setLink('canonical', head.canonical);

    // Per-page JSON-LD. Blocks prerendered into the HTML carry the same
    // data-page-jsonld marker, so they are swapped rather than duplicated.
    document.querySelectorAll('script[data-page-jsonld]').forEach((n) => n.remove());
    head.jsonLd.forEach((block) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.setAttribute('data-page-jsonld', 'true');
      s.textContent = JSON.stringify(block);
      document.head.appendChild(s);
    });

    window.scrollTo(0, 0);

    return () => {
      document.querySelectorAll('script[data-page-jsonld]').forEach((n) => n.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, ogTitle, ogDescription, ogImage, path, keywords, breadcrumbLabel, noindex]);
}
