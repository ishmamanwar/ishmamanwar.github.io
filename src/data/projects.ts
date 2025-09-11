export type Project = {
  name: string;
  blurb: string;
  tech: string[];
  repo?: string;
  live?: string;
  desktopGif: string;
  mobileGif?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "PJMF COVID-19 Data Dashboard",
    blurb:
      "Full-stack web application for visualizing and analyzing COVID-19 hospitalization data. Features interactive data tables, trend analysis charts, and geographic heat maps with advanced filtering capabilities.",
    tech: [
      "TypeScript",
      "React",
      "Python",
      "Flask",
      "Vite",
      "MUI Charts",
      "USA Map React",
    ],
    repo: "https://github.com/ishmamanwar/pjmf-assignment",
    live: "deploying-soon",
    desktopGif: "/assets/covid-dashboard-desktop.gif",
  },
  {
    name: "Chomchom",
    blurb:
      "Pet management app to track feeding, medications, vet visits, and photos. Responsive UI with real-time feel, clean empty states, and image uploads.",
    tech: [
      "TypeScript",
      "React",
      "Python",
      "Flask",
      "Node.js",
      "Supabase",
      "Render",
      "Vercel",
    ],
    repo: "https://github.com/ishmamanwar/chomchom",
    live: "https://chomchom.vercel.app",
    desktopGif: "/assets/chomchom-desktop.gif",
    mobileGif: "/assets/chomchom-mobile.gif",
  },
  {
    name: "Monochrome Dev Portfolio",
    blurb:
      "Monochrome dev portfolio with light/dark mode, Framer Motion, roadmap timeline, skills grid, and project/education showcase with attachments.",
    tech: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "GitHub Pages",
      "Github Actions",
    ],
    repo: "https://github.com/ishmamanwar/ishmamanwar.github.io",
    live: "https://ishmamanwar.github.io/",
    desktopGif: "/assets/portfolio-desktop.gif",
    mobileGif: "/assets/portfolio-mobile.gif",
  },
];
