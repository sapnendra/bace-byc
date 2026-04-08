"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

interface ContactCardProps {
  phone: string;
  email: string;
}

export default function ContactCard({ phone, email }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto max-w-2xl rounded-2xl border border-black/5 bg-white p-8 text-charcoal shadow-lg"
    >
      <h3 className="mb-6 text-center text-2xl font-serif font-bold md:text-3xl">Connect With Us</h3>

      <div className="space-y-5">
        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="group flex items-center gap-4 rounded-xl border border-black/10 bg-beige-soft px-5 py-4 transition-colors hover:border-saffron/40 hover:bg-beige"
        >
          <span className="rounded-full bg-saffron/10 p-2.5 text-saffron">
            <Phone className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-base font-medium text-charcoal group-hover:text-saffron md:text-lg">{phone}</span>
        </a>

        <a
          href={`mailto:${email}`}
          className="group flex items-center gap-4 rounded-xl border border-black/10 bg-beige-soft px-5 py-4 transition-colors hover:border-saffron/40 hover:bg-beige"
        >
          <span className="rounded-full bg-saffron/10 p-2.5 text-saffron">
            <Mail className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-base font-medium text-charcoal group-hover:text-saffron md:text-lg">{email}</span>
        </a>
      </div>
    </motion.div>
  );
}
