"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {

  const year = new Date().getFullYear()
  const links = [
    { label: "Company", href: "#" },
    { label: "Membership", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Help center", href: "#" },
    { label: "Tell us what you think", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact us", href: "#" },
    { label: "Terms of service", href: "#" },
  ]


  return (<>
    <footer className="w-full bg-[#efefef] py-10">
      <div className="max-w-5xl mx-auto px-4 text-sm text-centerspace-y-4">

        <div className="flex flex-wrap justify-center">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#0782b0] hover:underline px-2 border-r border-[#aca899]"
            >
              {link.label}
            </Link>
          ))}
          <a href="#" className="text-[#0782b0] hover:underline px-2 font-semibold">Privacy policy</a>
        </div>

        <div className="mt-4 flex justify-center items-center gap-2">
          <Image
            src="https://www.ixl.com/dv3/rvqfPCprUQ3ZnYIiJksJ14MRFMo/yui3/site-nav/assets/footer-logo.svg"
            alt="IXL Learning Logo"
            width={104}
            height={12}
            className="mr-1"
          />
          <span className="text-[#bababa] font-bold text-[10px]">
            &copy; {year} IXL Learning. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  </>)
}

export default Footer
