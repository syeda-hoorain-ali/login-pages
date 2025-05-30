"use client";

import { ClassLinkIcon, ExternalLinkIcon, WindowsIcon } from "@/components/classlink/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Open_Sans, Roboto } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


const roboto = Roboto({
  variable: '--roboto',
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"]
})


const openSans = Open_Sans({
  variable: '--open-sans',
  subsets: ['latin'],
})


const Page = () => {

  const [form, setForm] = useState({
    username: '',
    password: '',
    code: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const renderInput = (
    id: keyof typeof form,
    type: string,
    label: string
  ) => (
    <div className="relative">
      <input
        type={type}
        id={id}
        placeholder=" "
        value={form[id]}
        onChange={handleChange}
        className="peer w-full h-[3.75rem] p-4 pb-2.5 border-2 border-[#555] outline-classlink focus:outline-2 outline-offset-[6px] rounded-md text-[#555] text-sm font-medium"
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute left-[15px] text-[#333] font-semibold transition-all duration-200",
          openSans.className,
          form[id] ? 'top-2 text-[11px]' : 'top-4 text-base text-[#555]',
          "peer-focus:top-2 peer-focus:text-[11px]"
        )}
      >
        {label}
      </label>
    </div>
  )

  return (<>
    <div className="relative pt-14 min-h-dvh bg-[#E2F0FD]">

      <div className="-z-10 fixed top-10 left-0 min-h-dvh w-full bg-gradient-to-r from-[#D1E8FD] to-transparent rotate-[8.5deg] origin-top-left pointer-events-none"></div>

      <div className={`max-w-md w-full mx-auto z-10 ${roboto.className}`}>

        <div className="bg-[#7D85A0] text-white text-2xl font-semibold rounded-lg py-3 text-center">

          <h1 className={`font-semibold text-3xl text-shadow ${openSans.className}`}>
            Sign in to ClassLink
          </h1>
        </div>

        <div className="mt-6 space-y-5">

          {renderInput('username', 'text', 'Username')}
          {renderInput('password', 'password', 'Password')}
          {renderInput('code', 'text', 'Code (optional)')}


          <Button className="w-full h-[3.75rem] p-4 pb-2.5 bg-[#004ae6] hover:bg-[#005aff] shadow-[rgba(0,0,0,.25)_0_2px_4px]">
            <span className={`font-semibold text-xl text-shadow ${openSans.className}`}>Sign In</span>
          </Button>

          <Button className="relative w-full h-[3.75rem] p-4 pb-2.5 bg-[#357ae8] hover:bg-[#4285F4] shadow-[rgba(0,0,0,.25)_0_2px_4px]">
            <Image
              alt="Google icon" width={63} height={63}
              src="https://cdn.classlink.com/production/framework/assets/images/lp-login/btn_google.png"
              className="absolute inset-0"
            />
            <span className={`font-semibold text-xl text-shadow ${openSans.className}`}>Sign in with Google</span>
          </Button>


          <div className="text-center text-xl font-semibold text-[#333] mt-2">
            Or sign in using:
          </div>

          <div className="flex justify-center gap-6 mt-2">
            <span className="size-[4.5rem] border-2 border-[#5B6366] rounded-full bg-white flex-center">
              <WindowsIcon className="text-[#5B6366] w-8" />
            </span>

            <span className="size-[4.5rem] border-2 border-[#5B6366] rounded-full bg-white flex-center">
              <Image
                src="/abc.png"
                alt="icon"
                width={72}
                height={72}
                className="rounded-full"
              />
            </span>
          </div>
        </div>
      </div>





      <footer className="px-5 h-28 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <ClassLinkIcon className="w-14 h-10 text-[#0054ff]" />

          <span className="text-[#005aff] font-semibold">ClassLink</span>
        </div>



        <div className="flex-center gap-4 font-bold text-sm text-[#333]">
          <Link href="#" className="hover:underline hover:text-[#0054ff] flex-center gap-0.5">
            Help
            <ExternalLinkIcon className="size-3" />
          </Link>
          <span className="text-xl">•</span>
          <Link href="#" className="hover:underline hover:text-[#0054ff] flex-center gap-0.5">
            Browser Check
            <ExternalLinkIcon className="size-3" />
          </Link>
          <span className="text-xl">•</span>
          <Link href="#" className="hover:underline hover:text-[#0054ff] flex-center gap-0.5">
            Demo
            <ExternalLinkIcon className="size-3" />
          </Link>
          <span className="text-xl">•</span>
          <Link href="#" className="hover:underline hover:text-[#0054ff] flex-center gap-0.5">
            Privacy
            <ExternalLinkIcon className="size-3" />
          </Link>
        </div>

        <div className="app-links flex flex-col gap-2">
          <Link href="#">
            <Image
              alt=""
              src="https://cdn.classlink.com/production/launchpad/img/genericlogin/app-store-badge.png"
              width={130}
              height={48}
            />
          </Link>

          <Link href="#">
            <Image
              alt=""
              src="https://cdn.classlink.com/production/launchpad/img/login/google-play-store.png"
              width={130}
              height={48}
            />
          </Link>
        </div>


      </footer>
    </div>
  </>)
}

export default Page
