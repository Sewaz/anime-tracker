import type { NextFunction, Request, Response } from 'express'
import { HttpError } from '../lib/http-error.js'

export function notFound(_req: Request, _res: Response, next: NextFunction) {
  next(new HttpError(404, 'Route not found'))
}
