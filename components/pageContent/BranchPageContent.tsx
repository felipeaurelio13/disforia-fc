import { SafeImage } from '@/components/ui/SafeImage';
import { ActionLink, Card, Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { BranchKey, Locale } from '@/content/site';
import { Clock, MapPin, Instagram } from 'lucide-react';

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

const branchKeyByPage: Record<'footballPage' | 'basketballPage', BranchKey> = {
  footballPage: 'football',
  basketballPage: 'basketball',
};

export function BranchPageContent({ lang, branch }: { lang: Locale; branch: 'footballPage' | 'basketballPage' }) {
  const t = copy[lang][branch];
  const hero = branchHeroImages[branch];
  const branchData = copy[lang].home.branches.items.find((item) => item.key === branchKeyByPage[branch]);

  if (!branchData) return null;

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

      {/* Schedule & contact bar */}
      <Section>
        <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-brand-lavender/20 bg-brand-lavender/5 px-5 py-4">
          <span className="flex items-center gap-2 text-sm text-brand-text/80">
            <Clock className="h-4 w-4 text-brand-lavender" />
            {branchData.schedule}
          </span>
          <span className="flex items-center gap-2 text-sm text-brand-text/80">
            <MapPin className="h-4 w-4 text-brand-lavender" />
            {branchData.location}
          </span>
          <ActionLink href={branchData.instagramUrl} external variant="ghost" className="ml-auto min-h-0 gap-1.5 border-brand-lavender/30 bg-brand-lavender/5 px-3 py-1.5 text-xs text-brand-lavender hover:bg-brand-lavender/10">
            <Instagram className="h-3.5 w-3.5" />
            {branchData.instagram}
          </ActionLink>
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
        <ActionLink href={branchData.instagramUrl} external className="gap-2">
          <Instagram className="h-4 w-4" />
          {t.cta}
        </ActionLink>
      </Section>
    </>
  );
}
