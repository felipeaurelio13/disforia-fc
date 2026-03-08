import { BranchPageContent } from '@/components/pageContent/BranchPageContent';
import { Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';


export function generateStaticParams() {
  return [{ lang: 'es' }];
}
export default function FutbolPage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  if (lang === 'en') notFound();
  return <BranchPageContent lang={lang} branch="footballPage" />;
}
