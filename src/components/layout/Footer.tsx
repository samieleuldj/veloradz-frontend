import Link from 'next/link';
import {
  STORE_PHONE,
  STORE_PHONE_DISPLAY,
  STORE_WHATSAPP_DISPLAY,
  STORE_WHATSAPP_URL,
} from '@/lib/store';
import { storeBrand } from '@/lib/store-brand';

export default function Footer() {
  return (
    <footer className="bg-primary text-cream pt-12 pb-6 border-t border-gold/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-3xl tracking-[0.15em] mb-1" dir="ltr">
              {storeBrand.logoPrimary}{' '}
              <span className="text-gold text-base tracking-[0.4em]">{storeBrand.logoSecondary}</span>
            </h3>
            <p className="font-serif italic text-gold-light mb-4" dir="ltr">L&apos;élégance à portée de main</p>
            <p className="text-gray-400 leading-relaxed mb-4">{storeBrand.description}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">روابط سريعة</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-secondary transition-colors">الرئيسية</Link></li>
              <li><Link href="/#collections" className="hover:text-secondary transition-colors">Collections</Link></li>
              <li><Link href="/#best-sellers" className="hover:text-secondary transition-colors">Les plus vendus</Link></li>
              <li><Link href="/#reviews" className="hover:text-secondary transition-colors">آراء الزبونات</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">تواصل معنا</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href={`tel:+213${STORE_PHONE.slice(1)}`} className="hover:text-secondary transition-colors" dir="ltr">
                  {STORE_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>💬</span>
                <a href={STORE_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" dir="ltr">
                  {STORE_WHATSAPP_DISPLAY} — واتساب
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>{storeBrand.email}</span>
              </li>
              <li className="mt-4">
                <div className="flex gap-2 items-center text-sm bg-white/5 p-3 rounded-lg">
                  <span>🚚</span>
                  <span>توصيل 58 ولاية — الدفع عند الاستلام</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {storeBrand.nameAr}. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
