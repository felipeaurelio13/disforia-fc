import { copy } from '@/content/copy';

describe('editorial content', () => {
  it('includes visible leadership on home for both locales', () => {
    for (const lang of ['es', 'en'] as const) {
      const names = copy[lang].home.people.list.map((person) => person.name);
      expect(names).toContain('Christopher Erlandsen');
      expect(names).toContain('Aaron Domke');
      expect(names).toContain('Christofer Waldo Robledo Alfaro');
    }
  });

  it('includes a quote for each visible person in both locales', () => {
    for (const lang of ['es', 'en'] as const) {
      for (const person of copy[lang].home.people.list) {
        expect(person.quote.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it('keeps recommended quotes in their intended sections', () => {
    expect(copy.es.home.about.quote).toBe('Es una familia, es un espacio seguro para jugar a la pelota.');
    expect(copy.es.valencia.quote).toBe('football became an embrace, support, community, and family.');
    expect(copy.es.home.join.quote).toBe('vi que tenía un propósito y que era necesario');
  });
});
