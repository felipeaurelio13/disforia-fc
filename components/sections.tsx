import { Reveal } from '@/components/Reveal';
import { AchievementsRoadmap } from '@/components/AchievementsRoadmap';
import { ActionLink, Badge, ButtonLink, Card, Section } from '@/components/ui';
import { SafeImage } from '@/components/ui/SafeImage';
import { copy } from '@/content/copy';
import { branchImages, externalLinks, Locale, pressCoverage, valenciaFunding } from '@/content/site';
import { localizedPath } from '@/lib/routes';
import { getValenciaProgress } from '@/lib/valencia';
import { Clock, Film, Image as ImageIcon, Instagram, MapPin, Newspaper } from 'lucide-react';

export function HomeSections({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const clubPillars = [
    { title: lang === 'es' ? 'Misión' : 'Mission', text: t.club.mission },
    { title: lang === 'es' ? 'Visión' : 'Vision', text: t.club.vision },
  ];
  const branchMeta = {
    football: {
      imagePanelClass: 'border-brand-primary/18 bg-[linear-gradient(180deg,rgba(189,43,113,0.08),rgba(255,255,255,0.96))]',
      iconClass: 'text-brand-primary',
    },
    basketball: {
      imagePanelClass: 'border-brand-sky/24 bg-[linear-gradient(180deg,rgba(137,194,227,0.12),rgba(255,255,255,0.96))]',
      iconClass: 'text-brand-lavender',
    },
    volleyball: {
      imagePanelClass: 'border-brand-lavender/22 bg-[linear-gradient(180deg,rgba(131,92,163,0.1),rgba(255,255,255,0.96))]',
      iconClass: 'text-brand-lavender',
    },
  } satisfies Record<keyof typeof branchImages, { imagePanelClass: string; iconClass: string }>;
  const { percentage, remaining } = getValenciaProgress();
  const format = new Intl.NumberFormat(lang === 'es' ? 'es-CL' : 'en-US', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
  const pressDateFormat = new Intl.DateTimeFormat(lang === 'es' ? 'es-CL' : 'en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const isTracked = valenciaFunding.campaignMode === 'tracked' && Boolean(valenciaFunding.tracked);
  const pressCoverageByHref = new Map(pressCoverage.map((item) => [item.href, item]));
  const homePressItems = t.home.press.links
    .map((link) => {
      const coverage = pressCoverageByHref.get(link.href);
      return {
        ...link,
        coverage,
        headline: coverage?.title[lang] ?? link.title,
        source: coverage?.source ?? link.title,
        categoryLabel: coverage ? t.pressPage.categoryLabels[coverage.category] ?? coverage.category : null,
        dateLabel: coverage?.date ? pressDateFormat.format(new Date(coverage.date)) : null,
        year: coverage?.date ? new Date(coverage.date).getFullYear() : null,
        summary: coverage?.description[lang] ?? link.description,
      };
    })
    .sort((a, b) => (b.coverage?.date ?? '').localeCompare(a.coverage?.date ?? ''));
  const featuredPressItem = homePressItems.find((item) => item.coverage?.thumbnail) ?? homePressItems[0];
  const secondaryPressItems = homePressItems.filter((item) => item.href !== featuredPressItem?.href);
  const archiveYears = pressCoverage
    .map((item) => new Date(item.date).getFullYear())
    .filter((year) => Number.isFinite(year))
    .sort((a, b) => a - b);
  const archiveCategories = [...new Set(pressCoverage.map((item) => t.pressPage.categoryLabels[item.category] ?? item.category))];
  const archiveSpan = archiveYears.length ? `${archiveYears[0]}-${archiveYears[archiveYears.length - 1]}` : null;
  const pressBasePath = localizedPath(lang, 'press');
  const pressQuickLinks = [
    { href: `${pressBasePath}#film`, label: t.pressPage.filmSectionTitle, icon: Film },
    { href: `${pressBasePath}#gallery`, label: t.pressPage.galleryTitle, icon: ImageIcon },
    { href: `${pressBasePath}#coverage`, label: t.pressPage.pressTitle, icon: Newspaper },
  ];

  return (
    <>
      {/* ── Identity group ── */}
      <div className="section-group bg-brand-lavender/[0.04]">
        {/* Club / About */}
        <Section id="club" title={t.home.about.title}>
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start">
            <Reveal>
              <article className="rounded-[24px] border border-black/8 bg-white/82 p-5 shadow-soft sm:p-6 lg:p-7">
                <span className="inline-flex w-fit items-center rounded-full border border-brand-lavender/18 bg-brand-lavender/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-lavender/80">
                  {lang === 'es' ? 'Origen y propósito' : 'Origin and purpose'}
                </span>

                <p className="mt-4 max-w-[24ch] text-pretty font-display text-[1.45rem] leading-[1.24] tracking-[-0.02em] text-brand-charcoal sm:text-[1.65rem] lg:text-[1.85rem]">
                  {t.home.about.body}
                </p>

                <div className="mt-5 grid gap-3 border-t border-brand-softGray/80 pt-4 xl:grid-cols-[minmax(220px,0.64fr)_minmax(0,1fr)]">
                  <blockquote className="rounded-[20px] bg-brand-lavender/[0.05] p-4 sm:p-5">
                    <p className="text-base italic leading-relaxed text-brand-charcoal sm:text-[1.05rem]">
                      &ldquo;{t.home.about.quote}&rdquo;
                    </p>
                  </blockquote>

                  <div className="rounded-[20px] border border-black/6 bg-brand-bg/72 p-4 sm:p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-text/52">
                      {lang === 'es' ? 'Manifiesto' : 'Manifesto'}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-text/76">
                      {t.club.manifesto}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
            <Reveal delayMs={100}>
              <Card className="overflow-hidden border-black/8 p-0">
                <div className="grid divide-y divide-brand-softGray/75">
                  {clubPillars.map((pillar) => (
                    <section key={pillar.title} className="px-5 py-5 sm:px-6">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-lavender/78">{pillar.title}</span>
                      <p className="mt-2 max-w-[30ch] text-[0.98rem] leading-relaxed text-brand-charcoal sm:text-[1.02rem]">
                        {pillar.text}
                      </p>
                    </section>
                  ))}

                  <section className="px-5 py-5 sm:px-6">
                    <h3 className="font-display text-base font-semibold text-brand-charcoal">{lang === 'es' ? 'Valores' : 'Values'}</h3>
                    <ul className="mt-3 space-y-2.5">
                      {t.club.values.map((value, index) => (
                        <li key={value} className="flex items-center gap-3">
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-lavender/[0.08] text-[11px] font-semibold text-brand-lavender">
                            {index + 1}
                          </span>
                          <span className="text-sm leading-relaxed text-brand-text/82">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </Card>
            </Reveal>
          </div>
        </Section>

        {/* Branches */}
        <Section id="branches" title={t.home.branches.title}>
          <div className="grid gap-4 md:grid-cols-3">
            {t.home.branches.items.map((branch, i) => {
              const img = branchImages[branch.key];
              const meta = branchMeta[branch.key];
              return (
                <Reveal key={branch.title} delayMs={i * 80}>
                  <Card className="flex h-full flex-col overflow-hidden p-4 sm:p-5" tone={branch.featured ? 'accent' : 'default'}>
                    {img && (
                      <div className={`relative mb-4 aspect-[4/3] overflow-hidden rounded-[20px] border ${meta.imagePanelClass}`}>
                        <SafeImage src={img.src} alt={img.alt[lang]} fill sizes="(max-width: 767px) 92vw, (max-width: 1279px) 31vw, 380px" className="object-contain p-4" fallbackLabel={branch.title} />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-[1.65rem] font-semibold tracking-[-0.02em] text-brand-charcoal">{branch.title}</h3>
                          <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-brand-text/80">{branch.text}</p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2.5 border-t border-brand-softGray/75 pt-4 text-sm text-brand-text/76">
                        <p className="flex items-center gap-2.5">
                          <Clock className={`h-4 w-4 shrink-0 ${meta.iconClass}`} />
                          {branch.schedule}
                        </p>
                        <p className="flex items-center gap-2.5">
                          <MapPin className={`h-4 w-4 shrink-0 ${meta.iconClass}`} />
                          {branch.location}
                        </p>
                      </div>

                      <div className="mt-4 pt-1">
                        <ActionLink
                          href={branch.instagramUrl}
                          external
                          variant="ghost"
                          className="min-h-0 gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold text-brand-lavender border-brand-lavender/30 bg-brand-lavender/5 hover:bg-brand-lavender/10"
                        >
                        <Instagram className="h-3.5 w-3.5" />
                        {branch.instagram}
                        </ActionLink>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Section>
      </div>

      {/* ── Story group ── */}
      <div className="section-group">
        {/* Documentary */}
        <Section id="documentary" title={lang === 'es' ? 'El club en pantalla' : 'The club on screen'}>
          <Reveal>
            <div className="overflow-hidden rounded-[28px] border border-brand-lavender/24 bg-[linear-gradient(135deg,rgba(8,8,10,0.98),rgba(34,19,49,0.96)_54%,rgba(131,92,163,0.92))] p-5 shadow-lift sm:p-6 lg:p-7">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(340px,1.12fr)] lg:items-center">
                <div className="text-white">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/82">
                    <Film className="h-3.5 w-3.5" />
                    {lang === 'es' ? 'Cortometraje documental' : 'Documentary short film'}
                  </div>
                  <h3 className="mt-4 max-w-[14ch] font-display text-[2rem] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-[2.35rem]">
                    {t.club.documentary.title}
                  </h3>
                  <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-white/78 sm:text-base">
                    {t.club.documentary.text}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    <span className="inline-flex items-center rounded-full border border-brand-sky/30 bg-brand-sky/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-offWhite">
                      {t.club.documentary.award}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/76">
                      {lang === 'es' ? 'Archivo audiovisual' : 'Audiovisual archive'}
                    </span>
                  </div>

                  <div className="mt-6">
                    <ActionLink href={externalLinks.documentary} external className="bg-white text-brand-charcoal hover:bg-white/92">
                      {t.club.documentary.cta}
                    </ActionLink>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-6 rounded-[28px] bg-brand-sky/20 blur-3xl" aria-hidden="true" />
                  <div className="relative overflow-hidden rounded-[24px] border border-white/12 bg-black p-3 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-4">
                    <div className="mb-3 flex items-center justify-between rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/68">
                      <span>{lang === 'es' ? 'Fotograma' : 'Still frame'}</span>
                      <span>FIDOCS 2022</span>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[18px]">
                      <SafeImage
                        src="/images/prensa/cinhomo-fotograma.jpg"
                        alt={lang === 'es' ? 'Fotograma del documental Disforia Fútbol Club' : 'Still from Disforia Fútbol Club documentary'}
                        fill
                        className="object-cover"
                        sizes="(max-width: 767px) 92vw, (max-width: 1279px) 42vw, 560px"
                        fallbackLabel="Documental"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.38))]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* Valencia 2026 */}
        <Section id="valencia" title={t.home.valencia.title} description={t.home.valencia.text}>
          <Reveal>
            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <Badge>Valencia 2026</Badge>
                <p className="mt-3 text-sm text-brand-text/86 sm:text-base">{t.home.valencia.text}</p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  <ActionLink href={externalLinks.gofundme} external>{t.home.valencia.donate}</ActionLink>
                  <ActionLink href={externalLinks.instagram} external variant="ghost">Instagram</ActionLink>
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
      </div>

      {/* ── Journey & Community group ── */}
      <div className="section-group bg-brand-lavender/[0.04]">
        {/* Timeline */}
        <Section id="timeline" title={t.home.roadmap.title} description={t.home.roadmap.intro}>
          <Reveal>
            <AchievementsRoadmap lang={lang} milestones={t.home.roadmap.milestones} />
          </Reveal>
        </Section>

        {/* Directiva */}
        <Section id="directiva" title={t.home.people.title} description={t.home.people.intro}>
          <div className="grid gap-4 md:grid-cols-3">
            {t.home.people.list.map((person, index) => (
              <Reveal key={`${person.role}-${index}`} delayMs={index * 80}>
                <Card className="h-full">
                  <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-2xl">
                    <SafeImage src={person.image.src} alt={person.image.alt} fill sizes="(max-width: 767px) 92vw, (max-width: 1279px) 31vw, 380px" className="object-cover" fallbackLabel={person.role} />
                  </div>
                  <p className="font-display text-lg font-semibold tracking-tight text-brand-charcoal sm:text-xl">{person.name}</p>
                  <p className="mt-1.5 text-sm text-brand-text/84">{person.role}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Press */}
        <Section id="press" title={t.home.press.title} eyebrow={t.home.press.eyebrow} description={t.home.press.intro}>
          <Reveal>
            <div className="overflow-hidden rounded-[28px] border border-brand-lavender/20 bg-[radial-gradient(circle_at_top_right,rgba(137,194,227,0.2),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,246,251,0.96))] p-4 shadow-soft sm:p-5 lg:p-6">
              <div className="grid grid-cols-5 overflow-hidden rounded-full border border-brand-softGray/80 bg-white/80">
                {['#5BCEFA', '#F5A9B8', '#FFFFFF', '#F5A9B8', '#5BCEFA'].map((color) => (
                  <span key={color} className="h-2" style={{ backgroundColor: color }} aria-hidden="true" />
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-4 border-b border-brand-softGray/70 pb-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-brand-lavender/20 bg-white/75 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-lavender/85">
                    <Newspaper className="h-3.5 w-3.5" />
                    {t.home.press.featuredLabel}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-brand-text/76 sm:text-[0.95rem]">{t.home.press.featuredIntro}</p>
                </div>
                <div className="w-full lg:w-auto">
                  <ButtonLink href={pressBasePath} variant="secondary">{t.home.press.archiveCta}</ButtonLink>
                </div>
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
                {featuredPressItem ? (
                  <article className="group relative min-h-[320px] overflow-hidden rounded-[24px] border border-black/10 bg-black shadow-lift sm:min-h-[420px]">
                    <a href={featuredPressItem.href} target="_blank" rel="noreferrer" className="absolute inset-0 z-10" aria-label={`${featuredPressItem.source}: ${featuredPressItem.headline}`} />
                    {featuredPressItem.coverage?.thumbnail ? (
                      <SafeImage
                        src={featuredPressItem.coverage.thumbnail}
                        alt={featuredPressItem.headline}
                        fill
                        sizes="(max-width: 1279px) 100vw, 58vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        fallbackLabel={featuredPressItem.source}
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.54)_42%,rgba(0,0,0,0.9))]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,92,163,0.38),transparent_38%)]" />

                    <div className="relative flex h-full flex-col justify-between p-4 sm:p-6">
                      <header className="flex flex-wrap items-start justify-between gap-3 text-white">
                        <div className="flex flex-wrap items-center gap-2">
                          {featuredPressItem.categoryLabel ? (
                            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/95">
                              {featuredPressItem.categoryLabel}
                            </span>
                          ) : null}
                          {featuredPressItem.year ? (
                            <span className="rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-[11px] font-medium text-white/78">
                              {featuredPressItem.year}
                            </span>
                          ) : null}
                        </div>
                        {featuredPressItem.dateLabel ? (
                          <time dateTime={featuredPressItem.coverage?.date} className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/66">
                            {featuredPressItem.dateLabel}
                          </time>
                        ) : null}
                      </header>

                      <div className="max-w-2xl">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/66">
                          {featuredPressItem.source}
                        </p>
                        <h3 className="mt-2 max-w-xl text-balance font-display text-[1.5rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-[2.45rem]">
                          {featuredPressItem.headline}
                        </h3>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                          {featuredPressItem.summary}
                        </p>
                        <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                          {featuredPressItem.cta}
                          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">↗</span>
                        </p>
                      </div>
                    </div>
                  </article>
                ) : null}

                <div className="rounded-[24px] border border-brand-softGray/75 bg-white/78 p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3 border-b border-brand-softGray/70 pb-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-lavender/80">
                        {t.home.press.secondaryTitle}
                      </p>
                      <p className="mt-1 text-sm text-brand-text/68">{t.home.press.secondaryIntro}</p>
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-brand-text/45">
                      {secondaryPressItems.length} / {homePressItems.length}
                    </span>
                  </div>

                  <ol className="mt-4 space-y-4">
                    {secondaryPressItems.map((link, index) => (
                      <Reveal key={link.source} delayMs={index * 80}>
                        <li className="list-none">
                          <article className="group relative overflow-hidden rounded-[20px] border border-brand-softGray/80 bg-white shadow-soft transition-all duration-200 ease-out hover:-translate-y-1 hover:border-brand-lavender/35 hover:shadow-lift">
                            <a href={link.href} target="_blank" rel="noreferrer" className="absolute inset-0 z-10" aria-label={`${link.source}: ${link.headline}`} />
                            <div className="grid min-h-[208px] gap-0 md:grid-cols-[92px_minmax(0,1fr)]">
                              <div className="flex items-end justify-between border-b border-brand-softGray/70 bg-[linear-gradient(180deg,rgba(131,92,163,0.12),rgba(137,194,227,0.06))] px-4 py-3 md:flex-col md:items-start md:justify-between md:border-b-0 md:border-r">
                                <span className="font-display text-[2rem] font-semibold leading-none tracking-tight text-brand-charcoal/92">
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                                {link.categoryLabel ? (
                                  <span className="inline-flex items-center rounded-full border border-brand-magenta/20 bg-brand-magenta/7 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-magenta">
                                    {link.categoryLabel}
                                  </span>
                                ) : null}
                              </div>

                              <div className="grid gap-3 p-4 sm:gap-4 sm:p-5">
                                {link.coverage?.thumbnail ? (
                                  <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-brand-softGray/20 sm:aspect-[16/9]">
                                    <SafeImage
                                      src={link.coverage.thumbnail}
                                      alt={link.headline}
                                      fill
                                      sizes="(max-width: 1279px) 100vw, 24vw"
                                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                                      fallbackLabel={link.source}
                                    />
                                  </div>
                                ) : null}

                                <header className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-lavender/72">
                                    {link.source}
                                  </p>
                                  {link.dateLabel ? (
                                    <time dateTime={link.coverage?.date} className="text-[11px] tabular-nums text-brand-text/50">
                                      {link.dateLabel}
                                    </time>
                                  ) : null}
                                </header>

                                <div>
                                  <h3 className="text-balance font-display text-[1.02rem] font-semibold leading-tight text-brand-charcoal transition-colors group-hover:text-brand-magenta sm:text-[1.15rem]">
                                    {link.headline}
                                  </h3>
                                  <p className="mt-2 text-sm leading-relaxed text-brand-text/76">
                                    {link.summary}
                                  </p>
                                </div>

                                <p className="text-sm font-semibold text-brand-magenta transition-colors group-hover:text-brand-lavender">
                                  {link.cta} →
                                </p>
                              </div>
                            </div>
                          </article>
                        </li>
                      </Reveal>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-4 grid gap-3 border-t border-brand-softGray/70 pt-4 sm:grid-cols-3">
                <div className="rounded-[18px] border border-brand-softGray/80 bg-white/72 px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-lavender/72">{t.home.press.stats.span}</p>
                  <p className="mt-1 font-display text-xl font-semibold text-brand-charcoal">{archiveSpan ?? '2019-'}</p>
                </div>
                <div className="rounded-[18px] border border-brand-softGray/80 bg-white/72 px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-lavender/72">{t.home.press.stats.references}</p>
                  <p className="mt-1 font-display text-xl font-semibold text-brand-charcoal">{pressCoverage.length}</p>
                </div>
                <div className="rounded-[18px] border border-brand-softGray/80 bg-white/72 px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-lavender/72">{t.home.press.stats.coverage}</p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-text/78">{archiveCategories.join(' · ')}</p>
                </div>
              </div>

              <div className="mt-4 rounded-[22px] border border-brand-lavender/16 bg-[linear-gradient(135deg,rgba(131,92,163,0.08),rgba(137,194,227,0.08))] p-4 sm:p-5">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-lavender/80">{t.home.press.continuationLabel}</p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-text/76">{t.home.press.continuationIntro}</p>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {pressQuickLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/70 bg-white/86 px-4 py-2 text-sm font-semibold text-brand-charcoal shadow-soft hover:border-brand-lavender/30 hover:text-brand-lavender"
                        >
                          <Icon className="h-4 w-4" />
                          {item.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>
      </div>

      {/* ── Action group ── */}
      <div className="section-group">
        {/* Support */}
        <Section id="support" title={t.home.support.title}>
          <p className="mb-6 max-w-3xl text-brand-text/80">{t.supportPage.intro}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.supportPage.cards.map((card, index) => (
              <Reveal key={card.title} delayMs={index * 80}>
                <Card className="h-full" tone={index === 0 ? 'accent' : 'default'}>
                  <h3 className="font-display text-lg font-semibold text-brand-charcoal">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text/80">{card.text}</p>
                  <ActionLink href={card.href} external={card.external} variant="ghost" className="mt-4 self-start text-brand-text/90">
                    {card.cta}
                  </ActionLink>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Join */}
        <Section id="join" title={t.home.join.title}>
          <p className="mb-6 max-w-3xl text-brand-text/80">{t.joinPage.intro}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {t.joinPage.cards.map((card, index) => (
              <Reveal key={card.title} delayMs={index * 80}>
                <Card className="h-full">
                  <h3 className="font-display text-lg font-semibold text-brand-charcoal">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text/80">{card.text}</p>
                  <ActionLink href={card.href} external variant="ghost" className="mt-4 self-start text-brand-text/90">
                    {card.cta}
                  </ActionLink>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
