// @ts-check
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

/* c8 ignore start */
export const env = createEnv({
  skipValidation: process.env.CI === 'true' || process.env.NODE_ENV === 'test',
  server: {
    SPOTIFY_CLIENT_ID: z.string().min(1),
    SPOTIFY_CLIENT_SECRET: z.string().min(1),
    SPOTIFY_REFRESH_TOKEN: z.string().min(1)
  },
  runtimeEnv: {

    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,

  }
})
/* c8 ignore stop */