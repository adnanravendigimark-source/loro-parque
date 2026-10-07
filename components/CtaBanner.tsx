import { getHomepageContent } from "@/lib/homepage";
import { ParrotIcon } from "./icons";

export default async function CtaBanner() {
  const { sections } = await getHomepageContent();
  const s = sections.ctaBanner;

  return (
    <section className="py-14 sm:py-16 bg-[#F7F8F4]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#17483F] px-6 py-8 sm:px-10 sm:py-10 shadow-xl shadow-[#17483F]/10 border border-white/10">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#D8C7A0] border border-white/15">
                <ParrotIcon className="h-7 w-7" />
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {s.heading}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-white/80">{s.subtext}</p>
              </div>
            </div>

            {/* Right Action Button */}
            <a
              href={s.buttonHref}
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#D8C7A0] px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#172321] shadow-md transition-all hover:bg-[#C4B084] hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>{s.buttonText}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
