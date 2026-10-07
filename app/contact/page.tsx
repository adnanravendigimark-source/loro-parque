import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MailIcon } from "@/components/icons";
import { getContactPage } from "@/lib/contact";
import { getIconComponent } from "@/lib/iconMap";
import { resolveRobots, resolveCanonical, resolveOg } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const contact = await getContactPage();
  const og = resolveOg(
    { ogTitle: contact.ogTitle, ogDescription: contact.ogDescription, ogImage: contact.ogImage },
    { title: contact.metaTitle, description: contact.metaDescription }
  );
  return {
    title: contact.metaTitle,
    description: contact.metaDescription,
    alternates: { canonical: resolveCanonical("/contact", contact.canonicalUrl) },
    robots: resolveRobots(contact.noIndex, contact.noFollow),
    openGraph: { title: og.title, description: og.description, url: "/contact", images: og.image ? [{ url: og.image }] : undefined },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

export default async function ContactPage() {
  const contact = await getContactPage();

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-[#F7F8F4] border border-[#DCE3DF] px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#17483F]">
              {contact.heroEyebrow || "CONTACT"}
            </span>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17483F]">
              {contact.heroHeading || "Get in Touch"}
            </h1>
            <div className="mx-auto mt-3 h-[2px] w-12 rounded-full bg-[#D8C7A0]" />
            <div
              className="rich-content mx-auto mt-4 text-sm sm:text-base text-[#65736E] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: contact.heroSubheading }}
            />
          </div>

          {/* Primary Email Card */}
          <div className="mt-10 rounded-2xl border border-[#DCE3DF] bg-[#F7F8F4] p-8 sm:p-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition hover:shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17483F] text-white shadow-md">
              <MailIcon className="h-6 w-6" />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#65736E]">
              {contact.emailLabel || "Email us directly"}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1.5 inline-block break-all font-display text-2xl sm:text-3xl font-bold text-[#17483F] hover:text-[#D8C7A0] transition-colors"
            >
              {contact.email}
            </a>
            <p className="mt-2 text-xs sm:text-sm text-[#65736E] max-w-md mx-auto">
              {contact.emailNote || "We typically reply within 1–2 business days."}
            </p>
          </div>

          {/* 3 Support Reason Cards */}
          <div className="mt-8">
            <h2 className="text-center font-display text-xl sm:text-2xl font-bold text-[#17483F] mb-6">
              {contact.reasonsHeading || "How We Can Help"}
            </h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {contact.reasons.map(({ icon, title, body }) => {
                const Icon = getIconComponent(icon);
                return (
                  <div
                    key={title}
                    className="flex flex-col rounded-2xl border border-[#DCE3DF] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-1 hover:border-[#8FA79A] hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F8F4] border border-[#DCE3DF] text-[#17483F]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-[15px] font-bold text-[#17483F] leading-snug">{title}</h3>
                    <div
                      className="rich-content mt-2 text-xs sm:text-[13px] text-[#65736E] leading-relaxed flex-1"
                      dangerouslySetInnerHTML={{ __html: body }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer note */}
          {contact.footerNote && (
            <div className="mt-8 rounded-xl border border-[#DCE3DF] bg-[#F7F8F4]/80 p-5 text-center">
              <div
                className="rich-content text-xs sm:text-sm text-[#65736E] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: contact.footerNote }}
              />
            </div>
          )}

          {/* Bottom CTA block */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl bg-[#17483F] p-8 text-white shadow-xl">
            <p className="text-base sm:text-lg font-bold text-white text-center sm:text-left">
              {contact.ctaHeading || "Ready to visit Loro Parque?"}
            </p>
            <a
              href="/#tours"
              className="shrink-0 rounded-lg bg-[#D8C7A0] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#172321] shadow-md transition hover:bg-[#C4B084] hover:scale-[1.02]"
            >
              {contact.ctaButtonLabel || "Compare Loro Parque Tickets"} →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
