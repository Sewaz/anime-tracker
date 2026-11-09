import { env } from '../config/env.js'
import { HttpError } from './http-error.js'

export async function jikanGet<T>(path: string): Promise<T> {
  const normalizedPath = path.replace(/^\/+/, '')
  const url = new URL(normalizedPath, env.JIKAN_BASE_URL)

  const response: Response = await fetch(url, {
    signal: AbortSignal.timeout(10_000),
  }).catch((error) => {
    console.error('Jikan API request failed:', error)
    if (error instanceof Error && error.name === 'TimeoutError') {
      throw new HttpError(504, 'Service unavailable, try again later')
    }
    throw new HttpError(502, 'Service unavailable, try again later')
  })

  if (response.status === 404) throw new HttpError(404, 'Not found')

  if (response.status === 429) throw new HttpError(503, 'Service busy, try again later')

  if (!response.ok) throw new HttpError(502, 'Service unavailable, try again later')

  return await response.json().catch((error) => {
    console.error('Jikan API returned invalid JSON:', error)
    throw new HttpError(502, 'Service unavailable, try again later')
  }) as T
}
