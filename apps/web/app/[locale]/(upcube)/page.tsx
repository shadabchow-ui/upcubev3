import { JsonLd } from "components/upcube-seo/json-ld";
import UpcubeHomePage from "components/upcube-home/home-page";
import {
  portalHomepageCards,
  upcubeCompanyIdentity,
} from "lib/upcube-portal/content";
import {
  createItemListJsonLd,
  createOrganizationJsonLd,
  createWebSiteJsonLd,
} from "lib/upcube-seo/jsonld";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcube | AI Cloud Console — Build, Learn, Sell, and Launch",
  description:
    "Build, learn, sell, and launch from one AI cloud console. Upcube unifies AI workflows for learning, research, building, selling, and deployment in one calm, connected console experience.",
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          createOrganizationJsonLd(upcubeCompanyIdentity),
          createWebSiteJsonLd(),
          createItemListJsonLd(portalHomepageCards, "/"),
        ]}
      />
      <UpcubeHomePage />
    </>
  );
}
