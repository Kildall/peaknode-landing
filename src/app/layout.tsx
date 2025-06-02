import { ThemeProvider } from '@/components/theme/theme-provider';
import type { Metadata, Viewport } from 'next';
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
  title: {
    default: 'Peaknode - Prove What You Own. Verify What You Claim.',
    template: '%s | Peaknode',
  },
  description:
    'Peaknode provides institutional-grade proof-of-reserves solutions for exchanges and financial companies. Verify blockchain assets, prove solvency, and build trust through cryptographic transparency.',
  keywords: [
    'blockchain transparency',
    'proof of reserves',
    'cryptocurrency exchange',
    'financial verification',
    'digital asset proof',
    'solvency verification',
    'cryptographic proofs',
    'blockchain audit',
  ],
  authors: [{ name: 'Peaknode' }],
  creator: 'Peaknode',
  publisher: 'Peaknode',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://peaknode.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://peaknode.app',
    title: 'Peaknode - Blockchain Transparency Made Simple',
    description:
      'Transform blockchain complexity into financial clarity with institutional-grade proof-of-reserves solutions.',
    siteName: 'Peaknode',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Peaknode - Blockchain Transparency Made Simple',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peaknode - Prove What You Own. Verify What You Claim.',
    description: 'Institutional-grade proof-of-reserves solutions for digital finance.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="android-chrome" href="/android-chrome-192x192.png" sizes="192x192" />
          <link rel="android-chrome" href="/android-chrome-512x512.png" sizes="512x512" />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
