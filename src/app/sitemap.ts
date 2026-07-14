import type { MetadataRoute } from "next";
import { apps } from "@/lib/apps";
import { siteConfig } from "@/lib/site";

// Required for `output: "export"` — generate sitemap.xml at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = ["", "/apps", "/privacy-policy", "/contact"];

  // Per-app privacy policies that live on this site (skip external links and
  // the shared /privacy-policy, which is already in baseRoutes).
  const appPrivacyRoutes = apps
    .map((app) => app.privacyPolicyHref)
    .filter(
      (href): href is string =>
        !!href && href.startsWith("/") && !baseRoutes.includes(href),
    );

  const routes = [...new Set([...baseRoutes, ...appPrivacyRoutes])];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
