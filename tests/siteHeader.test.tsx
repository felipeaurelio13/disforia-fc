import { createElement } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SiteHeader } from '@/components/SiteHeader';
import { copy } from '@/content/copy';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { alt, src, priority, onLoadingComplete, loader, fill, ...rest } = props;
    return createElement('img', { alt, src, ...rest });
  },
}));

describe('SiteHeader', () => {
  it('renders nav items from copy for spanish locale', () => {
    render(createElement(SiteHeader, { lang: 'es' }));

    copy.es.nav.forEach((item) => {
      expect(screen.getAllByRole('link', { name: item.label })[0]).toBeTruthy();
    });
  });

  it('opens and closes mobile menu', () => {
    render(createElement(SiteHeader, { lang: 'en' }));

    const openButton = screen.getByRole('button', { name: 'Open menu' });
    fireEvent.click(openButton);
    expect(document.getElementById('mobile-nav')).toBeTruthy();

    const closeButton = screen.getByRole('button', { name: 'Close menu' });
    fireEvent.click(closeButton);
    expect(document.getElementById('mobile-nav')).toBeNull();
  });

  it('points valencia CTA to the localized home anchor', () => {
    render(createElement(SiteHeader, { lang: 'en' }));

    const supportLink = screen.getByRole('link', { name: copy.en.common.supportCTA });
    expect(supportLink.getAttribute('href')).toBe('/en#valencia');
  });
});
