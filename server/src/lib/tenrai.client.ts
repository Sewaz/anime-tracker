import { env } from '../config/env.js'
import { HttpError } from './http-error.js'

export async function tenraiGet<T>(path: string): Promise<T> {
  const normalizedPath = path.replace(/^\/+/, '')
  const url = new URL(normalizedPath, env.TENRAI_BASE_URL)

  let response: Response
  try {
    response = await fetch(url, { signal: AbortSignal.timeout(10_000) })
  } catch (error) {
    const status = error instanceof Error && error.name === 'TimeoutError' ? 504 : 502
    throw new HttpError(status, 'Service unavailable, try again later', { cause: error })
  }

  if (response.status === 404) throw new HttpError(404, 'Not found')

  if (response.status === 429) throw new HttpError(503, 'Service busy, try again later')

  if (!response.ok) {
    console.error(`Tenrai responded with ${response.status} ${response.statusText}`)
    throw new HttpError(502, 'Service unavailable, try again later')
  }

  try {
    return (await response.json()) as T
  } catch (error) {
    throw new HttpError(502, 'Service unavailable, try again later', { cause: error })
  }
}
