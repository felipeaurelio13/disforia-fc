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

  return {
    alternates: {
      canonical: localizedPath(lang, 'home'),
      languages: {
        es: localizedPath('es', 'home'),
        en: localizedPath('en', 'home'),
      },
    },
  };
}

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();

  const lang = params.lang as Locale;
  return (
    <>
      <SiteHeader lang={lang} />
      <main>{children}</main>
      <SiteFooter lang={lang} />
    </>
  );
}
