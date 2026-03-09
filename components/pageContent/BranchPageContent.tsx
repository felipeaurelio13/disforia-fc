import { SafeImage } from '@/components/ui/SafeImage';
import { Card, Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { externalLinks, Locale } from '@/content/site';

const branchHeroImages: Record<'footballPage' | 'basketballPage', { src: string; alt: Record<Locale, string> }> = {
  footballPage: {
    src: '/images/prensa/galio-06.jpg',
    alt: {
      es: 'Equipo de fútbol de Disforia FC en círculo mostrando camisetas',
      en: 'Disforia FC football team in circle showing jerseys',
    },
  },
  basketballPage: {
    src: '/images/prensa/galio-01.jpg',
    alt: {
      es: 'Jugadores de básquetbol de Disforia FC con bandera trans',
      en: 'Disforia FC basketball players with trans flag',
    },
  },
};

export function BranchPageContent({ lang, branch }: { lang: Locale; branch: 'footballPage' | 'basketballPage' }) {
  const t = copy[lang][branch];
  const hero = branchHeroImages[branch];

  return (
    <>
      <Section title={t.title}>
        <p className="max-w-3xl text-brand-text/85">{t.intro}</p>
      </Section>

      {/* Hero image */}
      <Section>
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
          <SafeImage
            src={hero.src}
            alt={hero.alt[lang]}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </Section>

      <Section>
        <div className="grid gap-3 md:grid-cols-3">
          <Card><h3 className="font-display text-lg font-semibold">{lang === 'es' ? 'Cómo entrenamos' : 'How we train'}</h3><p className="mt-2 text-sm text-brand-text/80">{t.training}</p></Card>
          <Card><h3 className="font-display text-lg font-semibold">{lang === 'es' ? 'Para quién' : 'Who it is for'}</h3><p className="mt-2 text-sm text-brand-text/80">{t.audience}</p></Card>
          <Card><h3 className="font-display text-lg font-semibold">{lang === 'es' ? 'Qué esperar' : 'What to expect'}</h3><p className="mt-2 text-sm text-brand-text/80">{t.join}</p></Card>
        </div>
      </Section>
      <Section>
        <a href={branch === 'footballPage' ? externalLinks.instagramFootball : externalLinks.instagramBasket} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white">{t.cta}</a>
      </Section>
    </>
  );
}
