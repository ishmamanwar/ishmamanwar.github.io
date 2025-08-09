export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "LawDepot (Sequiter Inc.)",
    role: "Software Developer II",
    period: "2023 — Present",
    bullets: [
      "Built reusable Vue components and optimized Lighthouse scores by up to 80%.",
      "Modernized internal tooling and APIs (ASP.NET Core, MySQL).",
      "Mentored developers and improved CI/CD in Azure DevOps.",
    ],
  },
  {
    company: "ez Enroute LTD.",
    role: "Software Developer",
    period: "2021 — 2023",
    bullets: [
      "Developed backend CRUD systems and REST APIs.",
      "Delivered AI/ML integrations within IoT platform.",
    ],
  },
];
