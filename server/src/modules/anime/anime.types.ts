import type { JikanPaginatedResponse, JikanResponse } from '../../lib/jikan.types.js'

// Jikan API v4 anime resource — only the fields this app actually reads.
// Full schema: https://docs.api.jikan.moe/

export interface JikanImage {
  image_url: string | null
  small_image_url: string | null
  large_image_url: string | null
}

export interface JikanImages {
  jpg: JikanImage
  webp: JikanImage
}

export interface JikanNamedEntity {
  mal_id: number
  name: string
}

export interface JikanAnime {
  mal_id: number
  title: string
  title_english: string | null
  images: JikanImages
  type: string | null
  episodes: number | null
  status: string
  season: string | null
  year: number | null
  rating: string | null
  score: number | null
  scoredBy: number | null
  synopsis: string | null
  duration: string
  producers: JikanNamedEntity[]
  studios: JikanNamedEntity[]
  genres: JikanNamedEntity[]
}

export type JikanAnimeResponse = JikanResponse<JikanAnime>
export type JikanAnimeListResponse = JikanPaginatedResponse<JikanAnime>

// DTOs

export interface AnimeSummary {
  malId: number
  title: string
  season: string | null
  year: number | null
  imageUrl: string | null
  type: string | null
  episodes: number | null
  score: number | null
  scoredBy: number | null
  status: string
}

export interface AnimeDetails extends AnimeSummary {
  largeImageUrl: string | null
  synopsis: string | null
  genres: string[]
  studios: string[]
  duration: string
  rating: string | null
}

export interface Paginated<T> {
  data: T[]
  pagination: {
    page: number
    totalPages: number
    hasNextPage: boolean
  }
}
