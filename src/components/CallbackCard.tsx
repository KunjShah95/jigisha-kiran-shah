import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Loader2 } from 'lucide-react';
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
 * Nothing is stored on the server — the form composes the message and hands
 * the visitor to WhatsApp, which is where the enquiry actually reaches Jigisha.
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
  const [form, setForm] = useState({ name: '', phone: '' });
  const [state, setState] = useState<'idle' | 'sending' | 'manual'>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const waText = objective
    ? objectiveWhatsAppText(objective)
    : "Hi Jigisha ben, I found you on your website. Please call me back about LIC insurance.";

  // Full message: the greeting, who is asking, and which page they asked from.
  const message = [
    waText,
    `Name: ${form.name.trim()}`,
    `Phone: ${form.phone.trim()}`,
    ...(context ? [`Page: ${context}`] : []),
  ].join('\n');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = form.phone.replace(/\D/g, '');
    if (!form.name.trim() || digits.length < 10 || digits.length > 13) return;

    setState('sending');
    trackEvent('consultation_form_submit', {
      form: 'callback',
      objective: objective || 'unspecified',
    });

    // Opened synchronously inside the handler so popup blockers allow it.
    window.open(whatsappUrl(message), '_blank');
    setState('manual');
  };

  if (state === 'manual') {
    return (
      <div className={`rounded-2xl border border-border bg-white p-6 md:p-7 ${className}`}>
        <p className="font-display font-bold text-lg text-midnight mb-2">One tap to finish</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          WhatsApp is open with your enquiry ready. Press send and it reaches Jigisha
          immediately. Prefer to talk now? Call {PHONE_DISPLAY}.
        </p>
        <a
          href={whatsappUrl(message)}
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
        Opens WhatsApp with your name and number — nothing is stored on this website. Mon–Sat, 9 AM–6 PM IST.{' '}
        <Link to="/privacy" className="underline underline-offset-2 hover:text-white">Privacy</Link>
        {' · '}Prefer to chat?{' '}
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
