"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { products, type ProductCategory } from '@/data/products';
import CartDrawer from '@/components/cart/CartDrawer';

const CATEGORY_FILTERS: { id: 'all' | ProductCategory; label: string }[] = [
  { id: 'all', label: 'الكل' },
  { id: 'crossbody', label: 'كروس' },
  { id: 'tote', label: 'توت' },
  { id: 'evening', label: 'سهرة' },
];

export default function HomeContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [category, setCategory] = useState<'all' | ProductCategory>('all');

  const visibleProducts = useMemo(
    () =>
      category === 'all' ? products : products.filter((p) => p.category === category),
    [category]
  );

  const handleQuickAdd = (productId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedProduct(productId);
    setIsCartOpen(true);
  };

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-background to-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-secondary/20 mb-6 text-sm font-bold text-primary">
            <span className="animate-pulse">🟢</span> حقائب مختارة — AYLA BAGS الجزائر
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-text mb-4 leading-tight">
            حقائب <span className="text-accent">تليق بيك</span>
            <br className="hidden md:block" />
            {' '}— تشوفي، تستلمي، تدفعي
          </h1>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            كروس، توت، وسهرة — جودة تبان في التفاصيل. الدفع عند الاستلام والتوصيل لـ 58 ولاية.
          </p>
          <a
            href="#products"
            className="inline-block bg-accent hover:bg-accent/90 text-white text-xl font-black py-4 px-12 rounded-xl shadow-[0_8px_20px_-6px_rgba(196,92,62,0.45)] transition-transform active:scale-95"
          >
            اكتشفي الحقائب
          </a>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: '🤝', label: 'الدفع عند الاستلام' },
              { icon: '🚚', label: 'توصيل 58 ولاية' },
              { icon: '🛡️', label: 'ضمان الاستبدال' },
              { icon: '⭐', label: 'جودة مجربة' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center p-2">
                <div className="text-3xl mb-2">{item.icon}</div>
                <span className="font-bold text-gray-800 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-text mb-2">مجموعتنا</h2>
            <p className="text-muted">اختاري الحقيبة اللي تمشي مع أسلوبك</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORY_FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  category === item.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-muted border border-primary/10 hover:border-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group"
              >
                <Link href={`/product/${product.id}`} className="relative block">
                  {product.badge && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                      {product.badge}
                    </div>
                  )}
                  <div className="relative aspect-square w-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors overflow-hidden">
                    {product.images && product.images[0] ? (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <span className="text-gray-400 font-medium">صورة {product.name}</span>
                    )}
                  </div>
                </Link>

                <div className="p-5 flex flex-col flex-grow">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-lg font-bold text-text mb-1 hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>
                  {product.material && (
                    <p className="text-xs text-muted mb-2 line-clamp-1">{product.material}</p>
                  )}

                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex text-yellow-400 text-xs">⭐⭐⭐⭐⭐</div>
                    <span className="text-xs text-gray-500">
                      ({product.reviewCount ?? 120}+ تقييم)
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-5 mt-auto pt-4">
                    <span className="text-2xl font-black text-primary">{product.price} دج</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">{product.oldPrice} دج</span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => handleQuickAdd(product.id, e)}
                    className="block w-full text-center bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl transition-colors active:scale-95"
                  >
                    أطلبي الآن
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-text mb-8">آراء زبونات AYLA</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-background p-4 rounded-xl border border-primary/10 max-w-xs text-right">
              <div className="flex text-yellow-400 text-sm mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-muted text-sm italic">
                &quot;الحقيبة كيما في الصور، الخامة مليحة والتغليف محترم.&quot;
              </p>
              <span className="block mt-2 font-bold text-sm text-text">- ياسمين، الجزائر</span>
            </div>
            <div className="bg-background p-4 rounded-xl border border-primary/10 max-w-xs text-right">
              <div className="flex text-yellow-400 text-sm mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-muted text-sm italic">
                &quot;COD يطمّن — شفت الحقيبة قبل ما ندفع. توصيل سريع.&quot;
              </p>
              <span className="block mt-2 font-bold text-sm text-text">- إيناس، وهران</span>
            </div>
          </div>
        </div>
      </section>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        productId={selectedProduct}
      />
    </div>
  );
}
