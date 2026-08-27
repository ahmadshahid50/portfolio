export type ExperienceItem = {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export const experience: ExperienceItem[] = [
    
  {
    position: "Frontend Developer",
    company: "Solution Surface",
    period: "6 Months",
    location: "Lahore",
    description:
      "Building responsive interfaces for product work, marketing websites, and business-focused digital experiences.",
    responsibilities: [
      "Developed production-ready web interfaces with a strong focus on usability and performance.",
      "Translated design requirements into structured, reusable React components and layouts.",
      "Integrated frontend interfaces with APIs, content sources, and third-party services.",
      "Improved accessibility, responsiveness, and consistency across product pages and landing experiences.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    position: "Frontend Developer",
    company: "NextClick IT Solutions",
    period: "2.5 Years",
    location: "Lahore",
    description:
      "Focused on UI quality, maintainable frontend architecture, and clear interaction patterns across digital products.",
    responsibilities: [
      "Created reusable frontend systems for fast iteration and cleaner product maintenance.",
      "Built polished marketing pages, dashboards, and business-facing experiences.",
      "Refined layout systems, motion details, and UX flows for a more confident product feel.",
      "Worked across design and engineering to keep frontend implementation aligned with product goals.",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "React", "Node.js", "Git"],
  },
];
