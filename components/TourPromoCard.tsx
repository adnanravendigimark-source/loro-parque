import SafeImage from "./SafeImage";
import StarRating from "./StarRating";
import type { Tour } from "@/lib/data";

export default function TourPromoCard({
  tour,
  recommendedLabel = "Recommended for you",
  bookNowText = "Book Now",
}: {
  tour: Tour;
  recommendedLabel?: string;
  bookNowText?: string;
}) {
  return (
    <div className="my-8 flex flex-col gap-5 overflow-hidden rounded-2xl border border-[#DCE3DF] bg-[#F7F8F4] p-5 sm:flex-row sm:items-center">
      <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-40 bg-[#17483F]">
        <SafeImage src={tour.image} alt={tour.imageAlt} fill sizes="200px" className="object-cover" />
      </div>
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#17483F]">{recommendedLabel}</p>
        <p className="mt-1 font-display text-base font-semibold text-[#172321]">{tour.title}</p>
        <div className="mt-1 flex items-center gap-2 text-xs text-[#65736E]">
          <StarRating rating={tour.rating} showValue reviewCount={tour.reviews} size="xs" />
          <span>·</span>
          <span>from {tour.price > 0 ? `€${tour.price}` : "Check price"}/person</span>
        </div>
      </div>
      <a
        href={tour.href}
        target="_blank"
        rel="noopener nofollow sponsored"
        className="shrink-0 rounded-lg bg-[#17483F] px-5 py-2.5 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#0F322B] hover:scale-[1.02]"
      >
        {bookNowText}
      </a>
    </div>
  );
}
