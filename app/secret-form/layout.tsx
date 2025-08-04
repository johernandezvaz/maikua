import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Form | Maikua',
  description: 'Detailed contact form for Maikua.',
  robots: 'noindex, nofollow',
};

export default function SecretFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}