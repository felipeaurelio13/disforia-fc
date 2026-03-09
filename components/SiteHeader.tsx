'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { copy } from '@/content/copy';
import { Locale } from '@/content/site';
import { localizedPath, navItemHref } from '@/lib/routes';
import { SafeImage } from './ui/SafeImage';
import { Container } from './ui';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu';

export function SiteHeader({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const switchHref = useMemo(() => (lang === 'es' ? '/en' : '/es'), [lang]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-softGray/90 bg-brand-bg/95 backdrop-blur">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[60] focus:rounded-full focus:bg-brand-surface focus:px-3 focus:py-2">
        {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>
      <Container>
        <div className="flex min-h-[68px] items-center justify-between gap-2">
          <Link href={localizedPath(lang, 'home')} className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-brand-softGray/80 bg-brand-surface px-3 py-2">
            <SafeImage src="/images/disforia-logo.svg" alt="Disforia FC logo" width={30} height={30} className="h-7 w-7 object-contain" fallbackLabel="Disforia FC" priority />
            <span className="font-display text-sm font-semibold tracking-tight text-brand-charcoal sm:text-base">{t.common.clubName}</span>
          </Link>

          <div className="hidden md:flex md:flex-1 md:justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-0.5">
                {t.nav.map((item, i) => (
                  <NavigationMenuItem key={i}>
                    <NavigationMenuLink href={navItemHref(lang, item)}>{item.label}</NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-1.5">
            <a href="#valencia" className="hidden min-h-12 items-center rounded-full bg-brand-primary px-4 py-2 text-xs font-semibold text-white shadow-soft hover:scale-[1.01] hover:shadow-lift sm:inline-flex" onClick={() => setMenuOpen(false)}>{t.common.supportCTA}</a>
            <Link href={switchHref} className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-brand-softGray bg-brand-surface px-2 text-[11px] font-semibold tracking-[0.08em] text-brand-charcoal hover:border-brand-accent" onClick={() => setMenuOpen(false)}>
              {t.common.switchTo}
            </Link>
            <button
              type="button"
              className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-brand-softGray bg-brand-surface text-brand-charcoal md:hidden"
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
        <div id="mobile-nav" className="border-t border-brand-softGray bg-brand-bg md:hidden">
          <Container>
            <div className="grid gap-2 pb-3 pt-3">
              <a href="#valencia" onClick={() => setMenuOpen(false)} className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft">
                {t.common.supportCTA}
              </a>
              <nav className="grid gap-2 py-1">
                {t.nav.map((item, i) => (
                  <Link
                    key={i}
                    href={navItemHref(lang, item)}
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex min-h-12 items-center rounded-2xl border border-brand-softGray bg-brand-surface px-3.5 text-sm font-medium text-brand-charcoal"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
