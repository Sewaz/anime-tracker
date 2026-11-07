import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AnimePage from './pages/AnimePage';
import MyListPage from './pages/MyListPage';

function App() {
  return (
      <>
        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/my-list">My List</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anime/:id" element={<AnimePage />} />
          <Route path="/my-list" element={<MyListPage />} />
        </Routes>
      </>
  );
}

export default App;