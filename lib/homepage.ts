import { sql } from "./db";

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface TimelineRow {
  time: string;
  step: string;
}

export interface HoursRow {
  range: string;
  time: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface TourSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  emptyText: string;
}

export interface WhySection {
  eyebrow: string;
  heading: string;
  intro: string;
  timelineHeading: string;
  timeline: TimelineRow[];
  learnHeading: string;
  learn: string[];
  note: string;
  extraHeading: string;
  extraItems: { name: string; note: string }[];
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
}

export interface HighlightCard {
  icon: string;
  title: string;
  body: string;
}

export interface HighlightsSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  cards: HighlightCard[];
}

export interface MustSeeRuinsSection {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
  ctaButtonText: string;
  ctaHref: string;
  images: GalleryImage[];
}

export interface PracticalSection {
  hoursHeading: string;
  hours: HoursRow[];
  hoursNote: string;
  addressHeading: string;
  address: string;
  metro: string;
  bestTimeHeading: string;
  bestTimeBody: string;
}

export interface PriceSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  note: string;
  itemLabel: string;
  priceLabel: string;
  column1Label: string;
  column2Label: string;
  bestForLabel: string;
  bookLabel: string;
}

export interface FaqSection {
  eyebrow: string;
  heading: string;
}

export interface NotFoundSection {
  heading: string;
  body: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
}

export interface BlogTeaserSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  viewAllText: string;
  readArticleText: string;
}

export interface BlogPageSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  emptyStateText: string;
  featuredLinkText: string;
  ctaHeading: string;
  ctaButtonText: string;
  backToGuidesText: string;
  quickAnswerLabel: string;
  tocLabel: string;
  relatedGuidesHeading: string;
  sidebarRelatedHeading: string;
  sidebarRecommendedBadge: string;
  sidebarCompareLinkText: string;
  promoRecommendedText: string;
  latestGuidesHeading: string;
  latestGuidesIntro: string;
  searchPlaceholder: string;
  categoriesHeading: string;
  popularGuidesHeading: string;
  sidebarCtaBody: string;
  noResultsText: string;
  sortNewestLabel: string;
  sortOldestLabel: string;
}

export interface CtaBannerSection {
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref: string;
}

export interface HeroTrustBadge {
  icon: string;
  title: string;
  subtitle: string;
}

export interface HeroTrustSection {
  badges: HeroTrustBadge[];
}

export interface HomepageSections {
  heroTrust: HeroTrustSection;
  tours: TourSection;
  highlights: HighlightsSection;
  why: WhySection;
  mustSeeRuins: MustSeeRuinsSection;
  practical: PracticalSection;
  price: PriceSection;
  ctaBanner: CtaBannerSection;
  faq: FaqSection;
  notFound: NotFoundSection;
  blogTeaser: BlogTeaserSection;
  blogPage: BlogPageSection;
}

export interface HeaderContent {
  logoImage: string;
  logoAlt: string;
  logoLine1: string;
  logoLine2: string;
  homeLabel: string;
  bookNowText: string;
  navLinks: NavLink[];
  ctaText: string;
  ctaHref: string;
}

export interface FooterContent {
  tagline: string;
  columns: FooterColumn[];
  addressHeading: string;
  addressLine1: string;
  addressLine2: string;
  copyrightText: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  dark: string;
  accent: string;
}

export interface HomepageContent {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
  sections: HomepageSections;
  header: HeaderContent;
  footer: FooterContent;
  theme: ThemeColors;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  noIndex: boolean;
  noFollow: boolean;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export const DEFAULT_HEADER: HeaderContent = {
  logoImage: "",
  logoAlt: "Loro Parque Tickets",
  logoLine1: "LORO PARQUE",
  logoLine2: "TICKETS",
  homeLabel: "Home",
  bookNowText: "BOOK TICKETS",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  ctaText: "BOOK NOW",
  ctaHref: "/#tours",
};

export const DEFAULT_FOOTER: FooterContent = {
  tagline:
    "<strong>Independent booking guide.</strong> Not affiliated with Loro Parque or its operators — we compare bookable Loro Parque tickets and experiences from trusted booking partners and earn a commission on bookings made through our links, at no extra cost to you.",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Loro Parque Tickets", href: "/#tours" },
        { label: "What to Expect", href: "/#what-to-expect" },
        { label: "Ticket Comparison", href: "/#prices" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  addressHeading: "Park Location",
  addressLine1: "Avenida Loro Parque, s/n, 38400 Puerto de la Cruz",
  addressLine2: "Tenerife, Canary Islands, Spain",
  copyrightText:
    "Loro Parque Tickets. Prices shown are indicative and set by the booking partner; always confirm on the booking page.",
};

export const DEFAULT_THEME: ThemeColors = {
  primary: "#17483F",   // Primary Brand: Deep Forest
  secondary: "#8FA79A", // Secondary Green: Soft Sage
  dark: "#172321",      // Text: Deep Charcoal
  accent: "#D8C7A0",    // Accent: Warm Sand
};

export const DEFAULT_HERO_TRUST: HeroTrustSection = {
  badges: [
    { icon: "ShieldCheckIcon", title: "Trusted Booking Partner", subtitle: "Secure checkout" },
    { icon: "ClockPayIcon", title: "Instant Confirmation", subtitle: "Mobile voucher" },
    { icon: "HeadsetIcon", title: "Customer Support", subtitle: "Help if plans change" },
  ],
};

export const DEFAULT_SECTIONS: HomepageSections = {
  heroTrust: DEFAULT_HERO_TRUST,
  tours: {
    eyebrow: "Loro Parque Tickets & Experiences",
    heading: "Loro Parque Tickets",
    subheading:
      "Compare entry tickets, guided experiences and combination options for Loro Parque in Puerto de la Cruz, Tenerife, then book the one that suits your day.",
    emptyText: "Tickets are being added — please check back shortly.",
  },
  highlights: {
    eyebrow: "Why Book With Us",
    heading: "Why Book With Us",
    subheading:
      "Loro Parque is one of Tenerife's most popular days out. Booking ahead keeps your plans simple — here is what our comparison gives you.",
    cards: [
      { title: "Skip the Ticket Desk", body: "Book online and arrive with your mobile ticket ready instead of queuing at the entrance.", icon: "🎫" },
      { title: "Clear Comparison", body: "We list what each ticket includes — entry, guided tour, meals or transport — so you can compare like for like.", icon: "⚖️" },
      { title: "Family Friendly", body: "Child and family options are shown clearly, with age tiers explained on each booking page.", icon: "👨‍👩‍👧" },
      { title: "Flexible Booking", body: "Many options offer free cancellation up to a set time before the visit — check each booking page for the terms.", icon: "✅" },
    ],
  },
  why: {
    eyebrow: "The Visit",
    heading: "What You See on a Loro Parque Visit",
    intro:
      "Loro Parque is a zoological park and marine-life park in Puerto de la Cruz, on Tenerife's north coast. Founded as a parrot park, it is known for its parrot collection, animal presentations and large themed habitats. Plan a full day to see it all.",
    timelineHeading: "A sample day",
    timeline: [
      { time: "Morning", step: "Arrive at opening, collect your map and head to the parrot areas while it is cooler" },
      { time: "Mid-morning", step: "Check the day's presentation times at the entrance and plan your route around them" },
      { time: "Midday", step: "Explore the aquarium, penguin and wildlife habitats, and take a lunch break" },
      { time: "Afternoon", step: "Catch a presentation, then see the habitats you missed before the park winds down" },
    ],
    learnHeading: "Good to know before your visit",
    learn: [
      "Allow around 4–5 hours or more — the park is large and presentations run on a daily schedule",
      "Wear comfortable shoes, bring sun protection and a light layer for air-conditioned habitats",
      "Check presentation times on arrival; schedules can change by day and season",
      "Accessibility varies by area — contact the booking partner or the park if you need step-free access",
    ],
    note: "Presentation times, habitats and animal programmes can change — confirm current details on the day.",
    extraHeading: "Getting to Loro Parque",
    extraItems: [
      { name: "From Puerto de la Cruz", note: "The park is on the edge of town — a short taxi, bus or tourist-train ride, or a longer walk along the coast" },
      { name: "From the south of Tenerife", note: "Allow roughly an hour or more by car, bus or organised transfer, depending on traffic" },
      { name: "By car", note: "The park has on-site parking; check the current parking arrangements before you travel" },
    ],
    ctaText: "Ready to visit? Compare Loro Parque tickets and book your day.",
    ctaButtonText: "Book Your Loro Parque Ticket →",
    ctaHref: "#tours",
  },
  mustSeeRuins: {
    eyebrow: "Highlights",
    heading: "What to See at Loro Parque",
    body:
      "Loro Parque combines one of the world's largest <strong>parrot collections</strong> with <strong>aquariums</strong>, a <strong>penguin habitat</strong>, <strong>animal presentations</strong> and landscaped tropical gardens — a full day out for families, couples and nature lovers.",
    bullets: [
      "One of the world's largest collections of parrots, with many species in colourful aviaries",
      "Aquarium and marine habitats, including the penguin exhibit",
      "Daily animal presentations — check the times at the entrance",
      "Tropical gardens, restaurants and shops across the park",
    ],
    ctaButtonText: "See Loro Parque Tickets",
    ctaHref: "#tours",
    images: [
      { src: "/images/lp-parrots.jpg", alt: "Colourful tropical parrots and macaws in lush rainforest aviary", label: "Parrots" },
      { src: "/images/lp-aquarium.jpg", alt: "Undersea aquarium tunnel with marine life, sharks and rays", label: "Aquarium" },
      { src: "/images/lp-penguins.jpg", alt: "Planet Penguin antarctic habitat with king penguins and snow", label: "Penguins" },
      { src: "/images/lp-tenerife.jpg", alt: "Tenerife coast with Mount Teide volcano and ocean view", label: "Tenerife" },
    ],
  },
  practical: {
    hoursHeading: "Opening Hours & Best Time to Visit",
    hours: [
      { range: "Opening days", time: "The park is generally open daily — confirm dates on the booking page" },
      { range: "Typical hours", time: "Around 9:30 AM to 5:30 PM; hours can vary by season" },
      { range: "Presentations", time: "Scheduled through the day — check the programme on arrival" },
    ],
    hoursNote: "Always confirm current opening hours and presentation times before you travel.",
    addressHeading: "Location & Entrance",
    address:
      "Loro Parque, Avenida Loro Parque, s/n, 38400 Puerto de la Cruz, Tenerife, Spain.",
    metro: "Reachable by bus, taxi or car from across Tenerife; check current transport options before your visit.",
    bestTimeHeading: "Best Time for a Loro Parque Visit",
    bestTimeBody:
      "Arriving at opening gives you cooler temperatures and quieter habitats. Weekdays are generally calmer than weekends and school-holiday periods, and booking ahead lets you choose your date with confidence.",
  },
  price: {
    eyebrow: "Compare & Choose",
    heading: "Compare Loro Parque Tickets",
    subheading: "Pick the ticket that matches your day, then book straight from the table.",
    note: "Children's rates and free entry for very young children usually apply — check each booking page for age tiers.",
    itemLabel: "Ticket Type",
    priceLabel: "Price",
    column1Label: "Duration",
    column2Label: "Guide Included",
    bestForLabel: "Best For",
    bookLabel: "Book Now",
  },
  ctaBanner: {
    heading: "Ready to Visit Loro Parque?",
    subtext: "Compare Loro Parque tickets and experiences and book your day out in Tenerife.",
    buttonText: "See All Tickets",
    buttonHref: "#tours",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    heading: "Loro Parque Tickets FAQs",
  },
  notFound: {
    heading: "This path has gone quiet.",
    body: "The page you're looking for doesn't exist or may have moved. Try one of these instead.",
    primaryButtonText: "Compare Loro Parque Tickets →",
    primaryButtonHref: "/#tours",
    secondaryButtonText: "Read the Visitor Guide",
    secondaryButtonHref: "/blog",
  },
  blogTeaser: {
    eyebrow: "From the Blog",
    heading: "Loro Parque Guides & Tips",
    subheading: "Practical advice on tickets, opening hours, getting there and making the most of your day.",
    viewAllText: "View All Articles",
    readArticleText: "Read Article",
  },
  blogPage: {
    eyebrow: "Loro Parque Blog",
    heading: "Loro Parque Visitor Guide",
    subheading: "Tickets, opening hours, getting there and what to see — everything you need to plan a visit to Loro Parque in Tenerife.",
    emptyStateText: "No articles published yet — check back soon.",
    featuredLinkText: "Read the guide",
    ctaHeading: "Ready to book your Loro Parque ticket?",
    ctaButtonText: "Compare Loro Parque Tickets →",
    backToGuidesText: "← All guides",
    quickAnswerLabel: "Quick Answer",
    tocLabel: "In This Guide",
    relatedGuidesHeading: "Related Guides",
    sidebarRelatedHeading: "Related Articles",
    sidebarRecommendedBadge: "Recommended",
    sidebarCompareLinkText: "Compare all tickets →",
    promoRecommendedText: "Recommended for you",
    latestGuidesHeading: "Latest Guides",
    latestGuidesIntro: "Tickets, opening hours and everything you need to know about visiting Loro Parque.",
    searchPlaceholder: "Search guides...",
    categoriesHeading: "Categories",
    popularGuidesHeading: "Popular Guides",
    sidebarCtaBody: "Compare tickets and experiences, then book your day at Loro Parque.",
    noResultsText: "No articles found matching your search.",
    sortNewestLabel: "Newest First",
    sortOldestLabel: "Oldest First",
  },
};

const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  heroBadge: "TENERIFE'S TOP ATTRACTION",
  heroHeading: "Loro Parque Tickets",
  heroSubheading:
    "Meet incredible animals, stunning shows and unforgettable experiences at one of the world's most loved zoos — Loro Parque in Tenerife.",
  heroImage: "/images/hero-loro-parque.jpg",
  heroImageAlt: "Majestic Blue-and-Gold Macaw with waterfall and tropical gardens at Loro Parque, Tenerife",
  heroCtaPrimaryText: "Compare Tickets",
  heroCtaPrimaryHref: "#tours",
  heroCtaSecondaryText: "What to Expect",
  heroCtaSecondaryHref: "#what-to-expect",
  showFeaturedTour: true,
  featuredTourId: "loro-parque-entry-ticket",
  featuredBadgeLabel: "Recommended",
  featuredUrgencyText: "Book ahead for your date",
  featuredReasons: [
    "Choose your date in advance",
    "Instant mobile confirmation",
    "Check the booking page for cancellation terms",
  ],
  sections: DEFAULT_SECTIONS,
  header: DEFAULT_HEADER,
  footer: DEFAULT_FOOTER,
  theme: DEFAULT_THEME,
  metaTitle: "",
  metaDescription: "",
  focusKeyword: "Loro Parque Tickets",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
};

function parseReasons(value: unknown): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

function parseJsonWithDefault<T extends object>(value: unknown, fallback: T): T {
  let parsed: unknown = value;
  if (typeof value === "string") {
    try {
      parsed = JSON.parse(value);
    } catch {
      parsed = null;
    }
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fallback;
  return { ...fallback, ...(parsed as Partial<T>) };
}

function rowToHomepage(row: any): HomepageContent {
  const sectionsRaw = parseJsonWithDefault<HomepageSections>(row.sections_json, DEFAULT_SECTIONS);
  return {
    heroBadge: row.hero_badge || "",
    heroHeading: row.hero_heading || "",
    heroSubheading: row.hero_subheading || "",
    heroImage: row.hero_image || "",
    heroImageAlt: row.hero_image_alt || "",
    heroCtaPrimaryText: row.hero_cta_primary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryText,
    heroCtaPrimaryHref: row.hero_cta_primary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryHref,
    heroCtaSecondaryText: row.hero_cta_secondary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryText,
    heroCtaSecondaryHref: row.hero_cta_secondary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryHref,
    showFeaturedTour: !!row.show_featured_tour,
    featuredTourId: row.featured_tour_id || "",
    featuredBadgeLabel: row.featured_badge_label || "",
    featuredUrgencyText: row.featured_urgency_text || "",
    featuredReasons: parseReasons(row.featured_reasons),
    sections: {
      heroTrust: { ...DEFAULT_SECTIONS.heroTrust, ...sectionsRaw.heroTrust },
      tours: { ...DEFAULT_SECTIONS.tours, ...sectionsRaw.tours },
      highlights: { ...DEFAULT_SECTIONS.highlights, ...sectionsRaw.highlights },
      why: { ...DEFAULT_SECTIONS.why, ...sectionsRaw.why },
      mustSeeRuins: { ...DEFAULT_SECTIONS.mustSeeRuins, ...sectionsRaw.mustSeeRuins },
      practical: { ...DEFAULT_SECTIONS.practical, ...sectionsRaw.practical },
      price: { ...DEFAULT_SECTIONS.price, ...sectionsRaw.price },
      ctaBanner: { ...DEFAULT_SECTIONS.ctaBanner, ...sectionsRaw.ctaBanner },
      faq: { ...DEFAULT_SECTIONS.faq, ...sectionsRaw.faq },
      notFound: { ...DEFAULT_SECTIONS.notFound, ...sectionsRaw.notFound },
      blogTeaser: { ...DEFAULT_SECTIONS.blogTeaser, ...sectionsRaw.blogTeaser },
      blogPage: { ...DEFAULT_SECTIONS.blogPage, ...sectionsRaw.blogPage },
    },
    header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
    footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
    theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    metaTitle: row.meta_title || "",
    metaDescription: row.meta_description || "",
    focusKeyword: row.focus_keyword || "",
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    canonicalUrl: row.canonical_url || "",
    ogTitle: row.og_title || "",
    ogDescription: row.og_description || "",
    ogImage: row.og_image || "",
  };
}

export async function getHomepageContent(): Promise<HomepageContent> {
  try {
    const rows = await sql`SELECT * FROM homepage WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToHomepage(rows[0]) : DEFAULT_HOMEPAGE_CONTENT;
  } catch {
    return DEFAULT_HOMEPAGE_CONTENT;
  }
}

export async function getSiteChrome(): Promise<{ header: HeaderContent; footer: FooterContent; theme: ThemeColors }> {
  try {
    const rows = await sql`SELECT header_json, footer_json, theme_json FROM homepage WHERE id = 1 LIMIT 1`;
    if (!rows.length) return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
    const row = rows[0] as any;
    return {
      header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
      footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
      theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    };
  } catch {
    return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
  }
}

export async function saveHomepageCopy(data: {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, hero_badge, hero_heading, hero_subheading, hero_image, hero_image_alt,
      hero_cta_primary_text, hero_cta_primary_href,
      hero_cta_secondary_text, hero_cta_secondary_href,
      meta_title, meta_description, focus_keyword,
      canonical_url, og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroBadge}, ${data.heroHeading}, ${data.heroSubheading}, ${data.heroImage},
      ${data.heroImageAlt},
      ${data.heroCtaPrimaryText || ""}, ${data.heroCtaPrimaryHref || ""},
      ${data.heroCtaSecondaryText || ""}, ${data.heroCtaSecondaryHref || ""},
      ${data.metaTitle || ""}, ${data.metaDescription || ""}, ${data.focusKeyword || ""},
      ${data.canonicalUrl || ""}, ${data.ogTitle || ""}, ${data.ogDescription || ""}, ${data.ogImage || ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_badge = EXCLUDED.hero_badge,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      hero_image = EXCLUDED.hero_image,
      hero_image_alt = EXCLUDED.hero_image_alt,
      hero_cta_primary_text = EXCLUDED.hero_cta_primary_text,
      hero_cta_primary_href = EXCLUDED.hero_cta_primary_href,
      hero_cta_secondary_text = EXCLUDED.hero_cta_secondary_text,
      hero_cta_secondary_href = EXCLUDED.hero_cta_secondary_href,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      focus_keyword = EXCLUDED.focus_keyword,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
}

export async function setHomepageIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO homepage (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}

export async function saveRecommendedTour(data: {
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, show_featured_tour, featured_tour_id, featured_badge_label,
      featured_urgency_text, featured_reasons
    ) VALUES (
      1, ${!!data.showFeaturedTour}, ${data.featuredTourId}, ${data.featuredBadgeLabel},
      ${data.featuredUrgencyText}, ${JSON.stringify(data.featuredReasons || [])}::jsonb
    )
    ON CONFLICT (id) DO UPDATE SET
      show_featured_tour = EXCLUDED.show_featured_tour,
      featured_tour_id = EXCLUDED.featured_tour_id,
      featured_badge_label = EXCLUDED.featured_badge_label,
      featured_urgency_text = EXCLUDED.featured_urgency_text,
      featured_reasons = EXCLUDED.featured_reasons
  `;
}

export async function saveHomepageSections(sections: HomepageSections): Promise<void> {
  await sql`
    INSERT INTO homepage (id, sections_json)
    VALUES (1, ${JSON.stringify(sections)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      sections_json = EXCLUDED.sections_json
  `;
}

export async function saveSiteHeader(header: HeaderContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, header_json)
    VALUES (1, ${JSON.stringify(header)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      header_json = EXCLUDED.header_json
  `;
}

export async function saveSiteFooter(footer: FooterContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, footer_json)
    VALUES (1, ${JSON.stringify(footer)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      footer_json = EXCLUDED.footer_json
  `;
}

export async function saveSiteTheme(theme: ThemeColors): Promise<void> {
  await sql`
    INSERT INTO homepage (id, theme_json)
    VALUES (1, ${JSON.stringify(theme)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      theme_json = EXCLUDED.theme_json
  `;
}
