import { ActionLink, Card, Section } from '@/components/ui';
import { PressCard } from '@/components/PressCard';
import { copy } from '@/content/copy';
import { externalLinks, Locale, locales, pressCoverage, valenciaFunding } from '@/content/site';
import { getValenciaProgress } from '@/lib/valencia';
import { notFound } from 'next/navigation';

export default function ValenciaPage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  const t = copy[lang].valencia;
  const { percentage: progress, remaining } = getValenciaProgress();
  const isTracked = valenciaFunding.campaignMode === 'tracked' && Boolean(valenciaFunding.tracked);

  const valenciaPress = pressCoverage.filter(
    (item) => item.date.startsWith('2026') && (item.category === 'press' || item.category === 'sport')
  );

  return (
    <>
      <Section
        title={lang === 'es' ? 'Gay Games XII Valencia 2026' : 'Gay Games XII Valencia 2026'}
        description={
          lang === 'es'
            ? 'Memoria y balance del histórico hito internacional en los Gay Games XII València 2026 y la medalla de bronce en Fútbol 7.'
            : 'Overview of the historic international milestone at the Gay Games XII València 2026 and the bronze medal in Football 7.'
        }
      >
        <p className="max-w-3xl text-base leading-relaxed text-brand-text/85 md:text-lg">{t.hero}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <ActionLink href={externalLinks.gofundme} external>{t.donate}</ActionLink>
          <ActionLink href={externalLinks.instagram} external variant="ghost" className="text-brand-text">{t.spread}</ActionLink>
        </div>
      </Section>

      <Section title={lang === 'es' ? 'Qué son los Gay Games' : 'What are the Gay Games'}>
        <p className="max-w-3xl text-brand-text/85">{t.games}</p>
        <Card className="mt-4">
          <p className="font-display text-sm uppercase tracking-[0.08em] text-brand-primary">{valenciaFunding.officialFacts.games[lang]}</p>
          <p className="mt-2 text-sm text-brand-text/85">{valenciaFunding.officialFacts.dates[lang]}</p>
          <p className="mt-2 text-sm text-brand-text/85">{valenciaFunding.officialFacts.footballDeadline[lang]}</p>
        </Card>
      </Section>

      <Section title={lang === 'es' ? 'Por qué fue histórico el paso de Disforia FC' : 'Why Disforia FC’s journey made history'}>
        <p className="max-w-3xl text-brand-text/85">{t.why}</p>
        <blockquote className="mt-4 max-w-2xl border-l-2 border-brand-primary/70 pl-4 text-sm italic text-brand-text/90 sm:text-base">“{t.quote}”</blockquote>
      </Section>

      <Section title={t.transparencyTitle}>
        <Card>
          <ul className="grid gap-2 sm:grid-cols-2">{t.needs.map((item) => <li key={item} className="rounded-xl border border-brand-secondary/10 bg-brand-bg px-3 py-2 text-sm text-brand-text/85">{item}</li>)}</ul>
          {isTracked ? (
            <div className="mt-4">
              <p className="mb-2 text-sm text-brand-text/85">€{valenciaFunding.tracked!.raised} / €{valenciaFunding.tracked!.target} ({progress}%)</p>
              <div className="h-2 w-full rounded bg-brand-secondary/12"><div className="h-2 rounded bg-brand-accent" style={{ width: `${progress ?? 0}%` }} /></div>
              <p className="mt-3 text-sm text-brand-text/80">{lang === 'es' ? 'Faltan por financiar:' : 'Still to fund:'} €{remaining}</p>
            </div>
          ) : null}
        </Card>
      </Section>

      <Section title={lang === 'es' ? 'Testimonios' : 'Testimonials'}>
        <div className="grid gap-3 md:grid-cols-2">
          {t.testimonials.map((item) => (
            <Card key={item.quote}>
              <blockquote className="text-sm italic text-brand-text/88">“{item.quote}”</blockquote>
              <p className="mt-2 text-sm text-brand-text/70">— {item.author}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title={lang === 'es' ? 'Cobertura en prensa' : 'Media coverage'}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {valenciaPress.map((item) => (
            <PressCard
              key={item.href}
              item={item}
              lang={lang}
              categoryLabel={item.category === 'press' ? (lang === 'es' ? 'Prensa' : 'Press') : (lang === 'es' ? 'Deporte' : 'Sport')}
              readMore={lang === 'es' ? 'Leer reportaje' : 'Read article'}
            />
          ))}
        </div>
      </Section>

      <Section title="FAQ">
        <div className="grid gap-3 md:grid-cols-2">
          {t.faq.map((item) => (
            <Card key={item.q}>
              <h3 className="font-display text-lg font-bold">{item.q}</h3>
              <p className="mt-2 text-sm text-brand-text/80">{item.a}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
