import { copy } from '@/content/copy';
import { externalLinks, Locale, valenciaFunding } from '@/content/site';
import { getValenciaProgress } from '@/lib/valencia';
import { SafeImage } from '@/components/ui/SafeImage';
import { Reveal } from './Reveal';
import { ButtonLink, Section } from './ui';
import { localizedPath } from '@/lib/routes';

const currencyFormatter = (lang: Locale) =>
  new Intl.NumberFormat(lang === 'es' ? 'es-CL' : 'en-US', {
    style: 'currency',
    currency: valenciaFunding.currency,
    maximumFractionDigits: 0,
  });

export function HomeSections({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const { percentage, remaining } = getValenciaProgress();
  const format = currencyFormatter(lang);
  const isTracked = valenciaFunding.campaignMode === 'tracked' && Boolean(valenciaFunding.tracked);

  return (
    <>
      <Section className="pt-2 md:pt-4">
        <div className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3 sm:px-5">
          <p className="mb-2 font-display text-xs uppercase tracking-[0.16em] text-brand-softWhite/62">{lang === 'es' ? 'Credibilidad pública' : 'Public credibility'}</p>
          <div className="grid gap-2.5 md:grid-cols-3">
            {t.home.credibility.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 60}>
                <article className="rounded-2xl border border-white/10 bg-black/20 p-3.5">
                  <p className="font-display text-sm font-semibold text-brand-softWhite/95">{item.title}</p>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-brand-softWhite/72 sm:text-sm">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Editorial" title={t.home.about.title} description={t.home.about.body}>
        <Reveal>
          <article className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <blockquote className="border-l-2 border-brand-sky/70 pl-4 text-sm leading-relaxed text-brand-softWhite/88 sm:text-base">“{t.home.about.quote}”</blockquote>
          </article>
        </Reveal>
      </Section>

      <Section title={t.home.branches.title}>
        <div className="grid gap-3 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <article className="h-full rounded-[20px] border border-brand-sky/50 bg-brand-sky/10 p-5 sm:p-6">
              <p className="font-display text-xs uppercase tracking-[0.16em] text-brand-softWhite/65">{lang === 'es' ? 'Rama principal' : 'Main branch'}</p>
              <h3 className="mt-1.5 font-display text-3xl font-bold tracking-[-0.02em]">{t.home.branches.items[0]?.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-brand-softWhite/82 sm:text-base">{t.home.branches.items[0]?.text}</p>
            </article>
          </Reveal>
          <div className="grid gap-3">
            {t.home.branches.items.slice(1).map((branch, index) => (
              <Reveal key={branch.title} delayMs={(index + 1) * 70}>
                <article className="rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
                  <h3 className="font-display text-xl font-bold tracking-[-0.02em]">{branch.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-softWhite/80">{branch.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Valencia 2026" title={t.home.valencia.title}>
        <Reveal>
          <div className="rounded-[22px] border border-brand-magenta/45 bg-[linear-gradient(150deg,rgb(179_65_115/0.16),rgb(132_113_157/0.14))] p-5 shadow-surface md:p-6">
            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="max-w-2xl text-sm leading-relaxed text-brand-softWhite/88 sm:text-base">{t.home.valencia.text}</p>
                <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                  <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand-magenta/65 bg-brand-magenta px-6 py-3 text-center font-display text-sm font-semibold text-white">
                    {t.home.valencia.donate}
                  </a>
                  <a href={externalLinks.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/24 bg-white/5 px-5 py-3 text-center font-display text-sm font-semibold text-brand-softWhite">
                    Instagram
                  </a>
                </div>
              </div>
              <div className="rounded-[18px] border border-white/12 bg-black/20 p-4">
                {isTracked ? (
                  <>
                    <p className="font-display text-xs uppercase tracking-[0.16em] text-brand-softWhite/65">{lang === 'es' ? 'Avance' : 'Progress'}</p>
                    <p className="mt-1.5 font-display text-3xl font-bold tracking-[-0.02em]">{`${percentage}%`}</p>
                    <p className="mt-1.5 text-sm text-brand-softWhite/75">{`${format.format(valenciaFunding.tracked!.raised)} / ${format.format(valenciaFunding.tracked!.target)}`}</p>
                    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/15">
                      <div className="h-full rounded-full bg-brand-sky" style={{ width: `${percentage ?? 0}%` }} />
                    </div>
                    <p className="mt-2 text-sm text-brand-softWhite/80">{lang === 'es' ? 'Faltan por financiar:' : 'Still to fund:'} <span className="font-display font-semibold">{format.format(remaining!)}</span></p>
                  </>
                ) : (
                  <>
                    <p className="font-display text-xs uppercase tracking-[0.16em] text-brand-softWhite/65">{valenciaFunding.narrative.status[lang]}</p>
                    <ul className="mt-2 space-y-1.5 text-sm text-brand-softWhite/82">
                      {valenciaFunding.narrative.categories[lang].map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section title={t.home.people.title} description={t.home.people.intro}>
        <div className="grid gap-3.5 md:grid-cols-3">
          {t.home.people.list.map((person, index) => (
            <Reveal key={person.name} delayMs={index * 70}>
              <article className={`rounded-[20px] border p-4 ${person.featured ? 'md:col-span-2 border-brand-sky/45 bg-brand-sky/10' : 'border-white/10 bg-white/[0.03]'}`}>
                <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
                  <SafeImage src={person.image.src} alt={person.image.alt} fill sizes="(max-width: 767px) 92vw, (max-width: 1279px) 31vw, 380px" className="object-cover" fallbackLabel={person.shortName ?? person.name} priority={index === 0} />
                </div>
                <p className="font-display text-lg font-bold tracking-[-0.02em] sm:text-xl">{person.shortName ? `${person.name} (${person.shortName})` : person.name}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-softWhite/84">{person.role}</p>
                {person.quote ? <blockquote className="mt-2 border-l-2 border-brand-magenta/70 pl-3 text-sm italic leading-relaxed text-brand-softWhite/85">“{person.quote}”</blockquote> : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title={t.home.press.title}>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {t.home.press.links.map((link, index) => (
            <Reveal key={link.title} delayMs={index * 60}>
              <a href={link.href} target="_blank" rel="noreferrer" className="group flex min-h-36 flex-col justify-between rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
                <div>
                  <p className="font-display text-lg font-semibold">{link.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-softWhite/74">{link.description}</p>
                </div>
                <p className="mt-4 text-sm font-semibold text-brand-sky">{link.cta}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="grid gap-4 rounded-[22px] border border-white/12 bg-white/[0.03] p-4 sm:p-5 lg:grid-cols-2">
            <article>
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{t.home.support.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-brand-softWhite/82 sm:text-base">{t.home.support.paths.map((path) => <li key={path}>• {path}</li>)}</ul>
              <div className="mt-3"><ButtonLink href={localizedPath(lang, 'support')} variant="text">{lang === 'es' ? 'Ver opciones' : 'View options'}</ButtonLink></div>
            </article>
            <article>
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{t.home.join.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-brand-softWhite/82 sm:text-base">{t.home.join.paths.map((path) => <li key={path}>• {path}</li>)}</ul>
              <div className="mt-3"><ButtonLink href={localizedPath(lang, 'join')} variant="text">{lang === 'es' ? 'Ir a Súmate' : 'Go to Join'}</ButtonLink></div>
            </article>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
