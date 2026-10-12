import Image from 'next/image';
import Link from 'next/link';
import { collections } from '@/data/collections';

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary text-gold-light text-[11px] uppercase tracking-[0.25em] text-center py-2 px-4" dir="ltr">
        Paiement à la livraison · Livraison 58 wilayas
      </div>
      <div className="bg-cream/95 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between" dir="ltr">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative w-11 h-11 rounded-full overflow-hidden ring-1 ring-gold/50">
              <Image src="/brand/ayla-logo.jpg" alt="AYLA BAGS" fill className="object-cover scale-110" sizes="44px" priority />
            </span>
            <span className="leading-none">
              <span className="block font-serif text-2xl tracking-[0.15em] text-primary">AYLA</span>
              <span className="block text-[9px] tracking-[0.5em] text-gold-dark">BAGS</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-[11px] uppercase tracking-[0.25em] text-primary/80">
            {collections.map((c) => (
              <Link key={c.slug} href={`/collection/${c.slug}`} className="hover:text-gold-dark transition-colors">
                {c.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/#best-sellers"
            className="bg-primary hover:bg-gold-dark text-cream text-[11px] uppercase tracking-[0.25em] px-5 py-2.5 rounded-full transition-colors"
          >
            Boutique
          </Link>
        </div>
      </div>
    </header>
  );
}
