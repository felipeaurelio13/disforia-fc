import { notFound } from 'next/navigation';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { Locale, locales } from '@/content/site';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
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
