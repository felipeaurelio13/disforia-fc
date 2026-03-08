import { valenciaFunding } from '@/content/site';
import { getValenciaProgress } from '@/lib/valencia';

describe('getValenciaProgress', () => {
  it('returns null progress in narrative mode', () => {
    const originalMode = valenciaFunding.campaignMode;
    const originalTracked = valenciaFunding.tracked;

    valenciaFunding.campaignMode = 'narrative';
    valenciaFunding.tracked = undefined;

    const progress = getValenciaProgress();
    expect(progress).toEqual({
      percentage: null,
      remaining: null,
    });

    valenciaFunding.campaignMode = originalMode;
    valenciaFunding.tracked = originalTracked;
  });

  it('returns valid percentage and remaining amount in tracked mode', () => {
    const originalMode = valenciaFunding.campaignMode;
    const originalTracked = valenciaFunding.tracked;

    valenciaFunding.campaignMode = 'tracked';
    valenciaFunding.tracked = {
      target: 100,
      raised: 40,
      breakdown: [],
      nextMilestone: { es: 'x', en: 'x' },
    };

    const progress = getValenciaProgress();
    expect(progress.percentage).toBe(40);
    expect(progress.remaining).toBe(60);

    valenciaFunding.campaignMode = originalMode;
    valenciaFunding.tracked = originalTracked;
  });

  it('clamps percentage to 100 when raised exceeds target', () => {
    const originalMode = valenciaFunding.campaignMode;
    const originalTracked = valenciaFunding.tracked;

    valenciaFunding.campaignMode = 'tracked';
    valenciaFunding.tracked = {
      target: 100,
      raised: 140,
      breakdown: [],
      nextMilestone: { es: 'x', en: 'x' },
    };

    const progress = getValenciaProgress();
    expect(progress.percentage).toBe(100);
    expect(progress.remaining).toBe(0);

    valenciaFunding.campaignMode = originalMode;
    valenciaFunding.tracked = originalTracked;
  });
});
