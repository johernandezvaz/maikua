import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Maikua',
  description: 'Maikua privacy policy. Learn how we protect and use your personal information.',
  robots: 'noindex, follow',
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}