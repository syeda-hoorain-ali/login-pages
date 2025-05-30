import Link from "next/link";

interface Props {
	children: React.ReactNode;
}

const LoginLayout = ({ children }: Readonly<Props>) => {
	return (<>
		{children}

		<div className="flex items-center justify-center mb-16 py-4 px-[1.875rem]">
			<p className="w-[21rem] text-center text-xs text-[#16182380]">
				By continuing with an account located in {' '}
				<Link href="#" className="font-semibold text-[#161823bf] hover:text-[#161823] hover:no-underline duration-500">Pakistan</Link>
				, you agree to our {' '}
				<Link className="text-[#161823]" target="_blank" href="#">Terms of Service</Link>
				{' '} and acknowledge that you have read our {' '}
				<Link className="text-[#161823]" target="_blank" href="#">Privacy Policy</Link>
				.
			</p>
		</div>

		<div className="h-16 flex items-center justify-center text-[15px] border-t border-[rgba(22,24,35,0.12)]">
			<span>Don&apos;t have an account?</span> {' '}
			<Link href="/tiktok/signup" className="text-tiktok font-semibold">Sign up</Link>
		</div>
	</>)
}

export default LoginLayout
