import type { Metadata } from "next";
import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { ethenCategories } from "lib/ethen-agents/categories";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";
import { UPCUBE_CHAT_URL } from "lib/upcube-universal/product-links";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Ethen — AI Agent Marketplace | Upcube",
  description:
    "Ethen is Upcube's flagship product: a premium AI agent marketplace where you discover and use specialized agents for productivity, writing, research, coding, business, and more.",
  path: "/ethen",
});

const valuePoints = [
  {
    heading: "Browse by category",
    body: "Ethen organizes every agent into a clear category so you can find the right one fast — no guessing, no clutter.",
  },
  {
    heading: "Agents built for real work",
    body: "Each category covers a specific type of work: writing, research, coding, business, finance, travel, and more.",
  },
  {
    heading: "Marketplace that grows",
    body: "New specialized agents are added to Ethen over time. Categories stay stable. Your workflow does not break.",
  },
];

export default function EthenPage() {
  return (
    <PortalShell>
      <PortalHeader />
      <main className="uc-main">
        <section className="uc-section uc-hero-section">
          <div className="uc-shell uc-hero-copy">
            <p className="uc-eyebrow">Upcube flagship product</p>
            <h1 className="uc-hero-title">Ethen</h1>
            <p className="uc-hero-lead">
              A premium AI agent marketplace where you discover and use
              specialized agents for real-world work. Browse by category, find
              the right agent, and get things done.
            </p>
            <div className="uc-hero-actions">
              <a className="uc-button-primary" href={UPCUBE_CHAT_URL}>
                Open Ethen
              </a>
              <Link className="uc-button-secondary" href="/ethen/agents">
                Browse categories
              </Link>
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell uc-content-stack">
            <hgroup className="uc-section-heading">
              <p className="uc-eyebrow">How it works</p>
              <h2 className="uc-section-title">Category-first, agent-powered</h2>
              <p className="uc-section-description">
                Ethen is organized around the work you want to do — not the
                technology underneath. Pick a category. Use the agent. Get the
                result.
              </p>
            </hgroup>
            <div className="uc-grid uc-card-grid">
              {valuePoints.map((point) => (
                <article key={point.heading} className="uc-card">
                  <h3 className="uc-card-title">{point.heading}</h3>
                  <p className="uc-card-copy">{point.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell uc-content-stack">
            <hgroup className="uc-section-heading">
              <p className="uc-eyebrow">Agent categories</p>
              <h2 className="uc-section-title">Every category in Ethen</h2>
              <p className="uc-section-description">
                {ethenCategories.length} categories covering the full range of
                work people do every day.
              </p>
            </hgroup>
            <div className="uc-hero-actions">
              <Link className="uc-button-primary" href="/ethen/agents">
                Browse all categories
              </Link>
              <a className="uc-button-secondary" href={UPCUBE_CHAT_URL}>
                Open Ethen
              </a>
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell uc-content-stack">
            <hgroup className="uc-section-heading">
              <p className="uc-eyebrow">Built by Upcube</p>
              <h2 className="uc-section-title">Upcube builds Ethen</h2>
              <p className="uc-section-description">
                Upcube is the company. Ethen is the product. The mission is to
                make specialized AI agents accessible, organized, and useful for
                the work people actually do.
              </p>
            </hgroup>
            <div className="uc-hero-actions">
              <Link className="uc-button-secondary" href="/company">
                About Upcube
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
