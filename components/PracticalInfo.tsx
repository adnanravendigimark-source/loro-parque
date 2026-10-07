import { getHomepageContent } from "@/lib/homepage";

export default async function PracticalInfo() {
  const { sections } = await getHomepageContent();
  const s = sections.practical;

  return (
    <section id="practical" className="bg-white py-20 sm:py-24 border-t border-[#DCE3DF]">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-8 lg:grid-cols-3">
        <div className="rounded-2xl border border-[#DCE3DF] bg-[#F7F8F4]/60 p-7 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#17483F] font-bold text-lg mb-4 border border-[#DCE3DF] shadow-sm">
            ⏱
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#17483F]">{s.hoursHeading}</h3>
          <table className="mt-4 w-full text-xs sm:text-sm">
            <tbody>
              {s.hours.map((row, i) => (
                <tr key={row.range + i} className="border-b border-[#DCE3DF]/60 last:border-0">
                  <td className="py-2.5 pr-3 text-[#172321]">{row.range}</td>
                  <td className="py-2.5 text-right font-semibold text-[#17483F]">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {s.hoursNote && <p className="mt-3 text-xs text-[#65736E]">{s.hoursNote}</p>}
        </div>

        <div className="rounded-2xl border border-[#DCE3DF] bg-[#F7F8F4]/60 p-7 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#17483F] font-bold text-lg mb-4 border border-[#DCE3DF] shadow-sm">
            📍
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#17483F]">{s.addressHeading}</h3>
          <p className="mt-4 whitespace-pre-line text-xs sm:text-sm leading-relaxed text-[#172321]">{s.address}</p>
          {s.metro && <p className="mt-3 text-xs font-semibold text-[#17483F]">{s.metro}</p>}
        </div>

        <div className="rounded-2xl border border-[#DCE3DF] bg-[#F7F8F4]/60 p-7 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#17483F] font-bold text-lg mb-4 border border-[#DCE3DF] shadow-sm">
            💡
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#17483F]">{s.bestTimeHeading}</h3>
          <div
            className="rich-content mt-4 text-xs sm:text-sm text-[#172321] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: s.bestTimeBody }}
          />
        </div>
      </div>
    </section>
  );
}
