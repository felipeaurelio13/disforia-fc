import { PressPageContent } from '@/components/pageContent/PressPageContent';
import { Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';


export function generateStaticParams() {
  return [{ lang: 'es' }];
}
export default function DocumentalesPrensaPage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  if (lang === 'en') notFound();
  return <PressPageContent lang={lang} />;
}
