import { z } from 'zod'
import { HttpError } from '../../lib/http-error.js'

const searchQuerySchema = z.string().trim().min(1).max(100)
const pageSchema = z.coerce.number().int().min(1).max(1000).default(1)
const animeIdSchema = z.coerce.number().int().positive()

export function parseSearchQuery(value: unknown): string {
  const result = searchQuerySchema.safeParse(value)
  if (!result.success) {
    throw new HttpError(400, 'Query parameter "q" is required and must be 1-100 characters')
  }
  return result.data
}

export function parsePage(value: unknown): number {
  const result = pageSchema.safeParse(value)
  if (!result.success) {
    throw new HttpError(400, 'Query parameter "page" must be an integer between 1 and 1000')
  }
  return result.data
}

export function parseAnimeId(value: unknown): number {
  const result = animeIdSchema.safeParse(value)
  if (!result.success) {
    throw new HttpError(400, 'Path parameter "id" must be a positive integer')
  }
  return result.data
}
