import { valenciaFunding } from '@/content/site';

export function getValenciaProgress() {
  if (valenciaFunding.target == null || valenciaFunding.raised == null || valenciaFunding.target <= 0) {
    return {
      percentage: null as number | null,
      remaining: null as number | null,
    };
  }

  const rawPercentage = Math.round((valenciaFunding.raised / valenciaFunding.target) * 100);
  const percentage = Math.min(Math.max(rawPercentage, 0), 100);

  return {
    percentage,
    remaining: Math.max(valenciaFunding.target - valenciaFunding.raised, 0),
  };
}
