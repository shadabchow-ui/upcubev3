import type { Metadata } from "next";
import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { buildCanonicalUrl, upcubeSiteName } from "lib/upcube-seo/metadata";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | UpcubeAI" },
  description: "Terms of Service for UpcubeAI websites, products, and services.",
  alternates: { canonical: buildCanonicalUrl("/terms") },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Terms of Service | UpcubeAI",
    description: "Terms of Service for UpcubeAI websites, products, and services.",
    url: buildCanonicalUrl("/terms"),
    siteName: upcubeSiteName,
    type: "website",
  },
};

export default function TermsOfServiceRoutePage() {
  const body = getBodyForRoute("/legal/terms");
  return (
    <LongformPage entry={{ slug: "terms-of-service", order: 99, title: "Terms of Service", subtitle: "Welcome to UpcubeAI", description: "These Terms of Service describe the rules that apply.", body, category: "trust" }}
      backHref="/legal" backLabel="Back to Legal" />
  );
}
