import { ReactNode, Suspense } from 'react';
import { SiteFooter } from '@/components/layout/footer';
import 'src/styles/globals.css';
import { Navbar } from '../components/layout/navbar';
import { ThemeProvider } from '../components/providers';
import { inter } from './fonts';
import Analytics from '@/components/analytics';
import { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Ali Imam',
  description: 'Explore the latest news and updates from the community'
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.svg" />
        <meta name="google-adsense-account" content="ca-pub-8509771369416706"/>
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="bg-white dark:bg-black">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
            <main>{children}</main>
            <Toaster />
          <SiteFooter />
          <Analytics />
          <GoogleAnalytics gaId="G-7DJXCEPQ1E" />
        </ThemeProvider>
      </body>
    </html>
  );
}
