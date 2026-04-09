import type { Metadata } from "next";
import { getBacePageOgMetadata } from "@/lib/utils/seo";

const title = "Barsana BACE Bhopal | ISKCON Vedic Hostel - Kokta Bypass";
const description =
  "Barsana BACE is an ISKCON vedic student hostel near Kokta Bypass, Bhopal. Offering value-based student accommodation, satvik meals, and Bhagavad Gita wisdom for college students in Bhopal.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Barsana BACE Bhopal",
    "BACE hostel Kokta Bypass Bhopal",
    "ISKCON hostel Kokta Bhopal",
    "vedic student hostel Bhopal",
    "IYF BACE Kokta Bhopal",
  ],
  alternates: {
    canonical: "https://iyfbhopal.in/barsana-bace",
  },
  ...getBacePageOgMetadata({
    title: "Barsana BACE | ISKCON Vedic Hostel Kokta Bypass, Bhopal",
    description,
    url: "https://iyfbhopal.in/barsana-bace",
    imageAlt: "Barsana BACE IYF Bhopal",
  }),
};

export default function BarsanaBaceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
