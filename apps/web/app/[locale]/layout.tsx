import "./styles.css";
import { AnalyticsProvider } from "@repo/analytics/provider";
import { DesignSystemProvider } from "@repo/design-system";
import { fonts } from "@repo/design-system/lib/fonts";
import { cn } from "@repo/design-system/lib/utils";
import { Toolbar } from "@repo/feature-flags/components/toolbar";
import type { ReactNode } from "react";

interface RootLayoutProperties {
  readonly children: ReactNode;
  readonly params: Promise<{
    locale: string;
  }>;
}

const RootLayout = async ({ children, params }: RootLayoutProperties) => {
  const { locale } = await params;

  return (
  <html
    className={cn(fonts, "scroll-smooth")}
    lang={locale}
    suppressHydrationWarning
  >
    <body>
      <AnalyticsProvider>
        <DesignSystemProvider>
          {children}
        </DesignSystemProvider>
        <Toolbar />
      </AnalyticsProvider>
    </body>
  </html>
  );
};

export default RootLayout;
