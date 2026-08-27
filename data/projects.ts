export type Project = {
  id: string;
  name: string;
  type: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "commerce-experience",
    name: "Commerce Experience",
    type: "E-commerce Website",
    description:
      "A customer-focused storefront balancing conversion, performance, and a clean product narrative.",
    overview:
      "Built for a retail brand looking to improve product discovery and streamline the buying journey across mobile and desktop.",
    problem:
      "The product experience needed a clearer structure, stronger merchandising flow, and more consistent mobile performance.",
    solution:
      "I implemented a modular storefront layout with reusable product blocks, responsive sections, and a production-minded UI system built for speed.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive storefront layout",
      "Responsive product detail presentation",
      "Consistent design language across categories",
      "Optimized frontend performance and page structure",
    ],
  },
  {
    id: "saas-dashboard",
    name: "SaaS Dashboard",
    type: "Product Interface",
    description:
      "A dashboard concept focused on clarity, quick scanning, and maintainable complex data patterns.",
    overview:
      "Designed for product and operational visibility, with a layout that supports analytics, team actions, and quick information access.",
    problem:
      "Dense dashboards can make core information harder to process, especially when the interface is trying to communicate multiple priorities at once.",
    solution:
      "I structured the interface around hierarchy, whitespace, and reusable data cards to help people understand status and metrics without clutter.",
    technologies: ["React", "TypeScript", "CSS", "REST APIs"],
    features: [
      "Data-heavy dashboard layout",
      "Reusable stat card components",
      "Clear hierarchy and filtering patterns",
      "Responsive states for smaller screens",
    ],
  },
  {
    id: "healthcare-site",
    name: "Healthcare Service Website",
    type: "Service Website",
    description:
      "A patient-friendly digital experience built to clarify services, trust signals, and contact information.",
    overview:
      "Created for a healthcare service brand that needed a calm, accessible presentation across a range of user journeys.",
    problem:
      "Health-related information needs to feel trustworthy, easy to scan, and accessible without overwhelm.",
    solution:
      "I built a clear service structure with thoughtful typography, reassuring interface patterns, and consistent CTA placement.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript", "SEO"],
    features: [
      "Accessible service and information layout",
      "Conversion-focused call-to-action flow",
      "Clear content hierarchy and trust-building sections",
      "Responsive presentation across devices",
    ],
  },
  {
    id: "business-platform",
    name: "Business Platform",
    type: "Marketing + Product Experience",
    description:
      "A flexible platform interface designed for business communication, positioning, and customer engagement.",
    overview:
      "Built to support a business brand with a strong digital presence, product explanation, and customer entry points.",
    problem:
      "The business needed a frontend foundation that could clearly communicate value while staying flexible as content and services evolved.",
    solution:
      "I built a modular landing experience with reusable sections, strong messaging hierarchy, and a consistent visual system that is easy to extend.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Flexible content-driven sections",
      "Reusable business storytelling blocks",
      "Fast and polished responsive experience",
      "Structured UI that supports future iteration",
    ],
  },
];
