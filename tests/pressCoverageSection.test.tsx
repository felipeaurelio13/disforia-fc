import { createElement } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PressCoverageSection } from '@/components/PressCoverageSection';
import { pressCoverage } from '@/content/site';
import { copy } from '@/content/copy';

describe('PressCoverageSection', () => {
  it('renders filter tabs with accurate item counts', () => {
    render(
      createElement(PressCoverageSection, {
        items: pressCoverage,
        lang: 'es',
        categoryLabels: copy.es.pressPage.categoryLabels,
        readMore: 'Ver más',
      }),
    );

    expect(screen.getByRole('tab', { name: /Todas/i })).toBeTruthy();
    expect(screen.getByRole('tab', { name: /Prensa/i })).toBeTruthy();
    expect(screen.getByRole('tab', { name: /Deporte/i })).toBeTruthy();
  });

  it('filters items when clicking a category tab', () => {
    render(
      createElement(PressCoverageSection, {
        items: pressCoverage,
        lang: 'es',
        categoryLabels: copy.es.pressPage.categoryLabels,
        readMore: 'Ver más',
      }),
    );

    const sportTab = screen.getByRole('tab', { name: /Deporte/i });
    fireEvent.click(sportTab);

    expect(screen.getByText(/Equipos LGBTIQ\+ chilenos ganan oro y bronce/i)).toBeTruthy();
  });
});
