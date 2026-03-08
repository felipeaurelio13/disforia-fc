import { Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { externalLinks, Locale, locales, valenciaFunding } from '@/content/site';
import { getValenciaProgress } from '@/lib/valencia';
import { notFound } from 'next/navigation';

export default function ValenciaPage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  const t = copy[lang].valencia;
  const { percentage: progress } = getValenciaProgress();
  const hasFundingData = valenciaFunding.target != null && valenciaFunding.raised != null;

  return (
    <>
      <Section title="Valencia 2026">
        <p className="max-w-3xl text-base leading-relaxed text-brand-softWhite/85 md:text-lg">{t.hero}</p>
        <blockquote className="mt-4 max-w-2xl border-l-2 border-brand-magenta/70 pl-4 text-sm italic text-brand-softWhite/90 sm:text-base">“{t.quote}”</blockquote>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="font-display text-sm uppercase tracking-[0.08em] text-brand-sky">Gay Games XII València 2026</p>
          <p className="mt-2 text-sm text-brand-softWhite/85">{lang === 'es' ? '27 de junio al 4 de julio de 2026' : '27 June to 4 July 2026'}</p>
          <p className="mt-2 text-sm text-brand-softWhite/85">{lang === 'es' ? 'Cierre de equipos de fútbol: 1 de abril de 2026' : 'Football team registrations close on April 1st, 2026'}</p>
        </div>
      </Section>
      <Section title={lang === 'es' ? 'Evento oficial' : 'Official event'}>
        <p className="max-w-3xl text-brand-softWhite/85">{t.games}</p>
      </Section>
      <Section title={lang === 'es' ? 'Por qué va Disforia' : 'Why Disforia is going'}>
        <p className="max-w-3xl text-brand-softWhite/85">{t.why}</p>
      </Section>
      <Section title={lang === 'es' ? 'Qué se necesita financiar' : 'What needs funding'}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.needs.map((item) => (
            <article key={item} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-sm font-semibold text-brand-softWhite">{item}</h3>
            </article>
          ))}
        </div>
      </Section>
      {hasFundingData ? (
        <Section title={lang === 'es' ? 'Tablero de avance' : 'Progress board'}>
          <p className="mb-2 text-sm text-brand-softWhite/85">€{valenciaFunding.raised} / €{valenciaFunding.target} ({progress}%)</p>
          <div className="h-2 w-full rounded bg-white/10">
            <div className="h-2 rounded bg-brand-sky" style={{ width: `${progress ?? 0}%` }} />
          </div>
        </Section>
      ) : null}
      <Section title={lang === 'es' ? 'Apoyo directo a la campaña' : 'Direct campaign support'}>
        <div className="rounded-2xl border border-brand-magenta/40 bg-brand-magenta/10 p-5">
          <p className="text-sm leading-relaxed text-brand-softWhite/85">{lang === 'es' ? 'La acción principal para esta campaña es donar en GoFundMe.' : 'The primary action for this campaign is donating on GoFundMe.'}</p>
          <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-magenta px-5 py-2.5 text-sm font-semibold">
            {t.donate}
          </a>
        </div>
      </Section>
      <Section title={lang === 'es' ? 'Cómo ayudar' : 'How to help'}>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 p-4 text-sm font-semibold">{t.donate}</a>
          <a href={`/${lang}/apoya`} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 p-4 text-sm font-semibold">{t.sponsor}</a>
          <a href={externalLinks.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 p-4 text-sm font-semibold">{t.spread}</a>
          <a href={externalLinks.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 p-4 text-sm font-semibold">{t.contact}</a>
        </div>
      </Section>
      <Section title={lang === 'es' ? 'Propuesta de alianzas' : 'Partnership proposal'}>
        <div className="grid gap-3 md:grid-cols-3">
          <article className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold">{lang === 'es' ? 'Sponsor de inscripciones' : 'Registration sponsor'}</h3>
            <p className="mt-2 text-sm text-brand-softWhite/80">{lang === 'es' ? 'Apoyo para cubrir costos de inscripción del equipo en el torneo.' : 'Support to cover team registration costs for the tournament.'}</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold">{lang === 'es' ? 'Sponsor de viaje' : 'Travel sponsor'}</h3>
            <p className="mt-2 text-sm text-brand-softWhite/80">{lang === 'es' ? 'Aporte para traslados internacionales y logística de viaje.' : 'Support for international travel and trip logistics.'}</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold">{lang === 'es' ? 'Sponsor de equipamiento y operación' : 'Equipment and operations sponsor'}</h3>
            <p className="mt-2 text-sm text-brand-softWhite/80">{lang === 'es' ? 'Apoyo para equipamiento deportivo y operación previa al torneo.' : 'Support for sports equipment and pre-tournament operations.'}</p>
          </article>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={externalLinks.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold">Instagram</a>
          <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-brand-magenta/65 bg-brand-magenta px-5 py-2.5 text-sm font-semibold">GoFundMe</a>
        </div>
      </Section>
    </>
  );
}
