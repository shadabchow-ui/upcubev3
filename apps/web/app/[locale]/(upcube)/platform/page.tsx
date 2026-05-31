import { PlatformPage } from "components/upcube-portal/platform-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({ title: "UpcubeAI Platform", description: "Platform overview for the current UpcubeAI portal and app model.", path: "/platform" });

export default function PlatformRoute() { return <PlatformPage />; }
