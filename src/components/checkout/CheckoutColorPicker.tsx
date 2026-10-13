'use client';

import type { ProductColorChoice } from '@/data/product-color-choices';

type Props = {
  choices: ProductColorChoice[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

export default function CheckoutColorPicker({ choices, value, onChange, error }: Props) {
  return (
    <div>
      <p className="block text-sm font-bold text-gray-700 mb-2">اللون *</p>
      <div
        className={`space-y-2 rounded-xl border p-2 ${
          error ? 'border-red-500' : value ? 'border-green-400' : 'border-gray-200'
        }`}
        role="radiogroup"
        aria-label="اختيار اللون"
      >
        {choices.map((c) => {
          const checked = value === c.value;
          return (
            <label
              key={c.value}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer border transition-colors ${
                checked
                  ? 'border-primary bg-primary/5 ring-1 ring-primary/30'
                  : 'border-transparent hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name="product_color"
                value={c.value}
                checked={checked}
                onChange={() => onChange(c.value)}
                className="sr-only"
                required={choices.length > 0}
              />
              <span
                className="shrink-0 w-7 h-7 rounded-full border-2 border-white shadow-md ring-1 ring-gray-300"
                style={{ backgroundColor: c.swatch }}
                title={c.labelFr}
                aria-hidden
              />
              <span className="text-sm font-bold text-gray-900 leading-snug">
                {c.labelFr}{' '}
                <span className="text-gray-500 font-semibold">({c.labelAr})</span>
              </span>
              {checked && (
                <span className="mr-auto text-green-600 text-xs font-bold" aria-hidden>
                  ✓
                </span>
              )}
            </label>
          );
        })}
      </div>
      {error && <p className="text-red-500 text-xs mt-1 font-bold">{error}</p>}
    </div>
  );
}
