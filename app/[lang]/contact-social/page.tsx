import { ContactPageContent } from '@/components/pageContent/ContactPageContent';
import { Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';


export function generateStaticParams() {
  return [{ lang: 'en' }];
}
export default function ContactRoutePage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  if (lang === 'es') notFound();
  return <ContactPageContent lang={lang} />;
}
