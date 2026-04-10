"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Lexend } from "next/font/google";
import logo from "@/public/logo.svg";

const lexend = Lexend({ subsets: ["latin"] });

export default function Navbar() {
  const pathname = usePathname();
  //   const [isOpen, setIsOpen] = React.useState(false);
  const pages: { name: string; href: string; ext?: boolean }[] = [
    {
      name: "GitHub",
      href: "https://github.com/pointblank-club",
      ext: true,
    },
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Events",
      href: "/events",
    },
    {
      name: "Members",
      href: "/members",
    },
    {
      name: "Achievements",
      href: "/achievements",
    },
    {
      name: "Lore",
      href: "/lore",
    },
    {
      name: "Talks",
      href: "/talks",
    },
    {
      name: "Hustle Results",
      href: "/hustle",
    },
  ];
  return (
    <>
      <nav
        className={`bg-pbgray border-2 border-[#262626] rounded-4xl mt-5 mx-5 text-white overflow-hidden z-10 ${lexend.className}`}
      >
        <div className="mx-auto px-12">
          <div className="flex items-center justify-between h-16">
            <Link href={"/"} className="flex items-center">
              <Image
                src={logo}
                alt="Logo - Point Blank"
                className="scale-150"
              />
            </Link>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {pages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    target={page.ext ? "_blank" : "_self"}
                    className={`px-3 py-2 rounded-3xl text-sm hover:bg-pbgreen hover:text-black transition-all ${pathname === page.href ? "bg-pbgreen text-black" : ""}`}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
