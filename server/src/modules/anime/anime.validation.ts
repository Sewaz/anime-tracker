import { z } from 'zod'
import { HttpError } from '../../lib/http-error.js'

export function parseSearchQuery(value: unknown): string {
  const result = z.string().trim().min(1).safeParse(value)
  if (!result.success) {
    throw new HttpError(400, 'Query parameter "q" is required and cannot be empty')
  }
  return result.data
}

export function parsePage(value: unknown): number {
  if (value === undefined) return 1

  const result = z.coerce.number().int().min(1).safeParse(value)
  if (!result.success) {
    throw new HttpError(400, 'Query parameter "page" must be an integer greater than or equal to 1')
  }
  return result.data
}

export function parseAnimeId(value: unknown): number {
  const result = z.coerce.number().int().positive().safeParse(value)
  if (!result.success) {
    throw new HttpError(400, 'Path parameter "id" must be a positive integer')
  }
  return result.data
}
