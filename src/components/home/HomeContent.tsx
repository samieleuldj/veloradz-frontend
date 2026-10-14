import Image from 'next/image';
import Link from 'next/link';
import BrandMarquee from '@/components/brand/BrandMarquee';
import CollectionCard from '@/components/brand/CollectionCard';
import ProductCard from '@/components/brand/ProductCard';
import { collections } from '@/data/collections';
import { products } from '@/data/products';

const TRUST_ITEMS = [
  { title: 'Paiement à la livraison', sub: 'الدفع عند الاستلام' },
  { title: 'Livraison 58 wilayas', sub: 'توصيل لكل الولايات' },
  { title: 'Échange 7 jours', sub: 'استبدال خلال 7 أيام' },
  { title: 'Confirmation WhatsApp', sub: 'تأكيد قبل الإرسال' },
];

export default function HomeContent() {
  const bestSellers = products.filter((p) => p.bestSeller);
  const featured = (bestSellers.length > 0 ? bestSellers : products).slice(0, 6);

  return (
    <div className="flex flex-col bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#FBF7F1_0%,#F6EFE6_55%,#EDE1D0_100%)]" />
        <div className="relative container mx-auto px-4 pt-10 pb-12 md:pt-14 md:pb-16 text-center" dir="ltr">
          <div className="relative mx-auto w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-[0_20px_60px_-20px_rgba(140,106,60,0.45)]">
            <Image
              src="/brand/ayla-logo.jpg"
              alt="AYLA BAGS — L'élégance à portée de main"
              fill
              priority
              className="object-cover scale-[1.08]"
              sizes="224px"
            />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-primary mt-8 leading-tight">
            Maroquinerie <span className="italic text-gold-dark">de luxe</span>
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-muted mt-3">
            Les sacs des grandes maisons, livrés chez vous en Algérie
          </p>
          <p className="text-sm text-muted mt-2" dir="rtl">
            تشوفي الحقيبة قبل ما تخلصي — الدفع عند الاستلام
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="#collections"
              className="bg-primary hover:bg-gold-dark text-cream text-xs uppercase tracking-[0.3em] px-8 py-4 rounded-full transition-colors"
            >
              Nos collections
            </a>
            <a
              href="#best-sellers"
              className="border border-primary/80 hover:border-gold-dark hover:text-gold-dark text-primary text-xs uppercase tracking-[0.3em] px-8 py-4 rounded-full transition-colors"
            >
              Les plus vendus
            </a>
          </div>
        </div>
      </section>

      <BrandMarquee />

      <section id="collections" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10" dir="ltr">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold-dark">Les maisons</p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary mt-2">Choisissez votre collection</h2>
            <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6">
            {collections.map((c) => (
              <CollectionCard
                key={c.slug}
                collection={c}
                count={products.filter((p) => p.collection === c.slug).length}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="best-sellers" className="py-14 md:py-20 bg-cream border-y border-gold/15">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10" dir="ltr">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold-dark">Best-sellers</p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary mt-2">Les plus vendus</h2>
            <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          </div>
          <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 justify-start md:justify-center">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} className="snap-start shrink-0 w-[70%] sm:w-[45%] md:w-[30%] lg:w-[23%]" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-primary text-cream">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {TRUST_ITEMS.map((item) => (
            <div key={item.title}>
              <p className="font-serif text-lg text-gold-light" dir="ltr">{item.title}</p>
              <p className="text-xs text-cream/60 mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold-dark" dir="ltr">Avis clientes</p>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mt-2 mb-10" dir="ltr">Elles nous font confiance</h2>
          <div className="flex gap-4 overflow-x-auto snap-x pb-2 md:justify-center">
            {[
              { text: 'الحقيبة كيما في الصور بالضبط، السلسلة ثقيلة والخياطة نظيفة.', name: 'ياسمين — الجزائر' },
              { text: 'شفت الحقيبة قبل ما نخلص، التغليف فخم ومعاها البوات.', name: 'إيناس — وهران' },
              { text: 'خدمة راقية واتصلو بيا للتأكيد في نفس النهار.', name: 'سارة — قسنطينة' },
            ].map((r) => (
              <div key={r.name} className="snap-start shrink-0 w-[80%] sm:w-80 bg-cream border border-gold/20 rounded-2xl p-6 text-right">
                <div className="text-gold text-sm mb-3">★★★★★</div>
                <p className="text-primary/80 text-sm leading-relaxed">{r.text}</p>
                <p className="mt-4 text-xs font-bold text-gold-dark">{r.name}</p>
              </div>
            ))}
          </div>
          <Link
            href="/collection/chanel"
            className="inline-block mt-10 text-xs uppercase tracking-[0.3em] text-primary border-b border-gold pb-1 hover:text-gold-dark"
            dir="ltr"
          >
            Voir la collection Chanel
          </Link>
        </div>
      </section>
    </div>
  );
}
