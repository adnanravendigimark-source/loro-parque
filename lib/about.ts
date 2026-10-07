import { sql } from "./db";

export interface AboutPageContent {
  heroEyebrow: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  noIndex: boolean;
  noFollow: boolean;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

const DEFAULT_CONTENT = `<h2>Our Mission</h2>
<p>We built this independent guide with one mission: Loro Parque is one of Tenerife's best-loved days out — but only if you book the right ticket. With several ticket types and booking partners to choose from, inclusions, extras and prices vary.</p>
<p>We are an independent booking resource — not Loro Parque or its operators. We compare bookable tickets and experiences sold through trusted, established booking partners.</p>
<h2>How We Select Loro Parque Tickets</h2>
<p>Every ticket and tour featured on this site is checked against four criteria before we list it:</p>
<ul>
<li><strong>Genuine, Bookable Tickets</strong> — Every ticket we list is sold through an established booking partner and gives real entry to Loro Parque.</li>
<li><strong>Clear Inclusions</strong> — We state what is included — entry, guide, meals or extras — for every option, so you know what you are booking.</li>
<li><strong>Transparent Pricing & Inclusions</strong> — What the booking partner shows is what you pay: inclusions are stated upfront.</li>
<li><strong>Free Cancellation</strong> — Many tickets offer free cancellation up to a set time before your visit — check each booking page.</li>
</ul>
<h2>Independent Booking Resource</h2>
<p>This website is an independent travel companion. We don't operate the archaeological park or sell tickets directly — all bookings go securely through GetYourGuide, a globally trusted partner, protected by official customer support and generous cancellation guarantees.</p>
<h2>Affiliate Disclosure</h2>
<p>When you book a Loro Parque ticket through links on our site, we may earn a modest affiliate commission at zero additional cost to you. This support allows us to maintain up-to-date guides and independent comparisons.</p>
<p>Have questions before you book your visit? Feel free to reach out via our <a href="/contact">contact page</a>.</p>`;

const DEFAULT_ABOUT: AboutPageContent = {
  heroEyebrow: "About Us",
  heroHeading: "Your Independent Guide to Loro Parque Tickets",
  heroSubheading:
    "We help travelers compare and book Loro Parque tickets and experiences in Tenerife.",
  heroImage: "/images/about-hero-gardens.jpg",
  heroImageAlt: "Lush tropical botanical gardens, palm trees, waterfall and mountains at Loro Parque Tenerife",
  content: DEFAULT_CONTENT,
  metaTitle: "About Us | Loro Parque Tickets",
  metaDescription:
    "Learn about our independent guide to Loro Parque tickets, experiences and planning a visit to Tenerife's famous animal park.",
  canonicalUrl: "",
  noIndex: false,
  noFollow: false,
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
};

function rowToAbout(row: any): AboutPageContent {
  return {
    heroEyebrow: row.hero_eyebrow || DEFAULT_ABOUT.heroEyebrow,
    heroHeading: row.hero_heading || DEFAULT_ABOUT.heroHeading,
    heroSubheading: row.hero_subheading || DEFAULT_ABOUT.heroSubheading,
    heroImage: row.hero_image || DEFAULT_ABOUT.heroImage,
    heroImageAlt: row.hero_image_alt || DEFAULT_ABOUT.heroImageAlt,
    content: row.content || DEFAULT_ABOUT.content,
    metaTitle: row.meta_title || DEFAULT_ABOUT.metaTitle,
    metaDescription: row.meta_description || DEFAULT_ABOUT.metaDescription,
    canonicalUrl: row.canonical_url || "",
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    ogTitle: row.og_title || "",
    ogDescription: row.og_description || "",
    ogImage: row.og_image || "",
  };
}

export async function getAboutPage(): Promise<AboutPageContent> {
  try {
    const rows = await sql`SELECT * FROM about_page WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToAbout(rows[0]) : DEFAULT_ABOUT;
  } catch {
    return DEFAULT_ABOUT;
  }
}

export async function setAboutIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO about_page (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}

export async function saveAboutPage(data: Partial<AboutPageContent>): Promise<void> {
  await sql`
    INSERT INTO about_page (
      id, hero_eyebrow, hero_heading, hero_subheading, hero_image, hero_image_alt,
      content, meta_title, meta_description, canonical_url, no_index, no_follow,
      og_title, og_description, og_image
    ) VALUES (
      1,
      ${data.heroEyebrow ?? DEFAULT_ABOUT.heroEyebrow},
      ${data.heroHeading ?? DEFAULT_ABOUT.heroHeading},
      ${data.heroSubheading ?? DEFAULT_ABOUT.heroSubheading},
      ${data.heroImage ?? DEFAULT_ABOUT.heroImage},
      ${data.heroImageAlt ?? DEFAULT_ABOUT.heroImageAlt},
      ${data.content ?? DEFAULT_ABOUT.content},
      ${data.metaTitle ?? DEFAULT_ABOUT.metaTitle},
      ${data.metaDescription ?? DEFAULT_ABOUT.metaDescription},
      ${data.canonicalUrl ?? ""},
      ${!!data.noIndex},
      ${!!data.noFollow},
      ${data.ogTitle ?? ""},
      ${data.ogDescription ?? ""},
      ${data.ogImage ?? ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_eyebrow = EXCLUDED.hero_eyebrow,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      hero_image = EXCLUDED.hero_image,
      hero_image_alt = EXCLUDED.hero_image_alt,
      content = EXCLUDED.content,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      canonical_url = EXCLUDED.canonical_url,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
}
