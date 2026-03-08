import { Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { externalLinks, Locale, locales, valenciaFunding } from '@/content/site';
import { getValenciaProgress } from '@/lib/valencia';
import { notFound } from 'next/navigation';

export default function ValenciaPage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  const t = copy[lang].valencia;
  const { percentage: progress, remaining } = getValenciaProgress();
  const isTracked = valenciaFunding.campaignMode === 'tracked' && Boolean(valenciaFunding.tracked);

  return (
    <>
      <Section title="Valencia 2026">
        <p className="max-w-3xl text-base leading-relaxed text-brand-softWhite/85 md:text-lg">{t.hero}</p>
        <blockquote className="mt-4 max-w-2xl border-l-2 border-brand-magenta/70 pl-4 text-sm italic text-brand-softWhite/90 sm:text-base">“{t.quote}”</blockquote>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="font-display text-sm uppercase tracking-[0.08em] text-brand-sky">{valenciaFunding.officialFacts.games[lang]}</p>
          <p className="mt-2 text-sm text-brand-softWhite/85">{valenciaFunding.officialFacts.dates[lang]}</p>
          <p className="mt-2 text-sm text-brand-softWhite/85">{valenciaFunding.officialFacts.footballDeadline[lang]}</p>
        </div>
      </Section>

      <Section title={lang === 'es' ? 'Evento oficial' : 'Official event'}>
        <p className="max-w-3xl text-brand-softWhite/85">{t.games}</p>
      </Section>

      <Section title={lang === 'es' ? 'Por qué va Disforia' : 'Why Disforia is going'}>
        <p className="max-w-3xl text-brand-softWhite/85">{t.why}</p>
      </Section>

      <Section title={lang === 'es' ? 'Campaña activa' : 'Active campaign'} description={lang === 'es' ? 'Si quieres apoyar de forma inmediata, dona en GoFundMe. Es el canal principal para llegar a Valencia 2026.' : 'If you want to support right now, donate on GoFundMe. It is the main funding channel to reach Valencia 2026.'}>
        {isTracked ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="mb-2 text-sm text-brand-softWhite/85">€{valenciaFunding.tracked!.raised} / €{valenciaFunding.tracked!.target} ({progress}%)</p>
            <div className="h-2 w-full rounded bg-white/10"><div className="h-2 rounded bg-brand-sky" style={{ width: `${progress ?? 0}%` }} /></div>
            <p className="mt-3 text-sm text-brand-softWhite/80">{lang === 'es' ? 'Faltan por financiar:' : 'Still to fund:'} €{remaining}</p>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-display text-sm uppercase tracking-[0.08em] text-brand-sky">{valenciaFunding.narrative.status[lang]}</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-3">
              {valenciaFunding.narrative.categories[lang].map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-brand-softWhite/85">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      <Section title={lang === 'es' ? 'Donar ahora' : 'Donate now'}>
        <div className="rounded-2xl border border-brand-magenta/40 bg-brand-magenta/10 p-5">
          <p className="text-sm leading-relaxed text-brand-softWhite/92">{lang === 'es' ? 'Cada aporte en GoFundMe impacta de forma directa la inscripción, traslado y operación del equipo. Instagram queda como canal para coordinar apoyos y alianzas.' : 'Each GoFundMe donation directly impacts registration, travel, and team operations. Instagram remains the channel to coordinate support and partnerships.'}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-magenta px-5 py-2.5 text-sm font-semibold">
              {t.donate}
            </a>
            <a href={externalLinks.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-brand-softWhite">
              {t.contact}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
