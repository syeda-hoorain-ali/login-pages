import Link from "next/link";
import { Button } from "@/components/ui/button";

const buttons = [
  { label: "Classlink", href: "/classlink" },
  { label: "Classlink Login", href: "/classlink/login" },
  { label: "IXL Sign In", href: "/ixl/signin" },
  { label: "Quizizz Login", href: "/quizziz/login" },
  { label: "TikTok Login", href: "/tiktok/login" },
  { label: "TikTok Signup", href: "/tiktok/signup" },
];

const page = () => {
  return (
    <main className="flex flex-col gap-4 items-center min-h-screen justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 transition-colors duration-500">

      <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to my app</h1>

      {buttons.map((btn) => (
        <Link key={btn.href} href={btn.href} className="w-full max-w-xs">
          <Button className="w-full px-8 py-3 text-base cursor-pointer">
            {btn.label}
          </Button>
        </Link>
      ))}
    </main>
  );
}

export default page
