import Link from "next/link";
import Image from "next/image";
import {
  homeCapabilityPoints,
} from "lib/upcube-home/content";
import { ecosystemGroups } from "lib/upcube-universal/product-links";
import {
  portalHomepageCards,
  productScaleStats,
} from "lib/upcube-portal/content";
import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { HeroChatPanel } from "components/upcube-home/hero-chat-panel";
import { UPCUBE_CHAT_URL } from "lib/upcube-universal/product-links";

const audienceSolutions = [
  { title: "Creators", description: "AI tools for content creation, media workflows, and production.", href: "/explore" },
  { title: "Students", description: "Learning paths, courses, and research tools for academic work.", href: "/learn" },
  { title: "Founders", description: "Cloud infrastructure, compute, and builder tools for startups.", href: "/build" },
  { title: "Developers", description: "APIs, SDKs, documentation, and platform extensibility.", href: "/developers" },
  { title: "Small businesses", description: "Commerce, operations, and growth tools for teams.", href: "/business" },
  { title: "Job seekers", description: "Career discovery, opportunity workflows, and job search.", href: "/products/jobs" },
];

const categoryCardArtFiles = [
  "050b0e5fb4bd48bbb2c6a91baa3afc40_sw-2962_sh-2191.webp",
  "065d0e64a3514880bf2398126d0bcdca_sw-3815_sh-2501.webp",
  "19487.webp",
  "1998-Despues-de-Montanas-y-Mar-.webp",
  "42333816071_33313e0909_b.jpg",
  "a32ca26a50a12c330df049b8b402b6a8.jpg",
  "C-1-2016-024-Alien-Copy.jpeg",
  "COMPOSITION-VII.jpg",
  "Composition.jpg",
  "FAA_Rhythm.jpg",
  "FAA_starrry_night.jpg",
  "piet_mondrian_2_tableau_i.jpg",
  "Senecio.jpeg",
];

export default function UpcubeHomePage() {
  return (
    <div className="uc-home">
      <PortalHeader />
      <main>
        <section className="uc-home__hero">
          <div className="uc-home__container uc-home__hero-inner">
            <div className="uc-home__hero-stack">
              <h1 className="uc-home__hero-title">
                Welcome to the UpCube Agentic Era
              </h1>
              <HeroChatPanel />
              <div className="uc-home__hero-actions">
                <Link href="https://console.upcube.ai" className="uc-home__ghost-btn">
                  Console
                </Link>
                <Link href="/products" className="uc-home__ghost-btn">
                  Explore Products
                </Link>
                <Link href={UPCUBE_CHAT_URL} className="uc-home__primary-btn">
                  Try Ethen
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

        <section className="uc-home__section uc-home__section--bordered" aria-labelledby="categories-title">
          <div className="uc-home__container">
            <div className="uc-home__section-head-row">
              <h2 id="categories-title">Product categories</h2>
            </div>
            <div className="uc-home__categories-grid uc-home__grid--accent-outline">
              {ecosystemGroups.map((group, groupIndex) => (
                <article className="uc-home__category-card" key={group.id}>
                  <Image
                    src={`/product-art/${categoryCardArtFiles[groupIndex % categoryCardArtFiles.length]}`}
                    alt=""
                    width={640}
                    height={360}
                    className="uc-home__category-card-art"
                  />
                  <h3 className="uc-home__category-card-title">{group.title}</h3>
                  <div className="uc-home__category-products">
                    {group.items.filter((i) => i.productHref).map((item) => (
                      <Link
                        href={item.productHref!}
                        key={item.id}
                        className="uc-home__category-product-link"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-home__section uc-home__section--spotlight uc-home__section--bordered" aria-labelledby="spotlight-title">
          <div className="uc-home__container">
            <div className="uc-home__spotlight">
              <div className="uc-home__spotlight-content">
                <p className="uc-home__eyebrow">ETHEN AI</p>
                <h2 id="spotlight-title">Your AI workspace for everything.</h2>
                <p className="uc-home__spotlight-copy">
                  Chat, research, artifacts, and execution in one connected workspace. Ask questions, synthesize research, plan work, and move from idea to outcome.
                </p>
                <div className="uc-home__hero-actions">
                  <Link href={UPCUBE_CHAT_URL} className="uc-home__primary-btn">
                    Open Ethen
                  </Link>
                  <Link href="/products/upcube-ai" className="uc-home__ghost-btn">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="uc-home__section uc-home__section--bordered" aria-labelledby="products-title">
          <div className="uc-home__container">
            <div className="uc-home__section-head-row">
              <h2 id="products-title">Featured products</h2>
            </div>
            <div className="uc-home__portal-grid uc-home__grid--accent-outline">
              {portalHomepageCards.map((card) => (
                <Link
                  className="uc-home__portal-card"
                  href={card.href}
                  key={card.id}
                >
                  {card.tag ? <small className="uc-home__chip">{card.tag}</small> : null}
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <span className="uc-home__card-link">
                    {card.ctaLabel ?? "View details"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-home__section uc-home__section--bordered" aria-labelledby="audience-title">
          <div className="uc-home__container">
            <div className="uc-home__section-head-row">
              <h2 id="audience-title">Solutions by audience</h2>
            </div>
            <div className="uc-home__audience-grid uc-home__grid--accent-outline">
              {audienceSolutions.map((solution) => (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="uc-home__audience-card"
                >
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <span className="uc-home__card-link">Learn more</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-home__section uc-home__section--bordered" aria-labelledby="capabilities-title">
          <div className="uc-home__container">
            <div className="uc-home__section-head-row">
              <h2 id="capabilities-title">Ecosystem capabilities</h2>
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

        <section className="uc-home__section uc-home__section--cta uc-home__section--bordered" aria-labelledby="cta-title">
          <div className="uc-home__container">
            <div className="uc-home__cta-band">
              <h2 id="cta-title">Start with one console. Expand by outcomes.</h2>
              <p className="uc-home__cta-copy">
                Begin with Ethen for AI-powered work. Add cloud infrastructure when you build. Activate commerce when you sell. Every product connects. Every outcome compounds.
              </p>
              <div className="uc-home__hero-actions">
                <Link href="https://console.upcube.ai" className="uc-home__primary-btn">
                  Console
                </Link>
                <Link href="/products" className="uc-home__ghost-btn">
                  Explore Products
                </Link>
                <Link href={UPCUBE_CHAT_URL} className="uc-home__ghost-btn">
                  Try Ethen
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="uc-home__section uc-home__section--intent" aria-labelledby="intent-title">
          <div className="uc-home__container">
            <div className="uc-home__intent-strip">
              <Link href={UPCUBE_CHAT_URL} className="uc-home__intent-chip">Ask</Link>
              <Link href="/learn" className="uc-home__intent-chip">Learn</Link>
              <Link href="/products/research" className="uc-home__intent-chip">Research</Link>
              <Link href="/build" className="uc-home__intent-chip">Build</Link>
              <Link href="/products/shopping" className="uc-home__intent-chip">Sell</Link>
              <Link href="/products/cloud" className="uc-home__intent-chip">Deploy</Link>
              <Link href="/products/jobs" className="uc-home__intent-chip">Find jobs</Link>
              <Link href="/products/earth" className="uc-home__intent-chip">Explore Earth</Link>
            </div>
          </div>
        </section>
      </main>

      <PortalFooter />
    </div>
  );
}
