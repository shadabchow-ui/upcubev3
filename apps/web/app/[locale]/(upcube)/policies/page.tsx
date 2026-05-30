import type { Metadata } from "next";
import { LongformIndexPage } from "components/upcube-portal/longform-index-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Policies | Upcube",
  description: "Policy index for Upcube products and websites.",
  path: "/policies",
});

export default function PoliciesRoutePage() {
  return <LongformIndexPage />;
}
