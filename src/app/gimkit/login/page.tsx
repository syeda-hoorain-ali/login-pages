import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

const page = () => {
  return (<>
    <div
      className="w-full h-dvh bg-pink-300 flex items-center justify-center"
      style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://www.gimkit.com/client/img/signup/funky-lines.png") 0px 0px repeat'
      }}
    >

      <Card className="max-w-[30rem] w-full">
        <CardHeader className="justify-center">
          <Image
            src="https://www.gimkit.com/client/img/svgLogo.svg"
            alt="GIMKIT"
            width={168}
            height={42}
            className="mt-3"
          />
        </CardHeader>

        <hr />

        <CardContent className="justify-center text-center">

          <Button variant="outline">
            <Image
              src="https://www.gimkit.com/client/img/signup/google.svg"
              alt=""
              width={18}
              height={18}
              className="mr-3"
            />
            <span>Continue with Google</span>
          </Button>

          <div className="relative w-full my-6 h-px bg-[rgba(5,5,5,0.06)] text-center">
            <span
              className="absolute -translate-1/2 px-4 font-medium text-[rgba(0,0,0,0.88)] bg-background z-10">
              or
            </span>
          </div>

          <div>
            <Label className="text-lg font-bold">Continue with email...</Label>
            <Input className="hover:border-[#4096ff] transition-all duration-300" />

            <Button
              disabled
              variant="secondary"
              className="w-full mt-1.5 border-[#d9d9d9] border-1 py-1 hover:border-[#4096ff]"
            >
              Continue
            </Button>
          </div>

        </CardContent>
      </Card>

    </div>
  </>)
}

export default page
