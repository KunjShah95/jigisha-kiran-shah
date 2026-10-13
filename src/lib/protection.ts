/**
 * Protection Check — deterministic, educational estimates.
 *
 * Every number on the report comes from these functions, never from a model.
 * Inputs are in rupees per year (or lakhs where noted by the UI); rates are
 * decimals. Defaults are deliberately conservative and the report shows all
 * of them, so a visitor (or Jigisha) can see exactly how a figure was reached.
 */

export type CheckGoal = 'family' | 'child' | 'retirement' | 'review';

export interface Assumptions {
  /** General inflation on household expenses */
  inflation: number;
  /** Education-cost inflation (runs well above CPI in India) */
  eduInflation: number;
  /** Long-run pre-tax return assumed on savings and the cover payout */
  returnRate: number;
  /** Age up to which retirement income must last */
  lifeExpectancy: number;
}

export const DEFAULT_ASSUMPTIONS: Assumptions = {
  inflation: 0.06,
  eduInflation: 0.08,
  returnRate: 0.07,
  lifeExpectancy: 85,
};

export interface CheckInputs {
  goal: CheckGoal;
  age: number;
  /** Children + other dependants (spouse/parents). 0 = only me. */
  dependants: number;
  annualIncome: number;
  monthlyExpenses: number;
  loans: number;
  existingCover: number;
  savings: number;
  /** Years the family needs income support if the earner is not there. */
  supportYears: number;
  childAge: number;
  /** Today's cost of the education goal (college / abroad etc.) */
  educationCostToday: number;
  retireAge: number;
  /** Monthly income wanted in retirement, in today's rupees */
  retirementMonthlyToday: number;
  /** Already set aside for retirement (PF, NPS, policies' expected maturity) */
  retirementSavings: number;
}

/** Present value of an annual payment that grows with inflation, paid at the start of each year. */
export function growingAnnuityPV(firstPayment: number, years: number, growth: number, rate: number) {
  if (years <= 0 || firstPayment <= 0) return 0;
  const q = (1 + growth) / (1 + rate);
  if (Math.abs(q - 1) < 1e-9) return firstPayment * years;
  return firstPayment * ((1 - q ** years) / (1 - q));
}

/** Monthly saving needed to reach a future amount, with monthly compounding. */
export function monthlySavingFor(target: number, years: number, rate: number) {
  if (target <= 0) return 0;
  const n = Math.round(years * 12);
  if (n <= 0) return target;
  const i = rate / 12;
  return (target * i) / ((1 + i) ** n - 1);
}

export function futureValue(amount: number, years: number, rate: number) {
  return amount * (1 + rate) ** Math.max(0, years);
}

export interface Line {
  key: string;
  amount: number;
  /** add to the need, or subtract (existing resources) */
  sign: 1 | -1;
}

export interface FamilyResult {
  lines: Line[];
  need: number;
  gap: number;
}

/**
 * Needs-based life cover: what the family would need if the earner's income
 * stopped today — future household expenses for the support period, loans,
 * the education goal — minus cover and savings already in place.
 */
export function familyProtection(inp: CheckInputs, a: Assumptions): FamilyResult {
  const expenses = growingAnnuityPV(inp.monthlyExpenses * 12, inp.supportYears, a.inflation, a.returnRate);
  const education = inp.goal === 'child' || inp.educationCostToday > 0 ? educationPV(inp, a) : 0;
  const lines: Line[] = [
    { key: 'expenses', amount: expenses, sign: 1 },
    { key: 'loans', amount: inp.loans, sign: 1 },
    { key: 'education', amount: education, sign: 1 },
    { key: 'existingCover', amount: inp.existingCover, sign: -1 },
    { key: 'savings', amount: inp.savings, sign: -1 },
  ];
  const need = expenses + inp.loans + education;
  const gap = Math.max(0, need - inp.existingCover - inp.savings);
  return { lines: lines.filter((l) => l.amount > 0), need, gap };
}

function yearsToCollege(childAge: number) {
  return Math.max(0, 18 - childAge);
}

/** Today's lump sum that, invested, covers the inflated education cost. */
function educationPV(inp: CheckInputs, a: Assumptions) {
  const yrs = yearsToCollege(inp.childAge);
  const future = futureValue(inp.educationCostToday, yrs, a.eduInflation);
  return future / (1 + a.returnRate) ** yrs;
}

export interface ChildResult {
  yearsToGoal: number;
  futureCost: number;
  monthlySaving: number;
  /** Lump sum the family would need today if the parent were not there */
  protectionNeeded: number;
}

export function childEducation(inp: CheckInputs, a: Assumptions): ChildResult {
  const yearsToGoal = yearsToCollege(inp.childAge);
  const futureCost = futureValue(inp.educationCostToday, yearsToGoal, a.eduInflation);
  return {
    yearsToGoal,
    futureCost,
    monthlySaving: monthlySavingFor(futureCost, yearsToGoal, a.returnRate),
    protectionNeeded: educationPV(inp, a),
  };
}

export interface RetirementResult {
  yearsToRetire: number;
  yearsInRetirement: number;
  monthlyAtRetirement: number;
  corpusNeeded: number;
  savingsAtRetirement: number;
  shortfall: number;
  monthlySaving: number;
}

/**
 * Corpus that funds an inflation-linked income from retirement to life
 * expectancy, less what current savings grow to by then.
 */
export function retirement(inp: CheckInputs, a: Assumptions): RetirementResult {
  const yearsToRetire = Math.max(0, inp.retireAge - inp.age);
  const yearsInRetirement = Math.max(0, a.lifeExpectancy - Math.max(inp.retireAge, inp.age));
  const monthlyAtRetirement = futureValue(inp.retirementMonthlyToday, yearsToRetire, a.inflation);
  const corpusNeeded = growingAnnuityPV(monthlyAtRetirement * 12, yearsInRetirement, a.inflation, a.returnRate);
  const savingsAtRetirement = futureValue(inp.retirementSavings, yearsToRetire, a.returnRate);
  const shortfall = Math.max(0, corpusNeeded - savingsAtRetirement);
  return {
    yearsToRetire,
    yearsInRetirement,
    monthlyAtRetirement,
    corpusNeeded,
    savingsAtRetirement,
    shortfall,
    monthlySaving: monthlySavingFor(shortfall, yearsToRetire, a.returnRate),
  };
}

/** Which inputs are missing for a meaningful estimate — shown instead of guessing. */
export function missingInputs(inp: CheckInputs): string[] {
  const m: string[] = [];
  if (!inp.age) m.push('age');
  if (inp.goal !== 'retirement' && !inp.monthlyExpenses) m.push('monthlyExpenses');
  if (inp.goal === 'child' && !inp.educationCostToday) m.push('educationCostToday');
  if (inp.goal === 'retirement' && !inp.retirementMonthlyToday) m.push('retirementMonthlyToday');
  if (inp.goal === 'retirement' && inp.retireAge <= inp.age) m.push('retireAge');
  return m;
}

/** Rupees → compact Indian format (₹1.80 Cr / ₹15.2 L / ₹8,500). */
export function formatINR(n: number) {
  const v = Math.round(n);
  if (v >= 1e7) return `₹${(v / 1e7).toFixed(2)} Cr`;
  if (v >= 1e5) return `₹${(v / 1e5).toFixed(1)} L`;
  return `₹${v.toLocaleString('en-IN')}`;
}
