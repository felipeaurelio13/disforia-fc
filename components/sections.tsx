import { Reveal } from '@/components/Reveal';
import { Badge, Card, Section } from '@/components/ui';
import { SafeImage } from '@/components/ui/SafeImage';
import { copy } from '@/content/copy';
import { branchImages, externalLinks, Locale, valenciaFunding } from '@/content/site';
import { getValenciaProgress } from '@/lib/valencia';
import { Clock, MapPin, Instagram } from 'lucide-react';

export function HomeSections({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const { percentage, remaining } = getValenciaProgress();
  const format = new Intl.NumberFormat(lang === 'es' ? 'es-CL' : 'en-US', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
  const isTracked = valenciaFunding.campaignMode === 'tracked' && Boolean(valenciaFunding.tracked);

  return (
    <>
      {/* ── Identity group ── */}
      <div className="section-group bg-brand-lavender/[0.04]">
        {/* Credibility bar */}
        <Section>
          <Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {t.home.credibility.map((item, i) => (
                <div key={i} className="rounded-2xl border border-brand-lavender/20 bg-brand-lavender/5 px-5 py-4">
                  <p className="font-display text-sm font-semibold text-brand-charcoal sm:text-base">{item.title}</p>
                  <p className="mt-1.5 text-xs text-brand-text/70 sm:text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* Club / About */}
        <Section id="club" title={t.home.about.title}>
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
            <Reveal>
              <p className="text-base leading-relaxed text-brand-text/85 md:text-lg">{t.home.about.body}</p>
              <blockquote className="mt-5 border-l-[3px] border-brand-primary/70 pl-4 text-base italic text-brand-text/75 md:text-lg">
                &ldquo;{t.home.about.quote}&rdquo;
              </blockquote>
              <p className="mt-6 text-brand-text/75">{t.club.manifesto}</p>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="space-y-4">
                <Card>
                  <h3 className="font-display text-base font-semibold text-brand-charcoal">{lang === 'es' ? 'Misión' : 'Mission'}</h3>
                  <p className="mt-1.5 text-sm text-brand-text/80">{t.club.mission}</p>
                </Card>
                <Card>
                  <h3 className="font-display text-base font-semibold text-brand-charcoal">{lang === 'es' ? 'Visión' : 'Vision'}</h3>
                  <p className="mt-1.5 text-sm text-brand-text/80">{t.club.vision}</p>
                </Card>
                <Card>
                  <h3 className="font-display text-base font-semibold text-brand-charcoal">{lang === 'es' ? 'Valores' : 'Values'}</h3>
                  <ul className="mt-1.5 space-y-1 text-sm text-brand-text/80">{t.club.values.map((v) => <li key={v}>• {v}</li>)}</ul>
                </Card>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Branches */}
        <Section id="branches" title={t.home.branches.title}>
          <div className="grid gap-4 md:grid-cols-3">
            {t.home.branches.items.map((branch, i) => {
              const imageKeys = ['football', 'basketball', 'volleyball'] as const;
              const img = branchImages[imageKeys[i]];
              return (
                <Reveal key={branch.title} delayMs={i * 80}>
                  <Card className={`h-full ${branch.featured ? 'border-brand-primary/30 bg-brand-primary/5' : ''}`}>
                    {img && (
                      <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-xl">
                        <SafeImage src={img.src} alt={img.alt[lang]} fill sizes="(max-width: 767px) 92vw, (max-width: 1279px) 31vw, 380px" className="object-cover" fallbackLabel={branch.title} />
                      </div>
                    )}
                    <h3 className="font-display text-xl font-semibold text-brand-charcoal">{branch.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-text/80">{branch.text}</p>
                    <div className="mt-3 space-y-2 text-sm text-brand-text/75">
                      <p className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0 text-brand-lavender" />{branch.schedule}</p>
                      <p className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0 text-brand-lavender" />{branch.location}</p>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <a href={branch.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-brand-lavender/30 bg-brand-lavender/5 px-3 py-1.5 text-xs font-semibold text-brand-lavender hover:bg-brand-lavender/10">
                        <Instagram className="h-3.5 w-3.5" />
                        {branch.instagram}
                      </a>
                      {branch.featured ? <Badge>{lang === 'es' ? 'Rama principal' : 'Main branch'}</Badge> : null}
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Section>
      </div>

      {/* ── Impact & Story group ── */}
      <div className="section-group">
        {/* Impact */}
        <Section id="impact" title={t.home.impact.title} description={t.home.impact.intro}>
          <div className="grid gap-4 md:grid-cols-3">
            {t.home.impact.items.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 80}>
                <Card className="h-full">
                  <h3 className="font-display text-lg font-semibold text-brand-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text/80">{item.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Documentary */}
        <Section id="documentary" title={t.club.documentary.title}>
          <Reveal>
            <div className="grid gap-5 overflow-hidden rounded-2xl border border-brand-lavender/40 bg-brand-lavender/8 p-5 sm:p-6 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-8">
              <div>
                <p className="text-brand-text/85 md:text-lg">{t.club.documentary.text}</p>
                <div className="mt-4">
                  <span className="inline-flex rounded-full border border-brand-accent/40 bg-brand-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-brand-lavender">{t.club.documentary.award}</span>
                </div>
                <div className="mt-5">
                  <a href={externalLinks.documentary} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full bg-brand-magenta px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:scale-[1.02] hover:shadow-lift">{t.club.documentary.cta}</a>
                </div>
              </div>
              <div className="relative min-h-56 overflow-hidden rounded-xl border border-brand-softGray/40 bg-brand-surface">
                <SafeImage src="/images/prensa/cinhomo-fotograma.jpg" alt={lang === 'es' ? 'Fotograma del documental Disforia Fútbol Club' : 'Still from Disforia Fútbol Club documentary'} fill className="object-cover" sizes="(max-width: 767px) 92vw, 340px" fallbackLabel="Documental" />
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
      </div>

      {/* ── Journey & Community group ── */}
      <div className="section-group bg-brand-lavender/[0.04]">
        {/* Timeline */}
        <Section id="timeline" title={lang === 'es' ? 'Recorrido público' : 'Public journey'} description={t.club.history}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {t.club.timeline.map((item, i) => (
              <Reveal key={item.year} delayMs={i * 60}>
                <article className="relative h-full overflow-hidden rounded-2xl border border-brand-softGray bg-brand-surface p-4">
                  <div className="absolute left-0 top-0 h-full w-1 bg-brand-accent/70" aria-hidden="true" />
                  <p className="pl-2 font-display text-xs font-semibold uppercase tracking-[0.1em] text-brand-lavender">{item.year}</p>
                  <p className="mt-2 pl-2 text-sm leading-relaxed text-brand-text/80">{item.event}</p>
                </article>
              </Reveal>
            ))}
          </div>
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
        <Section id="press" title={t.home.press.title}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.home.press.links.map((link, index) => (
              <Reveal key={link.title} delayMs={index * 70}>
                <a href={link.href} target="_blank" rel="noreferrer" className="card-surface flex h-full min-h-36 flex-col justify-between p-5">
                  <div>
                    <p className="font-display text-lg font-semibold text-brand-charcoal">{link.title}</p>
                    <p className="mt-2.5 text-sm leading-relaxed text-brand-text/74">{link.description}</p>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-brand-magenta">{link.cta} →</p>
                </a>
              </Reveal>
            ))}
          </div>
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
                <Card className={`h-full ${index === 0 ? 'border-brand-primary/35 bg-brand-primary/10' : ''}`}>
                  <h3 className="font-display text-lg font-semibold text-brand-charcoal">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text/80">{card.text}</p>
                  <a
                    href={card.href}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noreferrer' : undefined}
                    className="mt-4 inline-flex min-h-12 items-center rounded-full border border-brand-softGray bg-brand-bg px-4 py-2 text-sm font-semibold text-brand-text/90"
                  >
                    {card.cta}
                  </a>
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
                  <a href={card.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-12 items-center rounded-full border border-brand-softGray bg-brand-bg px-4 py-2 text-sm font-semibold text-brand-text/90">
                    {card.cta}
                  </a>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
