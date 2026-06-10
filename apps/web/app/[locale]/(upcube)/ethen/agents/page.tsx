import type { Metadata } from "next";
import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { ethenCategories } from "lib/ethen-agents/categories";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";
import { UPCUBE_CHAT_URL } from "lib/upcube-universal/product-links";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Ethen Agent Categories — Browse by Work Type | Upcube",
  description:
    "Browse Ethen's agent categories by what you want to accomplish: productivity, writing, research, coding, business, finance, real estate, travel, education, media, documents, developer tools, data analysis, and local services.",
  path: "/ethen/agents",
});

export default function EthenAgentsPage() {
  return (
    <PortalShell>
      <PortalHeader />
      <main className="uc-main">
        <section className="uc-section uc-hero-section">
          <div className="uc-shell uc-hero-copy">
            <p className="uc-eyebrow">
              <Link href="/ethen" className="uc-nav-link">
                Ethen
              </Link>
              {" / "}
              Agents
            </p>
            <h1 className="uc-hero-title">Browse agent categories</h1>
            <p className="uc-hero-lead">
              Every Ethen agent belongs to a category. Start with what you want
              to accomplish — writing, research, coding, finance, travel, and
              more. Specific agents are added continuously as the marketplace
              grows.
            </p>
            <div className="uc-hero-actions">
              <a className="uc-button-primary" href={UPCUBE_CHAT_URL}>
                Open Ethen
              </a>
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell uc-content-stack">
            <hgroup className="uc-section-heading">
              <p className="uc-eyebrow">Agent marketplace</p>
              <h2 className="uc-section-title">
                {ethenCategories.length} categories
              </h2>
              <p className="uc-section-description">
                Choose a category to explore agents built for that type of work.
              </p>
            </hgroup>
            <div className="uc-grid uc-card-grid">
              {ethenCategories.map((category) => (
                <article key={category.id} className="uc-card" id={category.id}>
                  <p className="uc-eyebrow">{category.status}</p>
                  <h3 className="uc-card-title">{category.name}</h3>
                  <p className="uc-card-copy">{category.description}</p>
                  <a className="uc-nav-link" href={UPCUBE_CHAT_URL}>
                    Explore in Ethen
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell uc-content-stack">
            <hgroup className="uc-section-heading">
              <p className="uc-eyebrow">Built by Upcube</p>
              <h2 className="uc-section-title">The Ethen marketplace</h2>
              <p className="uc-section-description">
                Ethen is built by Upcube. New categories and agents are added
                over time. The goal is simple: every type of real work should
                have an agent for it.
              </p>
            </hgroup>
            <div className="uc-hero-actions">
              <a className="uc-button-primary" href={UPCUBE_CHAT_URL}>
                Open Ethen
              </a>
              <Link className="uc-button-secondary" href="/ethen">
                About Ethen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
