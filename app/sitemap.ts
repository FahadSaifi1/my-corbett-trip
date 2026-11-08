import { MetadataRoute } from "next";
import { businessConfig } from "@/content/config";
import { packagesData } from "@/content/packages";
import { safariZones } from "@/content/zones";
import { journalArticles } from "@/content/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${businessConfig.domain}`;
  const lastMod = new Date("2026-11-06T00:00:00.000Z");

  // Core Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: lastMod, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/packages`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/safari-zones`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/dhikala-night-stay`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/jeep-safari`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/canter-safari`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/safari-cost`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/safari-rules`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/best-time-to-visit`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/how-to-reach`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/stays`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/journal`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cancellation-policy`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Dynamic Package Pages
  const packagePages: MetadataRoute.Sitemap = packagesData.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    lastModified: lastMod,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic Zone Pages
  const zonePages: MetadataRoute.Sitemap = safariZones.map((zone) => ({
    url: `${baseUrl}/safari-zones/${zone.slug}`,
    lastModified: lastMod,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic Journal Articles
  const journalPages: MetadataRoute.Sitemap = journalArticles.map((article) => ({
    url: `${baseUrl}/journal/${article.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...packagePages, ...zonePages, ...journalPages];
}
