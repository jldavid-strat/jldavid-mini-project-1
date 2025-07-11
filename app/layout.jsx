import { Manrope, Rubik  } from "next/font/google";
import Navbar from "./layout/Navbar";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const rubik = Rubik({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Jed David | Portfolio",
  description: "A portfolio for Jed Laurence David, an aspiring software developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} ${manrope.className} antialiased min-h-screen bg-custom-gradient`}
      >
        <Navbar/>
        {/* this h1 is shared on every children page */}
        {/* <h1 className="text-3xl">ROOT</h1> */}
        <main className="flex flex-auto flex-col px-8 md:px-12 py-6">{children}</main>
      </body>
    </html>
  );
}
