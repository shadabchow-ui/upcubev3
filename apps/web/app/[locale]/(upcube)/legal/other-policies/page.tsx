import type { Metadata } from "next";
import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Other Policies | Upcube",
  description: "Additional policies for Upcube products.",
  path: "/legal/other-policies",
});

export default function OtherPoliciesRoute() {
  const body = getBodyForRoute("/legal/other");
  return (
    <LongformPage entry={{ slug: "other-policies", order: 99, title: "Other Policies", subtitle: "", description: "Additional policies for Upcube products.", body, category: "trust" }}
      backHref="/legal" backLabel="Back to Legal" />
  );
}
