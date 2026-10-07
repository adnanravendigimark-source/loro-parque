import Image from "next/image";
import { getHomepageContent } from "@/lib/homepage";
import { PlayCircleIcon, TicketPillIcon, ShieldCheckIcon, BoltIcon, HeadsetIcon } from "./icons";

export default async function Hero() {
  const content = await getHomepageContent();
  const rawBadges = content.sections?.heroTrust?.badges;
  const badges = rawBadges && rawBadges.length > 0 ? rawBadges : [
    { icon: "ShieldCheckIcon", title: "Trusted Booking Partner", subtitle: "Secure checkout" },
    { icon: "BoltIcon", title: "Instant Confirmation", subtitle: "Mobile voucher" },
    { icon: "HeadsetIcon", title: "Customer Support", subtitle: "Help if plans change" }
  ];

  const subheading = (content.heroSubheading || "").replace(/<[^>]+>/g, "").trim();

  // Split title if it contains "Loro Parque Tickets"
  const fullHeading = content.heroHeading || "Loro Parque Tickets";
  let mainTitle = "Loro Parque";
  let italicPart = "Tickets";

  if (fullHeading.toLowerCase().includes("loro parque") && fullHeading.toLowerCase().includes("tickets")) {
    mainTitle = "Loro Parque";
    italicPart = "Tickets";
  } else {
    mainTitle = fullHeading;
    italicPart = "";
  }

  return (
    <section className="relative w-full overflow-hidden bg-white pt-0 pb-14 sm:pb-20 lg:pb-24">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12">

          {/* Left Column: Eyebrow, Headline, Copy, Action Buttons, Trust Badges — Aligned with Header Logo */}
          <div className="z-10 lg:col-span-6 xl:col-span-5 pt-8 sm:pt-12 lg:pt-14 pb-4">

            {/* Eyebrow with golden horizontal rule */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-6 sm:w-8 shrink-0 bg-[#D8C7A0]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#65736E]">
                {content.heroBadge || "TENERIFE'S MOST LOVED ATTRACTION"}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-3.5 font-display text-4xl sm:text-6xl lg:text-[64px] xl:text-[70px] font-bold leading-[1.02] tracking-tight text-[#17483F]">
              <span className="block">{mainTitle}</span>
              {italicPart && (
                <span className="block font-display italic font-medium text-[#D8C7A0] -mt-1 sm:-mt-2">
                  {italicPart}
                </span>
              )}
            </h1>

            {/* Subheading */}
            <p className="mt-4 max-w-lg text-sm sm:text-[15.5px] leading-relaxed text-[#65736E]">
              {subheading || "Meet incredible animals, stunning shows and unforgettable experiences at one of the world's most loved zoos — Loro Parque in Tenerife."}
            </p>

            {/* Action Buttons: Compare Tickets (solid dark) + What to Expect (white outlined) */}
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={content.heroCtaPrimaryHref || "#tours"}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#17483F] px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-md shadow-[#17483F]/20 transition-all duration-300 hover:bg-[#0F322B] hover:shadow-lg hover:scale-[1.02]"
              >
                <TicketPillIcon className="h-4 w-4 text-white" />
                <span>{content.heroCtaPrimaryText || "Compare Tickets"}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>

              <a
                href={content.heroCtaSecondaryHref || "#what-to-expect"}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#DCE3DF] bg-white px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#17483F] shadow-sm transition-all duration-300 hover:border-[#17483F] hover:bg-[#F7F8F4] hover:scale-[1.02]"
              >
                <PlayCircleIcon className="h-4 w-4 text-[#17483F]" />
                <span>{content.heroCtaSecondaryText || "What to Expect"}</span>
              </a>
            </div>

            {/* Trust Badges with Dividers */}
            <div className="mt-10 pt-6 border-t border-[#DCE3DF]">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[#DCE3DF]">
                {badges.map((badge, i) => {
                  let IconComponent = ShieldCheckIcon;
                  const key = (badge.icon || "").toLowerCase();
                  if (key.includes("bolt") || key.includes("clock") || key.includes("instant")) {
                    IconComponent = BoltIcon;
                  } else if (key.includes("headset") || key.includes("support") || key.includes("phone")) {
                    IconComponent = HeadsetIcon;
                  } else {
                    IconComponent = ShieldCheckIcon;
                  }

                  return (
                    <div key={i} className={`flex items-start gap-2.5 ${i > 0 ? "sm:pl-3.5" : ""} ${i < 2 ? "sm:pr-3.5" : ""}`}>
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#17483F] mt-0.5">
                        <IconComponent className="h-4 w-4 text-[#17483F]" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-[11.5px] sm:text-[12px] font-bold text-[#172321] leading-snug">
                          {badge.title}
                        </span>
                        <span className="block text-[10.5px] text-[#65736E] leading-tight mt-0.5">
                          {badge.subtitle}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column (Mobile placeholder & spacing) */}
          <div className="relative lg:hidden w-full aspect-[1400/980] select-none">
            <Image
              src="/images/hero-composite-fresh.png"
              alt="Loro Parque Tenerife Blue-and-Gold Macaw Parrot and Waterfall"
              fill
              priority
              sizes="100vw"
              className="object-cover object-right-top"
            />
          </div>

        </div>
      </div>

      {/* Desktop Right Visual — Starts Flush From Right Screen Edge */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52vw] xl:w-[54vw] 2xl:w-[56vw] select-none pointer-events-none">
        <div className="relative w-full h-full pointer-events-auto">

          {/* Golden accent contour rings behind the organic mask */}
          <div className="pointer-events-none absolute -left-10 -top-10 w-56 h-56 rounded-full border-2 border-[#D8C7A0]/30" />
          <div className="pointer-events-none absolute -left-16 top-24 w-80 h-80 rounded-full border border-[#D8C7A0]/20" />

          {/* Main Composite Image — Object Cover, Right-Top Aligned, 100% Flush to Right Edge */}
          <Image
            src="/images/hero-composite-fresh.png"
            alt="Loro Parque Tenerife Blue-and-Gold Macaw Parrot and Waterfall"
            fill
            priority
            sizes="56vw"
            className="object-cover object-right-top"
          />

          {/* Handwriting Script Slogan in Top-Right */}
          <div className="absolute top-4 right-6 sm:top-6 sm:right-10 z-20 text-right pointer-events-none">
            <p className="font-script text-xl sm:text-2xl lg:text-[28px] font-bold text-[#17483F] drop-shadow-sm leading-tight">
              Amazing animals,
            </p>
            <p className="font-script text-lg sm:text-xl lg:text-[24px] font-bold text-[#17483F] drop-shadow-sm -mt-1">
              endless memories
            </p>
            <svg
              className="mt-0.5 ml-auto w-20 sm:w-28 h-2 text-[#8FA79A]"
              viewBox="0 0 100 8"
              fill="none"
            >
              <path d="M2 6C30 1 70 1 98 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

        </div>
      </div>

      {/* Elegant Organic Bottom Wave Divider in Pale Sage #E8EEE9 */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-8 sm:h-12 text-[#E8EEE9]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" opacity="0.45" />
          <path d="M0,20 C200,80 450,10 650,60 C850,110 1050,30 1200,70 L1200,120 L0,120 Z" opacity="0.8" />
        </svg>
      </div>

    </section>
  );
}
