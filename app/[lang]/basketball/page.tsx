import { BranchPageContent } from '@/components/pageContent/BranchPageContent';
import { Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';


export function generateStaticParams() {
  return [{ lang: 'en' }];
}
export default function BasketballRoutePage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  if (lang === 'es') notFound();
  return <BranchPageContent lang={lang} branch="basketballPage" />;
}
