import { getValenciaProgress } from '@/lib/valencia';

describe('getValenciaProgress', () => {
  it('returns valid percentage and remaining amount', () => {
    const progress = getValenciaProgress();
    expect(progress.percentage).toBeGreaterThan(0);
    expect(progress.percentage).toBeLessThanOrEqual(100);
    expect(progress.remaining).toBeGreaterThanOrEqual(0);
  });
});
