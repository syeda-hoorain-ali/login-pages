import { HelpIcon, TiktokLogo } from "./icons"
import Link from "next/link"

const Navbar = () => {
  return (<>
    <header className="w-full pl-4 pr-5">
      <div className="h-14 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2">
          <TiktokLogo className="" />
        </Link>
        {/* <nav className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:underline">
            Log in
          </Link>
          <Link href="/signup" className="text-sm font-medium text-red-500 hover:underline">
            Sign up
          </Link>
        </nav> */}
        
        <Link
          href="/feedback"
          className="flex font-semibold text-sm"
          style={{ color: "oklch(0.2123 0.022 276.37)" }}
        >
          <HelpIcon className="size-5 text-[rgba(22,24,35,0.5)]" />
          <span className="ml-2">Feedback and help</span>
        </Link>

      </div>
    </header>
  </>)
}

export default Navbar
