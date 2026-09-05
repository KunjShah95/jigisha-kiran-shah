import { ChevronDown } from 'lucide-react';
import type { ReactNode } from 'react';

export const INCOME_OPTIONS = [
  { value: 'below-10l', label: 'Below ₹10 Lakhs' },
  { value: '10l-25l', label: '₹10 - 25 Lakhs' },
  { value: '25l-50l', label: '₹25 - 50 Lakhs' },
  { value: 'above-50l', label: 'Above ₹50 Lakhs' },
];

export const INTEREST_OPTIONS = [
  { value: 'term', label: 'Term Life Protection' },
  { value: 'wealth', label: 'Wealth Creation' },
  { value: 'child', label: 'Child Education' },
  { value: 'retirement', label: 'Retirement Planning' },
  { value: 'nri', label: 'NRI Services' },
];

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
