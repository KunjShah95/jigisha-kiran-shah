/**
 * Contact links in one place. WhatsApp links carry a prefilled message that
 * names the page or service the visitor came from, so every enquiry arrives
 * with context ("Hi, I'm interested in term insurance…") instead of a blank chat.
 */
export const WHATSAPP_NUMBER = '919824025435';
export const WHATSAPP_DISPLAY = '+91 98240 25435';

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** Visitor objectives — shared by the objective picker, lead forms and WhatsApp prefill. */
export const OBJECTIVES = [
  { value: 'term', label: 'Protect my family if something happens to me (term insurance)', short: 'Family protection', to: '/services/term-insurance' },
  { value: 'review', label: 'Check the LIC policies I already have', short: 'Policy check-up', to: '/services/policy-review-claims' },
  { value: 'child', label: 'Save for my child’s education', short: 'Child education', to: '/services/child-education' },
  { value: 'retirement', label: 'Get a regular income after I retire (pension)', short: 'Retirement income', to: '/services/retirement' },
  { value: 'claim', label: 'Help with an LIC claim, nominee change or other paperwork', short: 'Claims & paperwork', to: '/services/policy-review-claims' },
  { value: 'business', label: 'Insurance for my business, partners or family firm', short: 'Business insurance', to: '/services/corporate-insurance' },
  { value: 'savings', label: 'Save money with life cover (savings plans)', short: 'Savings plans', to: '/services/wealth-creation' },
  { value: 'health', label: 'Health or cancer cover', short: 'Health cover', to: '/services/health-insurance' },
  { value: 'nri', label: 'LIC policy help from abroad (NRI)', short: 'Help from abroad', to: '/contact' },
] as const;

export type ObjectiveValue = (typeof OBJECTIVES)[number]['value'];

export function objectiveLabel(value: string) {
  return OBJECTIVES.find((o) => o.value === value)?.label ?? value;
}

/** Compact label for inline copy ("call you about term protection"). */
export function objectiveShortLabel(value: string) {
  return OBJECTIVES.find((o) => o.value === value)?.short ?? value;
}

export function objectiveWhatsAppText(value: string) {
  return `Hi Jigisha ben, I found you on your website. I'd like help with: ${objectiveLabel(value)}.`;
}

/** Prefill for generic chat buttons, based on the page the visitor is on. */
export function pageWhatsAppText(pathname: string) {
  const service = OBJECTIVES.find((o) => o.to !== '/contact' && pathname.startsWith(o.to));
  if (service) return objectiveWhatsAppText(service.value);
  if (pathname.startsWith('/services/business-insurance')) return objectiveWhatsAppText('business');
  if (pathname.startsWith('/areas/')) {
    const area = pathname.split('/')[2]?.replace(/-/g, ' ');
    return `Hi Jigisha ben, I found you on your website (${area} page). I'd like to discuss LIC insurance for my family.`;
  }
  if (pathname.startsWith('/blog/') || pathname.startsWith('/guides/')) {
    return 'Hi Jigisha ben, I was reading an article on your website and have a question.';
  }
  return "Hi Jigisha ben, I found you on your website. I'd like to book a free consultation.";
}
