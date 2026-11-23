import { Link } from 'react-router-dom';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { InfiniteMovingCards } from './aceternity/InfiniteMovingCards';
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

const Testimonials = () => {
  const cards = testimonials.map((t) => (
    <article
      key={t.id}
      className="flex h-full w-[300px] sm:w-[360px] flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-emerald/50 hover:bg-white/[0.07]"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex gap-1" aria-label={`Rated ${t.rating} out of 5`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-emerald-bright text-emerald-bright" aria-hidden="true" />
          ))}
        </div>
        <Quote className="h-7 w-7 shrink-0 text-white/15" aria-hidden="true" />
      </div>

      <span className="mb-3 inline-block w-fit rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sage">
        {JOURNEY_LABEL[t.journeyType]}
      </span>

      <p className="mb-4 line-clamp-4 min-h-20 text-sm leading-relaxed text-white/75">
        &ldquo;{t.story}&rdquo;
      </p>

      <div className="mt-auto flex items-center gap-3.5 border-t border-white/10 pt-4">
        <div
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald text-sm font-bold text-white"
        >
          {initialsOf(t.clientName)}
        </div>
        <div className="min-w-0">
          <h4 className="truncate font-display text-base font-bold text-white">{t.clientName}</h4>
          <p className="truncate text-[11px] uppercase tracking-wider text-white/45">
            {t.location}
            <span aria-hidden="true"> · </span>
            {t.year}
          </p>
        </div>
      </div>
    </article>
  ));

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-ink pt-14 pb-14 text-white lg:pt-24 lg:pb-20"
    >
      <div className="container relative z-10 mb-7 lg:mb-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2
              id="testimonials-heading"
              className="font-display text-3xl font-extrabold tracking-tight leading-[1.05] text-white sm:text-4xl lg:text-[2.75rem]"
            >
              Relationships built on <span className="text-emerald-bright">trust.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
              For over two decades, thousands of families have kept the promises they made to each other — with Jigisha's help.
            </p>
          </div>

          <Link
            to="/reviews"
            data-cta="home-all-reviews"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold text-sage transition-all hover:gap-3 hover:text-white"
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
    </section>
  );
};

export default Testimonials;