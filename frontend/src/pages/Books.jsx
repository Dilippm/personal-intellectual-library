import { useNavigate } from 'react-router-dom'
import { useMemo, useState,useEffect } from 'react'
import AppLayout from '@/components/layout/AppLayout'
import { Button } from '@/components/ui/button'
import {
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import AddBookModal from '@/components/books/AddModal'
import { addBook, getBooks } from '@/services/books.api'

export default function Books() {
  const navigate = useNavigate()

  // BOOKS DATA
  const [books, setBooks] = useState([]);

  // SEARCH
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm,setDebouncedSearchTerm] = useState("");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const booksPerPage = 4

  // MODAL
  const [openModal, setOpenModal] = useState(false)

  // FORM
  const [formData, setFormData] = useState({
    title: '',
  author: '',
  type: '',
  genre: '',
  language: '',
  description: '',
  })
// DEBOUNCE SEARCH
  useEffect(() => {

  const timer = setTimeout(() => {

    setDebouncedSearchTerm(searchTerm);

  }, 500);

  return () => clearTimeout(timer);

}, [searchTerm]);
  //Fetch the books data from the backend when the component mounts
  useEffect(() => {

  const fetchBooks = async () => {

    try {

      const data = await getBooks( currentPage,booksPerPage,debouncedSearchTerm);

setCurrentPage(data.page);
setTotalPages(data.totalPages);

      setBooks(data.books);

    } catch (error) {

      console.error(error);

    }
  };

  fetchBooks();

}, [currentPage, debouncedSearchTerm]);
  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // ADD BOOK
  const handleAddBook = async (e) => {

  e.preventDefault();

  try {

    await addBook(formData);

    // Refetch books
    const data = await getBooks(
      currentPage,
      booksPerPage,
      debouncedSearchTerm
    );

    setBooks(data.books);

    setTotalPages(data.totalPages);

    // Reset form
    setFormData({
      title: '',
      author: '',
      type: '',
      genre: '',
      language: '',
      description: '',
    });

    // Close modal
    setOpenModal(false);

  } catch (error) {

    console.error(error);

  }
};

 

 


  return (
    <AppLayout>
    <div className="h-screen relative overflow-hidden ">
      <div
  className="
    h-full
    w-full

    overflow-y-auto

    bg-linear-to-br
    from-zinc-950
    via-stone-900
    to-emerald-950

    text-white

    px-8
    py-6
  "
>

        {/* Ambient Glow */}

    <div
      className="
        absolute
        -top-30
        -left-30
        w-105
        h-105
        rounded-full
        bg-emerald-500/10
        blur-3xl
      "
    />
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1  className="
              text-4xl
              font-black

              tracking-tight

              text-transparent
              bg-clip-text

              bg-linear-to-r
              from-white
              via-zinc-100
              to-emerald-300
            ">
              Books Library
            </h1>

            <p className="text-zinc-400 mt-1">
              Manage your intellectual collection
            </p>
          </div>
 {/* SEARCH */}
        <div
          className="
            flex
            items-center
            gap-3

            px-4
            py-2
            mb-6

            rounded-2xl

            border
            border-white/10

            bg-white/5
            backdrop-blur-xl
          "
        >
          <Search size={18} className="text-zinc-400" />

            <Input
      type="text"
            placeholder="Search books..."
      value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1)
            }}
     
      className="
        pl-11

        bg-black/40
        border-zinc-700

        text-white
        placeholder:text-zinc-500

        focus-visible:ring-emerald-500/30
        focus-visible:border-emerald-500

        h-12
        rounded-xl

        transition-all
        duration-300
      "
    />
        </div>
          {/* ADD BUTTON */}
          
          <Button
  onClick={() => setOpenModal(true)}
  className="
    bg-white
    text-black
    cursor-pointer

    hover:bg-black
    hover:text-white

    transition-all
    duration-300
    font-semibold
    text-center
  "
>
  <Plus size={18} className="" />
  Add Book
</Button>
        </div>

       

        {/* TABLE */}
        <div
          className="
            overflow-hidden

            rounded-3xl

            border
            border-white/10

            bg-white/5
            backdrop-blur-xl
          "
        >
          <table className="w-full">
            <thead
              className="
                border-b
                border-white/10

                bg-white/5
              "
            >
              <tr>
                <th className="text-left px-6 py-1">
                  Book ID
                </th>

                <th className="text-left px-6 py-1">
                  Title
                </th>

                <th className="text-left px-6 py-1">
                  Author
                </th>

                <th className="text-left px-6 py-1">
                  Language
                </th>
              </tr>
            </thead>

            <tbody>
              {books.map((book) => (
                <tr
                  key={book.id}
                  className="
                    border-b
                    border-white/5

                    hover:bg-white/5
                    transition
                  "
                >
                  <td className="px-6 py-3 font-small">
                    {book.bookId}
                  </td>

                  <td className="px-6 py-3 text-zinc-300">
                    {book.title}
                  </td>

                  <td className="px-6 py-3 text-zinc-400">
                    {book.author}
                  </td>

                  <td className="px-6 py-3 text-emerald-400 font-semibold">
                    {book.language}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-zinc-400">
            Page {currentPage} of {totalPages || 1}
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.max(prev - 1, 1)
                )
              }
              disabled={currentPage === 1}
              className="
                p-2

                rounded-xl

                border
                border-white/10

                bg-white/5

                hover:bg-white/10

                disabled:opacity-40

                transition
              "
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, totalPages)
                )
              }
              disabled={currentPage === totalPages}
              className="
                p-2

                rounded-xl

                border
                border-white/10

                bg-white/5

                hover:bg-white/10

                disabled:opacity-40

                transition
              "
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* MODAL */}
       <AddBookModal
  openModal={openModal}
  setOpenModal={setOpenModal}
  formData={formData}
  handleChange={handleChange}
  handleAddBook={handleAddBook}
/>
      </div>
    </div>
    </AppLayout>
  )
}