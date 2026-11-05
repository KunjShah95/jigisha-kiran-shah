import { Link } from 'react-router-dom';
import { Quote, Star, ArrowRight, BadgeCheck, ShieldCheck, Users, Landmark, Clock, Award } from 'lucide-react';
import { InfiniteMovingCards } from './aceternity/InfiniteMovingCards';
import { GridPattern } from './aceternity/GridPattern';
import { testimonials } from '../data/testimonials';
import type { JourneyType } from '../types';

const JOURNEY_LABEL: Record<JourneyType, string> = {
  education: 'Child Education',
  retirement: 'Retirement & Pension',
  claim: 'Claim Support',
  investment: 'Wealth & Whole Life',
  protection: 'Term Protection',
};

/** Drops honorifics so "Dr. Hemant Joshi" → "HJ", "The Desai Family" → "DF". */
function initialsOf(name: string) {
  return name
    .replace(/^(Dr\.?|Mr\.?|Mrs\.?|Ms\.?)\s+/i, '')
    .replace(/^The\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

/** Verifiable proof points, not vanity counts. Stated once, here and in the hero. */
const TRUST_POINTS = [
  { icon: Star, label: '5.0★ on Google', detail: '70+ reviews' },
  { icon: Award, label: '2× MDRT', detail: '2023 & 2024' },
  { icon: Clock, label: '22+ years', detail: 'since 2004' },
  { icon: Users, label: '2,700+ families', detail: 'advised' },
  { icon: ShieldCheck, label: '1,000+ claims', detail: 'supported to settlement' },
  { icon: BadgeCheck, label: 'IRDAI licensed', detail: 'LIC agent' },
  { icon: Landmark, label: 'Shela office', detail: 'Orchid Legacy D3-1303' },
];

const Testimonials = () => {
  const cards = testimonials.map((t) => (
    <article
      key={t.id}
      className="flex h-full w-[300px] sm:w-[360px] flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-gold/30 hover:bg-white/[0.06]"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex gap-1" aria-label={`Rated ${t.rating} out of 5`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
          ))}
        </div>
        <Quote className="h-7 w-7 shrink-0 text-gold/20" aria-hidden="true" />
      </div>

      <span className="mb-3 inline-block w-fit rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
        {JOURNEY_LABEL[t.journeyType]}
      </span>

      <p className="mb-4 line-clamp-4 min-h-20 text-sm font-light italic leading-relaxed text-gray-300">
        &ldquo;{t.story}&rdquo;
      </p>

      <div className="mt-auto flex items-center gap-3.5 border-t border-white/10 pt-4">
        <div
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-gold to-gold-dark text-sm font-bold text-midnight shadow-lg"
        >
          {initialsOf(t.clientName)}
        </div>
        <div className="min-w-0">
          <h4 className="truncate font-display text-base text-white">{t.clientName}</h4>
          <p className="truncate text-[11px] uppercase tracking-wider text-gray-500">
            {t.location}
            <span aria-hidden="true"> · </span>
            {t.year}
          </p>
        </div>
      </div>
    </article>
  ));

  const trustChips = TRUST_POINTS.map(({ icon: Icon, label, detail }) => (
    <div
      key={label}
      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
    >
      <Icon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
      <div className="whitespace-nowrap">
        <span className="block text-sm font-bold leading-tight text-white">{label}</span>
        <span className="block text-[11px] leading-tight text-gray-500">{detail}</span>
      </div>
    </div>
  ));

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-midnight pt-16 pb-14 text-white lg:pt-28 lg:pb-24"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <GridPattern
          size={72}
          className="text-white/[0.06] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,black_25%,transparent_80%)]"
        />
        <div className="absolute -top-1/3 right-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/4 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mb-7 lg:mb-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              Client stories
            </p>
            <h2
              id="testimonials-heading"
              className="mb-3 font-display text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl"
            >
              Relationships built on <span className="italic text-gold">trust</span>
            </h2>
            <p className="max-w-xl text-sm font-light leading-relaxed text-gray-300 sm:text-base lg:text-lg">
              For over two decades we have been the quiet custodians of thousands of families,
              keeping the promises they made to each other.
            </p>
          </div>

          <Link
            to="/reviews"
            data-cta="home-all-reviews"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold text-gold transition-all hover:gap-3"
          >
            Read all 70+ reviews
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Continuous marquee — pauses on hover/focus so a card can be read in place */}
      <div className="relative z-10">
        <InfiniteMovingCards
          items={cards}
          direction="left"
          durationSec={78}
          itemClassName="gap-4 pr-4"
        />
      </div>

      {/* Proof strip drifting the other way: credentials a competitor can't copy */}
      <div className="relative z-10 mt-8 lg:mt-10">
        <InfiniteMovingCards
          items={trustChips}
          direction="right"
          durationSec={44}
          itemClassName="gap-3 pr-3"
        />
      </div>
    </section>
  );
};

export default Testimonials;
