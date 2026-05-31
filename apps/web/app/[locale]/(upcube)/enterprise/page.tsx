import { EnterprisePage } from "components/upcube-portal/enterprise-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({ title: "UpcubeAI Enterprise", description: "Enterprise workflow overview for UpcubeAI and connected app destinations.", path: "/enterprise" });

export default function EnterpriseRoute() { return <EnterprisePage />; }
