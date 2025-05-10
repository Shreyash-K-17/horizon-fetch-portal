// lib/constants.ts

export const BRANCHES = [
  "Computer Science",
  "Electronics",
  "Mechanical",
  "Civil",
  "Electrical",
  "Chemical",
  "Other",
] as const;

export const COLLEGES = [
  "IIT Bombay",
  "IIT Delhi",
  "IIT Madras",
  "NIT Trichy",
  "BITS Pilani",
  "VIT Vellore",
  "Other",
] as const;

export const YEARS_OF_STUDY = [1, 2, 3, 4, 5] as const;

// Types
export type Branch = (typeof BRANCHES)[number];
export type College = (typeof COLLEGES)[number];
export type YearOfStudy = (typeof YEARS_OF_STUDY)[number];
