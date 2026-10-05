import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Violet Matter',
  description:
    'A graduate student-led journal at New York University publishing accessible and engaging science articles.',
  openGraph: {
    title: 'Violet Matter',
    description: 'Accessible and engaging science from NYU graduate students.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Violet Matter',
    description: 'Accessible and engaging science from NYU graduate students.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
