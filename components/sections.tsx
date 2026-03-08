import Image from 'next/image';
import { copy } from '@/content/copy';
import { externalLinks, Locale, valenciaFunding } from '@/content/site';
import { getValenciaProgress } from '@/lib/valencia';
import { Reveal } from './Reveal';
import { ButtonLink, Section } from './ui';

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
  const hasFundingData = valenciaFunding.raised != null && valenciaFunding.target != null;

  return (
    <>
      <Section className="pt-3 md:pt-6">
        <div className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4 sm:px-5 md:px-8">
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {t.home.legitimacy.map((item, index) => (
              <Reveal key={item} delayMs={index * 50}>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3 text-xs font-medium text-brand-softWhite/90 sm:text-sm">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Editorial" title={t.home.about.title} description={t.home.about.body}>
        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <Reveal>
            <div className="space-y-4 rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
              <p className="font-display text-sm uppercase tracking-[0.18em] text-brand-sky">{lang === 'es' ? 'Base comunitaria' : 'Community-rooted'}</p>
              <blockquote className="border-l-2 border-brand-sky/70 pl-4 text-base leading-relaxed text-brand-softWhite/88">“{t.home.about.quote}”</blockquote>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="relative min-h-56 overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(150deg,#1a1a1a_15%,#222_55%,#87C2E355_100%)] shadow-soft sm:min-h-64">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgb(179_65_115/0.25),transparent_45%)]" aria-hidden="true" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <p className="max-w-xs font-display text-base font-semibold leading-tight sm:text-lg">
                  {lang === 'es' ? 'Un club que compite sin perder el cuidado colectivo.' : 'A club that competes without losing collective care.'}
                </p>
                <span className="h-12 w-12 shrink-0 rounded-full border border-white/30" aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section title={t.home.branches.title}>
        <div className="grid gap-4 lg:grid-cols-3">
          {t.home.branches.items.map((branch, index) => (
            <Reveal key={branch.title} delayMs={index * 70}>
              <article className={`h-full rounded-[20px] border p-5 sm:p-6 ${branch.featured ? 'border-brand-sky/50 bg-brand-sky/10 shadow-soft' : 'border-white/10 bg-white/[0.03]'}`}>
                <p className="font-display text-xs uppercase tracking-[0.16em] text-brand-softWhite/65">{index === 0 ? (lang === 'es' ? 'Rama principal' : 'Main branch') : lang === 'es' ? 'Rama activa' : 'Active branch'}</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{branch.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-softWhite/80 sm:text-base">{branch.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Valencia 2026" title={t.home.valencia.title}>
        <Reveal>
          <div className="rounded-[24px] border border-brand-magenta/45 bg-[linear-gradient(150deg,rgb(179_65_115/0.16),rgb(132_113_157/0.14))] p-5 shadow-surface md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="font-display text-sm uppercase tracking-[0.16em] text-brand-softWhite/75">{lang === 'es' ? 'Campaña oficial' : 'Official campaign'}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-softWhite/88 sm:text-base md:text-lg">{t.home.valencia.text}</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand-magenta/65 bg-brand-magenta px-6 py-3 text-center font-display text-sm font-semibold text-white hover:-translate-y-0.5">
                    {t.home.valencia.donate}
                  </a>
                  <ButtonLink href={`/${lang}/apoya`} variant="secondary">
                    {t.home.valencia.sponsor}
                  </ButtonLink>
                </div>
              </div>
              <div className="rounded-[20px] border border-white/12 bg-black/20 p-5">
                {hasFundingData ? (
                  <>
                    <p className="font-display text-xs uppercase tracking-[0.16em] text-brand-softWhite/65">{lang === 'es' ? 'Avance' : 'Progress'}</p>
                    <p className="mt-2 font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{`${percentage}%`}</p>
                    <p className="mt-2 text-sm text-brand-softWhite/75">{`${format.format(valenciaFunding.raised!)} / ${format.format(valenciaFunding.target!)}`}</p>
                    <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/15">
                      <div className="h-full rounded-full bg-brand-sky transition-all duration-500 ease-smooth" style={{ width: `${percentage ?? 0}%` }} />
                    </div>
                    <p className="mt-3 text-sm text-brand-softWhite/80">
                      {lang === 'es' ? 'Faltan por financiar:' : 'Still to fund:'} <span className="font-display font-semibold">{format.format(remaining!)}</span>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-display text-xs uppercase tracking-[0.16em] text-brand-softWhite/65">{lang === 'es' ? 'Campaña activa' : 'Active campaign'}</p>
                    <p className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{lang === 'es' ? 'Valencia 2026' : 'Valencia 2026'}</p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-softWhite/80">{lang === 'es' ? 'El equipo está en recaudación activa para cubrir inscripciones, viaje y operación.' : 'The team is actively fundraising to cover registration, travel, and operations.'}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section title={t.home.people.title} description={t.home.people.intro}>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {t.home.people.list.map((person, index) => (
            <Reveal key={person.name} delayMs={index * 70}>
              <article className={`rounded-[20px] border p-4 sm:p-5 ${person.featured ? 'border-brand-sky/45 bg-brand-sky/10' : 'border-white/10 bg-white/[0.03]'}`}>
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
                  <Image src={person.image.src} alt={person.image.alt} fill sizes="(max-width: 767px) 92vw, (max-width: 1279px) 31vw, 380px" className="object-cover" priority={index === 0} />
                </div>
                <p className="font-display text-xl font-bold tracking-[-0.02em] sm:text-2xl">{person.shortName ? `${person.name} (${person.shortName})` : person.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-softWhite/84">{person.role}</p>
                {person.quote ? (
                  <blockquote className="mt-3 border-l-2 border-brand-magenta/70 pl-3 text-sm italic leading-relaxed text-brand-softWhite/85">“{person.quote}”</blockquote>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title={t.home.press.title}>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {t.home.press.links.map((link, index) => (
            <Reveal key={link.title} delayMs={index * 70}>
              <a href={link.href} target="_blank" rel="noreferrer" className="group flex min-h-44 flex-col justify-between rounded-[20px] border border-white/10 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-brand-sky/55">
                <div>
                  <p className="font-display text-lg font-semibold sm:text-xl">{link.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-softWhite/74">{link.description}</p>
                </div>
                <p className="mt-6 text-sm font-semibold text-brand-sky">{link.cta}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="grid gap-5 rounded-[24px] border border-white/12 bg-white/[0.03] p-5 sm:p-6 lg:grid-cols-2">
            <article>
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{t.home.support.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-softWhite/82 sm:text-base">{t.home.support.paths.map((path) => <li key={path}>• {path}</li>)}</ul>
              <div className="mt-4">
                <ButtonLink href={`/${lang}/apoya`} variant="text">
                  {lang === 'es' ? 'Ver opciones' : 'View options'}
                </ButtonLink>
              </div>
            </article>
            <article>
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{t.home.join.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-softWhite/82 sm:text-base">{t.home.join.paths.map((path) => <li key={path}>• {path}</li>)}</ul>
              <div className="mt-3">
                <ButtonLink href={`/${lang}/sumate`} variant="text">
                  {lang === 'es' ? 'Ir a Súmate' : 'Go to Join'}
                </ButtonLink>
              </div>
            </article>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
