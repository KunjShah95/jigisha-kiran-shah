export const SITE_URL = 'https://www.jigishakiranshah.in';
export const SITE_NAME = 'Jigisha Kiran Shah - LIC Advisor Ahmedabad';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const PHONE = '+919824025435';
export const PHONE_DISPLAY = '+91 98240 25435';
export const REVIEW_URL = 'https://share.google/VQAFgVhdk114U2ozd';
/**
 * Canonical Google Maps URL of the listing (CID 0x28428dfcc5b669b). The
 * share.google link above is a redirect for people; search engines and AI
 * engines match entities better on the stable Maps URL.
 */
export const GOOGLE_MAPS_URL = 'https://maps.google.com/?cid=181314826673022619';
export const FACEBOOK_URL = 'https://www.facebook.com/jigisha.kiran.shah';
export const EMAIL = 'jkshahlic@gmail.com';
export const ADDRESS = 'Orchid Legacy, D3-1303, Applewoods Township, Shela, Ahmedabad, Gujarat 380058';
export const HOURS = 'Monday–Saturday, 9:00 AM–6:00 PM IST';

/**
 * Every profile that points at the same real-world person/business. These are
 * the entity anchors AI answer engines use to decide "this is one real
 * advisor, not twelve directory listings". Keep in sync with
 * docs/CITATIONS.md — a profile added there belongs here too.
 */
export const SAME_AS = [
  GOOGLE_MAPS_URL, // Google Business Profile / Maps listing
  'https://www.youtube.com/@jigishakiranshah4636',
  'https://www.linkedin.com/in/jigisha-kiran-shah-4b48851b2',
  FACEBOOK_URL,
  // Her official LIC agent page (LIC Saathi, agent code 01379839). The Google
  // Maps listing currently links here.
  'https://saathi.licindia.co.in/s/jigisha-kiran-shah-life-insurace-advisor/01379839',
];

/** The LIC product families offered — reused in schema, llms.txt and the footer. */
export const OFFER_CATALOG = [
  { name: 'Life insurance advice', slug: 'life-insurance', summary: 'An overview of term, savings, child, pension and business plans, with a free consultation sized to your family\u2019s responsibilities.' },
  { name: 'Family financial protection planning', slug: 'family-financial-protection', summary: 'Income replacement, loans, children\u2019s education, health costs and nominees reviewed together, with a written summary of the gaps.' },
  { name: 'Term life insurance', slug: 'term-insurance', summary: 'LIC Tech Term and Jeevan Amar — pure protection at the lowest premium per rupee of cover.' },
  { name: 'Retirement and pension plans', slug: 'retirement', summary: 'Jeevan Akshay VII immediate annuity and Jeevan Umang lifelong income.' },
  { name: 'Child education plans', slug: 'child-education', summary: 'Jeevan Tarun and New Children\u2019s Money Back with premium waiver on the parent.' },
  { name: 'Endowment and savings plans', slug: 'wealth-creation', summary: 'Jeevan Labh and New Endowment — guaranteed maturity plus bonuses.' },
  { name: 'Money-back plans', slug: 'money-back', summary: 'New Money Back and Bima Shree — periodic payouts plus life cover.' },
  { name: 'Health and cancer cover', slug: 'health-insurance', summary: 'LIC Health Shield (Plan 907) and New Cancer Cover (Plan 908), with official documents and policy terms.' },
  { name: 'Corporate, HUF and MWP cover', slug: 'corporate-insurance', summary: 'Employer-employee cover, partnership insurance, HUF and MWP Act policies.' },
  { name: 'Keyman insurance', slug: 'keyman-insurance', summary: 'Life cover a business takes on a key person; premiums usually a business expense, claim paid to the business.' },
  { name: 'Partnership insurance', slug: 'partnership-insurance', summary: 'Cover on each partner that funds the buy-out of a deceased partner’s share for the family.' },
  { name: 'Employer-employee insurance', slug: 'employer-employee-insurance', summary: 'Life cover for chosen staff with the premium paid by the business.' },
  { name: 'Business insurance — GIDC Vatva', slug: 'business-insurance-gidc-vatva', summary: 'Keyman and employer-employee cover for Vatva industrial units.' },
  { name: 'Policy review and claims help', slug: 'policy-review-claims', summary: 'Review of existing LIC policies (any agent), nominee and KYC updates, lapsed-policy revival, claim assistance.' },
  { name: 'Lapsed policy revival', slug: 'lic-policy-revival', summary: 'Restore a lapsed LIC policy: arrears and interest, health declaration, medicals where required, and a straight answer on whether revival is worth it.' },
  { name: 'Nominee change and updates', slug: 'nominee-change', summary: 'Register or change the nominee on any LIC policy, correct a misspelled name, and avoid the legal-heir route at claim time.' },
  { name: 'Lost policy tracing', slug: 'lic-policy-tracing', summary: 'Find an LIC policy or policy number using premium receipts, bank debits, employer records, branch search and the LIC unclaimed-amount register.' },
  { name: 'Loan against policy', slug: 'lic-policy-loan', summary: 'Borrow against the surrender value of an endowment or money-back policy without breaking it; the cover and bonuses continue.' },
  { name: 'NRI policy servicing', slug: 'nri-lic-services', summary: 'Premiums from NRE/NRO, nominee updates, revival, maturity and death claims for policyholders living abroad, handled without travelling to India.' },
  { name: 'Address, name and minor-to-major updates', slug: 'lic-address-name-change', summary: 'Keep the address, mobile, bank mandate, PAN and name current, and convert a minor’s policy when the life assured turns 18.' },
  { name: 'Surrendering a policy', slug: 'lic-surrender', summary: 'What LIC actually pays on surrender, when surrender is allowed, and the paid-up or loan route that usually preserves cover and bonuses instead.' },
];

export interface FAQItem {
  q: string;
  a: string;
}

// Single source of truth for FAQs — used by visible FAQ component AND JSON-LD.
// Keep answers concise (40-60 words), factual, quotable — this is what AI engines cite.
export const FAQS: FAQItem[] = [
  {
    q: 'Who is Jigisha Kiran Shah?',
    a: 'Jigisha Kiran Shah is a senior LIC advisor based in Shela, Ahmedabad with 22+ years of experience since 2004. She is a 2-time MDRT achiever (2023 & 2024) and has served 2,700+ families across Gujarat with a 5.0-star Google rating.',
  },
  {
    q: 'Where is the office of Jigisha Kiran Shah, LIC advisor?',
    a: 'Office at Orchid Legacy, D3-1303, Applewoods Township, Shela, Ahmedabad, Gujarat 380058. Call +91 98240 25435 or WhatsApp for appointments. Open Monday to Saturday, 9 AM to 6 PM. Get directions via Google Business profile.',
  },
  {
    q: 'What LIC plans does Jigisha Kiran Shah offer?',
    a: 'Term insurance for family protection (LIC Tech Term, Jeevan Amar), savings plans (Jeevan Labh, New Endowment), money-back plans, lifelong income (Jeevan Umang), pension (Jeevan Akshay VII), child education plans (Jeevan Tarun), market-linked ULIPs, health and cancer cover (Health Shield Plan 907, New Cancer Cover Plan 908), and business, HUF and MWP policies.',
  },
  {
    q: 'Is Jigisha Kiran Shah an LIC agent or a life insurance agency?',
    a: 'Jigisha Kiran Shah is a licensed LIC agent and life insurance advisor working from her own office in Shela, Ahmedabad since 2004. Clients deal with her directly — plan selection, paperwork, premium reminders and claims — not with a call centre.',
  },
  {
    q: 'What does MDRT mean?',
    a: 'MDRT (Million Dollar Round Table) is a worldwide award for top life insurance advisors. To qualify, an advisor must reach demanding yearly service standards and follow a code of ethics. Jigisha Kiran Shah qualified in 2023 and 2024.',
  },
  {
    q: 'How do I choose between term insurance and endowment plans?',
    a: 'Choose term insurance if you want the biggest cover for the lowest premium, for example Rs 1 crore of cover for your family. Choose a savings or money-back plan if you also want money back at a set time, such as for your child’s education or retirement. A free chat works out the right mix for your age, income and goals.',
  },
  {
    q: 'Which areas does Jigisha Kiran Shah serve in Ahmedabad?',
    a: 'Based in Shela, serving all Ahmedabad areas including Satellite, SG Highway, South Bopal, Science City, Bopal, Ambawadi, Vastrapur, Maninagar, Naranpura, Gota, Chandkheda, and nearby Gujarat towns. Consultations available by phone, WhatsApp, and in-person.',
  },
  {
    q: 'How does Jigisha Kiran Shah get paid? Is the consultation really free?',
    a: 'Yes. The first consultation is free, about 20 minutes, with no obligation. There is no fee for advice: if you buy a policy, LIC pays the agent’s commission, and the premium is set by LIC, the same whichever LIC agent you buy through. Ask and she will tell you the commission on any plan.',
  },
  {
    q: 'How can I contact Jigisha Kiran Shah?',
    a: 'The quickest way is WhatsApp: message +91 98240 25435 and Jigisha replies herself, Monday to Saturday, 9 AM to 6 PM. You can also call the same number, email jkshahlic@gmail.com or visit the Shela office. The first chat is free and carries no obligation to buy.',
  },
  {
    q: 'Do I have to visit the office, or can I just message on WhatsApp?',
    a: 'You do not have to visit. The first conversation can happen entirely on WhatsApp or by phone, and many clients start that way. Meeting at the Shela office is optional, and any paperwork follows LIC’s own process, so Jigisha tells you exactly what is needed.',
  },
  {
    q: 'Can I talk in Hindi or Gujarati?',
    a: 'Yes. Jigisha Kiran Shah advises in English, Hindi and Gujarati, in writing on WhatsApp or by phone. Send your message in the language you are most comfortable with. There are also Gujarati and Hindi pages on this website.',
  },
  {
    q: 'Does Jigisha Kiran Shah help with LIC claims?',
    a: 'Yes. She has supported 1,000+ claims to settlement — intimation, paperwork, hospital/branch coordination and follow-up until LIC decides the claim. Help is available for existing policyholders too, even if another agent sold the policy.',
  },
  {
    q: 'Can Jigisha Kiran Shah review LIC policies I already have?',
    a: 'Yes — a free policy review lists every policy your family holds with its cover, maturity date and nominee, compares total cover with your income and loans, and flags lapsed policies that can be revived. There is no obligation to buy.',
  },
];

export function faqJsonLd(items: FAQItem[] = FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'FinancialService', 'InsuranceAgency'],
    '@id': `${SITE_URL}/#business`,
    name: 'Jigisha Kiran Shah - LIC Advisor',
    // First entry is the exact Google Maps listing name, so search engines tie
    // the website to that profile.
    alternateName: ['JIGISHA KIRAN SHAH Life Insurance Advisor', 'Jigisha Kiran Shah LIC Agent', 'Jigisha Kiran Shah Life Insurance Agent Ahmedabad'],
    image: OG_IMAGE,
    url: `${SITE_URL}/`,
    telephone: PHONE,
    email: EMAIL,
    description:
      'LIC advisor in Ahmedabad since 2004, MDRT top-advisor award in 2023 and 2024. Plain-language help with term insurance, pension and retirement income, child education, savings plans, health cover and LIC claims. Message on WhatsApp or call +91 98240 25435.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Orchid Legacy, D3-1303, Applewoods Township, Shela',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380058',
      addressCountry: 'IN',
    },
    // Pin of the Google Maps listing for the Orchid Legacy office. The old
    // value (22.9734, 72.5) was ~4 km off, towards Sarkhej/Makarba.
    geo: { '@type': 'GeoCoordinates', latitude: 22.995914, longitude: 72.465441 },
    hasMap: GOOGLE_MAPS_URL,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    currenciesAccepted: 'INR',
    // No aggregateRating here on purpose. A hand-typed count drifts from the
    // live Google profile (it said 73 while the page said 70+), and Google
    // ignores self-serving review markup on a business's own LocalBusiness
    // entity anyway. The rating stays visible on-page and links to Google.
    paymentAccepted: 'Cash, UPI, Bank Transfer',
    // The ways to reach her, stated machine-readably so assistants can quote
    // them. WhatsApp is the primary channel; there is no schema.org type for it,
    // so the number is shared with the voice line and named in the description.
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: PHONE,
        email: EMAIL,
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
        description: 'Phone and WhatsApp on the same number. Monday to Saturday, 9:00 AM to 6:00 PM IST.',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
      },
    ],
    founder: { '@type': 'Person', name: 'Jigisha Kiran Shah', jobTitle: 'LIC Advisor' },
    employee: { '@type': 'Person', name: 'Jigisha Kiran Shah' },
    sameAs: SAME_AS,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'LIC plans and advisory services',
      itemListElement: OFFER_CATALOG.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.summary,
          url: `${SITE_URL}/services/${s.slug}`,
          provider: { '@id': `${SITE_URL}/#business` },
        },
      })),
    },
    areaServed: [
      { '@type': 'City', name: 'Ahmedabad' },
      { '@type': 'AdministrativeArea', name: 'Gujarat' },
      'Shela',
      'Satellite',
      'SG Highway',
      'South Bopal',
      'Bopal',
      'Science City',
      'Vastrapur',
      'Ambawadi',
      'Maninagar',
      'Naranpura',
      'Gota',
      'Chandkheda',
      'Prahlad Nagar',
      { '@type': 'City', name: 'Gandhinagar' },
    ],
    knowsAbout: [
      'Life Insurance',
      'LIC Agent Services',
      'Term Life Insurance',
      'Retirement Planning',
      'Pension Plans',
      'Endowment Plans',
      'ULIP',
      'Child Education Plans',
      'Health Insurance',
      'Money Back Plans',
      'Corporate Insurance',
      'Family Financial Protection',
      'Business Partnership Protection',
    ],
  };
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Jigisha Kiran Shah',
    jobTitle: 'LIC Advisor',
    hasOccupation: { '@type': 'Occupation', name: 'Life insurance agent', occupationLocation: { '@type': 'City', name: 'Ahmedabad' } },
    description:
      'Senior LIC advisor in Ahmedabad since 2004. 2-time MDRT achiever (2023 & 2024). 2,700+ families served, 1,000+ claims supported to settlement.',
    url: `${SITE_URL}/about`,
    telephone: PHONE,
    email: EMAIL,
    image: OG_IMAGE,
    worksFor: { '@id': `${SITE_URL}/#business` },
    memberOf: { '@type': 'Organization', name: 'Million Dollar Round Table (MDRT)', url: 'https://www.mdrt.org/' },
    affiliation: { '@type': 'Organization', name: 'Life Insurance Corporation of India', url: 'https://licindia.in/' },
    knowsAbout: [
      'Life Insurance', 'Term Insurance', 'Retirement Planning', 'Pension Plans',
      'Child Education Planning', 'Endowment Plans', 'ULIP', 'Health Insurance',
      'LIC Claims', 'HUF Insurance', 'NRI Insurance',
    ],
    knowsLanguage: ['en', 'hi', 'gu'],
    sameAs: SAME_AS,
    award: ['MDRT 2023', 'MDRT 2024', 'LIC Club'],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    publisher: { '@id': `${SITE_URL}/#business` },
    inLanguage: 'en-IN',
  };
}

export function breadcrumbJsonLd(path: string, label: string) {
  const items: Array<{ '@type': string; position: number; name: string; item?: string }> = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
  ];
  if (path !== '/') items.push({ '@type': 'ListItem', position: 2, name: label, item: `${SITE_URL}${path}` });
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
}
