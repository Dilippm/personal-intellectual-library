import { Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import AddBook from './pages/AddBook'
import BookDetail from './pages/BookDetail'

function App() {

  return (

    <div className="
      h-screen
      flex
      flex-col
      bg-black
      text-white

      overflow-hidden
    ">

      {/* Header */}

      <Header />

      {/* Main */}

      <main className="
        flex-1
        overflow-y-auto
      ">

        <Routes>

          <Route path="/home" element={<Home />} />

          <Route path="/" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/dashboard" element={<Dashboard />} />

    

          <Route path="/add-book" element={<AddBook />} />

          <Route path="/books/:id" element={<BookDetail />} />

        </Routes>

      </main>

      {/* Footer */}

      <Footer />

    </div>
  )
}

export default App