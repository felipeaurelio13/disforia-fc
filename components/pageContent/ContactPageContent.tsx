import { ActionLink, Card, Section } from '@/components/ui';
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
              <ActionLink href={card.href} external variant="ghost" className="mt-3 self-start text-brand-text/90">{card.cta}</ActionLink>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
