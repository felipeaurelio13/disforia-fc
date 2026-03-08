import Link from 'next/link';
import { copy } from '@/content/copy';
import { externalLinks, Locale } from '@/content/site';
import { localizedPath } from '@/lib/routes';
import { Container } from './ui';

export function SiteFooter({ lang }: { lang: Locale }) {
  const t = copy[lang];

  return (
    <footer className="mt-12 border-t border-white/10 bg-[radial-gradient(circle_at_12%_10%,rgb(135_194_227/0.14),transparent_34%),radial-gradient(circle_at_90%_90%,rgb(179_65_115/0.16),transparent_36%)] py-10 md:mt-16 md:py-12">
      <Container>
        <div className="rounded-[24px] border border-white/12 bg-black/25 p-5 backdrop-blur-sm sm:p-7">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr_1fr]">
            <div>
              <p className="font-display text-[1.75rem] font-bold tracking-[-0.02em] text-brand-sky sm:text-[2rem]">{t.common.clubName}</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-softWhite/78 sm:text-base">
                {lang === 'es'
                  ? 'Primer club deportivo trans y no binario de Chile. Comunidad, competencia y pertenencia desde 2019.'
                  : 'Chile’s first trans and non-binary sports club. Community, competition, and belonging since 2019.'}
              </p>
            </div>

            <nav className="space-y-1" aria-label={lang === 'es' ? 'Navegación de pie de página' : 'Footer navigation'}>
              <p className="mb-2 font-display text-xs uppercase tracking-[0.16em] text-brand-softWhite/60">{lang === 'es' ? 'Secciones' : 'Sections'}</p>
              {t.nav.map((item) => (
                <p key={item.route}>
                  <Link href={localizedPath(lang, item.route)} className="inline-flex min-h-12 items-center text-base text-brand-softWhite/84 hover:text-brand-sky">
                    {item.label}
                  </Link>
                </p>
              ))}
            </nav>

            <div className="space-y-4">
              <p className="font-display text-xs uppercase tracking-[0.16em] text-brand-softWhite/60">{lang === 'es' ? 'Campaña Valencia 2026' : 'Valencia 2026 campaign'}</p>
              <a href={externalLinks.instagram} target="_blank" className="inline-flex min-h-12 items-center text-base text-brand-softWhite/82 hover:text-brand-sky" rel="noreferrer">
                Instagram
              </a>
              <div>
                <a
                  href={externalLinks.gofundme}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center rounded-full border border-brand-magenta/65 bg-brand-magenta px-6 py-2.5 font-display text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#a63c69]"
                >
                  {t.common.supportCTA}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-brand-softWhite/55 sm:flex-row sm:items-center sm:justify-between">
            <p>{lang === 'es' ? '© Disforia FC' : '© Disforia FC'}</p>
            <p className="font-display tracking-[0.08em]">Release 0.7.0</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
