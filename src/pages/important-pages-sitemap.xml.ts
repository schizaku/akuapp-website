import { apps } from "@/data/apps";

const lastmod = new Date().toISOString();

const urls = [
  { loc: "https://akuapps.com/", changefreq: "weekly", priority: "1.0" },
  { loc: "https://akuapps.com/apps/", changefreq: "weekly", priority: "0.9" },
  ...apps.map((app) => ({
    loc: `https://akuapps.com/apps/${app.slug}/`,
    changefreq: "weekly",
    priority: "0.9"
  }))
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

export function GET() {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
