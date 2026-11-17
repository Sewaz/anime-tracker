import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AnimePage from './pages/AnimePage'
import MyListPage from './pages/MyListPage'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime/:id" element={<AnimePage />} />
        <Route path="/my-list" element={<MyListPage />} />
      </Route>
    </Routes>
  )
}

export default App
