import Image from 'next/image';
import Link from 'next/link';
import type { Collection } from '@/data/collections';

type Props = {
  collection: Collection;
  count: number;
};

export default function CollectionCard({ collection, count }: Props) {
  return (
    <Link
      href={`/collection/${collection.slug}`}
      className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-shadow"
    >
      {collection.cover ? (
        <Image
          src={collection.cover}
          alt={`Collection ${collection.name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient}`}>
          <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,#D9BF8C_0,#D9BF8C_1px,transparent_1px,transparent_14px)]" />
          <div className="absolute inset-0 flex items-center justify-center pb-16" dir="ltr">
            <span className={`text-2xl md:text-4xl uppercase text-gold-light/90 text-center px-3 ${collection.wordmarkClass}`}>
              {collection.name}
            </span>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute top-3 right-3 w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden ring-1 ring-gold/60 shadow-lg bg-cream">
        <Image src="/brand/ayla-logo.jpg" alt="AYLA BAGS" fill className="object-cover scale-110" sizes="48px" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-center" dir="ltr">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold-light mb-1">Collection</p>
        {collection.cover && (
          <h3 className={`text-xl md:text-2xl uppercase text-white ${collection.wordmarkClass}`}>
            {collection.name}
          </h3>
        )}
        <p className="font-serif italic text-sm text-white/70 mt-1 hidden md:block">{collection.tagline}</p>
        <span className="inline-block mt-3 text-[11px] uppercase tracking-[0.2em] text-white border-b border-gold pb-0.5 group-hover:text-gold-light transition-colors">
          {count > 0 ? `Découvrir · ${count}` : 'Bientôt'}
        </span>
      </div>
    </Link>
  );
}
