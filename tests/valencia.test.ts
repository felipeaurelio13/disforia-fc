import { valenciaFunding } from '@/content/site';
import { getValenciaProgress } from '@/lib/valencia';

describe('getValenciaProgress', () => {
  it('returns valid percentage and remaining amount', () => {
    const progress = getValenciaProgress();
    expect(progress.percentage).toBeGreaterThan(0);
    expect(progress.percentage).toBeLessThanOrEqual(100);
    expect(progress.remaining).toBeGreaterThanOrEqual(0);
  });

  it('clamps percentage to 100 when raised exceeds target', () => {
    const originalRaised = valenciaFunding.raised;
    valenciaFunding.raised = valenciaFunding.target + 1000;

    const progress = getValenciaProgress();
    expect(progress.percentage).toBe(100);
    expect(progress.remaining).toBe(0);

    valenciaFunding.raised = originalRaised;
  });
});
