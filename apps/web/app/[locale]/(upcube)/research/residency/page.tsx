import type { Metadata } from "next";
import { LongformPage } from "components/upcube-portal/longform-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Research Fellowship | Upcube",
  description: "Research fellowship program at Upcube.",
  path: "/research/residency",
});

export default function ResidencyPage() {
  return (
    <LongformPage entry={{ slug: "residency", order: 99, title: "Research Fellowship", subtitle: "", description: "Research program and fellowship details at Upcube.", body: "", category: "research" }}
      backHref="/research" backLabel="Back to Research" />
  );
}
