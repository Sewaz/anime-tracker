export class HttpError extends Error {
  readonly status: number

  constructor(status: number, message: string, options?: { cause?: unknown }) {
    super(message, options)
    this.name = 'HttpError'
    this.status = status
  }
}
