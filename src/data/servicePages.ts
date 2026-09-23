/**
 * SEO layer for dedicated service pages (/services/:slug).
 * Product data (plans, benefits) lives in services.ts; this file holds the
 * keyword targeting: title, description, intro copy, and quotable FAQs
 * (visible on-page AND in FAQPage JSON-LD — what AI engines cite).
 */
export interface ServicePageMeta {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  targetQuery: string;
  h1: string;
  intro: string[];
  faqs: Array<{ q: string; a: string }>;
  relatedPost?: { label: string; to: string };
}

export const SERVICE_PAGES: ServicePageMeta[] = [
  {
    slug: 'term-insurance',
    title: 'Term Insurance in Ahmedabad | LIC Tech Term, Jeevan Amar',
    description:
      'Term insurance in Ahmedabad: Rs 1 crore+ cover at the lowest cost. LIC Tech Term & Jeevan Amar with free advice from Jigisha Kiran Shah, 2x MDRT. +91 98240 25435.',
    keywords:
      'term insurance Ahmedabad, LIC Tech Term, Jeevan Amar, best term plan Gujarat, 1 crore term insurance Ahmedabad',
    targetQuery: 'term insurance Ahmedabad',
    h1: 'Term Insurance in Ahmedabad',
    intro: [
      'Term insurance is the cheapest way to buy the largest protection: a Rs 1 crore cover for the price of a monthly pizza. Plans like LIC Tech Term and Jeevan Amar pay your family the full sum assured if anything happens to you during the term — nothing more, nothing less.',
      'Jigisha Kiran Shah sizes cover by a simple rule — 10 to 15 times your annual income plus outstanding loans — and documents the nominee registration that decides whether claims settle in 19 days or 4 months.',
    ],
    faqs: [
      {
        q: 'How much term insurance cover do I need in Ahmedabad?',
        a: 'Take 10–15 times your annual income and add outstanding home or business loans. A 35-year-old earning Rs 12 lakh with a Rs 40 lakh loan needs roughly Rs 1.5–2.2 crore. A free consultation produces the exact number for your age and health.',
      },
      {
        q: 'LIC Tech Term vs Jeevan Amar — which is better?',
        a: 'Tech Term is LIC\u2019s pure online term plan with the lowest premiums; Jeevan Amar offers regular-premium flexibility with level or increasing cover and special rates for women. Both pay identical death benefits — the choice is about payment mode and riders, mapped in one sitting.',
      },
      {
        q: 'What delays LIC term insurance claims the most?',
        a: 'Missing nominee registration. Claims with a registered nominee typically settle in weeks; without one, families face succession paperwork stretching to months. Every policy placed here leaves with nominee verification done.',
      },
    ],
    relatedPost: { label: 'Nominee mistakes that delay claims', to: '/blog/the-policy-he-bought-after-the-funeral' },
  },
  {
    slug: 'retirement',
    title: 'Retirement & Pension Plans in Ahmedabad | Jeevan Akshay',
    description:
      'Retirement planning in Ahmedabad: convert your corpus into guaranteed monthly pension with LIC Jeevan Akshay VII & Jeevan Umang. Free gap calculation: +91 98240 25435.',
    keywords:
      'retirement planning Ahmedabad, LIC pension plans, Jeevan Akshay VII, Jeevan Umang, annuity plans Gujarat, pension for senior citizens Ahmedabad',
    targetQuery: 'retirement planning Ahmedabad',
    h1: 'Retirement & Pension Plans in Ahmedabad',
    intro: [
      'A lump sum in a fixed deposit is not income — it is a countdown. Retirement planning converts money you have into a monthly payment that cannot run out: LIC Jeevan Akshay VII starts pension the very next month at a rate locked on day one, for as long as you live.',
      'Every engagement starts with the same five numbers — true monthly expense, years to fund, guaranteed income already coming, the gap, and the corpus the gap demands — worked out free on one sheet of paper before any product is discussed.',
    ],
    faqs: [
      {
        q: 'How much corpus do I need to retire in Ahmedabad?',
        a: 'Subtract guaranteed income (EPF pension, rent) from true monthly expenses to get the gap, then multiply the annual gap by roughly 16–18 at current annuity rates. A Rs 20,000 monthly gap needs about Rs 40 lakh in an annuity — exact quotes come from LIC\u2019s calculator, free.',
      },
      {
        q: 'FD vs LIC pension plan — which is better after retirement?',
        a: 'An FD pays interest from a pile that shrinks with every withdrawal and every rate cut. An annuity like Jeevan Akshay VII pays a contractually fixed amount for life, immune to market and rate movements. The standard architecture: pension for fixed expenses, FD for 6–12 months of emergency liquidity.',
      },
      {
        q: 'What are joint-life and return-of-premium options?',
        a: 'Joint-life continues the pension to your spouse after you; return-of-premium refunds the purchase price to nominees at the end. Both cost a small reduction in monthly payout and are usually worth it — modelled side-by-side in your illustration.',
      },
    ],
    relatedPost: { label: 'The 5-number retirement checklist', to: '/blog/retirement-planning-ahmedabad-50s-checklist' },
  },
  {
    slug: 'child-education',
    title: 'Child Education Plans in Ahmedabad | LIC Jeevan Tarun',
    description:
      'Child education plans in Ahmedabad: LIC Jeevan Tarun & Children\u2019s Money Back timed to ages 18–25 with premium waiver. Free sizing consultation: +91 98240 25435.',
    keywords:
      'child education plan Ahmedabad, LIC Jeevan Tarun, children money back plan, education planning Gujarat, premium waiver plans',
    targetQuery: 'child education plan Ahmedabad',
    h1: 'Child Education Plans in Ahmedabad',
    intro: [
      'Education inflation in India runs near 10% a year — a degree costing Rs 10 lakh today is quoted at Rs 15 lakh-plus in Gujarat cities within a few years. LIC Jeevan Tarun and the New Children\u2019s Money Back Plan lock a guaranteed share of that bill to payout ages 18 through 25.',
      'The critical feature is premium waiver: if anything happens to the earning parent, future premiums stop but every payout continues. Maturity year is matched to the milestone year first — 18 for undergraduate, 22 for postgraduate.',
    ],
    faqs: [
      {
        q: 'Which LIC plan is best for my child\u2019s education?',
        a: 'Jeevan Tarun pays at ages 20, 22, 24 with maturity at 25; the New Children\u2019s Money Back Plan pays at 18, 20, 22 with final payment at 25. Both carry premium-waiver protection. The right pick depends on your child\u2019s current age and the milestone year.',
      },
      {
        q: 'How much should I save for my child\u2019s education in Ahmedabad?',
        a: 'Project the course cost at 10% annual education inflation to the milestone year, then size the sum assured to cover a defined share — typically half — with the rest from earnings, scholarships, or loans. A consultation runs your exact numbers free.',
      },
      {
        q: 'What happens to the child plan if the parent dies?',
        a: 'With premium-waiver benefit, all future premiums are waived and every scheduled payout still arrives on time, plus the life cover is paid immediately. This is why waiver-backed plans beat plain savings for education goals.',
      },
    ],
    relatedPost: { label: 'Jeevan Labh for education savings', to: '/blog/jevan-labh-or-the-alarm-clock' },
  },
  {
    slug: 'wealth-creation',
    title: 'Endowment Plans in Ahmedabad | LIC Jeevan Labh',
    description:
      'Endowment & wealth plans in Ahmedabad: LIC Jeevan Labh with guaranteed maturity plus bonuses. Disciplined savings for milestones. Free advice: +91 98240 25435.',
    keywords:
      'endowment plans Ahmedabad, LIC Jeevan Labh, wealth creation LIC, guaranteed savings plans Gujarat, new endowment plan',
    targetQuery: 'LIC Jeevan Labh Ahmedabad',
    h1: 'Endowment & Wealth Plans in Ahmedabad',
    intro: [
      'An endowment plan like LIC Jeevan Labh is not the highest-returning place for a rupee — it is the most disciplined one. You pay premiums for a fixed term, and on a fixed future date a guaranteed maturity amount plus vested bonuses is paid to you, with life cover running throughout.',
      'For Ahmedabad families, endowments fund the predictable milestones: a daughter\u2019s age-18 education corpus, a 15-year business expansion reserve, a retirement top-up. Auto-debit does the discipline; the contract does the rest.',
    ],
    faqs: [
      {
        q: 'Is LIC Jeevan Labh a good investment?',
        a: 'Judge it correctly: Jeevan Labh is a discipline instrument with guaranteed maturity plus bonuses and built-in life cover — not a return champion. If your money keeps getting diverted from goals, its forced structure beats higher-return options you never stay invested in.',
      },
      {
        q: 'How does Jeevan Labh pay at maturity?',
        a: 'You pay premiums for 16, 21, or 25 years; at maturity you receive the Basic Sum Assured plus vested simple reversionary bonuses and a Final Additional Bonus. Life cover runs the full term, and loans are available after three policy years.',
      },
      {
        q: 'Endowment vs term insurance — which should I buy first?',
        a: 'Buy term first for protection (cheapest cover per rupee), then endowment for savings goals. Most Ahmedabad families need both: term sized to income-plus-loans, endowment sized to a dated milestone. A consultation maps the split to your budget.',
      },
    ],
    relatedPost: { label: 'The alarm-clock savings method', to: '/blog/jevan-labh-or-the-alarm-clock' },
  },
  {
    slug: 'health-insurance',
    title: 'Health Insurance in Ahmedabad | LIC Arogya Rakshak',
    description:
      'Health insurance in Ahmedabad: LIC Arogya Rakshak hospitalisation cover & Cancer Cover with premium waiver. Protect savings from medical bills: +91 98240 25435.',
    keywords:
      'health insurance Ahmedabad, LIC Arogya Rakshak, cancer cover LIC, medical insurance Gujarat, hospitalisation cover',
    targetQuery: 'health insurance Ahmedabad LIC',
    h1: 'Health Insurance in Ahmedabad',
    intro: [
      'One private-hospital admission in Ahmedabad can erase five years of savings. LIC Arogya Rakshak is a fixed-benefit health plan — hospitalisation pays a defined daily benefit plus surgical benefits with no room-rent restrictions — while Cancer Cover pays a lump sum on diagnosis at any stage.',
      'Fixed-benefit plans complement reimbursement mediclaim rather than replacing it: the lump sum covers the income loss, travel, and attendant costs that bills never show.',
    ],
    faqs: [
      {
        q: 'What does LIC Arogya Rakshak cover?',
        a: 'Fixed daily hospital cash benefit, surgical benefits, day-care procedures, and ambulance benefit, renewable for lifetime with no room-rent caps. Payouts are fixed sums per event — claimed alongside, not instead of, any mediclaim policy.',
      },
      {
        q: 'How does LIC Cancer Cover work?',
        a: 'A lump sum is paid on early-stage diagnosis and the full sum assured on major-stage diagnosis, with future premiums waived after diagnosis and an optional income benefit. Cover is available at modest premiums when bought young and healthy.',
      },
      {
        q: 'I already have company mediclaim. Do I still need this?',
        a: 'Usually yes. Company cover ends with the job, rarely covers parents adequately, and never pays for income loss during treatment. A fixed-benefit plan travels with you across employers and pays cash you control.',
      },
    ],
  },
  {
    slug: 'money-back',
    title: 'Money Back Plans in Ahmedabad | LIC Bima Shree',
    description:
      'Money back plans in Ahmedabad: periodic payouts plus life cover with LIC Bima Shree & New Money Back 25 years. Milestone funding: +91 98240 25435.',
    keywords:
      'money back policy Ahmedabad, LIC Bima Shree, guaranteed payouts LIC, milestone savings Gujarat',
    targetQuery: 'money back policy Ahmedabad',
    h1: 'Money Back Plans in Ahmedabad',
    intro: [
      'Money-back plans pay you during the policy — not just at the end. The New Money Back Plan (25 years) returns 15% of the sum assured in the 5th, 10th, and 15th years with 40% plus bonus at maturity; Bima Shree adds guaranteed additions for high-value savers from Rs 10 lakh.',
      'Ahmedabad families use the payouts for school admissions, business inventory cycles, and home down payments — liquidity with life cover attached, and full sum assured plus bonus still payable on death throughout.',
    ],
    faqs: [
      {
        q: 'How do LIC money back plans pay out?',
        a: 'Survival benefits arrive at fixed intervals (for example 15% of sum assured in years 5, 10, 15 of the 25-year plan) with the balance plus vested bonuses at maturity. Death benefit throughout is the full sum assured plus bonuses — payouts already received are not deducted.',
      },
      {
        q: 'What is LIC Bima Shree?',
        a: 'A high-value money-back plan (minimum Rs 10 lakh sum assured) with guaranteed additions every year and loyalty additions at maturity, aimed at affluent savers who want scheduled liquidity with protection.',
      },
      {
        q: 'Money back vs endowment — what is the difference?',
        a: 'Money-back returns part of the cover mid-term for liquidity; endowment pays everything at maturity for a larger terminal corpus. Choose money-back when milestones fall during the term, endowment when the goal sits at the end.',
      },
    ],
  },
  {
    slug: 'corporate-insurance',
    title: 'Corporate & HUF Insurance Ahmedabad | Employer Cover',
    description:
      'Corporate insurance in Ahmedabad: employer-employee cover, partnership, MWP Act & HUF policies for businesses. Structured advice: +91 98240 25435.',
    keywords:
      'corporate insurance Ahmedabad, employer employee insurance, HUF insurance, MWP Act policy, partnership insurance Gujarat, group term insurance',
    targetQuery: 'corporate insurance Ahmedabad',
    h1: 'Corporate & HUF Insurance in Ahmedabad',
    intro: [
      'Businesses on SG Highway, in Naroda\u2019s estates, and across Ahmedabad use LIC structures most advisors never mention: employer-employee policies that make key-person cover a tax-efficient business expense, MWP Act policies creditors cannot attach, and HUF policies that separate family protection from business risk.',
      'This practice handles group term for teams, partnership continuity cover, buy-sell funding, and succession-safe HUF insurance — with documentation support that finance heads actually enjoy.',
    ],
    faqs: [
      {
        q: 'How does employer-employee LIC insurance work?',
        a: 'The employer pays premiums on employees\u2019 lives under a master arrangement — the business gets a motivated, protected team and tax treatment on outgo, while families receive assured cover. Sum assured is customised per employee grade.',
      },
      {
        q: 'What is an MWP Act policy and who needs one?',
        a: 'A policy endorsed under the Married Women\u2019s Property Act belongs to the wife and children — creditors and business liabilities cannot touch it. Any Ahmedabad businessman with loans should hold core family cover in MWP form.',
      },
      {
        q: 'Can an HUF buy LIC insurance?',
        a: 'Yes. The HUF can be proposer with the karta or a member as life assured, earning Section 80C benefits while ring-fencing family protection from the family business\u2019s risks. Structures are set up with proper resolutions and documentation.',
      },
    ],
  },
];

export function getServicePage(slug: string | undefined): ServicePageMeta | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}
