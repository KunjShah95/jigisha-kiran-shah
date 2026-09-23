export interface GuideSection {
  heading: string;
  paras: string[];
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
  kind: 'comparison' | 'persona';
  intro: string[];
  sections: GuideSection[];
  faqs: GuideFaq[];
  related: { label: string; to: string }[];
}

export const GUIDES: Guide[] = [
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
    updated: '2024-09-13',
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
          'One hospitalisation should never eat the pension corpus. Arogya Rakshak-style hospitalisation cover and Cancer Cover-style lump-sum protection sit beside the pension, while 12 months of expenses stay liquid in a senior-citizen FD for roofs, admissions and emergencies.',
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
];

export function getGuide(slug: string | undefined): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
