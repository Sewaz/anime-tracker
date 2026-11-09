import { env } from '../config/env.js'
import { HttpError } from './http-error.js'

export async function jikanGet<T>(path: string): Promise<T> {
  const normalizedPath = path.replace(/^\/+/, '')
  const url = new URL(normalizedPath, env.JIKAN_BASE_URL)

  const response: Response = await fetch(url, {
    signal: AbortSignal.timeout(10_000),
  }).catch((error) => {
    console.error('Jikan API request failed:', error)
    throw new HttpError(502, 'Jikan API is unreachable')
  })

  if (response.status === 404) throw new HttpError(404, 'Resource not found on Jikan API')

  if (response.status === 429) throw new HttpError(503, 'Jikan API rate limit exceeded')

  if (!response.ok) throw new HttpError(502, 'Jikan API error')

  return (await response.json()) as T
}
