import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact IYF Bhopal | ISKCON BACE Hostel - +91 99931 01901",
  description:
    "Contact IYF Bhopal for BACE hostel admissions, enquiries, and information. Call +91 99931 01901. Located at Prabhupada Marg, Near Mansarobar College, Kolar, Bhopal, Madhya Pradesh.",
  keywords: [
    "contact IYF Bhopal",
    "BACE hostel Bhopal contact",
    "ISKCON Bhopal phone number",
    "IYF Bhopal address",
  ],
  alternates: {
    canonical: "https://iyfbhopal.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
