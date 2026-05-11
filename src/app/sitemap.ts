import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/fahrzeuge`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/agb`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/widerruf`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookies-einstellungen`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
