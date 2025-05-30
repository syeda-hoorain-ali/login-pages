import type { Metadata } from "next";
import Footer from "@/components/classlink/footer";


export const metadata: Metadata = {
  title: {
    template: '%s | ClassLink',
    default: 'Login',
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>
    {children}
    {/* <Footer /> */}
  </>);
}
