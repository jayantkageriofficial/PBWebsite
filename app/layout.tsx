import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Lexend } from "next/font/google";
import Footer from "@/components/Footer";

const lexand = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Point Blank",
  description:
    "Point Blank is a student-run tech community. We are a group of tech enthusiasts who love to learn and grow together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en_IN">
      <body className={`bg-black ${lexand.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
