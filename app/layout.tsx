import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  title: {
    default: 'Love Lost — Emotional Hardcore from Kansas',
    template: '%s',
  },
  description:
    'The official home of Love Lost, an emotional hardcore band from Kansas.',
  openGraph: {
    type: 'website',
    title: 'Love Lost — Emotional Hardcore from Kansas',
    description:
      'The official home of Love Lost, an emotional hardcore band from Kansas.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Love Lost — Emotional Hardcore, Kansas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Love Lost — Emotional Hardcore from Kansas',
    description:
      'The official home of Love Lost, an emotional hardcore band from Kansas.',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
