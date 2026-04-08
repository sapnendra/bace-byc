import { z } from "zod";

export const donationSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(120),
  mobile: z.string().trim().regex(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
  email: z.string().trim().email("Invalid email address"),
  amount: z.coerce.number().positive("Amount must be greater than 0"),
});

export type DonationData = z.infer<typeof donationSchema>;
