export const SITE_URL = 'https://jigishakiranshah.in';
export const SITE_NAME = 'Jigisha Kiran Shah - LIC Advisor Ahmedabad';
export const OG_IMAGE = `${SITE_URL}/hero-image.jpeg`;
export const PHONE = '+919824025435';
export const PHONE_DISPLAY = '+91 98240 25435';
export const REVIEW_URL = 'https://share.google/VQAFgVhdk114U2ozd';
export const EMAIL = 'jkshahlic@gmail.com';
export const ADDRESS = 'Orchid Legacy, D3-1303, Applewoods Township, Shela, Ahmedabad, Gujarat 380058';

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
    a: 'Term Life Insurance (LIC Tech Term, Jeevan Amar), Endowment Plans (Jeevan Labh, New Endowment), Money-Back Plans, Whole Life (Jeevan Umang), Annuity/Pension (Jeevan Akshay VII), Child Education Plans (Jeevan Tarun), ULIP, Health Cover (Arogya Rakshak, Cancer Cover), and Corporate/HUF/MWP insurance.',
  },
  {
    q: 'What is MDRT and why does it matter?',
    a: 'MDRT (Million Dollar Round Table) is a global recognition for the top 1% of financial advisors worldwide. Achieving it twice (2023 & 2024) places Jigisha Kiran Shah among the elite insurance advisors globally for ethics, production, and client service.',
  },
  {
    q: 'How do I choose between term insurance and endowment plans?',
    a: 'Choose term insurance for maximum protection at lowest cost (e.g. Rs 1 crore cover at affordable premiums). Choose endowment or money-back plans if you want guaranteed savings plus protection for milestones like child education or retirement. A free consultation maps the right mix to your age, income, and goals.',
  },
  {
    q: 'Which areas does Jigisha Kiran Shah serve in Ahmedabad?',
    a: 'Based in Shela, serving all Ahmedabad areas including Satellite, SG Highway, South Bopal, Science City, Bopal, Ambawadi, Vastrapur, Maninagar, Naranpura, Gota, Chandkheda, and nearby Gujarat towns. Consultations available by phone, WhatsApp, and in-person.',
  },
  {
    q: 'How do I book a free consultation?',
    a: 'Call +91 98240 25435, WhatsApp the same number, email jkshahlic@gmail.com, or fill the contact form. Share your age, income range, and goal (term cover, retirement, child education, health) for personalised LIC plan recommendations.',
  },
  {
    q: 'Does Jigisha Kiran Shah help with LIC claims?',
    a: 'Yes. 1000+ settled claims with white-glove documentation support — intimation, paperwork, hospital/branch coordination, and follow-up until settlement. Existing policyholders and new clients both supported.',
  },
];

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'FinancialService', 'InsuranceAgency'],
    '@id': `${SITE_URL}/#business`,
    name: 'Jigisha Kiran Shah - LIC Advisor',
    image: OG_IMAGE,
    url: `${SITE_URL}/`,
    telephone: PHONE,
    email: EMAIL,
    description:
      'Trusted LIC Advisor in Ahmedabad with 22+ years of experience. 2-time MDRT achiever (2023 & 2024). Retirement planning, pension plans, term insurance, endowment, ULIP, child education and health cover.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Orchid Legacy, D3-1303, Applewoods Township, Shela',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380058',
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 22.9734, longitude: 72.5 },
    hasMap: 'https://share.google/VQAFgVhdk114U2ozd',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: 'Free Consultation',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Bank Transfer',
    founder: { '@type': 'Person', name: 'Jigisha Kiran Shah', jobTitle: 'LIC Advisor' },
    employee: { '@type': 'Person', name: 'Jigisha Kiran Shah' },
    sameAs: [
      'https://www.youtube.com/@jigishakiranshah4636',
      'https://www.linkedin.com/in/jigisha-kiran-shah-4b48851b2',
    ],
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
    ],
    knowsAbout: [
      'Life Insurance',
      'Term Life Insurance',
      'Retirement Planning',
      'Pension Plans',
      'Endowment Plans',
      'ULIP',
      'Child Education Plans',
      'Health Insurance',
      'Money Back Plans',
      'Corporate Insurance',
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
    description:
      'Senior LIC advisor in Ahmedabad since 2004. 2-time MDRT achiever (2023 & 2024). 2,700+ families served, 1,000+ claims supported to settlement.',
    url: `${SITE_URL}/about`,
    telephone: PHONE,
    email: EMAIL,
    image: OG_IMAGE,
    worksFor: { '@id': `${SITE_URL}/#business` },
    alumniOf: { '@type': 'Organization', name: 'Million Dollar Round Table (MDRT)' },
    knowsAbout: [
      'Life Insurance', 'Term Insurance', 'Retirement Planning', 'Pension Plans',
      'Child Education Planning', 'Endowment Plans', 'ULIP', 'Health Insurance',
      'LIC Claims', 'HUF Insurance', 'NRI Insurance',
    ],
    knowsLanguage: ['en', 'hi', 'gu'],
    sameAs: [
      'https://www.youtube.com/@jigishakiranshah4636',
      'https://www.linkedin.com/in/jigisha-kiran-shah-4b48851b2',
    ],
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
