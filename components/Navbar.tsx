"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.svg";

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
      <nav className="text-textgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image src={logo} alt="Logo" className="" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {pages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    target={page.ext ? "_blank" : "_self"}
                    className={`px-3 py-2 rounded-3xl text-sm font-medium hover:bg-pbgreen hover:text-black transition-all ${pathname === page.href ? "bg-pbgreen text-black" : ""}`}
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
