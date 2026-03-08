'use client';

import Link from 'next/link';
import { useState } from 'react';
import { copy } from '@/content/copy';
import { Locale } from '@/content/site';
import { SafeImage } from '@/components/ui/SafeImage';
import { localizedPath } from '@/lib/routes';
import { Container } from './ui';

export function SiteHeader({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const switchHref = lang === 'es' ? '/en' : '/es';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-secondary/10 bg-brand-surface/95 backdrop-blur-md">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-brand-accent focus:px-3 focus:py-2 focus:text-brand-secondary">
        {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>
      <Container>
        <div className="flex items-center justify-between py-2.5 sm:py-3">
          <Link href={`/${lang}`} className="inline-flex min-h-12 items-center gap-3 pr-2" onClick={() => setMenuOpen(false)}>
            <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-brand-secondary/12 bg-brand-bg">
              <SafeImage src="/images/disforia-logo.svg" alt="Disforia FC" width={36} height={36} className="h-9 w-9 object-contain" fallbackLabel="Disforia FC" priority />
            </span>
            <span className="text-sm font-semibold tracking-tight text-brand-secondary sm:text-base">{t.common.clubName}</span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {t.nav.map((item) => (
              <Link key={item.route} href={localizedPath(lang, item.route)} className="nav-link min-h-12 content-center text-sm font-medium text-brand-secondary/86 hover:text-brand-primary">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href={localizedPath(lang, 'valencia')} className="hidden min-h-12 items-center rounded-full bg-brand-primary px-4 py-2 text-xs font-semibold text-white shadow-soft hover:scale-[1.02] hover:shadow-lift sm:inline-flex" onClick={() => setMenuOpen(false)}>{t.common.supportCTA}</Link>
            <Link href={switchHref} className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-brand-secondary/18 bg-brand-bg px-2.5 text-[11px] font-semibold tracking-[0.08em] text-brand-secondary hover:border-brand-accent hover:text-brand-accent" onClick={() => setMenuOpen(false)}>
              {t.common.switchTo}
            </Link>
            <button
              type="button"
              className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-brand-secondary/18 bg-brand-bg text-brand-secondary md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? (lang === 'es' ? 'Cerrar menú' : 'Close menu') : lang === 'es' ? 'Abrir menú' : 'Open menu'}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="text-base leading-none">{menuOpen ? '×' : '☰'}</span>
            </button>
          </div>
        </div>
      </Container>

      {menuOpen ? (
        <div id="mobile-nav" className="border-t border-brand-secondary/10 bg-brand-surface md:hidden">
          <Container>
            <div className="pb-2 pt-3">
              <Link href={localizedPath(lang, 'valencia')} onClick={() => setMenuOpen(false)} className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft">
                {t.common.supportCTA}
              </Link>
            </div>
            <nav className="grid gap-2 py-1">
              {t.nav.map((item) => (
                <Link
                  key={item.route}
                  href={localizedPath(lang, item.route)}
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex min-h-12 items-center rounded-xl border border-brand-secondary/12 bg-brand-bg px-3 text-sm font-medium text-brand-secondary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
