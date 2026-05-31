import { MarketingPage } from "components/upcube-portal/marketing-page";
import { corePageContent } from "lib/upcube-portal/marketing-pages";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({ title: "Upcube Core | Shared Intelligence and Platform Layer", description: "Upcube Core brings together AI, workspace, identity, search, and project orchestration.", path: "/core" });

export default function CoreRoute() { return <MarketingPage content={corePageContent} />; }
