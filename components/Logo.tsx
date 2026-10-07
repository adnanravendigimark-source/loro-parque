import Link from "next/link";
import Image from "next/image";
import { ParrotIcon } from "./icons";

export default function Logo({
  className = "",
  variant = "compact",
  theme = "light",
  src = "",
  logoImage = "",
  alt = "Loro Parque Tickets",
  logoAlt = "Loro Parque Tickets",
  line1 = "LORO PARQUE",
  line2 = "TICKETS",
}: {
  className?: string;
  variant?: "compact" | "stacked";
  theme?: "light" | "dark";
  src?: string;
  logoImage?: string;
  alt?: string;
  logoAlt?: string;
  line1?: string;
  line2?: string;
}) {
  const isDark = theme === "dark";
  const customSrc = (logoImage || src)?.trim();
  const resolvedAlt = logoAlt || alt;

  if (variant === "stacked") {
    return (
      <Link href="/" className={`inline-flex flex-col items-center gap-1.5 ${className}`}>
        <span className="relative block h-9 w-9 transition-transform duration-300 hover:scale-105">
          {customSrc ? (
            <Image src={customSrc} alt={resolvedAlt} fill sizes="80px" className="object-contain" priority />
          ) : (
            <ParrotIcon className="h-full w-full" />
          )}
        </span>
        <div className="text-center leading-tight">
          <span
            className={`block font-serif text-xl sm:text-2xl font-bold tracking-[0.16em] ${
              isDark ? "text-white" : "text-[#17483F]"
            }`}
          >
            {line1 || "LORO PARQUE"}
          </span>
          <span className="block font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.24em] uppercase text-[#D8C7A0] mt-0.5">
            {line2 || "TICKETS"}
          </span>
        </div>
      </Link>
    );
  }

  const image = (
    <span className="relative block h-8 sm:h-9 w-8 sm:w-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
      {customSrc ? (
        <Image src={customSrc} alt={resolvedAlt} fill priority sizes="48px" className="object-contain" />
      ) : (
        <ParrotIcon className="h-full w-full" />
      )}
    </span>
  );

  const wordmark = (
    <div className="flex min-w-0 flex-col justify-center">
      <span
        className={`block truncate font-display text-[17px] sm:text-[19px] font-bold tracking-[0.15em] leading-none ${
          isDark ? "text-white group-hover:text-[#D8C7A0]" : "text-[#17483F] group-hover:text-[#0F322B]"
        }`}
      >
        {line1 || "LORO PARQUE"}
      </span>
      <div className="flex items-center gap-2 mt-1.5">
        <span className={`h-[1px] w-5 sm:w-6 ${isDark ? "bg-[#D8C7A0]/80" : "bg-[#D8C7A0]/80"}`} />
        <span className="block truncate font-sans text-[9px] sm:text-[10px] font-bold tracking-[0.28em] uppercase text-[#D8C7A0] leading-none">
          {line2 || "TICKETS"}
        </span>
        <span className={`h-[1px] w-5 sm:w-6 ${isDark ? "bg-[#D8C7A0]/80" : "bg-[#D8C7A0]/80"}`} />
      </div>
    </div>
  );

  return (
    <Link href="/" className={`group inline-flex min-w-0 items-center gap-3 ${className}`}>
      {image}
      {wordmark}
    </Link>
  );
}
