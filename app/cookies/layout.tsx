import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Maikua',
  description: 'Maikua cookie policy. Learn how we use cookies on our website.',
  robots: 'noindex, follow',
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}