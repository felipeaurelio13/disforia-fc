import { createElement } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { VerticalVideoPlayer } from '@/components/VerticalVideoPlayer';
import { digitalReport } from '@/content/site';

describe('VerticalVideoPlayer', () => {
  beforeAll(() => {
    HTMLMediaElement.prototype.play = jest.fn().mockImplementation(() => Promise.resolve());
  });
  it('renders initial facade with poster, play button, and metadata', () => {
    render(
      createElement(VerticalVideoPlayer, {
        src: digitalReport.src,
        poster: digitalReport.poster,
        title: digitalReport.title.es,
        duration: digitalReport.duration,
        categoryLabel: 'Reportaje en video',
        lang: 'es',
      }),
    );

    expect(screen.getByRole('button', { name: /Reproducir/i })).toBeTruthy();
    expect(screen.getByText('4:03')).toBeTruthy();
    expect(screen.getByText('Reportaje en video')).toBeTruthy();
    expect(screen.getByText(digitalReport.title.es)).toBeTruthy();
  });

  it('switches to HTML5 video element when play button is clicked', () => {
    render(
      createElement(VerticalVideoPlayer, {
        src: digitalReport.src,
        poster: digitalReport.poster,
        title: digitalReport.title.es,
        duration: digitalReport.duration,
        categoryLabel: 'Reportaje en video',
        lang: 'es',
      }),
    );

    const playBtn = screen.getByRole('button', { name: /Reproducir/i });
    fireEvent.click(playBtn);

    const video = document.querySelector('video');
    expect(video).toBeTruthy();
    expect(video?.getAttribute('src')).toBe(digitalReport.src);
    expect(video?.getAttribute('controls')).not.toBeNull();
  });
});
