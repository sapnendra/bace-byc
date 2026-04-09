import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vedic Hostel in Bhopal | ISKCON BACE - Spiritual Student Accommodation",
  description:
    "Understand what a vedic hostel in Bhopal offers and how ISKCON BACE helps students grow academically, emotionally, and spiritually.",
  keywords: [
    "vedic hostel Bhopal",
    "spiritual hostel Bhopal",
    "ISKCON student accommodation Bhopal",
  ],
  alternates: {
    canonical: "https://iyfbhopal.in/vedic-hostel-bhopal",
  },
};

export default function VedicHostelBhopalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
