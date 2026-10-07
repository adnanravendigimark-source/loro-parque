import { getTours } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";

export default async function PriceComparison() {
  const [tours, { sections }] = await Promise.all([getTours(), getHomepageContent()]);
  const s = sections.price;
  if (tours.length === 0) return null;

  return (
    <section id="prices" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24">
      <div className="max-w-2xl">
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#D8C7A0]">
          {s.eyebrow}
        </span>
        <h2 className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[#17483F] leading-[1.15] tracking-tight">
          {s.heading}
        </h2>
        <div
          className="rich-content mt-3 text-sm sm:text-base text-[#172321] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: s.subheading }}
        />
      </div>

      <div className="mt-10 overflow-x-auto rounded-3xl border border-[#DCE3DF] bg-white shadow-sm">
        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#17483F] text-white">
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.itemLabel}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.priceLabel}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.column1Label}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.column2Label}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.bestForLabel}</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DCE3DF]">
            {tours.map((tour, i) => (
              <tr
                key={tour.id}
                className={`transition hover:bg-[#F7F8F4] ${
                  tour.featured ? "bg-[#F7F8F4] font-medium" : i % 2 ? "bg-[#F7F8F4]/50" : ""
                }`}
              >
                <td className="px-6 py-4 font-display text-base font-bold text-[#17483F]">{tour.title}</td>
                <td className="px-6 py-4 font-display text-lg font-bold text-[#17483F]">
                  {tour.price > 0 ? `€${tour.price}` : "Check price"} <span className="font-sans font-normal text-xs text-[#65736E]">/ person</span>
                </td>
                <td className="px-6 py-4 text-[#172321]">{tour.priceTableColumn1 || tour.duration}</td>
                <td className="px-6 py-4 text-[#172321]">{tour.priceTableFeature || "No"}</td>
                <td className="px-6 py-4 text-[#172321]">{tour.bestFor}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={tour.href}
                    target="_blank"
                    rel="noopener nofollow sponsored"
                    className="inline-flex rounded-full bg-[#17483F] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#0F322B] hover:scale-[1.02]"
                  >
                    {s.bookLabel}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {s.note && <p className="mt-3.5 text-xs text-[#65736E]">{s.note}</p>}
    </section>
  );
}
