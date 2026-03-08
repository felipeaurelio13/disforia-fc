import { valenciaFunding } from '@/content/site';

export function getValenciaProgress() {
  if (valenciaFunding.campaignMode !== 'tracked' || !valenciaFunding.tracked || valenciaFunding.tracked.target <= 0) {
    return {
      percentage: null as number | null,
      remaining: null as number | null,
    };
  }

  const { raised, target } = valenciaFunding.tracked;
  const rawPercentage = Math.round((raised / target) * 100);
  const percentage = Math.min(Math.max(rawPercentage, 0), 100);

  return {
    percentage,
    remaining: Math.max(target - raised, 0),
  };
}
