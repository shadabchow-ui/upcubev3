import { TextPage } from "components/upcube-portal/text-page";
import { pricingSections } from "lib/upcube-portal/content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({ title: "Pricing | UpcubeAI", description: "Availability and pricing status page.", path: "/pricing" });

export default function PricingRoutePage() {
  return (
    <TextPage eyebrow="Pricing" title="Pricing and availability" description="Public pricing tiers are not provided in this repository." sections={pricingSections}
      ctas={[{ label: "Open apps", href: "/apps" }, { label: "Contact", href: "/contact" }]} />
  );
}
