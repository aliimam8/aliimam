// @ts-check
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

/* c8 ignore start */
export const env = createEnv({
  skipValidation: process.env.CI === 'true' || process.env.NODE_ENV === 'test',
  server: {
    SPOTIFY_CLIENT_ID: z.string().min(1),
    SPOTIFY_CLIENT_SECRET: z.string().min(1),
    SPOTIFY_REFRESH_TOKEN: z.string().min(1),

    DATABASE_URL: z.string().url(),

    UMAMI_DATABASE_URL: z.string().url()
  },
  client: {
    NEXT_PUBLIC_UMAMI_URL: z.string().url(),
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().uuid(),
    NEXT_PUBLIC_UMAMI_WEBSITE_SHARE_URL: z.string().url()
  },
  runtimeEnv: {

    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,

    DATABASE_URL: process.env.DATABASE_URL,

    UMAMI_DATABASE_URL: process.env.UMAMI_DATABASE_URL,
    NEXT_PUBLIC_UMAMI_URL: process.env.NEXT_PUBLIC_UMAMI_URL,
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
    NEXT_PUBLIC_UMAMI_WEBSITE_SHARE_URL:
      process.env.NEXT_PUBLIC_UMAMI_WEBSITE_SHARE_URL
  }
})
/* c8 ignore stop */