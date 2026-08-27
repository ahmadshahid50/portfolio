export type TechnologyGroup = {
  title: string;
  items: string[];
};

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend / APIs",
    items: ["Node.js", "Express", "REST APIs", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vite", "npm / pnpm", "VS Code"],
  },
];
