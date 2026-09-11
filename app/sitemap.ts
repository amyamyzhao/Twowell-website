import type { MetadataRoute } from "next";

const siteUrl = "https://www.twowellwipes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
