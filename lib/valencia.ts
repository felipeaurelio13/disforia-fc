import { valenciaFunding } from '@/content/site';

export function getValenciaProgress() {
  const rawPercentage = Math.round((valenciaFunding.raised / valenciaFunding.target) * 100);
  const percentage = Math.min(Math.max(rawPercentage, 0), 100);

  return {
    percentage,
    remaining: Math.max(valenciaFunding.target - valenciaFunding.raised, 0),
  };
}
