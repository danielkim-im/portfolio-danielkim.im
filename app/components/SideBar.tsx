"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

const links = [
  {
    name: "Home",
    href: "/",
    imgSrc: "https://r2.danielkim.im/common/home-outline.svg",
  },
  {
    name: "Projects",
    href: "/projects",
    imgSrc: "https://r2.danielkim.im/common/code-slash-outline.svg",
  },
  {
    name: "About Me",
    href: "/aboutme",
    imgSrc: "https://r2.danielkim.im/common/person-outline.svg",
  },
  {
    name: "Contact",
    href: "/contact",
    imgSrc: "https://r2.danielkim.im/common/mail-open-outline.svg",
  },
];

export default function SideBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md md:hidden"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <aside
        className={clsx(
          "fixed top-0 left-0 z-40 h-screen w-[240px] bg-white md:bg-transparent p-6 transition-transform duration-300",
          "md:translate-x-0 md:block",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mb-8 text-center">
          <Link href="/" onClick={() => setOpen(false)}>
            <img
              src="https://r2.danielkim.im/common/weblogo_transparent.png"
              alt="Logo"
              className="w-full h-auto object-contain bg-transparent"
            />
          </Link>
        </div>
        <nav className="flex flex-col gap-2">
          {links.map(({ name, href, imgSrc }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className={clsx(
                "px-2 py-2 text-sm text-black transition-all",
                "hover:bg-gray-100 hover:rounded-lg",
                (href === "/" ? pathname === "/" : pathname.startsWith(href)) &&
                  "bg-gray-100 font-medium rounded-lg"
              )}
            >
              <span className="flex items-center gap-2">
                <img
                  src={imgSrc}
                  alt={`${name} icon`}
                  className="w-5 h-5 object-contain"
                />
                {name}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Optional overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}
