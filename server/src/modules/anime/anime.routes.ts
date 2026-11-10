import { Router } from 'express'
import { getAnimeByIdHandler, searchAnimeHandler } from './anime.controller.js'

const router = Router()

router.get('/search', searchAnimeHandler)
router.get('/:id', getAnimeByIdHandler)

export default router
