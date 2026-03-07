import { valenciaFunding } from '@/content/site';

export function getValenciaProgress() {
  const percentage = Math.round((valenciaFunding.raised / valenciaFunding.target) * 100);
  return {
    percentage,
    remaining: Math.max(valenciaFunding.target - valenciaFunding.raised, 0),
  };
}
