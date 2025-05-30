import { Metadata } from "next";
import Link from "next/link";

interface Props {
	children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Sign up",
	keywords: ["Sign up", "Sign up for TikTok"],
  description: "Sign up for an account or log back into TikTok. Create an account to discover real people and real videos that will make your day.",
};


const SignupLayout = ({ children }: Readonly<Props>) => {
	return (<>
		{children}

		<div className="flex items-center justify-center mb-16 py-4 px-[1.875rem]">
			<p className="w-[21rem] text-center text-xs text-[#16182380]">
				By continuing with an account located in {' '}
				<Link href="#" className="font-semibold text-[#161823bf] hover:text-[#161823] hover:no-underline duration-500">Pakistan</Link>
				, you agree to our {' '}
				<Link className="text-[#161823]" href="#">Terms of Service</Link>
				{' '} and acknowledge that you have read our {' '}
				<Link className="text-[#161823]" href="#">Privacy Policy</Link>
				.
			</p>
		</div>

		<div className="h-16 flex items-center justify-center text-[15px] border-t border-[rgba(22,24,35,0.12)]">
			<span>Already have an account?</span>
			<Link href="/tiktok/login" className="text-tiktok font-semibold pl-1">Login</Link>
		</div>
	</>)
}

export default SignupLayout
