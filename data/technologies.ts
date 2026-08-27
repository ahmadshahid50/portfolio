export type TechnologyGroup = {
  title: string;
  items: string[];
};

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Frontend Core",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Vite"],
  },
  {
    title: "UI / Styling",
    items: ["CSS3", "Tailwind CSS", "Bootstrap", "SASS / SCSS", "CSS Modules"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub",  "npm / pnpm", "VS Code"],
  },
];
