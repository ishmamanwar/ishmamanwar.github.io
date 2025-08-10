import type { LogosKey } from "./logos";

export type SkillGroup = {
  label: string;
  items: LogosKey[] | string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Languages",
    items: ["C#", "Python", "TypeScript", "JavaScript"],
  },
  {
    label: "Frontend",
    items: ["HTML5", "React.js", "Vue.js"],
  },
  {
    label: "UI & Styling",
    items: ["CSS", "SCSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    label: "Backend & APIs",
    items: ["ASP.NET Core", "Node.js", "Express.js", "Flask", "REST"],
  },
  {
    label: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    label: "Testing",
    items: ["Vitest", "Jest", "React Testing Library", "Pytest"],
  },
  {
    label: "DevOps",
    items: ["Git", "Docker", "Azure DevOps", "CI/CD", "PowerShell", "Bash"],
  },
  {
    label: "LLMs & AI Tools",
    items: ["ChatGPT", "OpenAI", "Claude", "Cursor"],
  },
  {
    label: "Platforms & Hosting",
    items: ["Vercel", "Render", "Supabase", "GitHub Pages"],
  },
  {
    label: "Practices & Methodologies",
    items: ["Agile", "Scrum", "Kanban", "TDD"],
  },
];
