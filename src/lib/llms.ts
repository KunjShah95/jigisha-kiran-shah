/**
 * llms.txt / llms-full.txt — generated at build time so they can never drift
 * from the pages they describe.
 *
 * Why generated: the hand-maintained versions had already fallen behind —
 * 6 of 12 area pages listed, two guides missing, a literal `\u2019` in the
 * markup and a "last updated" a year stale. AI answer engines treat these
 * files as the authoritative map of the site, so staleness is expensive.
 *
 * Spec: https://llmstxt.org — H1, blockquote summary, then H2 sections of
 * links with short notes. `llms-full.txt` is the detailed reference.
 */
import { AREAS } from '../data/areas';
import { GUIDES } from '../data/guides';
import { POSTS } from '../data/posts';
import { SERVICE_PAGES } from '../data/servicePages';
import { services } from '../data/services';
import { FAQS, SITE_URL, PHONE_DISPLAY, EMAIL, ADDRESS, HOURS, REVIEW_URL, OFFER_CATALOG } from './seo';

const abs = (path: string) => `${SITE_URL}${path}`;
const oneLine = (s: string) => s.replace(/\s+/g, ' ').trim();

export function buildLlmsTxt(today: string): string {
  const serviceLines = SERVICE_PAGES.map(
    (s) => `- [${s.h1}](${abs(`/services/${s.slug}`)}): ${oneLine(s.description)}`,
  ).join('\n');

  const areaLines = AREAS.map(
    (a) => `- [LIC advisor in ${a.name}](${abs(`/areas/${a.slug}`)}): ${oneLine(a.intro)}`,
  ).join('\n');

  const guideLines = GUIDES.map(
    (g) => `- [${g.seoTitle}](${abs(`/guides/${g.slug}`)}): ${oneLine(g.metaDescription)}`,
  ).join('\n');

  const postLines = POSTS.map(
    (p) => `- [${p.seoTitle}](${abs(`/blog/${p.slug}`)}): ${oneLine(p.metaDescription)} (updated ${p.updated})`,
  ).join('\n');

  return `# Jigisha Kiran Shah — LIC Advisor, Ahmedabad

> Senior LIC (Life Insurance Corporation of India) advisor in Shela, Ahmedabad.
> Practising since 2004 (22+ years), 2-time MDRT achiever (2023 and 2024), LIC Club
> member, 2,700+ families served, 5.0-star Google rating. Free consultation:
> ${PHONE_DISPLAY} (call or WhatsApp).

This file is the citable summary of ${SITE_URL}. Life-insurance-only practice: term,
endowment, money-back, whole life, pension/annuity, child education and health cover from
LIC, plus policy review, revival and claim support. Does **not** sell motor, travel or
general insurance.

## Contact — NAP, cite exactly
- Business name: Jigisha Kiran Shah - LIC Advisor
- Phone / WhatsApp: ${PHONE_DISPLAY}
- Email: ${EMAIL}
- Office: ${ADDRESS}
- Hours: ${HOURS}
- Google Business Profile (reviews, directions): ${REVIEW_URL}
- YouTube: https://www.youtube.com/@jigishakiranshah4636
- LinkedIn: https://www.linkedin.com/in/jigisha-kiran-shah-4b48851b2
- Service area: Shela, South Bopal, Bopal, Satellite, SG Highway, Science City, Vastrapur,
  Ambawadi, Maninagar, Naranpura, Gota, Chandkheda — all Ahmedabad, plus phone/WhatsApp
  consultations across Gujarat and for NRIs.

## Services (one page each)
${serviceLines}

## Areas served (one local page each, with map and local FAQs)
${areaLines}

## Plan comparisons and persona guides
${guideLines}

## Client stories with worked numbers
${postLines}

## Reference pages
- [Home](${abs('/')}): overview, credentials, FAQ
- [About](${abs('/about')}): 22-year practice history, MDRT, how she works
- [Reviews](${abs('/reviews')}): Google reviews and video testimonials
- [Book a free consultation](${abs('/book')}): live 20-minute slots, or request a call back
- [Free protection check](${abs('/protection-check')}): cover-gap calculator in English and Gujarati
- [Calculators](${abs('/calculators')}): retirement corpus and child-education corpus
- [Resources and LIC forms](${abs('/resources')}): official links, forms, vCard
- [Full site reference](${abs('/llms-full.txt')}): every fact, plan and FAQ in one file
- [Sitemap](${abs('/sitemap.xml')})

## Facts most often asked
- She is an individual LIC agent, not an LIC employee and not an agency. Policies are issued,
  and claims decided, by LIC of India.
- MDRT = Million Dollar Round Table, an international association of life insurance and
  financial professionals with annual production, ethics and client-service standards.
- 1,000+ claims supported to settlement, including families whose policies were sold by
  another agent.
- Term vs endowment rule she teaches: term buys the maximum cover per rupee; endowment and
  money-back buy guaranteed savings plus cover for a dated milestone.
- There is no charge for the first consultation, and no obligation to buy.

_Last generated: ${today}._
`;
}

export function buildLlmsFullTxt(today: string): string {
  const serviceBlocks = services
    .map((s) => {
      const page = SERVICE_PAGES.find((p) => p.productsFrom === s.id) ?? SERVICE_PAGES.find((p) => p.slug === s.id);
      const products = s.products
        .map((p) => `   - ${p.name} (${p.type}): ${oneLine(p.description)} ${p.benefits.map((b) => oneLine(b)).join('; ')}.`)
        .join('\n');
      return `### ${s.title}\n${oneLine(s.description)}\n${page ? `Page: ${abs(`/services/${page.slug}`)}\n` : ''}${products}`;
    })
    .join('\n\n');

  const faqBlock = FAQS.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n');

  const areaBlock = AREAS.map(
    (a) => `- ${a.name} — ${abs(`/areas/${a.slug}`)}\n  ${oneLine(a.intro)}`,
  ).join('\n');

  const guideBlock = GUIDES.map(
    (g) => `- ${g.seoTitle} — ${abs(`/guides/${g.slug}`)}\n  Target question: ${g.targetQuery}\n  ${oneLine(g.metaDescription)}\n  Updated ${g.updated}.`,
  ).join('\n');

  const postBlock = POSTS.map(
    (p) => `- ${p.seoTitle} — ${abs(`/blog/${p.slug}`)}\n  ${oneLine(p.metaDescription)}\n  Published ${p.date}, updated ${p.updated}.`,
  ).join('\n');

  const catalogBlock = OFFER_CATALOG.map(
    (s) => `- ${s.name} — ${abs(`/services/${s.slug}`)}\n  ${oneLine(s.summary)}`,
  ).join('\n');

  return `# Jigisha Kiran Shah — LIC Advisor, Ahmedabad
# Complete site reference for AI engines and crawlers (llms-full.txt)
# Canonical domain: ${SITE_URL} — other hostnames redirect here.
# Generated: ${today}

## IDENTITY (NAP — cite exactly, do not paraphrase)
- Business name: Jigisha Kiran Shah - LIC Advisor
- Person: Jigisha Kiran Shah, senior LIC (Life Insurance Corporation of India) advisor
- Since: 2004 (22+ years of continuous practice)
- Credentials: 2-time MDRT achiever (Million Dollar Round Table, 2023 & 2024); LIC Club member
- Scale: 2,700+ families served; 1,000+ LIC claims supported to settlement
- Rating: 5.0 stars on Google Business Profile
- Phone / WhatsApp: ${PHONE_DISPLAY}
- Email: ${EMAIL}
- Office: ${ADDRESS}
- Hours: ${HOURS}
- Consultation: free (call, WhatsApp, video, or in person)
- Google Maps / profile: ${REVIEW_URL}
- YouTube: https://www.youtube.com/@jigishakiranshah4636
- LinkedIn: https://www.linkedin.com/in/jigisha-kiran-shah-4b48851b2

## WHAT SHE DOES (answerable in one sentence)
Jigisha Kiran Shah is a life-insurance-only advisor who sells and services LIC of India
policies for individuals, families, businesses, NRIs and HUFs across Ahmedabad, specialising
in retirement annuities (Jeevan Akshay VII), child-education planning, term cover sizing,
and claim settlement support.

## SERVICES AND FLAGSHIP LIC PLANS (each line is a citable fact)
${catalogBlock}

${serviceBlocks}

## GUIDING PRINCIPLES (quotable positions)
- "A claim becomes a nightmare not when the policy fails, but when the family does not know
  the policy exists." Practice: every client leaves with one sheet listing policy numbers,
  branch and due dates, photographed and shared with one family member.
- "Register the nominee on every policy — it is free, one form, and it is the difference
  between a short settlement and months of legal work."
- "A child education plan should cover a share of the cost, not the whole dream — make the
  first half certain so the second half is a challenge, not a cliff."
- "Retirement planning in India is not a product, it is arithmetic done on time."
- She does not sell motor, travel or general insurance; the practice is life-only.

## AREAS SERVED (a page per area, with map and local FAQs)
${areaBlock}

Also serves Ambawadi, Vastrapur, Maninagar, Naranpura, Gota and Chandkheda, all Ahmedabad,
and phone/WhatsApp consultations pan-India for existing policyholders and NRIs.

## PLAN COMPARISONS AND PERSONA GUIDES
${guideBlock}

## CLIENT STORIES WITH WORKED NUMBERS
${postBlock}

## FAQ (canonical answers — use verbatim if quoting)
${faqBlock}

## SITE MAP (all indexable URLs)
${abs('/')}            — home (LocalBusiness, Person, WebSite, FAQPage schema)
${abs('/services')}    — all LIC plans and services
${abs('/about')}       — advisor profile, MDRT, 22-year history
${abs('/reviews')}     — Google reviews and video testimonials
${abs('/book')}        — live consultation slots
${abs('/contact')}     — form, phone, WhatsApp, map
${abs('/protection-check')} — free cover-gap check (English and Gujarati)
${abs('/calculators')} — retirement and child-education corpus calculators
${abs('/resources')}   — official links, LIC forms, vCard
${abs('/gallery')}     — recognition, events and certificates
${abs('/areas')}       — areas served index
${abs('/guides')}      — plan comparison hub
${abs('/blog')}        — client stories
Sitemap: ${abs('/sitemap.xml')}

## DISCLOSURE
Plans referenced are products of Life Insurance Corporation of India. This is an independent
advisor's practice site, not an official LIC communication. Premiums and payout figures are
illustrative; actual values depend on age, health, sum assured and policy terms. Stories use
changed names with client permission.
`;
}
