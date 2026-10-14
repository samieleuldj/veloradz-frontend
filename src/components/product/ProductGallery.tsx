import styles from './product-gallery.module.css';

interface ProductGalleryProps {
  images: string[];
  productName: string;
  productId: string;
}

/** SSR gallery (CSS radios) — images show on first paint and on client navigation without refresh. */
export default function ProductGallery({ images, productName, productId }: ProductGalleryProps) {
  if (images.length === 0) return null;

  const groupName = `pg-${productId}`;
  const thumbCols =
    images.length >= 4 ? 'grid-cols-4' : images.length === 3 ? 'grid-cols-3' : 'grid-cols-2';

  const esc = (id: string) => id.replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, '\\$1');

  const slideRules = images
    .map(
      (_, index) =>
        `#${esc(`${productId}-slide-${index}`)}:checked ~ [data-gallery-hero] [data-slide="${index}"] { opacity: 1; z-index: 1; pointer-events: auto; }`
    )
    .join('\n');

  const dotRules = images
    .map(
      (_, index) =>
        `#${esc(`${productId}-slide-${index}`)}:checked ~ [data-gallery-hero] [data-dot="${index}"] { background: var(--color-primary, #111111); }`
    )
    .join('\n');

  const thumbRules = images
    .map(
      (_, index) =>
        `#${esc(`${productId}-slide-${index}`)}:checked ~ [data-gallery-thumbs] [data-thumb="${index}"] { border-color: var(--color-primary, #111111); box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary, #111111) 30%, transparent); }`
    )
    .join('\n');

  const defaultSlideRule = `[data-gallery-root="${productId}"] [data-slide="0"] { opacity: 1; z-index: 1; pointer-events: auto; }`;

  return (
    <div id="product-hero" data-gallery-root={productId} className="space-y-4" dir="rtl">
      <style
        dangerouslySetInnerHTML={{
          __html: `${defaultSlideRule}\n${slideRules}\n${dotRules}\n${thumbRules}`,
        }}
      />

      {images.map((_, index) => (
        <input
          key={`radio-${index}`}
          type="radio"
          name={groupName}
          id={`${productId}-slide-${index}`}
          defaultChecked={index === 0}
          className={styles.galleryInput}
        />
      ))}

      <div
        data-gallery-hero
        className="relative w-full aspect-square min-h-[280px] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
      >
        <div className="absolute inset-0">
          {images.map((src, index) => (
            <div key={src} data-slide={index} className={styles.slide}>
              {index === 0 ? (
                <img
                  src={src}
                  alt={`${productName} - صورة ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-contain p-2"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              ) : (
                <img
                  src={src}
                  alt={`${productName} - صورة ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-contain p-2"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <label
                key={`dot-${index}`}
                htmlFor={`${productId}-slide-${index}`}
                data-dot={index}
                className={`${styles.dot} ${index === 0 ? styles.dotActive : ''}`}
                aria-label={`صورة ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div data-gallery-thumbs className={`grid ${thumbCols} gap-4`}>
          {images.map((image, index) => (
            <label
              key={`${productId}-thumb-${image}`}
              htmlFor={`${productId}-slide-${index}`}
              data-thumb={index}
              className={`${styles.thumb} relative aspect-square min-h-[72px] rounded-xl border overflow-hidden shadow-sm transition-colors bg-white ${
                index === 0 ? styles.thumbRingActive : styles.thumbRing
              }`}
            >
              <img
                src={image}
                alt={`${productName} - مصغرة ${index + 1}`}
                className="absolute inset-0 w-full h-full object-contain p-1"
                loading="lazy"
                decoding="async"
              />
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
