import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: "https://upcube.ai",
    lastModified: new Date(),
  },
];

export default sitemap;
