import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, Phone, Video, MapPin, Check, ShieldCheck } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Field, SelectField, INTEREST_OPTIONS, inputClass, optionLabel, leadMessage } from '../components/lead-fields';
import { whatsappUrl } from '../lib/contact';
import { trackEvent } from '../lib/analytics';
import { submitLead, honeypotProps } from '../lib/leads';

/**
 * Cal.com event path (public booking link, not a secret). The page shows live
 * availability and a real booking confirmation. Set VITE_CAL_LINK to override,
 * or to "off" to fall back to the booking-request form (saved + WhatsApp).
 */
const CAL_ENV = import.meta.env.VITE_CAL_LINK as string | undefined;
const CAL_LINK = CAL_ENV === 'off' ? undefined : CAL_ENV || 'jigisha-kiran-shah-emz0xs/free-consultation';
const CAL_NS = 'consult';

const DAY_OPTIONS = [
  { value: 'weekday', label: 'Weekday (Mon–Fri)' },
  { value: 'saturday', label: 'Saturday' },
  { value: 'any', label: 'Any day' },
];
const TIME_OPTIONS = [
  { value: 'morning', label: 'Morning (9 AM–12 PM)' },
  { value: 'afternoon', label: 'Afternoon (12–3 PM)' },
  { value: 'evening', label: 'Late afternoon (3–6 PM)' },
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

type CalApi = ((...args: unknown[]) => void) & { ns?: Record<string, (...args: unknown[]) => void>; loaded?: boolean; q?: unknown[] };

/** Official Cal.com embed loader, typed. Loads https://app.cal.com/embed/embed.js once. */
function loadCal(): CalApi {
  const w = window as unknown as { Cal?: CalApi };
  if (w.Cal) return w.Cal;
  const push = (api: CalApi, args: unknown) => (api.q = api.q || []).push(args);
  const cal = function (...args: unknown[]) {
    const self = w.Cal!;
    if (!self.loaded) {
      self.ns = {};
      self.q = self.q || [];
      document.head.appendChild(document.createElement('script')).src = 'https://app.cal.com/embed/embed.js';
      self.loaded = true;
    }
    if (args[0] === 'init') {
      const api = function (...a: unknown[]) {
        push(api as CalApi, a);
      } as CalApi;
      const namespace = args[1];
      if (typeof namespace === 'string') {
        self.ns![namespace] = self.ns![namespace] || api;
        push(self.ns![namespace] as CalApi, args);
        push(self, ['initNamespace', namespace]);
      } else push(self, args);
      return;
    }
    push(self, args);
  } as CalApi;
  w.Cal = cal;
  return cal;
}

/** How long to wait for Cal.com to report the calendar ready before falling back. */
const CAL_TIMEOUT_MS = 12_000;

function CalEmbed({ calLink, objective, from, onFail }: { calLink: string; objective: string; from: string; onFail: (reason: string) => void }) {
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    let ready = false;
    let failed = false;
    const fail = (reason: string) => {
      if (ready || failed) return;
      failed = true;
      trackEvent('booking_started', { via: 'cal-failed', reason });
      onFail(reason);
    };
    // Script blocked (adblock, network) or Cal.com down: never leave a blank box.
    const timer = window.setTimeout(() => fail('timeout'), CAL_TIMEOUT_MS);

    const Cal = loadCal();
    Cal('init', CAL_NS, { origin: 'https://app.cal.com' });
    const ns = Cal.ns![CAL_NS];
    const config: Record<string, string> = { layout: 'month_view' };
    if (objective) {
      config.notes = `Goal: ${optionLabel(INTEREST_OPTIONS, objective)}${from ? ` (via ${from})` : ''}`;
      config['metadata[objective]'] = objective;
    }
    ns('inline', { elementOrSelector: '#cal-inline', calLink, config });
    ns('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    ns('on', {
      action: 'linkReady',
      callback: () => {
        ready = true;
        window.clearTimeout(timer);
        trackEvent('booking_started', { via: 'cal', objective: objective || 'none' });
      },
    });
    ns('on', { action: 'linkFailed', callback: () => fail('link-failed') });
    ns('on', {
      action: 'bookingSuccessful',
      callback: () => trackEvent('booking_completed', { via: 'cal', objective: objective || 'none' }),
    });
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calLink, objective, from]);
  return <div id="cal-inline" className="w-full min-h-[640px] overflow-auto rounded-2xl" />;
}

function RequestForm({ objective, from }: { objective: string; from: string }) {
  const [d, setD] = useState({ name: '', phone: '', topic: '', day: 'any', time: '', mode: 'phone', website: '' });
  const [sent, setSent] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => setD((s) => ({ ...s, topic: objective || s.topic })), [objective]);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent('booking_started', { via: 'request', objective: objective || 'none' });
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
    submitLead({
      kind: 'booking',
      name: d.name,
      phone: d.phone,
      objective: d.topic,
      details: { 'Preferred day': day, 'Preferred time': time, Mode: mode, ...(from ? { From: from } : {}) },
      website: d.website,
    }).then((ok) => ok && trackEvent('lead_saved', { form: 'booking' }));
    const message = leadMessage('Consultation booking request (website)', [
      ['Name', d.name],
      ['Phone', d.phone],
      ['Topic', optionLabel(INTEREST_OPTIONS, d.topic)],
      ['Preferred', `${day}, ${time}`],
      ['Meeting', mode],
    ]);
    window.open(whatsappUrl(message), '_blank');
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="text-center py-8">
        <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
          <Check className="w-7 h-7 text-gold-dark" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-display font-bold text-midnight mb-2">Request received</h3>
        <p className="text-sm text-gray-600 max-w-sm mx-auto">
          Jigisha will confirm an exact time with you by phone or WhatsApp (Mon–Sat, 9 AM–6 PM). If WhatsApp opened,
          pressing send there gets the fastest reply.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5 relative">
      <input {...honeypotProps} value={d.website} onChange={change} />
      <div className="grid md:grid-cols-2 gap-5">
        <Field id="bk-name" label="Your Name" required>
          <input id="bk-name" name="name" required autoComplete="name" value={d.name} onChange={change} placeholder="Enter your name" className={inputClass} />
        </Field>
        <Field id="bk-phone" label="Phone Number" required>
          <input id="bk-phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" pattern="[0-9+\(\)\- ]{10,18}" title="Enter a valid phone number" value={d.phone} onChange={change} placeholder="+91 98765 43210" className={inputClass} />
        </Field>
      </div>
      <Field id="bk-topic" label="What would you like to discuss?" required>
        <SelectField id="bk-topic" name="topic" value={d.topic} onChange={change} placeholder="Choose your main goal" options={INTEREST_OPTIONS} required />
      </Field>
      <div className="grid md:grid-cols-2 gap-5">
        <Field id="bk-day" label="Preferred day">
          <SelectField id="bk-day" name="day" value={d.day} onChange={change} placeholder="Any day" options={DAY_OPTIONS} />
        </Field>
        <Field id="bk-time" label="Preferred time" required>
          <SelectField id="bk-time" name="time" value={d.time} onChange={change} placeholder="Choose a time window" options={TIME_OPTIONS} required />
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
        className="w-full py-4 bg-midnight text-white font-bold rounded-xl shadow-lg hover:bg-gold active:scale-[0.98] transition-all flex items-center justify-center gap-2 min-h-11"
      >
        <Calendar className="w-5 h-5" aria-hidden="true" /> Request this time
      </button>
      <p className="text-xs text-gray-500 leading-relaxed">
        Your request is saved and opens in WhatsApp. Jigisha confirms the exact slot with you. Please don’t share
        policy numbers, bank or medical details here.
      </p>
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
  // Cal embed is client-only; render the shell on the server and mount after hydration.
  const [mounted, setMounted] = useState(false);
  const [calFailed, setCalFailed] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream relative overflow-hidden">
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
              {CAL_LINK && !calFailed ? (
                <>
                  <h2 className="text-xl font-display font-bold text-midnight mb-4 px-2">Pick a time</h2>
                  {mounted ? (
                    <CalEmbed calLink={CAL_LINK} objective={objective} from={from} onFail={() => setCalFailed(true)} />
                  ) : (
                    <div className="min-h-[640px]" aria-busy="true" />
                  )}
                  <p className="mt-3 px-2 text-xs text-gray-500">
                    Calendar not loading?{' '}
                    <a href={`https://cal.com/${CAL_LINK}`} target="_blank" rel="noopener noreferrer" data-cta="book-cal-newtab" className="font-semibold text-gold-dark underline underline-offset-2">
                      Open it in a new tab
                    </a>{' '}
                    or{' '}
                    <button type="button" onClick={() => setCalFailed(true)} className="font-semibold text-gold-dark underline underline-offset-2">
                      request a time instead
                    </button>
                    .
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-display font-bold text-midnight mb-2">Request a time</h2>
                  <p className="text-sm text-gray-500 mb-6">Tell us when suits you. Takes 30 seconds.</p>
                  <RequestForm objective={objective} from={from} />
                </>
              )}
            </div>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Prefer to talk now?{' '}
              <a href="tel:+919824025435" data-cta="book-call" className="font-semibold text-midnight underline underline-offset-2">
                Call +91 98240 25435
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
