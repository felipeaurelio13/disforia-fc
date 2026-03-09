import { HomeSections } from '@/components/sections';
import { Reveal } from '@/components/Reveal';
import { SafeImage } from '@/components/ui/SafeImage';
import { Badge, ButtonLink, Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';

export default function Home({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  const t = copy[lang];

  return (
    <>
      <Section className="pt-3 sm:pt-5 md:pt-6">
        <div className="overflow-hidden rounded-[24px] border border-brand-softGray bg-[linear-gradient(140deg,#000000_8%,#835ca3_58%,#89c2e3_100%)] px-4 py-6 text-white shadow-lift sm:px-7 sm:py-9 md:px-10 md:py-11">
          <div className="mx-auto grid max-w-5xl gap-5 text-left lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <Badge>{t.home.hero.kicker}</Badge>
              <h1 className="mt-3 text-balance">{t.home.hero.title}</h1>
              <p className="mt-3 max-w-2xl text-sm text-white/90 sm:text-base">{t.home.hero.subtitle}</p>
              <div className="mt-5 grid gap-2.5 sm:flex sm:flex-wrap">
                <ButtonLink href="#club">{t.home.hero.primary}</ButtonLink>
                <ButtonLink href="#valencia" variant="ghost">{t.home.hero.secondary}</ButtonLink>
              </div>
            </Reveal>
            <Reveal delayMs={120}>
              <div className="relative w-full overflow-hidden rounded-[20px] border border-white/25">
                <SafeImage
                  src="/images/prensa/galio-03.jpg"
                  alt={lang === 'es' ? 'Equipo completo de Disforia FC' : 'Full Disforia FC team'}
                  fill
                  sizes="(max-width: 1024px) 90vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="relative px-4 pb-4 pt-48 sm:px-5 sm:pb-5 sm:pt-56">
                  <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/30 bg-black/30 px-3 py-2 backdrop-blur-sm">
                    <SafeImage src="/images/disforia-logo.svg" alt="Disforia FC logo" width={34} height={34} className="h-8 w-8 object-contain" fallbackLabel="Disforia FC" />
                    <span className="text-[11px] uppercase tracking-[0.12em] text-white/90">Disforia FC</span>
                  </div>
                  <p className="mt-3 font-display text-lg font-semibold leading-tight text-white drop-shadow-lg sm:text-[1.35rem]">
                    {lang === 'es' ? 'Entrenar, competir y construir comunidad desde el deporte.' : 'Train, compete, and build community through sport.'}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
      <HomeSections lang={lang} />
    </>
  );
}
