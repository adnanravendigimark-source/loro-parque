import { getFaqs } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";
import FaqAccordion from "./FaqAccordion";

export default async function FAQSection() {
  const [faqs, { sections }] = await Promise.all([getFaqs(), getHomepageContent()]);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() },
    })),
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-t border-[#DCE3DF]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#D8C7A0]">
            {sections.faq.eyebrow}
          </p>
          <h2 className="mt-2.5 font-display text-3xl sm:text-4xl font-bold text-[#17483F] tracking-tight">
            {sections.faq.heading}
          </h2>
        </div>

        <FaqAccordion faqs={faqs} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
