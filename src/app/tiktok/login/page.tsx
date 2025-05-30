import { AppleLogo, FacebookLogo, GoogleLogo, QRCodeIcon, UserIcon } from "@/components/tiktok/icons"
import { Button } from "@/components/ui/button"
//  4rem 3.5rem 5rem 4rem5rem

const page = () => {
	return (<>
		<div className="h-[calc(100dvh-21.5rem)] w-full overflow-auto">

			<div className=" w-[22.7rem] mt-16 mx-auto flex items-center flex-col">

				<h2 className="mb-4 text-[#161823] font-bold text-[2.063rem]">Log in to TikTok</h2>
				<p className="mb-5 pl-4 pr-1 text-center text-[15px] text-[rgba(22,24,35,0.34)]">
					Manage your account, check notifications, comment on videos, and more.
				</p>

				<div className="w-full p-[10px_5px_2px_13px] flex flex-col gap-3">
					<Button size="tiktok" variant="outline" className="w-full">
						<QRCodeIcon className="absolute left-3 " />
						Use QR code
					</Button>

					<Button size="tiktok" variant="outline" className="w-full">
						<UserIcon className="absolute left-3 " />
						Use phone / email / username
					</Button>

					<Button size="tiktok" variant="outline" className="w-full">
						<FacebookLogo className="absolute left-3 " />
						Continue with Facebook
					</Button>

					<Button size="tiktok" variant="outline" className="w-full">
						<GoogleLogo className="absolute left-3 " />
						Continue with Google
					</Button>

					<Button size="tiktok" variant="outline" className="w-full">
						<AppleLogo className="absolute left-3 " />
						Continue with Apple
					</Button>
				</div>



			</div>



		</div>
	</>)
}

export default page
