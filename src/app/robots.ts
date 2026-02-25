import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/og",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
