import Logo from "./Logo";
import MobileNav from "./MobileNav";
import HeaderNav from "./HeaderNav";
import StickyHeader from "./StickyHeader";
import { SearchIcon, UserIcon, TicketPillIcon } from "./icons";
import { getHomepageContent } from "@/lib/homepage";
import Link from "next/link";

export default async function Header() {
  const content = await getHomepageContent();
  const header = content.header;

  const defaultNavLinks = [
    { label: "Home", href: "/" },
    { label: "Tickets", href: "/#tours" },
    { label: "What to Expect", href: "/#what-to-expect" },
    { label: "Highlights", href: "/#must-see-ruins" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const navLinks = header.navLinks && header.navLinks.length > 0 ? header.navLinks : defaultNavLinks;
  const ctaText = header.ctaText || header.bookNowText || "BOOK NOW";
  const rawCtaHref = header.ctaHref || "#tours";
  const ctaHref = rawCtaHref.startsWith("#") ? `/${rawCtaHref}` : rawCtaHref;

  return (
    <StickyHeader>
      <div className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8 bg-white border-b border-[#DCE3DF]/60">
        <Logo
          logoImage={header.logoImage}
          logoAlt={header.logoAlt || "Loro Parque Tickets"}
          line1={header.logoLine1 || "LORO PARQUE"}
          line2={header.logoLine2 || "TICKETS"}
        />

        <HeaderNav links={navLinks} />

        <div className="flex items-center gap-4">
          {/* Search Icon button */}
          <Link
            href="/blog"
            aria-label="Search guides"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full text-[#172321] hover:text-[#17483F] hover:bg-[#F7F8F4] transition-colors"
          >
            <SearchIcon className="h-5 w-5" />
          </Link>

          {/* User Icon button */}
          <Link
            href="/contact"
            aria-label="Help & Contact"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full text-[#172321] hover:text-[#17483F] hover:bg-[#F7F8F4] transition-colors"
          >
            <UserIcon className="h-5 w-5" />
          </Link>

          {/* Book Now Pill Button */}
          <a
            href={ctaHref}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#17483F] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-[#0F322B] hover:shadow-md hover:scale-[1.02]"
          >
            <TicketPillIcon className="h-4 w-4" />
            <span>{ctaText}</span>
            <span className="text-sm leading-none">→</span>
          </a>

          <MobileNav navLinks={navLinks} ctaText={ctaText} ctaHref={ctaHref} />
        </div>
      </div>
    </StickyHeader>
  );
}
