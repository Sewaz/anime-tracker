import type { Request, Response } from 'express'
import { getAnimeById, searchAnime } from './anime.service.js'
import { parseAnimeId, parsePage, parseSearchQuery } from './anime.validation.js'

export async function searchAnimeHandler(req: Request, res: Response): Promise<void> {
  const q = parseSearchQuery(req.query.q)
  const page = parsePage(req.query.page)

  const result = await searchAnime(q, page)
  res.json(result)
}

export async function getAnimeByIdHandler(req: Request, res: Response): Promise<void> {
  const id = parseAnimeId(req.params.id)

  const anime = await getAnimeById(id)
  res.json(anime)
}
