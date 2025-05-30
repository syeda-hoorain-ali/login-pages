import SignupPhoneForm from "@/components/tiktok/forms/signup-phone-form"

//  4rem 3.5rem 5rem 4rem5rem

const page = () => {
	return (<>
		<div className="h-[calc(100dvh-21.5rem)] w-full overflow-auto">

			<div className=" w-[22.7rem] mt-16 mx-auto flex items-center flex-col">

				<h2 className="mb-4 text-[#161823] font-bold text-[2.063rem]">Sign up</h2>
				

				<div className="w-full p-[10px_5px_2px_13px] flex flex-col gap-3">
					<SignupPhoneForm />
				</div>

			</div>
		</div>
	</>)
}

export default page
