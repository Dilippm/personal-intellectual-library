import { useParams, useNavigate, Link } from 'react-router-dom'

export default function BookDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  // TODO: Fetch book details from backend using id

  const book = {
    id,
    title: 'Sample Book',
    author: 'Sample Author',
    description: 'Book description goes here',
    genre: 'Fiction',
    rating: 5,
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Rating:</strong> {book.rating}/5</p>
      <p><strong>Description:</strong> {book.description}</p>
      <nav>
        <Link to={`/edit-book/${book.id}`}>Edit</Link>
        <button onClick={() => {
          // TODO: Delete book from backend
          navigate('/library')
        }}>Delete</button>
      </nav>
    </div>
  )
}
