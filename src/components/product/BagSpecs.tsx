import type { Product } from '@/data/products';

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
  const hasSpecs =
    product.material || product.dimensions || (product.colors && product.colors.length > 0);
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
      {product.colors && product.colors.length > 0 && (
        <div className="bg-background border border-primary/10 rounded-xl p-3 text-center col-span-2 md:col-span-1">
          <p className="text-[10px] text-muted font-bold uppercase tracking-wide mb-1">الألوان</p>
          <p className="text-sm font-bold text-text">{product.colors.join(' · ')}</p>
        </div>
      )}
    </div>
  );
}
