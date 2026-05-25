import { Link } from 'react-router-dom'

export default function Library() {
  // TODO: Fetch books from backend
  const books = []

  return (
    <div>
      <h1>My Library</h1>
      {books.length === 0 ? (
        <p>No books yet. <Link to="/add-book">Add your first book</Link></p>
      ) : (
        <div className="books-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
