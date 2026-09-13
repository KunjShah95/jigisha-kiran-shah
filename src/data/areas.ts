export interface Area {
  slug: string;
  name: string;
  mapQuery: string;
  intro: string;
  landmarks: string[];
  commute: string;
  faqs: Array<{ q: string; a: string }>;
}

export const AREAS: Area[] = [
  {
    slug: 'shela',
    name: 'Shela',
    mapQuery: 'Applewoods Township, Shela, Ahmedabad 380058',
    intro:
      'Jigisha Kiran Shah is based in Shela itself — office at Orchid Legacy, D3-1303, Applewoods Township. Families in Shela, Applewoods, and nearby townships get in-person consultations at home or office, plus phone and WhatsApp support for policy servicing and claims.',
    landmarks: ['Applewoods Township', 'Orchid Legacy', 'Shela village centre', 'SP Ring Road connectivity'],
    commute: 'Office is inside Applewoods Township, Shela — most residents reach within 10–15 minutes. Evening appointments available on request.',
    faqs: [
      {
        q: 'Is there an LIC advisor in Shela, Ahmedabad?',
        a: 'Yes. Jigisha Kiran Shah is based at Orchid Legacy, D3-1303, Applewoods Township, Shela, Ahmedabad 380058, serving Shela families since 2004 with term, pension, child education and endowment plans. Call +91 98240 25435.',
      },
      {
        q: 'Do you offer home visits in Shela?',
        a: 'Yes. Home visits within Shela and Applewoods Township can be arranged by appointment, Monday to Saturday, 9 AM to 6 PM. Phone and WhatsApp consultations are also available.',
      },
    ],
  },
  {
    slug: 'south-bopal',
    name: 'South Bopal',
    mapQuery: 'South Bopal, Ahmedabad, Gujarat',
    intro:
      'South Bopal families — many in new apartments along the SP Ring Road corridor — consult Jigisha Kiran Shah for term cover, retirement planning with Jeevan Akshay VII, and child education plans like Jeevan Tarun. The Shela office is a short drive away, and most first meetings happen over phone or WhatsApp.',
    landmarks: ['South Bopal lake area', 'SP Ring Road', 'Bopal–Shela corridor', 'New residential towers'],
    commute: 'Shela office is typically 10–20 minutes from most South Bopal societies via the Bopal–Shela road. In-person and video consultations both available.',
    faqs: [
      {
        q: 'Which LIC advisor serves South Bopal, Ahmedabad?',
        a: 'Jigisha Kiran Shah, based nearby in Shela (Orchid Legacy, Applewoods Township), serves South Bopal with term insurance, pension, child education and claims support. Call +91 98240 25435 for a free consultation.',
      },
      {
        q: 'Can I start an LIC policy online from South Bopal?',
        a: 'Yes. The first consultation happens over phone or WhatsApp — share your age, income range, and goal — and paperwork is completed as per LIC process with full documentation support.',
      },
    ],
  },
  {
    slug: 'satellite',
    name: 'Satellite',
    mapQuery: 'Satellite, Ahmedabad, Gujarat',
    intro:
      'Satellite is one of Ahmedabad\u2019s most established residential areas, with many working professionals and business families planning retirement and children\u2019s education. Jigisha Kiran Shah advises Satellite clients on pension plans, Jeevan Umang whole-life cover, and term insurance top-ups, with consultations by phone, WhatsApp, or in-person visits.',
    landmarks: ['Jodhpur Cross Roads', 'Stadium–Commerce Six Roads belt', 'IIM-A vicinity', 'Prahladnagar connection'],
    commute: 'Satellite is about 25–35 minutes from the Shela office by road. Most Satellite clients prefer phone/WhatsApp consultations with scheduled in-person reviews.',
    faqs: [
      {
        q: 'Do you serve Satellite, Ahmedabad for LIC plans?',
        a: 'Yes. Satellite clients are served by phone, WhatsApp, and scheduled in-person meetings. Services include retirement planning, term insurance, child education and claim settlement support. Call +91 98240 25435.',
      },
      {
        q: 'I already have LIC policies bought in Satellite. Can you help with servicing?',
        a: 'Yes. Policy reviews, nominee updates, maturity tracking, and claim documentation support are provided for existing LIC policyholders as well as new clients.',
      },
    ],
  },
  {
    slug: 'sg-highway',
    name: 'SG Highway',
    mapQuery: 'SG Highway, Ahmedabad, Gujarat',
    intro:
      'Professionals and business owners along SG Highway — from Thaltej to Vaishnodevi — work with Jigisha Kiran Shah on high-value term cover (Tech Term, Jeevan Amar), employer-employee insurance, HUF policies, and retirement annuities. Consultations fit around working hours, including WhatsApp-first discussions.',
    landmarks: ['Thaltej', 'Vaishnodevi Circle', 'GIFT City corridor', 'Corporate parks along SG Highway'],
    commute: 'SG Highway locations are typically 25–40 minutes from Shela. Working clients usually start on phone/WhatsApp and meet in person for final documentation.',
    faqs: [
      {
        q: 'Can a busy professional on SG Highway get LIC advice without visiting an office?',
        a: 'Yes. Consultations run on phone and WhatsApp — share age, income range, and goal (term cover, retirement, child education) and receive personalised LIC recommendations with full follow-up.',
      },
      {
        q: 'Do you handle corporate and HUF insurance?',
        a: 'Yes. Employer-employee group cover, partnership insurance, MWP Act policies, and HUF insurance are part of the practice, alongside individual term, pension, and endowment plans.',
      },
    ],
  },
  {
    slug: 'bopal',
    name: 'Bopal',
    mapQuery: 'Bopal, Ahmedabad, Gujarat',
    intro:
      'Bopal\u2019s mix of long-settled families and new township residents makes it a core service area. Jigisha Kiran Shah helps Bopal families with money-back plans for milestones, Jeevan Labh endowment for wealth creation, health cover (Arogya Rakshak, Cancer Cover), and complete claims assistance.',
    landmarks: ['Bopal crossroads', 'Bopal–Ghuma corridor', 'Sterling City area', 'Ambli–Bopal Road'],
    commute: 'Bopal is adjacent to Shela — most areas are 10–20 minutes from the Orchid Legacy office. Home visits in Bopal can be arranged.',
    faqs: [
      {
        q: 'Is there an LIC agent near Bopal, Ahmedabad?',
        a: 'Yes. Jigisha Kiran Shah\u2019s office in neighbouring Shela (Orchid Legacy, Applewoods Township) is 10–20 minutes from most Bopal areas. Call +91 98240 25435 for term, endowment, pension, and health cover advice.',
      },
      {
        q: 'Do you help with LIC maturity and claims in Bopal?',
        a: 'Yes. 1000+ settled claims with documentation support — intimation, paperwork, branch coordination, and follow-up until settlement — for Bopal clients and across Ahmedabad.',
      },
    ],
  },
  {
    slug: 'science-city',
    name: 'Science City',
    mapQuery: 'Science City, Ahmedabad, Gujarat',
    intro:
      'Young families around Science City, Sola, and Gota plan early for children\u2019s education and home-loan protection. Jigisha Kiran Shah advises on Jeevan Tarun and New Children\u2019s Money Back plans with premium-waiver benefits, plus term cover sized to outstanding liabilities.',
    landmarks: ['Science City', 'Sola', 'Gota', 'Hebatpur Road'],
    commute: 'Science City area is roughly 30–40 minutes from Shela. First consultations happen over phone/WhatsApp, with in-person meetings scheduled as needed.',
    faqs: [
      {
        q: 'Which LIC child education plans suit young families near Science City?',
        a: 'Jeevan Tarun (payouts at ages 20/22/24/25) and the New Children\u2019s Money Back plan are popular, both with premium-waiver protection. A free consultation maps the right sum assured to projected education costs.',
      },
      {
        q: 'How much term cover should a home-loan borrower take?',
        a: 'A common rule is 10–15x annual income plus outstanding loans. Share your age, income, and loan details on +91 98240 25435 for a personalised Tech Term or Jeevan Amar illustration.',
      },
    ],
  },
];

export function getArea(slug: string | undefined): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}
