import type { Metadata } from "next";
import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { buildCanonicalUrl, DEFAULT_SITE_TITLE, upcubeSiteName } from "lib/upcube-seo/metadata";

export const metadata: Metadata = {
  title: { absolute: "Privacy Notice | UpcubeAI" },
  description: "Draft privacy policy for UpcubeAI pending reviewed legal text.",
  alternates: { canonical: buildCanonicalUrl("/privacy") },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Privacy Notice | UpcubeAI",
    description: "Draft privacy policy for UpcubeAI pending reviewed legal text.",
    url: buildCanonicalUrl("/privacy"),
    siteName: upcubeSiteName,
    type: "website",
  },
};

export default function PrivacyPolicyRoutePage() {
  const body = getBodyForRoute("/legal/privacy");
  return (
    <LongformPage entry={{ slug: "privacy-policy", order: 99, title: "Privacy Notice", subtitle: "", description: "UpcubeAI privacy policy covering data collection, use, and protection.", body, category: "trust" }}
      backHref="/legal" backLabel="Back to Legal" />
  );
}
