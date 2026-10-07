"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/data";

export default function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10 space-y-3">
      {faqs.map((f, i) => {
        const open = openIndex === i;
        return (
          <div
            key={f.question}
            className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
              open ? "border-[#17483F] shadow-md ring-1 ring-[#17483F]/20" : "border-[#DCE3DF] hover:border-[#8FA79A]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full cursor-pointer list-none items-center justify-between gap-3 p-5 text-left font-semibold text-[#17483F] sm:p-5.5"
            >
              <span className="font-display text-[16px] sm:text-lg font-bold pr-3">{f.question}</span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#DCE3DF] text-xs transition ${
                  open ? "rotate-45 bg-[#17483F] text-white" : "bg-[#F7F8F4] text-[#17483F]"
                }`}
              >
                +
              </span>
            </button>
            {open && (
              <div
                className="rich-content border-t border-[#DCE3DF]/60 px-5 pb-5 pt-3 text-xs sm:text-[13.5px] leading-relaxed text-[#172321] sm:px-5.5"
                dangerouslySetInnerHTML={{ __html: f.answer }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
