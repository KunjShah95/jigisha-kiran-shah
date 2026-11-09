/**
 * SEO layer for dedicated service pages (/services/:slug).
 * Product data (plans, benefits) lives in services.ts; this file holds the
 * keyword targeting: title, description, intro copy, and quotable FAQs
 * (visible on-page AND in FAQPage JSON-LD — what AI engines cite).
 */
/**
 * A content block for pages that are about a *process* rather than a product
 * (revival, nominee change, claim documents). Product pages get plan cards
 * from services.ts; servicing pages get these instead.
 */
export interface ServiceSection {
  heading: string;
  intro?: string;
  items?: string[];
  /** Render items as an ordered list — use for step-by-step processes. */
  numbered?: boolean;
  /** Internal links rendered as cards — hub pages use these to route to the detailed page. */
  links?: Array<{ label: string; to: string; note: string }>;
}

export interface ServicePageMeta {
  slug: string;
  title: string;
  description: string;
  /** Eyebrow above the H1 when the page has no product family in services.ts. */
  tagline?: string;
  keywords: string;
  targetQuery: string;
  h1: string;
  intro: string[];
  faqs: Array<{ q: string; a: string }>;
  relatedPost?: { label: string; to: string };
  /** Reuse another service's plan cards (services.ts id) for keyword/area pages. */
  productsFrom?: string;
  /** Process blocks. Rendered instead of plan cards when there are no products. */
  sections?: ServiceSection[];
  /** ISO date the page content was last verified against current LIC rules. */
  updated?: string;
  /** Official product sources used for plan pages. */
  officialSources?: { label: string; url: string }[];
}

export const SERVICE_PAGES: ServicePageMeta[] = [
  // ---- Hub pages: broad "life insurance advisor" and "family protection" intent ----
  {
    slug: 'life-insurance',
    tagline: 'Life insurance advice',
    title: 'Life Insurance Plans & Services in Ahmedabad',
    description:
      'Life insurance advice in Ahmedabad from Jigisha Kiran Shah, LIC advisor since 2004. Understand term, savings, pension and child plans, then get a free personal consultation.',
    keywords:
      'life insurance services Ahmedabad, life insurance plans Ahmedabad, life insurance consultant Ahmedabad, types of life insurance, LIC advisor Ahmedabad, why life insurance is important',
    targetQuery: 'life insurance services Ahmedabad',
    h1: 'Life Insurance Plans & Services in Ahmedabad',
    intro: [
      'Life insurance has one job: if the person who earns the family’s income dies, the money that income was going to provide still arrives. Everything else — savings, bonuses, tax benefits — is secondary to that promise.',
      'Jigisha Kiran Shah has advised individuals, families and business owners in Ahmedabad on LIC life insurance since 2004. A consultation starts with your responsibilities — dependants, loans, goals and the policies you already hold — and only then looks at plans. The first discussion is free and carries no obligation to buy.',
    ],
    updated: '2026-11-05',
    sections: [
      {
        heading: 'The main types of life insurance, and what each is for',
        intro: 'Each plan family solves a different problem. Most households need a combination, sized to their own numbers.',
        links: [
          { label: 'Term insurance', to: '/services/term-insurance', note: 'The largest cover for the lowest premium. Pays only on death during the term.' },
          { label: 'Endowment and savings plans', to: '/services/wealth-creation', note: 'Life cover plus a maturity amount on a fixed date, for a known future goal.' },
          { label: 'Child education plans', to: '/services/child-education', note: 'Payouts timed to college years, with premium waiver if the parent dies.' },
          { label: 'Retirement and pension plans', to: '/services/retirement', note: 'Turn a corpus into income that continues for life.' },
          { label: 'Money-back plans', to: '/services/money-back', note: 'Periodic payouts during the term, with life cover running throughout.' },
          { label: 'Business protection', to: '/services/corporate-insurance', note: 'Partnership, key-person and employer-employee cover for business owners.' },
        ],
      },
      {
        heading: 'What working with an advisor involves',
        numbered: true,
        items: [
          'A conversation about your family, income, loans and goals — no product talk until the numbers are clear.',
          'A list of the policies you already hold, with their cover, maturity dates and nominees.',
          'A cover estimate and a plan illustration you can take home and compare. You decide in your own time.',
          'Help with the proposal, medicals and documents if you go ahead, and with nominee updates, revival and claims for as long as the policy runs.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why is life insurance important?',
        a: 'It replaces the income a family loses if the earning member dies, so loans, school fees and daily expenses can still be paid. Without it, dependants usually fall back on savings, relatives or selling assets. The younger and healthier you are when you buy, the lower the premium.',
      },
      {
        q: 'How much life insurance coverage does a family need?',
        a: 'A common starting point is 10 to 15 times annual income, plus outstanding loans, minus existing cover and liquid savings. A family with young children or a large home loan needs more; one with grown children and no debt needs less. The free protection check on this site runs the numbers.',
      },
      {
        q: 'Should I buy life insurance through an advisor or online?',
        a: 'Both reach the same insurer and the same policy terms. An advisor helps you choose the plan type and cover, fills the proposal correctly, keeps nominee details current and supports your family at claim time. Buying online suits people who already know exactly what they need.',
      },
      {
        q: 'Is Jigisha Kiran Shah an independent financial adviser?',
        a: 'No. She is an individual LIC agent, so the plans she offers are LIC plans, and policies are issued and claims decided by LIC. She has advised Ahmedabad families since 2004 and qualified for MDRT in 2023 and 2024.',
      },
    ],
    relatedPost: { label: 'Free protection check — estimate your cover gap', to: '/protection-check' },
  },
  {
    slug: 'family-financial-protection',
    tagline: 'Family protection planning',
    title: 'Family Financial Protection Planning in Ahmedabad',
    description:
      'Family financial protection planning in Ahmedabad: income replacement, loan cover, children’s education and health protection, reviewed together. Free discussion: +91 98240 25435.',
    keywords:
      'family financial protection Ahmedabad, family protection plan, financial planning for family Ahmedabad, life insurance for married couples, children education financial planning, life changes insurance needs',
    targetQuery: 'family financial protection Ahmedabad',
    h1: 'Family Financial Protection Planning in Ahmedabad',
    intro: [
      'A family’s financial plan usually fails at one point: the income stops. A protection plan answers four questions before that happens — who depends on the income, what they would need, what is already in place, and what the gap is.',
      'Jigisha Kiran Shah works through those questions with families across Ahmedabad, from newly married couples to parents planning college fees to people nearing retirement. The result is a short written summary of your cover and the gaps, not a sales pitch.',
    ],
    updated: '2026-11-05',
    sections: [
      {
        heading: 'What a family protection review looks at',
        items: [
          'Income replacement — how many years of household expenses the family would need if the main earner died.',
          'Loans — home, vehicle and business loans that would otherwise pass to the family.',
          'Children’s education — the cost of the milestone years, adjusted for education inflation.',
          'Health costs — whether hospital and critical-illness expenses would drain the savings meant for other goals.',
          'Retirement — whether the surviving spouse would still have an income later in life.',
          'Paperwork — nominees, MWP Act protection where relevant, and where the policy documents are kept.',
        ],
      },
      {
        heading: 'When to review your family’s protection',
        intro: 'Cover bought ten years ago was sized for a different family. These events are the usual signal to look again.',
        items: [
          'Marriage, or the birth or adoption of a child.',
          'A new home loan, or a large top-up on an existing one.',
          'A significant rise in income or a move to self-employment.',
          'Starting or expanding a business, or taking on a partner.',
          'A policy maturing, lapsing or being surrendered.',
          'The death of a nominee, divorce or a change in who depends on you.',
        ],
      },
      {
        heading: 'Related services',
        links: [
          { label: 'Life insurance overview', to: '/services/life-insurance', note: 'The main plan types and how they fit together.' },
          { label: 'Policy review', to: '/services/policy-review-claims', note: 'List every policy you hold, check nominees and spot gaps.' },
          { label: 'Child education plans', to: '/services/child-education', note: 'Payouts timed to the years fees fall due.' },
          { label: 'Health cover', to: '/services/health-insurance', note: 'LIC health and cancer cover, with official documents.' },
        ],
      },
    ],
    faqs: [
      {
        q: 'What should families consider when planning financial protection?',
        a: 'Start with who depends on your income and for how long. Then add outstanding loans and dated goals such as education, subtract existing cover and savings, and check nominees on every policy. Health costs and the surviving spouse’s retirement belong in the same plan.',
      },
      {
        q: 'When should you review your life insurance policy?',
        a: 'Review it after any major life change — marriage, a child, a new loan, a job or income change, starting a business — and otherwise every two to three years. Check that the cover still matches your responsibilities and that the nominee is correct.',
      },
      {
        q: 'How do life changes affect insurance needs?',
        a: 'Most life changes increase the amount your family would need: a child adds education costs, a home loan adds debt, a higher income raises the lifestyle to protect. Some reduce it, such as a paid-off loan or children becoming independent. Cover should follow those changes.',
      },
      {
        q: 'What is the difference between life insurance and health insurance?',
        a: 'Life insurance pays a fixed amount to the nominee when the insured person dies (or at maturity, for savings plans). Health insurance pays or reimburses medical expenses while the insured person is alive. A family usually needs both: one protects income, the other protects savings from hospital bills.',
      },
    ],
    relatedPost: { label: 'Free protection check — estimate your cover gap', to: '/protection-check' },
  },
  {
    slug: 'term-insurance',
    title: 'LIC Term Insurance in Ahmedabad, Gujarat | Cover & Plan Review',
    description:
      'Compare LIC Tech Term and Jeevan Amar with an Ahmedabad advisor. Estimate cover using income, loans and existing policies, then review nominee details. Free consultation.',
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
    title: 'Retirement Planning in Ahmedabad | LIC Pension Plans',
    description:
      'Retirement planning in Ahmedabad: convert your corpus into guaranteed monthly pension with LIC Jeevan Akshay VII & Jeevan Umang. Free gap calculation: +91 98240 25435.',
    keywords:
      'retirement planning Ahmedabad, LIC pension plans, Jeevan Akshay VII, Jeevan Umang, annuity plans Gujarat, pension for senior citizens Ahmedabad',
    targetQuery: 'retirement planning Ahmedabad',
    h1: 'Retirement Planning & Pension Plans in Ahmedabad',
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
    title: 'Health Insurance in Ahmedabad | LIC Health Shield & Cancer Cover',
    description:
      'Compare LIC Health Shield (Plan 907) and New Cancer Cover (Plan 908) in Ahmedabad. Review eligibility, covered events and policy terms using LIC’s current brochures.',
    keywords:
      'health insurance Ahmedabad, LIC Health Shield 907, LIC New Cancer Cover 908, health insurance Gujarat, hospitalisation cover',
    targetQuery: 'LIC health insurance Ahmedabad',
    h1: 'Health Insurance in Ahmedabad',
    intro: [
      'LIC currently lists Health Shield (Plan 907, UIN 512N369V01) and New Cancer Cover (Plan 908, UIN 512N370V01). Both became available on 19 October 2026. They cover different health-related risks, so compare their policy wording, eligibility, covered events, limits and exclusions before applying.',
      'A plan name or brochure summary cannot tell you whether a policy fits your existing cover. Review the current benefit schedule alongside your mediclaim and ask for the official policy wording before making a decision.',
    ],
    updated: '2026-11-09',
    officialSources: [
      { label: 'LIC Health Shield — Plan 907, UIN 512N369V01', url: 'https://www.licindia.in/web/guest/lic-s-health-shield' },
      { label: 'LIC New Cancer Cover — Plan 908, UIN 512N370V01', url: 'https://www.licindia.in/web/guest/lic-s-new-cancer-cover' },
      { label: 'LIC health insurance plans', url: 'https://web.licindia.in/web/guest/health-insurance-plans' },
    ],
    faqs: [
      {
        q: 'Do you sell mediclaim or family floater health insurance?',
        a: 'No. Jigisha Kiran Shah is an individual LIC agent, so she offers LIC’s health plans — currently Health Shield (Plan 907) and New Cancer Cover (Plan 908) — not mediclaim policies from general or health insurers. LIC’s plans can sit alongside a family mediclaim, and she can review how the two fit together.',
      },
      {
        q: 'Which LIC health plans are currently listed?',
        a: 'LIC lists Health Shield (Plan 907, UIN 512N369V01) and New Cancer Cover (Plan 908, UIN 512N370V01). LIC states both were available from 19 October 2026. Check each current brochure and policy document for benefits and eligibility.',
      },
      {
        q: 'Can LIC Health Shield replace my existing health insurance?',
        a: 'Check the Health Shield policy wording against your current policy before deciding. Compare covered events, payout limits, exclusions, waiting periods and claim conditions; do not assume one plan replaces another based on its name.',
      },
      {
        q: 'Where can I read the official policy details?',
        a: 'Use LIC’s official Health Shield and New Cancer Cover product pages linked below. Read the current sales brochure, policy document and customer information sheet, including eligibility, definitions, exclusions and claims conditions.',
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
        q: 'What is business partnership protection?',
        a: 'Life cover taken on each partner so that, if one dies, the surviving partners have the money to buy the deceased partner\u2019s share from the family at a fair value. The business continues without draining working capital, and the family receives its share in cash. It works best with a buy-sell clause in the partnership deed.',
      },
      {
        q: 'Can an HUF buy LIC insurance?',
        a: 'Yes. The HUF can be proposer with the karta or a member as life assured, earning Section 80C benefits while ring-fencing family protection from the family business\u2019s risks. Structures are set up with proper resolutions and documentation.',
      },
    ],
    sections: [
      {
        heading: 'Each option in detail',
        links: [
          { label: 'Keyman insurance', to: '/services/keyman-insurance', note: 'Cover on a key person; the claim goes to the business.' },
          { label: 'Partnership insurance', to: '/services/partnership-insurance', note: 'Funds the buy-out of a partner’s share for the family.' },
          { label: 'Employer-employee insurance', to: '/services/employer-employee-insurance', note: 'Life cover for staff, paid by the business.' },
        ],
      },
    ],
    updated: '2026-11-09',
    relatedPost: { label: 'Example: staff cover for an engineering unit in GIDC Vatva', to: '/services/business-insurance-gidc-vatva' },
  },
  {
    slug: 'business-insurance-gidc-vatva',
    productsFrom: 'corporate-insurance',
    title: 'Business Insurance in GIDC Vatva | Employer-Employee Cover',
    description:
      'LIC business insurance for GIDC Vatva units: employer-employee cover for staff, partnership and key-person insurance for owners. Free consultation: +91 98240 25435.',
    keywords:
      'business insurance GIDC Vatva, employer employee insurance Vatva, LIC group insurance GIDC, staff insurance engineering unit Ahmedabad, key person insurance Vatva, partnership insurance GIDC Ahmedabad, LIC agent Vatva',
    targetQuery: 'business insurance GIDC Vatva',
    h1: 'Business Insurance for GIDC Vatva Units',
    intro: [
      'GIDC Vatva is home to hundreds of engineering, chemical and fabrication units, most of them owner-run, with a skilled team the business depends on. Jigisha Kiran Shah helps these owners put LIC structures in place for their staff, their partners and their own families.',
      'One recent example: an engineering unit in GIDC Vatva set up an employer-employee benefit for its staff. The unit pays the premium as the employer, and each covered employee’s family receives life cover. It gives the owner a concrete benefit to retain skilled workers, and it was set up with the documentation the unit’s accountant needed. Details stay private; the structure is available to any unit, from a handful of employees upward.',
      'Owners usually look at three things together: cover for the team (employer-employee), continuity if a partner or key person dies (partnership / key-person cover), and family protection that business creditors cannot reach (MWP Act policy). The first meeting can be at your unit in Vatva, at the Shela office, or by phone.',
    ],
    faqs: [
      {
        q: 'Can a small unit in GIDC Vatva give LIC insurance to its staff?',
        a: 'Yes. Under an employer-employee arrangement the business is the proposer and pays the premium on the lives of chosen employees, with sum assured set per grade or role. It suits small and mid-sized units, not only large companies. Call +91 98240 25435 to discuss your team size.',
      },
      {
        q: 'Is the premium for employee insurance a business expense?',
        a: 'Premium paid by the employer for an employer-employee policy is generally treated as a business expense, and the benefit may be taxable for the employee as a perquisite. Tax treatment depends on how the scheme is structured, so it is set up together with your CA.',
      },
      {
        q: 'What happens to a partnership firm if one partner dies?',
        a: 'Partnership insurance pays the firm or the surviving partners on a partner’s death, so the deceased partner’s share can be paid out to the family without pulling money from working capital. It works best alongside a written buy-sell clause in the partnership deed.',
      },
      {
        q: 'Do you visit units in GIDC Vatva?',
        a: 'Yes. Meetings can be held at your unit in Vatva by appointment (Mon–Sat, 9 AM–6 PM), at the Shela office, or over phone and WhatsApp. Book a time at jigishakiranshah.in/book.',
      },
    ],
  },
  // ---- Business protection: one page per product, each a distinct search intent ----
  {
    slug: 'keyman-insurance',
    tagline: 'Business protection',
    title: 'Keyman Insurance in Ahmedabad | Key Person Cover & Tax',
    description:
      'Keyman insurance in Ahmedabad: life cover a business takes on a key person. How it works, who qualifies, and how premiums and payouts are taxed. Free discussion: +91 98240 25435.',
    keywords:
      'keyman insurance Ahmedabad, key person insurance, keyman insurance LIC, keyman insurance tax treatment, keyman insurance for partners, key man policy business expense',
    targetQuery: 'keyman insurance Ahmedabad',
    h1: 'Keyman Insurance in Ahmedabad',
    intro: [
      'Many Ahmedabad businesses run on one or two people: the founder who holds the client relationships, the partner who knows production, the director the bank lends against. If that person dies, revenue drops at exactly the moment the business has to find a replacement, reassure lenders and keep paying salaries.',
      'Keyman insurance is life cover that the business takes on that key person. The business pays the premium and receives the claim, so the money arrives where the loss is felt.',
    ],
    updated: '2026-11-09',
    sections: [
      {
        heading: 'How keyman insurance works',
        items: [
          'The business (company or firm) is the proposer and pays the premium.',
          'The life insured is the key person: a director, a partner, or an employee whose skills or relationships drive profits.',
          'If the key person dies during the term, the claim is paid to the business, not to the family.',
          'LIC writes keyman cover on term assurance plans, so there is no maturity value: it is pure protection for the business.',
          'The amount of cover is linked to the person’s contribution to the business, measured from the company’s profits or the person’s salary. LIC’s branch confirms the limit for each case.',
        ],
      },
      {
        heading: 'How it is taxed',
        intro: 'This is the usual treatment; set up every keyman policy together with your chartered accountant.',
        items: [
          'Premiums paid by the business are generally allowed as a business expense.',
          'The claim received by the business is taxable as business income: the life-insurance payout exemption does not apply to keyman policies.',
          'A keyman policy stays a keyman policy even if it is later assigned to the employee; it does not become tax-free by being handed over.',
          'For partnership firms, CBDT Circular 38/2016 accepts that keyman premiums on a partner’s life are an allowable business expense.',
        ],
      },
      {
        heading: 'What the branch usually asks for',
        items: [
          'The business’s audited accounts or income-tax returns for recent years, to show profitability',
          'The key person’s income and existing insurance details',
          'A board resolution (company) or authority letter and partnership deed (firm)',
          'Medical examination of the key person, as per the sum assured',
        ],
      },
      {
        heading: 'Related business protection',
        links: [
          { label: 'Partnership insurance', to: '/services/partnership-insurance', note: 'Funds the buy-out of a partner’s share for the family.' },
          { label: 'Employer-employee insurance', to: '/services/employer-employee-insurance', note: 'Life cover for staff, paid by the business.' },
          { label: 'Corporate, HUF and MWP cover', to: '/services/corporate-insurance', note: 'All business and family-structure options together.' },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is keyman insurance?',
        a: 'Life cover that a business takes on a person whose death would hurt its profits, such as a founder, partner or key employee. The business pays the premium and receives the claim, which helps it absorb the loss while it recovers.',
      },
      {
        q: 'Is keyman insurance premium tax deductible?',
        a: 'Generally yes. Premiums paid by the business are allowed as a business expense, including keyman cover on a partner’s life (CBDT Circular 38/2016). The claim received is taxable as business income. Confirm the treatment for your business with your CA.',
      },
      {
        q: 'Is a keyman insurance payout tax-free?',
        a: 'No. The life-insurance payout exemption does not cover keyman policies, so the amount received by the business is taxed as business income, even if the policy was later assigned to the employee.',
      },
      {
        q: 'Can a partnership firm take keyman insurance on a partner?',
        a: 'Yes. A firm can insure a partner as a key person, and the premium is treated as a business expense. If the aim is to buy out a partner’s share for the family, partnership insurance is usually the better fit.',
      },
    ],
  },
  {
    slug: 'partnership-insurance',
    tagline: 'Business protection',
    title: 'Partnership Insurance in Ahmedabad | If a Partner Dies',
    description:
      'Partnership insurance in Ahmedabad: life cover that funds the buy-out of a partner’s share, so the family is paid and the business keeps its capital. Free discussion: +91 98240 25435.',
    keywords:
      'partnership insurance Ahmedabad, partnership insurance LIC, what happens if a business partner dies, buy sell agreement insurance India, partner life insurance, business partnership protection',
    targetQuery: 'partnership insurance Ahmedabad',
    h1: 'Partnership Insurance in Ahmedabad',
    intro: [
      'When a partner dies, two people need money at once. The family wants the partner’s share of the business in cash. The surviving partners want to keep the business without pulling that cash out of working capital or bringing in a stranger.',
      'Partnership insurance solves both: life cover on each partner, sized to the value of that partner’s share, so the money to buy out the share is ready when it is needed.',
    ],
    updated: '2026-11-09',
    sections: [
      {
        heading: 'How it works',
        numbered: true,
        items: [
          'The partners agree, in writing, what happens to a partner’s share on death, and at what value. This buy-sell clause belongs in the partnership deed.',
          'Each partner’s life is insured for roughly the value of their share.',
          'If a partner dies, the claim provides the money to pay the family for the share, as the deed sets out.',
          'The business continues with the surviving partners, and its working capital stays untouched.',
        ],
      },
      {
        heading: 'Partnership insurance or keyman insurance?',
        items: [
          'Partnership insurance answers: who pays the family for the share? The money goes to fund the buy-out.',
          'Keyman insurance answers: how does the business survive losing this person? The money goes to the business as compensation.',
          'Many firms need both. They are set up and taxed differently, so plan them with your CA.',
        ],
      },
      {
        heading: 'Before you start',
        items: [
          'A current partnership deed, and a supplementary deed if the buy-sell terms are added later',
          'A fair basis for valuing each partner’s share, reviewed every few years as the business grows',
          'Recent audited accounts and each partner’s capital account',
          'Review the cover when a partner joins or leaves, or when the business value changes',
        ],
      },
      {
        heading: 'Related business protection',
        links: [
          { label: 'Keyman insurance', to: '/services/keyman-insurance', note: 'Compensates the business for losing a key person.' },
          { label: 'Employer-employee insurance', to: '/services/employer-employee-insurance', note: 'Life cover for staff, paid by the business.' },
          { label: 'Corporate, HUF and MWP cover', to: '/services/corporate-insurance', note: 'MWP Act cover keeps family protection away from business creditors.' },
        ],
      },
    ],
    faqs: [
      {
        q: 'What happens to a partnership firm if one partner dies?',
        a: 'Unless the deed says otherwise, the deceased partner’s family is entitled to their share, and the firm may have to pay it out of working capital or reconstitute. Partnership insurance funds that payout, so the family is paid and the business carries on.',
      },
      {
        q: 'What is business partnership protection?',
        a: 'Life cover on each partner so that, if one dies, the surviving partners have the money to buy the deceased partner’s share from the family at a fair value. It works best with a buy-sell clause in the partnership deed.',
      },
      {
        q: 'How much partnership insurance does each partner need?',
        a: 'Roughly the value of that partner’s share of the business, using the valuation method agreed in the deed. Recheck it every few years, because a growing business makes old cover too small.',
      },
      {
        q: 'Does partnership insurance need a change in the partnership deed?',
        a: 'It should have one. The cover provides the money; the deed decides who buys the share, at what value and how the family is paid. Without that clause, the money and the obligation may not line up.',
      },
    ],
  },
  {
    slug: 'employer-employee-insurance',
    tagline: 'Business protection',
    title: 'Employer-Employee Insurance in Ahmedabad | Staff Life Cover',
    description:
      'Employer-employee insurance in Ahmedabad: life cover for staff, paid by the business. How the LIC scheme works, eligibility and how it is taxed. Free discussion: +91 98240 25435.',
    keywords:
      'employer employee insurance Ahmedabad, employer employee insurance scheme LIC, EE policy tax, staff life insurance paid by company, employee benefit insurance Gujarat',
    targetQuery: 'employer employee insurance Ahmedabad',
    h1: 'Employer-Employee Insurance in Ahmedabad',
    intro: [
      'Skilled staff are hard to find and expensive to replace. Employer-employee insurance lets a business give chosen employees real life cover, with the premium paid by the business, as a benefit that keeps people and protects their families.',
      'It suits small and mid-sized businesses as much as large companies. A unit can cover a handful of key staff, not necessarily everyone.',
    ],
    updated: '2026-11-09',
    sections: [
      {
        heading: 'How the scheme works',
        items: [
          'The employer pays the premium on a policy on the employee’s life.',
          'The employer can be the proposer and later assign the policy to the employee, as set out in a letter given with the proposal.',
          'The employee’s family receives the claim if the employee dies; savings plans can also pay a maturity amount to the employee.',
          'The employer chooses which employees to cover and can set the cover by grade or role.',
          'LIC sets eligibility rules, for example limits on the employee’s and the family’s shareholding in the employer company.',
        ],
      },
      {
        heading: 'How it is taxed',
        intro: 'The treatment depends on how the scheme is structured, so it is set up together with your chartered accountant.',
        items: [
          'For the employer, the premium is generally a business expense.',
          'For the employee, an employer-paid premium on a policy for a specific employee may be taxed as a perquisite (part of salary). It is generally not, where cover is provided to all employees.',
          'Maturity amounts paid to the employee follow the usual payout rules, depending on how and when the policy is assigned.',
        ],
      },
      {
        heading: 'What the branch usually asks for',
        items: [
          'The proposal, with the employer’s letter on the object of the insurance and its assignment',
          'The employer’s books of accounts or income-tax orders for recent years',
          'The employee’s income proof, since cover is sized to their eligibility',
          'A board resolution or authority letter',
        ],
      },
      {
        heading: 'Related business protection',
        links: [
          { label: 'Example: staff cover for a GIDC Vatva unit', to: '/services/business-insurance-gidc-vatva', note: 'How one engineering unit set it up.' },
          { label: 'Keyman insurance', to: '/services/keyman-insurance', note: 'Protects the business itself against losing a key person.' },
          { label: 'Partnership insurance', to: '/services/partnership-insurance', note: 'Funds a partner’s buy-out for the family.' },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is employer-employee insurance?',
        a: 'Life insurance on an employee’s life with the premium paid by the employer. The employee’s family is protected, and the business gets a benefit that helps it keep skilled staff. The employer chooses which employees to cover.',
      },
      {
        q: 'Is employer-employee insurance premium a business expense?',
        a: 'Generally yes, for the employer. For the employee, the premium may be a taxable perquisite where the cover is for specific employees rather than all staff. The exact treatment depends on the structure, so set it up with your CA.',
      },
      {
        q: 'Can a small business offer employer-employee insurance?',
        a: 'Yes. It is not limited to large companies; a unit can cover a few key employees, with cover set per grade or role, subject to LIC’s eligibility rules.',
      },
      {
        q: 'What is the difference between keyman and employer-employee insurance?',
        a: 'Keyman cover protects the business: it pays the premium and receives the claim. Employer-employee cover protects the employee’s family: the business pays the premium, but the benefit goes to the employee or their nominee.',
      },
    ],
  },
  {
    slug: 'policy-review-claims',
    title: 'LIC Policy Review & Claim Help in Ahmedabad',
    description:
      'Free life insurance policy review in Ahmedabad: check your cover, update nominees, revive lapsed LIC policies and get hands-on claim help. Any agent\u2019s policy.',
    keywords:
      'LIC policy review Ahmedabad, LIC claim assistance Ahmedabad, LIC death claim help, LIC maturity claim, revive lapsed LIC policy, change LIC nominee, LIC agent Shela',
    targetQuery: 'LIC policy review Ahmedabad',
    h1: 'LIC Policy Review & Claim Assistance in Ahmedabad',
    intro: [
      'Most families in Ahmedabad already own two or three LIC policies — bought years ago, from different agents, for different reasons. Few know their total cover, when each policy matures, or whether the nominee is still correct. A policy review answers those questions on one sheet of paper before you spend a rupee on anything new.',
      'When a claim is due — death, maturity or survival benefit — the outcome depends heavily on paperwork. Jigisha Kiran Shah helps families intimate the claim, assemble the right documents, and follow up with the branch. LIC makes the final decision on every claim; good preparation removes avoidable delays.',
    ],
    updated: '2026-11-06',
    sections: [
      {
        heading: 'Where is my LIC claim? — tracking it in four places',
        intro:
          '“Claim status” is the single most common question from a family mid-process, and the answer is almost always one of these four lookups. Have the policy number and the claimant’s details ready before you start.',
        numbered: true,
        items: [
          'LIC’s online customer portal — register with the policy number and check the claim or maturity status against the policy itself. This is the fastest self-service route once the claim is registered.',
          'The servicing branch that holds the policy file — quote the claim reference number you were given at intimation. This is the only desk that can move a stuck file, and it is where a physical document request is cleared.',
          'Your agent or advisor — an LIC advisor can query the branch and the development officer on your behalf. This is the reason a family with an advisor rarely has to visit a branch twice.',
          'Bima Bharosa (IRDAI’s grievance portal) — the escalation route if a claim has exceeded the turnaround time LIC is expected to meet. Use it after the branch, not instead of it.',
        ],
      },
      {
        heading: 'Why a claim stalls — the five delays we see most',
        items: [
          'No nominee registered, or a nominee who has since died. The claim becomes a succession matter and needs legal-heir documentation.',
          'The death certificate details do not match the policy record — spelling of the name, date of birth, or place of death.',
          'Early-claim or non-natural-death investigation. LIC is entitled to verify, and this is where months disappear if records are incomplete.',
          'Premiums unpaid and the policy lapsed without revival. A lapsed policy may pay nothing beyond the surrender value.',
          'Bank details that fail NEFT — a closed account, a name mismatch, or a joint account the nominee is not part of.',
        ],
      },
      {
        heading: 'What to do in the first 48 hours of a death claim',
        numbered: true,
        items: [
          'Notify LIC and the branch as soon as the death certificate is available. Intimation is free and starts the clock.',
          'Locate the original policy document. If it is lost, tell the branch immediately — a lost-policy indemnity is a separate, slower step.',
          'Collect the nominee’s identity, address proof and a cancelled cheque or bank passbook in the nominee’s own name.',
          'Do not surrender or transfer anything in the policy until the claim is registered. A wrong instruction at this point is hard to reverse.',
          'Ask for the claim reference number in writing, and note the date of every submission. Follow-up without a reference number is guesswork.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What does a free LIC policy review cover?',
        a: 'Every policy your family holds is listed with its sum assured, premium, maturity date and nominee. Total cover is compared with your income, loans and dependants, gaps and overlaps are flagged, and lapsed policies are checked for revival. There is no obligation to buy anything.',
      },
      {
        q: 'Which documents are usually needed for an LIC death claim?',
        a: 'Typically the claim form from the nominee, the death certificate, the original policy document, the nominee’s ID and address proof, and a cancelled cheque or bank details for NEFT. Early claims or unnatural deaths can need extra papers such as medical or police records — LIC’s branch confirms the exact list.',
      },
      {
        q: 'Can a lapsed LIC policy be revived?',
        a: 'Often yes. Most LIC policies can be revived within a set period from the first unpaid premium by paying arrears with interest, sometimes with a health declaration or medical tests. The period and conditions depend on the plan, so check your policy before paying.',
      },
      {
        q: 'How do I change the nominee on my LIC policy?',
        a: 'Submit a change-of-nomination request to your servicing branch with the policy details and the new nominee’s information, and get it registered. A missing or outdated nominee is one of the most common causes of claim delays, so it is worth checking every policy.',
      },
      {
        q: 'How do I check my LIC claim status?',
        a: 'Check the policy on LIC’s online customer portal, or quote your claim reference number at the servicing branch that holds the file. An advisor can also query the branch directly. If a claim has run past the expected turnaround, escalate through Bima Bharosa, IRDAI’s grievance portal.',
      },
      {
        q: 'Can you help if my policy was sold by a different agent?',
        a: 'Yes. Reviews and claim help are available for LIC policies regardless of who sold them. Bring the policy documents or just the policy numbers to the consultation.',
      },
    ],
    relatedPost: { label: 'Nominee mistakes that delay claims', to: '/blog/the-policy-he-bought-after-the-funeral' },
  },

  // ---- Servicing pages: high-intent queries from people who already own a policy ----

  {
    slug: 'lic-policy-revival',
    title: 'LIC Policy Revival in Ahmedabad | Revive a Lapsed Policy',
    description:
      'Lapsed LIC policy in Ahmedabad? Revival usually means paying arrears with interest, plus a health declaration. Check what yours needs before you pay: +91 98240 25435.',
    keywords:
      'LIC policy revival Ahmedabad, revive lapsed LIC policy, lapsed policy revival, LIC policy arrears interest, LIC revival period, lapsed policy paid up value, LIC agent revival help',
    targetQuery: 'LIC policy revival Ahmedabad',
    h1: 'LIC Policy Revival in Ahmedabad',
    updated: '2026-11-09',
    intro: [
      'A lapsed LIC policy is not a dead policy. It is a policy that stopped receiving premiums, and in most cases it can be brought back to full force by paying the arrears with interest and confirming that the life assured is still insurable.',
      'Jigisha Kiran Shah checks the policy schedule first — how long it has been lapsed, how many premiums were paid, and whether the plan still allows revival — because the answer sometimes is that revival costs more than the policy is worth, and that is worth knowing before you pay anything.',
    ],
    sections: [
      {
        heading: 'What happens when a policy lapses',
        intro: 'Nothing is lost immediately, but three things change the day a premium goes unpaid beyond the grace period:',
        items: [
          'The life cover stops. If the life assured dies while lapsed, the nominee receives nothing beyond the paid-up value, if any.',
          'The policy stops earning bonuses from that point, which reduces the final maturity amount.',
          'If at least two full years of premiums were paid, the policy usually acquires a paid-up value — a reduced sum assured payable at maturity, with no further premiums due.',
        ],
      },
      {
        heading: 'How revival works, step by step',
        numbered: true,
        items: [
          'Read the policy schedule. It gives the plan number, premium paying term, due date of the first unpaid premium and the sum assured.',
          'Confirm the revival window. Most LIC plans allow revival within five years of the first unpaid premium, and always before maturity. Some plans are shorter — the schedule and the branch decide.',
          'Get the exact arrears. LIC quotes the unpaid premiums plus interest at its prescribed rate for the period. Nobody can give you this figure accurately without the policy number.',
          'Complete the health declaration. A lapse of more than six months usually needs a declaration of good health; a longer lapse or an older age can need a medical examination at LIC’s panel doctor.',
          'Submit at the servicing branch and pay. The policy is reinstated with its original date, bonuses preserved for the revival period, and the nominee intact.',
        ],
      },
      {
        heading: 'Documents usually needed',
        items: [
          'The original policy document, or a duplicate application if it is lost',
          'Revival application form, signed by the policyholder',
          'Declaration of health, and medical reports if the branch asks for them',
          'Age proof, if it was never submitted or is incomplete',
          'PAN and Aadhaar for KYC, and bank details for NACH mandate if premiums are to be auto-debited',
        ],
      },
      {
        heading: 'When revival is not the right answer',
        intro:
          'An honest advisor will tell you when to stop. These are the cases worth examining before paying arrears:',
        items: [
          'The arrears plus interest approach the surrender value — surrendering or taking a paid-up value may leave you in a similar position with more flexibility.',
          'The life assured is now uninsurable and the branch requires medicals that will not be accepted — a fresh proposal is unlikely to help either, so the paid-up value becomes the realistic outcome.',
          'The policy is a pure term plan with no surrender value. Reviving it restores cover, but a new term policy at a younger-equivalent price may be impossible at the current age, so revival is usually still worth it.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is there an LIC lapsed policy revival scheme running now?',
        a: 'LIC runs special revival campaigns from time to time, usually with a concession on late fees for eligible lapsed policies. Each campaign, like the one in 2020, has fixed dates and conditions, so ask your servicing branch or check licindia.in whether one is running now. Outside a campaign, the ordinary revival rules apply.',
      },
      {
        q: 'How long can a lapsed LIC policy be revived?',
        a: 'Most LIC plans allow revival within five years from the due date of the first unpaid premium, provided the policy has not matured. Some plans carry a shorter window. The exact limit is printed on your policy schedule and confirmed by the servicing branch.',
      },
      {
        q: 'How much does LIC charge to revive a policy?',
        a: 'You pay the unpaid premiums plus interest at the rate LIC prescribes for the lapse period. The figure depends on the plan, the number of missed premiums and how long ago they fell due, so it can only be quoted from the policy number — not estimated.',
      },
      {
        q: 'Do I need a medical test to revive a lapsed policy?',
        a: 'A lapse of more than six months normally needs a declaration of good health. Longer lapses, higher sum assured, or a life assured above a certain age can require a medical examination at LIC’s panel doctor. The branch confirms which applies to your policy.',
      },
      {
        q: 'Can a lapsed policy be revived after the policyholder has died?',
        a: 'No. Revival is a contract with the life assured and cannot be completed after death. In that situation the family should claim the paid-up value or surrender value that had accrued, and this is handled as a death claim with the branch.',
      },
    ],
    relatedPost: { label: 'A Satellite family revived a 2016 policy after four years', to: '/blog/the-lapsed-policy-a-satellite-family-revived' },
  },

  {
    slug: 'nominee-change',
    title: 'LIC Nominee Change in Ahmedabad | Update Nomination',
    description:
      'Change or update the nominee on your LIC policy: the form, the documents, and the mistakes that delay claims. Free help in Ahmedabad: +91 98240 25435.',
    keywords:
      'LIC nominee change, change nominee in LIC policy, LIC nomination form, update nominee LIC, nominee not legal heir, LIC claim nominee missing, nomination section 39',
    targetQuery: 'LIC nominee change',
    h1: 'LIC Nominee Change & Update in Ahmedabad',
    updated: '2026-10-26',
    intro: [
      'Nomination is the single cheapest thing you can do for your family and the single most common reason a claim gets stuck. It costs nothing, takes one form, and decides whether the money reaches your nominee in weeks or your legal heirs after a succession certificate.',
      'It is also the detail that quietly goes stale: a nominee who has since died, a parent nominated on a policy that now belongs to a married son, a name misspelled at proposal. All three are fixable in a single branch visit.',
    ],
    sections: [
      {
        heading: 'Who can be a nominee',
        items: [
          'Any person can be nominated — spouse, child, parent, sibling. More than one nominee is allowed, with a share specified for each.',
          'A minor can be nominated, but a guardian must be named to receive the money on the minor’s behalf.',
          'A nominee can be changed at any time during the policy term by the policyholder. It is free and does not affect the policy.',
          'Under a policy endorsed to the Married Women’s Property Act, the beneficiaries are the wife and children and cannot be changed by the policyholder afterwards.',
        ],
      },
      {
        heading: 'How to change the nominee',
        numbered: true,
        items: [
          'Fill the nomination form LIC prescribes, available at the servicing branch and on licindia.in, quoting the policy number and the new nominee’s full name, date of birth, relationship and address.',
          'Attach the new nominee’s identity proof if the branch asks for it, and the policyholder’s own ID and PAN.',
          'Submit at the branch that services the policy — not necessarily the branch that sold it. If you have moved cities, the policy can be transferred to a local branch first.',
          'Collect written acknowledgement, and check after a few weeks that the nomination has actually been registered. An unregistered form is the same as no form.',
        ],
      },
      {
        heading: 'The mistake most families make',
        intro:
          'A nominee is not automatically the legal heir. Nomination tells LIC who may receive the money; it does not override succession law.',
        items: [
          'Where a valid nomination exists, LIC can pay the nominee and discharge itself — this is what makes settlement fast.',
          'Where there is no nominee, or the nominee died before the policyholder, LIC needs legal proof of who is entitled: a succession certificate, probate, or a legal heir certificate depending on the case. That process runs in months, not weeks.',
          'Where the nominee is a minor, the guardian named in the nomination receives the money. If no guardian was named, a guardianship certificate is needed.',
          'If family circumstances have changed — marriage, divorce, a death — review the nomination on every policy, not just the newest one.',
        ],
      },
      {
        heading: 'Other details worth updating at the same time',
        items: [
          'Address and mobile number, so LIC’s premium and maturity notices reach you',
          'Bank account and NACH mandate, to avoid a lapse caused by a failed auto-debit',
          'PAN, which is required for policies above the threshold and for maturity payouts',
          'Name correction after marriage, supported by a marriage certificate, gazette notification or affidavit',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is there any charge to change the nominee in a LIC policy?',
        a: 'No. Changing a nomination is free. You only need the completed nomination form and, in some branches, identity proof for the new nominee. Anyone charging a fee for the form itself is not acting on LIC’s behalf.',
      },
      {
        q: 'Can I change the nominee after the policy matures?',
        a: 'No. Nomination can only be changed while the policy is in force. Once the maturity date is reached and the claim is due, the person already registered as nominee, or the legal heirs if none is registered, receive the money.',
      },
      {
        q: 'Is the nominee the owner of the money?',
        a: 'The nominee receives and holds the money. Where the nominee is the spouse, child or parent, LIC can pay and close the claim. In other cases the nominee may hold it as a trustee for the legal heirs, which is why the relationship matters. Nomination does not replace a will.',
      },
      {
        q: 'Can the nominee be changed on a policy sold by another agent?',
        a: 'Yes. Nomination and servicing belong to the policyholder, not the agent. Jigisha Kiran Shah handles nominee updates for LIC policies regardless of who sold them, and there is no charge for the help.',
      },
    ],
    relatedPost: { label: 'The policy he bought after the funeral', to: '/blog/the-policy-he-bought-after-the-funeral' },
  },

  {
    slug: 'lic-policy-tracing',
    title: 'Find a Lost LIC Policy | Policy Tracing Help in Ahmedabad',
    description:
      'Lost an LIC policy or a policy number? How to trace it using premium receipts, bank debits, the LIC unclaimed-amount search and the branch record. Help: +91 98240 25435.',
    keywords:
      'find lost LIC policy, LIC policy tracing, lost LIC policy number, how to find old LIC policy, LIC unclaimed amount search, trace LIC policy of deceased parent',
    targetQuery: 'find old LIC policy',
    h1: 'Find a Lost LIC Policy',
    updated: '2026-10-26',
    intro: [
      'Policies go missing for ordinary reasons: a parent dies without telling anyone, a file is lost in a move, the agent left, the premium was paid by salary deduction decades ago. The policy itself does not disappear — the record exists at a branch, and it can usually be found.',
      'What you need is not luck but the right starting points: a name, a date of birth, a rough year of purchase, and any trace of a payment. From there, tracing is a documentation exercise, and it is one of the most valuable things a family can do.',
    ],
    sections: [
      {
        heading: 'Where to look before contacting anyone',
        numbered: true,
        items: [
          'Old income-tax records. Section 80C deductions in a decade-old ITR list the policy number — and so does the Form 16 from an employer.',
          'Bank statements. Premiums paid by standing instruction, ECS or NACH appear as LIC debits every year on roughly the same date.',
          'Salary slips and employer letters. Employer-arranged policies show a deduction line, and the HR or accounts department can retrieve the master policy details.',
          'The house file. Premium receipts, renewal notices, a policy schedule, an SMS from LIC, or a cheque book counterfoil are all enough to start a search.',
          'The LIC unclaimed-amount facility. LIC publishes a search on licindia.in where you can look up unclaimed amounts by name and date of birth, and the same facility is mandated for all insurers by IRDAI.',
        ],
      },
      {
        heading: 'Tracing a policy for a parent who has died',
        items: [
          'Approach the LIC branch closest to the last known address, with the death certificate and proof of relationship. Branches can search by name and date of birth even without a policy number.',
          'If the branch has changed jurisdiction, ask for a search through LIC’s central records — policies are indexed by name and date of birth, not only by number.',
          'Ask the employer if the parent worked in a company that arranged cover. Group and employer-employee policies sit with the employer, not the individual branch.',
          'Check the unclaimed-amount search under both the spouse’s and the parent’s name, in case the policy was proposed by one and held by the other.',
          'Once the policy is traced, the claim is a death claim. The nominee or legal heir route applies exactly as it would for a policy you already had in hand.',
        ],
      },
      {
        heading: 'What makes a search succeed or fail',
        items: [
          'A date of birth is worth more than an address. Names repeat; dates of birth rarely do.',
          'A year of purchase narrows the branch and the plan series, which is where manual searches actually begin.',
          'A policy number makes it a lookup rather than a search — even a partial number helps.',
          'If the family has none of these, an affidavit plus the death certificate and the last known address is the usual starting point, and the branch will advise what it will accept.',
        ],
      },
      {
        heading: 'Once it is found',
        items: [
          'Get the policy status in writing — in force, lapsed, paid up, surrendered or already claimed.',
          'If it is lapsed, check whether revival is still within the window before deciding anything else.',
          'If it has matured and nobody claimed it, the money sits in LIC’s unclaimed-amount register and can still be claimed, with interest where applicable.',
          'Update the nominee immediately on any policy that is still in force. A traced policy with no nominee simply repeats the original problem.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can an LIC policy be traced without the policy number?',
        a: 'Yes, in most cases. A branch can search by the life assured’s full name and date of birth, particularly if you also know the approximate year of purchase or the address at the time. A policy number makes it far faster, but its absence is not the end of the search.',
      },
      {
        q: 'What happens to an LIC policy nobody claims?',
        a: 'Matured and unclaimed amounts are transferred to LIC’s unclaimed-amount register, and IRDAI requires every insurer to publish a search facility for them. The money remains claimable by the nominee or legal heirs, with the process and any applicable interest explained by the branch.',
      },
      {
        q: 'How long does tracing a lost LIC policy take?',
        a: 'A policy that can be found by name and date of birth is often located within a few weeks. Cases that need manual searches across branches, or a claim where no nominee was registered, take longer because legal-heir documents are involved.',
      },
      {
        q: 'Is there a charge for helping trace a policy?',
        a: 'No. Jigisha Kiran Shah does not charge for policy tracing or for the branch follow-up. LIC may charge its own nominal fee for a duplicate policy document, which is separate and receipted by the branch.',
      },
    ],
    relatedPost: { label: 'The claim that took four months because nobody knew the policy existed', to: '/blog/the-policy-he-bought-after-the-funeral' },
  },

  {
    slug: 'nri-lic-services',
    title: 'NRI LIC Policy Services | Premium, Nominee & Claims Help',
    description:
      'Holding an LIC policy while living abroad? Premiums from NRE/NRO, nominee changes, revival and maturity claims handled remotely. Talk to Jigisha Kiran Shah: +91 98240 25435.',
    keywords:
      'NRI LIC policy, NRI LIC premium payment, NRI LIC claim, LIC policy for NRI, NRE NRO LIC premium, NRI nominee change LIC, LIC maturity claim NRI',
    targetQuery: 'NRI LIC policy',
    h1: 'NRI LIC Policy Servicing',
    updated: '2026-10-26',
    intro: [
      'An LIC policy bought in Ahmedabad does not stop working when the policyholder moves to Dubai, Toronto or Melbourne. Everything — premiums, nominee updates, revival, maturity and death claims — can be handled from abroad, but the paperwork has an extra layer that trips people up.',
      'Jigisha Kiran Shah services LIC policies for Gujarati families settled abroad, most of them originally sold to a parent or bought before the move, and coordinates with the branch in India so nobody has to fly back for a form.',
    ],
    sections: [
      {
        heading: 'Paying premiums from abroad',
        items: [
          'Premiums can be paid from an NRE or NRO account, by international transfer, or by an NACH mandate on an Indian account that a relative maintains.',
          'An NRO account is the usual route: it holds rupee balances and is designed for exactly this kind of payment in India.',
          'Paying from a foreign account directly is possible but slower, and a delayed credit is one of the most common causes of an accidental lapse for NRIs.',
          'If the policy has already lapsed, revival is available on the same terms as for a resident, including the health declaration.',
        ],
      },
      {
        heading: 'Documents that differ for an NRI',
        items: [
          'Passport, and the visa or residence permit for the country of residence',
          'Overseas address proof, and an Indian address if one is maintained',
          'PAN, which remains mandatory for most policies and for maturity payouts',
          'KYC documents attested or apostilled as the branch requires — the requirement varies by country and by branch',
          'NRE or NRO bank details for payouts, with the account held in India',
        ],
      },
      {
        heading: 'Claims and maturity payouts',
        items: [
          'Maturity and survival-benefit payouts are made in India, in rupees, to the policyholder’s NRO account. Repatriation abroad is a separate step governed by FEMA and RBI limits, handled by your bank.',
          'A death claim is paid in India to the nominee’s account, and the nominee does not need to be an NRI for this.',
          'Tax deducted at source can apply to NRI maturity proceeds, and relief under a double-taxation agreement may be available. This is a question for your chartered accountant, with the LIC certificate in hand.',
          'Documents signed abroad usually need notarisation or apostilling before the branch accepts them, so it is worth confirming the exact requirement before couriering anything.',
        ],
      },
      {
        heading: 'What can be done without travelling',
        items: [
          'Nominee change and address change, with the form signed and attested abroad',
          'Revival of a lapsed policy, including the health declaration',
          'Duplicate policy document, if the original was lost in the move',
          'Premium mode change and NACH mandate setup',
          'Maturity and death claim initiation, with document follow-up handled at the branch',
          'A full policy review by video call, across all policies the family holds',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can an NRI hold an LIC policy?',
        a: 'Yes. NRIs can hold LIC policies, and existing policies continue after emigration. Premiums are usually paid from an NRE or NRO account, and the policy remains governed by Indian insurance and foreign-exchange rules.',
      },
      {
        q: 'How does an NRI pay LIC premiums?',
        a: 'Through an NRE or NRO account, by NACH mandate on an Indian account, or by international transfer. Most families use an NRO account because it is built for rupee payments in India and avoids the delays that cause accidental lapses.',
      },
      {
        q: 'Can an NRI claim LIC maturity proceeds abroad?',
        a: 'LIC pays maturity proceeds in India, in rupees, to the policyholder’s account. Moving the money abroad afterwards is a separate remittance step under FEMA and RBI rules, handled by your bank, and tax deducted at source may apply in India.',
      },
      {
        q: 'Do NRI documents need to be notarised or apostilled?',
        a: 'Usually yes for signatures executed abroad. The exact requirement depends on the document and the branch, and can differ by country. Confirm before couriering originals — replacing a lost policy document is slower and more expensive than checking first.',
      },
    ],
    relatedPost: { label: 'Retirement checklist for families with income abroad', to: '/blog/retirement-planning-ahmedabad-50s-checklist' },
  },

  {
    slug: 'lic-policy-loan',
    title: 'Loan Against LIC Policy in Ahmedabad | Eligibility & Process',
    description:
      'Borrow against your LIC policy instead of breaking it. Eligibility, how much you can get, interest, and what happens if the loan is not repaid: +91 98240 25435.',
    keywords:
      'loan against LIC policy, LIC policy loan, LIC loan eligibility, LIC policy loan interest rate, surrender vs loan LIC, LIC loan documents',
    targetQuery: 'loan against LIC policy',
    h1: 'Loan Against Your LIC Policy',
    updated: '2026-10-26',
    intro: [
      'A loan against an LIC policy lets you reach your own money without ending the policy. The cover continues, bonuses continue to accrue, and the loan plus interest is simply deducted when the policy matures or a claim is paid.',
      'It is the better option whenever the need is temporary. Surrendering a policy to meet a short-term cash requirement permanently gives up cover, bonuses and the maturity date — usually for a fraction of what the policy would have paid.',
    ],
    sections: [
      {
        heading: 'Which policies qualify',
        items: [
          'Participating endowment, money-back and whole-life plans qualify once the policy has acquired a surrender value — typically after two full years of premiums.',
          'Pure term plans do not qualify. They carry no surrender value, so there is nothing to borrow against.',
          'ULIP policies are generally not eligible for a policy loan; partial withdrawal rules apply instead.',
          'The policy must be in force. A lapsed policy has to be revived before a loan can be considered.',
        ],
      },
      {
        heading: 'How much you can borrow',
        items: [
          'LIC sanctions a percentage of the surrender value, not of the sum assured — usually most of it, with the exact proportion set by the plan.',
          'The amount therefore grows every year as the policy accumulates surrender value and bonuses.',
          'Interest is charged at the rate LIC declares and revises from time to time. It is not fixed for the life of the loan.',
          'If unpaid interest and the loan together approach the surrender value, LIC can foreclose the policy or treat it as lapsed, so servicing the interest matters.',
        ],
      },
      {
        heading: 'The process',
        numbered: true,
        items: [
          'Check the surrender value on the policy. This is the number the loan is calculated against.',
          'Submit the loan application at the servicing branch with the original policy document.',
          'Sign the loan agreement and, where the policy is assigned or held under MWP, complete the additional documentation.',
          'Receive the amount by NEFT to your bank account, usually within a few working days of sanction.',
          'Repay principal and interest, or allow LIC to adjust them against the maturity or claim payout.',
        ],
      },
      {
        heading: 'Loan versus surrender versus breaking an FD',
        items: [
          'Take the loan when the need is short and the policy is worth keeping. You keep the cover and the maturity date.',
          'Surrender only when the policy no longer fits at all — the wrong term, the wrong goal, or a premium you cannot sustain.',
          'Compare against a personal loan honestly: a policy loan is usually cheaper, but it reduces what your family eventually receives.',
          'Never let a policy lapse in order to avoid repaying a loan. That converts a manageable liability into a permanent loss of cover.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much loan can I get against my LIC policy?',
        a: 'It is a percentage of the surrender value, not the sum assured, and the exact proportion depends on the plan. Because surrender value grows with each premium and with bonuses, the eligible amount increases the longer the policy has run.',
      },
      {
        q: 'Does the life cover continue during a policy loan?',
        a: 'Yes. The policy remains in force and the sum assured stays payable on death, with the outstanding loan and interest deducted from the payout. Bonuses continue to be declared on the policy as normal.',
      },
      {
        q: 'What happens if I do not repay an LIC policy loan?',
        a: 'The loan and accrued interest are adjusted against the maturity or claim amount. If they approach the surrender value, LIC can foreclose the policy or treat it as lapsed, which ends the cover — so paying the interest periodically is what keeps the policy healthy.',
      },
      {
        q: 'Is a loan against an LIC policy taxable?',
        a: 'A policy loan is borrowing against your own asset, not income, so it is not treated as taxable income when received. The tax position on any eventual surrender or maturity payout is a separate question, best confirmed with your chartered accountant.',
      },
    ],
  },

  {
    slug: 'lic-address-name-change',
    title: 'LIC Address, Name & Minor-to-Major Updates | Ahmedabad',
    description:
      'Change your address, correct your name, or convert a minor’s LIC policy when they turn 18. What the branch needs, and why skipping it delays claims: +91 98240 25435.',
    keywords:
      'LIC address change, LIC name change after marriage, LIC minor to major conversion, update LIC mobile number, LIC KYC update, LIC policy servicing Ahmedabad',
    targetQuery: 'LIC address change',
    h1: 'LIC Address, Name & Minor-to-Major Changes',
    updated: '2026-10-26',
    intro: [
      'These are the smallest chores in insurance and the ones most often left undone for a decade. A wrong address means a renewal notice never arrives; an uncorrected name means a bank rejects the payout; a policy still held in a parent’s name after the child turns 18 means the money cannot be released without extra paperwork.',
      'All three are one-visit jobs, and all three are worth doing in the same visit as a nominee update.',
    ],
    sections: [
      {
        heading: 'Address change',
        items: [
          'Submit the address-change request at the servicing branch with the policy number and proof of the new address — Aadhaar, electricity bill, rent agreement or passport.',
          'If you have moved to another city, ask for the policy to be transferred to the LIC branch serving the new address. Servicing then happens locally instead of by post.',
          'Update the mobile number and email at the same time. LIC’s premium-due and maturity notices increasingly arrive by SMS and email, and a stale number is how policies lapse unnoticed.',
          'Update the bank account and NACH mandate too if the old account is closed, otherwise the auto-debit fails and the policy lapses without anyone noticing.',
        ],
      },
      {
        heading: 'Name correction or change',
        items: [
          'A spelling correction needs the policy document and an identity proof showing the correct spelling.',
          'A change after marriage needs the marriage certificate, or a gazette notification where the certificate is not available.',
          'A formal name change needs the gazette notification, plus an affidavit in the format the branch specifies.',
          'The name on the policy should match the name on the bank account that will receive the money. A mismatch is a routine cause of a returned maturity payout.',
        ],
      },
      {
        heading: 'Minor to major conversion',
        intro:
          'When a policy was taken on a child’s life, the child becomes the policyholder on turning 18 — but only if the conversion is actually completed.',
        items: [
          'Submit proof of age — Class 10 marksheet, passport, or birth certificate — at the servicing branch once the life assured turns 18.',
          'The policy then stands in the life assured’s own name, and they sign future requests, nominations and claims themselves.',
          'Until conversion, the parent or proposer continues to hold the policy, and a maturity or claim at that point needs guardianship paperwork.',
          'Convert before the maturity date, not after. Conversion after maturity turns into a legal-heir process rather than a form.',
        ],
      },
      {
        heading: 'The full servicing checklist',
        intro: 'These are the updates worth doing together, in one branch visit, on every policy a family holds:',
        items: [
          'Nominee registered, correct, and alive',
          'Address, mobile and email current',
          'Bank account and NACH mandate active',
          'PAN recorded where required',
          'Name matching the bank account exactly',
          'Minor policies converted once the child turns 18',
          'Premium mode and due dates known, not guessed',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I change my address in an LIC policy?',
        a: 'Submit an address-change request at the servicing branch with the policy number and proof of the new address such as Aadhaar, an electricity bill or a rent agreement. If you have moved cities, ask for the policy to be transferred to the local branch at the same time.',
      },
      {
        q: 'Can I change my name on an LIC policy after marriage?',
        a: 'Yes. Submit the request with the marriage certificate, or a gazette notification if a certificate is not available, along with identity proof. Make sure the name then matches your bank account, because a mismatch is a common reason a maturity payout is returned.',
      },
      {
        q: 'What happens if a minor’s LIC policy is not converted at 18?',
        a: 'The policy stays in the proposer’s name and the life assured cannot sign requests, change the nominee, or claim in their own right. At maturity it becomes a guardianship and legal-heir process instead of a simple form, which adds weeks or months.',
      },
      {
        q: 'Do I have to visit the branch in person for these changes?',
        a: 'Many updates can be initiated with a signed form and supporting documents, and some are available through LIC’s online customer portal once the policy is registered there. Anything involving a signature change or a minor-to-major conversion is usually completed at the branch.',
      },
    ],
    relatedPost: { label: 'The five-number retirement checklist', to: '/blog/retirement-planning-ahmedabad-50s-checklist' },
  },

  {
    slug: 'lic-surrender',
    title: 'LIC Policy Surrender in Ahmedabad | Value, Rules & Alternatives',
    description:
      'Thinking of surrendering an LIC policy? What LIC actually pays, when you are allowed to surrender, and the paid-up option that usually beats it. Free review: +91 98240 25435.',
    keywords:
      'LIC policy surrender, LIC surrender value, surrender value calculator LIC, LIC policy surrender rules, paid up policy LIC, surrender vs paid up LIC, LIC surrender value taxable, LIC policy surrender Ahmedabad',
    targetQuery: 'LIC policy surrender',
    h1: 'Surrendering an LIC Policy',
    updated: '2026-11-04',
    intro: [
      'Surrendering a policy means ending it and taking back what it is worth today. That number is almost always smaller than the premiums paid so far, because the early years of a life policy fund the commission, the mortality charge and the reserve — not the surrender value. For most families who ask about surrender in Ahmedabad, the honest answer is that a different option does the job better.',
      'This page is the decision, not the pitch: when you are actually allowed to surrender, what LIC will pay, what you give up, and the three alternatives that usually keep the cover alive. If after reading it you still want to surrender, that is a legitimate choice — a free policy review will at least put the exact figures in front of you first.',
    ],
    sections: [
      {
        heading: 'When you are allowed to surrender',
        items: [
          'A non-linked policy acquires a surrender value only after enough premiums have been paid. Under IRDAI rules, that is after two full years of premiums for a policy with a premium-paying term of ten years or more, and after one year where the premium-paying term is shorter.',
          'Before that point there is no surrender value at all. Stopping premiums simply lapses the policy — and a lapsed policy pays nothing unless it is revived or converted to paid-up.',
          'ULIP policies follow separate rules and refund the fund value rather than a traditional surrender value, subject to a lock-in period.',
          'If the policy is assigned, or held under the MWP Act, the surrender needs the assignee’s or trustee’s consent. This is the step that most often stops a surrender midway.',
          'Any outstanding policy loan, plus interest, is deducted from the surrender value before anything is paid out.',
        ],
      },
      {
        heading: 'What LIC will actually pay you',
        intro:
          'There is no single percentage that applies to every policy, and any page quoting one number for all LIC plans is guessing. What LIC pays is the higher of two calculated figures:',
        items: [
          'Guaranteed Surrender Value (GSV) — a percentage of the total premiums paid, excluding the first year’s premium and any extra or rider premiums. The percentage is fixed by the policy’s vintage and is printed in the policy document.',
          'Special Surrender Value (SSV) — an actuarial figure LIC computes for the specific policy. For older policies, especially those bought before 2019, the SSV is frequently the higher of the two, which is why an early surrender can be worth more than the GSV table suggests.',
          'Bonuses already declared on a with-profits policy are surrendered at their own reduced factor, not at full value.',
          'The exact rupee figure is quoted by LIC, not estimated by an agent. Anyone who tells you a precise amount without the policy in hand is guessing.',
        ],
      },
      {
        heading: 'Three options that usually beat surrender',
        intro:
          'Work through these in order before you sign a surrender form. For most people, one of them fits — and each one preserves something the surrender destroys.',
        items: [
          'Make it paid-up. If at least two years’ premiums are paid, you can stop paying and leave the policy in force at a reduced sum assured, payable at the original maturity date. You keep life cover and you keep every bonus already declared. This is the single most under-used option in LIC servicing.',
          'Take a loan against the policy instead. If the need is temporary — school fees, a medical bill, a business gap — a policy loan keeps the cover and the maturity date intact, and costs less than a personal loan. See the policy loan page for the mechanics.',
          'Revive it, if it has already lapsed. A lapsed policy can usually be revived within the revival period by paying arrears with interest, sometimes with a health declaration. Reviving is almost always cheaper than buying equivalent cover today at an older age.',
          'Keep it and re-plan around it. Sometimes the policy is fine and the premium is simply mis-sized against the current income. A review can rebalance the family’s cover rather than destroy one leg of it.',
        ],
      },
      {
        heading: 'What you give up when you surrender',
        items: [
          'The life cover ends the day the surrender is processed. If something happens to the life assured afterwards, nothing is payable — and re-buying cover at a later age costs more, or may not be available at all after a health event.',
          'Every future bonus is forfeited. A with-profits policy is designed so that later years are the valuable ones; surrendering in year four or five captures the worst part of that curve.',
          'The maturity date disappears. Money that was going to arrive at a planned point is now arriving early and at a discount — which only helps if you have a better use for it than the original goal.',
          'Tax treatment can change. Under Section 10(10D), the exemption on maturity and surrender proceeds can fail where the annual premium exceeds the threshold in force for the policy’s issue year. A surrender can therefore be taxable where the maturity would not have been. Confirm the position for your policy year with your chartered accountant.',
        ],
      },
      {
        heading: 'How a surrender is processed, if you decide to go ahead',
        numbered: true,
        items: [
          'Get the surrender value quoted first, in writing, from the servicing branch. Never surrender on a verbal estimate.',
          'Check whether paid-up, a loan or revival produces a better outcome for your actual need. This is a ten-minute comparison once the numbers are known.',
          'Submit the surrender form with the original policy document, the policyholder’s ID and address proof, and bank details in the policyholder’s own name.',
          'Clear any outstanding loan, assignment or MWP consent before submission, otherwise the request is returned.',
          'Receive the amount by NEFT, usually within a few working days of the request being processed.',
          'Keep the surrender voucher. It is the record of what was paid and the only document that settles a later dispute.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much will I get if I surrender my LIC policy?',
        a: 'It is the higher of the Guaranteed Surrender Value and the Special Surrender Value for your specific policy, less any outstanding loan and interest. The GSV is a percentage of premiums paid excluding the first year, and the percentage depends on when the policy was bought. Only LIC can quote the exact figure, so ask the branch in writing before deciding.',
      },
      {
        q: 'Is it better to surrender or make the policy paid-up?',
        a: 'For most people, paid-up is better. It preserves the life cover at a reduced sum assured and keeps every bonus already declared, and it costs nothing further. Surrender ends the cover permanently and pays a discounted value today. Surrender only makes sense when the policy genuinely does not fit your goals any more.',
      },
      {
        q: 'Can I surrender a lapsed LIC policy?',
        a: 'A lapsed policy has already stopped earning surrender value in the normal sense. If it had acquired surrender value before lapsing, a surrender may still be possible, but revival is usually the better route because it restores the original cover and maturity date. Check the revival window for your plan before giving up on it.',
      },
      {
        q: 'Is the surrender value of an LIC policy taxable?',
        a: 'It depends on the policy year and the annual premium. Section 10(10D) exemptions can fail where annual premium exceeds the threshold in force when the policy was issued, which can make surrender proceeds taxable where a maturity payout would not have been. Confirm your specific case with your chartered accountant before surrendering.',
      },
      {
        q: 'Does surrendering affect my ability to buy insurance later?',
        a: 'No — a surrender is not a claim, and it does not by itself make future cover harder to obtain. The practical problem is different: re-buying equivalent cover at an older age costs more, and a health event in between can make it unavailable at any price. That is the real cost of surrendering, not the paperwork.',
      },
    ],
    relatedPost: { label: 'The lapsed policy a Satellite family revived', to: '/blog/the-lapsed-policy-a-satellite-family-revived' },
  },
];

export function getServicePage(slug: string | undefined): ServicePageMeta | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}
