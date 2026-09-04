'use client';

import { useState } from 'react';
import { PressCard } from '@/components/PressCard';
import type { PressItem, PressCategory, Locale } from '@/content/site';

type FilterCategory = 'all' | PressCategory;

export function PressCoverageSection({
  items,
  lang,
  categoryLabels,
  readMore,
}: {
  items: PressItem[];
  lang: Locale;
  categoryLabels: Record<string, string>;
  readMore: string;
}) {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');

  const categories: FilterCategory[] = ['all', 'press', 'sport', 'film', 'tv'];

  const getCount = (cat: FilterCategory) => {
    if (cat === 'all') return items.length;
    return items.filter((item) => item.category === cat).length;
  };

  const filteredItems = (
    selectedCategory === 'all'
      ? items
      : items.filter((item) => item.category === selectedCategory)
  ).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div>
      {/* Category filter tabs */}
      <div className="mb-6 flex flex-wrap items-center gap-2" role="tablist" aria-label={lang === 'es' ? 'Filtrar por categoría' : 'Filter by category'}>
        {categories.map((cat) => {
          const count = getCount(cat);
          if (count === 0 && cat !== 'all') return null;

          const isSelected = selectedCategory === cat;
          const label = cat === 'all' ? (lang === 'es' ? 'Todas' : 'All') : categoryLabels[cat] ?? cat;

          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedCategory(cat)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                isSelected
                  ? 'bg-brand-primary text-white shadow-soft ring-2 ring-brand-primary/20'
                  : 'border border-brand-secondary/15 bg-brand-surface text-brand-text/75 hover:border-brand-primary/40 hover:text-brand-charcoal'
              }`}
            >
              <span>{label}</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] tabular-nums ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-brand-softGray text-brand-text/60'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <PressCard
            key={item.href}
            item={item}
            lang={lang}
            categoryLabel={categoryLabels[item.category] ?? item.category}
            readMore={readMore}
          />
        ))}
      </div>
    </div>
  );
}
