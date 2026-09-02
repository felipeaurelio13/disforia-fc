import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Disforia FC | Primer club deportivo trans y no binario de Chile',
  description: 'Primer club deportivo para personas trans y no binarias de Chile. Entrenamos, competimos y construimos comunidad desde 2019. Medalla de bronce en Gay Games XII Valencia 2026.',
  metadataBase: new URL('https://disforia-fc.org'),
  openGraph: {
    title: 'Disforia FC | Club deportivo trans y no binario de Chile',
    description: 'Deporte, comunidad y pertenencia desde 2019. Medalla de bronce en los Gay Games XII Valencia 2026.',
    type: 'website',
    url: 'https://disforia-fc.org',
    siteName: 'Disforia FC',
    images: [
      {
        url: '/images/prensa/galio-03.jpg',
        width: 1024,
        height: 683,
        alt: 'Disforia FC - Club deportivo trans y no binario de Chile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disforia FC | Club deportivo trans y no binario de Chile',
    description: 'Deporte, comunidad y pertenencia desde 2019. Medalla de bronce en los Gay Games XII Valencia 2026.',
    images: ['/images/prensa/galio-03.jpg'],
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
