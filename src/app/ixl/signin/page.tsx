import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"
import localFont from "next/font/local"
import { Roboto_Slab } from "next/font/google"


const robotoSlab = Roboto_Slab({
  fallback: ['sans-serif']
})

const verdana = localFont({
  src: '../../../../public/verdana.ttf',
  fallback: ['sans-serif']
})

const page = () => {

  const features = [
    {
      title: "Comprehensive K-12 Curriculum",
      desc: "More than 17,000 adaptive skills designed to support and challenge every learner",
      color: "text-sky-500",
      img: "https://www.ixl.com/dv3/fGtRZc8ApSlhIGG0_TceL_cDhzY/yui3/signin-page/assets/curriculum.svg",
    },
    {
      title: "Real-Time Diagnostic",
      desc: "Up-to-date, accurate assessment of students' knowledge levels in math and language arts",
      color: "text-green-600",
      img: "https://www.ixl.com/dv3/fGtRZc8ApSlhIGG0_TceL_cDhzY/yui3/signin-page/assets/diagnostic.svg",
    },
    {
      title: "Personalized Guidance",
      desc: "Targeted skill recommendations help address learning gaps and accelerate growth",
      color: "text-purple-500",
      img: "https://www.ixl.com/dv3/fGtRZc8ApSlhIGG0_TceL_cDhzY/yui3/signin-page/assets/guidance.svg",
    },
    {
      title: "Actionable Analytics",
      desc: "Easy-to-use reports provide real-time insight into student progress",
      color: "text-orange-500",
      img: "https://www.ixl.com/dv3/fGtRZc8ApSlhIGG0_TceL_cDhzY/yui3/signin-page/assets/analytics.svg",
    },
  ];





  return (<>
    <section className={`relative w-full h-[35rem] pt-10 flex justify-center mb-10 ixl-login-background ${verdana.className}`}>


      <div className="w-[30rem]">
        <Card className={`px-9 font-sans ${verdana.className}`}>
          <CardHeader className="pt-4 text-center">
            <h1 className={`text-4xl font-light text-[#00aeef] ${robotoSlab.className}`}>Sign in</h1>
          </CardHeader>

          <CardContent className="pb-10 space-y-4">

            <div>
              <div className="flex justify-between mb-1.5">
                <Label className="text-[#545454] text-[15px] font-normal">Username</Label>
                <Link href="#" className="text-[#85a15c] px-1.5 py-px text-[15px] hover:underline">Forgot username?</Link>
              </div>

              <Input className="py-1.5 h-10 rounded border-[#ccc]" />
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <Label className="text-[#545454] text-[15px] font-normal">Password</Label>
                <Link href="#" className="text-[#85a15c] px-1.5 py-px text-[15px] hover:underline">Forgot password?</Link>
              </div>

              <Input className="py-1.5 h-10 rounded border-[#ccc]" />
            </div>

            <div className="flex justify-between items-center pt-1">
              <Button className="py-3 px-[3.375rem] h-[2.625rem] bg-[#52b700] hover:bg-[#69c130] text-[15px]">Sign in</Button>

              <div className="flex items-center">
                <Checkbox id="remember" className="size-[1.125rem] rounded-[2px] border-[#ccc] data-[state=checked]:bg-[#7ebb00] shadow-none" />
                <Label htmlFor="remember" className="text-[#85a15c] px-1.5 pb-px text-[15px] font-normal">Remember</Label>
              </div>
            </div>

          </CardContent>
        </Card>


        <div className="w-full mt-3 py-[13px] text-[17px] bg-[#ebf9ff] text-center rounded-lg shadow-lg">
          <span className="text-[#545454]">Have a LaunchCard?</span> {' '}

          <Link href='#' className="text-[#00aeef]">
            Sign in here! {' '}

            <Image
              src="https://www.ixl.com/dv3/fGtRZc8ApSlhIGG0_TceL_cDhzY/yui3/signin-page/assets/qr-code.svg"
              alt="QR code"
              width={29}
              height={29}
              className="inline-block ml-3 align-middle"
            />
          </Link>

        </div>
      </div>

    </section>



    <section className="my-10 flex flex-col items-center justify-center px-4 py-10 text-center space-y-12">

      <h1 className={`text-5xl font-light text-[#00aeef] ${robotoSlab.className}`}>Not a member yet?</h1>
      <p className={`text-2xl font-light text-[#545454] mt-4 ${robotoSlab.className}`}>Experience personalized learning with IXL!</p>

      <div>
        {features.map((feature) => (
          <article key={feature.title} className="flex mt-11 w-[40rem] items-center text-left">
            <Image src={feature.img} alt={feature.title} width={130} height={130} />
            <div className="content font-medium py-4 pl-9">
              <h2 className={`text-2xl ${feature.color}`}>{feature.title}</h2>
              <p className="text-[#545454] text-lg mt-2">{feature.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <p className={`text-[1.625rem] font-light text-[#545454] mt-14 ${robotoSlab.className}`}>
        Plus, celebrate success with fun awards, and much more!
      </p>


      <Button className="py-3 px-[4.75rem] mt-12 h-[2.625rem] bg-[#52b700] hover:bg-[#69c130] text-base">
        Join IXL today
      </Button>

    </section>
  </>)
}

export default page