export interface GuideSection {
  heading: string;
  paras: string[];
  /** Bulleted list rendered after the paragraphs — use for document checklists. */
  items?: string[];
}

export interface GuideComparison {
  columns: [string, string, string];
  rows: { label: string; first: string; second: string }[];
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface Guide {
  slug: string;
  title: string;
  /** Keyword-first <title> for SERP CTR; `title` stays as the on-page H1. */
  seoTitle: string;
  metaDescription: string;
  date: string; // ISO
  updated: string; // ISO
  readMinutes: number;
  targetQuery: string;
  kind: 'comparison' | 'persona' | 'checklist';
  intro: string[];
  sections: GuideSection[];
  comparison?: GuideComparison;
  sources?: { label: string; url: string }[];
  faqs: GuideFaq[];
  related: { label: string; to: string }[];
}

export const GUIDES: Guide[] = [
  {
    slug: 'lic-agent-left-who-services-my-policy',
    title: 'My LIC agent has left. Who services my policy now?',
    seoTitle: 'LIC Agent Left or Died? Who Services Your Policy Now',
    metaDescription:
      'Your LIC policy does not end when your agent leaves. What to check this week, how orphan policies get a new servicing agent, and where to get help in Ahmedabad.',
    date: '2026-11-08',
    updated: '2026-11-08',
    readMinutes: 5,
    targetQuery: 'LIC agent left who services my policy',
    kind: 'checklist',
    intro: [
      'Agents retire, move away, change careers and, sometimes, pass away. Families then find themselves holding LIC policies with no one to remind them of premiums, help with a nominee change or stand beside them at claim time.',
      'The first thing to know: your contract is with LIC, not with the agent. An agent leaving does not cancel your policy. What changes is who helps you service it. This guide is what I tell families in Ahmedabad who come to me in exactly this position.',
    ],
    sections: [
      {
        heading: 'Your policy does not end with the agent',
        paras: [
          'Whether your cover continues depends on the policy itself — mainly on whether premiums are paid — not on whether the agent who sold it is still working. A policy with premiums up to date stays in force. A policy where premiums have stopped may have lapsed, and that is a separate problem with its own fix (revival), whoever the agent was.',
        ],
      },
      {
        heading: 'What to do this week',
        paras: ['These steps protect the policy whether or not you get a new agent.'],
        items: [
          'Find the policy documents, or at least the policy numbers. Old premium receipts and bank debits show them.',
          'Check each policy’s status on LIC’s customer portal or app, or ask the servicing branch: in force, lapsed, or paid-up, and the next premium due date.',
          'Update your mobile number, email and address with the servicing branch, so LIC’s notices reach you directly instead of a former agent.',
          'Pay premiums only through LIC’s own channels: the portal, the app, or the branch. Never pay into a personal account.',
          'Check that a nominee is registered on every policy, and that the nominee is still the right person.',
        ],
      },
      {
        heading: 'Orphan policies and a new servicing agent',
        paras: [
          'A policy whose agent has died, or whose agency has ended, is called an orphan policy. IRDAI’s guidelines on servicing orphan policies allow the insurer to allot them to active agents so that policyholders are not left without help.',
          'At LIC, that allotment is done by the branch, under its own rules for which agents are eligible. You cannot simply pick any agent, and where the original agent still holds the agency, there is generally no provision to swap agents. Ask your servicing branch how your policy is currently handled.',
        ],
      },
      {
        heading: 'Help that does not need a change of agent',
        paras: [
          'Most servicing does not need an agent of record at all. Nominee changes, address and mobile updates, revival of a lapsed policy, loans against the policy, and maturity or death claims are all processed by the branch. What an experienced advisor adds is getting the forms and documents right the first time.',
          'I help families with exactly this, whoever sold the policy. I will never ask you to surrender an existing policy to buy a new one; LIC’s code of conduct for agents rules that out, and it is rarely in your interest anyway.',
        ],
      },
      {
        heading: 'Warning signs',
        paras: ['Be careful if anyone who says they are your “new agent”:'],
        items: [
          'asks you to pay a premium into a personal bank account or UPI ID',
          'pushes you to surrender an old policy and buy a new one',
          'asks for an OTP, your portal password or signed blank forms',
          'cannot show an LIC agency identity card when asked',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is my LIC policy still valid if my agent died or left?',
        a: 'Yes, if premiums are paid. Your contract is with LIC, not the agent. Check the policy status on LIC’s customer portal or with your servicing branch, and keep paying premiums through LIC’s own channels.',
      },
      {
        q: 'Can I change my LIC agent?',
        a: 'Generally not while the original agent still holds the agency. If the agent has died or the agency has ended, the policy becomes an orphan policy, and the LIC branch can allot it to an eligible active agent under its rules. Ask your servicing branch.',
      },
      {
        q: 'Who will remind me about premiums now?',
        a: 'LIC sends notices to the mobile, email and address on record, so update those at your servicing branch. You can also see due dates on LIC’s customer portal and app.',
      },
      {
        q: 'Can another LIC agent help me if my agent left?',
        a: 'Yes. Any LIC agent can help you prepare servicing requests such as a nominee change, revival, a policy loan or a claim; the branch processes them. Jigisha Kiran Shah helps Ahmedabad families with policies sold by any agent: +91 98240 25435.',
      },
    ],
    sources: [
      { label: 'IRDAI — servicing of life insurance orphan policies', url: 'https://irdai.gov.in/en/web/policy-holder/w/servicing-of-life-insurance-orphan-policies-2' },
      { label: 'LIC — policy guidelines for policyholders', url: 'https://licindia.in/policy-guidelines-helpline' },
    ],
    related: [
      { label: 'Free policy review and claim help', to: '/services/policy-review-claims' },
      { label: 'Change or update a nominee', to: '/services/nominee-change' },
      { label: 'Revive a lapsed policy', to: '/services/lic-policy-revival' },
      { label: 'Find a lost policy', to: '/services/lic-policy-tracing' },
    ],
  },
  {
    slug: 'lic-tax-benefit-80c-section-123',
    title: 'LIC and income tax in 2026–27: Section 80C, now Section 123',
    seoTitle: 'LIC Tax Benefit 2026-27: 80C (Now Section 123) Explained',
    metaDescription:
      'From 1 April 2026, 80C is Section 123 of the Income-tax Act, 2025. Which LIC premiums qualify, the ₹1.5 lakh limit, the regime question and tax-free payouts.',
    date: '2026-11-08',
    updated: '2026-11-08',
    readMinutes: 6,
    targetQuery: 'LIC tax benefit 80C 2026-27',
    kind: 'checklist',
    intro: [
      'Every year from January to March, families rush to buy a policy “for 80C”. Two things have changed that are worth knowing before you do. The Income-tax Act, 2025 replaced the 1961 Act on 1 April 2026, so 80C now has a new section number. And under the new tax regime, which is the default, the deduction is not available at all.',
      'This guide covers what qualifies, the limits, and when payouts are tax-free. It is general information, not tax advice: confirm your own position with your chartered accountant.',
    ],
    comparison: {
      columns: ['What it covers', 'Income-tax Act, 1961', 'Income-tax Act, 2025 (from 1 April 2026)'],
      rows: [
        { label: 'Life insurance premium deduction (₹1.5 lakh)', first: 'Section 80C', second: 'Section 123, read with Schedule XV' },
        { label: 'Pension plan contribution', first: 'Section 80CCC', second: 'Inside Section 123 / Schedule XV, same ₹1.5 lakh limit' },
        { label: 'Health insurance premium', first: 'Section 80D', second: 'Section 126' },
        { label: 'Tax-free policy payouts', first: 'Section 10(10D)', second: 'The Act’s schedule of exempt income' },
        { label: 'New tax regime', first: 'Section 115BAC', second: 'Section 202 (still the default)' },
      ],
    },
    sections: [
      {
        heading: 'Check your tax regime first',
        paras: [
          'The life insurance and health insurance deductions apply only if you choose the old tax regime. Under the new regime, which applies unless you opt out, neither is allowed. Under the new regime, income up to ₹12 lakh (₹12.75 lakh for salaried taxpayers, after the standard deduction) carries no tax because of the rebate.',
          'So for many salaried people, a policy bought “to save tax” saves nothing. Ask your CA which regime suits you before buying anything for tax reasons.',
        ],
      },
      {
        heading: 'How much of your premium counts (old regime)',
        paras: [],
        items: [
          'The overall limit is ₹1.5 lakh a year, shared with PPF, EPF, ELSS, children’s tuition fees and home-loan principal.',
          'Premiums count for policies on your own life, your spouse’s or your children’s. For a Hindu undivided family, on any member’s life.',
          'For policies issued on or after 1 April 2012, only premium up to 10% of the sum assured counts (20% for older policies; 15% from 1 April 2013 where the insured has a disability or a specified illness).',
          'Health insurance premiums are a separate deduction (Section 126): up to ₹25,000, or ₹50,000 for senior citizens.',
          'If you end a policy within two years — by surrender or by stopping premiums without revival — the deductions already claimed are reversed.',
        ],
      },
      {
        heading: 'Are the payouts tax-free?',
        paras: ['This applies under both regimes.'],
        items: [
          'Death benefit paid to the nominee: tax-free, whatever the premium (keyman policies taken by an employer are the exception).',
          'Maturity and survival benefits: tax-free only if the yearly premium stays within the same 10% (or 20% for older policies) of sum assured.',
          'Non-ULIP savings policies issued on or after 1 April 2023: maturity is taxable if your total yearly premium across such policies exceeds ₹5 lakh.',
          'ULIPs issued on or after 1 February 2021: the same, with a ₹2.5 lakh limit.',
        ],
      },
      {
        heading: 'The 31 March deadline — and why not to rush',
        paras: [
          'For the deduction, the premium must be paid within the tax year: by 31 March 2027 for tax year 2026–27.',
          'Buying in the last week of March is how families end up with a policy that fits the deadline but not their needs. Start with the protection your family needs; the tax benefit, if you are on the old regime, comes with it. I run that conversation from January onwards, free.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I claim LIC premium under the new tax regime?',
        a: 'No. The life insurance premium deduction (formerly 80C, now Section 123 of the Income-tax Act, 2025) is available only under the old regime. Death benefits remain tax-free under both regimes.',
      },
      {
        q: 'Does Section 80C still exist in 2026?',
        a: 'Its content does, under a new number. From 1 April 2026, the Income-tax Act, 2025 moved the deduction to Section 123, read with Schedule XV. The ₹1.5 lakh limit and the 10% of sum assured rule continue.',
      },
      {
        q: 'What is the last date to pay LIC premium for tax saving in 2026–27?',
        a: 'The premium must be paid within the tax year, so by 31 March 2027, and only if you are on the old tax regime. Check with your CA before buying a policy for tax.',
      },
      {
        q: 'Is the LIC death claim amount taxable?',
        a: 'No. The sum paid to the nominee on the death of the life assured is tax-free under both regimes. Keyman policies taken by an employer are the main exception.',
      },
    ],
    sources: [
      { label: 'Income Tax Department — Schedule XV, Income-tax Act, 2025', url: 'https://www.incometaxindia.gov.in/w/schedule-xv-3' },
      { label: 'India Code — Section 123, Income-tax Act, 2025', url: 'https://indiacode.ecourtsindia.com/income-tax-act-2025/section/123/' },
    ],
    related: [
      { label: 'Term insurance in Ahmedabad', to: '/services/term-insurance' },
      { label: 'Term vs endowment: which first?', to: '/guides/term-vs-endowment' },
      { label: 'LIC plans for salaried employees', to: '/guides/lic-plans-salaried-employees' },
      { label: 'Free protection check', to: '/protection-check' },
    ],
  },
  {
    slug: 'term-vs-endowment',
    title: 'Term insurance vs endowment: which LIC plan fits your family?',
    seoTitle: 'Term vs Endowment LIC in Ahmedabad: Honest Comparison',
    metaDescription:
      'Term vs endowment LIC in Ahmedabad: term gives max cover per rupee, endowment gives guaranteed savings + cover. Free mapping: +91 98240 25435.',
    date: '2024-09-13',
    updated: '2024-09-13',
    readMinutes: 5,
    targetQuery: 'term vs endowment LIC Ahmedabad',
    kind: 'comparison',
    intro: [
      'Almost every family that sits across from me in Shela asks the same first question: should we buy term insurance or an endowment plan? They are both LIC life insurance, but they solve different problems — and buying the wrong one is the most common regret I see in 22 years of advising.',
      'This guide compares them honestly: what each plan does, what it costs, and the simple rule I use to recommend one, the other, or both.',
    ],
    sections: [
      {
        heading: 'What term insurance does (LIC Tech Term, Jeevan Amar)',
        paras: [
          'Term insurance is pure protection: the highest life cover for the lowest premium, with no maturity payout if you outlive the term. A healthy 35-year-old can often secure a Rs 1 crore cover for roughly the cost of a monthly family dinner out. If the earning stops, the family receives the full sum assured.',
          'Choose term when the goal is income replacement — outstanding home loans, young children, dependent parents. Size it at roughly 10–15 times annual income plus loans, and register the nominee on day one.',
        ],
      },
      {
        heading: 'What endowment does (Jeevan Labh, New Endowment)',
        paras: [
          'An endowment plan like LIC Jeevan Labh combines life cover with guaranteed savings: you pay premiums for a fixed term (16, 21 or 25 years), and on maturity receive the sum assured plus vested bonuses. The return is modest compared to markets, but it is contractual — and the built-in life cover plus premium-waiver options protect milestones like a child’s education even if the earner dies.',
          'Choose endowment when the goal is a dated milestone — college at 18, a daughter’s wedding fund, a retirement top-up — and you want discipline enforced by auto-debit rather than willpower.',
        ],
      },
      {
        heading: 'The rule I use with clients',
        paras: [
          'Protection first, savings second. Every earning member needs term cover sized to their real liabilities; then, and only then, endowment plans fund dated goals. Most Ahmedabad families I advise end up with both: term for the non-negotiable safety net, endowment for one or two defined milestones.',
          'For a free term-vs-endowment mapping against your age, income and loans, call or WhatsApp +91 98240 25435. One sitting, one sheet of paper, no obligation.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is term insurance better than endowment?',
        a: 'Neither is universally better. Term gives maximum cover per rupee with no maturity value; endowment gives guaranteed maturity plus bonuses with lower cover per rupee. Use term for income protection and endowment for dated savings goals — most families need both.',
      },
      {
        q: 'Can I buy both term and endowment plans from LIC?',
        a: 'Yes, and it is the most common structure I recommend: a term plan (Tech Term or Jeevan Amar) sized to income plus loans, alongside an endowment plan (Jeevan Labh) timed to a milestone like a child turning 18.',
      },
      {
        q: 'Does LIC term insurance have maturity benefits?',
        a: 'Pure term plans like LIC Tech Term pay only on death during the term, with no survival benefit. That is precisely why the premiums are so low compared to endowment plans.',
      },
      {
        q: 'What tax benefits apply to LIC term and endowment plans?',
        a: 'Premiums generally qualify for deduction under Section 80C and payouts under Section 10(10D), subject to prevailing conditions. Confirm the current limits for your policy year before deciding.',
      },
    ],
    related: [
      { label: 'Term insurance story: the missing nominee', to: '/blog/the-policy-he-bought-after-the-funeral' },
      { label: 'Child education with Jeevan Labh', to: '/blog/jevan-labh-or-the-alarm-clock' },
      { label: 'All LIC services', to: '/services' },
      { label: 'Book a free consultation', to: '/contact' },
    ],
  },
  {
    slug: 'jeevan-akshay-vs-jeevan-umang',
    title: 'Jeevan Akshay VII vs Jeevan Umang: pension now or income for life?',
    seoTitle: 'Jeevan Akshay vs Jeevan Umang in Ahmedabad: Which to Pick',
    metaDescription:
      'Jeevan Akshay VII gives immediate pension from next month; Jeevan Umang gives lifelong annual payouts after the premium term. Free comparison: +91 98240 25435.',
    date: '2024-09-13',
    updated: '2024-09-13',
    readMinutes: 5,
    targetQuery: 'Jeevan Akshay vs Jeevan Umang Ahmedabad',
    kind: 'comparison',
    intro: [
      'Two LIC plans, two different retirements. Jeevan Akshay VII converts a lump sum into pension starting next month. Jeevan Umang builds whole-life cover with annual survival payouts after the premium-paying term. Clients routinely confuse them — this guide separates them.',
      'The short version: Akshay is for money you already hold; Umang is for income you still want to build while covered for life.',
    ],
    sections: [
      {
        heading: 'Jeevan Akshay VII: pension from next month',
        paras: [
          'Akshay VII is an immediate annuity. You invest a lump sum once — typically provident fund, gratuity or a policy maturity — and a guaranteed pension credits monthly, quarterly or yearly, starting the very next cycle, at a rate locked on day one. Joint-life keeps paying your spouse, and return-of-purchase-price options return the capital to nominees.',
          'Pick Akshay when retirement is here or within a year, and the monthly gap between expenses and guaranteed income must be closed with certainty, not market hope.',
        ],
      },
      {
        heading: 'Jeevan Umang: whole-life cover with lifelong payouts',
        paras: [
          'Umang is a whole-life plan: after the premium-paying term, you receive 8% of the Sum Assured every year for life, alongside life cover that runs to age 100. It suits earners in their 30s–50s who want to build a future income stream while staying insured the whole way.',
          'Pick Umang when retirement is a decade or more away and you can fund premiums from salary — you are buying tomorrow’s annual income plus lifelong protection in one contract.',
        ],
      },
      {
        heading: 'Can they work together?',
        paras: [
          'Often, yes. A typical structure I build for Ahmedabad clients nearing retirement: Umang-style accumulation in the earning years, then a portion of the maturity converted into Akshay VII for the guaranteed monthly pension, with 12 months of expenses kept liquid in a senior-citizen FD.',
          'For exact annuity quotes at current rates against your corpus, call or WhatsApp +91 98240 25435. Quotes are free and take one sitting.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which is better for monthly pension after retirement?',
        a: 'Jeevan Akshay VII, because it is an immediate annuity — pension starts the next month at a rate locked on purchase. Jeevan Umang pays annual survival benefits after the premium term, which suits people still building their corpus.',
      },
      {
        q: 'Does Jeevan Akshay VII return the invested amount?',
        a: 'With the return-of-purchase-price option, the original amount goes to nominees after the annuitant (and joint-life spouse, if chosen). Without it, payouts are higher but stop at death.',
      },
      {
        q: 'At what age should I consider Jeevan Umang?',
        a: 'Typically in the 30s to early 50s, while premium-paying capacity from salary or business income is strong. After the premium term, 8% of Sum Assured is paid annually for life with whole-life cover to age 100.',
      },
      {
        q: 'Can I buy Jeevan Akshay VII jointly with my spouse?',
        a: 'Yes. The joint-life option continues the pension to your spouse after you, which is the structure I recommend to most retired couples in Ahmedabad.',
      },
    ],
    related: [
      { label: 'Pension story: the retired teacher', to: '/blog/the-pension-that-arrived-before-the-milk' },
      { label: 'Retirement checklist for your 50s', to: '/blog/retirement-planning-ahmedabad-50s-checklist' },
      { label: 'Retirement & pension plans', to: '/services' },
      { label: 'Book a free consultation', to: '/contact' },
    ],
  },
  {
    slug: 'jeevan-labh-vs-jeevan-tarun',
    title: 'Jeevan Labh vs Jeevan Tarun: which LIC plan for your child’s education?',
    seoTitle: 'Jeevan Labh vs Jeevan Tarun for Child Education in Ahmedabad',
    metaDescription:
      'Jeevan Labh offers flexible endowment maturity; Jeevan Tarun staggers payouts at ages 20/22/24/25. Free child-plan sizing: +91 98240 25435.',
    date: '2024-09-13',
    updated: '2024-09-13',
    readMinutes: 4,
    targetQuery: 'Jeevan Labh vs Jeevan Tarun child education Ahmedabad',
    kind: 'comparison',
    intro: [
      'Both plans fund a child’s future, but their payout shapes differ. Jeevan Labh is a limited-premium endowment with a single maturity you can time to a milestone year. Jeevan Tarun is purpose-built for children, staggering survival payouts across ages 20, 22, 24 and 25 — the college years.',
      'Here is how I help South Bopal and Shela parents choose between them.',
    ],
    sections: [
      {
        heading: 'Jeevan Labh: one maturity, timed to the milestone',
        paras: [
          'Labh’s strength is timing control — pick a term whose maturity lands on the year your child turns 18 or 21, add auto-debit, and the corpus arrives exactly when admissions and fees do. It also carries life cover on the proposer, so the milestone money is protected even if the earner dies.',
          'Pick Labh when you want one defined lump sum for undergraduate admission or a fixed goal like a professional course deposit.',
        ],
      },
      {
        heading: 'Jeevan Tarun: payouts spread across college years',
        paras: [
          'Tarun pays survival benefits in stages through the early twenties, matching how college actually bills — semester after semester — rather than arriving all at once. Premium-waiver options keep the plan alive for the child even if the parent dies.',
          'Pick Tarun when the child is young now and you want education cash flows mapped to the degree years, with the waiver safety net built in.',
        ],
      },
      {
        heading: 'How to size either plan honestly',
        paras: [
          'Education inflation in India runs near 10% a year — a degree quoted at Rs 10 lakh today can cost far more when your 6-year-old turns 18. Size the sum assured to a defined share of the projected cost, not the whole dream; the plan’s job is to make the first half certain.',
          'For a quote against your child’s actual age and your budget, call or WhatsApp +91 98240 25435. Free consultation, Shela office, Monday to Saturday.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which LIC plan is best for child education?',
        a: 'For a single lump sum timed to age 18, Jeevan Labh. For payouts spread across the college years (20/22/24/25), Jeevan Tarun. The right choice depends on the child’s current age and how the fees will fall due.',
      },
      {
        q: 'What happens to the child plan if the parent dies?',
        a: 'Both plans carry life cover on the proposer, and premium-waiver options keep the child’s benefits intact — future premiums are waived while the milestone payouts continue.',
      },
      {
        q: 'When should I start a child education plan?',
        a: 'As early as possible. Starting when the child is 2–6 gives compounding bonuses and lower premiums the most time to work; starting at 12 still helps but needs a larger premium for the same corpus.',
      },
      {
        q: 'How much cover does my child’s education need?',
        a: 'Project the course cost at ~10% annual education inflation to the milestone year, then size the plan to a defined share of that number. I run this arithmetic free for Ahmedabad parents.',
      },
    ],
    related: [
      { label: 'Education story: the alarm clock plan', to: '/blog/jevan-labh-or-the-alarm-clock' },
      { label: 'LIC advisor in South Bopal', to: '/areas/south-bopal' },
      { label: 'All LIC services', to: '/services' },
      { label: 'Book a free consultation', to: '/contact' },
    ],
  },
  {
    slug: 'jeevan-utsav-vs-jeevan-umang',
    title: 'LIC Jeevan Utsav vs Jeevan Umang: compare income, bonuses and premium terms',
    seoTitle: 'Jeevan Utsav vs Jeevan Umang: Which Is Better for You?',
    metaDescription:
      'Jeevan Utsav or Jeevan Umang: which is better? Utsav pays a fixed 10% income with no bonus; Umang pays 8% plus possible bonuses. Compare start dates and terms.',
    date: '2026-10-11',
    updated: '2026-11-06',
    readMinutes: 5,
    targetQuery: 'Jeevan Utsav vs Jeevan Umang',
    kind: 'comparison',
    intro: [
      'LIC Jeevan Utsav (Plan 771) and Jeevan Umang (Plan 745) both combine life cover with a future income, but their income and bonus rules differ. Utsav has a guaranteed income benefit of 10% of Basic Sum Assured under its terms and no bonus; Umang has an 8% survival benefit and may receive bonuses declared by LIC. Neither is a substitute for term cover sized to your family’s needs.',
      'The comparison below uses LIC’s current brochures for Utsav UIN 512N363V02 and Umang UIN 512N312V03, checked on 4 November 2026. Premiums, eligibility and benefits depend on age, chosen term and policy conditions. Read the latest brochure and personalized benefit illustration before applying.',
    ],
    comparison: {
      columns: ['Feature', 'Jeevan Utsav · Plan 771', 'Jeevan Umang · Plan 745'],
      rows: [
        { label: 'Plan type', first: 'Non-participating; no bonus or share in surplus', second: 'Participating; bonuses may be declared and are not guaranteed' },
        { label: 'Income benefit', first: 'Regular or Flexi Income Benefit equal to 10% of Basic Sum Assured, subject to policy terms', second: 'Annual survival benefit equal to 8% of Basic Sum Assured after the premium-paying term' },
        { label: 'When income starts', first: 'Start year depends on premium term: policy year 11 for 5–8 years paid, up to year 19 for a 16-year term', second: 'After the selected 15, 20, 25 or 30-year premium-paying term' },
        { label: 'How long benefits continue', first: 'Whole-life plan; no maturity benefit', second: 'Survival benefits up to the policy anniversary before age 100; maturity benefit at age 100' },
        { label: 'Premium-paying terms', first: '5 to 16 years', second: '15, 20, 25 or 30 years' },
      ],
    },
    sections: [
      {
        heading: 'What the current Jeevan Utsav plan offers',
        paras: [
          'The current Jeevan Utsav is Plan 771 (UIN 512N363V02), a non-participating whole-life savings plan. LIC’s brochure says its benefits are fixed by the contract and it does not receive discretionary bonuses. The earlier Plan 871 was withdrawn on 1 October 2024; use the current Plan 771 brochure when comparing a new purchase.',
          'The premium-paying term is 5 to 16 years. For an in-force policy, the 10% Regular Income or Flexi Income Benefit begins in a policy year tied to the chosen premium term: for example, year 11 after a 5–8 year term, or year 19 after a 16-year term. Guaranteed additions accrue during the premium-paying term. There is no maturity benefit.',
          'Regular Income is paid as it becomes due. Flexi Income can be deferred and accumulated under the interest and withdrawal rules in the policy. Check the brochure for the current rate and detailed conditions; these are contract features, not an investment-return comparison.',
        ],
      },
      {
        heading: 'How it differs from Jeevan Umang',
        paras: [
          'Jeevan Umang is a participating whole-life plan. Its current brochure lists 15, 20, 25 and 30-year premium terms, with an annual survival benefit of 8% of Basic Sum Assured after the premium-paying term. The policy can also receive bonuses declared by LIC; future bonus amounts are not guaranteed.',
          'Compare the cash-flow dates as well as the percentages. Utsav’s 10% benefit does not start immediately when premiums end; the start year follows LIC’s table. Umang’s 8% survival benefit runs up to the policy anniversary before age 100, with a maturity benefit at age 100. The two percentages alone do not tell you which policy provides better value.',
        ],
      },
      {
        heading: 'How to decide which plan to examine',
        paras: [
          'Start with the date you need income, the premium you can sustain, how long you can pay, and whether you want a non-participating plan or are comfortable with bonuses that may vary. Ask for both official benefit illustrations using the same age, Basic Sum Assured and payment frequency, then compare total premiums, benefit start dates, surrender terms and the death benefit.',
          'Do not compare only “10% versus 8%”: each percentage is applied to Basic Sum Assured under its own timing and policy rules. First make sure your family has adequate life cover for loans and dependants. These savings plans are designed for a different job.',
          'For an illustration, call or WhatsApp +91 98240 25435. Review the assumptions and current LIC policy documents before making a decision; an illustration is not a promise of a future bonus or a personalized recommendation.',
        ],
      },
    ],
    sources: [
      { label: 'LIC Jeevan Utsav Plan 771 brochure (UIN 512N363V02)', url: 'https://licindia.in/documents/20121/1319704/Jeevan%2BUtsav%2BSales%2BBrochure.pdf/7d6a89ca-68cc-a86e-6ccb-f1910506da35' },
      { label: 'LIC Jeevan Umang Plan 745 brochure (UIN 512N312V03)', url: 'https://www.licindia.in/documents/20121/1319704/745%2BLIC_Jeevan%2BUmang_Eng%2B_141025.pdf/d67dc9dc-ca37-7e1e-d662-132423c49d15' },
      { label: 'LIC current whole-life plan list', url: 'https://www.licindia.in/en/web/guest/whole-life-plans' },
    ],
    faqs: [
      {
        q: 'Jeevan Utsav or Jeevan Umang: which is better?',
        a: 'Neither is better for everyone. Jeevan Utsav suits someone who wants a fixed income with no dependence on bonuses and a shorter 5–16 year premium term. Jeevan Umang suits someone who can pay for 15–30 years and accepts bonuses that may vary. Compare both official illustrations at the same age and sum assured.',
      },
      {
        q: 'What is the current LIC Jeevan Utsav plan number?',
        a: 'LIC currently lists Jeevan Utsav as Plan 771 (UIN 512N363V02). Plan 871 (UIN 512N363V01) was withdrawn on 1 October 2024. Check the current LIC brochure before comparing a new purchase.',
      },
      {
        q: 'Is the Jeevan Utsav income guaranteed?',
        a: 'The current Plan 771 brochure describes Regular or Flexi Income Benefits and guaranteed additions under the policy terms. The first income year depends on the premium-paying term. Read the brochure and personalized illustration for the conditions that apply to your case.',
      },
      {
        q: 'What is the difference between Regular Income and Flexi Income in Jeevan Utsav?',
        a: 'Regular Income is paid when due. Flexi Income can be deferred and accumulated under the interest and withdrawal rules in the policy. Check the current Plan 771 brochure for the applicable rate and conditions.',
      },
      {
        q: 'Does Jeevan Utsav replace term insurance?',
        a: 'No. Its life cover is modest compared with a term plan for the same premium. Families with loans or young dependants should size term cover first, then use Jeevan Utsav for a defined income goal.',
      },
    ],
    related: [
      { label: 'Jeevan Akshay VII vs Jeevan Umang', to: '/guides/jeevan-akshay-vs-jeevan-umang' },
      { label: 'Retirement & pension plans in Ahmedabad', to: '/services/retirement' },
      { label: 'Term insurance vs endowment', to: '/guides/term-vs-endowment' },
      { label: 'Book a free consultation', to: '/contact' },
    ],
  },
  {
    slug: 'lic-plans-salaried-employees',
    title: 'LIC plans for salaried employees in Ahmedabad: the salary-first portfolio',
    seoTitle: 'LIC Plans for Salaried Employees in Ahmedabad | 80C + Cover',
    metaDescription:
      'Salaried in Ahmedabad? Term cover 10–15x salary, 80C-saving endowment, and pension top-ups. Free salary-first plan: +91 98240 25435.',
    date: '2024-09-13',
    updated: '2024-09-13',
    readMinutes: 4,
    targetQuery: 'LIC plans for salaried employees Ahmedabad',
    kind: 'persona',
    intro: [
      'Salaried families have two advantages: predictable monthly income and EPF building quietly in the background. The mistake I see most in Satellite and SG Highway professionals is insuring the EPF instead of the salary — a Rs 40 lakh EPF balance does not replace a Rs 18 lakh annual income for twenty years.',
      'This guide lays out the salary-first portfolio I build for Ahmedabad’s salaried employees.',
    ],
    sections: [
      {
        heading: 'Layer 1: term cover sized to salary and loans',
        paras: [
          'Start with pure protection: LIC Tech Term or Jeevan Amar sized at 10–15 times annual salary plus outstanding home and car loans, minus existing EPF and gratuity. For most dual-income couples, covering the higher earner plus a smaller cover on the second earner is the efficient shape.',
          'Premiums are eligible for 80C deduction, and the cover should be reviewed every promotion or new loan — a five-minute exercise I do free for clients.',
        ],
      },
      {
        heading: 'Layer 2: 80C savings with a milestone attached',
        paras: [
          'Salaried employees exhaust 80C quickly with EPF alone, so any endowment premium should earn its place against a dated goal: Jeevan Labh timed to a child’s 18th year, or a money-back plan matched to a known future expense. Never buy endowment “for tax saving” alone — EPF already does that job.',
          'Auto-debit on salary day is the entire discipline strategy. Money that leaves on the 5th never gets spent on the 25th.',
        ],
      },
      {
        heading: 'Layer 3: pension top-up before 45',
        paras: [
          'EPF pension replaces only a fraction of salary. From the mid-30s, divert a fixed slice — even Rs 5,000 a month thinking — toward Jeevan Umang-style accumulation or annuity planning, so the retirement gap at 58 is a top-up, not a cliff.',
          'Bring your salary slip and EPF statement to the Shela office (or video call) and we will map all three layers in one sitting: +91 98240 25435.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much term cover does a salaried person need?',
        a: 'A practical rule is 10–15 times annual salary plus outstanding loans, minus EPF, gratuity and existing covers. A salaried employee earning Rs 15 lakh with a Rs 50 lakh home loan typically needs Rs 2–2.5 crore of term cover.',
      },
      {
        q: 'Which LIC plan saves the most tax for salaried employees?',
        a: 'EPF already covers much of 80C for salaried staff. Term and endowment premiums add 80C-eligible outgo with payouts generally exempt under 10(10D) subject to conditions — but buy for the goal first, tax second.',
      },
      {
        q: 'Should salaried couples both buy term insurance?',
        a: 'Yes, in most cases — sized to each income. If either income stops, the household budget breaks; a smaller cover on the second earner is far cheaper than the risk it removes.',
      },
      {
        q: 'Is EPF enough for retirement?',
        a: 'Rarely on its own. EPF replaces only part of salary income, and lump sums get spent without a pension structure. Pair EPF with annuity planning (Jeevan Akshay VII near retirement) so monthly expenses stay covered for life.',
      },
    ],
    related: [
      { label: 'Term vs endowment comparison', to: '/guides/term-vs-endowment' },
      { label: 'Retirement checklist for your 50s', to: '/blog/retirement-planning-ahmedabad-50s-checklist' },
      { label: 'LIC advisor in Satellite', to: '/areas/satellite' },
      { label: 'Book a free consultation', to: '/contact' },
    ],
  },
  {
    slug: 'lic-plans-business-owners',
    title: 'LIC plans for business owners in Ahmedabad: continuity beyond the founder',
    seoTitle: 'LIC Plans for Business Owners in Ahmedabad | Keyman, HUF, Loans',
    metaDescription:
      'Business owner in Ahmedabad? Keyman cover, loan protection, HUF policies and succession-safe savings. Free business review: +91 98240 25435.',
    date: '2024-09-13',
    updated: '2024-09-13',
    readMinutes: 4,
    targetQuery: 'LIC plans for business owners Ahmedabad',
    kind: 'persona',
    intro: [
      'A salaried family loses an income when the earner dies. A business family can lose the income and the business — unsettled loans get called in, partners dispute, and working capital freezes. Business owners from Rakhial to SG Highway carry risks salary slips never show.',
      'This guide covers the four covers every Ahmedabad business owner should review.',
    ],
    sections: [
      {
        heading: 'Cover the loans first, then the family',
        paras: [
          'Business and personal loans in the owner’s name need term cover sized to the total outstanding — banks recover from families, not from shuttered shops. LIC Tech Term or Jeevan Amar at 10–15 times drawings plus loans is the starting point, with the nominee structure documented on the one-page sheet I give every client.',
          'Review cover every time a new cash-credit limit or machinery loan is signed. Cover that matched last year’s balance sheet rarely matches this year’s.',
        ],
      },
      {
        heading: 'Keyman, partnership and HUF structures',
        paras: [
          'If the business depends on one person’s relationships or skills, keyman-style cover compensates the firm for that loss. Partners should hold cross-cover so a death triggers a funded buyout, not a feud. HUFs can hold policies that compound family wealth across generations with clean succession.',
          'These structures need paperwork done right the first time — proposals, board resolutions where applicable, and nominee plus assignment formalities. I handle the full file.',
        ],
      },
      {
        heading: 'Turn volatile profits into certain milestones',
        paras: [
          'Business income swings; school fees and retirements do not. Channel a fixed monthly drawing into endowment plans (Jeevan Labh for education years, Umang-style accumulation for retirement) so good years pre-fund the lean ones.',
          'For a free business-protection review — loans, partners, family goals on one sheet — call or WhatsApp +91 98240 25435.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is keyman insurance for a small business?',
        a: 'A life cover taken by the business on a key person, so the firm receives funds to survive the disruption if that person dies. It is as relevant to a 10-person Ahmedabad trading firm as to a large company.',
      },
      {
        q: 'Can an HUF buy LIC policies?',
        a: 'Yes. Hindu Undivided Families can take LIC policies with structured nominees, which helps compound family wealth and pass it cleanly to the next generation.',
      },
      {
        q: 'How should business owners handle loan protection?',
        a: 'Hold term cover at least equal to total outstanding business plus personal loans in your name, and update it whenever limits change. Lenders recover from families — cover is what prevents a loan from becoming an inheritance of debt.',
      },
      {
        q: 'Should business income fund endowment plans?',
        a: 'A fixed monthly drawing into endowment plans converts volatile profits into certain milestone money — education, retirement, succession funds. Auto-debit on a fixed date enforces what willpower cannot.',
      },
    ],
    related: [
      { label: 'Term vs endowment comparison', to: '/guides/term-vs-endowment' },
      { label: 'The missing-nominee claims story', to: '/blog/the-policy-he-bought-after-the-funeral' },
      { label: 'LIC advisor on SG Highway', to: '/areas/sg-highway' },
      { label: 'Book a free consultation', to: '/contact' },
    ],
  },
  {
    slug: 'lic-plans-senior-citizens',
    title: 'LIC plans for senior citizens in Ahmedabad: guaranteed income, zero stress',
    seoTitle: 'LIC Plans for Senior Citizens in Ahmedabad | Pension + Health',
    metaDescription:
      'Senior citizen in Ahmedabad? Immediate pension via Jeevan Akshay VII, health cover, and claim support for old policies. Free review: +91 98240 25435.',
    date: '2024-09-13',
    updated: '2026-11-04',
    readMinutes: 4,
    targetQuery: 'LIC plans for senior citizens Ahmedabad',
    kind: 'persona',
    intro: [
      'After 60, the financial job changes completely: stop growing money, start guaranteeing it. I tell every senior citizen who visits my Shela office the same thing — your saving years are over, your income years have begun.',
      'This guide covers the three moves that matter after retirement: pension, health buffer, and paperwork your children can actually use.',
    ],
    sections: [
      {
        heading: 'Convert corpus to pension with Jeevan Akshay VII',
        paras: [
          'Provident fund, gratuity and maturities sitting in savings accounts earn little and get nibbled monthly. Converting a portion into an immediate annuity locks a monthly pension at day-one rates, with joint-life so your spouse keeps receiving it and return-of-purchase-price so capital returns to nominees.',
          'The rule: pension money must be guaranteed, never market-linked. The monthly gap is non-negotiable, so its funding must be too.',
        ],
      },
      {
        heading: 'Keep health shocks out of the pension',
        paras: [
          'Keep health-related cover separate from the monthly pension gap and emergency reserve. LIC currently lists Health Shield (Plan 907) and New Cancer Cover (Plan 908); check each current policy document for eligibility, covered events and limits, then compare it with any mediclaim you already have.',
          'Insure the shocks separately and the pension survives them — that separation is the whole architecture.',
        ],
      },
      {
        heading: 'Leave paperwork, not puzzles',
        paras: [
          'Old policies with missing nominees, forgotten maturities and unknown branches are the commonest inheritance I untangle. Bring date of birth and PAN; I trace branches, register nominees, and consolidate everything onto the one-page sheet your children can act on.',
          'Policy tracing and claim support cost nothing and need no prior relationship — call or WhatsApp +91 98240 25435.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which LIC plan is best after retirement at 60?',
        a: 'For monthly income, Jeevan Akshay VII immediate annuity — pension starts the next cycle at locked rates. Pair it with health cover and 12 months of liquid expenses, and avoid market-linked products for gap money.',
      },
      {
        q: 'Can senior citizens buy new LIC policies?',
        a: 'Annuity plans like Jeevan Akshay VII are specifically designed for retirees with entry at advanced ages. Pure savings-cum-protection plans make less sense after 60 — the priority shifts to guaranteed income.',
      },
      {
        q: 'How do I trace a forgotten LIC policy of my parents?',
        a: 'With the policyholder’s date of birth and PAN, the branch can be traced and nominee/maturity status verified. I do this tracing free for Ahmedabad families, clients or not.',
      },
      {
        q: 'Should retirees keep money in fixed deposits or annuities?',
        a: 'Both, split by role: annuities for the fixed monthly gap (guaranteed for life), fixed deposits for 6–12 months of emergency liquidity. FD interest alone is a countdown, not a pension.',
      },
    ],
    related: [
      { label: 'Akshay vs Umang comparison', to: '/guides/jeevan-akshay-vs-jeevan-umang' },
      { label: 'Pension story: the retired teacher', to: '/blog/the-pension-that-arrived-before-the-milk' },
      { label: 'LIC advisor in Shela', to: '/areas/shela' },
      { label: 'Book a free consultation', to: '/contact' },
    ],
  },
  {
    slug: 'lic-claim-documents-checklist',
    title: 'LIC claim documents: the complete checklist',
    seoTitle: 'LIC Death Claim Documents Checklist | Ahmedabad Help',
    metaDescription:
      'The exact documents LIC asks for on a death, maturity or survival claim, who signs each one, and what causes the delays. Free claim help: +91 98240 25435.',
    date: '2026-10-26',
    updated: '2026-10-26',
    readMinutes: 7,
    targetQuery: 'LIC death claim documents',
    kind: 'checklist',
    intro: [
      'Most LIC claims are paid, and most of the delay is paperwork rather than dispute. A family that arrives at the branch with the right set of documents the first time is usually paid within weeks; a family that arrives missing two of them restarts the clock.',
      'This is the checklist I use with families in Ahmedabad before we go to the branch — for a death claim, a maturity claim, or a survival benefit under a money-back plan. It is written for the person who has to actually assemble the file, not for a brochure.',
    ],
    sections: [
      {
        heading: 'Death claim: the core set',
        paras: [
          'These are the documents LIC asks for in an ordinary death claim. "Ordinary" means death from illness, at home or in hospital, with a nomination registered and the policy in force.',
        ],
        items: [
          'The claim form LIC prescribes, signed by the nominee in front of the branch or a designated officer',
          'The original death certificate issued by the municipal corporation or gram panchayat',
          'The original policy document. If it is lost, a duplicate application first — this alone can add weeks, so search for it before anything else',
          'The nominee’s identity proof, address proof and a recent photograph',
          'Bank account details with a cancelled cheque, for NEFT payment',
          'The medical attendant’s certificate and hospital records where the death followed an illness',
          'The employer’s certificate if the policy was part of a salary-savings or employer-employee scheme',
        ],
      },
      {
        heading: 'What changes when the death was accidental',
        paras: [
          'An accidental, unnatural or suicidal death requires the state’s record of the event, not just the medical record. Expect the branch to ask for all of the following in addition to the core set.',
        ],
        items: [
          'First information report (FIR) or the police complaint',
          'Post-mortem report and the panchnama',
          'The final police investigation report, where one was filed',
          'The magistrate’s report or inquest findings, in cases where one was conducted',
          'Newspaper reports of the incident, if the branch asks for corroboration',
        ],
      },
      {
        heading: 'What changes when there is no nominee',
        paras: [
          'Nomination is what lets LIC pay quickly and close the file. Without it, or where the nominee died before the policyholder, LIC has to establish who is legally entitled, and that is a court or revenue process rather than an insurance one.',
        ],
        items: [
          'A succession certificate from a civil court, where the policy is not covered by a will',
          'A probate of the will, where one exists',
          'A legal heir certificate from the revenue authority, where the branch accepts it',
          'A guardianship certificate plus the minor’s proof of age, where the nominee is a minor',
          'A family arrangement deed or no-objection certificates from other heirs, where the branch agrees to that route',
        ],
      },
      {
        heading: 'Maturity claim and survival benefit',
        paras: [
          'A maturity or money-back payout is simpler, but families still lose weeks by turning up without the discharge form or with a bank account whose name does not match the policy.',
        ],
        items: [
          'The original policy document',
          'The discharge form or maturity claim form, signed by the policyholder',
          'Identity proof and PAN',
          'Bank details with a cancelled cheque, in the policyholder’s own name',
          'NACH or ECS mandate details where the payout is by electronic credit',
          'Form 15G or 15H, where the policyholder is eligible and wants to avoid deduction at source',
        ],
      },
      {
        heading: 'Timelines, and what to do when it stalls',
        paras: [
          'IRDAI’s protection of policyholders’ interests regulations require an insurer to settle a claim within 30 days of receiving the last document it needs, and to give written reasons if it needs more time. Where settlement is delayed beyond the stipulated period, interest can become payable.',
          'In practice, a complete file on a policy older than three years is usually decided quickly. A claim within three years of issue or revival is treated as an early claim and is investigated more carefully — that is normal, not an accusation, and the branch will list any extra documents it wants.',
          'If the claim is rejected or sits unanswered, the escalation route is: the branch manager in writing, then LIC’s grievance redressal officer, then IRDAI’s Bima Bharosa portal. Keep every acknowledgement slip — a dated receipt for your documents is the single most useful piece of paper in a delayed claim.',
        ],
      },
      {
        heading: 'Fees, and the people who will offer to "handle" it',
        paras: [
          'Claim forms are free. There is no legitimate charge for submitting a claim, for a nomination change, or for a policy status letter. LIC may charge a small receipted fee for a duplicate policy document, and nothing else.',
          'Be careful with anyone who asks for a percentage of the claim, offers to "arrange" a death certificate, or wants the original policy document without a receipt. A genuine advisor helps you assemble the file and goes with you to the branch; they do not take custody of the originals or a cut of the payout.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What documents are required for an LIC death claim?',
        a: 'Normally the LIC claim form signed by the nominee, the original death certificate, the original policy document, the nominee’s identity and address proof, bank details with a cancelled cheque, and the medical attendant’s certificate or hospital records. Accidental deaths additionally need the FIR and post-mortem report.',
      },
      {
        q: 'How long does LIC take to settle a death claim?',
        a: 'IRDAI regulations require settlement within 30 days of receiving the last necessary document, with written reasons if more time is needed. Claims on policies older than three years are usually decided quickly once the file is complete; a missing nominee or a lost policy document is what typically causes the delay.',
      },
      {
        q: 'Can an LIC claim be filed without the original policy document?',
        a: 'Yes, but a duplicate policy document has to be obtained first, and that adds time. The nominee applies for a duplicate with an indemnity bond and an advertisement in a newspaper where the branch requires it, and the claim then proceeds with the duplicate.',
      },
      {
        q: 'What if the nominee has also died?',
        a: 'The nomination lapses and the money is payable to the legal heirs, who must establish entitlement through a succession certificate, probate, or a legal heir certificate accepted by the branch. This is why reviewing the nominee on every policy after a death in the family matters.',
      },
      {
        q: 'Does an agent charge for helping with a claim?',
        a: 'They should not. Claim forms are free and there is no legitimate percentage or success fee. Jigisha Kiran Shah helps families assemble the file and follow up with the branch at no charge, including for policies sold by another agent.',
      },
    ],
    related: [
      { label: 'Policy review & claim assistance', to: '/services/policy-review-claims' },
      { label: 'Change or update a nominee', to: '/services/nominee-change' },
      { label: 'Revive a lapsed policy', to: '/services/lic-policy-revival' },
      { label: 'Book a free consultation', to: '/contact' },
    ],
  },
];

export function getGuide(slug: string | undefined): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
