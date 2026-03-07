import { HomeSections } from '@/components/sections';
import { ButtonLink, Container, Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';

export default function Home({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  const t = copy[lang];

  return (
    <>
      <Section>
        <Container>
          <div className="grid gap-8 py-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-brand-sky">Disforia FC</p>
              <h1 className="text-4xl font-semibold uppercase leading-tight sm:text-6xl">{t.home.hero.title}</h1>
              <p className="mt-5 max-w-xl text-lg text-brand-softWhite/80">{t.home.hero.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={`/${lang}/club`}>{t.home.hero.primary}</ButtonLink>
                <ButtonLink href={`/${lang}/valencia-2026`} secondary>{t.home.hero.secondary}</ButtonLink>
              </div>
            </div>
            <div className="h-64 rounded-3xl border border-white/10 bg-[linear-gradient(145deg,#141414_20%,#2c3440_65%,#87C2E380)]" aria-label="Hero image placeholder" />
          </div>
        </Container>
      </Section>
      <HomeSections lang={lang} />
    </>
  );
}
