import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | Maikua',
  description: 'Política de cookies de Maikua. Conoce cómo utilizamos las cookies en nuestro sitio web.',
  robots: 'noindex, follow',
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}