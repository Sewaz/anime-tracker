// Generic Tenrai API response envelopes — shared by every resource
// (anime, manga, characters, ...), not just anime.

export interface TenraiImage {
  image_url: string | null
  small_image_url: string | null
  large_image_url: string | null
}

export interface TenraiImages {
  jpg: TenraiImage
  webp: TenraiImage
}

export interface TenraiNamedEntity {
  mal_id: number
  name: string
}

export interface TenraiResponse<T> {
  data: T
}

export interface TenraiPagination {
  current_page: number
  has_next_page: boolean
  last_visible_page: number
  items: {
    count: number
    total: number
    per_page: number
  }
}

export interface TenraiPaginatedResponse<T> {
  data: T[]
  pagination: TenraiPagination
}
