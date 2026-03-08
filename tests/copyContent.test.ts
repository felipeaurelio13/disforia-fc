import { copy } from '@/content/copy';

describe('editorial content', () => {
  it('includes key public people on home for both locales', () => {
    for (const lang of ['es', 'en'] as const) {
      const names = copy[lang].home.people.list.map((person) => person.name);
      expect(names).toContain('Christopher Erlandsen');
      expect(names).toContain('Aaron Domke');
      expect(names).toContain('Christofer Waldo Robledo Alfaro');
    }
  });


  it('uses structured credibility content with explicit value statements', () => {
    for (const lang of ['es', 'en'] as const) {
      expect(copy[lang].home.credibility).toHaveLength(3);
      for (const item of copy[lang].home.credibility) {
        expect(item.title.length).toBeGreaterThan(10);
        expect(item.detail.length).toBeGreaterThan(20);
      }
    }
  });

  it('keeps only approved public quotes for people section', () => {
    const aaronEs = copy.es.home.people.list.find((person) => person.name === 'Aaron Domke');
    const aaronEn = copy.en.home.people.list.find((person) => person.name === 'Aaron Domke');
    expect(aaronEs?.quote).toBeUndefined();
    expect(aaronEn?.quote).toBeUndefined();
  });


  it('reinforces first-club positioning and direct donation message', () => {
    expect(copy.es.home.credibility[0]?.title).toContain('Primer club');
    expect(copy.en.home.credibility[0]?.title).toContain('First trans and non-binary sports club');
    expect(copy.es.home.valencia.text).toContain('Tu aporte hoy');
    expect(copy.en.home.valencia.text).toContain('Donate today');
  });

  it('keeps required quotes in their intended sections', () => {
    expect(copy.es.home.about.quote).toBe('Es una familia, es un espacio seguro para jugar a la pelota.');
    expect(copy.en.valencia.quote).toBe('football became an embrace, support, community, and family.');
    expect(copy.es.home.people.list.find((person) => person.shortName === 'Waldo')?.quote).toBeUndefined();
    expect(copy.en.home.people.list.find((person) => person.shortName === 'Waldo')?.quote).toBeUndefined();
  });

  it('removes forbidden placeholder strings from public copy', () => {
    const serialized = JSON.stringify(copy);
    const forbidden = ['Por confirmar', 'To be confirmed', 'Actualización manual pendiente', 'Manual update pending', 'Canal por confirmar', 'Channel to be confirmed'];
    for (const term of forbidden) {
      expect(serialized).not.toContain(term);
    }
  });
});
