import { FaqPage } from "components/upcube-portal/faq-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({ title: "UpcubeAI FAQ", description: "FAQ for the UpcubeAI portal explaining current scope, placeholders, and trust-related implementation boundaries.", path: "/faq" });

export default function FaqRoute() { return <FaqPage />; }
