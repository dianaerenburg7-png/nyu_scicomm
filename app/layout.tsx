import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NYU SciComm',
  description:
    'A graduate student-led journal at New York University publishing accessible and engaging science articles.',
  openGraph: {
    title: 'NYU SciComm',
    description: 'Accessible and engaging science from NYU graduate students.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NYU SciComm',
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
