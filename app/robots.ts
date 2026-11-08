import { MetadataRoute } from "next";
import { businessConfig } from "@/content/config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${businessConfig.domain}`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/go/", "/thank-you", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

