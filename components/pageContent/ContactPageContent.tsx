import { Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { Locale } from '@/content/site';

export function ContactPageContent({ lang }: { lang: Locale }) {
  const t = copy[lang].contactPage;

  return (
    <>
      <Section title={t.title}>
        <p className="max-w-3xl text-brand-softWhite/85">{t.intro}</p>
      </Section>
      <Section>
        <div className="grid gap-3 md:grid-cols-2">
          {t.cards.map((card) => (
            <article key={card.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h3 className="font-display text-lg font-bold">{card.title}</h3>
              <p className="mt-2 text-sm text-brand-softWhite/80">{card.text}</p>
              <a href={card.href} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-12 items-center rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-semibold text-brand-softWhite/90">{card.cta}</a>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
