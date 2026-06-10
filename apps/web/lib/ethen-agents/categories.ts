export type EthenCategory = {
  id: string;
  name: string;
  description: string;
  status: "Category";
};

export const ethenCategories: EthenCategory[] = [
  {
    id: "featured",
    name: "Featured",
    description: "Hand-picked agents for the most common tasks people do every day.",
    status: "Category",
  },
  {
    id: "productivity",
    name: "Productivity",
    description: "Get more done. Agents that help you manage tasks, schedules, and workflows.",
    status: "Category",
  },
  {
    id: "writing",
    name: "Writing",
    description: "Draft, edit, and polish anything from emails to long-form content.",
    status: "Category",
  },
  {
    id: "research",
    name: "Research",
    description: "Find, synthesize, and summarize information from across the web.",
    status: "Category",
  },
  {
    id: "coding",
    name: "Coding",
    description: "Write, review, and debug code across languages and frameworks.",
    status: "Category",
  },
  {
    id: "business",
    name: "Business",
    description: "Strategy, analysis, proposals, and day-to-day business operations.",
    status: "Category",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    description: "Property search, market analysis, and real estate workflows.",
    status: "Category",
  },
  {
    id: "finance",
    name: "Finance",
    description: "Budgeting, analysis, financial modeling, and investment research.",
    status: "Category",
  },
  {
    id: "travel",
    name: "Travel",
    description: "Trip planning, itineraries, local guides, and travel logistics.",
    status: "Category",
  },
  {
    id: "education",
    name: "Education",
    description: "Learn faster. Tutors, explainers, and guided learning for any subject.",
    status: "Category",
  },
  {
    id: "media",
    name: "Media",
    description: "Script, produce, and edit content across video, audio, and social.",
    status: "Category",
  },
  {
    id: "documents",
    name: "Documents",
    description: "Read, summarize, extract, and work with any document format.",
    status: "Category",
  },
  {
    id: "developer-tools",
    name: "Developer Tools",
    description: "APIs, automation, integrations, and developer workflows.",
    status: "Category",
  },
  {
    id: "data-analysis",
    name: "Data & Analysis",
    description: "Analyze datasets, build charts, and turn raw data into clear insights.",
    status: "Category",
  },
  {
    id: "local-services",
    name: "Local Services",
    description: "Find local businesses, services, and resources near you.",
    status: "Category",
  },
];

export function getEthenCategoryById(id: string): EthenCategory | undefined {
  return ethenCategories.find((c) => c.id === id);
}
