import type { NextFunction, Request, Response } from 'express'
import { HttpError } from '../lib/http-error.js'

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof HttpError) {
    if (err.status >= 500) {
      console.error(err)
    }

    res.status(err.status).json({ error: { message: err.message } })
    return
  }

  console.error(err)
  res.status(500).json({ error: { message: 'Internal Server Error' } })
}
