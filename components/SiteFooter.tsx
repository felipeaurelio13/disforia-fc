import Link from 'next/link';
import { copy } from '@/content/copy';
import { externalLinks, Locale } from '@/content/site';
import { navItemHref } from '@/lib/routes';
import { Badge, Container, Separator } from './ui';

export function SiteFooter({ lang }: { lang: Locale }) {
  const t = copy[lang];

  return (
    <footer className="mt-4 border-t border-brand-softGray bg-brand-surface py-8 md:mt-6 md:py-10">
      <Container>
        <div className="card-surface p-5 sm:p-7">
          <div className="grid gap-7 lg:grid-cols-[1.1fr_1fr_1fr]">
            <div>
              <Badge>{lang === 'es' ? 'Desde 2019' : 'Since 2019'}</Badge>
              <p className="mt-3 font-display text-[1.6rem] font-semibold tracking-tight text-brand-charcoal sm:text-[1.9rem]">{t.common.clubName}</p>
              <p className="mt-2 max-w-sm text-sm text-brand-text/78 sm:text-base">
                {lang === 'es'
                  ? 'Primer club deportivo trans y no binario de Chile. Comunidad, competencia y pertenencia.'
                  : 'Chile\u2019s first trans and non-binary sports club. Community, competition, and belonging.'}
              </p>
            </div>

            <nav className="space-y-1" aria-label={lang === 'es' ? 'Navegación de pie de página' : 'Footer navigation'}>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-lavender/80">{lang === 'es' ? 'Secciones' : 'Sections'}</p>
              {t.nav.map((item, i) => (
                <p key={i}>
                  <Link href={navItemHref(lang, item)} className="nav-link inline-flex min-h-11 items-center text-sm text-brand-charcoal/86 hover:text-brand-magenta sm:text-base">
                    {item.label}
                  </Link>
                </p>
              ))}
            </nav>

            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-lavender/80">{lang === 'es' ? 'Valencia 2026' : 'Valencia 2026'}</p>
              <a href={externalLinks.instagram} target="_blank" className="inline-flex min-h-11 items-center text-sm text-brand-charcoal/80 hover:text-brand-magenta sm:text-base" rel="noreferrer">Instagram</a>
              <div>
                <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:scale-[1.02] hover:shadow-lift">
                  {t.common.supportCTA}
                </a>
              </div>
            </div>
          </div>

          <div className="my-4"><Separator /></div>
          <div className="flex flex-col gap-1.5 text-xs text-brand-charcoal/60 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; Disforia FC</p>
            <p className="tracking-[0.08em]">Release 0.9.1</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
