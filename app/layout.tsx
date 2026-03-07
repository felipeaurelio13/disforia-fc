import type { Metadata } from 'next';
import { Archivo, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' });

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
      <body className={`${inter.variable} ${archivo.variable}`}>{children}</body>
    </html>
  );
}
