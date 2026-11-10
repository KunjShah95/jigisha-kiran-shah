import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MessageCircle, Phone, Video, MapPin, Check, ShieldCheck } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Field, SelectField, INTEREST_OPTIONS, inputClass, optionLabel, leadMessage, ConsentNote, TIME_OPTIONS } from '../components/lead-fields';
import { whatsappUrl } from '../lib/contact';
import { trackEvent } from '../lib/analytics';
import ConsultationTerms from '../components/ConsultationTerms';
import TrustStrip from '../components/TrustStrip';

/**
 * Booking goes straight to WhatsApp (wa.me) — no calendar embed.
 * Vercel Analytics (first year): 10 visitors started booking, 5 saw the
 * Cal.com calendar, 0 completed; meanwhile 9 tapped WhatsApp directly. So the
 * form below just composes a WhatsApp message and opens the chat; Jigisha
 * confirms the exact time there. No phone field: WhatsApp already shows it.
 */

const DAY_OPTIONS = [
  { value: 'weekday', label: 'Weekday (Mon–Fri)' },
  { value: 'saturday', label: 'Saturday' },
  { value: 'any', label: 'Any day' },
];
const MODES = [
  { value: 'phone', label: 'Phone call', icon: Phone },
  { value: 'video', label: 'WhatsApp video', icon: Video },
  { value: 'office', label: 'At Shela office', icon: MapPin },
] as const;

const AGENDA = [
  'Your goal — family protection, a child’s education, retirement, or a policy review',
  'What you already have: existing policies, loans, savings (no documents needed for the first call)',
  'Questions to answer before choosing anything',
  'A clear next step — or none, if you don’t need anything',
];

function WhatsAppBookingForm({ objective, from }: { objective: string; from: string }) {
  const [d, setD] = useState({ name: '', topic: '', day: 'any', time: '', mode: 'phone' });
  const [sent, setSent] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => setD((s) => ({ ...s, topic: objective || s.topic })), [objective]);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent('booking_started', { via: 'whatsapp', objective: objective || 'none' });
    }
    setD({ ...d, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sent) return;
    const mode = MODES.find((m) => m.value === d.mode)?.label ?? d.mode;
    const day = optionLabel(DAY_OPTIONS, d.day);
    const time = optionLabel(TIME_OPTIONS, d.time);
    trackEvent('booking_request_submit', { objective: d.topic || 'none', mode: d.mode });
    trackEvent('booking_completed', { via: 'whatsapp', objective: d.topic || 'none' });
    trackEvent('contact_whatsapp', { cta: 'book-form' });
    const message = leadMessage('Hi Jigisha ben, I’d like to book a free consultation.', [
      ['Name', d.name],
      ['Topic', d.topic ? optionLabel(INTEREST_OPTIONS, d.topic) : ''],
      ['Preferred', [day, time].filter(Boolean).join(', ')],
      ['Meeting', mode],
      ['Came from', from],
    ]);
    const url = whatsappUrl(message);
    // Popup blockers (some in-app browsers) return null: navigate instead.
    if (!window.open(url, '_blank', 'noopener')) window.location.href = url;
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="text-center py-8">
        <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
          <Check className="w-7 h-7 text-gold-dark" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-display font-bold text-midnight mb-2">Your message is ready in WhatsApp</h3>
        <p className="text-sm text-gray-600 max-w-sm mx-auto mb-5">
          Press <strong>send</strong> in WhatsApp and Jigisha will confirm the exact time with you (Mon–Sat, 9 AM–6 PM).
        </p>
        <button type="button" onClick={() => setSent(false)} className="text-sm font-semibold text-gold-dark underline underline-offset-2 min-h-11">
          WhatsApp didn’t open? Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5 relative">
      <Field id="bk-name" label="Your Name" required>
        <input id="bk-name" name="name" required autoComplete="name" value={d.name} onChange={change} placeholder="Enter your name" className={inputClass} />
      </Field>
      {/* Only the name is required: Vercel Analytics showed 43 starts of the old
          form from 10 visitors with no submit. WhatsApp supplies the number. */}
      <Field id="bk-topic" label="What would you like to discuss? (optional)">
        <SelectField id="bk-topic" name="topic" value={d.topic} onChange={change} placeholder="Not sure yet" options={INTEREST_OPTIONS} />
      </Field>
      <div className="grid md:grid-cols-2 gap-5">
        <Field id="bk-day" label="Preferred day">
          <SelectField id="bk-day" name="day" value={d.day} onChange={change} placeholder="Any day" options={DAY_OPTIONS} />
        </Field>
        <Field id="bk-time" label="Preferred time (optional)">
          <SelectField id="bk-time" name="time" value={d.time} onChange={change} placeholder="Any time, 9 AM–6 PM" options={TIME_OPTIONS} />
        </Field>
      </div>
      <fieldset>
        <legend className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1 mb-2">How would you like to meet?</legend>
        <div className="grid grid-cols-3 gap-2">
          {MODES.map(({ value, label, icon: Icon }) => (
            <label
              key={value}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-center cursor-pointer transition-colors min-h-11 ${
                d.mode === value ? 'border-gold bg-gold/10 text-midnight' : 'border-border bg-gray-50 text-gray-600 hover:border-gold/40'
              }`}
            >
              <input type="radio" name="mode" value={value} checked={d.mode === value} onChange={change} className="sr-only" />
              <Icon className="w-5 h-5 text-gold-dark" aria-hidden="true" />
              <span className="text-xs font-semibold leading-tight">{label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <button
        type="submit"
        className="w-full py-4 bg-whatsapp text-white font-bold rounded-xl shadow-lg hover:bg-whatsapp-dark active:scale-[0.98] transition-all flex items-center justify-center gap-2 min-h-12"
      >
        <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" /> Send on WhatsApp
      </button>
      <p className="text-xs text-gray-500 leading-relaxed">
        Opens WhatsApp with your details filled in. Press send there, and Jigisha confirms the exact time with you.
      </p>
      <ConsentNote />
    </form>
  );
}

export default function BookPage() {
  useSEO({
    title: 'Book a Free LIC Consultation in Ahmedabad',
    description:
      'Book a free first consultation with Jigisha Kiran Shah, LIC advisor in Shela, Ahmedabad — by phone, WhatsApp video or at the office. Family protection, child education, retirement and policy reviews.',
    path: '/book',
    keywords: 'book LIC consultation Ahmedabad, LIC advisor appointment, free insurance consultation Shela, LIC agent meeting Ahmedabad',
    breadcrumbLabel: 'Book a Consultation',
  });
  useScrollReveal();
  const [params] = useSearchParams();
  const objective = INTEREST_OPTIONS.some((o) => o.value === params.get('objective')) ? params.get('objective')! : '';
  const from = params.get('from') === 'check' ? 'Protection Check' : '';

  return (
    <section className="pt-20 lg:pt-24 pb-16 lg:pb-24 bg-cream relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'url("/noise.svg")' }} />
      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-2 reveal-left">
            <div className="inline-block px-3 py-1 bg-white border border-gold/20 text-gold-dark text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-4 lg:mb-6">
              Free First Consultation
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">
              Book a <span className="text-gold italic">Free Consultation</span>
            </h1>
            <p className="text-base lg:text-lg text-gray-600 font-light leading-relaxed mb-8">
              A conversation with Jigisha Kiran Shah — LIC advisor in Ahmedabad for 22+ years — about your family’s
              protection, existing policies and goals. No obligation to buy anything.
            </p>
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-gold-dark mb-3">What we’ll cover</h2>
            <ul className="space-y-3 mb-8">
              {AGENDA.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <ConsultationTerms className="mb-6" />
            <div className="flex gap-3 p-4 rounded-2xl bg-white border border-border">
              <ShieldCheck className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-gray-600">
                Not sure what to ask?{' '}
                <Link to="/protection-check" data-cta="book-check" className="font-semibold text-gold-dark underline underline-offset-2 hover:text-gold">
                  Run the 3-minute Protection Check first
                </Link>{' '}
                — or just book; it isn’t required.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 reveal-right">
            <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-border p-4 sm:p-6 lg:p-8">
              <h2 className="text-2xl font-display font-bold text-midnight mb-2">Book on WhatsApp</h2>
              <p className="text-sm text-gray-500 mb-3">Your name and a preferred time. Takes 20 seconds.</p>
              <TrustStrip className="mb-6" />
              <WhatsAppBookingForm objective={objective} from={from} />
            </div>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Rather skip the form?{' '}
              <a
                href={whatsappUrl('Hi Jigisha ben, I would like to book a free consultation. When are you free?')}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="book-whatsapp"
                className="font-semibold text-midnight underline underline-offset-2"
              >
                Just say hi on WhatsApp
              </a>{' '}
              or{' '}
              <a href="tel:+919824025435" data-cta="book-call" className="font-semibold text-midnight underline underline-offset-2">
                call +91 98240 25435
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
