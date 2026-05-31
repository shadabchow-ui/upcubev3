import { MarketingPage } from "components/upcube-portal/marketing-page";
import { learnPageContent } from "lib/upcube-portal/marketing-pages";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({ title: "Upcube Learn | Education, Books, and Quantum", description: "Upcube Learn brings together education, books, and quantum computing.", path: "/learn" });

export default function LearnRoute() { return <MarketingPage content={learnPageContent} />; }
