import type { Metadata } from "next";
import { getBacePageOgMetadata } from "@/lib/utils/seo";

const title = "Saket Dham BACE Bhopal | ISKCON Vedic Hostel - Saket Nagar";
const description =
  "Saket Dham BACE is an ISKCON vedic student hostel in Saket Nagar, Bhopal, Madhya Pradesh. Join a community of students living with purpose, satvik food, and Vedic education.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Saket Dham BACE Bhopal",
    "BACE hostel Saket Nagar Bhopal",
    "ISKCON hostel Saket Bhopal",
    "vedic hostel Saket Nagar Bhopal",
    "IYF BACE Saket Bhopal",
  ],
  alternates: {
    canonical: "https://iyfbhopal.in/saket-dham-bace",
  },
  ...getBacePageOgMetadata({
    title: "Saket Dham BACE Bhopal | ISKCON Vedic Hostel - Saket Nagar",
    description,
    url: "https://iyfbhopal.in/saket-dham-bace",
    imageAlt: "Saket Dham BACE IYF Bhopal",
  }),
};

export default function SaketDhamBaceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
