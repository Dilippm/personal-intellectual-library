import { Link } from 'react-router-dom'

import {
  LibraryBig,
  BookOpen,
  Plus,
  Quote,
  Brain,
  Clock3,
} from 'lucide-react'

export default function Dashboard() {

  const recentBooks = [
    {
      title: 'Atomic Habits',
      author: 'James Clear',
    },

    {
      title: 'Deep Work',
      author: 'Cal Newport',
    },

    {
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
    },
  ]

  const themes = [
    'Philosophy',
    'Systems Thinking',
    'Psychology',
    'AI',
    'Stoicism',
    'Behavior',
  ]

  return (

     <div className="
    h-full
    flex
    overflow-hidden

    bg-linear-to-br
    from-zinc-950
    via-stone-950
    to-zinc-900

    text-white
  ">


      {/* Sidebar */}

    <aside className="
      w-65
      h-full

      shrink-0

      border-r
      border-white/10

      bg-white/5
      backdrop-blur-xl

      p-6

      hidden
      lg:flex
      flex-col
    ">

      {/* Logo */}

      <div className="
        flex
        items-center
        gap-3

        mb-12
      ">

        <div className="
          w-12
          h-12

          rounded-2xl

          bg-amber-500/10

          flex
          items-center
          justify-center
        ">

          <LibraryBig className="
            text-amber-300
          " />

        </div>

        <div>

          <h2 className="
            font-bold
            text-lg
          ">
            Intellectual
          </h2>

          <p className="
            text-zinc-500
            text-sm
          ">
            Personal Archive
          </p>

        </div>

      </div>

        {/* Navigation */}

        <nav className="
        flex
        flex-col
        gap-3
      ">

        <Link
          to="/dashboard"
          className="
            flex
            items-center
            gap-3

            px-4
            py-3

            rounded-xl

            bg-white/10

            hover:bg-white/15

            transition-all
          "
        >

          <Brain className="size-5" />

          Dashboard

        </Link>

        <Link
          to="/library"
          className="
            flex
            items-center
            gap-3

            px-4
            py-3

            rounded-xl

            hover:bg-white/10

            transition-all
          "
        >

          <BookOpen className="size-5" />

          Library

        </Link>

        <Link
          to="/add-book"
          className="
            flex
            items-center
            gap-3

            px-4
            py-3

            rounded-xl

            hover:bg-white/10

            transition-all
          "
        >

          <Plus className="size-5" />

          Add Book

        </Link>

      </nav>

    </aside>

     

      {/* Main Content */}

       <main className="
      flex-1
      h-full

      overflow-y-auto

      p-8
    ">

        {/* Welcome */}

        <section className="mb-12">

          <p className="
            text-zinc-500
            text-sm
          ">
            Your reading sanctuary
          </p>

          <h1 className="
            mt-3

            text-5xl
            font-bold

            tracking-tight
          ">

            Good evening, Dilip.

          </h1>

          <p className="
            mt-5

            text-zinc-400
            text-lg

            max-w-3xl
            leading-relaxed
          ">

            Your intellectual archive continues to grow.
            Preserve what shapes your thinking
            and revisit the ideas that matter most.

          </p>

        </section>

        {/* Stats */}

        <section className="
          grid
          grid-cols-1
          md:grid-cols-3

          gap-6

          mb-12
        ">

          <div className="
            bg-white/5

            border
            border-white/10

            rounded-3xl
            p-6

            backdrop-blur-xl
          ">

            <p className="
              text-zinc-500
              text-sm
            ">
              Books Collected
            </p>

            <h2 className="
              mt-4

              text-4xl
              font-bold
            ">
              147
            </h2>

          </div>

          <div className="
            bg-white/5

            border
            border-white/10

            rounded-3xl
            p-6

            backdrop-blur-xl
          ">

            <p className="
              text-zinc-500
              text-sm
            ">
              Quotes Saved
            </p>

            <h2 className="
              mt-4

              text-4xl
              font-bold
            ">
              382
            </h2>

          </div>

          <div className="
            bg-white/5

            border
            border-white/10

            rounded-3xl
            p-6

            backdrop-blur-xl
          ">

            <p className="
              text-zinc-500
              text-sm
            ">
              Genres Explored
            </p>

            <h2 className="
              mt-4

              text-4xl
              font-bold
            ">
              24
            </h2>

          </div>

        </section>

        {/* Main Grid */}

        <section className="
          grid
          grid-cols-1
          xl:grid-cols-3

          gap-6
        ">

          {/* Recent Books */}

          <div className="
            xl:col-span-2

            bg-white/5

            border
            border-white/10

            rounded-3xl
            p-8

            backdrop-blur-xl
          ">

            <div className="
              flex
              items-center
              justify-between

              mb-8
            ">

              <div>

                <h2 className="
                  text-2xl
                  font-bold
                ">
                  Recently Added
                </h2>

                <p className="
                  text-zinc-500
                  mt-2
                ">
                  Books shaping your current thinking.
                </p>

              </div>

              <Clock3 className="
                text-zinc-500
              " />

            </div>

            <div className="
              space-y-4
            ">

              {recentBooks.map((book, index) => (

                <div
                  key={index}
                  className="
                    flex
                    items-center
                    justify-between

                    p-5

                    rounded-2xl

                    bg-black/20

                    border
                    border-white/5
                  "
                >

                  <div>

                    <h3 className="
                      font-semibold
                      text-lg
                    ">
                      {book.title}
                    </h3>

                    <p className="
                      text-zinc-500
                      mt-1
                    ">
                      {book.author}
                    </p>

                  </div>

                  <BookOpen className="
                    text-amber-300
                  " />

                </div>

              ))}

            </div>

          </div>

          {/* Right Sidebar Widgets */}

          <div className="
            space-y-6
          ">

            {/* Reflection Card */}

            <div className="
              bg-white/5

              border
              border-white/10

              rounded-3xl
              p-6

              backdrop-blur-xl
            ">

              <Quote className="
                text-emerald-300
                mb-5
              " />

              <blockquote className="
                text-xl
                leading-relaxed
              ">

                “The quieter you become,
                the more you are able to hear.”

              </blockquote>

              <p className="
                mt-5
                text-zinc-500
                text-sm
              ">
                Reflection of the day
              </p>

            </div>

            {/* Themes */}

            <div className="
              bg-white/5

              border
              border-white/10

              rounded-3xl
              p-6

              backdrop-blur-xl
            ">

              <div className="
                flex
                items-center
                gap-3

                mb-6
              ">

                <Brain className="
                  text-amber-300
                " />

                <h2 className="
                  text-xl
                  font-bold
                ">
                  Knowledge Themes
                </h2>

              </div>

              <div className="
                flex
                flex-wrap
                gap-3
              ">

                {themes.map((theme, index) => (

                  <div
                    key={index}
                    className="
                      px-4
                      py-2

                      rounded-full

                      bg-black/20

                      border
                      border-white/10

                      text-sm
                      text-zinc-300
                    "
                  >

                    {theme}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  )
}