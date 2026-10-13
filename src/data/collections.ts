export type CollectionSlug = 'louis-vuitton' | 'chanel' | 'gucci' | 'prada';

export type Collection = {
  slug: CollectionSlug;
  name: string;
  tagline: string;
  cover?: string;
  /** Tailwind gradient used when the collection has no cover photo yet */
  gradient: string;
  /** Wordmark font style for the brand strip */
  wordmarkClass: string;
};

export const collections: Collection[] = [
  {
    slug: 'louis-vuitton',
    name: 'Louis Vuitton',
    tagline: 'Monogramme intemporel',
    cover: '/products/louis-vuitton-25cm/1.jpg',
    gradient: 'from-[#5C3A21] via-[#7A5230] to-[#2B1A0E]',
    wordmarkClass: 'font-serif tracking-[0.25em]',
  },
  {
    slug: 'chanel',
    name: 'Chanel',
    tagline: 'Le matelassé iconique',
    cover: '/products/chanel-jumbo-25cm/1.jpg',
    gradient: 'from-[#1A1A1A] via-[#2A2A2A] to-[#0A0A0A]',
    wordmarkClass: 'font-sans font-bold tracking-[0.35em]',
  },
  {
    slug: 'gucci',
    name: 'Gucci',
    tagline: 'Audace & héritage',
    gradient: 'from-[#1F3B2C] via-[#2E5240] to-[#0F1F17]',
    wordmarkClass: 'font-serif tracking-[0.2em]',
  },
  {
    slug: 'prada',
    name: 'Prada',
    tagline: 'Minimalisme raffiné',
    gradient: 'from-[#2B2B2B] via-[#4A4440] to-[#151515]',
    wordmarkClass: 'font-sans font-semibold tracking-[0.3em]',
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
