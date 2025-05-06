"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <aside className="fixed top-0 left-0 h-screen w-[240px] z-50 p-6">
      <div className="mb-8 text-center">
        <Link href="/">
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
  );
}
