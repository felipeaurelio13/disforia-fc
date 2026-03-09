import { Card, Section, Badge } from '@/components/ui';
import { SafeImage } from '@/components/ui/SafeImage';
import { PressGallery } from '@/components/PressGallery';
import { PressCard } from '@/components/PressCard';
import { VideoEmbed } from '@/components/VideoEmbed';
import { copy } from '@/content/copy';
import { documentary, pressGallery, pressCoverage, Locale } from '@/content/site';

export function PressPageContent({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const p = t.pressPage;
  const short = documentary.shortFilm;
  const feature = documentary.featureFilm;
  const teaser = documentary.teaser;

  const pressItems = pressCoverage
    .filter((i) => i.category === 'press' || i.category === 'tv' || i.category === 'sport')
    .sort((a, b) => b.date.localeCompare(a.date));

  const filmItems = pressCoverage
    .filter((i) => i.category === 'film')
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      {/* ── Hero ── */}
      <Section title={p.title}>
        <p className="max-w-3xl text-brand-text/85">{p.intro}</p>
      </Section>

      {/* ── Documentary ── */}
      <Section title={p.filmSectionTitle}>
        <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
          {/* Poster */}
          <div className="relative mx-auto aspect-[370/516] w-full max-w-[280px] overflow-hidden rounded-2xl shadow-lift lg:mx-0">
            <SafeImage
              src={short.poster}
              alt={`${short.title} — Poster`}
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="space-y-5">
            {/* Short film */}
            <Card>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{p.filmShortLabel}</Badge>
                <span className="text-xs tabular-nums text-brand-text/50">{short.year} · {short.duration}</span>
              </div>
              <h3 className="mt-2 font-display text-lg font-semibold">{short.title}</h3>
              <p className="mt-1 text-sm text-brand-text/80">
                {p.filmDirector}: {short.director} · {lang === 'es' ? 'Producción' : 'Production'}: {short.production}
              </p>

              {/* Festivals */}
              <div className="mt-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-lavender/70">{p.filmFestivals}</p>
                <ul className="mt-1.5 space-y-1">
                  {short.festivals.map((f) => (
                    <li key={f.name} className="text-sm text-brand-text/78">
                      <span className="font-medium">{f.name}</span>
                      <span className="text-brand-text/50"> · {f.year}</span>
                      {'award' in f && f.award ? <span className="ml-1.5 text-brand-magenta">— {f.award[lang]}</span> : null}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <a href={short.links.cinechile} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:scale-[1.02] hover:shadow-lift">
                  {lang === 'es' ? 'Ver en CineChile' : 'View on CineChile'}
                </a>
                <a href={short.links.chiledoc} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center rounded-full border border-brand-lavender/30 bg-brand-surface px-4 py-2 text-sm font-semibold text-brand-charcoal hover:border-brand-accent hover:shadow-soft">
                  ChileDoc
                </a>
              </div>
            </Card>

            {/* Feature film */}
            <Card>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{p.filmFeatureLabel}</Badge>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {p.filmFeatureStatus}
                </span>
                <span className="text-xs tabular-nums text-brand-text/50">{feature.year} · {feature.duration}</span>
              </div>
              <h3 className="mt-2 font-display text-lg font-semibold">{feature.title}</h3>
              <p className="mt-1 text-sm text-brand-text/80">
                {p.filmDirector}: {feature.director} · {lang === 'es' ? 'Producción' : 'Production'}: {feature.producer}
              </p>
              {'festivals' in feature && feature.festivals && (
                <ul className="mt-2 flex flex-wrap gap-2">
                  {feature.festivals.map((f: { name: string; year: number }) => (
                    <li key={f.name} className="rounded-full bg-brand-lavender/10 px-3 py-1 text-xs font-medium text-brand-text/70">{f.name}</li>
                  ))}
                </ul>
              )}
              <div className="mt-3 flex flex-wrap gap-2">
                <a href={feature.links.cinespecie} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center rounded-full border border-brand-lavender/30 bg-brand-surface px-4 py-2 text-sm font-semibold text-brand-charcoal hover:border-brand-accent hover:shadow-soft">
                  Cinespecie
                </a>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* ── Teaser ── */}
      <Section title={p.teaserTitle}>
        <p className="mb-5 max-w-3xl text-sm text-brand-text/80">{p.teaserText}</p>
        <div className="max-w-3xl">
          <VideoEmbed
            vimeoId={teaser.vimeoId}
            vimeoHash={teaser.vimeoHash}
            title={teaser.title}
            thumbnail={teaser.thumbnail}
            director={teaser.director}
            duration={teaser.duration}
            lang={lang}
          />
        </div>
      </Section>

      {/* ── Gallery ── */}
      <Section title={p.galleryTitle}>
        <p className="mb-5 max-w-3xl text-sm text-brand-text/80">{p.galleryText}</p>
        <PressGallery items={pressGallery} lang={lang} />
      </Section>

      {/* ── Press coverage ── */}
      <Section title={p.pressTitle}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pressItems.map((item) => (
            <PressCard
              key={item.href}
              item={item}
              lang={lang}
              categoryLabel={p.categoryLabels[item.category] ?? item.category}
              readMore={p.readMore}
            />
          ))}
        </div>
      </Section>

      {/* ── Film catalogues & festivals ── */}
      <Section title={p.filmTitle}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filmItems.map((item) => (
            <PressCard
              key={item.href}
              item={item}
              lang={lang}
              categoryLabel={p.categoryLabels[item.category] ?? item.category}
              readMore={p.readMore}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
