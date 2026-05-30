import type { Metadata } from "next";
import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({ title: "Organizations | Upcube", description: "How organizations can use Upcube products.", path: "/organizations" });

export default function OrganizationsRoutePage() {
  const body = getBodyForRoute("/organizations");
  return (
    <LongformPage entry={{ slug: "organizations", order: 99, title: "Organizations", subtitle: "", description: "How organizations can use Upcube products.", body, category: "trust" }}
      backHref="/" backLabel="Back to Home" />
  );
}
