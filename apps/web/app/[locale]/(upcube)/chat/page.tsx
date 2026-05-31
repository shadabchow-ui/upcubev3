import { ChatPage } from "components/upcube-portal/chat-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({ title: "UpcubeAI Chat", description: "UpcubeAI Chat product overview page.", path: "/chat" });

export default function Page() { return <ChatPage />; }
