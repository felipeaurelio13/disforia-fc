import Link from 'next/link';
import { copy } from '@/content/copy';
import { externalLinks, Locale } from '@/content/site';
import { Container } from './ui';

export function SiteFooter({ lang }: { lang: Locale }) {
  const t = copy[lang];

  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-brand-sky">{t.common.clubName}</p>
            <p className="mt-2 text-sm text-brand-softWhite/70">v0.2.0</p>
          </div>
          <div className="text-sm">
            {t.nav.map((item) => (
              <p key={item.href}>
                <Link href={item.href} className="text-brand-softWhite/80 hover:text-brand-sky">
                  {item.label}
                </Link>
              </p>
            ))}
          </div>
          <div className="text-sm">
            <a href={externalLinks.instagram} target="_blank" className="text-brand-softWhite/80 hover:text-brand-sky" rel="noreferrer">
              Instagram
            </a>
            <p>
              <a href={externalLinks.email} className="text-brand-softWhite/80 hover:text-brand-sky">
                Email
              </a>
            </p>
          </div>
          <div>
            <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-brand-magenta px-4 py-2 text-sm font-semibold text-white">
              {t.common.supportCTA}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
