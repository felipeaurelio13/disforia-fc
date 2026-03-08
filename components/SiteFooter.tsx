import Link from 'next/link';
import { copy } from '@/content/copy';
import { externalLinks, Locale } from '@/content/site';
import { Container } from './ui';

export function SiteFooter({ lang }: { lang: Locale }) {
  const t = copy[lang];

  return (
    <footer className="mt-14 border-t border-white/10 py-10 md:mt-20 md:py-14">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-bold tracking-[-0.01em] text-brand-sky">{t.common.clubName}</p>
            <p className="mt-2 text-sm font-medium tracking-[0.04em] text-brand-softWhite/65">v0.6.0</p>
          </div>
          <div className="space-y-1 text-sm">
            {t.nav.map((item) => (
              <p key={item.href}>
                <Link href={item.href} className="inline-flex min-h-12 items-center text-brand-softWhite/80 hover:text-brand-sky">
                  {item.label}
                </Link>
              </p>
            ))}
          </div>
          <div className="space-y-2 text-sm">
            <a href={externalLinks.instagram} target="_blank" className="inline-flex min-h-12 items-center text-brand-softWhite/80 hover:text-brand-sky" rel="noreferrer">
              Instagram
            </a>
          </div>
          <div>
            <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-brand-magenta/65 bg-brand-magenta px-5 py-2.5 font-display text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#a63c69]">
              {t.common.supportCTA}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
