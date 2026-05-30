import type { Metadata } from "next";
import { LongformIndexPage } from "components/upcube-portal/longform-index-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Policy | Upcube",
  description: "Policy overview for Upcube products.",
  path: "/policy",
});

export default function PolicyRoutePage() {
  return <LongformIndexPage />;
}
