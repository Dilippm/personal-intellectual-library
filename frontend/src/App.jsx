import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Library from './pages/Library'
import AddBook from './pages/AddBook'
import BookDetail from './pages/BookDetail'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <Link to="/" className="logo">
          📚 Personal Library
        </Link>
        <nav className="nav-links">
          <Link to="/library">Library</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/library" element={<Library />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Personal Intellectual Library. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
