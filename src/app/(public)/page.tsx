import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import SeminarsMarquee from "@/components/home/SeminarsMarquee";
import WhatIsBACE from "@/components/home/WhatIsBACE";
import WhyBACEMatters from "@/components/home/WhyBACEMatters";
import DonorLeaderboard from "@/components/home/DonorLeaderboard";
import WhatStudentsLearn from "@/components/home/WhatStudentsLearn";
import VedicHostelDifference from "@/components/home/VedicHostelDifference";
import DailyLife from "@/components/home/DailyLife";
import ParentsTrust from "@/components/home/ParentsTrust";

export const metadata: Metadata = {
  title: "IYF Bhopal - ISKCON BACE Vedic Hostel for Students in Bhopal",
  description:
    "IYF Bhopal offers ISKCON BACE vedic hostels near top colleges in Bhopal - MANIT, RGPV, Barkatullah University. Value-based living, satvik food, Bhagavad Gita wisdom. Admissions open 2025.",
  keywords: [
    "IYF Bhopal",
    "ISKCON BACE Bhopal",
    "vedic hostel Bhopal",
    "BACE hostel Bhopal",
    "ISKCON youth forum Bhopal",
    "student hostel Bhopal",
    "ISKCON BYC Bhopal",
    "spiritual hostel students Bhopal MP",
  ],
  alternates: {
    canonical: "https://iyfbhopal.in",
  },
  openGraph: {
    title: "IYF Bhopal - ISKCON BACE Vedic Hostel for Students in Bhopal",
    description:
      "IYF Bhopal offers ISKCON BACE vedic hostels near top colleges in Bhopal - MANIT, RGPV, Barkatullah University. Value-based living, satvik food, Bhagavad Gita wisdom. Admissions open 2025.",
    url: "https://iyfbhopal.in",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "IYF Bhopal BACE Vedic Hostel",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <SeminarsMarquee />
        <WhatIsBACE />
        <WhyBACEMatters />
        <DonorLeaderboard />
        <WhatStudentsLearn />
        <VedicHostelDifference />
        <DailyLife />
        <ParentsTrust />
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-charcoal">
              Our BACE Locations in Bhopal
            </h2>
            <p className="mt-3 max-w-3xl text-charcoal-light">
              Explore all ISKCON BACE centers managed by IYF Bhopal across key student areas in
              Bhopal.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <li>
                <Link href="/jp-bace" className="text-saffron hover:underline">
                  Jagannath Puri BACE - Anand Nagar, Bhopal
                </Link>
              </li>
              <li>
                <Link href="/vrindavan-bace" className="text-saffron hover:underline">
                  Vrindavan BACE - MANIT Chauraha, Bhopal
                </Link>
              </li>
              <li>
                <Link href="/bhaktivedanta-bace" className="text-saffron hover:underline">
                  Bhaktivedanta BACE - MP Nagar, Bhopal
                </Link>
              </li>
              <li>
                <Link href="/barsana-bace" className="text-saffron hover:underline">
                  Barsana BACE - Kokta Bypass, Bhopal
                </Link>
              </li>
              <li>
                <Link href="/saket-dham-bace" className="text-saffron hover:underline">
                  Saket Dham BACE - Saket Nagar, Bhopal
                </Link>
              </li>
            </ul>

            <h2 className="mt-12 text-3xl font-serif font-bold text-charcoal">Why Choose BACE?</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-charcoal-light">
              <li>• Satvik food and healthy routine</li>
              <li>• No distraction-focused hostel culture</li>
              <li>• Bhagavad Gita wisdom and mentorship</li>
              <li>• Academic support and peer discipline</li>
              <li>• Character development and stress management</li>
            </ul>

            <p className="mt-6 text-charcoal-light">
              Hear from students and parents who experienced the transformation at IYF Bhopal.
            </p>
            <Link href="/testimonials" className="mt-2 inline-block text-saffron hover:underline">
              Read testimonials
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
