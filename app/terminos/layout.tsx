import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Maikua',
  description: 'Términos y condiciones de uso de Maikua. Conoce las reglas y políticas que rigen nuestros servicios.',
  robots: 'noindex, follow',
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}