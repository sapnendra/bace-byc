import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IYF Bhopal | ISKCON Youth Forum - BACE Vedic Hostel",
  description:
    "IYF Bhopal (ISKCON Youth Forum) has been transforming the lives of thousands of students in Bhopal since 2008 through BACE vedic hostels, Bhagavad Gita wisdom, and value-based education.",
  keywords: [
    "about IYF Bhopal",
    "ISKCON youth forum Bhopal",
    "IYF BACE Bhopal history",
    "ISKCON Bhopal youth",
  ],
  alternates: {
    canonical: "https://iyfbhopal.in/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
