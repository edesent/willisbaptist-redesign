import type { MetadataRoute } from "next";

const routes = ["", "/visit", "/beliefs", "/ministries", "/legacy", "/gospel", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://willisbaptist-redesign.vercel.app${route}`,
    lastModified: new Date(),
  }));
}
