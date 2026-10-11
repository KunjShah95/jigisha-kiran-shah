import { ChevronDown } from 'lucide-react';
import type { ReactNode } from 'react';
import { OBJECTIVES } from '../lib/contact';

export const INCOME_OPTIONS = [
  { value: 'below-10l', label: 'Below ₹10 Lakhs' },
  { value: '10l-25l', label: '₹10 - 25 Lakhs' },
  { value: '25l-50l', label: '₹25 - 50 Lakhs' },
  { value: 'above-50l', label: 'Above ₹50 Lakhs' },
];

// Objective-first funnel: same list powers the homepage picker and WhatsApp prefill.
export const INTEREST_OPTIONS = OBJECTIVES.map((o) => ({ value: o.value, label: o.label }));

export const inputClass =
  'w-full px-4 py-3 rounded-xl border border-border focus:border-gold focus:ring-2 focus:ring-gold/40 outline-none transition-all bg-gray-50 hover:bg-white text-midnight font-medium min-h-11';

export function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1"
      >
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      {children}
    </div>
  );
}

export function SelectField({
  id,
  name,
  value,
  onChange,
  placeholder,
  options,
  required,
}: {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  options: Array<{ value: string; label: string }>;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`${inputClass} appearance-none pr-10`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="w-4 h-4 text-gray-400 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2"
      />
    </div>
  );
}

/** Map a select value back to its human label for the WhatsApp message. */
export function optionLabel(options: Array<{ value: string; label: string }>, value: string) {
  return options.find((o) => o.value === value)?.label ?? value;
}

/** Build a WhatsApp lead message from only the fields the visitor filled. */
export function leadMessage(heading: string, rows: Array<[string, string]>) {
  return [heading, ...rows.filter(([, v]) => v.trim()).map(([k, v]) => `${k}: ${v}`)].join('\n');
}

/** Sets expectations before submit — what happens after the visitor reaches out. */
export function NextSteps({ dark = false }: { dark?: boolean }) {
  const steps = [
    'Your message opens in WhatsApp — press send to reach Jigisha directly.',
    'You get a reply on WhatsApp or a call back, Mon–Sat, 9 AM–6 PM.',
    'First consultation is free — by phone, on WhatsApp, or in person at the Shela office.',
  ];
  return (
    <div className={dark ? 'text-gray-300' : 'text-gray-600'}>
      <p className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${dark ? 'text-gold' : 'text-gold-dark'}`}>
        What happens next
      </p>
      <ol className="space-y-1.5 text-xs leading-relaxed list-decimal pl-4">
        {steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
      <p className="mt-3 text-[11px] leading-relaxed text-gray-500">
        Please don’t share policy numbers, bank or medical details here — anything needed is collected
        during the consultation.
      </p>
    </div>
  );
}
