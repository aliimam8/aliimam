import { withContentlayer } from 'next-contentlayer';

import './src/env/env.mjs'

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: !!process.env.CI
  },

  eslint: {
    ignoreDuringBuilds: !!process.env.CI
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
    concurrentFeatures: true,
    missingSuspenseWithCSRBailout: false,
    scrollRestoration: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'khhamnquzieyqedqyvfw.supabase.co', 'images.remotePatterns'],
    formats: ['image/avif', 'image/webp']
  },
  webpack: (config) => {
    config.externals.push({
      canvas: 'canvas'
    })

    return config
  }

};

export default withContentlayer(nextConfig);
