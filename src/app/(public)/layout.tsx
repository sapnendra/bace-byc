import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";

export const metadata: Metadata = {
  title: {
    default: "IYF Bhopal | ISKCON BACE Vedic Hostel - Bhopal",
    template: "%s | IYF Bhopal",
  },
  description:
    "Join IYF Bhopal's ISKCON BACE vedic hostels - value-based student accommodation in Bhopal with satvik food, Bhagavad Gita courses, and character development programs.",
  keywords: [
    "IYF Bhopal",
    "ISKCON Bhopal",
    "BACE",
    "youth spiritual education",
    "Krishna consciousness",
  ],
  openGraph: {
    title: "IYF Bhopal | ISKCON BACE Vedic Hostel - Bhopal",
    description:
      "Join IYF Bhopal's ISKCON BACE vedic hostels for value-based student living, satvik food, and character development.",
    siteName: "IYF Bhopal",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "IYF Bhopal | ISKCON Youth & BACE",
    description:
      "Discover BACE and IYF initiatives for spiritually grounded youth development.",
  },
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <SmoothScroll>{children}</SmoothScroll>
      <Footer />
    </>
  );
}
