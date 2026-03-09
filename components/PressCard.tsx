import { SafeImage } from '@/components/ui/SafeImage';
import { Card } from '@/components/ui';
import type { PressItem, PressCategory, Locale } from '@/content/site';

const categoryColors: Record<PressCategory, string> = {
  press: 'border-brand-magenta/30 bg-brand-magenta/8 text-brand-magenta',
  tv: 'border-brand-accent/40 bg-brand-accent/10 text-brand-accent',
  sport: 'border-emerald-400/30 bg-emerald-400/8 text-emerald-600',
  film: 'border-brand-lavender/30 bg-brand-lavender/8 text-brand-lavender',
};

export function PressCard({
  item,
  lang,
  categoryLabel,
  readMore,
}: {
  item: PressItem;
  lang: Locale;
  categoryLabel: string;
  readMore: string;
}) {
  const year = new Date(item.date).getFullYear();

  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="group block">
      <Card className="flex h-full flex-col overflow-hidden !p-0">
        {/* Thumbnail */}
        {item.thumbnail ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-softGray/30">
            <SafeImage
              src={item.thumbnail}
              alt={item.title[lang]}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : null}

        {/* Content */}
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          {/* Top row: badge + year */}
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] ${categoryColors[item.category]}`}>
              {categoryLabel}
            </span>
            <span className="text-[11px] tabular-nums text-brand-text/50">{year}</span>
          </div>

          {/* Source */}
          <p className="mt-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-lavender/70">
            {item.source}
          </p>

          {/* Title */}
          <h3 className="mt-1 font-display text-[15px] font-semibold leading-snug text-brand-charcoal group-hover:text-brand-magenta">
            {item.title[lang]}
          </h3>

          {/* Description */}
          <p className="mt-1.5 flex-1 text-sm leading-relaxed text-brand-text/75">
            {item.description[lang]}
          </p>

          {/* CTA */}
          <p className="mt-3 text-sm font-semibold text-brand-magenta transition-colors group-hover:text-brand-lavender">
            {readMore} →
          </p>
        </div>
      </Card>
    </a>
  );
}
