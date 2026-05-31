import { createI18nMiddleware } from "next-international/middleware";
import { createNEMO } from "@rescale/nemo";
import { parseError } from "@repo/observability/error";
import { secure } from "@repo/security";
import {
  noseconeOptions,
  noseconeOptionsWithToolbar,
  securityMiddleware,
} from "@repo/security/proxy";
import { type NextRequest, NextResponse } from "next/server";
import { env } from "@/env";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|ingest|favicon.ico|.*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};

const securityHeaders = env.FLAGS_SECRET
  ? securityMiddleware(noseconeOptionsWithToolbar)
  : securityMiddleware(noseconeOptions);

const arcjetMiddleware = async (request: NextRequest) => {
  if (!env.ARCJET_KEY) {
    return;
  }

  try {
    await secure(
      [
        "CATEGORY:SEARCH_ENGINE",
        "CATEGORY:PREVIEW",
        "CATEGORY:MONITOR",
      ],
      request,
    );
  } catch (error) {
    const message = parseError(error);
    return NextResponse.json({ error: message }, { status: 403 });
  }
};

const i18nMiddleware = createI18nMiddleware({
  locales: ["en", "es", "de", "zh", "fr", "pt"],
  defaultLocale: "en",
  urlMappingStrategy: "rewriteDefault",
});

const composedMiddleware = createNEMO(
  {},
  {
    before: [i18nMiddleware, arcjetMiddleware],
  },
);

export default async function middleware(
  request: NextRequest,
  event: unknown,
): Promise<Response | undefined> {
  const headersResponse = securityHeaders();
  const middlewareResponse = await composedMiddleware(request, event as any);
  return middlewareResponse || headersResponse;
}
