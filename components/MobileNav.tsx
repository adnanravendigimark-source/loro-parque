"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NavLink } from "@/lib/homepage";

export default function MobileNav({
  navLinks,
  ctaText,
  ctaHref,
}: {
  navLinks: NavLink[];
  ctaText: string;
  ctaHref: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DCE3DF] bg-white text-[#17483F] transition hover:bg-[#F7F8F4]"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.8}>
          {open ? (
            <path d="M5.5 5.5 18.5 18.5M18.5 5.5 5.5 18.5" strokeLinecap="round" />
          ) : (
            <path d="M4 6.5h16M4 12h16M4 17.5h16" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 top-20 z-40 bg-black/40 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-x-0 top-20 z-40 max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-[#DCE3DF] bg-[#F7F8F4] shadow-2xl">
            <nav className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[#DCE3DF]/60 py-3.5 text-base font-medium text-[#17483F] transition hover:text-[#D8C7A0] last:border-b-0"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 pb-6 pt-2">
              <Link
                href={ctaHref}
                onClick={() => setOpen(false)}
                className="block rounded-full bg-[#17483F] py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white shadow-md transition hover:bg-[#0F322B]"
              >
                {ctaText} →
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
