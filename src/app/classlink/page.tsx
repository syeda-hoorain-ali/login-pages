import Image from "next/image"
import { Open_Sans } from "next/font/google"
import { Button } from "@/components/ui/button";
import { LocationIcon, QRCodeIcon, SearchIcon, SignInIcon } from "@/components/classlink/icons";
import Link from "next/link";
import Footer from "@/components/classlink/footer";


const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const page = () => {
  return (<>
    <div className={`${openSans.className} relative bg-[#008CDA] h-[calc(100dvh-4.3rem)] overflow-hidden flex`}>

      <div className="absolute -left-14 -top-14  w-[1756px] h-[1211px] overflow-visible">
        <Image
          alt="☁"
          src="https://cdn.classlink.com/production/launchpad/img/genericlogin/cloud-bg.svg"
          width={2000}   // 1756
          height={1500}  // 1211
        />
      </div>


      <div className="h-full w[25.33rem] w-[36rem] pt-9 bg-classlink-gradient flex flex-col items-center">

        <div className="flex flex-col items-center justify-center gap-3.5 z-10">
          <Image
            alt="Classlink logo"
            src="https://cdn.classlink.com/production/launchpad/img/genericlogin/ClassLink-Cloud-White.svg"
            width={120}
            height={90}
          />
          <span className="text-white font-bold text-3xl">ClassLink</span>
        </div>

      </div>


      <div className="h-full w-full flex items-center justify-center">

        <div className="bg-white z-10 p-10 w-[50rem] rounded shadow-[0_0_40px_rgba(0,70,108,0.5)]">

          <div className="flex justify-between">
            <h2 className="font-extrabold text-xl">Find your login page</h2>

            <Button size="lg" className="px-6 bg-classlink [&_svg]:size-3">
              <QRCodeIcon color="#fff" className="text-white stroke-white" />
              <span className="text-xs font-semibold">Use QuickCard</span>
            </Button>
          </div>


          <div className="search-bar relative my-6 w-full">
            <input className="w-full h-[3.125rem] py-px pl-11 pr-52 rounded border-2 border-[#ddd] focus:border-classlink focus-visible:outline-classlink" />

            <SearchIcon className="absolute top-4 left-3 pointer-events-none size-5" />

            <Button variant="ghost" className="px-2 absolute top-1.5 right-3 text-classlink hover:text-classlink">
              <LocationIcon />
              <span className="uppercase text-xs font-extrabold">Use my location</span>
            </Button>
          </div>


          <div className="flex gap-4">
            <p className="text-sm font-semibold text-[#333]">Can't find your login page?</p>

            <Link href="/classlink/login" className="text-classlink flex gap-1 items-center">
              <SignInIcon className="size-5" />
              <span className="text-xs font-extrabold uppercase">Login here</span>
            </Link>
          </div>

        </div>
      </div>

    </div>
    <Footer />
  </>)
}

export default page