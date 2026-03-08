import { copy } from '@/content/copy';
import { localizedPath } from '@/lib/routes';

describe('localized routes parity', () => {
  it('keeps the same navigation architecture in both locales', () => {
    const esRoutes = copy.es.nav.map((item) => item.route);
    const enRoutes = copy.en.nav.map((item) => item.route);

    expect(esRoutes).toEqual(enRoutes);
    expect(esRoutes).toEqual(['home', 'club', 'football', 'basketball', 'press', 'join', 'support', 'contact']);
  });

  it('uses localized slugs for each route key', () => {
    expect(localizedPath('en', 'support')).toBe('/en/support');
    expect(localizedPath('en', 'join')).toBe('/en/join');
    expect(localizedPath('en', 'football')).toBe('/en/football');
    expect(localizedPath('en', 'basketball')).toBe('/en/basketball');
    expect(localizedPath('en', 'press')).toBe('/en/documentaries-press');
    expect(localizedPath('en', 'contact')).toBe('/en/contact-social');

    expect(localizedPath('es', 'support')).toBe('/es/apoya');
    expect(localizedPath('es', 'join')).toBe('/es/sumate');
    expect(localizedPath('es', 'football')).toBe('/es/futbol');
    expect(localizedPath('es', 'basketball')).toBe('/es/basquetbol');
    expect(localizedPath('es', 'press')).toBe('/es/documentales-prensa');
    expect(localizedPath('es', 'contact')).toBe('/es/contacto-redes');
  });
});
