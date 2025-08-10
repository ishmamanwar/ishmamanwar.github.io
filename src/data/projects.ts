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
    name: "Chomchom - A simple pet management system",
    blurb: "Pet management webapp with feeding, meds, and vet scheduling.",
    tech: ["React", "Flask", "REST"],
    repo: "https://github.com/ishmamanwar/chomchom",
    live: "https://chomchom.vercel.app",
    desktopGif: "/assets/chomchom-desktop.gif",
    mobileGif: "/assets/sample-mobile.gif",
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
