const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function withBasePath(src: string): string {
  if (!src) return src;
  if (/^(https?:)?\/\//.test(src) || src.startsWith('data:')) {
    return src;
  }

  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;

  if (!basePath) {
    return normalizedSrc;
  }

  if (normalizedSrc.startsWith(`${basePath}/`) || normalizedSrc === basePath) {
    return normalizedSrc;
  }

  return `${basePath}${normalizedSrc}`;
}

export function getBasePath(): string {
  return basePath;
}
