'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { withBasePath } from '@/lib/assets';

type BaseProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  priority?: boolean;
  sizes?: string;
};

type FillProps = BaseProps & {
  fill: true;
  width?: never;
  height?: never;
};

type FixedProps = BaseProps & {
  fill?: false;
  width: number;
  height: number;
};

type SafeImageProps = FillProps | FixedProps;

export function SafeImage(props: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = useMemo(() => withBasePath(props.src), [props.src]);
  const initials = useMemo(() => {
    if (!props.fallbackLabel) return 'DFC';
    return props.fallbackLabel
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('');
  }, [props.fallbackLabel]);

  if (hasError) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-[linear-gradient(140deg,rgba(135,194,227,0.2),rgba(179,65,115,0.16))] text-brand-softWhite/82 ${props.className ?? ''}`.trim()}
        role="img"
        aria-label={props.alt}
      >
        <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 font-display text-xs font-semibold tracking-[0.12em]">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={resolvedSrc}
      alt={props.alt}
      className={props.className}
      onError={() => setHasError(true)}
      priority={props.priority}
      sizes={props.sizes}
      {...(props.fill ? { fill: true } : { width: props.width, height: props.height })}
    />
  );
}
