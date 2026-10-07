"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/lib/homepage";

export default function HeaderNav({ links }: { links?: NavLink[] }) {
  const pathname = usePathname();

  // Links come from Admin → Homepage → Navbar; the default set is only a
  // safety net if none are saved.
  const defaultLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const navLinks = links && links.length > 0 ? links : defaultLinks;

  return (
    <nav className="hidden items-center gap-8 lg:gap-10 md:flex">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname === link.href || pathname.startsWith(link.href);

        return (
          <Link
            key={link.href + link.label}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={`relative py-1 text-[13.5px] lg:text-[14px] font-medium transition-colors ${
              isActive
                ? "text-[#17483F] font-bold after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-[#D8C7A0]"
                : "text-[#172321] hover:text-[#17483F]"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
