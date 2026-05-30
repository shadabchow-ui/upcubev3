import type { Metadata } from "next";
import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Privacy | Upcube",
  description: "Privacy policy for Upcube products.",
  path: "/legal/privacy",
});

export default function LegalPrivacyRoute() {
  const body = getBodyForRoute("/legal/privacy");
  return (
    <LongformPage entry={{ slug: "privacy", order: 99, title: "Privacy Notice", subtitle: "", description: "Upcube privacy policy.", body, category: "trust" }}
      backHref="/legal" backLabel="Back to Legal" />
  );
}
