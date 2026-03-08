import { copy } from '@/content/copy';
import { localizedPath } from '@/lib/routes';

describe('localized routes parity', () => {
  it('keeps the same navigation architecture in both locales', () => {
    const esRoutes = copy.es.nav.map((item) => item.route);
    const enRoutes = copy.en.nav.map((item) => item.route);

    expect(esRoutes).toEqual(enRoutes);
    expect(esRoutes).toEqual(['home', 'club', 'valencia', 'support', 'join']);
  });

  it('uses english slugs for support and join routes', () => {
    expect(localizedPath('en', 'support')).toBe('/en/support');
    expect(localizedPath('en', 'join')).toBe('/en/join');
    expect(localizedPath('es', 'support')).toBe('/es/apoya');
    expect(localizedPath('es', 'join')).toBe('/es/sumate');
  });
});
