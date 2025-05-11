import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toZonedTime, format } from "date-fns-tz";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getYearLabel = (year: number) => {
  if (year === 1) return `${year}st`;
  if (year === 2) return `${year}nd`;
  if (year === 3) return `${year}rd`;
  return `${year}th`;
};

const timeZone = "Asia/Kolkata";

export const formatDate = (dateString: string) => {
  const date = toZonedTime(new Date(dateString), timeZone); // Convert UTC to Kolkata time
  return format(date, "EEEE, d MMMM yyyy", { timeZone }); // e.g., "Thursday, 1 May 2025"
};

export const formatTime = (dateString: string) => {
  const date = toZonedTime(new Date(dateString), timeZone); // Convert UTC to Kolkata time
  return format(date, "hh:mm a", { timeZone }); // e.g., "03:30 PM"
};

export const calculateDaysRemaining = (dateString: string) => {
  const today = new Date();
  const eventDate = new Date(dateString);
  const timeDiff = eventDate.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
};
