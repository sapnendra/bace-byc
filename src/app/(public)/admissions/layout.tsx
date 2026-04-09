import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BACE Admissions Bhopal 2025 | ISKCON Vedic Hostel - IYF Bhopal",
  description:
    "Apply for admissions to ISKCON BACE vedic hostels in Bhopal for 2025. Locations: MP Nagar, MANIT Chauraha, Anand Nagar, Saket Nagar, Kokta Bypass. Value-based living for college students.",
  keywords: [
    "BACE admissions Bhopal 2025",
    "ISKCON hostel admissions Bhopal",
    "IYF BACE apply Bhopal",
    "vedic hostel admission Bhopal",
  ],
  alternates: {
    canonical: "https://iyfbhopal.in/admissions",
  },
};

export default function AdmissionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
