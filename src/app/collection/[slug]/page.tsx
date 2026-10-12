import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/brand/ProductCard';
import { collections, getCollection } from '@/data/collections';
import { products } from '@/data/products';
import { STORE_WHATSAPP_URL } from '@/lib/store';
import { buildPageMetadata, siteConfig } from '@/lib/seo';

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const collection = getCollection(params.slug);
  if (!collection) return { title: 'Collection introuvable' };
  return buildPageMetadata({
    title: `Collection ${collection.name} | ${siteConfig.name}`,
    description: `Sacs ${collection.name} — paiement à la livraison, livraison 58 wilayas.`,
    path: `/collection/${collection.slug}`,
    image: collection.cover,
  });
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = getCollection(params.slug);
  if (!collection) notFound();

  const items = products.filter((p) => p.collection === collection.slug);

  return (
    <div className="bg-background min-h-screen">
      <section className={`relative bg-gradient-to-br ${collection.gradient} text-white`}>
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,#D9BF8C_0,#D9BF8C_1px,transparent_1px,transparent_14px)]" />
        <div className="relative container mx-auto px-4 py-14 md:py-20 text-center" dir="ltr">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold-light">Collection</p>
          <h1 className={`text-4xl md:text-6xl uppercase mt-3 ${collection.wordmarkClass}`}>{collection.name}</h1>
          <p className="font-serif italic text-lg text-white/70 mt-3">{collection.tagline}</p>
        </div>
      </section>

      <nav className="border-b border-gold/15 bg-cream" dir="ltr">
        <div className="container mx-auto px-4 flex gap-2 overflow-x-auto py-3 md:justify-center">
          {collections.map((c) => (
            <Link
              key={c.slug}
              href={`/collection/${c.slug}`}
              className={`shrink-0 px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.25em] transition-colors ${
                c.slug === collection.slug
                  ? 'bg-primary text-gold-light'
                  : 'text-primary border border-primary/15 hover:border-gold'
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </nav>

      <section className="container mx-auto px-4 py-12">
        {items.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="max-w-md mx-auto text-center py-16" dir="ltr">
            <h2 className="font-serif text-3xl text-primary">Bientôt disponible</h2>
            <p className="text-muted mt-3">
              La collection {collection.name} arrive très bientôt. Écrivez-nous pour réserver votre modèle.
            </p>
            <a
              href={STORE_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-primary hover:bg-gold-dark text-cream text-xs uppercase tracking-[0.3em] px-8 py-4 rounded-full transition-colors"
            >
              Réserver sur WhatsApp
            </a>
          </div>
        )}
      </section>
    </div>
  );
}
