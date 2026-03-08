import { Reveal } from '@/components/Reveal';
import { Badge, ButtonLink, Card, Section } from '@/components/ui';
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
          <div className="grid gap-3 lg:grid-cols-2">
            <Card>
              <Badge>Valencia 2026</Badge>
              <p className="mt-3 text-sm text-brand-text/86 sm:text-base">{t.home.valencia.text}</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:scale-[1.02] hover:shadow-lift">{t.home.valencia.donate}</a>
                <a href={externalLinks.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand-softGray bg-brand-bg px-4 py-3 text-sm font-semibold text-brand-charcoal hover:border-brand-accent hover:text-brand-lavender">Instagram</a>
              </div>
            </Card>
            <Card>
              {isTracked ? (
                <>
                  <Badge>{lang === 'es' ? 'Progreso' : 'Progress'}</Badge>
                  <p className="mt-2 font-display text-4xl font-semibold text-brand-charcoal">{percentage}%</p>
                  <p className="mt-1 text-sm text-brand-text/75">{`${format.format(valenciaFunding.tracked!.raised)} / ${format.format(valenciaFunding.tracked!.target)}`}</p>
                  <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-brand-softGray"><div className="h-full rounded-full bg-brand-accent" style={{ width: `${percentage ?? 0}%` }} /></div>
                  <p className="mt-3 text-sm text-brand-text/82">{lang === 'es' ? 'Faltan por financiar:' : 'Still to fund:'} <span className="font-semibold text-brand-charcoal">{format.format(remaining!)}</span></p>
                </>
              ) : (
                <>
                  <Badge>{valenciaFunding.narrative.status[lang]}</Badge>
                  <ul className="mt-3 space-y-2 text-sm text-brand-text/82">
                    {valenciaFunding.narrative.categories[lang].map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </>
              )}
            </Card>
          </div>
        </Reveal>
      </Section>

      <Section title={t.home.people.title} description={t.home.people.intro}>
        <div className="grid gap-3 md:grid-cols-3">
          {t.home.people.list.map((person, index) => (
            <Reveal key={person.name} delayMs={index * 70}>
              <Card className={person.featured ? 'md:col-span-2' : ''}>
                <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-2xl">
                  <SafeImage src={person.image.src} alt={person.image.alt} fill sizes="(max-width: 767px) 92vw, (max-width: 1279px) 31vw, 380px" className="object-cover" fallbackLabel={person.shortName ?? person.name} priority={index === 0} />
                </div>
                <p className="font-display text-lg font-semibold tracking-tight text-brand-charcoal sm:text-xl">{person.shortName ? `${person.name} (${person.shortName})` : person.name}</p>
                <p className="mt-1.5 text-sm text-brand-text/84">{person.role}</p>
                {person.quote ? <blockquote className="mt-2 border-l-2 border-brand-primary/70 pl-3 text-sm italic text-brand-text/85">“{person.quote}”</blockquote> : null}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title={t.home.press.title}>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {t.home.press.links.map((link, index) => (
            <Reveal key={link.title} delayMs={index * 60}>
              <a href={link.href} target="_blank" rel="noreferrer" className="card-surface flex min-h-36 flex-col justify-between p-4 sm:p-5">
                <div>
                  <p className="font-display text-lg font-semibold text-brand-charcoal">{link.title}</p>
                  <p className="mt-2 text-sm text-brand-text/74">{link.description}</p>
                </div>
                <p className="mt-4 text-sm font-semibold text-brand-magenta">{link.cta} →</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="grid gap-3 lg:grid-cols-2">
            <Card>
              <h3 className="font-display text-xl font-semibold tracking-tight text-brand-charcoal">{t.home.support.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-brand-text/82 sm:text-base">{t.home.support.paths.map((path) => <li key={path}>• {path}</li>)}</ul>
              <div className="mt-4"><ButtonLink href={localizedPath(lang, 'support')} variant="text">{lang === 'es' ? 'Ver opciones' : 'View options'}</ButtonLink></div>
            </Card>
            <Card>
              <h3 className="font-display text-xl font-semibold tracking-tight text-brand-charcoal">{t.home.join.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-brand-text/82 sm:text-base">{t.home.join.paths.map((path) => <li key={path}>• {path}</li>)}</ul>
              <div className="mt-4"><ButtonLink href={localizedPath(lang, 'join')} variant="text">{lang === 'es' ? 'Ir a Súmate' : 'Go to Join'}</ButtonLink></div>
            </Card>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
