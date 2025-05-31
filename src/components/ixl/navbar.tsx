import Image from "next/image"

const Navbar = () => {
	return (<>
		<nav className="w-full h-14 bg-[#52B700] flex items-center px-4 pb-1.5">
			<div className="max-w-[75.5rem] w-full mx-auto">
				<Image
					src="https://www.ixl.com/dv3/rvqfPCprUQ3ZnYIiJksJ14MRFMo/yui3/site-nav/assets/ixl-logo.svg"
					alt="IXL Logo"
					width={80}
					height={30}
					className="pt-0.5 ml-1"
				/>
			</div>
		</nav>
	</>)
}

export default Navbar
