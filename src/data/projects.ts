export type Project = {
  name: string;
  blurb: string;
  tech: string[];
  repo?: string;
  live?: string;
  desktopGif: string;
  mobileGif: string;
};

export const PROJECTS: Project[] = [
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
    name: "Sample Project 2",
    blurb: "Sample project 2 blurb",
    tech: ["React", "Flask", "REST"],
    repo: "https://github.com/ishmamanwar/chomchom",
    live: "https://chomchom.vercel.app",
    desktopGif: "/assets/sample-desktop.gif",
    mobileGif: "/assets/sample-mobile.gif",
  },
];
