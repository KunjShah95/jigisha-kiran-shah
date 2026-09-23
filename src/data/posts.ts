export interface PostSection {
  heading?: string;
  paras: string[];
  quote?: { text: string; by: string };
  takeaway?: string[];
}

export interface Post {
  slug: string;
  title: string;
  /** Keyword-first <title> for SERP CTR; `title` stays as the on-page H1. */
  seoTitle: string;
  metaDescription: string;
  date: string; // ISO
  updated: string; // ISO
  readMinutes: number;
  targetQuery: string;
  sections: PostSection[];
  related?: { label: string; to: string }[];
}

export const POSTS: Post[] = [
  {
    slug: 'the-policy-he-bought-after-the-funeral',
    title: 'The policy a Shela family bought after the funeral',
    seoTitle: 'Term Insurance in Ahmedabad: 5 Nominee Mistakes to Avoid',
    metaDescription:
      'Term insurance in Ahmedabad: how a missing nominee delayed one LIC claim by 4 months. Free term cover & claims help from Jigisha Kiran Shah: +91 98240 25435.',
    date: '2024-08-21',
    updated: '2024-09-13',
    readMinutes: 5,
    targetQuery: 'term insurance Ahmedabad',
    sections: [
      {
        paras: [
          'On a humid Tuesday morning in 2019, a woman in her forties sat across from me at my office in Orchid Legacy, Shela. She was not there to buy a policy. She was there because her sister had read one of my WhatsApp forwards and said, "Go to that Shah madam. She will at least explain things."',
          'Her name — let us call her Rekha — had just lost her husband, a textile trader in the Rakhial lane, to a sudden heart attack at 44. He had three LIC policies. She did not know about any of them.',
        ],
      },
      {
        heading: 'Three policies, and not one file',
        paras: [
          'Rekha could not find a single policy document. No file, no envelope, not even a branch name. Her husband had paid premiums from an auto-debit she had never seen. The first thing we did was not cry, and it was not panic. We wrote down his date of birth, his PAN, and his phone number, and I pulled up what the LIC branch records could find.',
          'There were three policies. One maturity had already been credited to his account two years earlier — money the family did not know existed. One small endowment plan with a nominee registered: Rekha. And one older plan where the nominee column was empty.',
          'The endowment paid out in nineteen days. The plan with no nominee took four months, a succession route Rekha did not want to think about, and legal paperwork that cost more than she expected. The maturity amount we recovered from his account and handed it to her with a receipt. She told me later that the cheque for the claim was not what made her cry. It was the four-month file.',
        ],
        quote: {
          text: '"The money existed. The paperwork was the funeral after the funeral."',
          by: 'Rekha (name changed), Ahmedabad',
        },
      },
      {
        heading: 'The rule I now make every family write down',
        paras: [
          'Every client leaves my desk with one sheet of paper. It is not a policy document. It has four lines: the policy numbers, the branch name, the premium due dates, and where the physical file lives. I ask the client to photograph it and save it in a Google Keep note shared with one family member. Two minutes. It has saved more claims than I can count.',
          'In 22 years since 2004, I have supported over 1,000 settled claims, and the pattern never changes: a claim becomes a nightmare not when the policy fails, but when the family does not know the policy exists. Nominee registration is free, takes one form, and is the single difference between a nineteen-day settlement and a four-month legal battle.',
        ],
        takeaway: [
          'Register the nominee on every LIC policy — it is free and one form.',
          'Keep one photo on your phone: policy numbers, branch, due dates.',
          'Auto-debit is good; a paperless family is not. Share the details with someone.',
          'If you are the family\u2019s only earner, term cover (LIC Tech Term, Jeevan Amar) should size to 10\u201315x your annual income plus loans.',
        ],
      },
      {
        heading: 'If this is you today',
        paras: [
          'If your parent, spouse, or sibling lost someone recently in Ahmedabad and there are LIC papers you cannot find, do not lose sleep over the paperwork. Bring me a date of birth and a PAN, and we will trace the branch together. Policy tracing and claim support do not require you to be my client — this work is simply what an LIC advisor in Shela is for.',
          'Call or WhatsApp +91 98240 25435. Consultations are free, and the sheet of paper is free too.',
        ],
      },
    ],
    related: [
      { label: 'Term insurance plans we compare', to: '/services' },
      { label: 'Claims assistance in Ahmedabad', to: '/contact' },
      { label: 'LIC advisor in Shela', to: '/areas/shela' },
    ],
  },
  {
    slug: 'the-pension-that-arrived-before-the-milk',
    title: "The pension that arrived before the milkman's bell",
    seoTitle: 'LIC Pension Plans in Ahmedabad: Jeevan Akshay VII Guide',
    metaDescription:
      'LIC pension plans in Ahmedabad: how Jeevan Akshay VII gives guaranteed monthly income after retirement. Free pension-gap calculation: +91 98240 25435.',
    date: '2024-07-30',
    updated: '2024-09-13',
    readMinutes: 5,
    targetQuery: 'LIC pension plans Ahmedabad',
    sections: [
      {
        paras: [
          'Madhu ben taught mathematics at a school near Commerce Six Roads for thirty-one years. When she retired in 2021, her provident fund and gratuity landed in her account as one number she had never seen in her life. Her son, careful and loving, said: "Put it in FD, mother. Nothing riskier."',
          'So she did. And for the first year it felt wise. Then the number started feeling smaller every month, because a lump sum in a fixed deposit is not income. It is a countdown.',
        ],
      },
      {
        heading: 'What a pension actually is',
        paras: [
          'A pension plan is not an investment with returns. It is the conversion of money you have into a monthly payment that cannot run out, which you control. A fixed deposit gives you interest you withdraw from a dying pile. A guaranteed annuity like LIC Jeevan Akshay VII gives you a payment that comes whether the market is up, down, or sideways — for as long as you live.',
          'When Madhu ben came to my Shela office, we did one honest thing first. We wrote her monthly expense on paper: grocery, medicines, electricity, the temple fund, the kitchen help. Fourteen thousand rupees. Then we wrote her EPF withdrawal and the small rent from the shop her husband had built. Eight thousand. The gap was the real plan we had to buy.',
        ],
        quote: {
          text: '"Beta, I do not want more money. I want the same money, every month, in my hand."',
          by: 'Madhu ben, retired school teacher, Ahmedabad',
        },
      },
      {
        heading: 'The structure we chose, in plain words',
        paras: [
          'We used a portion of her corpus to buy an immediate annuity from LIC — Jeevan Akshay VII, the plan where the pension starts the very next month, at a rate locked on day one. We added the joint-life option so the pension continues for her partner in life, and the return-of-premium option so the corpus is never lost. The rest stayed in a senior citizen FD for emergency liquidity. That split — guaranteed monthly for the fixed expenses, liquid for shocks — is the whole architecture.',
          'Today her pension credits on the third of every month, before the milkman rings her bell. The number is identical in January and in July. She has not asked her son for money since 2021, and he has not offered. Both facts matter to her.',
        ],
      },
      {
        heading: 'Three numbers to calculate before you retire',
        paras: [
          'If you are within five years of retirement in Ahmedabad, do not wait for the last day. Calculate three numbers now: (1) your true monthly expense, not the guess — the real list, medicines included; (2) guaranteed income already coming — EPF pension, rent, any annuity; (3) the gap. The gap is what a pension plan must cover. Multiply it by roughly 120 and you get a ballpark corpus the annuity will require at current rates; we run exact quotes on LIC\u2019s calculator before you commit a rupee.',
          'Retirement planning in India is not a product. It is arithmetic done on time. If you would like the arithmetic done with you, free of cost, call or WhatsApp +91 98240 25435. We will do it on one sheet of paper, the way we did with Madhu ben.',
        ],
        takeaway: [
          'True monthly expense \u2212 guaranteed income = the gap a pension must cover.',
          'Jeevan Akshay VII: pension starts the next month, rate locked at purchase.',
          'Joint-life + return-of-premium are cheap options worth understanding.',
          'Keep 6\u201312 months of expenses liquid (FD) beside the pension, not inside it.',
        ],
      },
    ],
    related: [
      { label: 'Retirement & pension plans', to: '/services' },
      { label: 'Book a free consultation', to: '/contact' },
    ],
  },
  {
    slug: 'jevan-labh-or-the-alarm-clock',
    title: 'Jeevan Labh and the alarm clock: why your child\u2019s education plan must fail to tempt you',
    seoTitle: 'LIC Jeevan Labh for Child Education in Ahmedabad',
    metaDescription:
      'LIC Jeevan Labh for child education in Ahmedabad: how a South Bopal father locked his daughter\u2019s college fund. Free consultation: +91 98240 25435.',
    date: '2024-06-14',
    updated: '2024-09-13',
    readMinutes: 4,
    targetQuery: 'LIC Jeevan Labh child education Ahmedabad',
    sections: [
      {
        paras: [
          'Hitesh bhai runs a hardware shop on the Bopal\u2013Shela road, the kind where you can buy a single screw. In 2016 his daughter was four and he told me, with full seriousness, "Madam, every year I start a savings for her MBA. Every year the savings stops when the scooter needs new tyres."',
          'He did not have a discipline problem. He had a visibility problem. Money mixed with the shop\u2019s cash flow is not a fund. It is a float.',
        ],
      },
      {
        heading: 'What an endowment plan really does',
        paras: [
          'An endowment plan like LIC Jeevan Labh is not the highest-returning place for a rupee, and I will never sell it as one. What it buys you is a legal promise with a deadline: you pay the premium for a fixed term, and on a fixed future date a guaranteed amount plus vested bonuses is paid to you. The only party who can "change the date" is the one holding a chequebook, and he has already given the instructions to auto-debit.',
          'For Hitesh bhai, that structure was the point. We took a plan whose maturity was timed to the year his daughter would turn 18, and we named her mother as the nominee, because the plan also carries life cover for the person funding it — if anything happens to the earner, the child\u2019s milestone money still arrives.',
        ],
        quote: {
          text: '"I do not trust myself with money. So I bought something that does not let me myself."',
          by: 'Hitesh bhai, merchant, South Bopal',
        },
      },
      {
        heading: 'The maturity year, and the number we beat',
        paras: [
          'In 2030 his daughter sits for her boards and, if God wills, an engineering entrance. In 2031 the policy matures. Education inflation in India runs well above general inflation — a four-year private engineering degree that cost roughly \u20b98\u201310 lakh a few years back is being quoted closer to \u20b915 lakh+ today in Gujarat cities. We sized the sum assured for one thing honestly: the guaranteed corpus would cover a defined share of the bill, not all of it. The rest stays the child\u2019s and family\u2019s to earn, borrow, or scholarship.',
          'This is the sentence most agents will not say: a child education plan should cover a share of the cost, not the whole dream. The plan\u2019s job is to make the first half certain, so the second half is a challenge, not a cliff.',
        ],
      },
      {
        heading: 'The boring summary',
        paras: [
          'If money in your account keeps "forgetting" it belongs to your child\u2019s future: (1) pick the milestone year first, then the maturity date, not the other way round; (2) use auto-debit for the premium; (3) register the nominee; (4) take a plan with built-in life cover and, if you self-fund, a premium-waiver rider; (5) size it to a share of projected cost at education-inflation rates. For a quote against your daughter\u2019s or son\u2019s actual age and income, call or WhatsApp +91 98240 25435 — free consultation, Shela office, Monday to Saturday.',
        ],
        takeaway: [
          'Endowments like Jeevan Labh are discipline instruments, not return champions.',
          'Match the maturity year to the milestone year (18 for UG, 22 for PG).',
          'Size to a defined share of education cost, assuming 10%+ education inflation.',
          'Built-in life cover + premium waiver protects the plan if the earner does not.',
        ],
      },
    ],
    related: [
      { label: 'LIC plan comparison', to: '/services' },
      { label: 'LIC advisor in South Bopal', to: '/areas/south-bopal' },
    ],
  },
  {
    slug: 'retirement-planning-ahmedabad-50s-checklist',
    title: 'Retirement planning at 50: the Satellite engineer who ran the numbers twice',
    seoTitle: 'Retirement Planning in Ahmedabad: 5-Step 50s Checklist',
    metaDescription:
      'Retirement planning in Ahmedabad: the 5-number checklist I run with every 50+ client — expenses, gap, pension, health & corpus. Free review: +91 98240 25435.',
    date: '2024-09-23',
    updated: '2024-09-23',
    readMinutes: 5,
    targetQuery: 'retirement planning Ahmedabad',
    sections: [
      {
        paras: [
          'Ramesh bhai retired as a senior engineer from a manufacturing plant near Naroda in 2023, at 58. Provident fund, gratuity, a small LIC maturity — the settlement letter added up to a number he had never held at once. His plan was simple: "Madam, I will manage. Monthly expenses are only thirty thousand."',
          'Six months later he was back in my Shela office with a diary. Page one listed the thirty thousand. Page two listed everything else: his wife\u2019s knee medication, the society maintenance that had doubled, the grandson\u2019s school bus fee he had quietly volunteered to pay, and a roof repair the monsoon had ordered. Forty-seven thousand. He had underestimated his own life by more than half.',
        ],
      },
      {
        heading: 'The five numbers before any product',
        paras: [
          'Retirement planning in Ahmedabad fails the same way every time: people shop for a plan before doing the arithmetic. So we do the arithmetic first, on one sheet of paper, in this order. One: true monthly expense today — the diary version, not the guess, medicines and maintenance included. Two: years to retirement and years after it — a 58-year-old in Gujarat should plan for 25-plus years, not 15. Three: guaranteed income already coming — EPF pension, rent, any existing annuity. Four: the gap between expense and guaranteed income, inflated at 6% a year. Five: the corpus that gap demands.',
          'For Ramesh bhai the gap was roughly twenty-two thousand a month in today\u2019s money. At a 6% annuity rate, that single number told us the corpus he still had to build — and, more importantly, what his existing lump sum could already guarantee if converted through LIC Jeevan Akshay VII instead of sitting in a savings account earning 2.7%.',
        ],
        quote: {
          text: '"I spent thirty years calculating loads for machines. I never calculated the load of my own kitchen."',
          by: 'Ramesh bhai, retired engineer, Satellite',
        },
      },
      {
        heading: 'What we actually bought — and what we refused',
        paras: [
          'We converted a portion of his corpus into an immediate annuity with the joint-life option, so the pension continues for his wife, plus return-of-premium so the capital is never lost to the family. We kept twelve months of expenses in a senior citizen FD for shocks — a roof, a hospital admission, a grandson\u2019s admission. And we refused two things: a second endowment plan at 58 ("your saving years are over; your income years have begun") and any market-linked product for the gap money ("the gap is non-negotiable, so its funding must be guaranteed").',
          'The pension credits on the fifth of every month. His diary now has three columns: pension in, expenses out, balance for the grandson\u2019s bus fee. He calls it his salary slip.',
        ],
        takeaway: [
          'Write the diary version of expenses — guesses undercount by 30–50%.',
          'Plan for 25+ years after 58; Ahmedabad families routinely live past 85.',
          'Gap money must be guaranteed (annuity), never market-linked.',
          'Keep 12 months of expenses liquid beside the pension, not inside it.',
          'Joint-life + return-of-premium options protect the spouse and the capital.',
        ],
      },
      {
        heading: 'If you are 50-plus in Ahmedabad',
        paras: [
          'Do not wait for the farewell speech. If retirement is within five to seven years, the five numbers take one sitting and cost nothing — call or WhatsApp +91 98240 25435 for a free retirement review at the Shela office or on video call. Bring your EPF statement and a rough expense list; we will do the rest on one sheet of paper.',
          'And if you are 40, read this as a warning with a happy ending: the engineer who runs the numbers at 50 retires once. The one who guesses retires twice — the second time into his children\u2019s budget.',
        ],
      },
    ],
    related: [
      { label: 'Retirement & pension plans', to: '/services' },
      { label: 'LIC advisor in Satellite', to: '/areas/satellite' },
      { label: 'Book a free consultation', to: '/contact' },
    ],
  },
];

export function getPost(slug: string | undefined): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
