import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (<>
    <nav className="sticky top-0 bg-[#461A42] z-10 w-full shadow-lg">
      <div className="max-w-screen-xl p-4 mx-auto flex items-center justify-between">

        <Link href="#">
          <Image
            src="https://cf.quizizz.com/img/quizizz_logos/white-brandmark-600x164.png"
            alt="Quizizz Logo"
            width={96}
            height={26}
            priority
          />
        </Link>

        <div>
          <Button variant="ghost" className="text-white text-xs font-semibold">Join a game</Button>
          <Button variant="secondary" className="text-[#090909] text-xs font-semibold">Sign up</Button>
        </div>

      </div>
    </nav>
  </>)
}

export default Navbar
