import { MarketingPage } from "components/upcube-portal/marketing-page";
import { buildPageContent } from "lib/upcube-portal/marketing-pages";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({ title: "Upcube Build | Cloud, Compute, and Platform Tools", description: "Upcube Build covers cloud infrastructure, compute, operating systems, and voice platform.", path: "/build" });

export default function BuildRoute() { return <MarketingPage content={buildPageContent} />; }
