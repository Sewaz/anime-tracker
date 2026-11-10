import express from 'express'
import healthRoutes from './modules/health/health.routes.js'
import animeRoutes from './modules/anime/anime.routes.js'
import { notFound } from './middlewares/not-found.js'
import { errorHandler } from './middlewares/error-handler.js'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  console.log(`[REQUEST] ${req.method} ${req.url}`)
  next()
})

app.use('/api/health', healthRoutes)
app.use('/api/anime', animeRoutes)

app.use(notFound)
app.use(errorHandler)

export default app
