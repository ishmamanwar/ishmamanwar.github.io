export interface Education {
  institution: string;
  location: string;
  degree: string;
  specialization?: string;
  period: string;
  pdfUrl?: string;
}

export interface Certification {
  name: string;
  expiration: string;
  pdfUrl?: string;
}

export const EDUCATION: Education[] = [
  {
    institution: "Northern Alberta Institute of Technology (NAIT)",
    location: "Edmonton, AB, Canada",
    degree: "Diploma in Digital Media and IT",
    specialization: "Computer Software Development",
    period: "2017 - 2020",
    pdfUrl: "/NAIT_Diploma_Ishmam_Anwar.pdf",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Certified ScrumMaster®",
    expiration: "March 5, 2026",
    pdfUrl: "/Ishmam Anwar-ScrumAlliance_CSM_Certificate.pdf",
  },
];
