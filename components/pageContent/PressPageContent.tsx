import { Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { externalLinks, Locale } from '@/content/site';

export function PressPageContent({ lang }: { lang: Locale }) {
  const t = copy[lang];

  return (
    <>
      <Section title={t.pressPage.title}>
        <p className="max-w-3xl text-brand-text/85">{t.pressPage.intro}</p>
      </Section>
      <Section title={t.pressPage.documentaryTitle}>
        <article className="rounded-xl border card-surface p-5">
          <p className="text-sm text-brand-text/82">{t.pressPage.documentaryText}</p>
          <a href={externalLinks.documentary} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-12 items-center rounded-full border border-brand-primary/65 bg-brand-primary px-4 py-2 text-sm font-semibold">{lang === 'es' ? 'Ver documental' : 'Watch documentary'}</a>
        </article>
      </Section>
      <Section title={t.pressPage.pressTitle}>
        <div className="grid gap-3 md:grid-cols-2">
          {t.home.press.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="rounded-xl border card-surface p-5">
              <h3 className="font-display text-lg font-bold">{link.title}</h3>
              <p className="mt-2 text-sm text-brand-text/80">{link.description}</p>
              <p className="mt-3 text-sm font-semibold text-brand-primary">{link.cta} →</p>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
