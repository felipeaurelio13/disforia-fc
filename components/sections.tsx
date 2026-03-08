import { Reveal } from '@/components/Reveal';
import { ButtonLink, Section } from '@/components/ui';
import { SafeImage } from '@/components/ui/SafeImage';
import { copy } from '@/content/copy';
import { externalLinks, Locale, valenciaFunding } from '@/content/site';
import { localizedPath } from '@/lib/routes';
import { getValenciaProgress } from '@/lib/valencia';

export function HomeSections({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const { percentage, remaining } = getValenciaProgress();
  const format = new Intl.NumberFormat(lang === 'es' ? 'es-CL' : 'en-US', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
  const isTracked = valenciaFunding.campaignMode === 'tracked' && Boolean(valenciaFunding.tracked);

  return (
    <>
      <Section title={t.home.valencia.title} description={t.home.valencia.text}>
        <Reveal>
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="card-surface p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-secondary/70">Valencia 2026</p>
              <p className="mt-3 text-brand-text/85">{t.home.valencia.text}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:scale-[1.02] hover:shadow-lift">{t.home.valencia.donate}</a>
                <a href={externalLinks.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand-secondary/16 bg-brand-bg px-5 py-3 text-sm font-semibold text-brand-secondary hover:border-brand-accent hover:text-brand-accent">Instagram</a>
              </div>
            </article>
            <article className="card-surface p-5 sm:p-6">
              {isTracked ? (
                <>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-secondary/70">{lang === 'es' ? 'Progreso' : 'Progress'}</p>
                  <p className="mt-2 text-4xl font-bold text-brand-secondary">{percentage}%</p>
                  <p className="mt-2 text-sm text-brand-text/75">{`${format.format(valenciaFunding.tracked!.raised)} / ${format.format(valenciaFunding.tracked!.target)}`}</p>
                  <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-brand-secondary/12"><div className="h-full rounded-full bg-brand-accent" style={{ width: `${percentage ?? 0}%` }} /></div>
                  <p className="mt-3 text-sm text-brand-text/80">{lang === 'es' ? 'Faltan por financiar:' : 'Still to fund:'} <span className="font-semibold text-brand-secondary">{format.format(remaining!)}</span></p>
                </>
              ) : (
                <>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-secondary/70">{valenciaFunding.narrative.status[lang]}</p>
                  <ul className="mt-3 space-y-2 text-sm text-brand-text/82">
                    {valenciaFunding.narrative.categories[lang].map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </>
              )}
            </article>
          </div>
        </Reveal>
      </Section>

      <Section title={t.home.people.title} description={t.home.people.intro}>
        <div className="grid gap-4 md:grid-cols-3">
          {t.home.people.list.map((person, index) => (
            <Reveal key={person.name} delayMs={index * 70}>
              <article className={`card-surface p-4 ${person.featured ? 'md:col-span-2' : ''}`}>
                <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-2xl">
                  <SafeImage src={person.image.src} alt={person.image.alt} fill sizes="(max-width: 767px) 92vw, (max-width: 1279px) 31vw, 380px" className="object-cover" fallbackLabel={person.shortName ?? person.name} priority={index === 0} />
                </div>
                <p className="text-xl font-semibold tracking-tight text-brand-secondary">{person.shortName ? `${person.name} (${person.shortName})` : person.name}</p>
                <p className="mt-1.5 text-sm text-brand-text/84">{person.role}</p>
                {person.quote ? <blockquote className="mt-2 border-l-2 border-brand-primary/70 pl-3 text-sm italic text-brand-text/85">“{person.quote}”</blockquote> : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title={t.home.press.title}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.home.press.links.map((link, index) => (
            <Reveal key={link.title} delayMs={index * 60}>
              <a href={link.href} target="_blank" rel="noreferrer" className="card-surface flex min-h-40 flex-col justify-between p-5">
                <div>
                  <p className="text-lg font-semibold text-brand-secondary">{link.title}</p>
                  <p className="mt-2 text-sm text-brand-text/74">{link.description}</p>
                </div>
                <p className="mt-4 text-sm font-semibold text-brand-primary">{link.cta} →</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="card-surface p-5">
              <h3 className="text-2xl font-semibold tracking-tight text-brand-secondary">{t.home.support.title}</h3>
              <ul className="mt-3 space-y-1.5 text-brand-text/82">{t.home.support.paths.map((path) => <li key={path}>• {path}</li>)}</ul>
              <div className="mt-4"><ButtonLink href={localizedPath(lang, 'support')} variant="text">{lang === 'es' ? 'Ver opciones' : 'View options'}</ButtonLink></div>
            </article>
            <article className="card-surface p-5">
              <h3 className="text-2xl font-semibold tracking-tight text-brand-secondary">{t.home.join.title}</h3>
              <ul className="mt-3 space-y-1.5 text-brand-text/82">{t.home.join.paths.map((path) => <li key={path}>• {path}</li>)}</ul>
              <div className="mt-4"><ButtonLink href={localizedPath(lang, 'join')} variant="text">{lang === 'es' ? 'Ir a Súmate' : 'Go to Join'}</ButtonLink></div>
            </article>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
