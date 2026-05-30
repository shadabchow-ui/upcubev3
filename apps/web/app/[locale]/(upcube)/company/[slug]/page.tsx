import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

const pages: Record<string, { title: string; route: string; backHref: string; backLabel: string; description: string; subtitle: string }> = {
  about: { title: "About", route: "/company/about", backHref: "/company", backLabel: "Back to Company", description: "About Upcube and its connected product ecosystem.", subtitle: "" },
};

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const entry = pages[params.slug];
  if (!entry) return createBasicPageMetadata({ title: "Company | Upcube", path: `/company/${params.slug}` });
  return createBasicPageMetadata({ title: `${entry.title} | Upcube`, description: entry.description, path: `/company/${params.slug}` });
}

export default async function CompanySlugPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const entry = pages[params.slug];
  if (!entry) notFound();
  const body = getBodyForRoute(entry.route);
  return (
    <LongformPage entry={{ slug: params.slug, order: 99, title: entry.title, subtitle: entry.subtitle, description: entry.description, body, category: "company" }}
      backHref={entry.backHref} backLabel={entry.backLabel} />
  );
}
