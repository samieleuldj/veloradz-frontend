import type { Product } from '@/data/products';
import { getProductColorChoices } from '@/data/products';

const CATEGORY_LABELS: Record<string, string> = {
  crossbody: 'كروس بودي',
  tote: 'توت',
  evening: 'سهرة',
  daily: 'يومية',
};

type Props = {
  product: Product;
};

export default function BagSpecs({ product }: Props) {
  const colorChoices = getProductColorChoices(product);
  const hasSpecs =
    product.material || product.dimensions || colorChoices.length > 0;
  if (!hasSpecs) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      {product.category && (
        <div className="bg-background border border-primary/10 rounded-xl p-3 text-center">
          <p className="text-[10px] text-muted font-bold uppercase tracking-wide mb-1">النوع</p>
          <p className="text-sm font-black text-primary">
            {CATEGORY_LABELS[product.category] ?? product.category}
          </p>
        </div>
      )}
      {product.material && (
        <div className="bg-background border border-primary/10 rounded-xl p-3 text-center">
          <p className="text-[10px] text-muted font-bold uppercase tracking-wide mb-1">الخامة</p>
          <p className="text-sm font-bold text-text leading-snug">{product.material}</p>
        </div>
      )}
      {product.dimensions && (
        <div className="bg-background border border-primary/10 rounded-xl p-3 text-center">
          <p className="text-[10px] text-muted font-bold uppercase tracking-wide mb-1">الأبعاد</p>
          <p className="text-sm font-bold text-text" dir="ltr">
            {product.dimensions}
          </p>
        </div>
      )}
      {colorChoices.length > 0 && (
        <div className="bg-background border border-primary/10 rounded-xl p-3 col-span-2 md:col-span-1">
          <p className="text-[10px] text-muted font-bold uppercase tracking-wide mb-2 text-center">الألوان</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {colorChoices.map((c) => (
              <li
                key={c.value}
                className="flex items-center gap-1.5 text-xs font-bold text-text bg-white/80 rounded-full px-2 py-1 border border-primary/10"
                title={`${c.labelFr} (${c.labelAr})`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-gray-300 shrink-0"
                  style={{ backgroundColor: c.swatch }}
                  aria-hidden
                />
                <span dir="ltr">{c.labelFr}</span>
                <span className="text-muted font-semibold">({c.labelAr})</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
