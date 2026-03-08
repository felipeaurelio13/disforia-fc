import { JoinPageContent } from '@/components/pageContent/JoinPageContent';
import { Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ lang: 'en' }];
}

export default function JoinRoutePage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  if (lang === 'es') notFound();

  return <JoinPageContent lang={lang} />;
}
