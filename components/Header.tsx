import Logo from "./Logo";
import MobileNav from "./MobileNav";
import HeaderNav from "./HeaderNav";
import StickyHeader from "./StickyHeader";
import { TicketPillIcon } from "./icons";
import { getHomepageContent } from "@/lib/homepage";

export default async function Header() {
  const content = await getHomepageContent();
  const header = content.header;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];
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
