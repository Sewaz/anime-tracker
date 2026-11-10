// Generic Jikan API v4 response envelopes — shared by every resource
// (anime, manga, characters, ...), not just anime.
// Full schema: https://docs.api.jikan.moe/

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
