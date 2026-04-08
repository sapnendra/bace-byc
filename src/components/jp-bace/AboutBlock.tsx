"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

interface AboutBlockProps {
  heading: string;
  subheading: string;
  content?: string[];
  bulletPoints?: string[];
}

export default function AboutBlock({
  heading,
  subheading,
  content,
  bulletPoints,
}: AboutBlockProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg md:p-8"
    >
      <SectionHeader heading={heading} subheading={subheading} className="mb-8" />

      {content ? (
        <div className="space-y-5 text-base leading-relaxed text-charcoal-light md:text-lg md:max-w-3xl">
          {content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {bulletPoints ? (
        <ul className="space-y-4 text-base leading-relaxed text-charcoal-light md:text-lg">
          {bulletPoints.map((point) => (
            <li key={point} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-saffron" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.article>
  );
}
