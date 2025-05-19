import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formulario de Contacto | Maikua',
  description: 'Formulario de contacto detallado de Maikua.',
  robots: 'noindex, nofollow',
};

export default function SecretFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}