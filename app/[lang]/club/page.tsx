import { SafeImage } from '@/components/ui/SafeImage';
import { ButtonLink, Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { externalLinks, Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';
import { localizedPath } from '@/lib/routes';

export default function ClubPage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  const t = copy[lang];

  return (
    <>
      <Section title={lang === 'es' ? 'Quiénes somos' : 'About us'}>
        <p className="max-w-4xl text-base leading-relaxed text-brand-softWhite/85 md:text-lg">{t.club.manifesto}</p>
      </Section>

      <Section title={lang === 'es' ? 'Misión, visión y valores' : 'Mission, vision, and values'}>
        <div className="grid gap-3 md:grid-cols-3">
          <article className="rounded-xl border border-white/10 bg-white/5 p-4"><h3 className="font-display text-lg font-bold">{lang === 'es' ? 'Misión' : 'Mission'}</h3><p className="mt-2 text-sm text-brand-softWhite/80">{t.club.mission}</p></article>
          <article className="rounded-xl border border-white/10 bg-white/5 p-4"><h3 className="font-display text-lg font-bold">{lang === 'es' ? 'Visión' : 'Vision'}</h3><p className="mt-2 text-sm text-brand-softWhite/80">{t.club.vision}</p></article>
          <article className="rounded-xl border border-white/10 bg-white/5 p-4"><h3 className="font-display text-lg font-bold">{lang === 'es' ? 'Valores' : 'Values'}</h3><ul className="mt-2 space-y-1 text-sm text-brand-softWhite/80">{t.club.values.map((item)=><li key={item}>• {item}</li>)}</ul></article>
        </div>
      </Section>

      <Section title={lang === 'es' ? 'Historia' : 'History'}>
        <p className="max-w-4xl text-brand-softWhite/80">{t.club.history}</p>
      </Section>

      <Section title={lang === 'es' ? 'Ramas activas' : 'Active branches'}>
        <div className="grid gap-3 sm:grid-cols-2">
          <article className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-display text-xl font-bold">{lang === 'es' ? 'Fútbol' : 'Football'}</h3>
            <p className="mt-2 text-sm text-brand-softWhite/80">{t.footballPage.intro}</p>
            <div className="mt-3"><ButtonLink href={localizedPath(lang, 'football')} variant="text">{lang === 'es' ? 'Ver rama' : 'View branch'}</ButtonLink></div>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-display text-xl font-bold">{lang === 'es' ? 'Básquetbol' : 'Basketball'}</h3>
            <p className="mt-2 text-sm text-brand-softWhite/80">{t.basketballPage.intro}</p>
            <div className="mt-3"><ButtonLink href={localizedPath(lang, 'basketball')} variant="text">{lang === 'es' ? 'Ver rama' : 'View branch'}</ButtonLink></div>
          </article>
        </div>
      </Section>

      <Section title={t.club.documentary.title}>
        <div className="grid gap-4 rounded-2xl border border-brand-lavender/50 bg-brand-lavender/10 p-5 md:grid-cols-[1.2fr_0.8fr] md:p-6">
          <article>
            <p className="text-brand-softWhite/85">{t.club.documentary.text}</p>
            <p className="mt-3 inline-flex rounded-full border border-brand-sky/50 bg-brand-sky/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand-softWhite">{t.club.documentary.award}</p>
            <a href={externalLinks.documentary} className="mt-4 inline-flex min-h-12 items-center rounded-full bg-brand-magenta px-5 py-2.5 text-sm font-semibold" target="_blank" rel="noreferrer">{t.club.documentary.cta}</a>
          </article>
          <div className="relative min-h-52 overflow-hidden rounded-xl border border-white/15 bg-black/25">
            <SafeImage src="/images/chris-erlandsen.svg" alt={lang === 'es' ? 'Still editorial del documental Disforia Fútbol Club' : 'Editorial still for Disforia Fútbol Club documentary'} fill className="object-cover" sizes="(max-width: 767px) 92vw, 340px" fallbackLabel="Chris" />
          </div>
        </div>
      </Section>

      <Section title={lang === 'es' ? 'Recorrido público' : 'Public journey'}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.club.timeline.map((item) => (
            <article key={item.year} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="absolute left-0 top-0 h-full w-1 bg-brand-sky/70" aria-hidden="true" />
              <p className="pl-2 font-display text-xs uppercase tracking-[0.1em] text-brand-sky">{item.year}</p>
              <p className="mt-2 pl-2 text-sm leading-relaxed text-brand-softWhite/80">{item.event}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
