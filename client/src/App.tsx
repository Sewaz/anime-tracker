import { Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AnimePage from './pages/AnimePage'
import MyListPage from './pages/MyListPage'

function App() {
  return (
    <div className="bg-bg text-text min-h-screen">
      <nav className="border-border flex items-center gap-6 border-b px-8 py-4">
        <span className="font-display text-primary text-xl font-bold">鑑 Anime Tracker</span>
        <Link to="/" className="text-muted hover:text-text">
          Home
        </Link>
        <Link to="/my-list" className="text-muted hover:text-text">
          My List
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime/:id" element={<AnimePage />} />
        <Route path="/my-list" element={<MyListPage />} />
      </Routes>
    </div>
  )
}

export default App
