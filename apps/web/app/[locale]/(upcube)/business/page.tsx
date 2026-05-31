import { BusinessPage } from "components/upcube-portal/business-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({ title: "UpcubeAI Business", description: "Business-facing overview for UpcubeAI workflows and connected app lanes.", path: "/business" });

export default function BusinessRoute() { return <BusinessPage />; }
