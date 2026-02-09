import { z } from "zod";

// Alumni Registration Form Schema
export const alumniRegistrationSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name cannot exceed 100 characters")
    .trim(),

  currentPosition: z
    .string()
    .min(1, "Current position is required")
    .max(150, "Position cannot exceed 150 characters")
    .trim(),

  company: z
    .string()
    .min(1, "Company name is required")
    .max(150, "Company name cannot exceed 150 characters")
    .trim(),

  passingYear: z
    .number()
    .int("Passing year must be a whole number")
    .min(1990, "Passing year must be after 1990")
    .max(2100, "Passing year must be before 2100"),

  course: z
    .string()
    .min(1, "Course is required")
    .max(100, "Course name cannot exceed 100 characters")
    .trim(),

  college: z
    .string()
    .min(1, "College name is required")
    .max(200, "College name cannot exceed 200 characters")
    .trim(),

  fieldOfStudy: z
    .string()
    .max(100, "Field of study cannot exceed 100 characters")
    .trim()
    .optional(),

  bio: z
    .string()
    .max(500, "Bio cannot exceed 500 characters")
    .trim()
    .optional(),

  socialLinks: z
    .object({
      linkedin: z
        .string()
        .url("Please provide a valid URL")
        .regex(
          /^https?:\/\/(www\.)?linkedin\.com\/.+/,
          "Please provide a valid LinkedIn URL",
        )
        .optional()
        .or(z.literal("")),
      github: z
        .string()
        .url("Please provide a valid URL")
        .regex(
          /^https?:\/\/(www\.)?github\.com\/.+/,
          "Please provide a valid GitHub URL",
        )
        .optional()
        .or(z.literal("")),
    })
    .optional(),

  images: z
    .array(z.string().url("Each image must be a valid URL"))
    .min(1, "At least one image is required")
    .max(3, "Maximum 3 images allowed"),
});

// Type inference from schema
export type AlumniRegistrationFormData = z.infer<
  typeof alumniRegistrationSchema
>;

// Password verification schema
export const alumniPasswordSchema = z.object({
  password: z.string().min(1, "Password is required"),
});

// Admin approval schema
export const alumniStatusUpdateSchema = z.object({
  status: z.enum(["approved", "rejected"]),
});
