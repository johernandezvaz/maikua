import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Maikua',
  description: 'Política de privacidad de Maikua. Conoce cómo protegemos y utilizamos tu información personal.',
  robots: 'noindex, follow',
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}