import { Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { externalLinks, Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';

export default function ClubPage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const t = copy[params.lang as Locale];

  return (
    <>
      <Section title={params.lang === 'es' ? 'El club' : 'The club'}>
        <p className="max-w-4xl text-lg text-brand-softWhite/85">{t.club.manifesto}</p>
      </Section>
      <Section title={params.lang === 'es' ? 'Historia' : 'History'}>
        <p className="max-w-4xl text-brand-softWhite/80">{t.club.history}</p>
      </Section>
      <Section title={params.lang === 'es' ? 'Ramas' : 'Branches'}>
        <div className="grid gap-4 sm:grid-cols-3">
          {t.home.branches.items.map((item) => <article key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm text-brand-softWhite/80">{item.text}</p></article>)}
        </div>
      </Section>
      <Section title={params.lang === 'es' ? 'Personas' : 'People'}>
        <div className="grid gap-4 sm:grid-cols-3">{t.home.people.list.map((p) => <article key={p.name} className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="mb-3 h-24 rounded-lg bg-white/10"/><p className="font-semibold">{p.name}</p><p className="text-sm text-brand-sky">{p.role}</p><p className="mt-2 text-sm text-brand-softWhite/80">“{p.quote}”</p></article>)}</div>
      </Section>
      <Section title={t.club.documentary.title}>
        <div className="rounded-2xl border border-brand-lavender/50 bg-brand-lavender/10 p-6">
          <p className="text-brand-softWhite/85">{t.club.documentary.text}</p>
          <a href={externalLinks.documentary} className="mt-4 inline-flex rounded-full bg-brand-magenta px-5 py-2.5 text-sm font-semibold" target="_blank" rel="noreferrer">{t.club.documentary.cta}</a>
        </div>
      </Section>
      <Section title={params.lang === 'es' ? 'Recorrido público' : 'Public journey'}>
        <ol className="space-y-3 border-l border-white/20 pl-4">{t.club.timeline.map((h) => <li key={h.year}><p className="font-semibold text-brand-sky">{h.year}</p><p className="text-sm text-brand-softWhite/80">{h.event}</p></li>)}</ol>
      </Section>
    </>
  );
}
