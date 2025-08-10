export interface Education {
  institution: string;
  location: string;
  degree: string;
  specialization?: string;
  period: string;
  externalUrl?: string;
}

export interface Certification {
  name: string;
  expiration: string;
  externalUrl?: string;
}

export const EDUCATION: Education[] = [
  {
    institution: "Northern Alberta Institute of Technology (NAIT)",
    location: "Edmonton, AB, Canada",
    degree: "Diploma in Digital Media and IT",
    specialization: "Computer Software Development",
    period: "2017 - 2020",
    externalUrl:
      "https://drive.google.com/file/d/1D4fDgWotqCiLCTx-ctw9lLx2VtxhtlUD/view?usp=sharing",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Certified ScrumMaster®",
    expiration: "March 5, 2026",
    externalUrl:
      "https://drive.google.com/file/d/1U0GVQCOMmn5qBRPyaS06H8rYfq7XFvuR/view?usp=sharing",
  },
];
