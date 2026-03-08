import { Locale } from '@/content/site';

export type RouteKey = 'home' | 'club' | 'valencia' | 'support' | 'join';

const localizedSlugs: Record<RouteKey, Record<Locale, string>> = {
  home: { es: '', en: '' },
  club: { es: 'club', en: 'club' },
  valencia: { es: 'valencia-2026', en: 'valencia-2026' },
  support: { es: 'apoya', en: 'support' },
  join: { es: 'sumate', en: 'join' },
};

export function localizedPath(lang: Locale, route: RouteKey) {
  const slug = localizedSlugs[route][lang];
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

