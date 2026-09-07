import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nyu-scicomm.honey-larch-7140.chatgpt.site'),
  title: 'NYU SciComm | Science, clearly told',
  description:
    'An independent publication by NYU graduate students, making research accessible, engaging, and relevant.',
  openGraph: {
    title: 'NYU SciComm',
    description: 'Science, clearly told.',
    images: [{ url: '/og.png', width: 1732, height: 909, alt: 'NYU SciComm — Science, clearly told.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NYU SciComm',
    description: 'Science, clearly told.',
    images: ['/og.png'],
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
