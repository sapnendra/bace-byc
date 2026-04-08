"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  heading: string;
  subheading?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  heading,
  subheading,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(centered && "text-center", className)}
    >
      {subheading ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-saffron md:text-sm">
          {subheading}
        </p>
      ) : null}
      <h2 className="text-3xl font-serif font-bold leading-tight text-charcoal sm:text-4xl md:text-5xl">
        {heading}
      </h2>
    </motion.div>
  );
}
