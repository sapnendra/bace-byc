import { z } from "zod";

export const registrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  college: z.string().min(2, "College/University is required").max(200),
  currentCity: z.string().min(2, "Current city is required").max(100),
  permanentAddress: z
    .string()
    .min(10, "Permanent address is required")
    .max(300),
  message: z.string().max(1000).optional(),
});

export type RegistrationData = z.infer<typeof registrationSchema>;
