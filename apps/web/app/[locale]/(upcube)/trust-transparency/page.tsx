import type { Metadata } from "next";
import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Trust | Upcube",
  description: "How Upcube handles trust language, placeholders, and evidence boundaries.",
  path: "/trust-transparency",
});

export default function TrustTransparencyRoutePage() {
  const body = getBodyForRoute("/trust-transparency");
  return (
    <LongformPage entry={{ slug: "trust-transparency", order: 99, title: "Trust", subtitle: "How we handle evidence, placeholders, and public language.", description: "Upcube trust approach with conservative claim boundaries.", body, category: "trust" }}
      backHref="/trust" backLabel="Back to Trust" />
  );
}
