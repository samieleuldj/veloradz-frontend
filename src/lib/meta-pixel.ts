/** Meta Pixel — AYLA BAGS (optional per-product overrides). */
const PIXEL_BY_PRODUCT: Record<string, string | undefined> = {};

export function getMetaPixelIdForProduct(productId: string): string {
  const specific = PIXEL_BY_PRODUCT[productId]?.trim();
  if (specific && specific !== 'your_meta_pixel_id') {
    return specific;
  }
  return getDefaultMetaPixelId();
}

export function getDefaultMetaPixelId(): string {
  const id = (process.env.NEXT_PUBLIC_META_PIXEL_ID || process.env.META_PIXEL_ID || '').trim();
  return id === 'your_meta_pixel_id' || id === '...' ? '' : id;
}

export function getMetaPixelIdForPath(pathname: string | null): string {
  const match = pathname?.match(/^\/product\/([^/?#]+)/);
  if (match) {
    return getMetaPixelIdForProduct(decodeURIComponent(match[1]));
  }
  return getDefaultMetaPixelId();
}
