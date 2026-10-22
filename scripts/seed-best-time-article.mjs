import fs from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

function loadDotEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    process.env[key] = value;
  }
}

loadDotEnv();

const sql = neon(process.env.DATABASE_URL);

const articleSlug = "best-time-of-year-to-visit-loro-parque";
const focusKeyword = "best time to visit Loro Parque";

const coverImageUrl =
  "https://2pafp8895rob9uhp.public.blob.vercel-storage.com/blog/loro-parque-best-time-cover-VhaoUV2vnVUrFLa9JL9whoRO0b0Y51.jpg";
const inlineImageUrl =
  "https://2pafp8895rob9uhp.public.blob.vercel-storage.com/blog/loro-parque-treetops-canopy-foE9h0MvRePD67RXKYNlgERydkrERu.jpg";

const contentHtml = `<p>Nestled in Puerto de la Cruz beneath the northern slopes of Mount Teide, Loro Parque ranks among the world’s most renowned zoological and botanical gardens. Spanning lush subtropical pathways, massive walk-through aviaries, and world-class marine conservation habitats, the 33-acre reserve is a highlight of any Tenerife itinerary. Determining the <strong>best time to visit Loro Parque</strong> allows you to navigate crowd trends, enjoy comfortable microclimates, and witness peak animal activity across every habitat.</p>
<h2>The Best Time of Day to Arrive</h2>
<p>Arriving early is the single most effective strategy for a relaxed experience. The park gates open in the morning, making an arrival between 9:15 AM and 9:30 AM ideal. During the first two hours, outdoor temperatures in northern Tenerife are refreshingly mild, and animals—such as red pandas, gorillas, and big cats—are most energetic as caretakers provide morning feedings.</p>
<p>Early arrival also grants you immediate, uncrowded access to popular indoor and immersive exhibits, including Planet Penguin and the Katandra Treetops aviary, well before mid-morning organized excursion buses arrive from the southern resorts around 11:00 AM.</p>
<h2>Seasonal Weather and Crowd Considerations</h2>
<p>Tenerife is famously celebrated as the island of eternal spring, but Puerto de la Cruz on the lush north coast has distinct seasonal rhythms worth planning around:</p>
<ul>
<li><strong>Spring (March to May):</strong> A standout period for visiting. Temperatures hover comfortably between 20°C and 23°C (68°F–73°F), surrounding botanical gardens are in full blossom, and crowd levels remain moderate outside of Easter week.</li>
<li><strong>Summer (June to August):</strong> Peak tourist season across the Canary Islands. While coastal sea breezes keep Puerto de la Cruz slightly cooler than southern Playa de las Américas, visitor density peaks due to European school holidays. Mid-week days (Tuesday through Thursday) offer noticeably lighter queues than weekends.</li>
<li><strong>Autumn (September to November):</strong> Widely considered the finest season overall. The Atlantic ocean remains warm, afternoon temperatures average 24°C (75°F), and family crowds subside dramatically after school terms resume in September.</li>
<li><strong>Winter (December to February):</strong> A popular winter sun escape for northern Europeans. Days are mild (18°C–21°C / 64°F–70°F), though occasional light Atlantic showers can pass over northern Tenerife. The park remains vibrant and open daily.</li>
</ul>
<figure><img src="${inlineImageUrl}" alt="Elevated wooden canopy walkway through dense subtropical rainforest inside Katandra Treetops aviary at Loro Parque" /><figcaption>Katandra Treetops features elevated suspension walkways through a free-flight canopy home to hundreds of tropical birds.</figcaption></figure>
<h2>Animal Habitats and Daily Presentation Timing</h2>
<p>Wildlife behaviors shift depending on the clock and ambient temperature. Midday sun naturally encourages mammals to seek shade, making morning and late afternoon the premier windows for observation.</p>
<p>Upon passing ticket control, pick up the daily timetable or scan the digital schedule for presentation slots. Staggering your route between educational presentations and self-guided strolls through the Thai Village, Naturavision, and orchid gardens prevents rushing between distant corners of the park.</p>
<h2>Essential Tips for Planning Your Visit</h2>
<p>To maximize your day, keep these practical guidelines in mind:</p>
<ul>
<li><strong>Book entry tickets online:</strong> Reserving dated mobile tickets in advance bypasses the front entrance ticket window queues.</li>
<li><strong>Dress in breathable layers:</strong> Northern Tenerife can begin cool in the morning before warming up significantly by early afternoon.</li>
<li><strong>Wear comfortable walking shoes:</strong> The park is expansive with gentle inclines, paved walkways, and extensive wooden footbridges.</li>
<li><strong>Allow at least 5 to 6 hours:</strong> Exploring the botanical grounds, aquarium, and all animal habitats requires a substantial half-day or full-day visit.</li>
</ul>
<h3>Combining Visits with Siam Park</h3>
<p>Travelers exploring both northern and southern Tenerife often pair Loro Parque with Siam Park using a Twin Ticket, providing substantial savings across the island’s two flagship attractions.</p>`;

// Calculate exact text word count
const plainText = contentHtml
  .replace(/<[^>]+>/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/\s+/g, " ")
  .trim();

const words = plainText.split(" ").filter(Boolean);
console.log(`Calculated plain-text word count: ${words.length} words`);

const articleRecord = {
  slug: articleSlug,
  title: "Best Time of Year to Visit Loro Parque: Seasons, Crowds & Weather Tips",
  metaTitle: "Best Time to Visit Loro Parque: Seasons, Weather & Crowds",
  metaDescription:
    "Discover the best time to visit Loro Parque in Tenerife. Learn about seasonal weather in Puerto de la Cruz, peak crowd months, animal activity, and planning tips.",
  category: "Trip Planning",
  excerpt:
    "When to visit Tenerife's premier animal park: seasonal climate, crowd patterns in Puerto de la Cruz, and optimal arrival times.",
  quickAnswer:
    "The best time to visit Loro Parque is during the shoulder months of May to June and September to October, when Tenerife experiences warm, sunny weather with smaller crowds. Arriving at the gates by 9:15 AM on a Tuesday, Wednesday, or Thursday lets you enjoy active animal habitats and popular walk-through aviaries before tour buses arrive.",
  readTime: "4 min read",
  date: "2026-10-22",
  image: coverImageUrl,
  imageAlt: "Lush tropical botanical gardens, tranquil pond, and colorful parrots at Loro Parque in Puerto de la Cruz, Tenerife",
  recommendedTourId: "loro-parque-entry-ticket",
  recommendedTourAfterBlock: 1,
  content: contentHtml,
  ctaHeading: "Ready to Visit Loro Parque?",
  ctaBody: "Compare ticket options and reserve your entry tickets in advance.",
  ctaButtonText: "View Ticket Options",
  ctaButtonHref: "/#prices",
  focusKeyword: focusKeyword,
  noIndex: false,
  noFollow: false,
  canonicalUrl: "https://www.loroparquetickets.com/blog/best-time-of-year-to-visit-loro-parque",
  ogTitle: "Best Time to Visit Loro Parque: Seasons, Weather & Crowds",
  ogDescription:
    "Discover the best time to visit Loro Parque in Tenerife. Learn about seasonal weather in Puerto de la Cruz, peak crowd months, animal activity, and planning tips.",
  ogImage: coverImageUrl,
};

async function seed() {
  console.log("Seeding article into Neon database...");

  await sql`
    INSERT INTO posts (
      slug, title, meta_title, meta_description, category, excerpt,
      quick_answer, read_time, date, updated_at, image, image_alt,
      recommended_tour_id, recommended_tour_after_block, content, sort_order,
      cta_heading, cta_body, cta_button_text, cta_button_href, focus_keyword,
      no_index, no_follow, canonical_url, og_title, og_description, og_image
    ) VALUES (
      ${articleRecord.slug}, ${articleRecord.title}, ${articleRecord.metaTitle}, ${articleRecord.metaDescription},
      ${articleRecord.category}, ${articleRecord.excerpt}, ${articleRecord.quickAnswer}, ${articleRecord.readTime},
      ${articleRecord.date}, ${articleRecord.date}, ${articleRecord.image}, ${articleRecord.imageAlt},
      ${articleRecord.recommendedTourId}, ${articleRecord.recommendedTourAfterBlock},
      ${JSON.stringify(articleRecord.content)}::jsonb, 0,
      ${articleRecord.ctaHeading}, ${articleRecord.ctaBody}, ${articleRecord.ctaButtonText}, ${articleRecord.ctaButtonHref},
      ${articleRecord.focusKeyword}, ${articleRecord.noIndex}, ${articleRecord.noFollow}, ${articleRecord.canonicalUrl},
      ${articleRecord.ogTitle}, ${articleRecord.ogDescription}, ${articleRecord.ogImage}
    )
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      category = EXCLUDED.category,
      excerpt = EXCLUDED.excerpt,
      quick_answer = EXCLUDED.quick_answer,
      read_time = EXCLUDED.read_time,
      date = EXCLUDED.date,
      updated_at = EXCLUDED.updated_at,
      image = EXCLUDED.image,
      image_alt = EXCLUDED.image_alt,
      recommended_tour_id = EXCLUDED.recommended_tour_id,
      recommended_tour_after_block = EXCLUDED.recommended_tour_after_block,
      content = EXCLUDED.content,
      sort_order = EXCLUDED.sort_order,
      cta_heading = EXCLUDED.cta_heading,
      cta_body = EXCLUDED.cta_body,
      cta_button_text = EXCLUDED.cta_button_text,
      cta_button_href = EXCLUDED.cta_button_href,
      focus_keyword = EXCLUDED.focus_keyword,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;

  console.log("Database upsert successful!");

  // Verify DB state
  const allPosts = await sql`SELECT slug, title, category, date FROM posts ORDER BY date DESC`;
  console.log(`Current DB posts count: ${allPosts.length}`);
  console.log(allPosts);

  // Sync with data/posts.json
  const postsJsonPath = path.join(process.cwd(), "data", "posts.json");
  let existingJsonPosts = [];
  if (fs.existsSync(postsJsonPath)) {
    try {
      existingJsonPosts = JSON.parse(fs.readFileSync(postsJsonPath, "utf-8"));
    } catch (e) {
      existingJsonPosts = [];
    }
  }

  // Remove any older duplicate with the same slug if present, and prepend the new article
  const filteredJson = existingJsonPosts.filter((p) => p.slug !== articleSlug);
  const updatedJson = [articleRecord, ...filteredJson];
  fs.writeFileSync(postsJsonPath, JSON.stringify(updatedJson, null, 2), "utf-8");
  console.log(`Updated data/posts.json with ${updatedJson.length} posts.`);
}

seed().catch(console.error);
