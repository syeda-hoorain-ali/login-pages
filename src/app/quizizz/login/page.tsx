import Navbar from "@/components/quizizz/navbar";
import Image from "next/image";

const page = () => {
	return (<>

		<Navbar />
		<main className="min-h-screen bg-[#401F43] flex items-center justify-center font-sans">
			<div className="bg-white flex w-[900px] rounded-md -mt-7 overflow-hidden shadow-lg">
				{/* Left - Login Panel */}
				<div className="w-[55%] px-10 py-12">
					<h1 className="text-xl font-semibold text-[#1F1F1F] mb-8">Log in to Quizizz</h1>

					{/* Google Login */}
					<button className="flex items-center justify-between w-full border border-[#E5E7EB] rounded-md px-4 py-3 mb-3 hover:bg-gray-50 transition">
						<span className="flex items-center gap-3 text-[#1F1F1F] text-sm font-medium">
							<img src="https://img.icons8.com/color/20/google-logo.png" alt="Google" />
							Continue with Google
						</span>
						<span className="text-[#6B7280]">→</span>
					</button>

					{/* Email Login */}
					<button className="flex items-center justify-between w-full border border-[#E5E7EB] rounded-md px-4 py-3 mb-3 hover:bg-gray-50 transition">
						<span className="flex items-center gap-3 text-[#1F1F1F] text-sm font-medium">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91A2.25 2.25 0 012.25 6.993V6.75" />
							</svg>
							Continue with Email
						</span>
						<span className="text-[#6B7280]">→</span>
					</button>

					{/* Microsoft Login */}
					<button className="flex items-center justify-between w-full border border-[#E5E7EB] rounded-md px-4 py-3 mb-6 hover:bg-gray-50 transition">
						<span className="flex items-center gap-3 text-[#1F1F1F] text-sm font-medium">
							<img src="https://img.icons8.com/color/20/microsoft.png" alt="Microsoft" />
							Continue with Microsoft
						</span>
						<span className="text-[#6B7280]">→</span>
					</button>

					{/* Separator */}
					<div className="text-center text-xs text-[#6B7280] mb-5">or continue with</div>

					{/* Other options */}
					<div className="flex items-center justify-center gap-6 mb-8">
						<button className="bg-[#3b5998] text-white w-10 h-10 p-1 rounded flex items-center justify-center">
							<img src="https://cf.quizizz.com/image/Facebook.png"  width={72} height={72}/>
						</button>
						<button className="bg-black text-white w-10 h-10 p-1 rounded flex items-center justify-center">
							<img src="https://cf.quizizz.com/image/Apple.png"  width={72} height={72}/>
						</button>
						<button className="bg-purple-600 text-white w-10 h-10 p-2 rounded flex items-center justify-center">
							<Image src="https://cf.quizizz.com/image/shield-halved.png" alt="" width={60} height={0}/>
						</button>
					</div>

					<div className="text-center text-sm text-[#6B7280]">
						Don’t have an account?{' '}
						<a href="#" className="text-[#6B4EFF] font-medium hover:underline">Sign up</a>
					</div>
				</div>

				{/* Right - Image Panel */}
				<div className="w-[45%] relative bg-[#F3F4F6] h-[550px]">
					<img
						src="https://cf.quizizz.com/image/classroom-enjoyment_optim.webp"
						alt="Classroom"
						className="w-full h-full object-cover"
					/>
					<div className="absolute bottom-0 w-full bg-black/70 text-white p-4 text-xs">
						<strong>Teachers love us 😍</strong>
						<p>Join over 200 million educators and learners on Quizizz</p>
					</div>
				</div>
			</div>
		</main>
	</>);
}

export default page
