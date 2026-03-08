import { Card, Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { externalLinks, Locale } from '@/content/site';

export function BranchPageContent({ lang, branch }: { lang: Locale; branch: 'footballPage' | 'basketballPage' }) {
  const t = copy[lang][branch];

  return (
    <>
      <Section title={t.title}>
        <p className="max-w-3xl text-brand-text/85">{t.intro}</p>
      </Section>
      <Section>
        <div className="grid gap-3 md:grid-cols-3">
          <Card><h3 className="font-display text-lg font-semibold">{lang === 'es' ? 'Cómo entrenamos' : 'How we train'}</h3><p className="mt-2 text-sm text-brand-text/80">{t.training}</p></Card>
          <Card><h3 className="font-display text-lg font-semibold">{lang === 'es' ? 'Para quién' : 'Who it is for'}</h3><p className="mt-2 text-sm text-brand-text/80">{t.audience}</p></Card>
          <Card><h3 className="font-display text-lg font-semibold">{lang === 'es' ? 'Qué esperar' : 'What to expect'}</h3><p className="mt-2 text-sm text-brand-text/80">{t.join}</p></Card>
        </div>
      </Section>
      <Section>
        <a href={externalLinks.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white">{t.cta}</a>
      </Section>
    </>
  );
}
