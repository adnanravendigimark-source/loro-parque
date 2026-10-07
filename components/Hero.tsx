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
    <section className="relative w-full overflow-hidden bg-white pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Eyebrow, Headline, Copy, Action Buttons, Trust Badges */}
          <div className="z-10 lg:col-span-6 xl:col-span-5">
            
            {/* Eyebrow with golden horizontal rule */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-7 shrink-0 bg-[#D8C7A0]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#65736E]">
                {content.heroBadge || "TENERIFE'S TOP ATTRACTION"}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-3.5 font-display text-4xl sm:text-6xl lg:text-[68px] font-bold leading-[1.02] tracking-tight text-[#17483F]">
              <span className="block">{mainTitle}</span>
              {italicPart && (
                <span className="block font-display italic font-medium text-[#D8C7A0] -mt-1">
                  {italicPart}
                </span>
              )}
            </h1>

            {/* Subheading */}
            <p className="mt-4 max-w-lg text-sm sm:text-[16px] leading-relaxed text-[#65736E]">
              {subheading || "Meet incredible animals, stunning shows and unforgettable experiences at one of the world's most loved zoos — Loro Parque in Tenerife."}
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href={content.heroCtaPrimaryHref || "#tours"}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#17483F] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-[#17483F]/20 transition-all duration-300 hover:bg-[#0F322B] hover:shadow-lg hover:scale-[1.02]"
              >
                <TicketPillIcon className="h-4 w-4 text-white" />
                <span>{content.heroCtaPrimaryText || "Compare Tickets"}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a
                href={content.heroCtaSecondaryHref || "#what-to-expect"}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-[#DCE3DF] bg-white px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#17483F] shadow-sm transition-all duration-300 hover:border-[#17483F]/40 hover:bg-[#F7F8F4]"
              >
                <PlayCircleIcon className="h-5 w-5 text-[#17483F]" />
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
                    <div key={i} className={`flex items-start gap-2.5 ${i > 0 ? "sm:pl-4" : ""} ${i < 2 ? "sm:pr-4" : ""}`}>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center text-[#17483F] mt-0.5">
                        <IconComponent className="h-5 w-5 text-[#17483F]" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-[12px] sm:text-[12.5px] font-bold text-[#172321] leading-snug">
                          {badge.title}
                        </span>
                        <span className="block text-[11px] text-[#65736E] leading-tight mt-0.5">
                          {badge.subtitle}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual from Reference Design */}
          <div className="relative lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[680px] aspect-[1147/840]">
              <Image
                src="/images/hero-right-exact.png"
                alt="Loro Parque Tenerife Macaw Parrot and Waterfall"
                fill
                priority
                sizes="(min-width: 1280px) 680px, (min-width: 1024px) 55vw, 100vw"
                className="object-contain object-right"
              />
            </div>
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
