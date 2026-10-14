import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { DEFAULT_REVIEWS, products } from '@/data/products';
import { notFound } from 'next/navigation';
import ProductPageContent from '@/components/product/ProductPageContent';
import ProductViewPixel from '@/components/tracking/ProductViewPixel';
import LiveStorefrontPrices from '@/components/product/LiveStorefrontPrices';
import JsonLd from '@/components/seo/JsonLd';

const ExitIntentOffer = dynamic(() => import('@/components/product/ExitIntentOffer'), {
  ssr: false,
});
import { buildPageMetadata, productJsonLd, siteConfig } from '@/lib/seo';
import { getProductWithLivePrice } from '@/lib/product-prices';

export const revalidate = 300;

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const base = products.find((p) => p.id === params.id);
  if (!base) {
    return { title: 'منتج غير موجود' };
  }

  const product = await getProductWithLivePrice(base);

  return buildPageMetadata({
    title: `${product.name} — ${product.price} دج | ${siteConfig.nameAr}`,
    description: product.description,
    path: `/product/${product.id}`,
    image: product.images?.[0],
    keywords: [product.name, siteConfig.nameAr, 'دفع عند الاستلام', 'حقائب نسائية'],
  });
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const base = products.find((p) => p.id === params.id);
  if (!base) notFound();

  const product = await getProductWithLivePrice(base);
  const reviews = product.reviews?.length ? product.reviews : DEFAULT_REVIEWS;

  return (
    <>
      <ProductViewPixel
        productId={product.id}
        productName={product.name}
        price={product.price}
      />
      <JsonLd data={productJsonLd(product)} />
      <LiveStorefrontPrices />
      <ProductPageContent product={product} reviews={reviews} />
      <ExitIntentOffer
        productId={product.id}
        productName={product.name}
        basePrice={product.price}
      />
    </>
  );
}
