import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Personal Intellectual Library</h1>
      <p>Manage your personal collection of books and insights</p>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </div>
  )
}
