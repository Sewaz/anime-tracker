// Jikan API v4 shapes — only the fields this app actually reads.
// Full schema: https://docs.api.jikan.mo

export interface JikanImage {
  image_url: string | null,
  small_image_url: string | null,
  large_image_url: string | null
}

export interface JikanImages {
  jpg: JikanImage,
  webp: JikanImage
}

export interface JikanAired {
  from: string | null,
  to: string | null
}

export interface JikanNamedEntity {
  mal_id: number,
  name: string
}

export interface JikanAnime {
  mal_id: number,
  title: string,
  images: JikanImages,
  type: string | null,
  episodes: number | null,
  status: string,
  aring: boolean,
  aired: JikanAired,
  rating: string | null,
  score: number | null,
  synopsis: string | null,
  year: string | null,
  producers: JikanNamedEntity[],
  studios: JikanNamedEntity[],
  genres: JikanNamedEntity[],
  duration: string
}

export interface JikanPagination {
  current_page: number,
  has_next_page: number,
  items: {
    count: number,
    total: number,
    per_page: number
  }
}

export interface JikanAnimeListResponse {
  data: JikanAnime[],
  pagination: JikanPagination
}

// DTOs

export interface AnimeSummary {
  id: number,
  title: string,
  imageUrl: string | null,
  type: string | null,
  episodes: number | null,
  score: number | null,
  status: string,
  year: number | null
}

export interface AnimeDetails extends AnimeSummary {
  synopsis: string | null
  genres: string[]
  studios: string[]
  duration: string
  rating: string | null
  airing: boolean
  airedFrom: string | null
  airedTo: string | null
}

export interface Paginated<T> {
  data: T[]
  page: number
  hasNextPage: boolean
  totalItems: number
}