import './globals.css';
import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2A9D8F',
};

export const metadata: Metadata = {
  title: 'Maikua - Digital Solutions & AI Research',
  description: 'We develop websites, applications, and intelligent systems that transform your vision into reality, combining modern design with advanced technology.',
  keywords: 'web development, mobile applications, artificial intelligence, IoT, AI research, software development, digital solutions',
  authors: [{ name: 'Maikua' }],
  creator: 'Maikua',
  publisher: 'Maikua',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maikua.com',
    siteName: 'Maikua',
    title: 'Maikua - Digital Solutions & AI Research',
    description: 'We develop websites, applications, and intelligent systems that transform your vision into reality.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maikua - Digital Solutions & AI Research',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maikua - Digital Solutions & AI Research',
    description: 'We develop websites, applications, and intelligent systems that transform your vision into reality.',
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
        {children}
      </body>
    </html>
  );
}