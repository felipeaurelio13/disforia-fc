import { Section } from '@/components/ui';
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
            <article key={card.title} className={`card-surface p-5 ${index === 0 ? 'border-brand-primary/35 bg-brand-primary/10' : 'border-brand-secondary/10 bg-brand-surface'}`}>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-1.5 text-sm text-brand-text/80">{card.text}</p>
              <a
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noreferrer' : undefined}
                className="mt-3 inline-flex min-h-12 items-center rounded-full border border-brand-secondary/16 bg-brand-bg px-4 py-2 text-sm font-semibold text-brand-text/90"
              >
                {card.cta}
              </a>
            </article>
          ))}
        </div>
      </Section>
      <Section title={lang === 'es' ? 'Canal activo' : 'Active channel'}>
        <div className="flex flex-wrap gap-3">
          <a href={externalLinks.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-brand-primary/65 bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white">
            {lang === 'es' ? 'Escríbenos por Instagram' : 'Message us on Instagram'}
          </a>
          <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-brand-secondary/16 bg-brand-bg px-5 py-2.5 text-sm font-semibold text-brand-text">
            GoFundMe
          </a>
        </div>
      </Section>
    </>
  );
}
