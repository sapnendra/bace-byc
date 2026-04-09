import type { Metadata } from "next";
import { getBacePageOgMetadata } from "@/lib/utils/seo";

const title = "Jagannath Puri BACE Bhopal | ISKCON Vedic Hostel - Anand Nagar";
const description =
  "Jagannath Puri BACE is an ISKCON vedic student hostel in Anand Nagar, Bhopal, Madhya Pradesh. Value-based living, satvik food, Bhagavad Gita courses for college students.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Jagannath Puri BACE Bhopal",
    "BACE hostel Anand Nagar Bhopal",
    "ISKCON hostel Anand Nagar",
    "vedic hostel Bhopal",
    "IYF BACE Bhopal",
    "student hostel Anand Nagar Bhopal",
  ],
  alternates: {
    canonical: "https://iyfbhopal.in/jp-bace",
  },
  ...getBacePageOgMetadata({
    title: "Jagannath Puri BACE | ISKCON Vedic Hostel Anand Nagar, Bhopal",
    description,
    url: "https://iyfbhopal.in/jp-bace",
    imageAlt: "Jagannath Puri BACE IYF Bhopal",
  }),
};

export default function JpBaceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
