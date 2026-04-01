import { copy } from '@/content/copy';

describe('editorial content', () => {
  it('includes directiva people on home for both locales', () => {
    for (const lang of ['es', 'en'] as const) {
      const allPeople = copy[lang].home.people.groups.flatMap((g) => g.list);
      const roles = allPeople.map((person) => person.role);
      expect(roles.length).toBeGreaterThan(0);
      expect(roles.every((r) => r.length > 0)).toBe(true);
    }
  });


  it('uses structured impact content with explicit value statements', () => {
    for (const lang of ['es', 'en'] as const) {
      expect(copy[lang].home.impact.items).toHaveLength(3);
      for (const item of copy[lang].home.impact.items) {
        expect(item.title.length).toBeGreaterThan(5);
        expect(item.text.length).toBeGreaterThan(20);
      }
    }
  });

  it('directiva members have no quotes', () => {
    for (const lang of ['es', 'en'] as const) {
      const allPeople = copy[lang].home.people.groups.flatMap((g) => g.list);
      for (const person of allPeople) {
        expect(person.quote).toBeUndefined();
      }
    }
  });


  it('reinforces first-club positioning and direct donation message', () => {
    expect(copy.es.home.hero.subtitle).toContain('primer club deportivo');
    expect(copy.en.home.hero.subtitle).toContain('first sports club');
    expect(copy.es.home.valencia.text).toContain('Cada aporte');
    expect(copy.en.home.valencia.text).toContain('Every contribution');
  });

  it('keeps required quotes in their intended sections', () => {
    expect(copy.es.home.about.quote).toBe('Es una familia, es un espacio seguro para jugar a la pelota.');
    expect(copy.en.valencia.quote).toBe('football became an embrace, support, community, and family.');
  });

  it('removes forbidden placeholder strings from public copy', () => {
    const serialized = JSON.stringify(copy);
    const forbidden = ['Por confirmar', 'To be confirmed', 'Actualización manual pendiente', 'Manual update pending', 'Canal por confirmar', 'Channel to be confirmed'];
    for (const term of forbidden) {
      expect(serialized).not.toContain(term);
    }
  });
});


it('includes valencia transparency and faq blocks for both locales', () => {
  for (const lang of ['es', 'en'] as const) {
    expect(copy[lang].valencia.needs.length).toBeGreaterThan(2);
    expect(copy[lang].valencia.testimonials.length).toBeGreaterThan(0);
    expect(copy[lang].valencia.faq.length).toBeGreaterThan(0);
  }
});

it('includes a five-step achievements roadmap for both locales', () => {
  for (const lang of ['es', 'en'] as const) {
    const roadmap = copy[lang].home.roadmap;
    expect(roadmap.title.length).toBeGreaterThan(10);
    expect(roadmap.milestones).toHaveLength(6);
    for (const milestone of roadmap.milestones) {
      expect(milestone.year).toMatch(/^\d{4}$/);
      expect(milestone.title.length).toBeGreaterThan(8);
      expect(milestone.detail.length).toBeGreaterThan(30);
    }
  }
});

it('uses stable branch keys for shared branch content', () => {
  for (const lang of ['es', 'en'] as const) {
    const keys = copy[lang].home.branches.items.map((item) => item.key);
    expect(keys).toEqual(['football', 'basketball', 'volleyball']);
  }
});
