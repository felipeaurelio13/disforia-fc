import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { copy } from '@/content/copy';
import { externalLinks, Locale } from '@/content/site';
import { navItemHref } from '@/lib/routes';
import { ActionLink, Badge, Container, Separator } from './ui';
import packageJson from '@/package.json';

export function SiteFooter({ lang }: { lang: Locale }) {
  const t = copy[lang];

  return (
    <footer className="mt-6 border-t border-brand-softGray bg-brand-surface py-8 md:py-10">
      <Container>
        <div className="card-surface p-5 sm:p-6 lg:p-7">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_220px_minmax(280px,0.9fr)] lg:items-start">
            <div>
              <Badge>{t.footer.badge}</Badge>
              <p className="mt-4 font-display text-[1.8rem] font-semibold leading-[1.02] tracking-[-0.03em] text-brand-charcoal sm:text-[2.1rem]">
                {t.common.clubName}
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-text/78 sm:text-base">
                {t.footer.description}
              </p>
            </div>

            <nav aria-label={lang === 'es' ? 'Navegación de pie de página' : 'Footer navigation'}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-lavender/80">{t.footer.navTitle}</p>
              <div className="mt-4 space-y-2">
                {t.nav.map((item, i) => (
                  <p key={`${item.label}-${i}`}>
                    <Link href={navItemHref(lang, item)} className="nav-link inline-flex min-h-11 items-center text-sm text-brand-charcoal/84 hover:text-brand-magenta sm:text-base">
                      {item.label}
                    </Link>
                  </p>
                ))}
              </div>
            </nav>

            <div className="rounded-[24px] border border-brand-softGray/80 bg-brand-bg/68 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-lavender/80">
                {t.footer.campaignTitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-text/76">
                {t.footer.campaignText}
              </p>

              <div className="mt-5 space-y-3">
                <ActionLink href={externalLinks.gofundme} external className="gap-2.5">
                  {t.common.supportCTA}
                  <ArrowUpRight className="h-4 w-4" />
                </ActionLink>
                <ActionLink href={externalLinks.instagram} external variant="text" className="min-h-0">
                  {t.footer.instagramCta}
                </ActionLink>
              </div>
            </div>
          </div>

          <div className="my-5"><Separator /></div>
          <div className="flex flex-col gap-2 text-xs text-brand-charcoal/60 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {t.common.clubName}</p>
            <p className="tracking-[0.08em]">Release {packageJson.version}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
