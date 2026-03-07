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

  return (
    <>
      <Section className="pt-4 md:pt-8">
        <div className="rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-5 md:px-8">
          <div className="grid gap-3 md:grid-cols-5">
            {t.home.legitimacy.map((item, index) => (
              <Reveal key={item} delayMs={index * 70}>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-brand-softWhite/90">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow={lang === 'es' ? 'Editorial' : 'Editorial'} title={t.home.about.title} description={t.home.about.body}>
        <div className="grid gap-7 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <Reveal>
            <div className="space-y-4 rounded-[20px] border border-white/10 bg-white/[0.03] p-6">
              <p className="font-display text-sm uppercase tracking-[0.18em] text-brand-sky">{lang === 'es' ? 'Base comunitaria' : 'Community-rooted'}</p>
              <p className="text-brand-softWhite/82">{lang === 'es' ? 'Entrenamiento sostenido, competencia real y pertenencia: un proyecto deportivo con estructura y visión pública.' : 'Sustained training, real competition, and belonging: a sports project with structure and public visibility.'}</p>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="relative min-h-72 overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(150deg,#1a1a1a_15%,#222_55%,#87C2E355_100%)] shadow-soft">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgb(179_65_115/0.25),transparent_45%)]" aria-hidden="true" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <p className="max-w-xs font-display text-lg font-semibold leading-tight">{lang === 'es' ? 'Un club que compite sin perder el cuidado colectivo.' : 'A club that competes without losing collective care.'}</p>
                <span className="h-12 w-12 rounded-full border border-white/30" aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section title={t.home.branches.title}>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          {t.home.branches.items.map((branch, index) => (
            <Reveal key={branch.title} delayMs={index * 70}>
              <article className={`h-full rounded-[20px] border p-6 ${branch.featured ? 'border-brand-sky/50 bg-brand-sky/10 shadow-soft lg:min-h-72' : 'border-white/10 bg-white/[0.03]'}`}>
                <p className="font-display text-xs uppercase tracking-[0.16em] text-brand-softWhite/65">{index === 0 ? (lang === 'es' ? 'Rama principal' : 'Main branch') : lang === 'es' ? 'Rama activa' : 'Active branch'}</p>
                <h3 className="mt-2 font-display text-3xl font-bold tracking-[-0.02em]">{branch.title}</h3>
                <p className="mt-3 text-brand-softWhite/80">{branch.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Valencia 2026" title={t.home.valencia.title}>
        <Reveal>
          <div className="rounded-[24px] border border-brand-magenta/45 bg-[linear-gradient(150deg,rgb(179_65_115/0.16),rgb(132_113_157/0.14))] p-6 shadow-surface md:p-10">
            <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="font-display text-sm uppercase tracking-[0.16em] text-brand-softWhite/75">{lang === 'es' ? 'Campaña oficial' : 'Official campaign'}</p>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-softWhite/88">{t.home.valencia.text}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-brand-magenta/65 bg-brand-magenta px-6 py-3 font-display text-sm font-semibold text-white hover:-translate-y-0.5">
                    {t.home.valencia.donate}
                  </a>
                  <a href={externalLinks.email} className="inline-flex rounded-full border border-white/30 bg-white/10 px-6 py-3 font-display text-sm font-semibold hover:-translate-y-0.5">
                    {t.home.valencia.sponsor}
                  </a>
                </div>
              </div>
              <div className="rounded-[20px] border border-white/12 bg-black/20 p-5">
                <p className="font-display text-xs uppercase tracking-[0.16em] text-brand-softWhite/65">{lang === 'es' ? 'Avance' : 'Progress'}</p>
                <p className="mt-3 font-display text-4xl font-bold tracking-[-0.02em]">{percentage}%</p>
                <p className="mt-2 text-sm text-brand-softWhite/75">{format.format(valenciaFunding.raised)} / {format.format(valenciaFunding.target)}</p>
                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full rounded-full bg-brand-sky transition-all duration-500 ease-smooth" style={{ width: `${percentage}%` }} />
                </div>
                <p className="mt-3 text-sm text-brand-softWhite/80">{lang === 'es' ? 'Faltan por financiar:' : 'Still to fund:'} <span className="font-display font-semibold">{format.format(remaining)}</span></p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section title={t.home.people.title}>
        <div className="grid gap-4 md:grid-cols-3">
          {t.home.people.list.map((person, index) => (
            <Reveal key={person.name} delayMs={index * 70}>
              <article className="group rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-5 h-36 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(140deg,#1f1f1f_15%,#253542_72%,#87C2E34a_100%)]" aria-hidden="true" />
                <p className="font-display text-2xl font-bold tracking-[-0.02em]">{person.name}</p>
                <p className="font-medium text-brand-sky">{person.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-softWhite/82">“{person.quote}”</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title={t.home.press.title}>
        <div className="grid gap-4 md:grid-cols-3">
          {t.home.press.links.map((link, index) => (
            <Reveal key={link.title} delayMs={index * 70}>
              <a href={link.href} target="_blank" rel="noreferrer" className="group flex h-full flex-col justify-between rounded-[20px] border border-white/10 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-brand-sky/55">
                <p className="font-display text-xl font-semibold">{link.title}</p>
                <p className="mt-8 text-sm text-brand-softWhite/70">{lang === 'es' ? 'Ver cobertura' : 'Read coverage'}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="grid gap-6 rounded-[24px] border border-white/12 bg-white/[0.03] p-6 md:p-9 lg:grid-cols-2">
            <article>
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{t.home.support.title}</h3>
              <ul className="mt-4 space-y-2 text-brand-softWhite/82">{t.home.support.paths.map((path) => <li key={path}>• {path}</li>)}</ul>
              <div className="mt-6">
                <ButtonLink href={`/${lang}/apoya`} variant="text">
                  {lang === 'es' ? 'Ver opciones' : 'View options'}
                </ButtonLink>
              </div>
            </article>
            <article>
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{t.home.join.title}</h3>
              <ul className="mt-4 space-y-2 text-brand-softWhite/82">{t.home.join.paths.map((path) => <li key={path}>• {path}</li>)}</ul>
              <div className="mt-6">
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
