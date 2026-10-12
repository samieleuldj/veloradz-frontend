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
];
