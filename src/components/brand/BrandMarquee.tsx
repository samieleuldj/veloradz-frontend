import Link from 'next/link';
import { collections } from '@/data/collections';

export default function BrandMarquee() {
  const items = [...collections, ...collections, ...collections];

  return (
    <div className="relative overflow-hidden bg-primary py-5 border-y border-gold/30" dir="ltr">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-primary to-transparent z-10" />
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((c, i) => (
              <Link
                key={`${copy}-${c.slug}-${i}`}
                href={`/collection/${c.slug}`}
                tabIndex={copy === 1 ? -1 : undefined}
                className="flex items-center"
              >
                <span
                  className={`px-8 text-lg md:text-2xl uppercase text-cream/90 hover:text-gold-light transition-colors ${c.wordmarkClass}`}
                >
                  {c.name}
                </span>
                <span className="text-gold text-xs">◆</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
