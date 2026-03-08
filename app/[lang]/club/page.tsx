import { SafeImage } from '@/components/ui/SafeImage';
import { Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { externalLinks, Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';
import { branchAssetByIndex } from '@/lib/branchAssets';

export default function ClubPage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  const t = copy[lang];

  return (
    <>
      <Section title={lang === 'es' ? 'El club' : 'The club'}>
        <p className="max-w-4xl text-base leading-relaxed text-brand-softWhite/85 md:text-lg">{t.club.manifesto}</p>
      </Section>
      <Section title={lang === 'es' ? 'Historia' : 'History'}>
        <p className="max-w-4xl text-brand-softWhite/80">{t.club.history}</p>
      </Section>
      <Section title={lang === 'es' ? 'Ramas' : 'Branches'}>
        <div className="grid gap-4 sm:grid-cols-3">
          {t.home.branches.items.map((item, index) => (
            <article key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="relative mb-3 aspect-[16/9] overflow-hidden rounded-lg border border-white/12">
                <SafeImage
                  src={branchAssetByIndex[index].src}
                  alt={branchAssetByIndex[index].alt}
                  fill
                  sizes="(max-width: 639px) 92vw, (max-width: 1279px) 30vw, 360px"
                  className="object-cover"
                  fallbackLabel={item.title}
                />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-softWhite/80">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title={t.club.people.title}>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
          <p className="text-sm leading-relaxed text-brand-softWhite/85 md:text-base">{t.club.people.intro}</p>
        </article>
      </Section>
      <Section title={t.club.documentary.title}>
        <div className="grid gap-4 rounded-2xl border border-brand-lavender/50 bg-brand-lavender/10 p-5 md:grid-cols-[1.2fr_0.8fr] md:p-6">
          <article>
            <p className="text-brand-softWhite/85">{t.club.documentary.text}</p>
            <p className="mt-3 inline-flex rounded-full border border-brand-sky/50 bg-brand-sky/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand-softWhite">{t.club.documentary.award}</p>
            <a href={externalLinks.documentary} className="mt-4 inline-flex min-h-12 items-center rounded-full bg-brand-magenta px-5 py-2.5 text-sm font-semibold" target="_blank" rel="noreferrer">
              {t.club.documentary.cta}
            </a>
          </article>
          <div className="relative min-h-52 overflow-hidden rounded-xl border border-white/15 bg-black/25">
            <SafeImage
              src="/images/chris-erlandsen.svg"
              alt={lang === 'es' ? 'Still editorial del documental Disforia Fútbol Club' : 'Editorial still for the Disforia Fútbol Club documentary'}
              fill
              className="object-cover"
              sizes="(max-width: 767px) 92vw, 340px"
              fallbackLabel="Chris"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-medium text-brand-softWhite/90">
              {lang === 'es' ? 'Documental · Disforia Fútbol Club' : 'Documentary · Disforia Fútbol Club'}
            </div>
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
