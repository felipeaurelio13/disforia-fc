'use client';

import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { AchievementsRoadmap } from '@/components/AchievementsRoadmap';
import { ActionLink, Badge, Card, Section } from '@/components/ui';
import { SafeImage } from '@/components/ui/SafeImage';
import { copy } from '@/content/copy';
import { branchGalleries, branchImages, documentary, externalLinks, Locale, pressCoverage, valenciaFunding, BranchKey } from '@/content/site';
import { localizedPath } from '@/lib/routes';
import { getValenciaProgress } from '@/lib/valencia';
import { ArrowUpRight, CalendarPlus, Check, CircleDollarSign, Clock, Dumbbell, Film, HandHeart, Handshake, HeartHandshake, Instagram, MapPin, Megaphone, Newspaper } from 'lucide-react';

export function HomeSections({ lang }: { lang: Locale }) {
  const [openGallery, setOpenGallery] = useState<BranchKey | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const t = copy[lang];
  const shortFilm = documentary.shortFilm;
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
  const archiveCoverageSummary =
    archiveCategories.length > 2
      ? `${archiveCategories.slice(0, 2).join(' · ')} +${archiveCategories.length - 2}`
      : archiveCategories.join(' · ');
  const archiveSpan = archiveYears.length ? `${archiveYears[0]}-${archiveYears[archiveYears.length - 1]}` : null;
  const pressBasePath = localizedPath(lang, 'press');
  const valenciaSectionDescription = `${valenciaFunding.officialFacts.games[lang]} · ${valenciaFunding.officialFacts.dates[lang]}`;
  const supportCardMeta = [
    {
      icon: CircleDollarSign,
      cardClass: 'border-brand-primary/18 bg-white',
      tone: 'accent' as const,
      ctaVariant: 'primary' as const,
      ctaClass: 'gap-2',
    },
    {
      icon: Handshake,
      cardClass: 'border-brand-softGray/80 bg-white',
      tone: 'default' as const,
      ctaVariant: 'secondary' as const,
      ctaClass: 'gap-2',
    },
    {
      icon: Megaphone,
      cardClass: 'border-brand-softGray/80 bg-white',
      tone: 'default' as const,
      ctaVariant: 'ghost' as const,
      ctaClass: 'gap-2',
    },
  ];
  const joinCardMeta = [
    {
      icon: Dumbbell,
      cardClass: 'border-brand-softGray/80 bg-white',
      tone: 'default' as const,
      ctaVariant: 'secondary' as const,
      ctaClass: 'gap-2',
    },
    {
      icon: HeartHandshake,
      cardClass: 'border-brand-softGray/80 bg-white',
      tone: 'default' as const,
      ctaVariant: 'ghost' as const,
      ctaClass: 'gap-2',
    },
    {
      icon: CalendarPlus,
      cardClass: 'border-brand-softGray/80 bg-white',
      tone: 'default' as const,
      ctaVariant: 'ghost' as const,
      ctaClass: 'gap-2',
    },
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
                      <button
                        type="button"
                        onClick={() => {
                          setOpenGallery(branch.key);
                          setGalleryIndex(0);
                        }}
                        className="block w-full text-left"
                      >
                        <div className={`relative mb-4 aspect-[4/3] overflow-hidden rounded-[20px] border cursor-pointer transition-all hover:shadow-md hover:scale-105 ${meta.imagePanelClass}`}>
                          <SafeImage src={img.src} alt={img.alt[lang]} fill sizes="(max-width: 767px) 92vw, (max-width: 1279px) 31vw, 380px" className="object-contain p-4" fallbackLabel={branch.title} />
                        </div>
                      </button>
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
            <div className="overflow-hidden rounded-[30px] border border-brand-lavender/18 bg-[linear-gradient(135deg,#09090d_0%,#171127_48%,#5f527f_100%)] p-5 shadow-lift sm:p-6 lg:p-7">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(360px,1.12fr)] lg:items-center xl:gap-8">
                <div className="text-white">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/28 bg-white/[0.12] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                    <Film className="h-3.5 w-3.5" />
                    {lang === 'es' ? shortFilm.format : shortFilm.formatEn}
                  </div>
                  <h3 className="mt-4 max-w-[12ch] font-display text-[2rem] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-[2.4rem] lg:text-[2.7rem]">
                    {t.club.documentary.title}
                  </h3>
                  <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-white/78 sm:text-base">
                    {t.club.documentary.text}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/66">
                    <span>{shortFilm.year}</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
                    <span>{shortFilm.duration}</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
                    <span>{shortFilm.director}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <span className="inline-flex items-center rounded-full border border-brand-sky/45 bg-brand-sky/18 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_24px_rgba(0,0,0,0.16)]">
                      {t.club.documentary.award}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <ActionLink
                      href={externalLinks.documentary}
                      external
                      variant="ghost"
                      className="border-white/10 bg-white text-brand-charcoal hover:border-white/20 hover:bg-white/92"
                    >
                      {t.club.documentary.cta}
                    </ActionLink>
                    <ActionLink
                      href={externalLinks.documentaryChileDoc}
                      external
                      variant="ghost"
                      className="border-white/28 bg-white/[0.12] text-white hover:border-white/36 hover:bg-white/[0.18]"
                    >
                      {lang === 'es' ? 'Ficha en ChileDoc' : 'View on ChileDoc'}
                    </ActionLink>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-10 rounded-[32px] bg-brand-sky/10 blur-3xl" aria-hidden="true" />
                  <div className="relative overflow-hidden rounded-[26px] border border-white/14 bg-black/28 p-3 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-4">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[20px]">
                      <SafeImage
                        src={shortFilm.still}
                        alt={lang === 'es' ? 'Fotograma del documental Disforia Fútbol Club' : 'Still from Disforia Fútbol Club documentary'}
                        fill
                        className="object-cover"
                        sizes="(max-width: 767px) 92vw, (max-width: 1279px) 52vw, 640px"
                        fallbackLabel="Documental"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.42))]" />
                      <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/24 bg-black/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                        {lang === 'es' ? 'Fotograma oficial' : 'Official still'}
                      </div>
                      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-4">
                        <div>
                          <p className="font-display text-lg font-semibold leading-tight text-white sm:text-[1.35rem]">{shortFilm.title}</p>
                          <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/70">
                            {lang === 'es' ? 'Dir. Inti Lorca' : 'Dir. Inti Lorca'}
                          </p>
                        </div>
                        <span className="rounded-full border border-white/24 bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                          FIDOCS 2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* Valencia 2026 */}
        <Section id="valencia" title={t.home.valencia.title} description={valenciaSectionDescription}>
          <Reveal>
            <div className="grid gap-4 xl:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
              <Card className="border-brand-primary/16 bg-white/92 p-5 sm:p-6 lg:p-7">
                <div className="flex flex-wrap items-center gap-2.5">
                  <Badge>{t.home.valencia.badge}</Badge>
                  <span className="inline-flex items-center rounded-full border border-black/8 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-brand-text/58">
                    {valenciaFunding.officialFacts.dates[lang]}
                  </span>
                </div>

                <p className="mt-5 max-w-[20ch] text-balance font-display text-[1.65rem] font-semibold leading-[1.12] tracking-[-0.03em] text-brand-charcoal sm:text-[2rem] lg:text-[2.2rem]">
                  {t.home.valencia.text}
                </p>

                <div className="mt-6 grid gap-3 border-t border-brand-softGray/80 pt-5 sm:grid-cols-2">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-text/48">
                      {lang === 'es' ? 'Fechas oficiales' : 'Official dates'}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-charcoal">
                      {valenciaFunding.officialFacts.dates[lang]}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-text/48">
                      {lang === 'es' ? 'Cierre fútbol' : 'Football deadline'}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-charcoal">
                      {valenciaFunding.officialFacts.footballDeadline[lang]}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  <ActionLink href={externalLinks.gofundme} external className="gap-2">
                    {t.home.valencia.donate}
                    <ArrowUpRight className="h-4 w-4" />
                  </ActionLink>
                  <ActionLink href={externalLinks.instagram} external variant="ghost" className="gap-2">
                    <Instagram className="h-4 w-4" />
                    {t.home.valencia.instagram}
                  </ActionLink>
                </div>
              </Card>

              <Card className="border-black/8 bg-white/88 p-5 sm:p-6">
                {isTracked ? (
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-primary/82">
                      {t.home.valencia.progressLabel}
                    </p>
                    <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
                      <p className="font-display text-4xl font-semibold tracking-tight text-brand-charcoal">
                        {percentage}%
                      </p>
                      <p className="text-sm font-medium text-brand-text/64">
                        {`${format.format(valenciaFunding.tracked!.raised)} / ${format.format(valenciaFunding.tracked!.target)}`}
                      </p>
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-brand-softGray">
                      <div className="h-full rounded-full bg-brand-accent" style={{ width: `${percentage ?? 0}%` }} />
                    </div>
                    <p className="mt-3 text-sm text-brand-text/82">
                      {t.home.valencia.remainingLabel}{' '}
                      <span className="font-semibold text-brand-charcoal">{format.format(remaining!)}</span>
                    </p>
                  </div>
                ) : (
                  <div>
                    <Badge>{valenciaFunding.narrative.status[lang]}</Badge>
                    <p className="mt-3 text-sm leading-relaxed text-brand-text/78">
                      {t.home.valencia.supportIntro}
                    </p>
                  </div>
                )}

                <div className="mt-6 border-t border-brand-softGray/80 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-lavender/82">
                    {t.home.valencia.supportTitle}
                  </p>

                  <ol className="mt-4 space-y-4">
                    {t.home.valencia.supportItems.map((item, index) => {
                      return (
                        <li key={item.title} className="flex items-start gap-3.5">
                          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-lavender/[0.08] text-[11px] font-semibold text-brand-lavender">
                            {index + 1}
                          </span>
                          <div>
                            <h3 className="font-display text-[1.02rem] font-semibold tracking-tight text-brand-charcoal">
                              {item.title}
                            </h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-brand-text/76">
                              {item.text}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>

                <div className="mt-6 border-t border-brand-softGray/80 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-text/52">
                    {t.home.valencia.officialTitle}
                  </p>
                  <div className="mt-3 space-y-2 text-sm text-brand-text/78">
                    <p className="flex items-start gap-2.5">
                      <CalendarPlus className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                      <span>{valenciaFunding.officialFacts.dates[lang]}</span>
                    </p>
                    <p className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-lavender" />
                      <span>{valenciaFunding.officialFacts.footballDeadline[lang]}</span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <ActionLink href={externalLinks.gayGames} external variant="text" className="min-h-0">
                      {t.home.valencia.officialCta}
                    </ActionLink>
                  </div>
                </div>
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
            <div className="overflow-hidden rounded-[28px] border border-brand-softGray/80 bg-white/88 p-4 shadow-soft sm:p-5 lg:p-6">
              <div className="mb-4 flex flex-col gap-3 border-b border-brand-softGray/70 pb-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-lavender/80">
                    {t.home.press.featuredLabel}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-text/72">{t.home.press.featuredIntro}</p>
                </div>
                <ActionLink href={pressBasePath} variant="secondary" className="w-full lg:w-auto">
                  {t.home.press.archiveCta}
                </ActionLink>
              </div>

              <div className="grid gap-4 xl:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] xl:items-stretch">
                {featuredPressItem ? (
                  <article className="group relative overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-soft">
                    <a href={featuredPressItem.href} target="_blank" rel="noreferrer" className="absolute inset-0 z-10" aria-label={`${featuredPressItem.source}: ${featuredPressItem.headline}`} />
                    <div className="relative aspect-[16/10] overflow-hidden bg-brand-softGray/20">
                      {featuredPressItem.coverage?.thumbnail ? (
                        <SafeImage
                          src={featuredPressItem.coverage.thumbnail}
                          alt={featuredPressItem.headline}
                          fill
                          sizes="(max-width: 1279px) 100vw, 54vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          fallbackLabel={featuredPressItem.source}
                        />
                      ) : null}
                    </div>
                    <div className="p-4 sm:p-5 lg:p-6">
                      <header className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand-lavender/18 bg-brand-lavender/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-lavender">
                          <Newspaper className="h-3.5 w-3.5" />
                          {t.home.press.featuredLabel}
                        </span>
                        {featuredPressItem.categoryLabel ? (
                          <span className="inline-flex items-center rounded-full border border-brand-softGray/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-text/72">
                            {featuredPressItem.categoryLabel}
                          </span>
                        ) : null}
                        {featuredPressItem.year ? (
                          <span className="text-[11px] font-medium text-brand-text/54">
                            {featuredPressItem.year}
                          </span>
                        ) : null}
                        {featuredPressItem.dateLabel ? (
                          <time dateTime={featuredPressItem.coverage?.date} className="text-[11px] font-medium text-brand-text/54">
                            {featuredPressItem.dateLabel}
                          </time>
                        ) : null}
                      </header>

                      <div className="mt-4 max-w-2xl">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-lavender/72">
                          {featuredPressItem.source}
                        </p>
                        <h3 className="mt-2 max-w-xl text-balance font-display text-[1.35rem] font-semibold leading-[1.08] tracking-tight text-brand-charcoal sm:text-[1.65rem] lg:text-[1.9rem]">
                          {featuredPressItem.headline}
                        </h3>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-text/76 sm:text-[0.98rem]">
                          {featuredPressItem.summary}
                        </p>
                        <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-magenta">
                          {featuredPressItem.cta}
                          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </p>
                      </div>
                    </div>
                  </article>
                ) : null}

                <div className="flex h-full flex-col rounded-[24px] border border-brand-softGray/75 bg-brand-bg/48 p-4 sm:p-5">
                  <div className="border-b border-brand-softGray/70 pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-lavender/80">
                          {t.home.press.secondaryTitle}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-brand-text/72">{t.home.press.secondaryIntro}</p>
                      </div>
                      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-brand-text/45">
                        {secondaryPressItems.length} / {homePressItems.length}
                      </span>
                    </div>
                  </div>

                  <ol className="mt-4 space-y-3">
                    {secondaryPressItems.map((link, index) => (
                      <Reveal key={link.source} delayMs={index * 80}>
                        <li className="list-none">
                          <article className="group relative overflow-hidden rounded-[20px] border border-brand-softGray/80 bg-white transition-all duration-200 ease-out hover:border-brand-lavender/28 hover:shadow-soft">
                            <a href={link.href} target="_blank" rel="noreferrer" className="absolute inset-0 z-10" aria-label={`${link.source}: ${link.headline}`} />
                            <div className="p-4 sm:p-5">
                              <header className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-text/50">
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-lavender/72">
                                  {link.source}
                                </p>
                                {link.dateLabel ? (
                                  <time dateTime={link.coverage?.date} className="text-[11px] tabular-nums text-brand-text/50">
                                    {link.dateLabel}
                                  </time>
                                ) : null}
                              </header>

                              <div className="mt-2.5">
                                <h3 className="text-balance font-display text-[1.02rem] font-semibold leading-tight text-brand-charcoal transition-colors group-hover:text-brand-magenta sm:text-[1.08rem]">
                                  {link.headline}
                                </h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-brand-text/76">
                                  {link.summary}
                                </p>
                              </div>

                              <p className="mt-3 text-sm font-semibold text-brand-magenta transition-colors group-hover:text-brand-lavender">
                                {link.cta} →
                              </p>
                            </div>
                          </article>
                        </li>
                      </Reveal>
                    ))}
                  </ol>

                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    <div className="rounded-[18px] border border-brand-softGray/80 bg-white px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-lavender/72">{t.home.press.stats.span}</p>
                      <p className="mt-1 font-display text-lg font-semibold text-brand-charcoal">{archiveSpan ?? '2019-'}</p>
                    </div>
                    <div className="rounded-[18px] border border-brand-softGray/80 bg-white px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-lavender/72">{t.home.press.stats.references}</p>
                      <p className="mt-1 font-display text-lg font-semibold text-brand-charcoal">{pressCoverage.length}</p>
                    </div>
                    <div className="rounded-[18px] border border-brand-softGray/80 bg-white px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-lavender/72">{t.home.press.stats.coverage}</p>
                      <p className="mt-1 text-sm leading-relaxed text-brand-text/78">{archiveCoverageSummary}</p>
                    </div>
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
          <p className="mb-6 max-w-3xl text-brand-text/78">{t.supportPage.intro}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {t.supportPage.cards.map((card, index) => {
              const meta = supportCardMeta[index] ?? supportCardMeta[supportCardMeta.length - 1];
              const Icon = meta.icon;

              return (
                <Reveal key={card.title} delayMs={index * 80}>
                  <Card className={`flex h-full flex-col ${meta.cardClass}`.trim()} tone={meta.tone}>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-softGray/80 bg-brand-bg text-brand-charcoal">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="mt-4 font-display text-[1.35rem] font-semibold leading-tight text-brand-charcoal">
                      {card.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-text/78">{card.text}</p>
                    <ActionLink href={card.href} external={card.external} variant={meta.ctaVariant} className={`mt-5 self-start ${meta.ctaClass}`.trim()}>
                      {card.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </ActionLink>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Section>

        {/* Join */}
        <Section id="join" title={t.home.join.title}>
          <p className="mb-6 max-w-3xl text-brand-text/78">{t.joinPage.intro}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {t.joinPage.cards.map((card, index) => {
              const meta = joinCardMeta[index] ?? joinCardMeta[joinCardMeta.length - 1];
              const Icon = meta.icon;

              return (
                <Reveal key={card.title} delayMs={index * 80}>
                  <Card className={`flex h-full flex-col ${meta.cardClass}`.trim()} tone={meta.tone}>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-softGray/80 bg-brand-bg text-brand-charcoal">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="mt-4 font-display text-[1.35rem] font-semibold leading-tight text-brand-charcoal">
                      {card.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-text/78">{card.text}</p>
                    <ActionLink href={card.href} external={card.external} variant={meta.ctaVariant} className={`mt-5 self-start ${meta.ctaClass}`.trim()}>
                      {card.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </ActionLink>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Section>
      </div>

      {/* Gallery Modal */}
      {openGallery && branchGalleries[openGallery] && branchGalleries[openGallery].length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setOpenGallery(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setOpenGallery(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/90 backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label={lang === 'es' ? 'Cerrar' : 'Close'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setGalleryIndex((prev) => (prev - 1 + branchGalleries[openGallery].length) % branchGalleries[openGallery].length);
            }}
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/90 backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label={lang === 'es' ? 'Anterior' : 'Previous'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setGalleryIndex((prev) => (prev + 1) % branchGalleries[openGallery].length);
            }}
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/90 backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label={lang === 'es' ? 'Siguiente' : 'Next'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Image container */}
          <div className="relative mx-auto flex max-h-[85vh] w-full max-w-[90vw] flex-col items-center justify-center px-4" onClick={(e) => e.stopPropagation()}>
            <SafeImage
              src={branchGalleries[openGallery][galleryIndex].src}
              alt={branchGalleries[openGallery][galleryIndex].alt[lang]}
              width={1024}
              height={683}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
              sizes="90vw"
            />
            <div className="mt-4 flex flex-col items-center justify-between gap-2 text-sm text-white/70 sm:flex-row">
              <span>{branchGalleries[openGallery][galleryIndex].credit}</span>
              <span className="tabular-nums">
                {galleryIndex + 1} / {branchGalleries[openGallery].length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
