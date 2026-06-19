import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://akuapps.com",
  integrations: [
    sitemap({
      serialize(item) {
        const pathname = new URL(item.url).pathname;

        if (pathname === "/") {
          item.changefreq = "weekly";
          item.priority = 1;
        } else if (pathname === "/apps" || pathname === "/apps/" || pathname.startsWith("/apps/")) {
          item.changefreq = "weekly";
          item.priority = pathname === "/apps" || pathname === "/apps/" ? 0.95 : 0.9;
        } else if (pathname === "/testers-club/") {
          item.changefreq = "monthly";
          item.priority = 0.7;
        } else if (pathname.startsWith("/privacy/")) {
          item.changefreq = "yearly";
          item.priority = 0.3;
        } else {
          item.changefreq = "monthly";
          item.priority = 0.5;
        }

        item.lastmod = new Date().toISOString();
        return item;
      }
    })
  ]
});
