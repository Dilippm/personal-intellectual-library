import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your personal library</p>
      <nav>
        <Link to="/library">View Library</Link>
        <Link to="/add-book">Add Book</Link>
      </nav>
    </div>
  )
}
