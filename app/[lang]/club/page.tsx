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
        <p className="max-w-4xl text-base leading-relaxed text-brand-softWhite/85 md:text-lg">{t.club.manifesto}</p>
      </Section>
      <Section title={params.lang === 'es' ? 'Historia' : 'History'}>
        <p className="max-w-4xl text-brand-softWhite/80">{t.club.history}</p>
      </Section>
      <Section title={params.lang === 'es' ? 'Ramas' : 'Branches'}>
        <div className="grid gap-4 sm:grid-cols-3">
          {t.home.branches.items.map((item) => (
            <article key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-softWhite/80">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title={t.club.leadership.title}>
        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm leading-relaxed text-brand-softWhite/85">{t.club.leadership.intro}</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-softWhite/70">{t.club.leadership.formalBoardTitle}</h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-softWhite/80">
              {t.club.leadership.formalBoard.map((member) => (
                <li key={member}>• {member}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>
      <Section title={t.club.documentary.title}>
        <div className="rounded-2xl border border-brand-lavender/50 bg-brand-lavender/10 p-6">
          <p className="text-brand-softWhite/85">{t.club.documentary.text}</p>
          <a href={externalLinks.documentary} className="mt-4 inline-flex min-h-12 items-center rounded-full bg-brand-magenta px-5 py-2.5 text-sm font-semibold" target="_blank" rel="noreferrer">{t.club.documentary.cta}</a>
        </div>
      </Section>
      <Section title={params.lang === 'es' ? 'Recorrido público' : 'Public journey'}>
        <ol className="space-y-3 border-l border-white/20 pl-4">{t.club.timeline.map((h) => <li key={h.year}><p className="font-semibold text-brand-sky">{h.year}</p><p className="text-sm text-brand-softWhite/80">{h.event}</p></li>)}</ol>
      </Section>
    </>
  );
}
