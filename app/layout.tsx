import type { Metadata } from "next"; 
import { ToastContainer } from "react-toastify";
import "./card.scss";
import "./globals.scss";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import ScrollToTop from "@components/helper/scrollToTop";


export const metadata: Metadata = {
  title: "Suhail PM | Portfolio",
  description: "Portfolio of Suhail PM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
        {children}
        </main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
