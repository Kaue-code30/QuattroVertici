import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./src/Header";
const inter = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700"], subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Quattro Vertici",
  description: "Quattro Vertici.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
