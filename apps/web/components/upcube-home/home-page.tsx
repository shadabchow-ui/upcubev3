import Link from "next/link";
import { homeCapabilityPoints } from "lib/upcube-home/content";
import { ethenCategories } from "lib/ethen-agents/categories";
import {
  productScaleStats,
} from "lib/upcube-portal/content";
import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { HeroChatPanel } from "components/upcube-home/hero-chat-panel";
import { UPCUBE_CHAT_URL } from "lib/upcube-universal/product-links";

export default function UpcubeHomePage() {
  return (
    <div className="uc-home">
      <PortalHeader />
      <main>
        <section className="uc-home__hero">
          <div className="uc-home__container uc-home__hero-inner">
            <div className="uc-home__hero-stack">
              <p className="uc-home__eyebrow">UPCUBE BUILDS ETHEN</p>
              <h1 className="uc-home__hero-title">
                An AI agent marketplace for real-world work.
              </h1>
              <HeroChatPanel />
              <div className="uc-home__hero-actions">
                <Link href={UPCUBE_CHAT_URL} className="uc-home__primary-btn">
                  Try Ethen free
                </Link>
                <Link href="/ethen/agents" className="uc-home__ghost-btn">
                  Browse categories
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="uc-home__section uc-home__section--bordered">
          <div className="uc-home__container">
            <div className="uc-home__stats-band">
              {productScaleStats.map((stat) => (
                <article className="uc-home__stat-item" key={stat.id}>
                  <p className="uc-home__stat-value">{stat.value}</p>
                  <p className="uc-home__stat-label">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-home__section uc-home__section--spotlight uc-home__section--bordered" aria-labelledby="spotlight-title">
          <div className="uc-home__container">
            <div className="uc-home__spotlight">
              <div className="uc-home__spotlight-content">
                <p className="uc-home__eyebrow">MEET ETHEN</p>
                <h2 id="spotlight-title">Specialized AI agents for every category of real work.</h2>
                <p className="uc-home__spotlight-copy">
                  Ethen is a premium AI agent marketplace built by Upcube. Search, write, analyze, plan, compare, create, learn, and decide — with agents purpose-built for your category of work.
                </p>
                <div className="uc-home__hero-actions">
                  <Link href={UPCUBE_CHAT_URL} className="uc-home__primary-btn">
                    Open Ethen
                  </Link>
                  <Link href="/ethen" className="uc-home__ghost-btn">
                    About Ethen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="uc-home__section uc-home__section--bordered" aria-labelledby="categories-title">
          <div className="uc-home__container">
            <div className="uc-home__section-head-row">
              <h2 id="categories-title">Explore agent categories</h2>
              <p className="uc-home__section-sub">Browse Ethen by the type of work you want to get done.</p>
            </div>
            <div className="uc-home__intent-strip">
              {ethenCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={UPCUBE_CHAT_URL}
                  className="uc-home__intent-chip"
                  title={cat.description}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-home__section uc-home__section--bordered" aria-labelledby="capabilities-title">
          <div className="uc-home__container">
            <div className="uc-home__section-head-row">
              <h2 id="capabilities-title">Built for real-world work</h2>
            </div>
            <div className="uc-home__proof-grid uc-home__grid--accent-outline">
              {homeCapabilityPoints.map((item) => (
                <article className="uc-home__proof-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="uc-home__inline-links">
                    {item.links.map((link) => (
                      <Link href={link.href} key={link.href}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-home__section uc-home__section--bordered" aria-labelledby="featured-categories-title">
          <div className="uc-home__container">
            <div className="uc-home__section-head-row">
              <h2 id="featured-categories-title">Start with a category</h2>
              <p className="uc-home__section-sub">Pick a category of work. Ethen finds the right agent for it.</p>
            </div>
            <div className="uc-home__portal-grid uc-home__grid--accent-outline">
              {ethenCategories.slice(1, 5).map((cat) => (
                <a
                  className="uc-home__portal-card"
                  href={UPCUBE_CHAT_URL}
                  key={cat.id}
                >
                  <small className="uc-home__chip">{cat.status}</small>
                  <h3>{cat.name}</h3>
                  <p>{cat.description}</p>
                  <span className="uc-home__card-link">Browse in Ethen</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-home__section uc-home__section--cta uc-home__section--bordered" aria-labelledby="cta-title">
          <div className="uc-home__container">
            <div className="uc-home__cta-band">
              <p className="uc-home__eyebrow">UPCUBE</p>
              <h2 id="cta-title">We build Ethen so you can get real work done.</h2>
              <p className="uc-home__cta-copy">
                Upcube is the company. Ethen is the flagship product — a premium AI agent marketplace for people who want to search, write, analyze, plan, compare, create, learn, decide, and get real work done.
              </p>
              <div className="uc-home__hero-actions">
                <Link href={UPCUBE_CHAT_URL} className="uc-home__primary-btn">
                  Try Ethen free
                </Link>
                <Link href="/ethen/agents" className="uc-home__ghost-btn">
                  Browse all categories
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PortalFooter />
    </div>
  );
}
