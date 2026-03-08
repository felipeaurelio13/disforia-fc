import { HomeSections } from '@/components/sections';
import { Reveal } from '@/components/Reveal';
import { SafeImage } from '@/components/ui/SafeImage';
import { ButtonLink, Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';
import { localizedPath } from '@/lib/routes';

export default function Home({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  const t = copy[lang];

  return (
    <>
      <Section className="pt-2 sm:pt-4 md:pt-6">
        <div className="grid gap-4 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.16em] text-brand-sky">{t.home.hero.kicker}</p>
            <h1 className="mt-2.5 max-w-3xl text-balance font-display text-[1.9rem] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] sm:text-[2.35rem] md:text-[3.1rem] lg:text-[4.2rem]">
              {t.home.hero.title}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-softWhite/82 sm:text-base md:text-lg">{t.home.hero.subtitle}</p>
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <ButtonLink href={localizedPath(lang, 'club')}>{t.home.hero.primary}</ButtonLink>
              <ButtonLink href={localizedPath(lang, 'valencia')} variant="secondary">{t.home.hero.secondary}</ButtonLink>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(160deg,#141414_10%,#1f2f3a_55%,#87C2E34f_100%)] p-5 shadow-surface md:min-h-[330px]">
              <div className="relative flex h-full min-h-52 flex-col justify-between sm:min-h-64">
                <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-black/25 px-3 py-2">
                  <SafeImage src="/images/disforia-logo.svg" alt="Disforia FC logo" width={36} height={36} className="h-9 w-9 object-contain" fallbackLabel="Disforia FC" priority />
                  <span className="font-display text-[11px] uppercase tracking-[0.12em] text-brand-softWhite/80">Disforia FC</span>
                </div>
                <p className="max-w-sm font-display text-lg font-semibold leading-tight sm:text-xl md:text-2xl">
                  {lang === 'es' ? 'Entrenar, competir y construir comunidad desde el deporte.' : 'Train, compete, and build community through sport.'}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
      <HomeSections lang={lang} />
    </>
  );
}
