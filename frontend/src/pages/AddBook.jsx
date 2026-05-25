import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function AddBook() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    genre: '',
    rating: 5,
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to backend API
    console.log('Adding book:', formData)
    navigate('/library')
  }

  return (
    <div>
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}
