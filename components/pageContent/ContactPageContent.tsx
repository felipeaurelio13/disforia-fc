import { Card, Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { Locale } from '@/content/site';

export function ContactPageContent({ lang }: { lang: Locale }) {
  const t = copy[lang].contactPage;

  return (
    <>
      <Section title={t.title}>
        <p className="max-w-3xl text-brand-text/85">{t.intro}</p>
      </Section>
      <Section>
        <div className="grid gap-3 md:grid-cols-2">
          {t.cards.map((card) => (
            <Card key={card.title}>
              <h3 className="font-display text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-brand-text/80">{card.text}</p>
              <a href={card.href} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-12 items-center rounded-full border border-brand-softGray bg-brand-bg px-4 py-2 text-sm font-semibold text-brand-text/90">{card.cta}</a>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
