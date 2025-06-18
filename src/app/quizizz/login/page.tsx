import { ArrowRightIcon } from "@/components/quizizz/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const page = () => {
  return (<>
    <div className="h-full flex items-center justify-center ">
      <div className="bg-white flex h-144 w-195 shadow-lg rounded-b-lg overflow-hidden">

        {/* Left - Login Panel */}
        <div className="w-120 h-full flex flex-col bg-[#f9f9f9]">
          <div className="h-full p-4 md:p-10">
            <h1 className="text-xl font-semibold text-[#1F1F1F]">Log in to Quizizz</h1>


            <section className="flex flex-col gap-3 mt-4">

              {/* Google Login */}
              <Button variant="quizizz" size="quizizz">

                <span className="flex items-center gap-4 text-[#1F1F1F] text-base font-semibold">
                  <Image
                    src="https://cf.quizizz.com/img/logos/google-logo-1.png"
                    alt="Google"
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                  Continue with Google
                </span>

                <ArrowRightIcon color="#b6b6b6" className="size-4 text-[#b6b6b6] hover:text-[#461A42]" />
              </Button>


              {/* Email Login */}
              <Button variant="quizizz" size="quizizz">

                <span className="flex items-center gap-4 text-[#1F1F1F] text-base font-semibold">
                  <Image
                    src="https://cf.quizizz.com/image/envelope-regular.png"
                    alt="Email"
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                  Continue with Email
                </span>

                <ArrowRightIcon color="#b6b6b6" className="size-4 text-[#b6b6b6] hover:text-[#461A42]" />
              </Button>


              {/* Microsoft Login */}
              <Button variant="quizizz" size="quizizz">

                <span className="flex items-center gap-4 text-[#1F1F1F] text-base font-semibold">
                  <Image
                    src="https://cf.quizizz.com/img/logos/ms-logo.png"
                    alt="Microsoft"
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                  Continue with Microsoft
                </span>

                <ArrowRightIcon color="#b6b6b6" className="size-4 text-[#b6b6b6] hover:text-[#461A42]" />
              </Button>

            </section>


            {/* Separator */}
            <div className="text-center text-sm text-[#6d6d6d] my-4">or continue with</div>


            {/* Other options */}
            <div className="flex items-center justify-center gap-4 mb-8">

              <div className="flex flex-col items-center gap-1">
                <Button size="icon" className="bg-[#3d6ad6] hover:bg-[#3d6ad6]">
                  <Image
                    src="https://cf.quizizz.com/image/Facebook.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                </Button>

                <span className="text-[#222] text-[10px]">Facebook</span>
              </div>


              <div className="flex flex-col items-center gap-1">
                <Button size="icon" className="bg-[#222] hover:bg-[#222]">
                  <Image
                    src="https://cf.quizizz.com/image/Apple.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                </Button>

                <span className="text-[#222] text-[10px]">Apple</span>
              </div>


              <div className="flex flex-col items-center gap-1">
                <Button size="icon" className="bg-[#8854c0] hover:bg-[#8854c0]">
                  <Image
                    src="https://cf.quizizz.com/image/shield-halved.png"
                    alt="Others"
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                </Button>

                <span className="text-[#222] text-[10px]">Others</span>
              </div>
            </div>


          </div>


          <div className="py-4 text-center text-sm text-[#6B7280]">
            <span className="text-[#222] text-sm">Don&apos;t have an account?</span> {' '}
            <button className="bg-[#ede6f6] rounded px-3 py-1 text-[#6B4EFF] text-xs font-semibold ml-2 cursor-pointer">Sign up</button>
          </div>

        </div>


        {/* Right - Image Panel */}
        <div className="w-75 relative bg-[#F3F4F6] h-full">
          <img
            src="https://cf.quizizz.com/image/classroom-enjoyment_optim.webp"
            alt="Classroom"
            className="w-full h-full object-cover"
          />


          <div className="absolute bottom-0 w-full h-28 bg-black/80 text-white p-4 text-sm 
          flex flex-col backdrop-blur-sm">
            <span className="pb-2 text-sm font-semibold text-white">Teachers love us &nbsp;😍 </span>
            <p className="text-sm font-semibold text-white/80">Join over 200 million educators and learners on Quizizz</p>
          </div>

        </div>

      </div>
    </div>
  </>);
}

export default page
