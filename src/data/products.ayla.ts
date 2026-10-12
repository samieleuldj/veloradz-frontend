import type { Product } from './products';

/** Placeholder catalog — replace images under public/products/<id>/ and prices when stock is ready. */
export const products: Product[] = [
  {
    id: 'ayla-crossbody-sable',
    name: 'حقيبة كروس بودي — سابل',
    description:
      'حقيبة يومية أنيقة بلون رملي دافئ. جلد صناعي premium، سلسلة ذهبية خفيفة، وتقسيم داخلي للتلفون والمحفظة. تليق بالخروج والخدمة.',
    price: 4200,
    oldPrice: 5500,
    badge: 'الأكثر مبيعاً',
    category: 'crossbody',
    material: 'جلد صناعي premium',
    dimensions: '22 × 14 × 8 cm',
    colors: ['سابل', 'أسود'],
    rating: 4.9,
    reviewCount: 48,
    images: ['/products/ayla-crossbody-sable/hero.svg'],
    features: [
      'تقسيم داخلي + جيب للتلفون',
      'سلسلة قابلة للتعديل — كروس أو كتف',
      'إغلاق مغناطيسي آمن',
      'خفيفة ومريحة طول اليوم',
    ],
    reviews: [
      {
        name: 'Yasmine B.',
        city: 'الجزائر',
        initial: 'ي',
        text: 'اللون سابل كيما في الصورة. جودة الحزام والسلسلة مليحة بزاف.',
      },
      {
        name: 'Ines M.',
        city: 'وهران',
        initial: 'إ',
        text: 'حجمها مثالي للتلفون والمحفظة. COD ووصلت في وقت قصير.',
      },
    ],
  },
  {
    id: 'ayla-tote-noir',
    name: 'حقيبة توت — أسود كلاسيك',
    description:
      'توت كبيرة للخدمة والجامعة. خط نظيف، مقابض مريحة، وسعة لأ essentials بدون ما تبان ثقيلة.',
    price: 5800,
    oldPrice: 7200,
    badge: 'جديد',
    category: 'tote',
    material: 'جلد صناعي reinforced',
    dimensions: '32 × 28 × 12 cm',
    colors: ['أسود'],
    rating: 4.8,
    reviewCount: 31,
    images: ['/products/ayla-tote-noir/hero.svg'],
    features: [
      'سعة كبيرة — laptop صغير + documents',
      'مقابض طويلة + مقبض يد',
      'قاعدة مقوّاة — ما تتشقلبش',
      'لمسة أنيقة للخدمة اليومية',
    ],
  },
  {
    id: 'ayla-evening-clutch',
    name: 'حقيبة سهرة — clutch ذهبي',
    description:
      'كلتش للأعراس والمناسبات. لمسة ذهبية soft مع سلسلة كتف — تكفي للتلفون والمكياج الأساسي.',
    price: 3900,
    category: 'evening',
    material: 'جلد صناعي + finish metallic',
    dimensions: '20 × 12 × 5 cm',
    colors: ['ذهبي', 'أسود'],
    rating: 4.7,
    reviewCount: 19,
    images: ['/products/ayla-evening-clutch/hero.svg'],
    features: [
      'سلسلة كتف قابلة للفك',
      'إغلاق كلاسيكي',
      'مناسبة للسهرة والخطوبة',
      'تبان فاخرة في الصور',
    ],
  },
];
