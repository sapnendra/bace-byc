import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life at BACE Bhopal | ISKCON Vedic Hostel Experience - IYF",
  description:
    "Experience life at BACE - ISKCON's vedic hostel in Bhopal. Daily schedule includes Mangal Aarti, Bhagavad Gita study, satvik meals, academics, and character development for students.",
  keywords: [
    "BACE life Bhopal",
    "ISKCON hostel daily life Bhopal",
    "vedic hostel routine Bhopal students",
    "BACE Bhopal schedule",
  ],
  alternates: {
    canonical: "https://iyfbhopal.in/bace-life",
  },
};

export default function BaceLifeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
