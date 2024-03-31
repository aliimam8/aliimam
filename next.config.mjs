import { withContentlayer } from 'next-contentlayer';

import './src/env/env.mjs'

/** @type {import('next').NextConfig} */

import createMDX from "fumadocs-mdx/config";

const withMDX = createMDX();

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: !!process.env.CI
  },

  eslint: {
    ignoreDuringBuilds: !!process.env.CI
  },
  images: {
    domains: ['res.cloudinary.com', 'khhamnquzieyqedqyvfw.supabase.co', 'images.remotePatterns'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error'
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config;
  },

  experimental: {
    missingSuspenseWithCSRBailout: false,
  },

};

export default withMDX(withContentlayer(nextConfig));
