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
  {
    slug: 'vastrapur',
    name: 'Vastrapur',
    mapQuery: 'Vastrapur, Ahmedabad, Gujarat',
    intro:
      'Vastrapur\u2019s mix of professors, doctors, and long-settled business families makes it a natural fit for planned insurance. Jigisha Kiran Shah advises Vastrapur clients on retirement annuities (Jeevan Akshay VII), Jeevan Umang whole-life cover, and term top-ups — mostly over phone and WhatsApp, with scheduled in-person reviews.',
    landmarks: ['Vastrapur Lake', 'IIM Ahmedabad', 'Sola–Vastrapur corridor', 'Judges Bungalow Road'],
    commute: 'Vastrapur is about 30–40 minutes from the Shela office. Most clients start on phone/WhatsApp and meet in person for documentation and annual reviews.',
    faqs: [
      {
        q: 'Do you serve Vastrapur, Ahmedabad for LIC retirement planning?',
        a: 'Yes. Vastrapur clients get pension-gap calculations, Jeevan Akshay VII illustrations, and annuity comparisons by phone or video call, with in-person meetings scheduled as needed. Call +91 98240 25435.',
      },
      {
        q: 'Can you service LIC policies bought years ago in Vastrapur?',
        a: 'Yes. Policy reviews, nominee updates, maturity tracking, and 1000+ settled claims of experience back every existing policyholder — not just new clients.',
      },
    ],
  },
  {
    slug: 'ambawadi',
    name: 'Ambawadi',
    mapQuery: 'Ambawadi, Ahmedabad, Gujarat',
    intro:
      'Central Ahmedabad professionals around Ambawadi, Commerce Six Roads, and H.L. College work tight schedules — so consultations run WhatsApp-first. Jigisha Kiran Shah structures term cover (Tech Term, Jeevan Amar), endowment savings (Jeevan Labh), and pension plans for Ambawadi families without office visits.',
    landmarks: ['Commerce Six Roads', 'H.L. College', 'Parimal Garden', 'ATMA House'],
    commute: 'Ambawadi is roughly 25–35 minutes from Shela. Working clients usually complete the full advice process on phone/WhatsApp and meet once for documentation.',
    faqs: [
      {
        q: 'Is there an LIC advisor near Ambawadi, Ahmedabad?',
        a: 'Yes. Jigisha Kiran Shah serves Ambawadi families with term, endowment, pension, and health cover advice over phone/WhatsApp, plus in-person meetings by appointment. Call +91 98240 25435.',
      },
      {
        q: 'I work full-time near Commerce Six Roads. How do consultations fit my day?',
        a: 'Evening phone and WhatsApp slots are available Monday to Saturday. Share age, income range, and goal once — you receive personalised illustrations without repeated calls.',
      },
    ],
  },
  {
    slug: 'maninagar',
    name: 'Maninagar',
    mapQuery: 'Maninagar, Ahmedabad, Gujarat',
    intro:
      'East Ahmedabad families in Maninagar, Kankaria, and Rambaug often hold older LIC policies bought decades ago — exactly the ones needing nominee checks and maturity tracking today. Jigisha Kiran Shah serves Maninagar with policy reviews, claims support, and new term, pension, and child plans.',
    landmarks: ['Kankaria Lake', 'Maninagar Railway Station', 'Swaminarayan Temple', 'Rambaug'],
    commute: 'Maninagar is across the river, about 35–45 minutes from Shela. Policy reviews and consultations run on phone/WhatsApp; in-person meetings are scheduled for documentation and claims.',
    faqs: [
      {
        q: 'Do you help with old LIC policies and claims in Maninagar?',
        a: 'Yes — this is core work. Nominee verification, maturity tracking, policy tracing from PAN and date of birth, and full claims documentation support for Maninagar families. Call +91 98240 25435.',
      },
      {
        q: 'Can I buy a new LIC pension or term plan from Maninagar?',
        a: 'Yes. Consultations happen over phone/WhatsApp with illustrations for Jeevan Akshay VII, Tech Term, and Jeevan Tarun, followed by assisted documentation as per LIC process.',
      },
    ],
  },
  {
    slug: 'naranpura',
    name: 'Naranpura',
    mapQuery: 'Naranpura, Ahmedabad, Gujarat',
    intro:
      'Naranpura\u2019s established residential societies hold many dual-income families balancing home loans with children\u2019s education goals. Jigisha Kiran Shah advises Naranpura clients on term cover sized to liabilities, Jeevan Labh endowment for milestones, and Jeevan Tarun for education — with phone-first consultations.',
    landmarks: ['Naranpura Crossroads', 'Sardar Patel Stadium area', 'Riverfront West Bank', 'Sola Road connection'],
    commute: 'Naranpura is about 30–40 minutes from the Shela office. First meetings run on phone/WhatsApp; in-person reviews are scheduled around your availability.',
    faqs: [
      {
        q: 'Which LIC plans suit a dual-income family in Naranpura with a home loan?',
        a: 'Term cover of 10–15x income plus the outstanding loan (Tech Term, Jeevan Amar), paired with Jeevan Labh or money-back plans for education milestones. A free consultation sizes both precisely.',
      },
      {
        q: 'Do you offer evening consultations for Naranpura working couples?',
        a: 'Yes. Evening phone and WhatsApp appointments run Monday to Saturday, 9 AM to 6 PM window plus on-request evening slots. Call +91 98240 25435.',
      },
    ],
  },
  {
    slug: 'gota',
    name: 'Gota',
    mapQuery: 'Gota, Ahmedabad, Gujarat',
    intro:
      'Gota and Ognaj\u2019s newer societies are full of first-home buyers — the exact families who need term cover most and buy it least. Jigisha Kiran Shah helps Gota families with Tech Term and Jeevan Amar sized to home loans, plus Jeevan Tarun child plans with premium-waiver protection.',
    landmarks: ['Gota Crossroads', 'Narmada Canal Road', 'Bhagwat Vidyapith', 'Ognaj corridor'],
    commute: 'Gota is roughly 30–40 minutes from Shela via Sola and the SP Ring Road. Consultations start on phone/WhatsApp with in-person meetings as needed.',
    faqs: [
      {
        q: 'I just bought a flat in Gota. How much term insurance do I need?',
        a: 'Cover the outstanding home loan plus 10–15x annual income, so EMIs and family expenses both survive you. Share loan and income details on +91 98240 25435 for an exact Tech Term illustration.',
      },
      {
        q: 'Which child plans work for young Gota families?',
        a: 'Jeevan Tarun and the New Children\u2019s Money Back plan, both with premium-waiver benefit — if anything happens to you, premiums stop but payouts continue. Maturities can be timed to ages 18–25.',
      },
    ],
  },
  {
    slug: 'chandkheda',
    name: 'Chandkheda',
    mapQuery: 'Chandkheda, Ahmedabad, Gujarat',
    intro:
      'Chandkheda\u2019s ONGC colony, bank townships, and highway-corridor professionals value guaranteed, no-surprise products. Jigisha Kiran Shah serves Chandkheda with pension annuities (Jeevan Akshay VII), endowment savings (Jeevan Labh, Bima Shree), and term cover — consultations by phone, WhatsApp, and scheduled visits.',
    landmarks: ['ONGC Colony', 'Visat–Gandhinagar Highway', 'Chandkheda Village Centre', 'Sughad corridor'],
    commute: 'Chandkheda is about 35–45 minutes from Shela. North Ahmedabad clients typically consult over phone/WhatsApp with in-person meetings for documentation.',
    faqs: [
      {
        q: 'Do you serve Chandkheda, Ahmedabad for LIC pension plans?',
        a: 'Yes. Jeevan Akshay VII annuity illustrations, pension-gap math, and joint-life options for Chandkheda retirees and pre-retirees — free consultation on +91 98240 25435.',
      },
      {
        q: 'Can salaried professionals in Chandkheda get 80C tax-saving LIC plans?',
        a: 'Yes. Endowment, money-back, and term premiums qualify under Section 80C with maturity/death benefits under 10(10D) conditions. A review matches the right plan to your salary structure.',
      },
    ],
  },
];

export function getArea(slug: string | undefined): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}
