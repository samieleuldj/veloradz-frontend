import type { CollectionSlug } from './collections';

export type ProductCategory = 'daily' | 'crossbody' | 'tote' | 'evening';

export type ProductReview = {
  name: string;
  city: string;
  text: string;
  initial: string;
  photo?: string;
  reviewImage?: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  features: string[];
  images?: string[];
  /** Handbag taxonomy */
  collection?: CollectionSlug;
  bestSeller?: boolean;
  category?: ProductCategory;
  material?: string;
  dimensions?: string;
  colors?: string[];
  /** Legacy landing fields (optional) */
  beforeImage?: string;
  afterImage?: string;
  problemText?: string;
  solutionText?: string;
  usageSteps?: string[];
  usageTitle?: string;
  videoFile?: string;
  videoPoster?: string;
  rating?: number;
  reviewCount?: number;
  reviews?: ProductReview[];
  requiresVehicleInfo?: boolean;
};

export { products } from './products.ayla';

/** Color choices for checkout — every AYLA handbag must expose at least one color. */
export function getProductColorOptions(product: Product): string[] {
  if (product.collection) {
    return product.colors?.length ? product.colors : ['Noir'];
  }
  return product.colors ?? [];
}

export const DEFAULT_REVIEWS: ProductReview[] = [
  {
    name: 'زبونة مؤكدة',
    city: 'الجزائر',
    initial: 'ز',
    text: 'الحقيبة كيما في الصور، الخامة مليحة والتغليف محترم.',
  },
  {
    name: 'زبونة مؤكدة',
    city: 'وهران',
    initial: 'ز',
    text: 'الدفع عند الاستلام يطمّن — شفت الحقيبة قبل ما ندفع.',
  },
  {
    name: 'زبونة مؤكدة',
    city: 'قسنطينة',
    initial: 'ز',
    text: 'توصيل سريع واتصلو بيا للتأكيد. نرجع نشري من AYLA.',
  },
];
