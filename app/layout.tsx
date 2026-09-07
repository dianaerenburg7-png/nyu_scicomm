import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NYU Biomedical SciComm',
  description:
    'An independent publication by NYU graduate students, making research accessible, engaging, and relevant.',
  openGraph: {
    title: 'NYU Biomedical SciComm',
    description: 'Biomedical science, from the people who study it.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NYU Biomedical SciComm',
    description: 'Biomedical science, from the people who study it.',
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
