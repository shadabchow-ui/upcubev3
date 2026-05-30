import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LongformPage } from "components/upcube-portal/longform-page";
import { researchLongformPages } from "lib/upcube-portal/longform-pages";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const entry = researchLongformPages.find((p) => p.slug === params.slug);
  if (!entry) return createBasicPageMetadata({ title: "Research | Upcube", path: `/research/${params.slug}` });
  return createBasicPageMetadata({ title: `${entry.title} | Upcube Research`, description: entry.description, path: `/research/${params.slug}` });
}

export default async function ResearchSlugPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const entry = researchLongformPages.find((p) => p.slug === params.slug);
  if (!entry) notFound();
  return (
    <LongformPage entry={entry} backHref="/research" backLabel="Back to Research" />
  );
}
