import type { CollectionSlug } from './collections';
import type { ProductColorChoice } from './product-color-choices';

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
  /** Optional explicit swatches; otherwise derived from `colors` */
  colorChoices?: ProductColorChoice[];
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

export { getProductColorChoices, formatColorsForSpecs } from './product-color-choices';
export type { ProductColorChoice } from './product-color-choices';

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
