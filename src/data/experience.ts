export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  tech: string[];
  bullets: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Stax Payments",
    role: "Software Engineer",
    period: "October 2025 - Present",
    location: "Orlando, FL (Remote)",
    tech: [
      "Datadog",
      "React.js",
      "Node.js",
      "Laravel",
      "MySQL",
      "AWS",
      "LaunchDarkly",
      "Vite",
      "Vitest",
      "React Testing Library",
      "GitHub Actions",
      "GitHub",
      "JIRA",
      "CLI",
      "Agile",
      "SCRUM",
    ],
    bullets: [
      "Full-stack engineer on the Onboarding team, contributing to both the React.js UI and Node.js/Laravel backend improvements used to onboard new clients into the platform.",
      'Contributed to the planning and ongoing implementation of the refresh to the customer-facing Signup application ("Self Reg").',
      "Took ownership of a critical backend security upgrade within the first 2 months: implemented JWT secret rotation validation to replace the legacy single-secret approach.",
      "Served as an on-call operator and team representative, triaging incidents and resolving team-domain issues across services and deployments.",
      "Improved CI/CD workflows for both frontend and backend to trigger agreed upon checks pre-commit on Github.",
      "Consistently among the highest-output engineers on a 7 engineer team, contributing to ~30-40% of Story Points with minimal PR review comments.",
      "Shipped first production ticket within 2 weeks of joining the company.",
    ],
  },
  {
    company: "LawDepot (Sequiter Inc.)",
    role: "Software Developer II",
    period: "July 2022 - Present",
    location: "Edmonton, AB, Canada (Remote)",
    tech: [
      "Vue.js",
      "React.js",
      "ASP.NET Core",
      ".NET Framework",
      "C#",
      "MySQL",
      "Azure DevOps",
      "CI/CD",
      "Vite",
      "Vitest",
      "Jest",
      "Git",
      "Agile",
      "SCRUM",
    ],
    bullets: [
      "Core member of the Contracts team building reusable Vue.js components across the platform.",
      "Contributed to the AI-powered auditing tool using the OpenAI API, enabling automated analysis of contract structures and user data for compliance and consistency.",
      "Core developer of Lawbler, an internal low-code authoring tool that lets non-technical staff create and publish legal documents.",
      "Built a Vue-based contract converter CLI (vue-contract-converter) that converts DCS XML to ACS JSON for modernization.",
      "Refactored and extended RESTful APIs in ASP.NET Core to improve performance, modularity, and maintainability.",
      "Integrated MySQL stored procedures/functions to optimize queries, reduce redundancy, and enforce complex business rules.",
      "Led UI performance optimization using Lighthouse/Chrome DevTools, achieving up to 80% score improvements on critical pages.",
      "Developed and maintained Azure DevOps CI/CD pipelines to automate deployments and minimize downtime.",
      "Served as system architecture specialist and represented development in the Architecture Center of Excellence, contributing to standards and best practices.",
      "Mentored developers and promoted secure SDLC practices and high-quality engineering standards.",
      "Actively participated in SCRUM ceremonies and peer code reviews for quality and alignment.",
    ],
  },
  {
    company: "ez Enroute LTD.",
    role: "Software Developer",
    period: "April 2021 - June 2022",
    location: "Edmonton, AB, Canada (Remote)",
    tech: [
      "React.js",
      "ASP.NET Core",
      "PostgreSQL",
      "Docusaurus",
      "Git",
      "React Testing Library",
      "Agile",
      "SCRUM",
    ],
    bullets: [
      "Developed and maintained backend CRUD systems, APIs, and AI/ML integrations for an IoT logistics platform.",
      "Built React UI components and internal dashboards to improve operational visibility and client reporting.",
      "Led a 7-developer documentation initiative with Docusaurus to improve onboarding and consistency.",
      "Delivered PostgreSQL-backed features and API endpoints to support live operational workflows.",
      "Coordinated with field teams to ensure proper IoT device usage, resolving integration and support issues.",
    ],
  },
  {
    company: "Northern Alberta Institute of Technology",
    role: "Capstone Tech Lead (Academic)",
    period: "September 2020 - December 2020",
    location: "Edmonton, AB, Canada",
    tech: ["Vue.js", "Node.js", "Express.js", "MongoDB", "Git", "Kanban"],
    bullets: [
      "Led a 19-member cross-functional team to deliver a client-approved Vue.js application for Story City Australia.",
      "Oversaw architecture decisions, code reviews, and sprint deliverables under Agile timelines.",
      "Delivered full documentation, secure deployment, and acceptance-tested features.",
    ],
  },
];
