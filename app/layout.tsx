import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/i18n/context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maikua - Soluciones Digitales e Investigación en IA',
  description: 'Desarrollamos sitios web, aplicaciones y sistemas inteligentes que transforman tu visión en realidad, combinando diseño moderno con tecnología avanzada.',
  keywords: 'desarrollo web, aplicaciones móviles, inteligencia artificial, IoT, investigación IA, desarrollo de software, Chihuahua',
  authors: [{ name: 'Maikua' }],
  creator: 'Maikua',
  publisher: 'Maikua',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://maikua.com.mx',
    siteName: 'Maikua',
    title: 'Maikua - Soluciones Digitales e Investigación en IA',
    description: 'Desarrollamos sitios web, aplicaciones y sistemas inteligentes que transforman tu visión en realidad.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maikua - Soluciones Digitales e Investigación en IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maikua - Soluciones Digitales e Investigación en IA',
    description: 'Desarrollamos sitios web, aplicaciones y sistemas inteligentes que transforman tu visión en realidad.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#2A9D8F',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#2A9D8F',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Maikua',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}