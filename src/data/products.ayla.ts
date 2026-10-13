import type { Product } from './products';

export const products: Product[] = [
  {
    id: 'chanel-20cm',
    name: 'Chanel 20 cm',
    collection: 'chanel',
    bestSeller: true,
    description:
      'Sac matelassé noir avec chaîne dorée entrelacée de cuir et fermoir doré. Format 20 cm — porté main, épaule ou bandoulière. Livré avec sa boîte.',
    price: 4900,
    badge: 'Best-seller',
    category: 'crossbody',
    material: 'Cuir matelassé',
    dimensions: '20 cm',
    colors: ['Noir'],
    rating: 4.9,
    reviewCount: 37,
    images: [
      '/products/chanel-20cm/1.jpg',
      '/products/chanel-20cm/2.jpg',
      '/products/chanel-20cm/3.jpg',
    ],
    features: [
      'Matelassé losange classique',
      'Chaîne dorée entrelacée de cuir — portée épaule ou bandoulière',
      'Fermoir doré + fermeture aimantée intérieure',
      'Livré avec boîte et emballage protecteur',
    ],
    reviews: [
      {
        name: 'Yasmine B.',
        city: 'الجزائر',
        initial: 'ي',
        text: 'الحقيبة كيما في الصور بالضبط، السلسلة ثقيلة والخياطة نظيفة. وصلت في البوات.',
      },
      {
        name: 'Ines M.',
        city: 'وهران',
        initial: 'إ',
        text: 'حجم 20 cm مثالي للتلفون والمحفظة. شفتها قبل ما نخلص.',
      },
    ],
  },
  {
    id: 'chanel-jumbo-20cm-master',
    name: 'Chanel Jumbo 20 cm — Master Quality',
    collection: 'chanel',
    bestSeller: true,
    description:
      'Flap matelassé caviar 20 cm — finition Master Quality. Chaîne entrelacée de cuir, fermoir CC, boîte + dust bag + carte d’authenticité. Choisissez votre coloris ci-dessous.',
    price: 7900,
    badge: 'Master Quality',
    category: 'crossbody',
    material: 'Cuir caviar matelassé',
    dimensions: '20 cm',
    colors: ['Noir — hardware doré', 'Noir So Black', 'Bourdeaux — hardware doré'],
    rating: 4.9,
    reviewCount: 52,
    images: [
      '/products/chanel-jumbo-20cm/1.jpg',
      '/products/chanel-jumbo-20cm/2.jpg',
      '/products/chanel-jumbo-20cm/3.jpg',
      '/products/chanel-jumbo-20cm/4.jpg',
      '/products/chanel-jumbo-20cm/5.jpg',
    ],
    features: [
      'Master Quality — finitions premium, détails soignés',
      '3 coloris : Noir / Or, So Black (hardware noir), Bourdeaux / Or',
      'Matelassé losange + chaîne entrelacée de cuir',
      'Livraison avec boîte Chanel, dust bag et carte',
    ],
    reviews: [
      {
        name: 'Lina K.',
        city: 'الجزائر',
        initial: 'ل',
        text: 'Master quality فعلاً — الكuir والسلسلة يبانو فاخرين. Bourdeaux كيما في الصورة.',
      },
      {
        name: 'Nour H.',
        city: 'بجاية',
        initial: 'ن',
        text: 'So Black جميلة بزاف. وصلت كاملة مع البوات والكارت.',
      },
    ],
  },
];
