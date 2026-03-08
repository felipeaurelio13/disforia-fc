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
      <Section className="pt-4 sm:pt-6 md:pt-8">
        <div className="overflow-hidden rounded-[24px] bg-[linear-gradient(125deg,#d4005a_0%,#003366_85%)] px-5 py-8 text-white shadow-lift sm:px-8 sm:py-10 md:px-12 md:py-14">
          <div className="mx-auto grid max-w-5xl gap-6 text-center lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:text-left">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">{t.home.hero.kicker}</p>
              <h1 className="mt-3 text-balance">{t.home.hero.title}</h1>
              <p className="mx-auto mt-4 max-w-2xl text-white/88 lg:mx-0">{t.home.hero.subtitle}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <ButtonLink href={localizedPath(lang, 'club')}>{t.home.hero.primary}</ButtonLink>
                <ButtonLink href={localizedPath(lang, 'valencia')} variant="secondary">{t.home.hero.secondary}</ButtonLink>
              </div>
            </Reveal>
            <Reveal delayMs={120}>
              <div className="mx-auto w-full max-w-sm rounded-[20px] border border-white/30 bg-white/10 p-5 backdrop-blur-sm">
                <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/30 bg-white/15 px-3 py-2">
                  <SafeImage src="/images/disforia-logo.svg" alt="Disforia FC logo" width={36} height={36} className="h-9 w-9 object-contain" fallbackLabel="Disforia FC" priority />
                  <span className="text-[11px] uppercase tracking-[0.12em] text-white/90">Disforia FC</span>
                </div>
                <p className="mt-5 text-lg font-semibold leading-tight sm:text-xl">
                  {lang === 'es' ? 'Entrenar, competir y construir comunidad desde el deporte.' : 'Train, compete, and build community through sport.'}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
      <HomeSections lang={lang} />
    </>
  );
}
