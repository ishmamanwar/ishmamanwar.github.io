// skills.ts
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
    items: ["HTML5", "React.js", "Vue.js", "Vite"],
  },
  {
    label: "UI & Styling",
    items: ["CSS", "SCSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    label: "Backend & APIs",
    items: [
      "ASP.NET Core",
      "Node.js",
      "Express.js",
      "Laravel",
      "Django",
      "Flask",
      "REST",
    ],
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
    items: [
      "Git",
      "Docker",
      "GitHub Actions",
      "Azure DevOps",
      "CI/CD",
      "PowerShell",
      "Bash",
    ],
  },
  {
    label: "Cloud & Platforms",
    items: ["AWS", "Vercel", "Render", "Supabase", "GitHub Pages"],
  },
  {
    label: "Monitoring & Release",
    items: ["Datadog", "LaunchDarkly", "JIRA"],
  },
  {
    label: "LLMs & AI Tools",
    items: ["ChatGPT", "OpenAI", "Claude", "Cursor"],
  },
  {
    label: "Practices & Methodologies",
    items: ["Agile", "Scrum", "Kanban", "TDD"],
  },
];
