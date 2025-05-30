import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

const Navbar = () => {
  return (<>
    <nav className="bg-[#461A42] z-10 w-full shadow-xl shadow-black border-black border-b">
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
          <Button variant="ghost" className="text-white">Join a game</Button>
          <Button variant="secondary">Sign up</Button>
        </div>

      </div>
    </nav>
  </>)
}

export default Navbar
