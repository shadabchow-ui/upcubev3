import type { Metadata } from "next";
import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Legal | Upcube",
  description: "Legal and policy information for Upcube products and websites.",
  path: "/legal",
});

export default function LegalRoutePage() {
  const body = getBodyForRoute("/legal");
  return (
    <LongformPage entry={{ slug: "legal", order: 99, title: "Legal", subtitle: "Legal and policy information.", description: "Legal and policy information for Upcube products and websites.", body, category: "trust" }}
      backHref="/trust" backLabel="Back to Trust" />
  );
}
