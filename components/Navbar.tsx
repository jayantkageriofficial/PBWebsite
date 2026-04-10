"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Lexend } from "next/font/google";
import logo from "@/public/logo.svg";
import { useAuthStore } from "@/lib/store/auth";
import { logout } from "@/app/admin/actions";

const lexend = Lexend({ subsets: ["latin"] });

export default function Navbar() {
  const pathname = usePathname();
  const { authenticated, email } = useAuthStore();
  const [isOpen, setIsOpen] = React.useState(false);
  const navRef = React.useRef<HTMLElement>(null);

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

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`relative bg-pbgray rounded-4xl mt-5 mx-5 text-white z-30 ${lexend.className}`}
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
            <div className="hidden lg:flex items-center gap-2">
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
              {authenticated && (
                <form action={logout}>
                  <button
                    type="submit"
                    title={email ?? undefined}
                    className="px-3 py-2 rounded-3xl text-sm hover:bg-red-500/20 hover:text-red-400 text-white/60 transition-all cursor-pointer"
                  >
                    Logout
                  </button>
                </form>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden bg-pbgreen text-black rounded-full w-10 h-10 flex items-center justify-center transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 21 14"
                >
                  <path d="M0 0.875C0 0.391751 0.391751 0 0.875 0H20.125C20.6082 0 21 0.391751 21 0.875C21 1.35825 20.6082 1.75 20.125 1.75H0.875C0.391751 1.75 0 1.35825 0 0.875ZM0 7C0 6.51675 0.391751 6.125 0.875 6.125H20.125C20.6082 6.125 21 6.51675 21 7C21 7.48325 20.6082 7.875 20.125 7.875H0.875C0.391751 7.875 0 7.48325 0 7ZM9.625 13.125C9.625 12.6418 10.0168 12.25 10.5 12.25H20.125C20.6082 12.25 21 12.6418 21 13.125C21 13.6082 20.6082 14 20.125 14H10.5C10.0168 14 9.625 13.6082 9.625 13.125Z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown — absolutely positioned so it overlays content below */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full mt-2 bg-pbgray rounded-2xl overflow-hidden transition-all duration-200 ${
            isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="flex flex-col px-6 py-4 gap-1">
            {pages.map((page) => (
              <Link
                key={page.name}
                href={page.href}
                target={page.ext ? "_blank" : "_self"}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-2xl text-sm hover:bg-pbgreen hover:text-black transition-all ${pathname === page.href ? "bg-pbgreen text-black" : ""}`}
              >
                {page.name}
              </Link>
            ))}
            {authenticated && (
              <form action={logout}>
                <button
                  type="submit"
                  title={email ?? undefined}
                  className="w-full text-left px-4 py-2.5 rounded-2xl text-sm hover:bg-red-500/20 hover:text-red-400 text-white/60 transition-all cursor-pointer"
                >
                  Logout
                </button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
