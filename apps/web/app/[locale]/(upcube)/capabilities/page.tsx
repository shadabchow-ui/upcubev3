import { CapabilitiesPage } from "components/upcube-portal/capabilities-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({ title: "UpcubeAI Capabilities", description: "Capabilities overview for the current UpcubeAI workspace model.", path: "/capabilities" });

export default function CapabilitiesRoute() { return <CapabilitiesPage />; }
