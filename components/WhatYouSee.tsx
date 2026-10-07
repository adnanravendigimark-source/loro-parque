import { getHomepageContent } from "@/lib/homepage";

export default async function WhatYouSee() {
  const { sections } = await getHomepageContent();
  const s = sections.why;

  return (
    <section id="what-to-expect" className="py-20 sm:py-24 bg-[#F7F8F4] border-t border-[#DCE3DF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#D8C7A0]">
            {s.eyebrow}
          </p>
          <h2 className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[#17483F] leading-[1.15] tracking-tight">
            {s.heading}
          </h2>
          <div className="mt-3.5 mb-1 h-[2.5px] w-12 rounded-full bg-[#D8C7A0]" />
          <div
            className="rich-content mt-3 text-sm sm:text-base text-[#172321] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: s.intro }}
          />
        </div>

        {/* Sample tour timeline + what-you'll-notice list */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-3xl border border-[#DCE3DF] bg-white p-7 sm:p-8 shadow-sm">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#17483F]">{s.timelineHeading}</h3>
            <ol className="mt-6 space-y-6 border-l-2 border-[#D8C7A0]/40 pl-6">
              {s.timeline.map((row, i) => (
                <li key={row.time + i} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-[#D8C7A0] ring-4 ring-[#D8C7A0]/20" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#17483F]">{row.time}</span>
                  <p className="mt-1 text-sm sm:text-base font-semibold text-[#17483F]">{row.step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-[#DCE3DF] bg-white p-7 sm:p-8 shadow-sm">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#17483F]">{s.learnHeading}</h3>
            <ul className="mt-5 space-y-3">
              {s.learn.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-2xl border border-[#DCE3DF] bg-[#F7F8F4] p-4 text-sm sm:text-[14.5px] text-[#172321] shadow-sm"
                >
                  <span className="font-bold text-[#17483F] mt-0.5">◆</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            {s.note && <p className="mt-4 text-xs text-[#65736E]">{s.note}</p>}
          </div>
        </div>

        {/* Optional 3rd list */}
        {s.extraItems.length > 0 && (
          <div className="mt-10">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#17483F]">{s.extraHeading}</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {s.extraItems.map((point, i) => (
                <div
                  key={point.name + i}
                  className="rounded-2xl border border-[#DCE3DF] bg-white p-5 shadow-sm transition hover:border-[#17483F]"
                >
                  <p className="text-sm font-bold text-[#17483F]">{point.name}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#65736E]">{point.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA banner */}
        <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl bg-[#17483F] p-8 sm:p-10 text-white shadow-xl sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base sm:text-lg font-bold text-white max-w-xl">{s.ctaText}</p>
          <a
            href={s.ctaHref}
            className="shrink-0 rounded-full bg-[#D8C7A0] px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#172321] shadow-md transition hover:bg-[#C4B084] hover:scale-[1.02]"
          >
            {s.ctaButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
