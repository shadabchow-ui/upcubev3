export type AccountNavItem = {
  id: string;
  label: string;
  href: string;
};

export type AccountOverviewCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  status?: string;
};

export const accountDashboardTitle = "Account";
export const accountDashboardDescription =
  "Your Upcube Console account. Access workspaces, manage your profile, and launch products across the Upcube family.";

export const accountNavItems: AccountNavItem[] = [
  { id: "overview", label: "Overview", href: "/account" },
  { id: "profile", label: "Profile", href: "/account/profile" },
  { id: "security", label: "Security", href: "/account/security" },
  { id: "apps", label: "Connected Apps", href: "/account/apps" },
  { id: "privacy", label: "Privacy & Data", href: "/account/privacy" },
  { id: "billing", label: "Billing & Plans", href: "/account/billing" },
  { id: "storage", label: "Storage & Usage", href: "/account/storage" },
  { id: "help", label: "Help & Support", href: "/account/help" },
];

export const accountOverviewCards: AccountOverviewCard[] = [
  {
    id: "status",
    title: "Account Status",
    description:
      "Your central Upcube Account manages identity, access, and profile across the entire product family. Visit the Upcube Console to manage workspaces and launch products.",
    href: "https://console.upcube.ai",
    status: "Go to Console",
  },
  {
    id: "apps",
    title: "Your Upcube Apps",
    description:
      "Browse and launch all Upcube products from the app launcher or product pages. Each product is accessible from the Upcube Console workspace.",
    href: "/account/apps",
    status: "View products",
  },
  {
    id: "security",
    title: "Security Checkup",
    description:
      "Security settings, devices, and session management are handled through the central Upcube Account service. Sign in to review your security posture.",
    href: "/signin",
    status: "Sign in",
  },
  {
    id: "billing",
    title: "Plan & Billing",
    description:
      "Billing, subscription plans, and invoices are managed through the Upcube Console workspace. Sign in to view billing details for your account.",
    href: "https://console.upcube.ai",
    status: "Open Console",
  },
  {
    id: "privacy",
    title: "Privacy & Data",
    description:
      "Review Upcube's privacy practices and data handling on the Privacy and Trust pages. Privacy controls are accessible after signing in.",
    href: "/privacy",
    status: "Read Policy",
  },
  {
    id: "storage",
    title: "Storage & Usage",
    description:
      "Storage and usage tracking are available within Upcube Console and Cloud products. Sign in to view your workspace storage and usage details.",
    href: "/signin",
    status: "Sign in",
  },
  {
    id: "help",
    title: "Help & Support",
    description:
      "Get help with Upcube products. Reach the team through the Contact page or explore product pages for documentation and information.",
    href: "/contact",
    status: "Get help",
  },
];

export const profileSections = [
  {
    id: "profile-status",
    title: "Profile settings",
    description:
      "Your profile — including name, email, avatar, preferences, and notification settings — is managed through the central Upcube Account. Sign in to access and update your profile.",
  },
  {
    id: "profile-info",
    title: "What you can do",
    description:
      "Once signed in, you can update your display name, profile photo, language preferences, and notification settings. Profile changes apply across all Upcube products and the Upcube Console.",
  },
  {
    id: "profile-cta",
    title: "Get started",
    description:
      "Sign in to your Upcube Account to manage your profile. New users can create an account to access the Upcube Console and product workspace.",
  },
];

export const securitySections = [
  {
    id: "security-status",
    title: "Security settings",
    description:
      "Password management, two-factor authentication, and session controls are handled through the central Upcube Account service. Sign in to review and manage your security settings.",
  },
  {
    id: "security-info",
    title: "Security principles",
    description:
      "Upcube is designed with security awareness from the start. Products use scoped permissions, clear approval workflows, and privacy-aware interfaces. Security controls and certifications are documented on the Security and Trust pages.",
  },
  {
    id: "security-cta",
    title: "Related pages",
    description:
      "Visit the Security, Privacy, and Trust pages for current information about how Upcube approaches security and data protection. Sign in to access your account security settings.",
  },
];

export const appsSections = [
  {
    id: "apps-status",
    title: "Your Upcube products",
    description:
      "All Upcube products can be launched from the app launcher, product pages, or the Upcube Console workspace. Sign in to access your workspace and launch products with your account context.",
  },
  {
    id: "apps-live",
    title: "Product family",
    description:
      "The Upcube product family includes AI, Cloud, Earth, News, Books, Games, Jobs, Quantum, Robotics, Commerce, Education, Research, and more. Browse and explore all products from the Products page.",
  },
  {
    id: "apps-cta",
    title: "Explore products",
    description:
      "Browse the full Upcube product family from the Products page. Each product can be explored without signing in. Sign up for an account to access workspace features in the Upcube Console.",
  },
];

export const privacySections = [
  {
    id: "privacy-status",
    title: "Privacy controls",
    description:
      "Data management, download requests, and account privacy controls are available through the Upcube Console after signing in. Review your privacy options in your account settings.",
  },
  {
    id: "privacy-info",
    title: "Privacy approach",
    description:
      "Upcube products are designed with privacy awareness. Data collection, retention, and user control details are outlined on the Privacy and Trust pages.",
  },
  {
    id: "privacy-cta",
    title: "Related pages",
    description:
      "Visit the Privacy, Trust, and Legal pages for current information about data handling and privacy practices. Sign in to access your privacy controls.",
  },
];

export const billingSections = [
  {
    id: "billing-status",
    title: "Plan & billing",
    description:
      "Billing management, invoices, payment methods, and subscription plans are available through the Upcube Console workspace. Sign in to review your billing details.",
  },
  {
    id: "billing-info",
    title: "Current availability",
    description:
      "Pricing plans and commercial terms are available on the Pricing page and within the Upcube Console. Product availability varies by product and release stage.",
  },
  {
    id: "billing-cta",
    title: "Get started",
    description:
      "Contact the team for sales and partnership inquiries. Visit the Pricing page for current plans. Sign in to access your billing dashboard in the Upcube Console.",
  },
];

export const storageSections = [
  {
    id: "storage-status",
    title: "Storage & usage",
    description:
      "Usage quotas, file storage, and data consumption are tracked within your Upcube Console workspace. Sign in to view your storage and usage details.",
  },
  {
    id: "storage-info",
    title: "Storage across products",
    description:
      "Upcube Cloud offers infrastructure services with storage capabilities. Usage details and quotas are available in the Upcube Console after signing in.",
  },
  {
    id: "storage-cta",
    title: "Related products",
    description:
      "Explore Cloud and Compute product pages for current infrastructure details. Sign in to the Upcube Console to manage your workspace storage.",
  },
];

export const helpSections = [
  {
    id: "help-status",
    title: "Get help with Upcube products",
    description:
      "Use the Contact page to reach the Upcube team. Browse product pages for specific product information. Visit the FAQ for common questions. For account-specific help, sign in to the Upcube Console.",
  },
  {
    id: "help-links",
    title: "Support resources",
    description:
      "Contact page for inquiries and support requests. FAQs for common questions. Product pages for specific product information and launch destinations. Upcube Console workspace for account and billing support.",
  },
  {
    id: "help-note",
    title: "Getting started",
    description:
      "New to Upcube? Create an account to access workspaces, launch products, and manage your profile from the Upcube Console. Visit the Products page to explore the full Upcube family.",
  },
];
