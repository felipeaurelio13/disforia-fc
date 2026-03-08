import Image from 'next/image';
import { HomeSections } from '@/components/sections';
import { Reveal } from '@/components/Reveal';
import { ButtonLink, Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';

export default function Home({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  const t = copy[lang];

  return (
    <>
      <Section className="pt-5 sm:pt-8 md:pt-12">
        <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.16em] text-brand-sky">{t.home.hero.kicker}</p>
            <h1 className="mt-3 max-w-3xl text-balance font-display text-[2rem] font-extrabold uppercase leading-[0.94] tracking-[-0.03em] sm:text-[2.6rem] md:text-[3.3rem] lg:text-[4.6rem]">
              {t.home.hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-softWhite/82 sm:text-base md:text-lg">{t.home.hero.subtitle}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={`/${lang}/club`}>{t.home.hero.primary}</ButtonLink>
              <ButtonLink href={`/${lang}/valencia-2026`} variant="secondary">
                {t.home.hero.secondary}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(160deg,#141414_10%,#1f2f3a_55%,#87C2E34f_100%)] p-5 shadow-surface md:min-h-[380px]">
              <div className="absolute -right-16 -top-14 h-40 w-40 rounded-full border border-brand-sky/45" aria-hidden="true" />
              <div className="absolute -bottom-10 left-6 h-40 w-40 rounded-full border border-brand-magenta/35" aria-hidden="true" />
              <div className="relative flex h-full min-h-56 flex-col justify-between sm:min-h-72">
                <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-black/25 px-3 py-2">
                  <Image src="/images/disforia-logo.svg" alt="Logo de Disforia FC" width={36} height={36} className="h-9 w-9" priority />
                  <span className="font-display text-[11px] uppercase tracking-[0.12em] text-brand-softWhite/80">Disforia FC</span>
                </div>
                <p className="max-w-sm font-display text-lg font-semibold leading-tight sm:text-xl md:text-2xl">
                  {lang === 'es' ? 'Entrenar, competir y representar con identidad y nivel deportivo.' : 'Train, compete, and represent with identity and sporting level.'}
                </p>
                <p className="mt-4 inline-flex w-fit rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-brand-softWhite/80 sm:text-xs">
                  {lang === 'es' ? 'Club deportivo real, comunidad viva' : 'Real sports club, living community'}
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
