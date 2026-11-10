# Anime Tracker

A fullstack application for tracking anime.

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

### Backend

- Node.js
- Express
- TypeScript
- Tenrai API integration

### Planned

- PostgreSQL
- User authentication

## Project Structure

- `client/` — frontend application
- `server/` — backend API

## Getting Started

1. **Install frontend dependencies**

   ```bash
   cd client
   npm install
   ```

2. **Install backend dependencies**

   ```bash
   cd ../server
   npm install
   ```

3. **Configure environment**

   Create `server/.env` (see `server/.env.example`):

   ```env
   PORT=5000
   TENRAI_BASE_URL=https://api.tenrai.org/v1
   ```

4. **Start backend**

   From `server/`:

   ```bash
   npm run dev
   ```

5. **Start frontend**

   From `client/`:

   ```bash
   npm run dev
   ```

## Available Backend Endpoints

| Endpoint                     | Method | Description                       |
| ---------------------------- | ------ | --------------------------------- |
| `/api/health`                | GET    | Backend health check              |
| `/api/anime/search?q=&page=` | GET    | Search anime by title (paginated) |
| `/api/anime/:id`             | GET    | Anime details by id               |

Errors are returned as `{ "error": { "message": string } }` with an appropriate 4xx/5xx status.
