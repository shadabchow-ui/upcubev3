import "../[locale]/styles.css";
import { AnalyticsProvider } from "@repo/analytics/provider";
import { DesignSystemProvider } from "@repo/design-system";
import { fonts } from "@repo/design-system/lib/fonts";
import { cn } from "@repo/design-system/lib/utils";
import { Toolbar } from "@repo/feature-flags/components/toolbar";
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
  <html
    className={cn(fonts, "scroll-smooth")}
    lang="en"
    suppressHydrationWarning
  >
    <body>
      <AnalyticsProvider>
        <DesignSystemProvider>
          {children}
          <EthenTalk />
        </DesignSystemProvider>
        <Toolbar />
      </AnalyticsProvider>
    </body>
  </html>
);

export default UpcubeLayout;
