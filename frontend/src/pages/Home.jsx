import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import {
  BookOpen,
  Quote,
  LibraryBig,
} from 'lucide-react'

export default function Home() {

  return (

    <div className="
      relative
      min-h-full
      overflow-hidden

      bg-linear-to-br
      from-zinc-950
      via-stone-950
      to-zinc-900

      text-white
    ">

      {/* Ambient Lights */}

      <div className="
        absolute
        -top-45
        -left-45

        w-105
        h-105

        bg-amber-500/5

        rounded-full
        blur-3xl
      "></div>

      <div className="
        absolute
        -bottom-45
        -right-45

        w-105
        h-105

        bg-emerald-500/5

        rounded-full
        blur-3xl
      "></div>

      {/* Hero */}

      <section className="
        relative
        z-10

        min-h-[90vh]

        flex
        items-center
        justify-center

        px-6
      ">

        <div className="
          max-w-4xl
          mx-auto

          text-center
        ">

          {/* Top Tag */}

          <div className="
            inline-flex
            items-center
            gap-2

            px-4
            py-2

            rounded-full

            bg-white/5
            border
            border-white/10

            text-zinc-400
            text-sm

            backdrop-blur-xl
          ">

            <LibraryBig className="size-4" />

            Personal Intellectual Archive

          </div>

          {/* Main Heading */}

          <h1 className="
            mt-10

            text-5xl
            md:text-7xl

            font-bold
            tracking-tight

            leading-tight
          ">

            A quiet place
            for your intellectual life.

          </h1>

          {/* Subtitle */}

          <p className="
            mt-8

            text-zinc-400

            text-lg
            md:text-xl

            leading-relaxed

            max-w-3xl
            mx-auto
          ">

            Preserve the books you read,
            the ideas that shaped you,
            the reflections you return to,
            and the knowledge you never want to lose.

          </p>

          {/* CTA */}

          <div className="
            mt-12

            flex
            flex-col
            sm:flex-row

            items-center
            justify-center

            gap-5
          ">

            <Button
              size="lg"
              className="
                bg-white
                text-black

                hover:bg-amber-100

                rounded-xl

                px-8
                h-12

                text-base
                font-semibold

                transition-all
                duration-300
              "
              asChild
            >

              <Link to="/library">
                Enter Library
              </Link>

            </Button>

            <Button
              variant="outline"
              size="lg"
              className="
                border-white/10
                bg-white/5

                hover:bg-white/10

                rounded-xl

                px-8
                h-12
              "
              asChild
            >

              <Link to="/login">
                Continue Reading
              </Link>

            </Button>

          </div>

        </div>

      </section>

      {/* Reflection Section */}

      <section className="
        relative
        z-10

        px-6
        py-24
      ">

        <div className="
          max-w-5xl
          mx-auto

          grid
          grid-cols-1
          md:grid-cols-2

          gap-10
        ">

          {/* Left */}

          <div className="
            bg-white/5

            border
            border-white/10

            rounded-3xl
            p-8

            backdrop-blur-xl
          ">

            <BookOpen className="
              size-8
              text-amber-300
              mb-6
            " />

            <h2 className="
              text-3xl
              font-bold
              leading-tight
            ">

              More than a collection of books.

            </h2>

            <p className="
              mt-6

              text-zinc-400
              leading-relaxed
            ">

              This archive is designed to preserve
              not just titles and authors,
              but the intellectual journey behind them —
              what influenced you,
              what changed your thinking,
              and what stayed with you.

            </p>

          </div>

          {/* Right */}

          <div className="
            bg-white/5

            border
            border-white/10

            rounded-3xl
            p-8

            backdrop-blur-xl
          ">

            <Quote className="
              size-8
              text-emerald-300
              mb-6
            " />

            <blockquote className="
              text-2xl
              leading-relaxed
              text-zinc-200
            ">

              “The real purpose of books
              is to quietly transform
              the way we see the world.”

            </blockquote>

            <p className="
              mt-6
              text-zinc-500
            ">

              Build a place where those transformations stay remembered.

            </p>

          </div>

        </div>

      </section>

      {/* Closing */}

      <section className="
        relative
        z-10

        px-6
        pb-32
      ">

        <div className="
          max-w-4xl
          mx-auto

          text-center
        ">

          <h2 className="
            text-4xl
            md:text-5xl

            font-bold
            leading-tight
          ">

            Your reading life deserves permanence.

          </h2>

          <p className="
            mt-8

            text-zinc-400
            text-lg

            leading-relaxed
          ">

            Books shape memory.
            Memory shapes identity.
            Preserve both with intention.

          </p>

        </div>

      </section>

    </div>
  )
}