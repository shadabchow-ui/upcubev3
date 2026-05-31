import { VisionPage } from "components/upcube-portal/vision-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({ title: "Vision | UpcubeAI", description: "Current UpcubeAI vision and product direction for the portal ecosystem.", path: "/vision" });

export default function VisionRoutePage() { return <VisionPage />; }
