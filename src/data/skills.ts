import type { LogosKey } from "./logos";

export type SkillGroup = {
  label: string;
  items: LogosKey[] | string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  { label: "Frontend", items: ["React", "Vue", "TypeScript", "Tailwind"] },
  { label: "Backend", items: ["ASP.NET Core", "Flask", "Node"] },
  { label: "Data & DevOps", items: ["MySQL", "Azure DevOps", "Git"] },
];
