import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Components/Navbar/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutMe from "./(main)/AboutMe/page";
import Home from "./(main)/Home/page";
import Projcets from './(main)/Projects/page';
import Experience from "./(main)/Experience/page";
import Footer from "./Components/Footer/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Youssef Hashish",
  description: "Front End Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <Home/>
        <AboutMe/>
        <Projcets/>
        <Experience/>
        <Footer/>
      </body>
    </html>
  );
}
