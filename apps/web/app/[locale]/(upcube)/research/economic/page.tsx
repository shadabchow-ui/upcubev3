import type { Metadata } from "next";
import { LongformPage } from "components/upcube-portal/longform-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Economy & Markets | Upcube Research",
  description: "Economic research direction for Upcube products and ecosystem.",
  path: "/research/economic",
});

export default function EconomicResearchPage() {
  return (
    <LongformPage entry={{ slug: "economic", order: 99, title: "Economy & Markets", subtitle: "", description: "Economic research direction for the Upcube ecosystem.", body: "", category: "research" }}
      backHref="/research" backLabel="Back to Research" />
  );
}
