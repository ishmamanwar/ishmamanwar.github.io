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
    blurb: "Pet management webapp with feeding, meds, and vet scheduling.",
    tech: ["React", "Flask", "REST"],
    repo: "https://github.com/your-username/chomchom",
    live: "https://your-username.github.io/chomchom",
    desktopGif: "/assets/sample-desktop.gif",
    mobileGif: "/assets/sample-mobile.gif",
  },
];
