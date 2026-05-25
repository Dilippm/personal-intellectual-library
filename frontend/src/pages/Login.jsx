import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Mail, Lock } from 'lucide-react'

export default function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault()

    console.log('Login attempt:', {
      email,
      password,
    })

    navigate('/dashboard')
  }

  return (

    <div className="
      h-full
      flex
      items-center
      justify-center
      overflow-hidden
      relative
      bg-linear-to-br
      from-zinc-950
      via-stone-900
      to-emerald-950
    ">

      {/* Ambient Glow */}

      <div className="
        absolute
        -top-30
        -left-30
        w-[320px]
        h-80
        bg-emerald-500/10
        rounded-full
        blur-3xl
      "></div>

      <div className="
        absolute
        -bottom-30
        -right-30
        w-[320px]
        h-80
        bg-amber-500/10
        rounded-full
        blur-3xl
      "></div>

      {/* Card */}

      <div className="
        relative
        w-full
        max-w-md

        bg-white/5
        border
        border-white/10

        rounded-3xl
        p-10

        shadow-2xl
        shadow-black/50

        backdrop-blur-2xl

        overflow-hidden
      ">

        {/* Glass Reflection */}

        <div className="
          absolute
          inset-0
          bg-linear-to-br
          from-white/10
          to-transparent
          pointer-events-none
        "></div>

        {/* Heading */}

        <div className="text-center mb-8 relative z-10">

          <h1 className="
            text-4xl
            font-bold
            text-white
            tracking-tight
          ">
            Welcome Back
          </h1>

          <p className="
            text-zinc-400
            mt-4
            text-sm
            leading-relaxed
            max-w-sm
            mx-auto
          ">
            Access your personal knowledge sanctuary
            and continue building your intellectual archive.
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5 relative z-10"
        >

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

          {/* Button */}

          <Button
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
            "
            type="submit"
          >
            Login
          </Button>

        </form>

      </div>

    </div>
  )
}