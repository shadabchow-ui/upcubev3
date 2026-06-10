export type HomeLinkItem = {
  title: string;
  description?: string;
  href: string;
  tag?: string;
};

export type HomeProofPoint = {
  title: string;
  description: string;
  href: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

export type FeatureBand = {
  title: string;
  description: string;
  href: string;
  cta: string;
  tone: "teal" | "amber" | "blue" | "green";
};

export const homeBuildSectionIntro =
  "Ethen is a premium AI agent marketplace where people discover and use specialized agents for real-world work.";


export const homeCapabilityPoints: HomeProofPoint[] = [
  {
    title: "Search and discover",
    description:
      "Browse Ethen's agent marketplace by category. Find specialized agents built for your exact workflow — from research and writing to finance and coding.",
    href: "https://ethen.upcube.ai",
    links: [
      { label: "Try Ethen", href: "https://ethen.upcube.ai" },
    ],
  },
  {
    title: "Get real work done",
    description:
      "Agents in Ethen are built for outcomes. Ask questions, synthesize research, plan work, write documents, analyze data, and move from idea to result.",
    href: "https://ethen.upcube.ai",
    links: [
      { label: "Open Ethen", href: "https://ethen.upcube.ai" },
    ],
  },
  {
    title: "Built by Upcube",
    description:
      "Upcube builds Ethen. The platform is designed with clear capability framing, honest agent descriptions, and a premium experience across every category.",
    href: "/company",
    links: [
      { label: "About Upcube", href: "/company" },
    ],
  },
];

export const featureBands: FeatureBand[] = [
  {
    title: "Productivity",
    description:
      "Get more done with agents built for task management, planning, and execution.",
    href: "https://ethen.upcube.ai",
    cta: "Explore agents",
    tone: "green",
  },
  {
    title: "Writing",
    description:
      "Draft, edit, and refine documents, emails, and long-form content with dedicated writing agents.",
    href: "https://ethen.upcube.ai",
    cta: "Explore agents",
    tone: "teal",
  },
  {
    title: "Research",
    description:
      "Search the web, extract sources, synthesize evidence, and export structured research briefs.",
    href: "https://ethen.upcube.ai",
    cta: "Explore agents",
    tone: "teal",
  },
  {
    title: "Coding",
    description:
      "Write, review, debug, and document code across languages and frameworks.",
    href: "https://ethen.upcube.ai",
    cta: "Explore agents",
    tone: "blue",
  },
  {
    title: "Business",
    description:
      "Plan, analyze, and operate with agents built for teams and decision-makers.",
    href: "https://ethen.upcube.ai",
    cta: "Explore agents",
    tone: "amber",
  },
  {
    title: "Finance",
    description:
      "Analyze, model, and plan financial workflows with precision-built finance agents.",
    href: "https://ethen.upcube.ai",
    cta: "Explore agents",
    tone: "green",
  },
  {
    title: "Data & Analysis",
    description:
      "Clean, explore, and visualize data to surface answers fast.",
    href: "https://ethen.upcube.ai",
    cta: "Explore agents",
    tone: "blue",
  },
  {
    title: "Education",
    description:
      "Learn, practice, and build knowledge with guided AI instruction.",
    href: "https://ethen.upcube.ai",
    cta: "Explore agents",
    tone: "teal",
  },
];

export const stories: HomeLinkItem[] = [
  {
    title: "Introducing Ethen",
    description:
      "Ethen is a premium AI agent marketplace where people discover and use specialized agents for real-world work.",
    href: "/news/upcube-ai-launch",
    tag: "Agent marketplace",
  },
  {
    title: "Agents for productivity",
    description:
      "Get more done with agents designed for planning, task management, and structured execution workflows.",
    href: "https://ethen.upcube.ai",
    tag: "Productivity",
  },
  {
    title: "Agents for research and writing",
    description:
      "Search, synthesize, draft, and edit with agents built for knowledge workers and writers.",
    href: "https://ethen.upcube.ai",
    tag: "Writing & Research",
  },
  {
    title: "Agents for coding",
    description:
      "Write, review, debug, and document code with agents that understand the full development workflow.",
    href: "https://ethen.upcube.ai",
    tag: "Coding",
  },
  {
    title: "Agents for business and finance",
    description:
      "Plan, analyze, model, and decide with agents built for professional and financial workflows.",
    href: "https://ethen.upcube.ai",
    tag: "Business & Finance",
  },
  {
    title: "Upcube company direction",
    description:
      "Upcube builds Ethen — an AI agent marketplace for real-world work. The company mission and product direction.",
    href: "/company",
    tag: "Company",
  },
  {
    title: "Research direction",
    description:
      "Editorial work on architecture, evaluation, and systems thinking at Upcube.",
    href: "/research",
    tag: "Research",
  },
];
