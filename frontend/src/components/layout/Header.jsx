import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export default function Header() {

  return (

    <header className="
      sticky
      top-0
      z-50

      border-b
      border-white/10

      bg-black/30
      backdrop-blur-xl
    ">

      <div className="
        h-[10vh]
        max-w-7xl
        mx-auto

        flex
        items-center
        justify-between

        px-6
      ">

        {/* Logo */}

        <Link
          to="/"
          className="
            flex
            items-center
            gap-3

            text-2xl
            font-bold
            tracking-tight

            text-white
          "
        >

          <span className="text-3xl">
            📚
          </span>

          <span>
            Bodhi
          </span>

        </Link>

        {/* Navigation */}

        <nav className="
          flex
          items-center
          gap-6
        ">

          <Link
            to="/library"
            className="
              text-zinc-300
              hover:text-white
              transition
            "
          >
            Library
          </Link>

          <Link
            to="/dashboard"
            className="
              text-zinc-300
              hover:text-white
              transition
            "
          >
            Dashboard
          </Link>

          <Button
            className="
              bg-white
              text-black

              hover:bg-emerald-500
              hover:text-white

              transition-all
              duration-300
            "
            asChild
          >

            <Link to="/login">
              Login
            </Link>

          </Button>

        </nav>

      </div>

    </header>
  )
}