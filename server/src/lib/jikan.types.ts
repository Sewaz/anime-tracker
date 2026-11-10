// Generic Jikan API v4 response envelopes — shared by every resource
// (anime, manga, characters, ...), not just anime.
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

export interface JikanResponse<T> {
  data: T
}

export interface JikanPagination {
  current_page: number
  has_next_page: boolean
  last_visible_page: number
  items: {
    count: number
    total: number
    per_page: number
  }
}

export interface JikanPaginatedResponse<T> {
  data: T[]
  pagination: JikanPagination
}
