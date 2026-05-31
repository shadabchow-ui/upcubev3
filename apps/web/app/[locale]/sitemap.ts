import type { MetadataRoute } from "next";

import { upcubeNewsArticles } from "lib/upcube-news/news";
import { upcubeProducts } from "lib/upcube-products/products";
import { CANONICAL_BASE_URL } from "lib/upcube-seo/metadata";
import { researchLongformPages } from "lib/upcube-portal/longform-pages";
import { policyPageSlugs } from "lib/upcube-portal/policy-pages";

const publicRoutes = [
  "/",
  "/products",
  "/news",
  "/research",
  "/research/residency",
  "/research/economic",
  "/explore",
  "/platform",
  "/business",
  "/capabilities",
  "/core",
  "/build",
  "/learn",
  "/enterprise",
  "/company",
  "/about",
  "/charter",
  "/foundation",
  "/careers",
  "/brand",
  "/contact",
  "/founder-letter",
  "/principles",
  "/vision",
  "/developers",
  "/docs",
  "/pricing",
  "/safety",
  "/security",
  "/trust",
  "/trust-transparency",
  "/faq",
  "/privacy",
  "/terms",
  "/policies",
  "/legal",
  "/working-together",
  "/societal-impact",
  "/for-organizations",
  "/status",
];

const sitemap = (): MetadataRoute.Sitemap => {
  const entries: MetadataRoute.Sitemap = publicRoutes.map((path) => ({
    url: `${CANONICAL_BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "monthly" as const : "monthly" as const,
    priority: path === "/" ? 1.0 : 0.7,
  }));

  for (const product of upcubeProducts) {
    entries.push({
      url: `${CANONICAL_BASE_URL}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    });
  }

  for (const article of upcubeNewsArticles) {
    entries.push({
      url: `${CANONICAL_BASE_URL}${article.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    });
  }

  for (const page of researchLongformPages) {
    entries.push({
      url: `${CANONICAL_BASE_URL}/research/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    });
  }

  for (const slug of policyPageSlugs) {
    entries.push({
      url: `${CANONICAL_BASE_URL}/policy/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    });
  }

  return entries;
};

export default sitemap;
