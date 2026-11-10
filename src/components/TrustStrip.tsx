import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

/**
 * Proof placed right beside a WhatsApp / booking CTA. Every figure here must
 * match the claims used elsewhere (Hero PROOF, lib/seo.ts, lib/llms.ts).
 */
export default function TrustStrip({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  const text = dark ? 'text-white/70' : 'text-gray-600';
  const sep = dark ? 'text-white/30' : 'text-gray-300';
  return (
    <p className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs ${text} ${className}`}>
      <Link to="/reviews" className="inline-flex items-center gap-1.5 font-semibold hover:text-gold-dark">
        <span className="flex gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-gold text-gold" />
          ))}
        </span>
        5.0 on Google
      </Link>
      <span className={sep} aria-hidden="true">·</span>
      <span>2,700+ families</span>
      <span className={sep} aria-hidden="true">·</span>
      <span>22+ years</span>
      <span className={sep} aria-hidden="true">·</span>
      <span>2× MDRT</span>
    </p>
  );
}
