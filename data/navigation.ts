export type NavItem = {
  id: "home" | "profile" | "experience" | "stack" | "projects" | "contact";
  label: string;
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "profile", label: "Profile" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
