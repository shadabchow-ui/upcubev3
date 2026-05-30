import type { ReactNode } from "react";
import { EthenTalk } from "components/ethen-talk/ethen-talk";

import "app/styles/upcube-type-system.css";
import "app/styles/upcube-portal.css";
import "app/styles/upcube-universal-header.css";
import "app/styles/upcube-home.css";
import "app/styles/upcube-home-hero-override.css";
import "app/styles/upcube-news.css";
import "app/styles/upcube-longform.css";
import "app/styles/upcube-account.css";
import "app/styles/ethen-talk.css";

interface UpcubeLayoutProperties {
  readonly children: ReactNode;
}

const UpcubeLayout = ({ children }: UpcubeLayoutProperties) => (
  <>
    {children}
    <EthenTalk />
  </>
);

export default UpcubeLayout;
