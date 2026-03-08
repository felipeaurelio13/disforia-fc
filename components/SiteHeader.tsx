'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { copy } from '@/content/copy';
import { Locale } from '@/content/site';
import { Container } from './ui';

export function SiteHeader({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const switchHref = lang === 'es' ? '/en' : '/es';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-charcoal/90 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between py-3">
          <Link href={`/${lang}`} className="inline-flex min-h-12 items-center gap-2 pr-2" onClick={() => setMenuOpen(false)}><Image src="/images/disforia-logo.svg" alt="Disforia FC" width={38} height={38} className="h-9 w-9 rounded-full border border-white/15 bg-white/5" priority /><span className="font-display text-sm font-bold tracking-[-0.01em] text-brand-sky sm:text-base md:text-lg">{t.common.clubName}</span></Link>

          <nav className="hidden items-center gap-5 md:flex">
            {t.nav.map((item) => (
              <Link key={item.href} href={item.href} className="min-h-12 content-center font-display text-sm font-semibold text-brand-softWhite/85 hover:text-brand-sky">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href={`/${lang}/valencia-2026`} className="hidden min-h-12 items-center rounded-full border border-brand-magenta/65 bg-brand-magenta px-4 py-2 text-xs font-semibold text-white sm:inline-flex" onClick={() => setMenuOpen(false)}>{t.common.supportCTA}</Link>
            <Link href={switchHref} className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 font-display text-xs font-semibold tracking-[0.08em] hover:border-brand-sky/70 hover:bg-brand-sky/15" onClick={() => setMenuOpen(false)}>
              {t.common.switchTo}
            </Link>
            <button
              type="button"
              className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-brand-softWhite md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? (lang === 'es' ? 'Cerrar menú' : 'Close menu') : lang === 'es' ? 'Abrir menú' : 'Open menu'}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="text-lg leading-none">{menuOpen ? '×' : '☰'}</span>
            </button>
          </div>
        </div>
      </Container>

      {menuOpen ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-brand-charcoal/95 md:hidden">
          <Container>
            <div className="py-3">
              <Link href={`/${lang}/valencia-2026`} onClick={() => setMenuOpen(false)} className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-brand-magenta/65 bg-brand-magenta px-5 py-2.5 text-sm font-semibold text-white">
                {t.common.supportCTA}
              </Link>
            </div>
            <nav className="grid py-2">
              {t.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex min-h-12 items-center border-b border-white/10 py-2 font-display text-sm font-semibold text-brand-softWhite/90"
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
