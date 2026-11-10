import type { JikanImages, JikanPagination } from '../../lib/jikan.types.js'
import type { AnimeDetails, AnimeSummary, JikanAnime, Paginated } from './anime.types.js'

function pickImageUrl(images: JikanImages, size: 'image_url' | 'large_image_url'): string | null {
  return images.webp[size] ?? images.jpg[size] ?? null
}

export function toAnimeSummary(anime: JikanAnime): AnimeSummary {
  return {
    malId: anime.mal_id,
    title: anime.title_english ?? anime.title,
    season: anime.season,
    year: anime.year,
    imageUrl: pickImageUrl(anime.images, 'image_url'),
    type: anime.type,
    episodes: anime.episodes,
    score: anime.score,
    scoredBy: anime.scored_by,
    status: anime.status,
  }
}

export function toAnimeDetails(anime: JikanAnime): AnimeDetails {
  return {
    ...toAnimeSummary(anime),
    largeImageUrl: pickImageUrl(anime.images, 'large_image_url'),
    synopsis: anime.synopsis,
    genres: anime.genres.map((genre) => genre.name),
    studios: anime.studios.map((studio) => studio.name),
    producers: anime.producers.map((producer) => producer.name),
    duration: anime.duration,
    ageRating: anime.rating,
  }
}

export function toPaginated<T>(data: T[], pagination: JikanPagination): Paginated<T> {
  return {
    data,
    pagination: {
      page: pagination.current_page,
      totalPages: pagination.last_visible_page,
      hasNextPage: pagination.has_next_page,
    },
  }
}
