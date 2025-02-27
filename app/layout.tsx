import type { Metadata } from "next"; 
import { ToastContainer } from "react-toastify";
import "./card.scss";
import "./globals.scss";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
