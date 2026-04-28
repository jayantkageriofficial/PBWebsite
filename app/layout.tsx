import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import DotWaveAnimation from "@/components/ui/DotWaveAnimation";
import AuthInitializer from "@/components/AuthInitializer";
import { Lexend } from "next/font/google";
import Footer from "@/components/ui/Footer";
import { cookies } from "next/headers";
import verifyAuth from "@/lib/verifyAuth";
import ico from "@/public/favicon.ico";

const lexand = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Point Blank",
  description:
    "Point Blank is a student-run tech community. We are a group of tech enthusiasts who love to learn and grow together.",
  icons: {
    icon: ico.src,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session");
  const user = sessionCookie ? await verifyAuth(sessionCookie.value) : null;

  return (
    <html lang="en_IN">
      <body className={`bg-pbpages ${lexand.className}`}>
        <AuthInitializer
          authenticated={!!user}
          email={user?.email ?? null}
          name={user?.name ?? null}
          token={sessionCookie?.value ?? null}
        />
        <DotWaveAnimation />
        <div className="relative">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
