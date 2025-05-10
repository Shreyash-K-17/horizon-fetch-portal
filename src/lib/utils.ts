import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getYearLabel = (year: number) => {
  if (year === 1) return `${year}st`;
  if (year === 2) return `${year}nd`;
  if (year === 3) return `${year}rd`;
  return `${year}th`;
};
