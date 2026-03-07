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
      <Section className="pt-8 md:pt-14">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end">
            <Reveal>
              <p className="font-display text-xs uppercase tracking-[0.2em] text-brand-sky">Disforia FC</p>
              <h1 className="mt-4 max-w-3xl font-display text-[2.6rem] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] sm:text-[4rem] lg:text-[5.1rem]">
                {t.home.hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-softWhite/82">{t.home.hero.subtitle}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href={`/${lang}/club`}>{t.home.hero.primary}</ButtonLink>
                <ButtonLink href={`/${lang}/valencia-2026`} variant="secondary">
                  {t.home.hero.secondary}
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delayMs={130}>
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(160deg,#141414_10%,#1f2f3a_55%,#87C2E34f_100%)] p-6 shadow-surface md:min-h-[420px]">
                <div className="absolute -right-20 -top-16 h-44 w-44 rounded-full border border-brand-sky/45" aria-hidden="true" />
                <div className="absolute -bottom-12 left-10 h-52 w-52 rounded-full border border-brand-magenta/35" aria-hidden="true" />
                <div className="relative flex h-full min-h-72 flex-col justify-between">
                  <p className="max-w-sm font-display text-xl font-semibold leading-tight md:text-2xl">Entrenar, competir y representar con identidad y alto nivel deportivo.</p>
                  <p className="mt-5 inline-flex w-fit rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-brand-softWhite/80">Club deportivo real, comunidad viva</p>
                </div>
              </div>
            </Reveal>
          </div>
      </Section>
      <HomeSections lang={lang} />
    </>
  );
}
