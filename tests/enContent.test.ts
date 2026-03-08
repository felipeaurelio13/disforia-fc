import { copy } from '@/content/copy';

describe('english content hygiene', () => {
  it('does not include known spanish placeholder or quote leftovers', () => {
    const serializedEn = JSON.stringify(copy.en);
    expect(serializedEn).not.toContain('Es una familia');
    expect(serializedEn).not.toContain('vi que tenía un propósito y que era necesario');
    expect(serializedEn).not.toContain('Por confirmar');
    expect(serializedEn).not.toContain('Canal por confirmar');
  });
});
