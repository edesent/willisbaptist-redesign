import type { MetadataRoute } from "next";

const routes = ["", "/visit", "/beliefs", "/ministries", "/legacy", "/gospel", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.willisbaptist.org${route}`,
    lastModified: new Date(),
  }));
}
