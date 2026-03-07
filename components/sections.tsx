import { copy } from '@/content/copy';
import { externalLinks, Locale, valenciaFunding } from '@/content/site';
import { ButtonLink, Section } from './ui';

const currencyFormatter = (lang: Locale) =>
  new Intl.NumberFormat(lang === 'es' ? 'es-CL' : 'en-US', {
    style: 'currency',
    currency: valenciaFunding.currency,
    maximumFractionDigits: 0,
  });

export function HomeSections({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const progress = Math.round((valenciaFunding.raised / valenciaFunding.target) * 100);
  const format = currencyFormatter(lang);

  return (
    <>
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.home.legitimacy.map((item) => (
            <p key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-medium">
              {item}
            </p>
          ))}
        </div>
      </Section>

      <Section title={t.home.about.title}>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <p className="text-lg text-brand-softWhite/85">{t.home.about.body}</p>
          <div className="min-h-56 rounded-2xl border border-white/10 bg-[linear-gradient(140deg,#111_10%,#222_40%,#87C2E355_100%)]" aria-label="Editorial sports image placeholder" />
        </div>
      </Section>

      <Section title={t.home.branches.title}>
        <div className="grid gap-4 sm:grid-cols-3">
          {t.home.branches.items.map((branch) => (
            <article key={branch.title} className={`rounded-2xl border p-5 ${branch.featured ? 'border-brand-sky bg-brand-sky/10' : 'border-white/10 bg-white/5'}`}>
              <h3 className="text-xl font-semibold">{branch.title}</h3>
              <p className="mt-2 text-sm text-brand-softWhite/80">{branch.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-brand-magenta/40 bg-brand-magenta/10 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">{t.home.valencia.title}</h2>
          <p className="mt-3 max-w-2xl text-brand-softWhite/85">{t.home.valencia.text}</p>
          <p className="mt-4 text-sm">{format.format(valenciaFunding.raised)} / {format.format(valenciaFunding.target)} ({progress}%)</p>
          <div className="mt-2 h-2 w-full rounded bg-white/10"><div className="h-2 rounded bg-brand-sky" style={{ width: `${progress}%` }} /></div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-brand-magenta px-5 py-2.5 text-sm font-semibold">{t.home.valencia.donate}</a>
            <a href={externalLinks.email} className="inline-flex rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold">{t.home.valencia.sponsor}</a>
          </div>
        </div>
      </Section>

      <Section title={t.home.people.title}>
        <div className="grid gap-4 sm:grid-cols-3">
          {t.home.people.list.map((person) => (
            <article key={person.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-4 h-28 rounded-xl bg-white/10" aria-hidden="true" />
              <p className="font-semibold">{person.name}</p>
              <p className="text-sm text-brand-sky">{person.role}</p>
              <p className="mt-2 text-sm text-brand-softWhite/80">“{person.quote}”</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title={t.home.press.title}>
        <div className="grid gap-4 sm:grid-cols-3">
          {t.home.press.links.map((link) => (
            <a key={link.title} href={link.href} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 p-4 font-medium hover:border-brand-sky">
              {link.title}
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">{t.home.support.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-softWhite/80">{t.home.support.paths.map((path) => <li key={path}>• {path}</li>)}</ul>
            <div className="mt-5"><ButtonLink href={`/${lang}/apoya`}>{lang === 'es' ? 'Ver opciones' : 'View options'}</ButtonLink></div>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">{t.home.join.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-softWhite/80">{t.home.join.paths.map((path) => <li key={path}>• {path}</li>)}</ul>
            <div className="mt-5"><ButtonLink href={`/${lang}/sumate`} secondary>{lang === 'es' ? 'Ir a Súmate' : 'Go to Join'}</ButtonLink></div>
          </article>
        </div>
      </Section>
    </>
  );
}
