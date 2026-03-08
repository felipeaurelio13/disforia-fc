import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Disforia FC',
  description: 'Club deportivo trans y no binario de Chile',
  metadataBase: new URL('https://disforia-fc.org'),
  openGraph: {
    title: 'Disforia FC',
    description: 'Club deportivo trans y no binario de Chile',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
