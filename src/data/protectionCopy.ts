/**
 * Protection Check copy, English + Gujarati.
 * Gujarati is a first draft — have Jigisha read it before promoting the
 * Gujarati toggle (see docs/GROWTH-PLAYBOOK.md §6).
 */
export type Lang = 'en' | 'gu';

const en = {
  langToggle: 'ગુજરાતી',
  eyebrow: 'Free Protection Check',
  title: 'Is your family’s protection still enough?',
  intro:
    'Answer a few questions and see a plain-language estimate of what your family may need, with every assumption shown. About 3 minutes. No sign-up. Nothing is sent unless you choose to.',
  skipToBook: 'Already know you want to talk? Book a call directly',
  stepOf: (n: number, total: number) => `Step ${n} of ${total}`,
  back: 'Back',
  next: 'Next',
  seeReport: 'See my report',
  startOver: 'Start over',

  goalQ: 'What would you like to check?',
  goals: {
    family: { title: 'Protect my family’s income', hint: 'How much life cover would they need?' },
    child: { title: 'Fund my child’s education', hint: 'What will college cost, and is it protected?' },
    retirement: { title: 'Plan retirement income', hint: 'How big a corpus, and how much to save?' },
    review: { title: 'Review my existing policies', hint: 'Is my current cover still right?' },
  },

  aboutQ: 'About you',
  age: 'Your age',
  dependants: 'Who depends on your income?',
  dependantOptions: ['Only me', '1 person', '2 people', '3 people', '4 or more'],
  income: 'Your annual income',
  expenses: 'Monthly household expenses',
  expensesHint: 'Rent/EMI excluded — loans go in the next step.',

  haveQ: 'What you have and what you owe',
  loans: 'Loans outstanding (home, car, business)',
  existingCover: 'Existing life cover (sum assured, all policies)',
  existingCoverHint: 'Not sure? Leave it 0 — finding this out is part of a review.',
  savings: 'Savings & investments you could use (FD, MF, shares)',

  goalStepQ: 'A few goal details',
  supportYears: 'Years your family would need income support',
  supportYearsHint: 'Until the youngest child is independent, or your spouse’s retirement.',
  childAge: 'Child’s age today',
  eduCost: 'Education cost in today’s money',
  eduCostHint: 'e.g. ₹25 L for engineering in India, ₹60 L+ for study abroad.',
  retireAge: 'Age you want to retire',
  retireMonthly: 'Monthly income you want in retirement (today’s money)',
  retireSavings: 'Already saved for retirement (PF, NPS, policies)',
  reviewQ: 'Tick what is true for you',
  reviewItems: {
    knowCover: 'I know the total life cover across all my policies',
    nominees: 'Nominees are updated on every policy',
    noLapsed: 'None of my policies have lapsed',
    knowMaturity: 'I know when each policy matures and what it pays',
    affordable: 'Premiums are comfortable for my budget today',
    mwp: 'My loans are covered so the family would not inherit them',
  },

  lakh: 'L',
  yrs: 'yrs',
  perMonth: '/month',

  reportTitle: 'Your preliminary report',
  reportIntro: 'An educational estimate from your answers — not a recommendation of any plan.',
  gapLabel: 'Estimated life-cover gap',
  noGap: 'On these numbers, your current cover and savings meet the estimated need.',
  needLabel: 'Estimated total need',
  breakdown: 'How we got this',
  lines: {
    expenses: 'Household expenses for the support period (inflation-adjusted, in today’s money)',
    loans: 'Loans to be cleared',
    education: 'Child’s education goal (today’s value)',
    existingCover: 'Less: existing life cover',
    savings: 'Less: savings & investments',
  },
  childTitle: 'Child education goal',
  childFuture: (yrs: number) => `Estimated cost in ${yrs} years`,
  childMonthly: 'Monthly saving to reach it',
  childProtect: 'Cover needed so the goal survives without you',
  retTitle: 'Retirement goal',
  retMonthlyAt: (yrs: number) => `Monthly income needed in ${yrs} years (same lifestyle)`,
  retCorpus: 'Corpus needed at retirement',
  retHave: 'Your savings may grow to',
  retShortfall: 'Shortfall',
  retMonthly: 'Monthly saving to close it',
  reviewTitle: 'Points to review',
  reviewAllGood: 'Good habits — an annual check still catches bonus, nominee and rule changes.',
  missingTitle: 'We need a little more to estimate this',
  missing: {
    age: 'your age',
    monthlyExpenses: 'monthly household expenses',
    educationCostToday: 'today’s education cost',
    retirementMonthlyToday: 'monthly retirement income wanted',
    retireAge: 'a retirement age above your current age',
  },

  assumptionsTitle: 'Assumptions (you can change them)',
  inflation: 'Inflation',
  eduInflation: 'Education inflation',
  returnRate: 'Return on savings',
  lifeExpectancy: 'Plan income until age',
  assumptionsNote:
    'Returns are assumptions, not guarantees. Real policy benefits depend on the plan, term, bonus declarations and LIC’s terms.',

  questionsTitle: 'Questions to bring to your consultation',
  questions: {
    family: [
      'Is term cover, an endowment-style plan, or a mix right for my budget?',
      'Should my home loan be protected separately (MWP Act / loan cover)?',
      'Are my nominees and policy documents in order?',
    ],
    child: [
      'How do I protect this goal if something happens to me?',
      'What mix of savings and insurance suits a goal this many years away?',
      'Which existing policies could be pointed at this goal?',
    ],
    retirement: [
      'How do I turn the corpus into a monthly pension that lasts?',
      'What happens to my spouse’s income if I go first?',
      'Which existing policies mature before or after retirement?',
    ],
    review: [
      'What is my real total cover across all policies today?',
      'Can any lapsed policy be revived, and is it worth it?',
      'Are bonuses, maturity dates and nominees correct on each policy?',
    ],
  },

  ctaTitle: 'Go through this with Jigisha',
  ctaBody:
    '22+ years as an LIC advisor in Ahmedabad. A free first consultation turns this estimate into a personal plan — and checks your existing policies.',
  ctaBook: 'Book a free consultation',
  ctaWhatsApp: 'Send this summary on WhatsApp',
  callbackTitle: 'Or ask for a call back',
  callbackBody: 'Shares your goal and the figures above with Jigisha. Nothing else.',
  name: 'Name',
  phone: 'Phone',
  callbackSend: 'Request a call back',
  callbackSent: 'Thank you — Jigisha will call you back, Mon–Sat 9 AM–6 PM.',
  callbackFailed: 'Could not send right now. Please use WhatsApp or call +91 98240 25435.',

  disclaimer:
    'This tool is for education only. It is not financial advice and does not recommend any specific policy. Insurance is the subject matter of solicitation. Please don’t enter policy numbers, PAN, Aadhaar, bank or medical details.',
};

export type Copy = typeof en;

const gu: Copy = {
  ...en,
  langToggle: 'English',
  eyebrow: 'મફત પ્રોટેક્શન ચેક',
  title: 'શું તમારા પરિવારનું સુરક્ષા કવચ હજી પૂરતું છે?',
  intro:
    'થોડા પ્રશ્નોના જવાબ આપો અને સરળ ભાષામાં જુઓ કે તમારા પરિવારને કેટલી જરૂર પડી શકે — દરેક ધારણા સાથે. લગભગ 3 મિનિટ. કોઈ સાઇન-અપ નહીં. તમે ન ઇચ્છો ત્યાં સુધી કંઈ મોકલાતું નથી.',
  skipToBook: 'સીધી વાત કરવી છે? કૉલ બુક કરો',
  stepOf: (n, total) => `પગલું ${n} / ${total}`,
  back: 'પાછળ',
  next: 'આગળ',
  seeReport: 'મારો રિપોર્ટ જુઓ',
  startOver: 'ફરી શરૂ કરો',

  goalQ: 'તમે શું ચેક કરવા માંગો છો?',
  goals: {
    family: { title: 'પરિવારની આવકનું રક્ષણ', hint: 'તેમને કેટલા લાઇફ કવરની જરૂર પડે?' },
    child: { title: 'બાળકના શિક્ષણનું આયોજન', hint: 'કૉલેજનો ખર્ચ કેટલો, અને શું તે સુરક્ષિત છે?' },
    retirement: { title: 'નિવૃત્તિ આવકનું આયોજન', hint: 'કેટલું ભંડોળ, અને કેટલી બચત?' },
    review: { title: 'મારી હાલની પૉલિસીની સમીક્ષા', hint: 'શું મારું હાલનું કવર હજી યોગ્ય છે?' },
  },

  aboutQ: 'તમારા વિશે',
  age: 'તમારી ઉંમર',
  dependants: 'તમારી આવક પર કોણ આધાર રાખે છે?',
  dependantOptions: ['ફક્ત હું', '1 વ્યક્તિ', '2 વ્યક્તિ', '3 વ્યક્તિ', '4 કે વધુ'],
  income: 'તમારી વાર્ષિક આવક',
  expenses: 'ઘરનો માસિક ખર્ચ',
  expensesHint: 'ભાડું/EMI સિવાય — લોન આગળના પગલામાં.',

  haveQ: 'તમારી પાસે શું છે અને શું બાકી છે',
  loans: 'બાકી લોન (ઘર, કાર, વ્યવસાય)',
  existingCover: 'હાલનું લાઇફ કવર (બધી પૉલિસીનું સમ એશ્યોર્ડ)',
  existingCoverHint: 'ખબર નથી? 0 રાખો — એ જાણવું સમીક્ષાનો ભાગ છે.',
  savings: 'ઉપયોગમાં લઈ શકાય તેવી બચત અને રોકાણ (FD, MF, શેર)',

  goalStepQ: 'લક્ષ્યની થોડી વિગતો',
  supportYears: 'પરિવારને કેટલાં વર્ષ આવકના સહારાની જરૂર પડે',
  supportYearsHint: 'સૌથી નાનું બાળક પગભર થાય ત્યાં સુધી, અથવા જીવનસાથીની નિવૃત્તિ સુધી.',
  childAge: 'બાળકની હાલની ઉંમર',
  eduCost: 'આજના ભાવે શિક્ષણનો ખર્ચ',
  eduCostHint: 'દા.ત. ભારતમાં એન્જિનિયરિંગ માટે ₹25 L, વિદેશ અભ્યાસ માટે ₹60 L+.',
  retireAge: 'કઈ ઉંમરે નિવૃત્ત થવું છે',
  retireMonthly: 'નિવૃત્તિમાં માસિક આવક (આજના ભાવે)',
  retireSavings: 'નિવૃત્તિ માટે અત્યાર સુધીની બચત (PF, NPS, પૉલિસી)',
  reviewQ: 'તમારા માટે જે સાચું હોય તેના પર ટિક કરો',
  reviewItems: {
    knowCover: 'મને મારી બધી પૉલિસીનું કુલ લાઇફ કવર ખબર છે',
    nominees: 'દરેક પૉલિસીમાં નૉમિની અપડેટ છે',
    noLapsed: 'મારી કોઈ પૉલિસી લૅપ્સ થઈ નથી',
    knowMaturity: 'મને ખબર છે કે દરેક પૉલિસી ક્યારે પાકે છે અને કેટલું મળશે',
    affordable: 'પ્રીમિયમ આજે મારા બજેટમાં આરામથી બેસે છે',
    mwp: 'મારી લોન કવર છે, જેથી પરિવારને તે ભરવી ન પડે',
  },

  perMonth: '/મહિને',
  yrs: 'વર્ષ',

  reportTitle: 'તમારો પ્રાથમિક રિપોર્ટ',
  reportIntro: 'તમારા જવાબો પરથી શૈક્ષણિક અંદાજ — કોઈ પ્લાનની ભલામણ નથી.',
  gapLabel: 'અંદાજિત લાઇફ-કવર ગેપ',
  noGap: 'આ આંકડા મુજબ, તમારું હાલનું કવર અને બચત અંદાજિત જરૂરિયાત પૂરી કરે છે.',
  needLabel: 'અંદાજિત કુલ જરૂરિયાત',
  breakdown: 'આ આંકડો કેવી રીતે આવ્યો',
  lines: {
    expenses: 'સહારાના સમયગાળા માટે ઘરખર્ચ (મોંઘવારી ગણીને, આજના મૂલ્યમાં)',
    loans: 'ચૂકવવાની લોન',
    education: 'બાળકના શિક્ષણનું લક્ષ્ય (આજનું મૂલ્ય)',
    existingCover: 'બાદ: હાલનું લાઇફ કવર',
    savings: 'બાદ: બચત અને રોકાણ',
  },
  childTitle: 'બાળકના શિક્ષણનું લક્ષ્ય',
  childFuture: (yrs) => `${yrs} વર્ષ પછી અંદાજિત ખર્ચ`,
  childMonthly: 'તે માટે માસિક બચત',
  childProtect: 'તમારી ગેરહાજરીમાં પણ લક્ષ્ય પૂરું થાય તે માટે કવર',
  retTitle: 'નિવૃત્તિ લક્ષ્ય',
  retMonthlyAt: (yrs) => `${yrs} વર્ષ પછી જરૂરી માસિક આવક (એ જ જીવનશૈલી માટે)`,
  retCorpus: 'નિવૃત્તિ સમયે જરૂરી ભંડોળ',
  retHave: 'તમારી બચત આટલી થઈ શકે',
  retShortfall: 'ખૂટતી રકમ',
  retMonthly: 'તે પૂરી કરવા માસિક બચત',
  reviewTitle: 'સમીક્ષાના મુદ્દા',
  reviewAllGood: 'સારી ટેવો — છતાં વાર્ષિક ચેકથી બોનસ, નૉમિની અને નિયમોના ફેરફાર પકડાય છે.',
  missingTitle: 'અંદાજ માટે થોડી વધુ માહિતી જોઈએ',
  missing: {
    age: 'તમારી ઉંમર',
    monthlyExpenses: 'ઘરનો માસિક ખર્ચ',
    educationCostToday: 'આજનો શિક્ષણ ખર્ચ',
    retirementMonthlyToday: 'નિવૃત્તિમાં જોઈતી માસિક આવક',
    retireAge: 'હાલની ઉંમર કરતાં વધુ નિવૃત્તિ ઉંમર',
  },

  assumptionsTitle: 'ધારણાઓ (તમે બદલી શકો છો)',
  inflation: 'મોંઘવારી',
  eduInflation: 'શિક્ષણ મોંઘવારી',
  returnRate: 'બચત પર વળતર',
  lifeExpectancy: 'આ ઉંમર સુધી આવક',
  assumptionsNote:
    'વળતર ધારણા છે, ગેરંટી નથી. પૉલિસીના વાસ્તવિક લાભ પ્લાન, મુદત, બોનસ જાહેરાત અને LICની શરતો પર આધાર રાખે છે.',

  questionsTitle: 'કન્સલ્ટેશનમાં પૂછવાના પ્રશ્નો',
  questions: {
    family: [
      'મારા બજેટ માટે ટર્મ કવર, એન્ડોવમેન્ટ પ્રકારનો પ્લાન કે બંનેનું મિશ્રણ યોગ્ય છે?',
      'શું મારી હોમ લોન અલગથી સુરક્ષિત કરવી જોઈએ (MWP એક્ટ / લોન કવર)?',
      'શું મારા નૉમિની અને પૉલિસી દસ્તાવેજો બરાબર છે?',
    ],
    child: [
      'મને કંઈ થાય તો આ લક્ષ્ય કેવી રીતે સુરક્ષિત રહે?',
      'આટલાં વર્ષ દૂરના લક્ષ્ય માટે બચત અને વીમાનું કયું મિશ્રણ યોગ્ય?',
      'મારી કઈ હાલની પૉલિસી આ લક્ષ્ય માટે વાપરી શકાય?',
    ],
    retirement: [
      'ભંડોળને ટકાઉ માસિક પેન્શનમાં કેવી રીતે ફેરવવું?',
      'હું પહેલાં જાઉં તો જીવનસાથીની આવકનું શું?',
      'મારી કઈ પૉલિસી નિવૃત્તિ પહેલાં કે પછી પાકે છે?',
    ],
    review: [
      'આજે બધી પૉલિસી મળીને મારું ખરું કુલ કવર કેટલું છે?',
      'કોઈ લૅપ્સ પૉલિસી ફરી ચાલુ થઈ શકે, અને તે યોગ્ય છે?',
      'દરેક પૉલિસીમાં બોનસ, પાકતી તારીખ અને નૉમિની સાચાં છે?',
    ],
  },

  ctaTitle: 'જીગીશાબેન સાથે આ સમજો',
  ctaBody:
    'અમદાવાદમાં LIC સલાહકાર તરીકે 22+ વર્ષ. મફત પ્રથમ કન્સલ્ટેશનમાં આ અંદાજ તમારા પોતાના પ્લાનમાં ફેરવાય છે — અને હાલની પૉલિસી પણ ચેક થાય છે.',
  ctaBook: 'મફત કન્સલ્ટેશન બુક કરો',
  ctaWhatsApp: 'આ સારાંશ WhatsApp પર મોકલો',
  callbackTitle: 'અથવા કૉલ બેક માંગો',
  callbackBody: 'તમારું લક્ષ્ય અને ઉપરના આંકડા જ જીગીશાબેનને મોકલાશે. બીજું કંઈ નહીં.',
  name: 'નામ',
  phone: 'ફોન',
  callbackSend: 'કૉલ બેક માંગો',
  callbackSent: 'આભાર — જીગીશાબેન તમને કૉલ કરશે, સોમ–શનિ સવારે 9 થી સાંજે 6.',
  callbackFailed: 'હમણાં મોકલી શકાયું નથી. કૃપા કરી WhatsApp કરો અથવા +91 98240 25435 પર કૉલ કરો.',

  disclaimer:
    'આ સાધન ફક્ત માહિતી માટે છે. તે નાણાકીય સલાહ નથી અને કોઈ ચોક્કસ પૉલિસીની ભલામણ કરતું નથી. વીમો આગ્રહનો વિષય છે. કૃપા કરી પૉલિસી નંબર, PAN, આધાર, બેંક કે મેડિકલ વિગતો દાખલ કરશો નહીં.',
};

export const COPY: Record<Lang, Copy> = { en, gu };
