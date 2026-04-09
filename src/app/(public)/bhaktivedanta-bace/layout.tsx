import type { Metadata } from "next";
import { getBacePageOgMetadata } from "@/lib/utils/seo";

const title = "Bhaktivedanta BACE Bhopal | ISKCON Vedic Hostel - MP Nagar";
const description =
  "Bhaktivedanta BACE is an ISKCON vedic student hostel in MP Nagar, Bhopal. Located in the heart of the city, ideal for students from MANIT, RGPV, Barkatullah University, and other Bhopal colleges.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Bhaktivedanta BACE Bhopal",
    "BACE hostel MP Nagar Bhopal",
    "ISKCON hostel MP Nagar Bhopal",
    "vedic hostel MP Nagar Bhopal",
    "student hostel MP Nagar Bhopal",
    "IYF BACE MP Nagar",
  ],
  alternates: {
    canonical: "https://iyfbhopal.in/bhaktivedanta-bace",
  },
  ...getBacePageOgMetadata({
    title: "Bhaktivedanta BACE Bhopal | ISKCON Vedic Hostel - MP Nagar",
    description,
    url: "https://iyfbhopal.in/bhaktivedanta-bace",
    imageAlt: "Bhaktivedanta BACE IYF Bhopal",
  }),
};

export default function BhaktivedantaBaceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
