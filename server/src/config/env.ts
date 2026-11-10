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
  TENRAI_BASE_URL: withTrailingSlash(process.env.TENRAI_BASE_URL ?? 'https://api.tenrai.org/v1'),
}
