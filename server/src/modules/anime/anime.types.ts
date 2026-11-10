import type {
  TenraiImages,
  TenraiNamedEntity,
  TenraiPaginatedResponse,
  TenraiResponse,
} from '../../lib/tenrai.types.js'

// Tenrai API anime resource — only the fields this app actually reads.

export interface TenraiAnime {
  mal_id: number
  title: string
  title_english: string | null
  images: TenraiImages
  type: string | null
  episodes: number | null
  status: string
  season: string | null
  year: number | null
  rating: string | null
  score: number | null
  scored_by: number | null
  synopsis: string | null
  duration: string
  producers: TenraiNamedEntity[]
  studios: TenraiNamedEntity[]
  genres: TenraiNamedEntity[]
}

export type TenraiAnimeResponse = TenraiResponse<TenraiAnime>
export type TenraiAnimeListResponse = TenraiPaginatedResponse<TenraiAnime>

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
  producers: string[]
  duration: string
  ageRating: string | null
}

export interface Paginated<T> {
  data: T[]
  pagination: {
    page: number
    totalPages: number
    hasNextPage: boolean
  }
}
