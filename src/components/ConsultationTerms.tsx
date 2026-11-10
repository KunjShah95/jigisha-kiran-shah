import { BadgeIndianRupee } from 'lucide-react';

/**
 * What the free consultation costs, stated plainly. "Free consultation" on
 * its own reads like a sales trap; this answers the objection up front.
 *
 * Every line must stay true:
 * - The first consultation is about 20 minutes.
 * - LIC pays agents' commission; premiums are set by LIC, so a plan costs the
 *   same whichever LIC agent sells it. (Not "same as buying direct": some LIC
 *   plans, e.g. Tech Term, are sold online.)
 * - LIC's code of conduct requires agents to disclose commission if asked, and
 *   rules out pushing a surrender to sell a new policy.
 */
export const CONSULTATION_TERMS = [
  'The first consultation is free: about 20 minutes, by phone, WhatsApp video or at the Shela office.',
  'There is no fee for advice. If you buy a policy, LIC pays the commission; the premium is set by LIC and is the same whichever LIC agent you buy through.',
  'Ask, and she will tell you the commission on any plan she suggests.',
  'If nothing fits your needs, she will say so. She will never ask you to surrender a policy to buy a new one.',
];

export const CONSULTATION_TERMS_SHORT =
  'Free, no obligation. If you buy, LIC pays the commission; your premium is the same through any LIC agent.';

export default function ConsultationTerms({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-2xl bg-white border border-border p-5 ${className}`}>
      <h2 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gold-dark mb-3">
        <BadgeIndianRupee className="w-4 h-4" aria-hidden="true" /> What it costs, honestly
      </h2>
      <ul className="space-y-2 text-sm text-gray-700 leading-relaxed list-disc pl-5">
        {CONSULTATION_TERMS.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
