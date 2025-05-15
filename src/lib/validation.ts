import { z } from "zod";

export const RegisterSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(8, { message: "Your password must be at least 8 characters long" })
    .max(64, { message: "Your password cannot be longer than 64 characters" }),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Please select a valid gender" }),
  }),
  phone: z
    .string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^[0-9]+$/, "Phone number must be numeric"),
  college_name: z.string().min(1, "College name is required"),
  branch: z.string().min(1, "Branch is required"),
  year_of_study: z
    .number()
    .min(1, "Year of study must be numeric")
    .max(5, "Year of study must be between 1 and 5"),
});

export const LoginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(8, { message: "Your password must be at least 8 characters long" })
    .max(64, { message: "Your password cannot be longer than 64 characters" }),
});

export const teamMemberSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z
    .string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^[0-9]+$/, "Phone number must be numeric"),
});

export const teamRegistrationSchema = z.object({
  is_team_event: z.literal(true),
  teamName: z.string().min(1, "Team name is required"),
  teamMembers: z.array(teamMemberSchema).min(1, "At least one member required"),
});

export const soloRegistrationSchema = z.object({
  is_team_event: z.literal(false),
});

export const registrationSchema = z.discriminatedUnion("is_team_event", [
  teamRegistrationSchema,
  soloRegistrationSchema,
]);