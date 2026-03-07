import { Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { externalLinks, Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';

export default function SupportPage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  const t = copy[lang].supportPage;

  return (
    <>
      <Section title={lang === 'es' ? 'Apoya' : 'Support'}><p className="max-w-3xl text-brand-softWhite/85">{t.intro}</p></Section>
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">{t.cards.map((card) => <article key={card.title} className="rounded-xl border border-white/10 bg-white/5 p-5"><h3 className="text-lg font-semibold">{card.title}</h3><p className="mt-2 text-sm text-brand-softWhite/80">{card.text}</p></article>)}</div>
      </Section>
      <Section title={lang === 'es' ? 'Contacto' : 'Contact'}>
        <div className="flex flex-wrap gap-3">
          <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="rounded-full bg-brand-magenta px-5 py-2.5 text-sm font-semibold">GoFundMe</a>
          <a href={externalLinks.email} className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold">Email</a>
        </div>
      </Section>
    </>
  );
}
