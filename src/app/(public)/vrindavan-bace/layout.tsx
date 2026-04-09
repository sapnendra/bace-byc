import type { Metadata } from "next";
import { getBacePageOgMetadata } from "@/lib/utils/seo";

const title = "Vrindavan BACE Bhopal | ISKCON Vedic Hostel - MANIT Chauraha";
const description =
  "Vrindavan BACE is an ISKCON vedic hostel near MANIT Chauraha, Bhopal. The ideal student accommodation for NIT Bhopal and RGPV students seeking value-based living and spiritual growth.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Vrindavan BACE Bhopal",
    "BACE hostel near MANIT Bhopal",
    "ISKCON hostel MANIT Chauraha",
    "student hostel near NIT Bhopal",
    "vedic hostel NIT Bhopal",
    "IYF BACE MANIT Bhopal",
    "hostel for engineering students Bhopal",
  ],
  alternates: {
    canonical: "https://iyfbhopal.in/vrindavan-bace",
  },
  ...getBacePageOgMetadata({
    title: "Vrindavan BACE | ISKCON Vedic Hostel near MANIT, Bhopal",
    description,
    url: "https://iyfbhopal.in/vrindavan-bace",
    imageAlt: "Vrindavan BACE IYF Bhopal",
  }),
};

export default function VrindavanBaceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
