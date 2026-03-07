import { valenciaFunding } from '@/content/site';
import { getValenciaProgress } from '@/lib/valencia';

describe('getValenciaProgress', () => {
  it('returns null progress when funding values are not configured', () => {
    const progress = getValenciaProgress();
    expect(progress).toEqual({
      percentage: null,
      remaining: null,
    });
  });

  it('returns valid percentage and remaining amount when values are configured', () => {
    const originalTarget = valenciaFunding.target;
    const originalRaised = valenciaFunding.raised;

    valenciaFunding.target = 100;
    valenciaFunding.raised = 40;

    const progress = getValenciaProgress();
    expect(progress.percentage).toBe(40);
    expect(progress.remaining).toBe(60);

    valenciaFunding.target = originalTarget;
    valenciaFunding.raised = originalRaised;
  });

  it('clamps percentage to 100 when raised exceeds target', () => {
    const originalTarget = valenciaFunding.target;
    const originalRaised = valenciaFunding.raised;

    valenciaFunding.target = 100;
    valenciaFunding.raised = 140;

    const progress = getValenciaProgress();
    expect(progress.percentage).toBe(100);
    expect(progress.remaining).toBe(0);

    valenciaFunding.target = originalTarget;
    valenciaFunding.raised = originalRaised;
  });
});
