"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AboutBlock from "@/components/jp-bace/AboutBlock";
import ContactCard from "@/components/jp-bace/ContactCard";
import HeroSlider from "@/components/jp-bace/HeroSlider";
import SectionHeader from "@/components/jp-bace/SectionHeader";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export const defaultMissionContent = [
  "ISKCON Youth Forum (IYF) is the youth wing of ISKCON Bhopal BYC, aimed towards nourishing the hearts of today’s youth with the sublime message of the scriptures, helping them flourish in their lives in a wholesome manner. This is achieved by a number of initiatives like campus outreach, youth festivals, retreats and personal care and guidance by a team of experienced youth mentors.",
];

export const defaultHistoryContent = [
  "What India is going through with its youth is not something new. This is exactly what America went through in its history in the 1960's. The youth, frustrated with the lives led by their parents, rejected and rebelled against the set standards of the society and formed rules of their own, by discarding and disowning their connections with their families and experimenting with drugs, alcohol and other dangerous addictions. This was also known as the 'hippie' movement.",
  "The youth, however, never got the answers to their questions and they went deeper and deeper into a blind, dark alley. It is there that they suddenly saw light in the form of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, a distinguished scholar and a pure devotee of Lord Krishna, who had stepped on to the shores of America. Over the next decade, he went about transforming the lives of these very youngsters, who were on the precipice of sunset to a new world of joy, happiness and devotion. This he did by revealing the ancient and timeless knowledge of a highly civilized society in the Vedic times, thereby also quashing some theories that the Vedas were meant for people of a particular time, place and nationality.",
];

interface BaceLocationPageProps {
  locationName: string;
  locationSlug: string;
  subtitle: string;
  description: string;
  sliderImages: string[];
  contactPhone: string;
  contactEmail: string;
  contactSubheading: string;
  objectives: string[];
  missionContent?: string[];
  historyContent?: string[];
}

export default function BaceLocationPage({
  locationName,
  locationSlug,
  subtitle,
  description,
  sliderImages,
  contactPhone,
  contactEmail,
  contactSubheading,
  objectives,
  missionContent = defaultMissionContent,
  historyContent = defaultHistoryContent,
}: BaceLocationPageProps) {
  return (
    <main className="bg-beige-soft text-charcoal">
      <section className="relative overflow-hidden py-20 pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.12]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <pattern id={`${locationSlug}-grid`} width="56" height="56" patternUnits="userSpaceOnUse">
                  <path
                    d="M28 56L56 28L28 0L0 28L28 56Z"
                    className="stroke-saffron"
                    strokeWidth="0.4"
                    fill="none"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#${locationSlug}-grid)`} />
            </svg>
          </div>
          <div className="absolute -top-32 right-0 h-[30rem] w-[30rem] rounded-full bg-saffron/15 blur-3xl" />
          <div className="absolute bottom-0 -left-20 h-[22rem] w-[22rem] rounded-full bg-gold/10 blur-3xl" />
        </div>

        <Container className="relative grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-saffron md:text-sm">
              {subtitle}
            </p>
            <h1 className="text-4xl font-serif font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              {locationName} <span className="text-saffron italic">BACE</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal-light/90 sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/admissions">
                <Button variant="primary" size="md">
                  Join the Program
                </Button>
              </Link>
              <a href="#about-bace">
                <Button variant="outline" size="md">
                  Explore Mission
                </Button>
              </a>
            </div>
          </motion.div>

          <HeroSlider images={sliderImages} />
        </Container>
      </section>

      <section id="about-bace" className="py-20">
        <Container className="max-w-7xl space-y-10 px-6">
          <SectionHeader
            heading="About BACE"
            subheading="Legacy of IYS"
            centered
            className="mx-auto max-w-3xl"
          />

          <AboutBlock
            heading="Mission."
            subheading="ISKCON YOUTH SERVICES"
            content={missionContent}
          />

          <AboutBlock
            heading="History."
            subheading="HISTORY REPEATS ITSELF"
            content={historyContent}
          />

          <AboutBlock
            heading="Objectives."
            subheading="OBJECTIVES OF IYS."
            bulletPoints={objectives}
          />
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-7xl px-6">
          <SectionHeader
            heading="Contact"
            subheading={contactSubheading}
            centered
            className="mb-12"
          />
          <ContactCard phone={contactPhone} email={contactEmail} />
        </Container>
      </section>

      <section className="py-20 pt-0">
        <Container className="max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-black/10 shadow-lg">
            <iframe
              title={`${locationName} BACE location map`}
              src="https://maps.google.com/maps?q=Bhopal&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
