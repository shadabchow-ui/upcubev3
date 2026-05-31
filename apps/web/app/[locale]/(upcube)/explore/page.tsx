import { ExplorePage } from "components/upcube-portal/explore-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({ title: "UpcubeAI Explore", description: "Explore UpcubeAI portal destinations and connected app workflows.", path: "/explore" });

export default function ExploreRoute() { return <ExplorePage />; }
