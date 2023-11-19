import { ReactNode, Suspense } from 'react';
import { SiteFooter } from "src/components/layout/footer/SiteFooter";
import 'src/styles/globals.css';
import Navbar from '../components/layout/navbar';
import { ThemeProvider } from "../components/providers";
import { Analytics } from "@vercel/analytics/react";
import { ensureStartsWith } from '../lib/utils';
import { inter } from "./fonts";

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon.svg" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.svg" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </head>
      <body className="bg-white dark:bg-black">
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <SiteFooter />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
