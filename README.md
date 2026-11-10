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

### Planned

- PostgreSQL
- User authentication
- Tenrai API integration

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

   Create `server/.env`:

   ```env
   PORT=5000
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

| Endpoint      | Method | Description          |
| ------------- | ------ | -------------------- |
| `/api/health` | GET    | Backend health check |
