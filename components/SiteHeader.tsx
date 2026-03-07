import Link from 'next/link';
import { copy } from '@/content/copy';
import { Locale } from '@/content/site';
import { Container } from './ui';

export function SiteHeader({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const switchHref = lang === 'es' ? '/en' : '/es';

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-charcoal/85 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href={`/${lang}`} className="font-display text-lg font-bold tracking-[-0.01em] text-brand-sky md:text-xl">
            {t.common.clubName}
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {t.nav.map((item) => (
              <Link key={item.href} href={item.href} className="font-display text-sm font-semibold text-brand-softWhite/85 hover:text-brand-sky">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href={switchHref} className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 font-display text-xs font-semibold tracking-[0.08em] hover:border-brand-sky/70 hover:bg-brand-sky/15">
            {t.common.switchTo}
          </Link>
        </div>
      </Container>
    </header>
  );
}
