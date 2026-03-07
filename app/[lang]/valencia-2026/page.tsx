import { Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { externalLinks, Locale, locales, valenciaFunding } from '@/content/site';
import { notFound } from 'next/navigation';

export default function ValenciaPage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  const t = copy[lang].valencia;
  const progress = Math.round((valenciaFunding.raised / valenciaFunding.target) * 100);

  return (
    <>
      <Section title="Valencia 2026"><p className="max-w-3xl text-lg text-brand-softWhite/85">{t.hero}</p></Section>
      <Section title={lang === 'es' ? 'Qué son los Gay Games' : 'What are the Gay Games'}><p className="max-w-3xl text-brand-softWhite/85">{t.games}</p></Section>
      <Section title={lang === 'es' ? 'Por qué va Disforia' : 'Why Disforia is going'}><p className="max-w-3xl text-brand-softWhite/85">{t.why}</p></Section>
      <Section title={lang === 'es' ? 'Qué se necesita financiar' : 'Funding needs'}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{valenciaFunding.breakdown.map((item) => <article key={item.key} className="rounded-xl border border-white/10 bg-white/5 p-4"><h3 className="font-semibold">{item.label[lang]}</h3><p className="mt-2 text-sm text-brand-softWhite/80">€{item.amount}</p></article>)}</div>
      </Section>
      <Section title={lang === 'es' ? 'Tablero de avance' : 'Progress board'}>
        <p className="mb-2 text-sm">€{valenciaFunding.raised} / €{valenciaFunding.target} ({progress}%)</p>
        <div className="h-2 w-full rounded bg-white/10"><div className="h-2 rounded bg-brand-sky" style={{ width: `${progress}%` }} /></div>
      </Section>
      <Section title={lang === 'es' ? 'Cómo ayudar' : 'How to help'}>
        <div className="flex flex-wrap gap-3">
          <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="rounded-full bg-brand-magenta px-5 py-2.5 text-sm font-semibold">{t.donate}</a>
          <a href={externalLinks.email} className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold">{t.sponsor}</a>
        </div>
      </Section>
      <Section title={lang === 'es' ? 'Aliados / sponsors' : 'Partners / sponsors'}><p className="text-brand-softWhite/80">{lang === 'es' ? 'Espacio para aliados actuales y futuros sponsors.' : 'Space for current partners and future sponsors.'}</p></Section>
    </>
  );
}
