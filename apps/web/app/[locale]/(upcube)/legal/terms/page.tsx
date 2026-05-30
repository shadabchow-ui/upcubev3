import type { Metadata } from "next";
import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Terms | Upcube",
  description: "Terms of use for Upcube products.",
  path: "/legal/terms",
});

export default function LegalTermsRoute() {
  const body = getBodyForRoute("/legal/terms");
  return (
    <LongformPage entry={{ slug: "terms-of-use", order: 99, title: "Terms of Use", subtitle: "", description: "Terms of use for Upcube products.", body, category: "trust" }}
      backHref="/legal" backLabel="Back to Legal" />
  );
}
