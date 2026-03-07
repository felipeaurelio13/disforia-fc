import Link from 'next/link';
import { copy } from '@/content/copy';
import { Locale } from '@/content/site';
import { Container } from './ui';

export function SiteHeader({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const switchHref = lang === 'es' ? '/en' : '/es';

  return (
    <header className="border-b border-white/10">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href={`/${lang}`} className="text-lg font-bold tracking-wide text-brand-sky">
            {t.common.clubName}
          </Link>
          <nav className="hidden gap-5 text-sm md:flex">
            {t.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-brand-softWhite/90 hover:text-brand-sky">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href={switchHref} className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold">
            {t.common.switchTo}
          </Link>
        </div>
      </Container>
    </header>
  );
}
