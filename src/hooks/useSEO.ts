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

export function useSEO({
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
}: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Jigisha Kiran Shah`;
    document.title = fullTitle;
    document.documentElement.lang = 'en';

    const canonicalUrl = `${SITE_URL}${path}`;

    setMetaName('description', description);
    if (keywords) setMetaName('keywords', keywords);
    // Staging/preview deployments must never be indexed, even if a page
    // forgets noindex — the host check overrides everything.
    const robots = !isProductionHost() || noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1';
    setMetaName('robots', robots);
    setMetaName('author', 'Jigisha Kiran Shah');

    setMetaProperty('og:type', 'website');
    setMetaProperty('og:site_name', 'Jigisha Kiran Shah - LIC Advisor');
    setMetaProperty('og:title', ogTitle || fullTitle);
    setMetaProperty('og:description', ogDescription || description);
    setMetaProperty('og:url', canonicalUrl);
    setMetaProperty('og:image', ogImage);
    setMetaProperty('og:locale', 'en_IN');

    setMetaName('twitter:card', 'summary_large_image');
    setMetaName('twitter:title', ogTitle || fullTitle);
    setMetaName('twitter:description', ogDescription || description);
    setMetaName('twitter:image', ogImage);

    setLink('canonical', canonicalUrl);

    // Per-page JSON-LD (breadcrumb + extras). Old page scripts are removed first.
    document.querySelectorAll('script[data-page-jsonld]').forEach((n) => n.remove());
    const blocks: Record<string, unknown>[] = [];
    if (breadcrumbLabel) blocks.push(breadcrumbJsonLd(path, breadcrumbLabel));
    blocks.push(...jsonLd);
    blocks.forEach((block) => {
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
  }, [title, description, ogTitle, ogDescription, ogImage, path, keywords, breadcrumbLabel, noindex]);
}
