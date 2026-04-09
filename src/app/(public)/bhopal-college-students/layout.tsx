import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For College Students in Bhopal | BACE Hostel - MANIT, RGPV, BU & More",
  description:
    "A practical guide for college students in Bhopal looking for a stable hostel near MANIT, RGPV, Barkatullah University, and other campuses.",
  keywords: [
    "hostel for college students Bhopal",
    "RGPV students hostel Bhopal",
    "hostel near Barkatullah University Bhopal",
  ],
  alternates: {
    canonical: "https://iyfbhopal.in/bhopal-college-students",
  },
};

export default function BhopalCollegeStudentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
