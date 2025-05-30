import type { Metadata } from "next";
import Navbar from "@/components/tiktok/navbar";
import Footer from "@/components/tiktok/footer";

export const metadata: Metadata = {
	title: {
		template: '%s | TikTok',
		default: 'TikTok',
	},
	description: "Tiktok",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (<main className="tiktok">
		<Navbar />
		{children}
		<Footer />
	</main>);
}
