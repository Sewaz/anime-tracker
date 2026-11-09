import dotenv from 'dotenv'
import { fileURLToPath } from 'node:url'

dotenv.config({
  path: fileURLToPath(new URL('../../.env', import.meta.url)),
})

function withTrailingSlash(url: string): string {
  return url.endsWith('/') ? url : `${url}/`
}

export const env = {
  PORT: Number(process.env.PORT) || 5000,
  JIKAN_BASE_URL: withTrailingSlash(process.env.JIKAN_BASE_URL ?? 'https://api.jikan.moe/v4/'),
}
