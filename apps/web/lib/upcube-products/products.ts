import { UPCUBE_QUANTUM_URL } from "lib/upcube-universal/product-links";

export type UpcubeProductSlug =
  | "upcube-ai"
  | "avatar"
  | "books"
  | "earth"
  | "games"
  | "news"
  | "jobs"
  | "cloud"
  | "quantum"
  | "research"
  | "robotics"
  | "ventari"
  | "vm"
  | "upcube-os"
  | "upcube-mobile-os"
  | "voice"
  | "university";

export type ProductAction = {
  label: string;
  href: string;
};

export type ProductCard = {
  title: string;
  body: string;
};

export type ProductLinkCard = ProductCard & {
  href: string;
};

export type UpcubeProduct = {
  slug: UpcubeProductSlug;
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  seoTitle?: string;
  seoDescription?: string;
  primaryAction: ProductAction;
  secondaryAction: ProductAction;
  heroHighlights: string[];
  heroImage?: { src: string; alt: string };
  availabilityNote?: string;
  signatureTitle: string;
  signatureBody: string;
  signatureCards: ProductCard[];
  featureStories: ProductCard[];
  techCards: ProductCard[];
  useCases: ProductCard[];
  ecosystemLinks: ProductLinkCard[];
  finalCtaTitle: string;
  finalCtaBody: string;
  finalPrimaryAction: ProductAction;
  finalSecondaryAction: ProductAction;
};

export const upcubeProducts: UpcubeProduct[] = [
  {
    slug: "upcube-ai",
    name: "Upcube Ethen",
    eyebrow: "Upcube Ethen",
    headline: "The AI workspace built for serious work.",
    summary:
      "Upcube Ethen combines a streaming AI assistant with a governed platform for retrieval-grounded answers, durable artifacts, risk-tiered tool execution, and human-in-the-loop approvals across web, CLI, desktop, mobile, and IDE surfaces.",
    seoTitle:
      "Upcube Ethen | Governed AI Workspace with Artifacts and Human Approvals",
    seoDescription:
      "Upcube Ethen is an AI workspace platform combining a streaming AI assistant, retrieval-grounded answers, durable artifacts, risk-tiered tool governance, and human-in-the-loop approvals across web, CLI, desktop, mobile, and IDE surfaces.",
    primaryAction: {
      label: "Launch UpcubeAI",
      href: "https://ethen.upcube.ai",
    },
    secondaryAction: {
      label: "See research",
      href: "/research",
    },
    heroHighlights: [
      "Ethen routes every inference through a controlled gateway so every call is logged, policy-checked, and auditable.",
      "Artifacts are typed, versioned work products you can return to, refine, and export.",
      "Tier 3 tool actions require explicit human approval before they execute.",
    ],
    heroImage: {
      src: "/product-art/050b0e5fb4bd48bbb2c6a91baa3afc40_sw-2962_sh-2191.webp",
      alt: "Abstract modern composition representing AI-powered work.",
    },
    signatureTitle:
      "One workspace for thinking through the work and moving it forward.",
    signatureBody:
      "Upcube Ethen is for people who need more than a chat transcript. It gives every conversation a structured workspace around it, keeping context, retrieval sources, tools, citations, and outputs together in one place instead of scattered across sessions and tabs.",
    signatureCards: [
      {
        title: "Retrieval-grounded answers",
        body: "Ethen pulls from trusted retrieval sources before answering. Citations appear inline. Route evidence and retrieval status are part of the telemetry record so you always know whether an answer is grounded or generated from model knowledge alone.",
      },
      {
        title: "Durable artifacts",
        body: "When Ethen produces something worth keeping, it becomes a named artifact with its own lifecycle. Artifacts are versioned, typed, and stored alongside the conversation. Supported types include markdown, code, HTML, JSON, and plain text.",
      },
      {
        title: "Human-in-the-loop approvals",
        body: "The tool registry defines every available tool, its risk tier, and its approval requirement. Low-risk actions run automatically. File writes and other Tier 3 actions require an explicit approval step that is visible, deliberate, and logged.",
      },
    ],
    featureStories: [
      {
        title: "Gateway-first model routing",
        body: "All inference routes through a controlled gateway. The gateway resolves tenant context, checks policy, selects the provider and model, and emits route evidence as part of the telemetry record. Product surfaces never call model providers directly.",
      },
      {
        title: "Policy-first execution",
        body: "Before any inference or tool call executes, it passes through a policy layer. Risky or out-of-scope actions fail closed rather than proceeding silently when policy is unavailable.",
      },
      {
        title: "Multi-surface continuity",
        body: "Upcube Ethen is not a single-surface product. The web workspace is primary, but the platform is designed for continuity across a CLI that plans before it executes, a desktop client with scoped file access, a mobile companion for approvals, and an IDE with diff-first editing.",
      },
    ],
    techCards: [
      {
        title: "Streaming chat runtime",
        body: "The chat runtime emits typed Server-Sent Events for stream start, token deltas, citations, artifact creation, audit metadata, telemetry, and eval traces. Responses arrive progressively so the experience feels immediate without sacrificing reviewability.",
      },
      {
        title: "Telemetry, audit, and eval traces",
        body: "Every session emits structured telemetry covering route evidence, provider and model selection, time to first token, token estimates, retrieval status, citation counts, audit events, and groundedness status.",
      },
      {
        title: "Risk-tiered tool registry",
        body: "The seed tool registry defines web search and document retrieval as Tier 1, code execution as Tier 2, and file writes as Tier 3 requiring approval. The registry is the contract. The platform enforces it.",
      },
    ],
    useCases: [
      {
        title: "Turn a rough idea into a structured plan",
        body: "Start with something unclear. Ask Ethen to help shape it into open questions, dependencies, and next actions. The original context stays in the workspace. The artifact stays accessible for the next session.",
      },
      {
        title: "Research a topic and produce something from it",
        body: "Pull grounded context from trusted retrieval sources. Synthesize what matters. Ask Ethen to turn the synthesis into a document, a structured brief, or a draft you can hand off. Citations are inline and the artifact is exportable.",
      },
      {
        title: "Run a governed automation with confidence",
        body: "Define a task involving file access, web tools, or multi-step execution. Review the proposed plan before anything executes. Approve the actions that require human sign-off. The audit log records every decision.",
      },
    ],
    ecosystemLinks: [
      {
        title: "Upcube Books",
        body: "Carry reading, previews, and saved discovery paths into the same connected ecosystem.",
        href: "/products/books",
      },
      {
        title: "Upcube Planet",
        body: "Continue into 3D globe exploration, place search, and map-driven context.",
        href: "/products/earth",
      },
      {
        title: "Upcube Cloud",
        body: "Move from product work into developer tools, cloud workflows, and compute paths.",
        href: "/products/cloud",
      },
    ],
    finalCtaTitle: "Start with a question. End with something you can ship.",
    finalCtaBody:
      "Upcube Ethen is an AI workspace for people who need real outputs. Governed tools. Retrieval-grounded answers. Durable artifacts. Human approvals where they matter. A platform designed from the start to be trustworthy.",
    finalPrimaryAction: {
      label: "Open UpcubeAI",
      href: "https://ethen.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Explore products",
      href: "/explore",
    },
  },
  {
    slug: "avatar",
    name: "Upcube Avatar Cloud",
    eyebrow: "AI Avatars",
    headline: "AI avatars that speak, listen, and guide.",
    summary:
      "Upcube Avatar Cloud is a platform for creating and deploying AI avatars for websites, training, sales, education, support, and creators. Live avatars, studio video, interactive pages, and a developer API — fully managed.",
    seoTitle: "Upcube Avatar Cloud | AI Avatar Platform",
    seoDescription:
      "Upcube Avatar Cloud is an AI avatar platform for deploying conversational avatars, studio-generated avatar videos, interactive pages, and avatar API integrations.",
    primaryAction: {
      label: "Try Avatar",
      href: "https://avatar.upcube.ai",
    },
    secondaryAction: {
      label: "Explore UpcubeAI",
      href: "/products/upcube-ai",
    },
    heroHighlights: [
      "Deploy real-time conversational avatars on your website in minutes.",
      "Turn scripts, docs, and URLs into avatar-led videos with Studio.",
      "Interactive pages, embed SDK, and Avatar API for custom integrations.",
    ],
    heroImage: {
      src: "/product-art/050b0e5fb4bd48bbb2c6a91baa3afc40_sw-2962_sh-2191.webp",
      alt: "Abstract composition representing AI avatar interaction.",
    },
    availabilityNote:
      "Upcube Avatar Cloud is in active development. Live Avatar (Ethen) is functional with chat and TTS. Studio, Interactive Pages, and the full platform are in preview.",
    signatureTitle: "One platform for deploying AI avatars anywhere.",
    signatureBody:
      "Upcube Avatar Cloud brings live conversational avatars, studio-generated video, interactive pages, and a developer API into one managed platform. Deploy avatars that talk, listen, and guide — on your website, in training, for sales, and in support.",
    signatureCards: [
      {
        title: "Live Avatar",
        body: "Deploy real-time conversational avatars on your website. Visitors can talk to an AI avatar that answers questions, qualifies leads, books meetings, and hands off to your team.",
      },
      {
        title: "Studio",
        body: "Turn scripts, PDFs, URLs, and blog posts into avatar-led videos. Script-to-scene editor, captions, transcript, and hosted video pages — no recording required.",
      },
      {
        title: "Interactive Pages",
        body: "Each video becomes an interactive page with transcript, quiz, live avatar Q&A, lead capture, and analytics. Passive viewing becomes active engagement.",
      },
    ],
    featureStories: [
      {
        title: "Avatar API for custom integrations",
        body: "Personas, sessions, streaming, webhooks, and an embed SDK let you integrate AI avatars into your own products and platforms.",
      },
      {
        title: "Responsible by design",
        body: "Consent records, identity verification, data retention controls, and audit logs are built into the platform from the start. Moderation and governance are part of the architecture.",
      },
      {
        title: "Preview-first development",
        body: "The platform is in active development with a clear preview status. Ethen is functional today; Studio, Interactive Pages, and the full API surface are evolving toward production readiness.",
      },
    ],
    techCards: [
      {
        title: "Real-time conversational avatars",
        body: "Deploy avatars that use text chat and TTS voice. Visitors interact naturally without needing to install or configure anything.",
      },
      {
        title: "Studio video generation pipeline",
        body: "Script-to-scene, document-to-video, and URL-to-video workflows turn existing content into avatar-led video assets.",
      },
      {
        title: "Embed SDK and API",
        body: "Session tokens, webhooks, persona configuration, and streaming support give developers full control over avatar deployment and behavior.",
      },
    ],
    useCases: [
      {
        title: "Website Concierge",
        body: "Greet visitors, answer questions, qualify leads, and book meetings with a live AI avatar on your site.",
      },
      {
        title: "AI Sales Agent",
        body: "Engage prospects, explain products, handle objections, and route hot leads to your team.",
      },
      {
        title: "Training Coach",
        body: "Deliver interactive training, quiz learners, and track completion through avatar-led sessions.",
      },
      {
        title: "Product Demos",
        body: "Showcase your product with a live avatar that answers buyer questions in real time.",
      },
      {
        title: "Support Agent",
        body: "Resolve common issues, guide users through troubleshooting, and escalate to humans.",
      },
      {
        title: "Ecommerce Assistant",
        body: "Recommend products, compare options, and help shoppers find what they need.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Connect avatar interactions to the broader AI workspace and assistant platform.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Voice",
        body: "Explore the voice platform direction that powers avatar speech and real-time conversation.",
        href: "/products/voice",
      },
      {
        title: "Upcube Research",
        body: "See how research, synthesis, and briefs feed into avatar knowledge and responses.",
        href: "/products/research",
      },
    ],
    finalCtaTitle:
      "Deploy AI avatars that feel alive from the first interaction.",
    finalCtaBody:
      "Upcube Avatar Cloud is in active development. Live Ethen avatars are functional today. Studio, Interactive Pages, and the full platform are evolving toward production readiness.",
    finalPrimaryAction: {
      label: "Try Avatar",
      href: "https://avatar.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Explore the ecosystem",
      href: "/explore",
    },
  },
  {
    slug: "books",
    name: "Upcube Books",
    eyebrow: "Reading and discovery",
    headline: "Explore 50M books with a calmer path to discovery.",
    summary:
      "Upcube Books makes book discovery feel focused, trusted, and worth returning to. Search across 50M titles with cleaner book pages, trusted previews, saved books, public-domain reading lanes, and an AI-assisted reading direction designed around lawful access and reader trust.",
    seoTitle: "Upcube Books | 50M Books — Discovery and AI Reading Platform",
    seoDescription:
      "Upcube Books is a book discovery platform across 50M titles for previews, saved reading paths, lawful access, and future reading guidance.",
    primaryAction: {
      label: "Launch Upcube Books",
      href: "https://books.upcube.ai",
    },
    secondaryAction: {
      label: "Browse the ecosystem",
      href: "/explore",
    },
    heroHighlights: [
      "Explore 50M books with fast search and cleaner detail pages.",
      "Open trusted previews instead of dead-end metadata.",
      "Save books locally so discovery feels persistent without requiring an account.",
    ],
    heroImage: {
      src: "/product-art/1998-Despues-de-Montanas-y-Mar-.webp",
      alt: "Color-rich abstract painting for Upcube Books discovery.",
    },
    signatureTitle: "Book discovery that feels curated, not crowded.",
    signatureBody:
      "Upcube Books is built for the moment before commitment — when you are comparing titles, opening previews, saving possibilities, and finding something worth coming back to.",
    signatureCards: [
      {
        title: "Discovery with momentum",
        body: "Browse titles, covers, descriptions, and metadata in a way that keeps the next useful action close.",
      },
      {
        title: "Trusted previews",
        body: "Preview paths lead readers to legal, provider-backed destinations, keeping discovery useful without blurring copyright boundaries.",
      },
      {
        title: "Saved books that stay close",
        body: "Browser-local saves make it easy to build a shortlist, return to titles, and keep reading intent alive.",
      },
    ],
    featureStories: [
      {
        title: "Rich book pages built for real comparison",
        body: "Upcube Books brings together metadata, covers, descriptions, and preview links so readers can decide whether a book deserves more time.",
      },
      {
        title: "Public-domain lanes with clearer rights boundaries",
        body: "When public-domain access is available, Upcube Books can create a more direct reading path while keeping copyrighted works preview- and provider-linked.",
      },
      {
        title: "AI-assisted reading, introduced carefully",
        body: "The long-term direction includes reading guidance, summaries, study help, and research workflows — but the foundation begins with strong discovery, lawful access, and trust.",
      },
    ],
    techCards: [
      {
        title: "Provider-aware metadata",
        body: "Book pages are designed to stay useful whether provider keys are configured or the experience needs graceful fallback states.",
      },
      {
        title: "Fast public storefront behavior",
        body: "The reading experience is meant to feel open, lightweight, and accessible before any account system enters the story.",
      },
      {
        title: "Local saves, simple by design",
        body: "Saved books can stay in the browser, giving readers continuity without turning discovery into account management.",
      },
    ],
    useCases: [
      {
        title: "Find a title worth opening tonight",
        body: "Search for a book, scan what matters, and move into a trusted preview path in just a few steps.",
      },
      {
        title: "Build a reading list as you browse",
        body: "Save promising titles without interrupting discovery or forcing an early sign-up wall.",
      },
      {
        title: "Move from discovery to deeper reading",
        body: "Use public-domain lanes and trusted preview links to make the path from browsing to reading feel straightforward.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Carry research, summaries, notes, and reading-related work into a broader AI workspace.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Jobs",
        body: "Connect publishing, hiring, and content workflows across the same ecosystem.",
        href: "/products/jobs",
      },
      {
        title: "Upcube Commerce",
        body: "See how discovery patterns translate into large-scale commerce and product search.",
        href: "/products/ventari",
      },
    ],
    finalCtaTitle: "Make discovering books feel worth the time again.",
    finalCtaBody:
      "Upcube Books is built for readers who want clearer search, trusted previews, saved titles, and a smoother path back to what caught their attention.",
    finalPrimaryAction: {
      label: "Open Upcube Books",
      href: "https://books.upcube.ai",
    },
    finalSecondaryAction: {
      label: "View all products",
      href: "/explore",
    },
  },
  {
    slug: "earth",
    name: "Upcube Planet",
    eyebrow: "Upcube Planet",
    headline: "The Earth, rendered in your browser.",
    summary:
      "Upcube Planet is an interactive 3D globe application with satellite imagery, terrain, photorealistic city layer direction, geocoding, KML and GeoJSON overlays, and shareable views built on a configurable Google, Cesium, Mapbox, and Pelias provider stack.",
    seoTitle:
      "Upcube Planet | Interactive 3D Globe with Satellite Imagery and Terrain",
    seoDescription:
      "Upcube Planet is a browser-based 3D globe application with satellite imagery, terrain visualization, photorealistic 3D city direction, geocoding, KML and GeoJSON overlays, and shareable views built on a configurable geospatial provider stack.",
    primaryAction: {
      label: "Launch Upcube Earth",
      href: "https://planet.upcube.ai",
    },
    secondaryAction: {
      label: "See the ecosystem",
      href: "/explore",
    },
    heroHighlights: [
      "Navigate a real 3D Earth with camera controls for zoom, pan, rotate, and tilt.",
      "Satellite imagery and terrain reflect actual provider data configured through environment variables.",
      "Shareable view URLs capture the exact perspective so anyone can open the same location.",
    ],
    heroImage: {
      src: "/product-art/FAA_starrry_night.jpg",
      alt: "Starry abstract landscape representing global exploration.",
    },
    signatureTitle:
      "A globe workspace built for spatial exploration, not just decoration.",
    signatureBody:
      "Upcube Planet starts from the globe as the main workspace. Controls, layers, overlays, and tools support exploration without overwhelming the view. Every feature is in service of the space itself.",
    signatureCards: [
      {
        title: "Interactive 3D globe navigation",
        body: "The core of Upcube Planet is a smooth, interactive 3D Earth with camera controls for zoom, pan, rotate, and tilt. You can move from a continental overview to a city-level view without a page transition or a mode switch.",
      },
      {
        title: "Satellite imagery and terrain",
        body: "Satellite imagery layers are served through configured tile providers. Terrain visualization uses Cesium ion token configuration and Terrain-RGB-style URL support so elevation is represented geometrically, not as a flat colored surface.",
      },
      {
        title: "Shareable views and overlays",
        body: "Camera and view state can be captured as a shareable URL. The product direction includes client-side KML and GeoJSON overlay visualization for teams who need to layer their own geospatial data on top of the globe.",
      },
    ],
    featureStories: [
      {
        title: "Configurable geospatial provider stack",
        body: "The server reads environment variables to determine which capabilities are available: GOOGLE_MAPS_API_KEY, CESIUM_ION_TOKEN, MAPBOX_TOKEN, PELIAS_API_URL, OPENMAPTILES_URL, and TERRAIN_RGB_URL. When a key is missing the app degrades gracefully rather than breaking.",
      },
      {
        title: "Geocoding provider selection",
        body: "The geocoding layer supports Google, Mapbox, and Pelias providers selectable through the GEOCODER_PROVIDER environment variable. The architecture treats geocoding as a swappable integration point rather than a fixed service.",
      },
      {
        title: "Photorealistic 3D city direction",
        body: "The product direction includes support for Google Photorealistic 3D Tiles. This capability depends on Google API access and usage policy compliance. It is part of the active product direction rather than a universally available feature today.",
      },
    ],
    techCards: [
      {
        title: "React and Vite client with Zustand state",
        body: "The client is a Vite and React TypeScript application using Zustand for state management and Radix UI primitives for accessible UI components. Provider configuration is server-controlled. UI state is client-controlled through Zustand.",
      },
      {
        title: "Express configuration and health API",
        body: "The server exposes GET /api/healthz for service health and GET /api/config for frontend configuration derived from environment variables. The client reads from /api/config at startup to understand which providers are available.",
      },
      {
        title: "Built-in attribution handling",
        body: "Attribution metadata for configured providers is built into the server configuration layer and flows through the same pipeline as provider tokens. Geospatial providers require attribution and the architecture treats it as a first-class concern.",
      },
    ],
    useCases: [
      {
        title: "Orient a team around a physical location",
        body: "Navigate to a region, enable the terrain layer, and tilt the camera to see elevation along a proposed route. Share the view URL so colleagues can open the same perspective without being talked through how to find it.",
      },
      {
        title: "Layer custom geospatial data over a real globe",
        body: "Load a GeoJSON file with field measurement locations and see the measurements on actual satellite and terrain data. The overlay is client-side so nothing is uploaded to a server.",
      },
      {
        title: "Deploy a geospatial visualization layer",
        body: "Configure the environment variables for your provider accounts and use the /api/config endpoint to wire client configuration to your key management approach. Layer toggles, geocoding behavior, and attribution are all configurable without modifying client code.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Bring place-based exploration into research, writing, planning, and decision-making workflows.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Cloud",
        body: "Extend spatial products with developer tools, cloud workflows, and infrastructure support.",
        href: "/products/cloud",
      },
      {
        title: "Upcube VM",
        body: "Explore the cloud compute layer behind scalable geospatial services and spatial workloads.",
        href: "/products/vm",
      },
    ],
    finalCtaTitle: "The globe is the workspace. Start there.",
    finalCtaBody:
      "Upcube Planet is a serious 3D globe application foundation in active development. The provider architecture, client state model, configuration API, and attribution handling are built to support real geospatial workflows now and grow toward more advanced capabilities as the roadmap matures.",
    finalPrimaryAction: {
      label: "Open Upcube Earth",
      href: "https://planet.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Explore related products",
      href: "/explore",
    },
  },
  {
    slug: "games",
    name: "Upcube Games",
    eyebrow: "Game discovery",
    headline: "Discover across 400K games with clarity and momentum.",
    summary:
      "Upcube Games makes finding what to play next feel faster, cleaner, and more intentional. Explore 400K games across releases, genres, platforms, studios, franchises, search, and recommendations — all shaped into a polished discovery product for players who want less noise and better direction.",
    seoTitle: "Upcube Games | 400K Games — Video Game Discovery Platform",
    seoDescription:
      "Upcube Games is a video game discovery platform across 400K games for releases, genres, platforms, studios, franchises, and recommendation paths.",
    primaryAction: {
      label: "Launch Upcube Games",
      href: "https://games.upcube.ai",
    },
    secondaryAction: {
      label: "Browse the ecosystem",
      href: "/explore",
    },
    heroHighlights: [
      "Discover across 400K games without digging through clutter.",
      "Browse by platform, genre, studio, and franchise.",
      "Use recommendations to keep moving instead of starting over.",
    ],
    heroImage: {
      src: "/product-art/C-1-2016-024-Alien-Copy.jpeg",
      alt: "Surreal alien-inspired artwork for Upcube Games.",
    },
    signatureTitle:
      "Game discovery organized around how players actually choose.",
    signatureBody:
      "Upcube Games is built to make searching, browsing, and comparing games feel calmer and more useful. The product starts with the question every player knows: what should I play next?",
    signatureCards: [
      {
        title: "Find what to play next",
        body: "Move between top games, new releases, and upcoming launches without losing the thread of what caught your interest.",
      },
      {
        title: "Browse by platform, genre, studio, and franchise",
        body: "Explore the catalog through the categories players already use to make decisions.",
      },
      {
        title: "Launch into cleaner game discovery",
        body: "A focused layout makes the directory feel like a product you want to use — not a database you have to fight through.",
      },
    ],
    featureStories: [
      {
        title: "Search that understands how games are described",
        body: "Upcube Games is designed around titles, platforms, genres, studios, and franchises, so discovery starts with the language players already use.",
      },
      {
        title: "Game pages with the right context nearby",
        body: "Summaries, release details, ratings, platforms, and related titles help each page feel useful, decisive, and worth exploring.",
      },
      {
        title: "Recommendations that keep discovery moving",
        body: "Rule-based recommendation paths create momentum even before deeper personalization enters the experience.",
      },
    ],
    techCards: [
      {
        title: "Live metadata, server-side access",
        body: "Upcube Games is built around live game data while keeping provider credentials and upstream logic protected on the server side.",
      },
      {
        title: "Genre, platform, and franchise structure",
        body: "Strong directory organization makes it easier to browse broadly, narrow quickly, and follow the path that fits your taste.",
      },
      {
        title: "Graceful fallback behavior",
        body: "When upstream configuration is missing, the product direction favors clear fallback states over empty or confusing surfaces.",
      },
    ],
    useCases: [
      {
        title: "Jump from curiosity to a shortlist",
        body: "Compare top games, upcoming releases, and similar titles until the next play session feels obvious.",
      },
      {
        title: "Browse the way players think",
        body: "Start with a platform, genre, studio, or franchise, then follow the trail from there.",
      },
      {
        title: "Use recommendations as momentum, not distraction",
        body: "Keep moving through related games without losing the shape of what you were looking for.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Bring discovery notes, comparisons, lists, and game research into a broader AI workspace.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Cloud",
        body: "Connect product, content, and developer workflows across the same ecosystem.",
        href: "/products/cloud",
      },
      {
        title: "Upcube Jobs",
        body: "Explore how product, hiring, publishing, and entertainment discovery meet inside Upcube.",
        href: "/products/jobs",
      },
    ],
    finalCtaTitle: "Your next game should be easier to find.",
    finalCtaBody:
      "Upcube Games is built to make discovery feel timely, organized, and surprisingly smooth.",
    finalPrimaryAction: {
      label: "Open Upcube Games",
      href: "https://games.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Explore more products",
      href: "/explore",
    },
  },
  {
    slug: "news",
    name: "Upcube News",
    eyebrow: "News intelligence",
    headline: "A live editorial app for AI-era news discovery.",
    summary:
      "Upcube News brings live news intelligence, AI-powered summaries, topic discovery, source-linked stories, and briefing-style layouts into a focused editorial app. Designed for people who want to stay informed across AI, technology, and global topics through discovery, aggregation, and clear briefing navigation.",
    seoTitle: "Upcube News | Live News Intelligence and AI-Powered Discovery",
    seoDescription:
      "Upcube News is a live news intelligence app for AI-powered summaries, topic discovery, source-linked stories, briefing-style layouts, and category-based navigation.",
    primaryAction: {
      label: "Launch Upcube News",
      href: "https://news.upcube.ai",
    },
    secondaryAction: {
      label: "Read launch story",
      href: "/news/upcube-news-launch",
    },
    heroHighlights: [
      "Live news discovery with AI-powered summaries and source-linked stories.",
      "Topic and category navigation for focused browsing across technology, science, business, and global news.",
      "Briefing-style layouts designed for staying informed efficiently.",
    ],
    heroImage: {
      src: "/product-art/COMPOSITION-VII.jpg",
      alt: "Abstract composition representing news intelligence and information flow.",
    },
    signatureTitle: "News discovery organized around what matters.",
    signatureBody:
      "Upcube News is built for people who want to stay informed without drowning in noise. It combines live news discovery, AI-generated summaries, topic navigation, and a briefing-style layout into a clean reading experience.",
    signatureCards: [
      {
        title: "Live news discovery",
        body: "Stay current with source-linked stories across AI, technology, science, business, and global topics — updated from live feeds.",
      },
      {
        title: "AI-powered summaries",
        body: "Quickly understand key points through concise, AI-generated summaries that surface what matters in each story.",
      },
      {
        title: "Topic and category navigation",
        body: "Browse by topic, category, or source type so you can focus on the areas most relevant to you.",
      },
    ],
    featureStories: [
      {
        title: "Briefing-style homepage",
        body: "The homepage is designed as a daily briefing surface — organized, scannable, and built for people who want to stay informed quickly.",
      },
      {
        title: "Source-linked stories with transparency",
        body: "Every story links back to the original source, keeping discovery transparent and grounded in its origins.",
      },
      {
        title: "AI and technology focus",
        body: "Upcube News prioritizes AI, technology, and science coverage, with categories that make it easy to follow the topics shaping the next decade.",
      },
    ],
    techCards: [
      {
        title: "Live feed aggregation",
        body: "News content is aggregated from live provider feeds using discovery and aggregation patterns — not original reporting.",
      },
      {
        title: "AI summary generation",
        body: "Stories are summarized to help readers decide what to read next. Summaries are generated from source content, not original editorial.",
      },
      {
        title: "Category and topic systems",
        body: "Structured navigation helps readers move through categories and topics without losing the broader news context.",
      },
    ],
    useCases: [
      {
        title: "Stay informed on AI and technology",
        body: "Follow AI, technology, and science stories from multiple sources in one focused briefing surface.",
      },
      {
        title: "Scan quickly, read what matters",
        body: "Use summaries and headlines to move through the day's news efficiently, then dive deeper into the stories that deserve your attention.",
      },
      {
        title: "Explore topics across disciplines",
        body: "Browse categories from business to science to global news, following the topics that intersect with your work and interests.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Carry news research, summaries, and topic context into the broader AI workspace.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Books",
        body: "Move from news discovery into deeper reading and knowledge exploration.",
        href: "/products/books",
      },
      {
        title: "Upcube Earth",
        body: "Connect news stories to geographic context and spatial exploration.",
        href: "/products/earth",
      },
    ],
    finalCtaTitle: "Stay informed with clarity, not clutter.",
    finalCtaBody:
      "Upcube News is built for live news discovery, AI summaries, and briefing-style reading — positioned as discovery and aggregation, not original reporting.",
    finalPrimaryAction: {
      label: "Launch Upcube News",
      href: "https://news.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Read the launch story",
      href: "/news/upcube-news-launch",
    },
  },
  {
    slug: "jobs",
    name: "Upcube Jobs",
    eyebrow: "Hiring and role discovery",
    headline: "Browse 8M jobs with a clearer path to opportunity.",
    summary:
      "Upcube Jobs makes career discovery feel organized, direct, and worth returning to. Explore an 8M-job discovery surface designed to help people move from role discovery to the next meaningful step in their career.",
    seoTitle: "Upcube Jobs | 8M Jobs — AI Job Discovery and Career Platform",
    seoDescription:
      "Upcube Jobs is an AI job discovery and career platform with an 8M-job discovery surface for clearer opportunity browsing, role context, and connected ecosystem workflows.",
    primaryAction: {
      label: "Launch Upcube Jobs",
      href: "https://jobs.upcube.ai",
    },
    secondaryAction: {
      label: "Explore the ecosystem",
      href: "/explore",
    },
    heroHighlights: [
      "Browse 8M jobs with focused role discovery.",
      "Explore opportunities with product and company context nearby.",
      "Move through a direct hiring destination already connected across the Upcube portal.",
    ],
    heroImage: {
      src: "/product-art/065d0e64a3514880bf2398126d0bcdca_sw-3815_sh-2501.webp",
      alt: "Dynamic geometric artwork representing career motion.",
    },
    signatureTitle: "Opportunity discovery, made clearer.",
    signatureBody:
      "Upcube Jobs is built as a polished hiring destination for exploring roles across the broader Upcube ecosystem — direct, focused, and easy to return to.",
    signatureCards: [
      {
        title: "Discover roles with less friction",
        body: "Move from curiosity to a role worth opening without unnecessary clutter or dead ends.",
      },
      {
        title: "Stay close to the broader ecosystem",
        body: "Jobs lives beside the rest of the Upcube product family, making company direction, product context, and platform ambition easier to understand.",
      },
      {
        title: "Built to feel direct",
        body: "A strong hiring destination gets out of the way and helps people decide whether a role deserves more attention.",
      },
    ],
    featureStories: [
      {
        title: "Role discovery that feels intentional",
        body: "Upcube Jobs gives hiring its own dedicated destination instead of hiding opportunities behind generic company pages.",
      },
      {
        title: "Cleaner pathways into openings",
        body: "The product direction favors clear navigation from discovery into role detail, context, and next-step evaluation.",
      },
      {
        title: "Part of a connected product story",
        body: "Hiring stays visibly connected to the products, research, and execution surfaces that define the Upcube ecosystem.",
      },
    ],
    techCards: [
      {
        title: "Dedicated jobs destination",
        body: "The live jobs surface gives hiring a clearer home than a single careers page buried inside a broader company site.",
      },
      {
        title: "Connected navigation",
        body: "Jobs can stay linked to company, product, and trust surfaces without diluting the hiring experience itself.",
      },
      {
        title: "Neutral public positioning",
        body: "The public story stays practical: role discovery, company context, and next-step confidence.",
      },
    ],
    useCases: [
      {
        title: "Scan for roles that fit the moment",
        body: "Start broad, move quickly, and narrow attention to roles aligned with your next step.",
      },
      {
        title: "Understand the company through the products",
        body: "Use the surrounding ecosystem pages to connect a role with the work behind it.",
      },
      {
        title: "Return to openings with less context loss",
        body: "A dedicated destination makes it easier to come back when timing, priorities, or focus changes.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Explore the core AI workspace behind the ecosystem.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Cloud",
        body: "Follow the developer, infrastructure, and platform stories connected to the product family.",
        href: "/products/cloud",
      },
      {
        title: "Upcube OS",
        body: "See the longer-range computing vision shaping where the ecosystem can go next.",
        href: "/products/upcube-os",
      },
    ],
    finalCtaTitle: "Make the next opportunity easier to spot.",
    finalCtaBody:
      "Upcube Jobs is positioned as a cleaner, more direct way to explore roles across the Upcube ecosystem.",
    finalPrimaryAction: {
      label: "Open Upcube Jobs",
      href: "https://jobs.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Read about Upcube",
      href: "/company",
    },
  },
  {
    slug: "cloud",
    name: "Upcube Cloud",
    eyebrow: "Compute and developer infrastructure",
    headline: "Cloud infrastructure, made easier to understand.",
    summary:
      "Upcube Cloud gives compute, storage, networking, and developer workflows a clearer front door. It is the cloud and infrastructure destination for the Upcube ecosystem — built to make serious systems feel more approachable, connected, and ready to scale.",
    seoTitle: "Upcube Cloud | AI Cloud Infrastructure Platform",
    seoDescription:
      "Upcube Cloud is an AI cloud infrastructure platform for developer tools, cloud workflows, compute access, and scalable systems across Upcube.",
    primaryAction: {
      label: "Launch Upcube Cloud",
      href: "https://cloud.upcube.ai",
    },
    secondaryAction: {
      label: "Explore Cloud VMs",
      href: "/products/vm",
    },
    heroHighlights: [
      "A clearer entry point for developer and cloud workflows.",
      "A product story that makes infrastructure easier to grasp.",
      "Direct paths into compute-heavy products like Cloud VMs.",
    ],
    heroImage: {
      src: "/product-art/42333816071_33313e0909_b.jpg",
      alt: "Layered abstract forms representing cloud infrastructure.",
    },
    signatureTitle: "A cleaner front door to the Upcube infrastructure story.",
    signatureBody:
      "Upcube Cloud brings developer tools, cloud workflows, compute, storage, networking, and infrastructure products into one focused destination. It is designed to feel approachable without hiding the complexity that real systems need underneath.",
    signatureCards: [
      {
        title: "Compute with clearer language",
        body: "Infrastructure should feel understandable from the first page — explained in product terms people can follow, not only in operator shorthand.",
      },
      {
        title: "Storage and networking in context",
        body: "The building blocks of modern systems are presented as connected parts of one experience, not a scattered list of acronyms.",
      },
      {
        title: "A destination for scalable systems",
        body: "Upcube Cloud is positioned as the place where developer workflows, infrastructure paths, and the broader product ecosystem meet.",
      },
    ],
    featureStories: [
      {
        title: "Compute that feels usable from the outside",
        body: "The public product story starts with clear entry points for virtual machines, runtime workflows, and cloud operations.",
      },
      {
        title: "Storage, networking, and systems that belong together",
        body: "A serious cloud product connects disk, network, identity, workload movement, and deployment into one coherent platform story.",
      },
      {
        title: "Built for teams moving from product to infrastructure",
        body: "Upcube Cloud is designed to sit naturally beside UpcubeAI and Upcube Commerce as the systems layer behind the ecosystem.",
      },
    ],
    techCards: [
      {
        title: "Compute systems",
        body: "Virtual machines, runtime workflows, and control-plane direction shape the deeper compute story without turning the public page into internal architecture notes.",
      },
      {
        title: "Networking and storage, made legible",
        body: "Core infrastructure concepts are presented clearly enough to follow without oversimplifying what they do.",
      },
      {
        title: "Scalable systems language",
        body: "The page speaks to both technical and business audiences — helping them understand what the platform supports today and where it can grow next.",
      },
    ],
    useCases: [
      {
        title: "Launch a new system with less friction",
        body: "Move from product idea into compute, storage, and network decisions without leaving the Upcube ecosystem.",
      },
      {
        title: "Give teams a clearer cloud entry point",
        body: "Use one destination to explain the infrastructure story behind the products they already know.",
      },
      {
        title: "Connect build work to runtime reality",
        body: "Keep developer momentum while showing where scalable systems actually live, operate, and grow.",
      },
    ],
    ecosystemLinks: [
      {
        title: "Cloud VM",
        body: "Go deeper into virtual machines, networking, storage, and compute workflows.",
        href: "/products/vm",
      },
      {
        title: "UpcubeAI",
        body: "Connect infrastructure to the AI workspace and execution layer of the ecosystem.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Commerce",
        body: "See how cloud infrastructure supports large-scale commerce search, catalog systems, and product discovery.",
        href: "/products/ventari",
      },
    ],
    finalCtaTitle: "Build on a clearer foundation.",
    finalCtaBody:
      "Upcube Cloud is designed to make infrastructure feel more understandable, more connected, and more useful across the entire Upcube ecosystem.",
    finalPrimaryAction: {
      label: "Open Upcube Cloud",
      href: "https://cloud.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Explore Cloud VMs",
      href: "/products/vm",
    },
  },
  {
    slug: "quantum",
    name: "Upcube Quantum",
    eyebrow: "Future Computing",
    headline: "Quantum computing, made simple.",
    summary:
      "Upcube Quantum makes quantum computing easier to understand, explore, and use. Run guided experiments, see results visually, and learn complex ideas through a clear workspace built for discovery.",
    seoTitle: "Upcube Quantum | Quantum Computing Made Simple",
    seoDescription:
      "Upcube Quantum is a beginner-friendly quantum computing workspace for guided experiments, visual runs, templates, and clear result charts.",
    primaryAction: {
      label: "Launch Quantum",
      href: UPCUBE_QUANTUM_URL,
    },
    secondaryAction: {
      label: "See research",
      href: "/research",
    },
    heroHighlights: [
      "Explore quantum ideas without complex setup.",
      "Run guided experiments and see results clearly.",
      "Built for learning, research, and future computing workflows.",
    ],
    heroImage: {
      src: "/product-art/19487.webp",
      alt: "Abstract light composition representing premium quantum exploration.",
    },
    signatureTitle: "A clearer way to explore quantum systems.",
    signatureBody:
      "Quantum computing can feel distant and difficult to approach. Upcube Quantum turns it into a guided workspace where experiments, templates, visual results, and learning paths come together in one calm experience.",
    signatureCards: [
      {
        title: "Guided from the first step",
        body: "Start with structured examples that help make quantum concepts easier to see, test, and understand.",
      },
      {
        title: "Results that feel readable",
        body: "Visual outputs and clear result views help turn abstract ideas into something easier to compare.",
      },
      {
        title: "Built for learning by doing",
        body: "Templates and guided runs help people build intuition without starting from a blank console.",
      },
    ],
    featureStories: [
      {
        title: "Experiments without the heavy setup",
        body: "Upcube Quantum keeps the experience focused on exploration, so people can start learning before they become experts.",
      },
      {
        title: "Templates that make ideas approachable",
        body: "Prepared workflows give learners and builders a practical starting point for common quantum concepts.",
      },
      {
        title: "A console for future computing",
        body: "The product direction brings quantum exploration into a clearer workspace for research, learning, and experimentation.",
      },
    ],
    techCards: [
      {
        title: "Simulator-first exploration",
        body: "Start with accessible experiments designed to help people understand behavior before moving into deeper technical workflows.",
      },
      {
        title: "Visual result views",
        body: "Charts and structured outputs make runs easier to read, compare, and explain.",
      },
      {
        title: "Clear paths into deeper work",
        body: "Docs, templates, and console flows keep advanced ideas available without overwhelming the first experience.",
      },
    ],
    useCases: [
      {
        title: "Learn quantum by doing",
        body: "Use guided examples to build intuition through action instead of passive reading.",
      },
      {
        title: "Explore before building",
        body: "Test ideas visually before moving into more complex workflows.",
      },
      {
        title: "Support research and education",
        body: "Use Quantum as a starting point for teaching, experimentation, and early-stage discovery.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Connect exploration with the assistant workspace for broader research workflows.",
        href: "/products/upcube-ai",
      },
      {
        title: "Education",
        body: "Explore learning pathways connected to guided coursework and applied study.",
        href: "/products/university",
      },
      {
        title: "Cloud VM",
        body: "Follow the infrastructure lane that supports deeper compute thinking.",
        href: "/products/vm",
      },
    ],
    finalCtaTitle: "Start exploring the next layer of computing.",
    finalCtaBody:
      "Upcube Quantum is built to make complex ideas feel clearer, calmer, and easier to explore.",
    finalPrimaryAction: {
      label: "Launch Quantum",
      href: UPCUBE_QUANTUM_URL,
    },
    finalSecondaryAction: {
      label: "Try a template",
      href: "https://quantum.upcube.ai/console/templates",
    },
  },
  {
    slug: "research",
    name: "Upcube Research",
    eyebrow: "Company research",
    headline:
      "Research and product thinking behind Ethen and the Upcube agent strategy.",
    summary:
      "Upcube publishes research to support the thinking behind Ethen — covering agents, search, language, trust, safety, and the design of useful AI. These articles explain the company direction, not a separate research product.",
    seoTitle: "Upcube Research | Company and Product Research",
    seoDescription:
      "Upcube Research covers the company's thinking behind Ethen and AI agents — topics in search, language, trust, safety, responsible AI, and the design of useful agent experiences.",
    primaryAction: {
      label: "Explore Ethen",
      href: "/ethen",
    },
    secondaryAction: {
      label: "Agent categories",
      href: "/ethen/agents",
    },
    heroHighlights: [
      "Search and gather sources from across the web.",
      "Extract clean page content, summaries, and citations.",
      "Run deeper research workflows across topics, companies, markets, and questions.",
    ],
    heroImage: {
      src: "/product-art/050b0e5fb4bd48bbb2c6a91baa3afc40_sw-2962_sh-2191.webp",
      alt: "Abstract composition representing research and web intelligence.",
    },
    availabilityNote:
      "Upcube Research is in product preview. The platform direction is under active development.",
    signatureTitle: "Built for research that does not stop at search.",
    signatureBody:
      "Search gives you links. Upcube Research gives you a working research system. It helps you discover sources, extract clean content, compare evidence, and build structured outputs that can be checked, shared, and reused.",
    signatureCards: [
      {
        title: "Discover relevant sources",
        body: "Search the web with research intent and collect the sources that matter most to your question, topic, or project.",
      },
      {
        title: "Understand and compare evidence",
        body: "Extract clean content, compare what each source says, and build a clear picture from multiple perspectives and data points.",
      },
      {
        title: "Turn research into reusable output",
        body: "Synthesize findings into briefs, reports, tables, and datasets — structured work you can export, share, and build on.",
      },
    ],
    featureStories: [
      {
        title: "AI web search with research intent",
        body: "Search across web sources designed around research, not just keywords. Find relevant pages, articles, and public documents more efficiently.",
      },
      {
        title: "Source collection and content extraction",
        body: "Save links, extract clean page content, and keep citations and evidence organized in projects that preserve the shape of your inquiry.",
      },
      {
        title: "Exportable outputs for real decisions",
        body: "Turn findings into briefs, reports, tables, datasets, and workflow inputs — outputs that carry weight and move your work forward.",
      },
    ],
    techCards: [
      {
        title: "Project-based research workspace",
        body: "Every research question becomes a project where sources, notes, extracted content, briefs, and citations stay organized and accessible.",
      },
      {
        title: "Monitor-ready research workflows",
        body: "Designed to help track topics, companies, competitors, and market signals over time — so research surfaces what changed when it matters.",
      },
      {
        title: "Export and ecosystem pipeline",
        body: "Briefs, reports, and curated findings can be exported or routed into other Upcube products for further synthesis, publishing, or execution.",
      },
    ],
    useCases: [
      {
        title: "Market and competitive research",
        body: "Track companies, competitors, and market shifts with source-backed evidence and structured briefs that make the landscape easier to understand.",
      },
      {
        title: "Product and content research",
        body: "Research features, positioning, trends, and audience needs — then turn findings into reports, specs, and content briefs.",
      },
      {
        title: "Knowledge building and synthesis",
        body: "Collect sources across topics, compare findings, and build a growing knowledge base of evidence-backed briefs and reusable research assets.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Carry research findings into Ethen conversations, artifacts, and workspace workflows.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Avatar Cloud",
        body: "Route research briefs and synthesized knowledge into Avatar knowledge bases and intelligent responses.",
        href: "/products/avatar",
      },
      {
        title: "Upcube Books",
        body: "Connect research discovery with book previews, reading paths, and deeper source exploration.",
        href: "/products/books",
      },
    ],
    finalCtaTitle: "Start with a question. Leave with a research asset.",
    finalCtaBody:
      "Open a research workspace, gather sources, synthesize the evidence, and turn what you learn into something you can save, share, export, or build on.",
    finalPrimaryAction: {
      label: "Open Research",
      href: "https://research.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Explore Upcube AI",
      href: "/products/upcube-ai",
    },
  },
  {
    slug: "robotics",
    name: "Upcube Robotics",
    eyebrow: "Upcube Robotics",
    headline: "Know what your robots actually did.",
    summary:
      "Upcube Robotics records every mission, safety decision, and incident in a structured, verifiable format so your team can replay what happened, understand why it happened, and prove it to anyone who asks.",
    seoTitle:
      "Upcube Robotics | Robot Mission Observability, Safety Evidence, and Fleet Audit Platform",
    seoDescription:
      "Upcube Robotics is a vendor-agnostic trace layer for physical automation. Record robot missions, telemetry, safety policy decisions, and incidents. Replay mission timelines and export SHA-256-verified evidence bundles for post-incident review and compliance audit.",
    primaryAction: {
      label: "Explore Robotics",
      href: "#overview",
    },
    secondaryAction: {
      label: "View product overview",
      href: "#features",
    },
    heroHighlights: [
      "Every mission is structured into named phases with typed, correlated event records tied together by a correlation ID.",
      "Every policy evaluation is recorded including blocked actions, the policy that blocked them, and the violation details.",
      "Evidence bundles are packaged with a SHA-256 manifest so anyone who receives them can verify they have not been modified.",
    ],
    signatureTitle:
      "Built around the questions your team asks when something goes wrong, and the records you need before something does.",
    signatureBody:
      "Robot deployments generate a continuous stream of events: commands, sensor readings, safety checks, pauses, handoffs, blocked actions, and operator confirmations. Most of that stream is invisible until something fails. Upcube Robotics captures it in real time in a typed, validated format so the record is already there when you need it.",
    signatureCards: [
      {
        title: "Mission timeline replay",
        body: "A mission in Upcube Robotics is organized into named phases with typed event records for every meaningful moment. Every mission run carries a correlation ID that ties all records together across systems. You are navigating a structured timeline, not scrolling through undifferentiated log lines.",
      },
      {
        title: "Safety decision records",
        body: "Every action evaluated against your safety policies is recorded. When an action is blocked, the system creates a record with the denied action, the policy that blocked it, and the specific violation details. Blocked actions are no longer invisible.",
      },
      {
        title: "SHA-256 evidence bundles",
        body: "When an incident occurs, Upcube Robotics assembles an evidence bundle with the relevant mission trace, telemetry slice, policy decisions, blocked actions, operator approvals, and incident record, packaged with a SHA-256 manifest. Anyone who receives the bundle can verify it has not been modified since it was generated.",
      },
    ],
    featureStories: [
      {
        title: "Versioned safety policies",
        body: "Every policy decision references the exact policy version that was active when the decision was made. When you review a blocked action from three months ago, you are looking at the rule set that was in effect then, not the one that is active today.",
      },
      {
        title: "Operator approval records",
        body: "When a mission phase requires operator sign-off, that approval decision is recorded as a first-class event: who approved it, what they approved, and when. It sits in the mission timeline at the point where the decision was made.",
      },
      {
        title: "Vendor-neutral robot registry",
        body: "The RobotCard schema captures each robot's morphology, sensor suite, actuators, safety IO, and kinematic limits in a format that does not depend on any specific manufacturer or middleware. Trace records are readable and comparable across your entire fleet even when robots come from different vendors.",
      },
    ],
    techCards: [
      {
        title: "Strict schema validation at ingest",
        body: "Every entity in Upcube Robotics has a defined schema with required fields and typed values. Records that do not pass validation are rejected at the boundary. A mission run without a correlation ID does not enter the system. An evidence bundle without a SHA-256 manifest is not a valid bundle.",
      },
      {
        title: "Hot-path telemetry capture",
        body: "Telemetry event records capture real-time robot state on the hot path: pose, velocity, battery level, operating mode, and safety state. When you scrub to the moment before a safety stop, you are looking at the actual telemetry state at that timestamp, not an interpolated reconstruction.",
      },
      {
        title: "Role-scoped access model",
        body: "The platform user model defines four roles scoped to an organization tenant: admin, engineer, operator, and viewer. Evidence bundles, policy records, and mission traces are accessible based on role. The roles map to how real robotics operations teams are actually structured.",
      },
    ],
    useCases: [
      {
        title: "Reconstruct a mission that ended in an unexpected stop",
        body: "Open the mission run record, navigate to the phase where the stop occurred, and review the telemetry stream and policy decision records from that window. If a blocked action preceded the stop, it is in the trace with the policy version that blocked it and the violation details.",
      },
      {
        title: "Package an incident for safety review",
        body: "Generate an evidence bundle from the incident window. The bundle includes the correlated mission trace, telemetry slice, policy decisions, operator approvals, and incident record, packaged with a SHA-256 manifest. The safety reviewer receives a file they can verify, not just read.",
      },
      {
        title: "Scale a pilot with an audit-ready record from day one",
        body: "Export evidence bundles from recent incidents, pull the policy decision log, and share robot registry and version state snapshots. The documentation already exists because the pilot has been running on Upcube Robotics from the start.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Bring mission traces, incident records, and evidence bundles into the AI workspace to run structured analysis and generate post-incident reports.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Cloud",
        body: "Infrastructure and compute layer for robotics data pipelines and fleet operations.",
        href: "/products/cloud",
      },
      {
        title: "Upcube VM",
        body: "Virtual machines and storage for robotics data processing and simulation workloads.",
        href: "/products/vm",
      },
    ],
    finalCtaTitle: "The trace record that makes everything else trustworthy.",
    finalCtaBody:
      "Governance, policy enforcement, and enterprise controls are only as good as the evidence layer underneath them. Upcube Robotics starts with the canonical data model and strict schema validation that make every subsequent capability credible. Start with a clear trace record. Everything else follows from it.",
    finalPrimaryAction: {
      label: "Explore Robotics",
      href: "/products/robotics",
    },
    finalSecondaryAction: {
      label: "View product direction",
      href: "#features",
    },
  },
  {
    slug: "ventari",
    name: "Upcube Commerce",
    eyebrow: "Marketplace-scale commerce technology",
    headline: "Commerce technology built for billion-product scale.",
    summary:
      "Upcube Commerce is the commerce technology layer for marketplace-scale product discovery. Designed to support up to 1 billion products, it brings AI-powered search, product pages, recommendations, reviews, category systems, and brand storefront infrastructure together so large catalogs can feel clear, fast, and easier to explore.",
    seoTitle: "Upcube Commerce | Commerce Technology for Billion-Product Scale",
    seoDescription:
      "Upcube Commerce is the commerce technology layer for marketplace-scale product discovery and brand storefronts, designed to support up to 1 billion products with AI-powered search and recommendations.",
    primaryAction: {
      label: "Explore Upcube Commerce",
      href: "https://ventari.net",
    },
    secondaryAction: {
      label: "Explore the ecosystem",
      href: "/explore",
    },
    heroHighlights: [
      "Designed to support up to 1 billion products.",
      "AI-powered catalog search and product discovery.",
      "Reviews, recommendations, and brand storefront infrastructure.",
    ],
    heroImage: {
      src: "/product-art/piet_mondrian_2_tableau_i.jpg",
      alt: "Structured geometric composition for Upcube Commerce.",
    },
    signatureTitle:
      "Commerce technology that stays clear, even when the catalog gets massive.",
    signatureBody:
      "Upcube Commerce is designed for brands and marketplaces that want fast search, rich product pages, smart categories, and product discovery that still feels refined at scale.",
    signatureCards: [
      {
        title: "Search designed for billion-product catalogs",
        body: "Upcube Commerce is built around large-catalog readiness, so discovery stays useful as product choice expands.",
      },
      {
        title: "Product pages that make decisions easier",
        body: "Clean PDP composition, clear details, strong imagery, options, pricing, reviews, and related items help customers move with more confidence.",
      },
      {
        title: "Categories, reviews, and recommendations working together",
        body: "Upcube Commerce brings each part of the commerce journey into one connected flow, keeping momentum alive from search to product detail.",
      },
    ],
    featureStories: [
      {
        title: "Discovery that starts before the product page",
        body: "Search and categories are first-class parts of the experience, helping customers reach the right product faster.",
      },
      {
        title: "Rich PDPs that feel considered",
        body: "Product pages are designed to present images, pricing, options, reviews, and related products in a way that makes the next decision clearer.",
      },
      {
        title: "Recommendations that turn browsing into discovery",
        body: "Recommendation flows help people keep exploring without making the storefront feel noisy, crowded, or directionless.",
      },
    ],
    techCards: [
      {
        title: "Catalog architecture built for scale",
        body: "Upcube Commerce is built with large-catalog growth in mind — from taxonomy and search to image quality, metadata, and product structure.",
      },
      {
        title: "Search and category depth",
        body: "Discovery stays central whether someone starts with a broad category, a precise query, or a single product page.",
      },
      {
        title: "Deferred storefront composition",
        body: "The product direction emphasizes strong PDPs and related sections without letting secondary content slow down the main commerce experience.",
      },
    ],
    useCases: [
      {
        title: "Move quickly through massive product choice",
        body: "Search, categories, and related products help customers find the right item without feeling lost in the catalog.",
      },
      {
        title: "Make product pages do more of the work",
        body: "Stronger PDPs reduce hesitation and make comparison easier before the customer reaches the cart.",
      },
      {
        title: "Keep discovery alive after the first click",
        body: "Recommendations and reviews help people continue exploring instead of restarting from search.",
      },
    ],
    ecosystemLinks: [
      {
        title: "Upcube Cloud",
        body: "Explore the infrastructure and systems story behind scalable commerce.",
        href: "/products/cloud",
      },
      {
        title: "Cloud VM",
        body: "Follow the compute layer behind large-catalog and storefront workloads.",
        href: "/products/vm",
      },
      {
        title: "UpcubeAI",
        body: "Connect commerce, research, product workflows, and decision-making inside the broader ecosystem.",
        href: "/products/upcube-ai",
      },
    ],
    finalCtaTitle: "Commerce infrastructure designed for real catalog scale.",
    finalCtaBody:
      "Upcube Commerce is built to make search, categories, reviews, recommendations, and PDP quality feel like one premium commerce experience.",
    finalPrimaryAction: {
      label: "Explore Upcube Commerce",
      href: "https://ventari.net",
    },
    finalSecondaryAction: {
      label: "Read about Upcube Cloud",
      href: "/products/cloud",
    },
  },
  {
    slug: "vm",
    name: "Upcube VM",
    eyebrow: "Upcube VM",
    headline: "Cloud compute built on real infrastructure thinking.",
    summary:
      "Upcube VM is an EC2-style virtual machine platform with API-driven instance lifecycle, async job execution, scheduler and host-agent boundaries, VPC networking foundations, detached block storage, and reconciliation loops that move the system toward a safe state when things go wrong.",
    seoTitle:
      "Upcube VM | EC2-Style Virtual Machine Platform with Async Jobs and VPC Networking",
    seoDescription:
      "Upcube VM is an API-driven virtual machine platform with durable instance lifecycle, async job execution, scheduler and host-agent separation, VPC networking foundations, detached block storage, and reconciliation loops. A serious cloud compute foundation in active development.",
    primaryAction: {
      label: "Open Upcube Cloud",
      href: "https://cloud.upcube.ai",
    },
    secondaryAction: {
      label: "Explore Upcube Cloud",
      href: "/products/cloud",
    },
    heroHighlights: [
      "Every lifecycle operation creates a durable job record that can be tracked, repaired, and reconciled.",
      "The scheduler and host-agent seams are defined and enforced so placement decisions and host execution stay separated.",
      "A reconciler and janitor run continuously to detect drift and move stuck jobs toward a safe state.",
    ],
    heroImage: {
      src: "/product-art/COMPOSITION-VII.jpg",
      alt: "Expressive abstract composition representing cloud compute scale.",
    },
    signatureTitle:
      "Built around the parts of cloud compute that actually make it reliable.",
    signatureBody:
      "The gap between a VM product that works in a demo and one that works under real operational load comes down to a handful of hard architectural decisions: how lifecycle state is modeled, how long-running operations are handled, how placement decisions are separated from API calls, and how the system recovers when something goes wrong. Upcube VM addresses each of these directly.",
    signatureCards: [
      {
        title: "Durable instance lifecycle",
        body: "Instances are modeled as persistent resources with ownership, state, and a full lifecycle: create, start, stop, reboot, and delete, each with admission rules, idempotency guarantees, and job-status tracking. This is the foundational distinction between a CRUD API and a real compute control plane.",
      },
      {
        title: "Async job-driven operations",
        body: "Every lifecycle operation creates a durable job record that can be admitted by the API, processed by workers, observed by users, and repaired if it gets stuck. Timeouts, retries, stuck-job scans, and repair dispatch are all handled without losing track of what was requested.",
      },
      {
        title: "Reconciliation and repair",
        body: "The reconciler scans for drift between intended and actual state and dispatches repair work. The janitor finds stuck or timed-out jobs and moves them to a safe terminal state. Real infrastructure systems become reliable through convergence. This platform is built with that model from the start.",
      },
    ],
    featureStories: [
      {
        title: "VPC networking foundation",
        body: "The networking layer covers public IP lifecycle, duplicate IP prevention, IP release on stop and delete paths, SSH readiness gating before instances are marked as running, DNAT and SNAT lifecycle correctness, VPC resources, subnets, security groups, security group rules, route tables, and route entries.",
      },
      {
        title: "Detached block storage",
        body: "Volumes are first-class resources with their own ownership and lifecycle. Volume create, list, get, delete, attach, and detach flows are supported alongside availability-zone affinity concepts, attachment limits, delete-on-termination behavior, and snapshot-aware constraints.",
      },
      {
        title: "Ownership-aware resource access",
        body: "Every resource belongs to a project. Access checks are ownership-aware so a request for an instance, volume, IP, or image that belongs to a different project is not returned. Cross-project resource leakage is not a configuration option that can be accidentally enabled.",
      },
    ],
    techCards: [
      {
        title: "Control-plane-first admission",
        body: "The resource manager is the API layer. Its job is to admit, validate, and record intent. Actual VM runtime work is separated into worker, scheduler, host-agent, and network-controller seams. The boundary is explicit and enforced in the codebase.",
      },
      {
        title: "PostgreSQL-backed repository layer",
        body: "Persistence goes through a repository layer that backs instances, jobs, IPs, networks, projects, events, volumes, images, and related resources to PostgreSQL. The repository is a seam, not an implementation detail baked into service logic.",
      },
      {
        title: "gRPC and Protocol Buffer contracts",
        body: "Service-to-service communication uses gRPC and Protocol Buffers for typed, versioned contracts between the resource manager, worker, scheduler, host agent, and network controller. Services can evolve independently without requiring every other service to understand the new one's internal API.",
      },
    ],
    useCases: [
      {
        title: "Launch a workload that needs to survive a stop and restart",
        body: "Stop an instance overnight and start it again in the morning with the same disk, the same IP, and the same configuration. Instances are modeled as persistent resources. The restart brings the same instance back with the same disk attached and the same job-tracking visibility.",
      },
      {
        title: "Diagnose why an instance is stuck",
        body: "Retrieve the job status for a lifecycle operation that has not completed. Identify whether the job is in a timeout window the janitor will handle or whether a repair dispatch is already in progress. The reconciler and janitor are running continuously.",
      },
      {
        title: "Evaluate the platform before building on top of it",
        body: "Clone the repository and run go build and go test. The service boundary between the resource manager and the scheduler is explicit in the code structure. The maturity map in the README is honest about what is implemented, what is partial, and what is planned.",
      },
    ],
    ecosystemLinks: [
      {
        title: "Upcube Cloud",
        body: "See the broader cloud entry point that Cloud VM operates inside.",
        href: "/products/cloud",
      },
      {
        title: "Upcube Commerce",
        body: "Connect infrastructure analysis and automation workflows to large-scale commerce workloads in the product ecosystem.",
        href: "/products/shopping",
      },
      {
        title: "Upcube Planet",
        body: "Explore the geospatial visualization layer that sits alongside cloud infrastructure.",
        href: "/products/earth",
      },
    ],
    finalCtaTitle:
      "A serious cloud compute foundation, built to grow.",
    finalCtaBody:
      "Upcube VM is an early but serious EC2-style platform foundation with a real control-plane architecture, async job modeling, scheduler and host-agent seams, reconciliation loops, VPC networking foundations, and detached block storage. The architecture is built to support that growth without redesigning the foundations.",
    finalPrimaryAction: {
      label: "Open Upcube Cloud",
      href: "https://cloud.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Explore more infrastructure",
      href: "/products/cloud",
    },
  },
  {
    slug: "upcube-os",
    name: "Upcube OS",
    eyebrow: "Upcube OS",
    headline: "A computer that helps you get things done and shows you exactly how.",
    summary:
      "Upcube OS is an AI-first operating system built around tasks, trust, and visible control. AI is part of the system itself, helping across files, documents, email, browser, and workspaces, with task-scoped permissions, human approval before important actions, and a readable activity history. Public consumer release planned for 2028.",
    seoTitle:
      "Upcube OS | AI-First Operating System with Visible Control and Built-In Approval",
    seoDescription:
      "Upcube OS is an experimental AI-first operating system built around tasks, trust, and visible control. AI assistance is built into the system layer with task-scoped permissions, human approval before important actions, and a readable activity history. Public consumer release planned for 2028.",
    primaryAction: {
      label: "Read the vision",
      href: "/vision",
    },
    secondaryAction: {
      label: "Explore trust",
      href: "/trust",
    },
    heroHighlights: [
      "AI is built into the system layer, available across files, documents, email, browser, and workspaces.",
      "Permissions are scoped to each specific task, described in plain language, and bounded by what the task requires.",
      "Before anything consequential executes, the system pauses and asks in plain language with three options: approve, edit, or cancel.",
    ],
    heroImage: {
      src: "/product-art/Composition.jpg",
      alt: "Painterly composition representing operating system clarity.",
    },
    availabilityNote:
      "Public consumer release is planned for 2028 while improvements continue across the product and system experience.",
    signatureTitle:
      "Built around the idea that AI should help more and explain itself better.",
    signatureBody:
      "The design philosophy behind Upcube OS is that AI assistance built into the system should be more visible, more understandable, and more controllable than AI assistance that lives inside a third-party app. Every feature is an expression of that philosophy in a specific part of the computing experience.",
    signatureCards: [
      {
        title: "System-level AI assistance",
        body: "Because Upcube OS is designed with AI as part of the operating system itself, a request like organize my documents or summarize this PDF does not require knowing which app to open. The system can address those requests by working across the relevant parts of your computer.",
      },
      {
        title: "Task-scoped permissions",
        body: "Instead of broad one-time permission grants, Upcube OS scopes access requests to the specific task being performed. Read only. 20 minutes. No changes to files. Saying yes to one task does not mean saying yes to everything.",
      },
      {
        title: "Approval before important actions",
        body: "Sending an email, deleting files, uploading documents, changing settings, or running risky commands all trigger an approval step. The prompt describes the action in plain language, shows the specific targets, and gives you the choice to approve, edit, or cancel.",
      },
    ],
    featureStories: [
      {
        title: "Readable activity history",
        body: "Upcube OS keeps a history of what AI helped with, which files it used, what changed, and what can be undone. When possible, the system preserves a prior version before making changes so comparison and undo are available without a separate backup workflow.",
      },
      {
        title: "Meaning-based search",
        body: "Search works on what you remember about a file, not on the exact file name. Requests like find my tax documents or show files about my Medicaid case describe the context of what you are looking for. The system understands what you mean.",
      },
      {
        title: "Controllable AI modes",
        body: "Upcube OS provides five AI assistance levels: Manual where AI only suggests, Assisted where AI drafts and asks first, Balanced where AI handles safe tasks and asks before risky ones, Automatic where AI runs approved routines within defined limits, and Locked Down where AI is mostly off.",
      },
    ],
    techCards: [
      {
        title: "Reversibility by design",
        body: "Where possible, Upcube OS saves a prior version before making changes. After AI assistance, you can view what changed, compare the before and after, and undo if the result is not what you wanted.",
      },
      {
        title: "Intelligent task and battery management",
        body: "Tasks requiring significant processing can be scheduled to run when the device is charging, connected to Wi-Fi, cooled down, or not actively in use. When a task is paused, the system explains why and commits to resuming when the condition is met.",
      },
      {
        title: "System-level explainability",
        body: "When something on the computer is confusing or unexpected, you can ask about it and get a specific answer. Why is my battery draining returns which apps were responsible and for how long, with a suggestion for what can be paused.",
      },
    ],
    useCases: [
      {
        title: "Organize a parent's care documents",
        body: "Ask Upcube OS to organize care documents and make a checklist of what is missing. It finds the relevant files, groups them by category, names what is present and what appears missing, and asks for approval before moving anything.",
      },
      {
        title: "Recover from a confusing file change",
        body: "Ask why a file changed and the system returns which assistant action changed it, the time it happened, whether you approved it, and whether undo is still available.",
      },
      {
        title: "Clean up a Downloads folder without anxiety",
        body: "Upcube OS scans the folder, shows a breakdown by category, proposes what to do with each group, and makes clear that nothing will be deleted until you approve each category individually.",
      },
    ],
    ecosystemLinks: [
      {
        title: "Upcube Mobile OS",
        body: "The trust-first design philosophy carries into the phone experience through Upcube Mobile OS.",
        href: "/products/upcube-mobile-os",
      },
      {
        title: "UpcubeAI",
        body: "Connect the desktop OS experience to the AI workspace and assistant platform for deeper research and structured work.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Cloud",
        body: "Cloud infrastructure and compute for AI workloads and connected features that Upcube OS depends on.",
        href: "/products/cloud",
      },
    ],
    finalCtaTitle: "A computer that helps more and hides less.",
    finalCtaBody:
      "Upcube OS is an experimental AI-first operating system in active development with a public consumer release planned for 2028. AI assistance is built into the system, visible, task-scoped, and approvable before anything important happens. Recoverable when something does not go as planned.",
    finalPrimaryAction: {
      label: "Read the Upcube OS vision",
      href: "/vision",
    },
    finalSecondaryAction: {
      label: "Read trust",
      href: "/trust",
    },
  },
  {
    slug: "upcube-mobile-os",
    name: "Upcube Mobile OS",
    eyebrow: "Upcube Mobile OS",
    headline: "A phone built around intelligence, not just apps.",
    summary:
      "Upcube Mobile OS is an original AI-native mobile operating system built from first principles: trusted app launch, process isolation, system-owned daemons, out-of-process rendering, and AI available across the whole system with clear per-app permission controls and user-owned memory. Public consumer release planned for 2028.",
    seoTitle:
      "Upcube Mobile OS | AI-Native Mobile Operating System with Trusted Launch and Privacy Controls",
    seoDescription:
      "Upcube Mobile OS is an experimental AI-first mobile operating system built from first principles. Trusted app launch, process isolation, system daemons, out-of-process rendering, per-app AI permissions, and privacy-aware system intelligence. Public consumer release planned for 2028.",
    primaryAction: {
      label: "Read the vision",
      href: "/vision",
    },
    secondaryAction: {
      label: "Explore trust",
      href: "/trust",
    },
    heroHighlights: [
      "AI is a system layer available across settings, search, notifications, files, photos, privacy, storage, and diagnostics.",
      "Every app has understandable controls for local AI, cloud AI, memory access, and sensitive action confirmation.",
      "The phone tells you when AI ran, what it accessed, whether it stayed on device, and whether cloud AI was involved.",
    ],
    heroImage: {
      src: "/product-art/a32ca26a50a12c330df049b8b402b6a8.jpg",
      alt: "Textured abstract artwork for Upcube Mobile OS.",
    },
    availabilityNote:
      "Public consumer release is planned for 2028 while improvements continue across the product and mobile system direction.",
    signatureTitle:
      "Built around what a phone could be if intelligence and trust were designed in from the start.",
    signatureBody:
      "Most phone platforms treat privacy as a settings menu and AI as an assistant app. Upcube Mobile OS explores what changes when both are part of the operating system itself: visible permissions, system-level intelligence, trusted app boundaries, and a phone that can explain what it is doing in plain language.",
    signatureCards: [
      {
        title: "AI across the whole system",
        body: "A request like make my phone more private does not open an assistant window and ask you to navigate settings yourself. The system understands the request, identifies the relevant settings, explains what each one does, and surfaces the right action.",
      },
      {
        title: "Trusted app launch and process isolation",
        body: "Every app launch goes through a trust boundary, every app runs in a defined process boundary, and access to system resources requires explicit permission. Security boundaries are structural rather than advisory.",
      },
      {
        title: "Privacy-aware intelligence",
        body: "The product direction includes a private AI mode where cloud AI is blocked, memory saving is paused, apps must ask before using AI, sensitive data stays on device, and AI activity is logged clearly. Users can inspect, delete, pause, or limit what the system remembers at any time.",
      },
    ],
    featureStories: [
      {
        title: "Plain-language system requests",
        body: "Find the photo from last summer, why is my battery draining, summarize what I missed, clean up storage but ask me before deleting anything. The system understands the request, identifies the relevant data or settings, explains what it plans to do, and confirms before any action with consequences.",
      },
      {
        title: "Out-of-process rendering architecture",
        body: "App rendering happens in a system-owned render server rather than inside each app process. This means an app crash does not crash the display, app processes cannot directly access the graphics buffer, and the system retains control over frame composition.",
      },
      {
        title: "Diagnostics and system explainability",
        body: "When something unexpected happens, the phone can describe what caused it in plain terms. Why is the battery draining returns which apps were responsible and for how long. Why was a permission denied returns the specific rule that applied.",
      },
    ],
    techCards: [
      {
        title: "Kernel-adjacent module foundations",
        body: "The project includes foundations for memory management, process lifecycle, inter-process communication, scheduling, signing and trust, sandboxing, and virtual filesystem concepts organized as separate CMake build targets. These are research and prototype components, not a production kernel replacement.",
      },
      {
        title: "System daemon architecture",
        body: "The build includes daemon directions for supervision, trust, app installation, rendering, diagnostics, location, notifications, thermal management, power, networking, and audio session management. Daemon names reflect subsystem boundaries and should be evaluated based on source and test evidence.",
      },
      {
        title: "CMake and CTest build system",
        body: "The build system uses CMake 3.20 or later, Ninja, C11, and CTest. The top-level CMake configuration wires subsystem directories conditionally so individual subsystems can be enabled, disabled, and validated independently.",
      },
    ],
    useCases: [
      {
        title: "Understand why the battery is draining",
        body: "Ask the phone why the battery is draining and get a description of which processes were active and for how long, which used significant processing power, and which could be paused or restricted without affecting active work.",
      },
      {
        title: "Make the phone more private without a settings tutorial",
        body: "Ask Upcube Mobile OS to make the phone more private. The system identifies relevant settings, explains what each one does and what the tradeoff is, and offers to make the changes with your confirmation. Nothing changes without your approval.",
      },
      {
        title: "Find a photo without remembering when it was taken",
        body: "Ask for the photo from last summer at the beach with the red umbrella. The system uses semantic search across the photo library to surface candidates based on the description rather than the date.",
      },
    ],
    ecosystemLinks: [
      {
        title: "Upcube OS",
        body: "The trust-first, AI-as-system-layer design philosophy of Upcube Mobile OS carries into the desktop experience through Upcube OS.",
        href: "/products/upcube-os",
      },
      {
        title: "UpcubeAI",
        body: "Connect the mobile experience to the AI workspace and assistant platform for research, document work, and structured tasks.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Cloud",
        body: "Cloud infrastructure and governed services that Upcube Mobile OS depends on for cloud-connected AI tasks.",
        href: "/products/cloud",
      },
    ],
    finalCtaTitle: "An original mobile OS built for the AI era, from the system up.",
    finalCtaBody:
      "Upcube Mobile OS is an experimental systems project and AI-native product vision in active development with a planned public consumer release in 2028. The architecture includes kernel-adjacent module foundations, system daemon boundaries, rendering service foundations, app-facing frameworks, and sandbox and trust seams. The product vision is a phone where intelligence is built into the system layer, privacy is visible and controllable, and plain-language requests get real system responses.",
    finalPrimaryAction: {
      label: "Read the Upcube Mobile OS vision",
      href: "/vision",
    },
    finalSecondaryAction: {
      label: "Read trust",
      href: "/trust",
    },
  },
  {
    slug: "voice",
    name: "Upcube Voice",
    eyebrow: "AI & Voice",
    headline: "The voice platform for future Upcube devices.",
    summary:
      "Upcube Voice brings Ethen into the devices around you — privately, intentionally, and in real time. It is the AI voice platform direction for future Upcube headphones, earbuds, home audio, car audio, and companion devices, designed around user control from the first interaction.",
    seoTitle: "Upcube Voice | AI Voice Platform for Future Upcube Devices",
    seoDescription:
      "Upcube Voice is the AI voice platform for future Upcube devices, built around private push-to-talk, real-time assistance, and clear user control.",
    primaryAction: {
      label: "Explore Voice",
      href: "/news/upcube-voice-preview",
    },
    secondaryAction: {
      label: "Explore UpcubeAI",
      href: "/products/upcube-ai",
    },
    heroHighlights: [
      "AI voice platform for future Upcube-manufactured devices — not a hardware launch claim.",
      "Private push-to-talk with real-time assistance and no always-listening mode.",
      "Backend-issued ephemeral sessions with no raw audio persisted.",
    ],
    heroImage: {
      src: "/product-art/FAA_Rhythm.jpg",
      alt: "Rhythmic abstract art reflecting real-time voice flow.",
    },
    availabilityNote:
      "Hardware is not launched yet, and no public Voice site is available in this repo.",
    signatureTitle:
      "A voice platform built to feel private, intentional, and grounded.",
    signatureBody:
      "Upcube Voice is presented as the AI voice foundation for future Upcube devices. The public story focuses on real-time assistance, deliberate activation, and clear product limits instead of overstating availability.",
    signatureCards: [
      {
        title: "Talk to Ethen naturally",
        body: "Upcube Voice brings natural, real-time conversation into future device experiences, extending Ethen beyond the workspace without turning the preview into a launch claim.",
      },
      {
        title: "Push-to-talk by design",
        body: "Voice interaction is built around deliberate activation, not always-on listening, so control stays clear.",
      },
      {
        title: "Built for future Upcube headphones and earbuds",
        body: "The preview covers future Upcube-manufactured headphones and earbuds while staying honest that public hardware availability has not launched yet.",
      },
    ],
    featureStories: [
      {
        title: "Home audio and car audio direction",
        body: "Upcube Voice extends beyond wearables into future home audio, car audio, and companion-device experiences, while remaining clear that hardware has not launched yet.",
      },
      {
        title: "Real-time conversation architecture",
        body: "The platform direction is built around real-time voice assistance backed by ephemeral sessions, giving the product a serious software foundation without inventing a public service endpoint.",
      },
      {
        title: "Privacy-first voice controls",
        body: "Public copy stays focused on private push-to-talk, no always-listening mode, and no raw audio persistence.",
      },
    ],
    techCards: [
      {
        title: "Private push-to-talk sessions",
        body: "Voice sessions are backend-issued and ephemeral, supporting real-time interaction without claiming a public Voice service endpoint.",
      },
      {
        title: "No always-listening mode",
        body: "Activation stays user-driven, avoiding ambient listening or passive device monitoring claims.",
      },
      {
        title: "No raw audio persisted",
        body: "The public privacy boundary stays simple and clear: raw audio is not persisted.",
      },
    ],
    useCases: [
      {
        title: "Voice across the Upcube ecosystem",
        body: "Future headphones, earbuds, home audio, car audio, and companion devices can connect back to Ethen and the wider Upcube product family.",
      },
      {
        title: "Ask for help on the move",
        body: "Future device experiences can make quick answers and assistance easier while staying inside a deliberate push-to-talk model.",
      },
      {
        title: "Keep privacy expectations clear",
        body: "The preview sets expectations around explicit activation, ephemeral sessions, and no raw audio persistence instead of overstating readiness or hardware availability.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Explore the assistant and workspace platform behind the Voice direction.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Mobile OS",
        body: "Connect the voice preview to the broader mobile and device computing direction.",
        href: "/products/upcube-mobile-os",
      },
      {
        title: "Upcube OS",
        body: "Follow the trust-first operating-system direction for future device experiences.",
        href: "/products/upcube-os",
      },
    ],
    finalCtaTitle: "Preview voice without overstating launch status.",
    finalCtaBody:
      "Upcube Voice is the platform direction for future Upcube devices — built around private push-to-talk, real-time assistance, and user control, with hardware not launched yet.",
    finalPrimaryAction: {
      label: "Explore Voice",
      href: "/news/upcube-voice-preview",
    },
    finalSecondaryAction: {
      label: "Explore UpcubeAI",
      href: "/products/upcube-ai",
    },
  },
  {
    slug: "university",
    name: "Upcube Education",
    eyebrow: "Education & Learning",
    headline: "100K courses at $5 each — learning paths for the AI age.",
    summary:
      "Upcube Education brings structured learning into the Upcube ecosystem. Explore 100K courses with simple $5 course pricing, built around AI education, product training, technical courses, guided learning paths, and future credential-style programs.",
    seoTitle:
      "Upcube Education | 100K Courses — AI Education and Learning Platform",
    seoDescription:
      "Upcube Education is the AI education and learning platform with 100K courses at $5 course pricing for the Upcube ecosystem, built for training, technical courses, and guided paths.",
    primaryAction: {
      label: "Open Education",
      href: "https://university.upcube.ai",
    },
    secondaryAction: {
      label: "Read the preview",
      href: "/news/upcube-university-preview",
    },
    heroHighlights: [
      "100K courses with simple $5 course pricing across the Upcube ecosystem.",
      "AI education, product training, technical courses, and guided learning paths.",
      "Not a legal university, accredited institution, or degree program.",
    ],
    heroImage: {
      src: "/product-art/Senecio.jpeg",
      alt: "Classic abstract composition representing structured learning.",
    },
    availabilityNote:
      "The public app domain is https://university.upcube.ai, while accreditation, degrees, and public enrollment are not claimed on this page.",
    signatureTitle: "Serious learning, structured for the AI era.",
    signatureBody:
      "Upcube Education is the learning platform direction for the broader ecosystem — focused on AI education, product training, guided technical learning, and future credential-style pathways without overstating legal school status or program availability.",
    signatureCards: [
      {
        title: "Learning paths for the AI age",
        body: "Build a stronger working understanding of AI concepts, workflows, product systems, and practical use.",
      },
      {
        title: "AI education and product training",
        body: "Learn how UpcubeAI, Voice, Cloud, commerce, and future computing products connect without scattering training across disconnected materials.",
      },
      {
        title: "Guided learning paths",
        body: "Move from fundamentals into deeper product and technical context through structured paths designed to build confidence over time.",
      },
    ],
    featureStories: [
      {
        title: "Technical courses across the Upcube ecosystem",
        body: "Upcube Education brings technical learning closer to real software, infrastructure, AI workflows, and product surfaces.",
      },
      {
        title: "Learning across the ecosystem",
        body: "The product direction spans AI, commerce, cloud infrastructure, voice, and future computing, helping learners understand how the broader Upcube platform fits together.",
      },
      {
        title: "Future credential-style programs",
        body: "The long-term direction may include credential-style learning programs, while the public page avoids unsupported claims around accreditation, degrees, certifications, or open enrollment status.",
      },
    ],
    techCards: [
      {
        title: "Structured learning architecture",
        body: "Guided paths, course modules, and product-based sequencing create the foundation for a more coherent learning experience.",
      },
      {
        title: "Product-aware training direction",
        body: "Courses can teach through the actual Upcube product family, keeping education close to real systems, workflows, and interfaces.",
      },
      {
        title: "Clear boundaries on what is live",
        body: "Public positioning stays disciplined around future program direction, without making unsupported claims about legal status, accreditation, degrees, or credentials.",
      },
    ],
    useCases: [
      {
        title: "Learn AI through real product workflows",
        body: "Use guided material to understand how AI tools, product systems, and interface decisions connect in practice.",
      },
      {
        title: "Train across the Upcube platform",
        body: "Follow learning paths across UpcubeAI, Voice, Cloud, commerce, and computing products as one connected ecosystem.",
      },
      {
        title: "Prepare for deeper technical study",
        body: "Use course-style material and structured paths to build toward advanced product, cloud, systems, and future computing topics over time.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Connect learning paths back to the AI workspace and assistant surface at the center of the ecosystem.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Cloud",
        body: "Follow technical learning into cloud workflows, infrastructure systems, and developer-facing product direction.",
        href: "/products/cloud",
      },
      {
        title: "Upcube Voice",
        body: "See how training and guided learning can extend into voice, device, and future interaction surfaces.",
        href: "/products/voice",
      },
    ],
    finalCtaTitle:
      "Learning for the ecosystem, without overstating what is live.",
    finalCtaBody:
      "Upcube Education presents the learning platform direction for Upcube — with 100K courses, simple $5 course pricing, a live app destination, and future program ambition kept clear, grounded, and responsibly framed.",
    finalPrimaryAction: {
      label: "Open Education",
      href: "https://university.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Read the preview",
      href: "/news/upcube-university-preview",
    },
  },
];

export const upcubeProductsBySlug: Record<UpcubeProductSlug, UpcubeProduct> =
  upcubeProducts.reduce(
    (acc, product) => {
      acc[product.slug] = product;
      return acc;
    },
    {} as Record<UpcubeProductSlug, UpcubeProduct>,
  );

export function getUpcubeProductBySlug(slug: UpcubeProductSlug) {
  return upcubeProductsBySlug[slug];
}
