import { useState } from 'react';
import { Phone, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { submitLeadResult, honeypotProps } from '../lib/leads';
import { trackEvent } from '../lib/analytics';
import { whatsappUrl, objectiveWhatsAppText, objectiveShortLabel } from '../lib/contact';
import { PHONE_DISPLAY } from '../lib/seo';

/**
 * Two-field call-back request for high-intent pages (services, areas, guides).
 *
 * Why this exists: the only conversion on those pages used to be "Call" or
 * "open WhatsApp". A visitor who is at work, on a desktop, or simply doesn't
 * want to compose a message had nowhere to go. Name + phone is the lowest
 * friction that still produces a usable lead.
 *
 * If `/api/lead` has no destination configured it returns saved: 0 — we say so
 * honestly and hand the visitor to WhatsApp instead of pretending it worked.
 */
export default function CallbackCard({
  objective,
  context,
  className = '',
}: {
  /** One of OBJECTIVES values, so the lead arrives tagged with intent. */
  objective?: string;
  /** Short page label, e.g. "Term insurance in Ahmedabad". */
  context?: string;
  className?: string;
}) {
  const [form, setForm] = useState({ name: '', phone: '', website: '' });
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'manual'>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digits = form.phone.replace(/\D/g, '');
    if (!form.name.trim() || digits.length < 10 || digits.length > 13) return;

    setState('sending');
    trackEvent('consultation_form_submit', {
      form: 'callback',
      objective: objective || 'unspecified',
    });

    const result = await submitLeadResult({
      kind: 'contact',
      name: form.name.trim(),
      phone: form.phone.trim(),
      objective,
      details: context ? { 'Requested from': context } : undefined,
      website: form.website,
    });

    if (result.saved > 0) {
      setState('sent');
      trackEvent('lead_saved', { form: 'callback', objective: objective || 'unspecified' });
    } else {
      setState('manual');
    }
  };

  const waText = objective
    ? objectiveWhatsAppText(objective)
    : "Hi Jigisha ben, I found you on your website. Please call me back about LIC insurance.";

  if (state === 'sent') {
    return (
      <div className={`rounded-2xl border border-gold/30 bg-white p-6 md:p-7 ${className}`}>
        <p className="flex items-center gap-2 font-display font-bold text-lg text-midnight mb-2">
          <CheckCircle2 className="w-5 h-5 text-gold-dark" aria-hidden="true" />
          Request received, {form.name.trim().split(' ')[0]}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          Jigisha will call you on {form.phone.trim()}, Monday–Saturday between 9 AM and 6 PM.
          If it is urgent, call {PHONE_DISPLAY} directly.
        </p>
      </div>
    );
  }

  if (state === 'manual') {
    return (
      <div className={`rounded-2xl border border-border bg-white p-6 md:p-7 ${className}`}>
        <p className="font-display font-bold text-lg text-midnight mb-2">One tap to finish</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          We could not save your number just now. Tap WhatsApp below and press send — it reaches
          Jigisha immediately.
        </p>
        <a
          href={whatsappUrl(`${waText}\nName: ${form.name.trim()}\nPhone: ${form.phone.trim()}`)}
          data-cta="callback-whatsapp-fallback"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-whatsapp-dark transition-colors min-h-11"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" /> Send on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border border-border bg-midnight p-6 md:p-7 ${className}`}>
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold mb-2">
        Free call back
      </p>
      <p className="font-display font-bold text-xl text-white mb-1">
        Prefer to talk? Leave your number.
      </p>
      <p className="text-sm text-white/60 leading-relaxed mb-5">
        {objective
          ? `Jigisha will call you about ${objectiveShortLabel(objective).toLowerCase()} — no obligation, no sales script.`
          : 'Jigisha will call you back — no obligation, no sales script.'}
      </p>

      <form onSubmit={onSubmit} className="grid sm:grid-cols-[1fr_1fr_auto] gap-3 items-end">
        <input {...honeypotProps} value={form.website} onChange={onChange} />
        <div>
          <label htmlFor="cb-name" className="block text-[11px] font-bold uppercase tracking-wider text-white/60 mb-1.5">
            Your name
          </label>
          <input
            id="cb-name"
            name="name"
            value={form.name}
            onChange={onChange}
            required
            autoComplete="name"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-xl bg-white text-midnight text-sm font-medium min-h-11 outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
        <div>
          <label htmlFor="cb-phone" className="block text-[11px] font-bold uppercase tracking-wider text-white/60 mb-1.5">
            Mobile number
          </label>
          <input
            id="cb-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={onChange}
            required
            autoComplete="tel"
            placeholder="10-digit mobile"
            className="w-full px-4 py-3 rounded-xl bg-white text-midnight text-sm font-medium min-h-11 outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
        <button
          type="submit"
          disabled={state === 'sending'}
          className="inline-flex items-center justify-center gap-2 bg-gold text-midnight font-bold py-3 px-6 rounded-xl text-sm hover:bg-gold-light transition-colors min-h-11 disabled:opacity-60"
        >
          {state === 'sending' ? (
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
          ) : (
            <Phone className="w-4 h-4" aria-hidden="true" />
          )}
          {state === 'sending' ? 'Sending' : 'Call me back'}
        </button>
      </form>

      <p className="mt-3 text-[11px] text-white/45 leading-relaxed">
        Only your name and number are stored. Mon–Sat, 9 AM–6 PM IST. Prefer to chat?{' '}
        <a
          href={whatsappUrl(waText)}
          data-cta="callback-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline underline-offset-2 hover:text-white"
        >
          WhatsApp instead
        </a>
        .
      </p>
    </div>
  );
}
