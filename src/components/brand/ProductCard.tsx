import Image from 'next/image';
import Link from 'next/link';
import { getCollection } from '@/data/collections';
import type { Product } from '@/data/products';
import { formatPrice } from '@/lib/format';

type Props = {
  product: Product;
  className?: string;
};

export default function ProductCard({ product, className = '' }: Props) {
  const collection = product.collection ? getCollection(product.collection) : undefined;
  const cover = product.images?.[0];

  return (
    <div className={`group bg-cream rounded-2xl overflow-hidden border border-gold/15 hover:shadow-xl transition-shadow flex flex-col ${className}`}>
      <Link href={`/product/${product.id}`} className="relative block aspect-[4/5] bg-white overflow-hidden">
        {cover && (
          <Image
            src={cover}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 70vw, 25vw"
            loading="lazy"
          />
        )}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-gold-light text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full" dir="ltr">
            {product.badge}
          </span>
        )}
        <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full overflow-hidden ring-1 ring-gold/60 bg-cream shadow">
          <Image src="/brand/ayla-logo.jpg" alt="AYLA BAGS" fill className="object-cover scale-110" sizes="36px" />
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-grow text-center" dir="ltr">
        {collection && (
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold-dark mb-1">{collection.name}</p>
        )}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-serif text-xl text-primary leading-tight hover:text-gold-dark transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-2 mt-2 mb-4">
          <span className="font-bold text-primary">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-muted line-through text-sm">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
        <Link
          href={`/product/${product.id}#order-form`}
          className="mt-auto block w-full bg-primary hover:bg-gold-dark text-cream text-xs uppercase tracking-[0.25em] py-3 rounded-full transition-colors"
        >
          Commander
        </Link>
      </div>
    </div>
  );
}
