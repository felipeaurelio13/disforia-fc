import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { Locale, locales } from '@/content/site';
import { localizedPath } from '@/lib/routes';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!locales.includes(params.lang as Locale)) return {};
  const lang = params.lang as Locale;

  const isEs = lang === 'es';
  const title = isEs
    ? 'Disforia FC | Primer club deportivo trans y no binario de Chile'
    : "Disforia FC | Chile's first trans and non-binary sports club";
  const description = isEs
    ? 'Primer club deportivo para personas trans y no binarias de Chile. Entrenamos, competimos y construimos comunidad desde 2019. Medalla de bronce en Gay Games XII Valencia 2026.'
    : "Chile's first sports club for trans and non-binary people. Training, competing, and building community since 2019. Bronze medal at the Gay Games XII Valencia 2026.";

  return {
    title,
    description,
    alternates: {
      canonical: localizedPath(lang, 'home'),
      languages: {
        es: localizedPath('es', 'home'),
        en: localizedPath('en', 'home'),
      },
    },
    openGraph: {
      title,
      description,
      url: `https://disforia-fc.org${localizedPath(lang, 'home')}`,
      siteName: 'Disforia FC',
      images: [
        {
          url: '/images/prensa/galio-03.jpg',
          width: 1024,
          height: 683,
          alt: 'Disforia FC',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/prensa/galio-03.jpg'],
    },
  };
}

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();

  const lang = params.lang as Locale;
  const isEs = lang === 'es';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SportsClub',
    name: 'Disforia FC',
    alternateName: 'Disforia Fútbol Club',
    url: `https://disforia-fc.org${localizedPath(lang, 'home')}`,
    logo: 'https://disforia-fc.org/images/disforia-logo.svg',
    image: 'https://disforia-fc.org/images/prensa/galio-03.jpg',
    description: isEs
      ? 'Primer club deportivo para personas trans y no binarias de Chile. Entrenamos, competimos y construimos comunidad desde 2019. Medalla de bronce en Gay Games XII Valencia 2026.'
      : "Chile's first sports club for trans and non-binary people. Training, competing, and building community since 2019. Bronze medal at the Gay Games XII Valencia 2026.",
    foundingDate: '2019',
    founder: {
      '@type': 'Person',
      name: 'Christopher Erlandsen Lorca',
    },
    sport: ['Soccer', 'Basketball', 'Volleyball'],
    award: isEs
      ? 'Medalla de Bronce en Fútbol 7 · Gay Games XII Valencia 2026'
      : 'Bronze Medal in Football 7 · Gay Games XII Valencia 2026',
    sameAs: [
      'https://www.instagram.com/disforia_fc/',
      'https://www.instagram.com/disforiabskt/',
      'https://www.instagram.com/disforiavoley/',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader lang={lang} />
      <main id="main-content">{children}</main>
      <SiteFooter lang={lang} />
    </>
  );
}
