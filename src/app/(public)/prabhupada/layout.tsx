import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Srila Prabhupada | Founder ISKCON - IYF Bhopal BACE",
  description:
    "Learn about Srila Prabhupada - the founder of ISKCON and the inspiration behind BACE and IYF Bhopal's mission to transform student lives with Vedic wisdom in Bhopal, Madhya Pradesh.",
  keywords: [
    "Srila Prabhupada ISKCON",
    "Prabhupada biography",
    "ISKCON founder Bhopal",
    "IYF Bhopal Prabhupada",
  ],
  alternates: {
    canonical: "https://iyfbhopal.in/prabhupada",
  },
  openGraph: {
    title: "Srila Prabhupada | IYF Bhopal",
    description:
      "Explore the life, teachings, and global legacy of Srila Prabhupada.",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srila Prabhupada | IYF Bhopal",
    description: "Life journey, teachings, books, and legacy of Srila Prabhupada.",
  },
};

export default function PrabhupadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
