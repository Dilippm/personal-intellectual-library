import React, { useEffect, useState, useRef } from 'react'
import AppLayout from '@/components/layout/AppLayout'
import { Link } from 'react-router-dom'

export default function Dashboard() {

  // TODO: Fetch books from backend

  const [rows, setRows] = useState(() => Array.from({ length: 1 }, (_, i) => i + 1))
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const scrollParent = useRef(null)
  const sectionRefs = useRef([])

  const scrollSection = (index, direction) => {
    const container = sectionRefs.current[index]
    if (!container) return

    const offset = container.clientWidth * 0.7
    container.scrollBy({
      left: direction * offset,
      behavior: 'smooth',
    })
  }

  const loadMore = () => {
    if (loading) return
    setLoading(true)
    // simulate network
    setTimeout(() => {
      setRows((prev) => [...prev, ...Array.from({ length: 1 }, (_, i) => prev.length + i + 1)])
      setPage((p) => p + 1)
      setLoading(false)
    }, 600)
  }

  useEffect(() => {
    const mainEl = document.querySelector('main')
    scrollParent.current = mainEl

    const onScroll = () => {
      if (!mainEl || loading) return
      const threshold = 300
      if (mainEl.scrollHeight - mainEl.scrollTop - mainEl.clientHeight < threshold) {
        loadMore()
      }
    }

    mainEl?.addEventListener('scroll', onScroll)
    return () => mainEl?.removeEventListener('scroll', onScroll)
  }, [loading])

  return (
    <AppLayout>

  <div
    className="
      h-full

      relative
      overflow-hidden

      bg-linear-to-br
      from-zinc-950
      via-stone-900
      to-emerald-950

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

    <div
      className="
        absolute
        -bottom-30
        -right-30

        w-75
        h-75

        rounded-full
        bg-amber-500/5

        blur-3xl
      "
    />

    {/* CONTENT */}

    <div className="relative z-10">

      {/* TOP SECTION */}

      <div
        className="
          flex
          flex-col
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-8

          mb-4
        "
      >

        {/* LEFT */}

        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2

              px-4
              py-1.5

              rounded-full

              border
              border-white/10

              bg-white/5

              backdrop-blur-xl

              text-xs
              uppercase
              tracking-[0.25em]

              text-zinc-300

              mb-5
            "
          >
            ✦ Personal Library
          </div>

          <h1
            className="
              text-4xl
              font-black

              tracking-tight

              text-transparent
              bg-clip-text

              bg-linear-to-r
              from-white
              via-zinc-100
              to-emerald-300
            "
          >
            Your Knowledge
            <br />
            Collection
          </h1>

          <p
            className="
              mt-5

              text-zinc-400
              text-base

              max-w-2xl
              leading-relaxed
            "
          >
            Explore books, revisit ideas,
            and continue building your intellectual archive.
          </p>

        </div>

        {/* ACTIONS */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          {/* Search */}

          <input
            type="text"
            placeholder="Search books..."
            className="
              h-12
              w-72

              rounded-2xl

              border
              border-white/10

              bg-white/5

              px-5

              text-white
              placeholder:text-zinc-500

              backdrop-blur-xl

              outline-none

              focus:border-emerald-500/40
            "
          />

          {/* Add Book */}

          <Link
            to="/add-book"
            className="
              h-12

              inline-flex
              items-center
              justify-center

              px-6

              rounded-2xl

              bg-white
              text-black

              font-semibold

              shadow-lg

              transition-all
              duration-300

              hover:bg-emerald-500
              hover:text-white
              hover:shadow-emerald-500/30
              hover:scale-[1.02]
            "
          >
            + Add Book
          </Link>

        </div>

      </div>

      {/* FILTERS */}

      <div
        className="
          flex
          flex-wrap
          gap-3

          mb-7
        "
      >

        {[
          'All',
          'Reading',
          'Completed',
          'Wishlist',
          'Philosophy',
          'Psychology',
          'AI',
        ].map((filter) => (

          <button
            key={filter}
            className="
              px-5
              py-2.5

              rounded-full

              bg-white/5

              border
              border-white/10

              text-sm
              text-zinc-300

              backdrop-blur-xl

              transition-all
              duration-300

              hover:bg-white/10
              hover:border-emerald-400/30

              cursor-pointer
            "
          >
            {filter}
          </button>

        ))}

      </div>

{/* BOOK SECTIONS */}

<div className="space-y-12">

  {[
    {
      title: 'Recent Reads',
      subtitle: 'Books you keep returning to.',
      color: 'from-emerald-900 to-zinc-900',
    },
    {
      title: 'Malayalam Picks',
      subtitle: 'Books from Malayalam literature.',
      color: 'from-amber-900 to-zinc-900',
    },
    {
      title: 'English Classics',
      subtitle: 'Timeless books and modern classics.',
      color: 'from-blue-950 to-zinc-900',
    },
    {
      title: 'Psychology',
      subtitle: 'Human behavior and thinking.',
      color: 'from-purple-950 to-zinc-900',
    },
    {
      title: 'AI & Technology',
      subtitle: 'Systems, intelligence, and the future.',
      color: 'from-emerald-950 to-zinc-900',
    },
  ].map((section, index) => (

    <section key={section.title}>

      {/* Section Header */}

      <div
        className="
          flex
          flex-wrap
          items-end
          justify-between

          gap-3
          mb-5
        "
      >

        <div>

          <h2
            className="
              text-2xl
              font-bold

              tracking-tight
              text-white
            "
          >
            {section.title}
          </h2>

          <p
            className="
              mt-1
              text-zinc-500
            "
          >
            {section.subtitle}
          </p>

        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollSection(index, -1)}
            className="
              h-10
              w-10
              rounded-full
              bg-white/5
              border
              border-white/10
              text-zinc-300
              transition-colors
              hover:bg-white/10
              hover:text-white
            "
            aria-label={`Scroll ${section.title} left`}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollSection(index, 1)}
            className="
              h-10
              w-10
              rounded-full
              bg-white/5
              border
              border-white/10
              text-zinc-300
              transition-colors
              hover:bg-white/10
              hover:text-white
            "
            aria-label={`Scroll ${section.title} right`}
          >
            →
          </button>
        </div>

      </div>

      {/* Horizontal Row */}

      <div
        ref={(el) => (sectionRefs.current[index] = el)}
        className="
          flex
          gap-5

          overflow-x-auto
          overflow-y-hidden

          pb-4

          no-scrollbar

          snap-x
          snap-mandatory
        "
      >

        {[1,2,3,4,5,6,7].map((book) => (

          <div
            key={book}
            className="
              shrink-0

              w-40

              group
              cursor-pointer

              snap-start
            "
          >

            {/* Cover */}

            <div
              className={`
                aspect-2/3

                rounded-3xl

                bg-linear-to-br
                ${section.color}

                border
                border-white/10

                overflow-hidden

                transition-all
                duration-300

                group-hover:scale-[1.06]
                group-hover:-translate-y-1
                group-hover:border-emerald-400/30
                group-hover:z-20
              `}
            />

            {/* Info */}

            <div className="mt-4">

              <h3
                className="
                  text-white
                  font-semibold

                  truncate
                "
              >
                Atomic Habits
              </h3>

              <p
                className="
                  text-sm
                  text-zinc-500

                  mt-1
                "
              >
                James Clear
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>

  ))}

</div>
 
   

    </div>

  </div>

</AppLayout>

   

  )
}