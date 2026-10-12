import Link from 'next/link';
import { storeBrand } from '@/lib/store-brand';

export default function Header() {
  return (
    <header className="bg-background/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-primary/5">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-2xl font-black text-primary tracking-tight">
            {storeBrand.logoPrimary}{' '}
            <span className="text-secondary text-lg font-bold tracking-[0.2em]">
              {storeBrand.logoSecondary}
            </span>
          </span>
          <span className="text-[10px] text-muted font-medium mt-0.5">{storeBrand.taglineAr}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-medium text-muted">
          <Link href="/" className="hover:text-primary transition-colors">
            الرئيسية
          </Link>
          <Link href="/#products" className="hover:text-primary transition-colors">
            الحقائب
          </Link>
          <Link href="/#reviews" className="hover:text-primary transition-colors">
            آراء الزبونات
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/#products"
            className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm md:text-base"
          >
            تسوقي الآن
          </a>
        </div>
      </div>
    </header>
  );
}
