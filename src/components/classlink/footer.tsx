import Image from "next/image"
import Link from "next/link";

const Footer = () => {

  const year = new Date().getFullYear()
  const navLinks = [
    "PRIVACY POLICY",
    "Help",
    "Browser Check",
    "REMOTE LOGIN",
    "DIRECT LOGIN",
  ];

  return (<>
    <footer className="py-4 px-6 bg-white flex items-center justify-between">

      <div className="flex">
        <div className="logo z-10 -mt-14 flex flex-col items-center">
          <Image
            alt=""
            width={90}
            height={66}
            className="mb-1"
            src="https://cdn.classlink.com/production/launchpad/img/genericlogin/ClassLink-Cloud-White-OL_DS.svg"
          />
          <span className="text-[#747474] text-[11px] font-bold">&copy; {year}</span>
        </div>

        <div className="nav-buttons ml-6 flex gap-9 items-center">
          {navLinks.map((text, i) => (
            <Link href="#" key={i} className="uppercase text-classlink font-extrabold text-[12.1px]">{text}</Link>
          ))}
        </div>
      </div>


      <div className="app-links flex gap-2.5">
        <Link href="#">
          <Image
            alt=""
            src="https://cdn.classlink.com/production/launchpad/img/genericlogin/app-store-badge.png"
            width={122}
            height={36}
          />
        </Link>

        <Link href="#">
          <Image
            alt=""
            src="https://cdn.classlink.com/production/launchpad/img/genericlogin/google-play-badge.png"
            width={122}
            height={36}
          />
        </Link>
      </div>

    </footer>
  </>)
}

export default Footer