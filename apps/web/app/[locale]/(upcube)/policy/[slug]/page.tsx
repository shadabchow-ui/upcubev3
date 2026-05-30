import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

const routes: Record<string, string> = {
  "ai-principles": "/policy/ai-principles",
  "working-together": "/policy/working-together",
  "societal-impact": "/policy/societal-impact",
};

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  if (!routes[params.slug]) return createBasicPageMetadata({ title: "Policy | Upcube", path: `/policy/${params.slug}` });
  return createBasicPageMetadata({ title: `${params.slug.replace(/-/g, " ")} | Upcube`, path: `/policy/${params.slug}` });
}

export default async function PolicySlugPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const route = routes[params.slug];
  if (!route) notFound();
  const body = getBodyForRoute(route);
  return (
    <LongformPage entry={{ slug: params.slug, order: 99, title: params.slug.replace(/-/g, " "), subtitle: "", description: "Policy page for Upcube.", body, category: "trust" }}
      backHref="/policies" backLabel="Back to Policies" />
  );
}
