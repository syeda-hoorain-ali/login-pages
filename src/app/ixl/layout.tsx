import type { Metadata } from "next";
import Navbar from "@/components/ixl/navbar";
import Footer from "@/components/ixl/footer";

export const metadata: Metadata = {
  title: {
    template: 'IXL - %s',
    default: 'IXL',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>
    <Navbar />
    {children}
    <Footer />
  </>);
}
