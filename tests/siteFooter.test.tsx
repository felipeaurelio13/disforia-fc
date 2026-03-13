import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import { SiteFooter } from '@/components/SiteFooter';
import packageJson from '@/package.json';

describe('SiteFooter', () => {
  it('renders the release from package.json', () => {
    render(createElement(SiteFooter, { lang: 'es' }));

    expect(screen.getByText(`Release ${packageJson.version}`)).toBeTruthy();
  });
});
