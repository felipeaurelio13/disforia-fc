import { Locale } from '@/content/site';

export type RouteKey = 'home' | 'club' | 'football' | 'basketball' | 'press' | 'join' | 'support' | 'contact' | 'valencia';

const localizedSlugs: Record<RouteKey, Record<Locale, string>> = {
  home: { es: '', en: '' },
  club: { es: 'club', en: 'club' },
  football: { es: 'futbol', en: 'football' },
  basketball: { es: 'basquetbol', en: 'basketball' },
  press: { es: 'documentales-prensa', en: 'documentaries-press' },
  join: { es: 'sumate', en: 'join' },
  support: { es: 'apoya', en: 'support' },
  contact: { es: 'contacto-redes', en: 'contact-social' },
  valencia: { es: 'valencia-2026', en: 'valencia-2026' },
};

export function localizedPath(lang: Locale, route: RouteKey) {
  const slug = localizedSlugs[route][lang];
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}
