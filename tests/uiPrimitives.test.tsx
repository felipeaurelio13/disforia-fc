import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import { Badge, ButtonLink, SectionHeader } from '@/components/ui';

describe('UI primitives', () => {
  it('renders section header content when provided', () => {
    render(createElement(SectionHeader, { eyebrow: 'Kicker', title: 'Title', description: 'Description' }));

    expect(screen.getByText('Kicker')).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Title' })).toBeTruthy();
    expect(screen.getByText('Description')).toBeTruthy();
  });

  it('renders badge and text button link variants', () => {
    render(
      createElement('div', null,
        createElement(Badge, null, 'Tag'),
        createElement(ButtonLink, { href: '/es', variant: 'text' }, 'Ir')),
    );

    expect(screen.getByText('Tag')).toBeTruthy();
    expect(screen.getByRole('link', { name: /Ir/ })).toBeTruthy();
  });
});
