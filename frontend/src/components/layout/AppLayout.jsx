import { Link } from 'react-router-dom'

import {
  LibraryBig,
  BookOpen,
  Plus,
  Brain,
  User,
} from 'lucide-react'

export default function AppLayout({ children }) {

  return (

    <div className="
      h-fill
      flex
    

      bg-linear-to-br
      from-zinc-950
      via-stone-950
      to-zinc-900

      text-white
    ">

      {/* Sidebar */}

      <aside className="
        w-55
        h-full

        fixed
        left-0
        top-10
        bottom-0

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

              hover:bg-white/10

              transition-all
            "
          >

            <Brain className="size-5" />

            Dashboard

          </Link>

<Link
            to="/users"
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

            <User className="size-5" />

            User Management

          </Link>


          <Link
            to="/books"
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

            Books

          </Link>
        </nav>

      </aside>

      {/* Main Content */}

      <main className="
        flex-1
       w-55
       h-fill
        
        lg:ml-55

       
      ">

        {children}

      </main>

    </div>

  )
}