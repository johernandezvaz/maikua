import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Maikua',
  description: 'Maikua terms and conditions of use. Learn about the rules and policies that govern our services.',
  robots: 'noindex, follow',
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}