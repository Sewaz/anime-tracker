import { jikanGet } from '../../lib/jikan.client.js'
import { HttpError } from '../../lib/http-error.js'
import { toAnimeDetails, toAnimeSummary, toPaginated } from './anime.mapper.js'
import type {
  AnimeDetails,
  AnimeSummary,
  JikanAnimeListResponse,
  JikanAnimeResponse,
  Paginated,
} from './anime.types.js'

const SEARCH_RESULTS_PER_PAGE = 20

export async function searchAnime(q: string, page: number): Promise<Paginated<AnimeSummary>> {
  const params = new URLSearchParams({
    q,
    page: String(page),
    limit: String(SEARCH_RESULTS_PER_PAGE),
  })

  const response = await jikanGet<JikanAnimeListResponse>(`anime?${params}`)
  return toPaginated(response.data.map(toAnimeSummary), response.pagination)
}

export async function getAnimeById(id: number): Promise<AnimeDetails> {
  try {
    const response = await jikanGet<JikanAnimeResponse>(`anime/${id}`)
    return toAnimeDetails(response.data)
  } catch (error) {
    if (error instanceof HttpError && error.status === 404) {
      throw new HttpError(404, 'Anime not found', { cause: error })
    }
    throw error
  }
}
