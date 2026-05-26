import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Mail, Lock } from 'lucide-react'
import { login } from '@/services/auth.api'

export default function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {

    e.preventDefault()
try{
const data  = await login({ email, password })
  // Store token
    localStorage.setItem(
      "token",
      data.token
    );
    console.log("Login Success");
    navigate('/dashboard')
}catch(error){
  console.error('Login failed:', error)
  alert(error.message || 'Login failed. Please try again.')
}

  }

  return (

    <div
      className="
        h-full
        grid
        lg:grid-cols-[1.2fr_0.8fr]
        overflow-hidden
        relative
        bg-linear-to-br
        from-zinc-950
        via-stone-900
        to-emerald-950
      "
    >

      {/* LEFT PANEL */}

 <div
        className="
          hidden
          lg:flex

          flex-col
          justify-between

          relative
          overflow-hidden

          px-16
          py-5

          border-r
          border-white/10
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

        {/* TOP */}

        <div className="relative z-10">

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
            "
          >
            ✦ Bodhi
          </div>

        </div>

        {/* CENTER */}

        <div
          className="
            relative
            z-10
            max-w-xl
          "
        >

          <p
            className="
              text-emerald-400
              uppercase
              tracking-[0.2em]
              text-xs
              mb-2
            "
          >
            AI Powered Intellectual Library
          </p>

          <h1
            className="
              text-6xl
              font-black
              tracking-tight
              leading-[1.05]

              text-transparent
              bg-clip-text

              bg-linear-to-r
              from-white
              via-zinc-100
              to-emerald-300
            "
          >
            Your second
            <br />
            brain for books,
            <br />
            ideas & insights.
          </h1>

          <p
            className="
              mt-8

              text-lg
              leading-relaxed

              text-zinc-400
              max-w-lg
            "
          >
            Organize knowledge, connect ideas,
            preserve insights, and let AI build
            your personal intellectual universe.
          </p>

          {/* FEATURE PILLS */}

          <div
            className="
              mt-10

              flex
              flex-wrap
              gap-3
            "
          >

            {[
              
              'Book Intelligence',
              'Knowledge Graph',
              'Idea Connections',
            ].map((item) => (

              <div
                key={item}
                className="
                  px-4
                  py-2

                  rounded-full

                  bg-white/5
                  border
                  border-white/10

                  backdrop-blur-md

                  text-sm
                  text-zinc-300
                "
              >
                {item}
              </div>

            ))}

          </div>

        </div>

  

      </div>


      {/* RIGHT PANEL */}
       <div
        className="
          relative

          flex
          items-center
          justify-center

          px-8
          py-10

          overflow-hidden
        "
      >

        {/* RIGHT GLOWS */}

        <div
          className="
            absolute
            -top-24
            -right-24

            w-80
            h-80

            rounded-full
            bg-emerald-500/10

            blur-3xl
          "
        />
  
        
        <div
          className="
            absolute
            bottom-32
            right-24

            w-3
            h-3

            rounded-full
            bg-white/20
            blur-sm
          "
        />

        {/* Card */}
        <div
          className="
            relative
            z-10

            w-full
            max-w-md

            rounded-[32px]

          
            border-white/10

            bg-white/6

            p-10

            shadow-[0_8px_40px_rgba(0,0,0,0.45)]

            backdrop-blur-3xl

            overflow-hidden
          "
        >
          {/* GLASS REFLECTION */}

          <div
            className="
              absolute
              inset-0

              bg-linear-to-br
              from-white/10
              to-transparent

              pointer-events-none
            "
          />

          {/* Glass Reflection */}
          <div
            className="
              absolute
              inset-0
              
              bg-linear-to-br
              from-white/10
              to-transparent
              pointer-events-none
              
            "
          />
  <div className="relative z-10 text-center mb-3">

  <div
    className="
      inline-flex
      items-center
      gap-2

      px-4
      py-1.5
      mb-1

      rounded-full

      border
      border-emerald-400/20

      bg-emerald-500/10

      backdrop-blur-md

      text-emerald-300
      text-[11px]
      tracking-[0.2em]
      uppercase
      font-medium
    "
  >
    ✦ AI Knowledge System
  </div>

  <h2
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
    Welcome Back
  </h2>

  <p
    className="
      mt-1

      text-sm
      text-zinc-400

      max-w-xs
      mx-auto
    "
  >
    Your books, ideas, and knowledge —
    all in one intelligent space.
  </p>

</div>
          {/* Email */}

<div className="space-y-2">

  <Label className="
    text-sm
    font-medium
    text-zinc-300
  
  ">
    Email
  </Label>

  <div className="relative">

    <Mail
      className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        size-4
        text-zinc-500
      "
    />

    <Input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) =>
        setEmail(e.target.value)
      }
      required
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

</div>

{/* Password */}

<div className="space-y-2">

  <Label className="
    text-sm
    font-medium
    text-zinc-300
  ">
    Password
  </Label>

  <div className="relative">

    <Lock
      className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        size-4
        text-zinc-500
      "
    />

    <Input
      type="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) =>
        setPassword(e.target.value)
      }
      required
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

</div>

{/* Login Button */}
<div className="mt-6">
<Button
onClick={handleSubmit}
  variant="outline"
  size="lg"
  className="
    w-full
    
    bg-white
    text-black

    border-none

    rounded-xl
    font-semibold

    shadow-lg

    transition-all
    duration-300

    hover:bg-emerald-500
    hover:text-white
    hover:shadow-emerald-500/30
    hover:scale-[1.02]

    active:scale-[0.98]

    cursor-pointer
  "
  type="submit"
>
  Login
</Button>
</div>


        </div>

      </div>

    </div>
  )
}