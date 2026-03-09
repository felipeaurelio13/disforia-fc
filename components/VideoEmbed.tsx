'use client';

import { useState } from 'react';
import { SafeImage } from '@/components/ui/SafeImage';

type VideoEmbedProps = {
  vimeoId: string;
  vimeoHash: string;
  title: string;
  thumbnail: string;
  director: string;
  duration: string;
  lang: string;
};

export function VideoEmbed({ vimeoId, vimeoHash, title, thumbnail, director, duration, lang }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-lift">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?h=${vimeoHash}&autoplay=1&title=0&byline=0&portrait=0`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
    >
      <SafeImage
        src={thumbnail}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary/90 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>

      {/* Info bar */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
        <p className="text-left font-display text-lg font-semibold text-white">{title}</p>
        <p className="mt-0.5 text-left text-sm text-white/70">
          {lang === 'es' ? 'Dir.' : 'Dir.'} {director} · {duration}
        </p>
      </div>
    </button>
  );
}
