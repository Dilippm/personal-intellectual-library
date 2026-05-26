import { X } from 'lucide-react'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export default function AddBookModal({
  openModal,
  setOpenModal,
  formData,
  handleChange,
  handleAddBook,
}) {
  if (!openModal) return null

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/60
       
        backdrop-blur-md
      "
    >
  <div
  className="
  relative

  w-full
  max-w-3xl

  overflow-hidden

  rounded-3xl

  border
  border-white/10

  bg-white/5

  backdrop-blur-2xl

  shadow-2xl
  shadow-black/40

  p-3

  mx-6
  my-10
"
>
    {/* GRADIENT BACKGROUND */}
<div
  className="
    absolute
    inset-0

    bg-linear-to-br
    from-emerald-500/10
    via-transparent
    to-cyan-500/10

    pointer-events-none
  "
/>
<div className="relative z-10">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">
              Add New Book
            </h2>

            <p className="text-zinc-400 text-sm mt-1">
              Add a book to your library
            </p>
          </div>


          <Button onClick={() => setOpenModal(false)}
            className="
              p-2
              rounded-xl
              bg-white/5
              hover:bg-white/10
              transition
             cursor-pointer
            ">
             <X size={20} />
          </Button>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleAddBook}
          className="space-y-6"
        >
 <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

  {/* BOOK TITLE */}
  <div>
    <Label className="block mb-2 text-sm text-zinc-300">
      Book Title
    </Label>

    <Input
      type="text"
      name="title"
      value={formData.title}
      onChange={handleChange}
      required
      className="
        w-full
        px-4
        py-4
        rounded-2xl
        border
        border-white/10
        bg-white/5
      "
    />
  </div>

  {/* AUTHOR */}
  <div>
    <Label className="block mb-2 text-sm text-zinc-300">
      Author
    </Label>

    <Input
      type="text"
      name="author"
      value={formData.author}
      onChange={handleChange}
      required
      className="
        w-full
        px-4
        py-4
        rounded-2xl
        border
        border-white/10
        bg-white/5
      "
    />
  </div>

  {/* GENRE */}
  <div>
    <Label className="block mb-2 text-sm text-zinc-300">
      Genre
    </Label>

    <Input
      type="text"
      name="genre"
      value={formData.genre}
      onChange={handleChange}
      required
      className="
        w-full
        px-4
        py-4
        rounded-2xl
        border
        border-white/10
        bg-white/5
      "
    />
  </div>

  {/* TYPE */}
  <div>
    <Label className="block mb-2 text-sm text-zinc-300">
      Type
    </Label>

    <Input
      type="text"
      name="type"
      value={formData.type}
      onChange={handleChange}
      className="
        w-full
        px-4
        py-4
        rounded-2xl
        border
        border-white/10
        bg-white/5
      "
    />
  </div>

  {/* LANGUAGE */}
  <div>
    <Label className="block mb-2 text-sm text-zinc-300">
      Language
    </Label>

    <Input
      type="text"
      name="language"
      value={formData.language}
      onChange={handleChange}
      className="
        w-full
        px-4
        py-4
        rounded-2xl
        border
        border-white/10
        bg-white/5
      "
    />
  </div>



  {/* DESCRIPTION */}
  <div className="md:col-span-3">
    <Label className="block mb-2 text-sm text-zinc-300">
      Description
    </Label>

    <Textarea
  name="description"
  value={formData.description}
  onChange={handleChange}
  rows={4}
  placeholder="Write a short description..."
  className="
    w-full

    rounded-2xl

    border
    border-white/10

    bg-white/5

    text-white
    placeholder:text-zinc-500

    resize-none

    focus-visible:ring-emerald-500/30
    focus-visible:border-emerald-500

    transition-all
    duration-300
  "
/>
  </div>

</div>


          <div className="flex justify-end gap-3 pt-3">
            <Button
              type="button"
              onClick={() => setOpenModal(false)}
              className="
                px-5
                py-5
                rounded-2xl
                bg-white/5
                hover:bg-white/10
                text-zinc-300
                 hover:text-white
   
    hover:scale-[1.02]

    active:scale-[0.98]
                cursor-pointer
              "
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="
                px-5
                py-5
                rounded-2xl
                bg-emerald-500
               
    hover:bg-emerald-500
    hover:text-white
    hover:shadow-emerald-500/30
    hover:scale-[1.02]

    active:scale-[0.98]
                text-black
                font-semibold
                cursor-pointer
              "
            >
              Save 
            </Button>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}