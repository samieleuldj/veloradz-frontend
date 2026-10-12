export const storeBrand = {
  name: 'AYLA BAGS',
  nameAr: 'آيلا باغز',
  tagline: 'WOMENS BAGS',
  taglineAr: 'حقائب نسائية في الجزائر',
  description:
    'متجر AYLA BAGS — حقائب أنيقة مختارة بعناية. الدفع عند الاستلام، تشوفي الحقيبة قبل ما تدفعي، والتوصيل لـ 58 ولاية.',
  email: 'contact@ayla.shop',
  accentClass: 'text-accent',
  logoPrimary: 'AYLA',
  logoSecondary: 'BAGS',
};

export function getSiteDisplayUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://ayla.shop';
  try {
    return new URL(url).hostname;
  } catch {
    return 'ayla.shop';
  }
}
