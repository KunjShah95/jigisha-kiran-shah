export interface PostSection {
  heading?: string;
  paras: string[];
  quote?: { text: string; by: string };
  /** Worked figures shown as a compact table under the section. */
  numbers?: { label: string; value: string }[];
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
      'Term insurance in Ahmedabad: a family needed ₹1.36 Cr of cover and received ₹13.7 lakh. 5 nominee and cover mistakes to avoid. Free review: +91 98240 25435.',
    date: '2024-08-21',
    updated: '2026-10-11',
    readMinutes: 6,
    targetQuery: 'term insurance Ahmedabad',
    sections: [
      {
        paras: [
          'On a humid Tuesday morning in 2019, a woman in her forties sat across from me at my office in Orchid Legacy, Shela. She was not there to buy a policy. She was there because her sister had read one of my WhatsApp forwards and said, "Go to that Shah madam. She will at least explain things."',
          'Let us call her Rekha. Her husband, a textile trader who worked out of Rakhial and had moved the family to Shela three years earlier, had died of a sudden heart attack at 44. He earned about ₹9 lakh a year, had ₹28 lakh left on the home loan, and two children aged 15 and 11. He had three LIC policies. Rekha did not know about any of them.',
        ],
      },
      {
        heading: 'Three policies, and not one file',
        paras: [
          'Rekha could not find a single policy document. No file, no envelope, not even a branch name. Premiums had gone out by auto-debit from an account she had never operated. We started with what she did have: his date of birth, PAN and mobile number. From those, the branch records found three policies.',
          'The first was a Jeevan Anand policy from 2006 with ₹5 lakh sum assured and Rekha as nominee. With accrued bonuses, the death claim came to about ₹8.6 lakh, and it was paid nineteen days after we filed it. The second was a money-back plan whose ₹1.2 lakh survival benefit had been credited to his bank account two years earlier, money the family did not know was sitting there. The third was a 2002 endowment of ₹2 lakh, worth about ₹3.9 lakh with bonuses, with the nominee column left blank.',
          'That last claim took four months. Without a nominee, LIC needs proof of who the legal heirs are: an indemnity bond, two sureties, and a no-objection affidavit from every heir, including his 71-year-old mother in Mehsana. Rekha told me later that the cheque was not what made her cry. It was the four-month file.',
        ],
        quote: {
          text: '"The money existed. The paperwork was the funeral after the funeral."',
          by: 'Rekha (name changed), Ahmedabad',
        },
      },
      {
        heading: 'The harder truth: the cover was a tenth of what they needed',
        paras: [
          'The paperwork was the visible problem. The bigger one was the amount. All three policies together brought the family about ₹13.7 lakh. A sensible cover for a 44-year-old earning ₹9 lakh with a ₹28 lakh home loan is roughly 12 times income plus the loan: about ₹1.36 crore. It was not even enough to close the ₹28 lakh home loan. The in-laws covered the shortfall by selling a plot in their village, and the children’s education fund started again from zero.',
          'His policies were savings plans bought one at a time over the years, each a sensible decision on its own. None of them was built to replace an income. A pure term plan does exactly that, and for a healthy man in his thirties ₹1 crore of term cover often costs less than one endowment premium.',
        ],
        numbers: [
          { label: 'Cover the family needed (12× ₹9 L income + ₹28 L loan)', value: '≈ ₹1.36 Cr' },
          { label: 'Jeevan Anand (2006), nominee registered: paid in 19 days', value: '₹8.6 L' },
          { label: 'Money-back survival benefit, already in his account', value: '₹1.2 L' },
          { label: '2002 endowment, no nominee: paid after 4 months', value: '₹3.9 L' },
          { label: 'Total received', value: '₹13.7 L' },
        ],
      },
      {
        heading: 'The policy bought after the funeral',
        paras: [
          'Two weeks after the last claim was settled, Rekha came back with her husband’s younger brother. He was 38, in the same trade, with a wife, a daughter and a home loan of his own. He did not want a story like his brother’s. We sized his cover the same way and he took ₹1.5 crore of LIC term cover to age 70, at about ₹26,000 a year. His wife is the nominee, the policy details are on one sheet of paper in their kitchen drawer, and a photo of that sheet is on both their phones.',
          'In 22 years since 2004, I have helped families through over 1,000 claims to settlement, and the pattern does not change. A claim becomes a nightmare when the family does not know the policy exists, when the nominee is missing, or when the cover was never big enough to begin with. All three are fixed before the claim, never after.',
        ],
        takeaway: [
          'Mistake 1: no nominee. Registering one is free, takes one form, and turned a four-month claim into a nineteen-day one.',
          'Mistake 2: a minor as nominee with no appointee named. Add an adult appointee until the child turns 18.',
          'Mistake 3: never updating the nominee after a marriage, divorce or death in the family.',
          'Mistake 4: the family does not know the policy exists. Keep one sheet with policy numbers, branch and due dates, and share a photo with one family member.',
          'Mistake 5: cover that is too small. Size term cover at 10–15× annual income plus loans. For most salaried and business families in Ahmedabad that is ₹1 crore or more.',
        ],
      },
      {
        heading: 'If this is you today',
        paras: [
          'If your parent, spouse or sibling died recently in Ahmedabad and there are LIC papers you cannot find, do not lose sleep over the paperwork. Bring a date of birth and a PAN, and we will trace the branch together. Policy tracing and claim support do not require you to be my client. This work is simply what an LIC advisor in Shela is for.',
          'If you are the earner, call or WhatsApp +91 98240 25435 for a free cover check. We will work out your number on one sheet of paper and show you the term premium for it.',
        ],
      },
    ],
    related: [
      { label: 'Term insurance plans compared', to: '/services/term-insurance' },
      { label: 'Policy review & claims assistance', to: '/services/policy-review-claims' },
      { label: 'LIC advisor in Shela', to: '/areas/shela' },
    ],
  },
  {
    slug: 'the-pension-that-arrived-before-the-milk',
    title: "The pension that arrived before the milkman's bell",
    seoTitle: 'LIC Pension Plans in Ahmedabad: Jeevan Akshay VII Guide',
    metaDescription:
      'LIC pension plans in Ahmedabad: how a retired teacher turned a ₹1.10 Cr corpus into a ₹22,000 monthly pension with Jeevan Akshay VII. Free review: +91 98240 25435.',
    date: '2024-07-30',
    updated: '2026-10-11',
    readMinutes: 6,
    targetQuery: 'LIC pension plans Ahmedabad',
    sections: [
      {
        paras: [
          'Madhu ben taught mathematics at a school near Commerce Six Roads for thirty-one years. When she retired at 60 in 2021, her provident fund, gratuity and leave encashment arrived as one number she had never seen in her life: about ₹72 lakh. With the ₹38 lakh she and her husband already held in joint fixed deposits, the household had roughly ₹1.10 crore. Her son, careful and loving, said: "Put it in FD, mother. Nothing riskier."',
          'For the first year that felt wise. Then FD rates dipped, the interest started feeling smaller every month, and she noticed she was breaking deposits for medical bills. A lump sum in a fixed deposit is not income. It is a countdown.',
        ],
      },
      {
        heading: 'What a pension actually is',
        paras: [
          'A pension plan is not an investment chasing returns. It turns money you have into a monthly payment that cannot run out. A fixed deposit gives you interest from a pile that shrinks every time you dip into it. A guaranteed annuity like LIC Jeevan Akshay VII pays the same amount whether interest rates rise or fall, for as long as you live.',
          'When Madhu ben came to my Shela office, we did one honest thing first. We wrote down the household’s monthly expenses: groceries, medicines for both of them, electricity, society maintenance, the temple fund, the kitchen help, and a health insurance premium paid once a year but counted monthly. It came to ₹45,000. Then we wrote down the income already guaranteed: her husband’s co-operative bank pension of ₹16,000 and ₹9,000 rent from the shop he had built. ₹25,000. The ₹20,000 gap was the pension we had to buy.',
        ],
        quote: {
          text: '"Beta, I do not want more money. I want the same money, every month, in my hand."',
          by: 'Madhu ben (name changed), retired school teacher, Ahmedabad',
        },
      },
      {
        heading: 'The structure we chose, in plain words',
        paras: [
          'We put ₹45 lakh into Jeevan Akshay VII, the immediate annuity where the pension starts the next month at a rate locked on day one. We chose the joint-life option, so the full pension continues for whichever of them lives longer, and return of purchase price, so the ₹45 lakh goes to their son after both of them are gone. At the rate then, about 5.9% a year, that bought a pension of roughly ₹22,000 a month, a little above the gap so there is room for price rises in the early years.',
          'Each of them put ₹15 lakh in the Senior Citizens’ Savings Scheme, the limit at the time. That interest is not spent; it is the reserve for higher expenses later. The remaining ₹35 lakh stays in fixed deposits for hospital bills and emergencies. And we agreed on one future step: when expenses outgrow the pension, around age 68, a second smaller annuity will be bought from the reserve.',
          'Today the pension arrives in her account at the start of every month, before the milkman rings her bell. The amount is the same in January and in July. She has not asked her son for money since 2021, and he has not offered. Both facts matter to her.',
        ],
        numbers: [
          { label: 'Household corpus at retirement (2021)', value: '≈ ₹1.10 Cr' },
          { label: 'Monthly expenses − guaranteed income (₹45,000 − ₹25,000)', value: '₹20,000 gap' },
          { label: 'Jeevan Akshay VII, joint life + return of purchase price', value: '₹45 L → ≈ ₹22,000/month' },
          { label: 'Senior Citizens’ Savings Scheme (₹15 L each)', value: '₹30 L' },
          { label: 'Fixed deposits for emergencies, medical bills and a later top-up annuity', value: '₹35 L' },
        ],
      },
      {
        heading: 'Three numbers to calculate before you retire',
        paras: [
          'If you are within five years of retirement in Ahmedabad, do not wait for the last day. Calculate three numbers now: (1) your true monthly expenses, from a real list with medicines included, not a guess; (2) the income already guaranteed, such as a pension, rent or an existing annuity; (3) the gap between them. The gap is what a pension plan must cover.',
          'A quick estimate of the corpus needed: at an annuity rate of about 6%, every ₹1,000 of monthly pension needs roughly ₹2 lakh. So a ₹20,000 gap needs about ₹40 lakh, and a ₹50,000 gap about ₹1 crore. Rates change with age, the options you choose and the interest rate environment, so we always get an exact quote from LIC before you commit a rupee. Remember that annuity income is taxable as income in your hands.',
          'Retirement planning in India is not a product. It is arithmetic done on time. If you would like the arithmetic done with you, free of cost, call or WhatsApp +91 98240 25435. We will do it on one sheet of paper, the way we did with Madhu ben.',
        ],
        takeaway: [
          'True monthly expenses − guaranteed income = the gap a pension must cover.',
          'Quick estimate: about ₹2 lakh of corpus for every ₹1,000 of monthly pension at ~6%.',
          'Jeevan Akshay VII starts the pension the next month, at a rate locked at purchase.',
          'Joint life and return of purchase price protect the spouse and the capital, at a slightly lower pension.',
          'Keep emergency money outside the annuity, and plan a top-up annuity for later years.',
        ],
      },
    ],
    related: [
      { label: 'Retirement & pension plans compared', to: '/services/retirement' },
      { label: 'Book a free consultation', to: '/contact' },
    ],
  },
  {
    slug: 'jevan-labh-or-the-alarm-clock',
    title: 'Jeevan Labh and the alarm clock: why your child’s education plan must fail to tempt you',
    seoTitle: 'LIC Jeevan Labh for Child Education in Ahmedabad',
    metaDescription:
      'LIC Jeevan Labh for child education in Ahmedabad: how a South Bopal father built a ₹35 lakh college fund and ₹1.2 Cr of family cover. Free consultation: +91 98240 25435.',
    date: '2024-06-14',
    updated: '2026-10-11',
    readMinutes: 5,
    targetQuery: 'LIC Jeevan Labh child education Ahmedabad',
    sections: [
      {
        paras: [
          'Hitesh bhai runs a hardware shop on the Bopal–Shela road, the kind where you can buy a single screw. The shop earns the family about ₹12 lakh a year. In 2016, when he was 33 and his daughter was four, he told me with full seriousness: "Madam, every year I start a savings for her studies. Every year the savings stops when the shop needs stock or the scooter needs new tyres."',
          'He did not have a discipline problem. He had a visibility problem. Money mixed with the shop’s cash flow is not a fund. It is working capital.',
        ],
      },
      {
        heading: 'What an endowment plan really does',
        paras: [
          'An endowment plan like LIC Jeevan Labh is not the highest-returning place for a rupee, and I will never sell it as one. Over the full term it typically works out to around 5–6% a year. What it buys you is a promise with a deadline: you pay the premium for a fixed number of years, and on a fixed future date the sum assured plus bonuses is paid out. Once the auto-debit is set, there is no easy way to "borrow" from it for stock.',
          'For Hitesh bhai, that was the point. We took Jeevan Labh with ₹20 lakh sum assured, a 16-year term and premiums for only 10 years, about ₹1.38 lakh a year. He paid the last premium in January 2026. The policy matures in 2032, when his daughter is 20.',
          'The second half of the plan mattered just as much. A ₹20 lakh endowment does not protect a family that depends on ₹12 lakh a year of shop income. So we added ₹1 crore of LIC term cover to age 60, at about ₹14,000 a year. If anything happens to Hitesh bhai, the family receives ₹1.2 crore and the education money is still there.',
        ],
        quote: {
          text: '"I do not trust myself with money. So I bought something that does not let me touch it."',
          by: 'Hitesh bhai (name changed), merchant, South Bopal',
        },
        numbers: [
          { label: 'Jeevan Labh premium, 10 years (2016–2026)', value: '≈ ₹1.38 L/year · ₹13.8 L total' },
          { label: 'Projected maturity in 2032 (₹20 L sum assured + bonuses)', value: '≈ ₹33–36 L' },
          { label: 'LIC term cover to age 60', value: '₹1 Cr · ≈ ₹14,000/year' },
          { label: 'Family protected if he dies before 2032', value: '≈ ₹1.2 Cr+' },
          { label: 'Projected cost of B.Tech + MBA (2030–2036)', value: '≈ ₹45–50 L' },
        ],
      },
      {
        heading: 'The maturity year, and the number we beat',
        paras: [
          'His daughter sits her boards in 2030. Education costs in India rise faster than general inflation, often 8–10% a year. A four-year private engineering degree in Gujarat that cost ₹8–10 lakh a decade ago is now quoted at ₹15–20 lakh, and a good MBA adds another ₹20–25 lakh. By the time she finishes, the full bill could be ₹45–50 lakh.',
          'We sized the plan honestly. The first year of college will be paid from the shop. The 2032 maturity, projected at ₹33–36 lakh, pays the remaining years of the degree and most of a postgraduate deposit. The rest will come from savings, an education loan or a scholarship.',
          'This is the sentence most agents will not say: a child education plan should make a defined share of the cost certain, not promise the whole dream. Its job is to make the big part guaranteed, so the rest is a challenge, not a cliff.',
        ],
      },
      {
        heading: 'The boring summary',
        paras: [
          'If money in your account keeps "forgetting" it belongs to your child’s future: (1) pick the milestone year first, then the maturity date, not the other way round; (2) pay the premium by auto-debit; (3) register the nominee; (4) put term cover on the earner, usually ₹1 crore or more, because the endowment’s own cover is too small to replace an income; (5) size the plan to a share of the projected cost at 8–10% education inflation. For a quote based on your child’s age and your income, call or WhatsApp +91 98240 25435. Free consultation at the Shela office, Monday to Saturday.',
        ],
        takeaway: [
          'Endowments like Jeevan Labh are discipline tools, not return champions (about 5–6% a year).',
          'Match the maturity year to the milestone year: 18 for an undergraduate degree, 22 for postgraduate.',
          'Size the plan to a defined share of education cost, assuming 8–10% education inflation.',
          'Pair it with term cover of ₹1 crore or more on the earner, the cheapest part of the plan.',
        ],
      },
    ],
    related: [
      { label: 'Child education plans', to: '/services/child-education' },
      { label: 'Endowment plans compared', to: '/services/wealth-creation' },
      { label: 'LIC advisor in South Bopal', to: '/areas/south-bopal' },
    ],
  },
  {
    slug: 'retirement-planning-ahmedabad-50s-checklist',
    title: 'Retirement planning at 50: the Satellite engineer who ran the numbers twice',
    seoTitle: 'Retirement Planning in Ahmedabad: 5-Step 50s Checklist',
    metaDescription:
      'Retirement planning in Ahmedabad: how a retired engineer split a ₹1.23 Cr corpus into pension, SCSS and reserves. The 5-number checklist. Free review: +91 98240 25435.',
    date: '2024-09-23',
    updated: '2026-10-11',
    readMinutes: 6,
    targetQuery: 'retirement planning Ahmedabad',
    sections: [
      {
        paras: [
          'Ramesh bhai retired as a senior engineer from a manufacturing plant near Naroda in 2023, at 58. Provident fund of about ₹92 lakh, gratuity of ₹20 lakh and an LIC maturity of ₹11 lakh: the settlement added up to ₹1.23 crore, more than he had ever held at once. His plan was simple: "Madam, I will manage. Monthly expenses are only thirty thousand."',
          'The money sat in his savings account for six months while he "decided". At 2.7% instead of the 7% a fixed deposit was paying, that cost him about ₹2.6 lakh. Then he came back to my Shela office with a diary. Page one listed the thirty thousand. Page two listed everything else: his wife’s knee medication, society maintenance that had doubled, the grandson’s school bus fee he had quietly offered to pay, and a roof repair the monsoon had forced on him. ₹47,000 a month. He had underestimated his own life by more than half.',
        ],
      },
      {
        heading: 'The five numbers before any product',
        paras: [
          'Retirement planning in Ahmedabad fails the same way every time: people shop for a plan before doing the arithmetic. So we do the arithmetic first, on one sheet of paper, in this order. One: true monthly expenses today, the diary version with medicines and maintenance included. Two: years after retirement. A 58-year-old in Gujarat should plan for 25-plus years, not 15. Three: guaranteed income already coming in. Four: the gap between expenses and guaranteed income, and how it grows at 6% a year. Five: the corpus that gap demands.',
          'For Ramesh bhai, guaranteed income was small. His EPS pension from the provident fund was ₹3,400 a month, and his second flat in Jodhpur earned ₹21,000 in rent. That left a gap of about ₹22,600 a month in today’s money. At a 6% annuity rate, covering it needs roughly ₹45 lakh, which his ₹1.23 crore could guarantee with plenty left over.',
        ],
        quote: {
          text: '"I spent thirty years calculating loads for machines. I never calculated the load of my own kitchen."',
          by: 'Ramesh bhai (name changed), retired engineer, Satellite',
        },
      },
      {
        heading: 'What we actually bought — and what we refused',
        paras: [
          'We put ₹50 lakh into LIC Jeevan Akshay VII with the joint-life option, so the pension continues for his wife, and return of purchase price, so the capital goes to their children. At the rate then, that pays about ₹26,000 a month, slightly above the gap. Each of them put ₹15 lakh into the Senior Citizens’ Savings Scheme at 8.2%, paying about ₹61,500 a quarter between them. That covers their health insurance premium and builds a reserve. ₹6 lakh, about a year of expenses, sits in a fixed deposit for shocks: a roof, a hospital admission, a grandson’s school admission. The remaining ₹37 lakh is in fixed deposits, set aside for a second annuity at 65, when six years of 6% inflation will have pushed expenses up by about 40%.',
          'We also refused two things: a new endowment plan at 58 ("your saving years are over; your income years have begun"), and any market-linked product for the gap money ("the gap is non-negotiable, so the money that covers it must be guaranteed").',
          'The pension arrives on the fifth of every month. His diary now has three columns: pension in, expenses out, balance for the grandson’s bus fee. He calls it his salary slip.',
        ],
        numbers: [
          { label: 'Retirement corpus (PF ₹92 L + gratuity ₹20 L + LIC maturity ₹11 L)', value: '₹1.23 Cr' },
          { label: 'Monthly expenses − guaranteed income (₹47,000 − ₹24,400)', value: '≈ ₹22,600 gap' },
          { label: 'Jeevan Akshay VII, joint life + return of purchase price', value: '₹50 L → ≈ ₹26,000/month' },
          { label: 'Senior Citizens’ Savings Scheme at 8.2% (₹15 L each)', value: '₹30 L → ≈ ₹61,500/quarter' },
          { label: 'Emergency fund (12 months of expenses)', value: '₹6 L' },
          { label: 'Reserve for a second annuity at 65', value: '₹37 L' },
        ],
        takeaway: [
          'Write the diary version of your expenses. Guesses undercount by 30–50%.',
          'Do not leave a retirement lump sum in a savings account "while deciding". Six months cost Ramesh bhai about ₹2.6 lakh.',
          'Plan for 25+ years after 58; many Ahmedabad families live past 85.',
          'Gap money must be guaranteed (an annuity), never market-linked.',
          'Plan a second annuity for later years, because expenses keep rising and the first pension does not.',
        ],
      },
      {
        heading: 'If you are 50-plus in Ahmedabad',
        paras: [
          'Do not wait for the farewell speech. If retirement is five to seven years away, the five numbers take one sitting and cost nothing. Call or WhatsApp +91 98240 25435 for a free retirement review at the Shela office or on a video call. Bring your EPF statement and a rough expense list; we will do the rest on one sheet of paper.',
          'And if you are 40, read this as a warning with a happy ending: the engineer who runs the numbers at 50 retires once. The one who guesses retires twice, the second time into his children’s budget.',
        ],
      },
    ],
    related: [
      { label: 'Retirement & pension plans compared', to: '/services/retirement' },
      { label: 'LIC advisor in Satellite', to: '/areas/satellite' },
      { label: 'Book a free consultation', to: '/contact' },
    ],
  },
];

export function getPost(slug: string | undefined): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
