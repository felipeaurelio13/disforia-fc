import { ActionLink, Card, Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { externalLinks, Locale } from '@/content/site';

export function SupportPageContent({ lang }: { lang: Locale }) {
  const t = copy[lang].supportPage;

  return (
    <>
      <Section title={lang === 'es' ? 'Apoya' : 'Support'}>
        <p className="max-w-3xl text-brand-text/85">{t.intro}</p>
      </Section>
      <Section>
        <div className="grid gap-3 sm:grid-cols-2">
          {t.cards.map((card, index) => (
            <Card key={card.title} tone={index === 0 ? 'accent' : 'default'}>
              <h3 className="font-display text-lg font-semibold text-brand-charcoal">{card.title}</h3>
              <p className="mt-1.5 text-sm text-brand-text/80">{card.text}</p>
              <ActionLink href={card.href} external={card.external} variant="ghost" className="mt-3 self-start text-brand-text/90">
                {card.cta}
              </ActionLink>
            </Card>
          ))}
        </div>
      </Section>
      <Section title={lang === 'es' ? 'Canal activo' : 'Active channel'}>
        <div className="flex flex-wrap gap-2.5">
          <ActionLink href={externalLinks.instagram} external>
            {lang === 'es' ? 'Escríbenos por Instagram' : 'Message us on Instagram'}
          </ActionLink>
          <ActionLink href={externalLinks.gofundme} external variant="ghost" className="text-brand-text">
            GoFundMe
          </ActionLink>
        </div>
      </Section>
    </>
  );
}
