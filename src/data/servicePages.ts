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
}

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
  /** Reuse another service's plan cards (services.ts id) for keyword/area pages. */
  productsFrom?: string;
  /** Process blocks. Rendered instead of plan cards when there are no products. */
  sections?: ServiceSection[];
  /** ISO date the page content was last verified against current LIC rules. */
  updated?: string;
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
    relatedPost: { label: 'Example: staff cover for an engineering unit in GIDC Vatva', to: '/services/business-insurance-gidc-vatva' },
  },
  {
    slug: 'business-insurance-gidc-vatva',
    productsFrom: 'corporate-insurance',
    title: 'Business Insurance in GIDC Vatva | Employer-Employee Cover',
    description:
      'Business insurance for units in GIDC Vatva, Ahmedabad: employer-employee LIC cover for staff, partnership and key-person insurance, MWP and HUF policies for owners. Free consultation: +91 98240 25435.',
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
  {
    slug: 'policy-review-claims',
    title: 'LIC Policy Review & Claim Help in Ahmedabad',
    description:
      'Already hold LIC policies? Free policy review in Ahmedabad — check cover, update nominees, revive lapsed policies, and get hands-on LIC claim assistance from Jigisha Kiran Shah.',
    keywords:
      'LIC policy review Ahmedabad, LIC claim assistance Ahmedabad, LIC death claim help, LIC maturity claim, revive lapsed LIC policy, change LIC nominee, LIC agent Shela',
    targetQuery: 'LIC policy review Ahmedabad',
    h1: 'LIC Policy Review & Claim Assistance in Ahmedabad',
    intro: [
      'Most families in Ahmedabad already own two or three LIC policies — bought years ago, from different agents, for different reasons. Few know their total cover, when each policy matures, or whether the nominee is still correct. A policy review answers those questions on one sheet of paper before you spend a rupee on anything new.',
      'When a claim is due — death, maturity or survival benefit — the outcome depends heavily on paperwork. Jigisha Kiran Shah helps families intimate the claim, assemble the right documents, and follow up with the branch. LIC makes the final decision on every claim; good preparation removes avoidable delays.',
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
    updated: '2026-10-26',
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
];

export function getServicePage(slug: string | undefined): ServicePageMeta | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}
