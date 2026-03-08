import Link from 'next/link';
import { copy } from '@/content/copy';
import { externalLinks, Locale } from '@/content/site';
import { localizedPath } from '@/lib/routes';
import { Container } from './ui';

export function SiteFooter({ lang }: { lang: Locale }) {
  const t = copy[lang];

  return (
    <footer className="mt-12 border-t border-brand-secondary/10 bg-brand-surface py-10 md:mt-16 md:py-12">
      <Container>
        <div className="card-surface p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr_1fr]">
            <div>
              <p className="text-[1.75rem] font-bold tracking-tight text-brand-secondary sm:text-[2rem]">{t.common.clubName}</p>
              <p className="mt-3 max-w-sm text-brand-text/78 sm:text-base">
                {lang === 'es'
                  ? 'Primer club deportivo trans y no binario de Chile. Comunidad, competencia y pertenencia desde 2019.'
                  : 'Chile’s first trans and non-binary sports club. Community, competition, and belonging since 2019.'}
              </p>
            </div>

            <nav className="space-y-1" aria-label={lang === 'es' ? 'Navegación de pie de página' : 'Footer navigation'}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-secondary/60">{lang === 'es' ? 'Secciones' : 'Sections'}</p>
              {t.nav.map((item) => (
                <p key={item.route}>
                  <Link href={localizedPath(lang, item.route)} className="nav-link inline-flex min-h-12 items-center text-base text-brand-secondary/84 hover:text-brand-primary">
                    {item.label}
                  </Link>
                </p>
              ))}
            </nav>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-secondary/60">{lang === 'es' ? 'Campaña Valencia 2026' : 'Valencia 2026 campaign'}</p>
              <a href={externalLinks.instagram} target="_blank" className="inline-flex min-h-12 items-center text-base text-brand-secondary/82 hover:text-brand-primary" rel="noreferrer">Instagram</a>
              <div>
                <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white shadow-soft hover:scale-[1.02] hover:shadow-lift">
                  {t.common.supportCTA}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-2 border-t border-brand-secondary/10 pt-4 text-xs text-brand-secondary/55 sm:flex-row sm:items-center sm:justify-between">
            <p>© Disforia FC</p>
            <p className="tracking-[0.08em]">Release 0.8.1</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
