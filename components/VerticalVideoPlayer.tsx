'use client';

import { useState, useRef, useEffect } from 'react';
import { SafeImage } from '@/components/ui/SafeImage';
import { withBasePath } from '@/lib/assets';
import { Play } from 'lucide-react';

type VerticalVideoPlayerProps = {
  src: string;
  poster: string;
  title: string;
  duration?: string;
  categoryLabel?: string;
  lang: string;
  className?: string;
};

export function VerticalVideoPlayer({
  src,
  poster,
  title,
  duration = '4:03',
  categoryLabel,
  lang,
  className = '',
}: VerticalVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handle autoplay policy if browser blocks it
        });
      }
    }
  }, [isPlaying]);

  const resolvedVideoSrc = withBasePath(src);
  const resolvedPosterSrc = withBasePath(poster);

  if (isPlaying) {
    return (
      <div
        className={`relative aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-[24px] bg-black shadow-lift border border-white/15 ${className}`}
      >
        <video
          ref={videoRef}
          src={resolvedVideoSrc}
          poster={resolvedPosterSrc}
          controls
          playsInline
          autoPlay
          preload="metadata"
          className="h-full w-full object-cover"
          title={title}
        >
          {lang === 'es'
            ? 'Tu navegador no soporta la reproducción de video HTML5.'
            : 'Your browser does not support HTML5 video playback.'}
        </video>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`${lang === 'es' ? 'Reproducir' : 'Play'}: ${title}`}
      className={`group relative aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-[24px] bg-black shadow-lift border border-white/15 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${className}`}
    >
      {/* Poster image */}
      <SafeImage
        src={poster}
        alt={title}
        fill
        sizes="(max-width: 768px) 90vw, 340px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Atmospheric gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40" />

      {/* Top Header Tags */}
      <div className="absolute left-3.5 right-3.5 top-3.5 flex items-center justify-between gap-2">
        {categoryLabel ? (
          <span className="inline-flex items-center rounded-full border border-white/25 bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
            {categoryLabel}
          </span>
        ) : <span />}

        {duration ? (
          <span className="inline-flex items-center rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-[11px] font-medium tabular-nums text-white/90 backdrop-blur-md">
            {duration}
          </span>
        ) : null}
      </div>

      {/* Center Play Icon Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary text-white shadow-[0_10px_30px_rgba(189,43,113,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-primary/95">
          <Play className="h-7 w-7 fill-white translate-x-0.5" />
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-display text-base font-semibold leading-snug text-white drop-shadow-sm sm:text-lg">
          {title}
        </p>
        <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-brand-sky">
          <span>{lang === 'es' ? 'Toca para ver el video' : 'Tap to watch video'}</span>
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </p>
      </div>
    </button>
  );
}
