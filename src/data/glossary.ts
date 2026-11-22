/**
 * Plain-English glossary of LIC and life-insurance terms.
 *
 * Why this exists: the audit (docs/SEO-GEO-AEO-AUDIT.md §9) flagged a glossary
 * as a high-value open item, and the SEO + GEO guide this work follows says to
 * "define your terms" and write so a stranger can follow it. Each answer is
 * one or two short sentences that can be lifted into an AI answer on its own;
 * the example gives the reader something concrete to hold on to.
 *
 * Product names stay (people search for them), but the plain meaning comes
 * first. Definitions are deliberately general: exact conditions depend on the
 * policy document and current LIC rules, which are linked from the page.
 */
export interface GlossaryTerm {
  /** Anchor slug, e.g. "sum-assured" → /glossary#sum-assured */
  id: string;
  term: string;
  /** Answer-first: the meaning in one or two plain sentences. */
  answer: string;
  /** A concrete, non-promotional example or practical note. */
  example: string;
  /** Internal page or official source that explains the term in depth, where one exists. */
  href?: string;
}

export interface GlossaryGroup {
  id: string;
  title: string;
  intro: string;
  terms: GlossaryTerm[];
}

export const GLOSSARY: GlossaryGroup[] = [
  {
    id: 'the-basics',
    title: 'The basics: what a policy actually is',
    intro: 'Start here. These six words appear on every LIC policy document.',
    terms: [
      {
        id: 'policy',
        term: 'Policy',
        answer: 'A policy is the written contract between you and LIC. It states how long the cover lasts, how much you pay, what is paid out and the conditions attached.',
        example: 'Keep the original policy bond (or its digital copy) and share a photo with one family member, so they can find it if they need to claim.',
      },
      {
        id: 'policyholder',
        term: 'Policyholder (policy owner)',
        answer: 'The policyholder is the person who owns the policy and pays the premiums. They can be different from the person whose life is covered.',
        example: 'A father can own a policy on his own life and name his wife as nominee. His wife receives the money if he dies; he receives it at maturity if he survives.',
      },
      {
        id: 'life-assured',
        term: 'Life assured',
        answer: 'The life assured is the person whose life is insured. If that person dies while the policy is active, the death benefit is paid to the nominee.',
        example: 'On a child education policy the parent usually pays, the child is the life assured, and the parent is the policyholder.',
      },
      {
        id: 'sum-assured',
        term: 'Sum assured',
        answer: 'The sum assured is the fixed amount of cover written on the policy. It is not the total premium you pay and not the same as the maturity amount.',
        example: 'A policy with a ₹10 lakh sum assured does not mean you paid ₹10 lakh. It is the base amount LIC uses to work out the death benefit and, in some plans, the maturity benefit.',
        href: '/services/term-insurance',
      },
      {
        id: 'premium',
        term: 'Premium',
        answer: 'The premium is the amount you pay to keep the policy active. It can be paid yearly, half-yearly, quarterly or monthly, depending on the policy.',
        example: 'Missing a premium does not end the policy immediately — there is a grace period first. See "lapsed policy" below.',
        href: '/services/policy-review-claims',
      },
      {
        id: 'policy-term',
        term: 'Policy term',
        answer: 'The policy term is the number of years the contract runs. Cover is active during this period, provided premiums are paid.',
        example: 'A 20-year term plan taken at age 35 covers you up to age 55; the policy ends after that term unless it is a whole-life plan.',
      },
    ],
  },
  {
    id: 'what-you-get',
    title: 'What you get: benefits and payouts',
    intro: 'The words on the payout section of a policy document.',
    terms: [
      {
        id: 'death-benefit',
        term: 'Death benefit',
        answer: 'The death benefit is the amount paid to the nominee when the life assured dies while the policy is in force. In most LIC plans it is at least the sum assured, plus any bonuses that apply.',
        example: 'The exact figure depends on the plan, the policy term and whether all premiums were paid. Check the benefit clause in your own policy bond.',
        href: '/services/policy-review-claims',
      },
      {
        id: 'maturity-benefit',
        term: 'Maturity benefit',
        answer: 'The maturity benefit is the money paid to the policyholder who survives the policy term. Pure term plans have no maturity benefit; endowment, money-back and whole-life plans do.',
        example: 'A 15-year endowment policy usually pays out at the end of year 15 if all premiums were paid and the policy has not been surrendered.',
        href: '/services/wealth-creation',
      },
      {
        id: 'nominee',
        term: 'Nominee',
        answer: 'A nominee is the person named on the policy to receive the benefit. Registration is free and takes one form — do it on every policy you own.',
        example: 'A nominee is not automatically the legal heir. If there is no nomination, the claimant may need succession documents, which delays settlement.',
        href: '/services/nominee-change',
      },
      {
        id: 'bonus',
        term: 'Bonus',
        answer: 'A bonus is an extra amount added to a participating policy from the insurer\'s surplus. It is not fixed and is declared from year to year.',
        example: 'Two policies with the same sum assured can mature at different amounts if their bonus years differ. Only the bonus already declared is guaranteed.',
      },
      {
        id: 'guaranteed-benefit',
        term: 'Guaranteed benefit',
        answer: 'A guaranteed benefit is an amount the insurer promises to pay under the stated conditions. It does not depend on bonuses or fund performance.',
        example: 'Read the word "guaranteed" together with its condition — for example, "provided all premiums are paid regularly".',
      },
    ],
  },
  {
    id: 'types-of-cover',
    title: 'Types of cover',
    intro: 'The plan families you will see on LIC brochures.',
    terms: [
      {
        id: 'term-insurance',
        term: 'Term insurance',
        answer: 'Term insurance is pure life cover for a fixed number of years. It pays only on death during the term and has no savings or maturity payout.',
        example: 'It buys the most cover per rupee of premium, which is why it is usually the first policy a family with loans or young children should consider.',
        href: '/services/term-insurance',
      },
      {
        id: 'endowment-plan',
        term: 'Endowment plan',
        answer: 'An endowment plan combines life cover with savings. It pays a lump sum on maturity if you survive the term, and a death benefit if you do not.',
        example: 'Jeevan Labh and Jeevan Umang are LIC endowment-style plans. Plan features change, so check the current brochure before buying.',
        href: '/services/wealth-creation',
      },
      {
        id: 'money-back-plan',
        term: 'Money-back plan',
        answer: 'A money-back plan pays a percentage of the sum assured at regular intervals while the policy continues. The balance is paid at maturity, and death cover stays in force throughout.',
        example: 'Useful for a family that wants money back at known dates — school fees or a planned expense — without ending the cover.',
        href: '/services/money-back',
      },
      {
        id: 'whole-life-plan',
        term: 'Whole life plan',
        answer: 'A whole life plan covers the life assured for their whole life rather than a fixed short term. It typically pays out on death or at a very high age limit stated in the policy.',
        example: 'It is often chosen for legacy planning rather than for a specific milestone like a child\'s graduation.',
      },
      {
        id: 'ulip',
        term: 'ULIP (Unit Linked Insurance Plan)',
        answer: 'A ULIP combines life cover with an investment in funds. Part of your premium buys cover and part is invested, so the value moves with the market.',
        example: 'Because returns vary, ask for the fund charges and the projected values at more than one rate before you commit.',
      },
      {
        id: 'annuity',
        term: 'Annuity / pension plan',
        answer: 'An annuity plan turns a lump sum or series of premiums into a regular income that starts at a date you choose.',
        example: 'Jeevan Akshay VII is an immediate annuity option. Decide whether you want income for a fixed period or for life, and whether it should rise each year.',
        href: '/services/retirement',
      },
      {
        id: 'child-education-plan',
        term: 'Child education plan',
        answer: 'A child education plan is a savings-linked life policy timed to a child\'s milestones. It pays out around the years the child needs money for higher study.',
        example: 'A good plan covers a share of the likely cost, not the whole dream, and names the child as life assured with a parent as policyholder.',
        href: '/services/child-education',
      },
      {
        id: 'rider',
        term: 'Rider (add-on cover)',
        answer: 'A rider is an extra benefit attached to a base policy for an additional premium. Common examples are accident cover, critical illness cover and waiver of premium.',
        example: 'A rider ends when the base policy ends, so check that the base term is long enough for the protection you want.',
        href: '/services/health-insurance',
      },
    ],
  },
  {
    id: 'keeping-a-policy',
    title: 'Keeping a policy alive',
    intro: 'What happens when money or paperwork gets in the way.',
    terms: [
      {
        id: 'grace-period',
        term: 'Grace period',
        answer: 'The grace period is a short window after the due date in which you can still pay the premium without the policy lapsing. Cover continues during this window.',
        example: 'It is commonly 15 days for non-monthly policies and shorter for monthly ones — check the exact number in your policy document.',
      },
      {
        id: 'lapsed-policy',
        term: 'Lapsed policy',
        answer: 'A policy lapses when the premium stays unpaid beyond the grace period. Cover stops, and a death claim is not payable while the policy is lapsed.',
        example: 'A lapsed policy can often be revived rather than starting again. Do not surrender it without checking the revival option first.',
        href: '/services/lic-policy-revival',
      },
      {
        id: 'revival',
        term: 'Revival',
        answer: 'Revival restores a lapsed policy so the original cover and term continue. It usually means paying the missed premiums with interest and meeting the insurer\'s conditions.',
        example: 'Most LIC policies can be revived within a limited window after lapse — commonly around five years. Check your policy and act early; a revival while healthy is easier.',
        href: '/services/lic-policy-revival',
      },
      {
        id: 'paid-up-policy',
        term: 'Paid-up policy',
        answer: 'A paid-up policy is one where you stop paying premiums but the policy continues with a reduced sum assured. The cover is lower than the original, but it does not lapse.',
        example: 'It is an alternative to revival or surrender when you cannot afford the original premium and still want some cover.',
      },
      {
        id: 'surrender-value',
        term: 'Surrender value',
        answer: 'The surrender value is the amount LIC pays if you cancel a policy before maturity. It develops only after a few years of premiums and is usually well below the total premiums paid.',
        example: 'Surrendering early is a real financial loss. Ask for the current surrender value and compare it with revival or a paid-up option before deciding.',
        href: '/services/lic-surrender',
      },
      {
        id: 'policy-loan',
        term: 'Policy loan',
        answer: 'A policy loan is a loan against a policy\'s surrender value. The policy stays in force, but interest accrues and any unpaid amount is deducted from the final payout.',
        example: 'If the loan plus interest exceeds the amount due at maturity, the policy can lapse. Ask for the interest rate and repayment terms in writing.',
        href: '/services/lic-policy-loan',
      },
      {
        id: 'free-look-period',
        term: 'Free-look period',
        answer: 'The free-look period is a short window after receiving a new policy in which you can return it if it does not match what you were told. The premium is refunded subject to deductions and conditions.',
        example: 'It is usually 15 days from receiving the policy bond. Read the new policy in that time instead of filing it away unopened.',
      },
      {
        id: 'assignment',
        term: 'Assignment',
        answer: 'Assignment is the transfer of policy ownership to another person or organisation. It is often done when a policy is used as security for a loan.',
        example: 'After assignment, the new owner gives the instructions for the policy. The insurer must record the assignment for it to be valid.',
      },
    ],
  },
  {
    id: 'claims-and-money',
    title: 'Claims, tax and paperwork',
    intro: 'The words that matter most at the moment of a claim.',
    terms: [
      {
        id: 'claim-intimation',
        term: 'Claim intimation',
        answer: 'Claim intimation is telling LIC that a claim has happened. It starts the process and should be done as soon as possible after the death or at maturity.',
        example: 'Keep the policy number handy. Intimating early lets the branch send the right forms before documents are collected.',
        href: '/services/policy-review-claims',
      },
      {
        id: 'death-claim',
        term: 'Death claim',
        answer: 'A death claim is a request to pay the benefit after the life assured dies. LIC reviews the policy, the documents and the cause of death before deciding.',
        example: 'The claimant is usually the nominee. If there is no nomination, legal heir documents are needed and the claim takes longer.',
        href: '/guides/lic-claim-documents-checklist',
      },
      {
        id: 'maturity-claim',
        term: 'Maturity claim',
        answer: 'A maturity claim is the request to receive the maturity benefit when the policy term ends and the policyholder is alive.',
        example: 'Submit it near the maturity date with KYC and the original policy bond where required, so the payout is not delayed.',
        href: '/guides/lic-maturity-claim-process',
      },
      {
        id: 'kyc',
        term: 'KYC',
        answer: 'KYC means "Know Your Customer" — the identity documents a insurer must verify before paying a claim or transferring money.',
        example: 'Aadhaar, PAN, address proof and a bank account that matches the policy records are commonly requested. KYC mismatches are a frequent cause of delay.',
        href: '/services/lic-address-name-change',
      },
      {
        id: 'section-80c',
        term: 'Section 80C',
        answer: 'Section 80C of the Income Tax Act lets eligible taxpayers deduct premiums paid on qualifying life insurance from taxable income under the old tax regime.',
        example: 'The deduction has an overall annual limit and conditions. It is generally not available under the new tax regime — check the current rules with a tax adviser.',
        href: '/guides/lic-tax-benefit-80c-section-123',
      },
      {
        id: 'section-10-10d',
        term: 'Section 10(10D)',
        answer: 'Section 10(10D) can make life insurance maturity or death proceeds tax-free, subject to conditions such as the premium-to-sum-assured ratio and the policy date.',
        example: 'The conditions differ for policies issued after 1 April 2023. Do not assume a payout is tax-free; check the rule that applies to your policy year.',
        href: '/guides/lic-tax-benefit-80c-section-123',
      },
      {
        id: 'proposal-form',
        term: 'Proposal form',
        answer: 'The proposal form is the application you fill before a policy is issued. It asks for age, health, income, occupation and other facts the insurer uses to assess risk.',
        example: 'Answer it fully and honestly. A wrong answer can be used to reject a claim later, even years after the policy starts.',
      },
      {
        id: 'underwriting',
        term: 'Underwriting',
        answer: 'Underwriting is the insurer\'s assessment of how risky it is to cover you. It can lead to acceptance, a higher premium, extra conditions or rejection.',
        example: 'It is based on the proposal form, age, health history and sometimes a medical examination — not on the agent\'s word.',
      },
    ],
  },
  {
    id: 'people-and-bodies',
    title: 'People and organisations',
    intro: 'Who is who in the LIC world — and what the acronyms mean.',
    terms: [
      {
        id: 'lic-agent',
        term: 'LIC agent',
        answer: 'An LIC agent is an individual licensed by LIC to sell and service its policies. An agent is not an LIC employee, and policies are issued and claims decided by LIC of India.',
        example: 'Ask for the agent code and verify it on LIC\'s official portal. Jigisha Kiran Shah\'s agent code is 01379839.',
        href: '/about',
      },
      {
        id: 'lic-saathi',
        term: 'LIC Saathi',
        answer: 'LIC Saathi is LIC\'s official portal for its agents. An agent page there is a way to confirm that someone is a serving LIC agent.',
        example: 'Jigisha\'s official LIC agent page is linked from the About page and from this site\'s llms.txt file.',
        href: '/about',
      },
      {
        id: 'mdrt',
        term: 'MDRT',
        answer: 'MDRT stands for Million Dollar Round Table, an international association of life insurance and financial professionals. Membership is based on production, ethics and client service.',
        example: 'It is a professional association, not an LIC award and not a guarantee of how a policy will perform. Jigisha qualified in 2023 and 2024.',
        href: '/about',
      },
      {
        id: 'irdai',
        term: 'IRDAI',
        answer: 'IRDAI is the Insurance Regulatory and Development Authority of India — the regulator that oversees insurers and protects policyholders.',
        example: 'Policy rules, product approvals and grievance redressal all sit with the regulator, not with the agent.',
        href: 'https://irdai.gov.in/',
      },
      {
        id: 'bima-bharosa',
        term: 'Bima Bharosa',
        answer: 'Bima Bharosa is IRDAI\'s online grievance redressal platform. It is the official route for a complaint against an insurer or intermediary.',
        example: 'Try the insurer first, then use Bima Bharosa if the issue is not resolved. Keep the policy number and written record of your complaint.',
        href: 'https://bimabharosa.irdai.gov.in/',
      },
      {
        id: 'grievance-redressal-officer',
        term: 'Grievance Redressal Officer',
        answer: 'A Grievance Redressal Officer is the insurer\'s official contact for complaints that the usual customer service route has not resolved.',
        example: 'The name and contact details are on LIC\'s website and on your policy document — escalate there before going to the regulator.',
      },
    ],
  },
];

/** Flat list for schema and search. */
export const GLOSSARY_TERMS: GlossaryTerm[] = GLOSSARY.flatMap((group) => group.terms);

/** The eight questions most likely to be asked verbatim — used in FAQPage schema. */
export const GLOSSARY_FAQS: Array<{ q: string; a: string }> = [
  'sum-assured',
  'nominee',
  'lapsed-policy',
  'revival',
  'surrender-value',
  'maturity-benefit',
  'term-insurance',
  'policy-loan',
].flatMap((id) => {
  const t = GLOSSARY_TERMS.find((term) => term.id === id);
  return t ? [{ q: `What does ${t.term.toLowerCase()} mean in LIC?`, a: `${t.answer} ${t.example}` }] : [];
});
