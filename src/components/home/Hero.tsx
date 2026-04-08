"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Users, Sparkles, MoveRight, Leaf, Check } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top_right,_#fdf6e3,_#f5f1e8_55%,_#f8f4ec)] pb-12 pt-28 lg:pb-16 lg:pt-32">
      <div className="absolute inset-0 pointer-events-none opacity-[0.2]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path
                d="M28 56L56 28L28 0L0 28L28 56Z"
                stroke="#C8621F"
                strokeWidth="0.4"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="absolute -top-32 right-0 h-[30rem] w-[30rem] rounded-full bg-saffron/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 h-[22rem] w-[22rem] rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-saffron/25 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-saffron" />
              <span className="text-xs font-semibold tracking-[0.2em] text-charcoal/80 uppercase">
                Est. 2009 • Vedic Wisdom
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
              className="mb-6 text-4xl font-medium leading-[1.05] tracking-tight text-charcoal sm:text-5xl lg:text-6xl"
            >
              Where <span className="text-saffron italic">Education</span>
              <br className="hidden sm:block" /> Meets <span className="text-gold">Spiritual Wisdom</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-charcoal-light/90 sm:text-lg lg:mx-0"
            >
              Transform your life through discipline, purpose, and Vedic knowledge. Join a
              community that builds character, clarity, and confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                className="h-14 rounded-full bg-saffron-dark px-8 text-base text-white shadow-xl shadow-saffron/20 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-saffron/30"
                onClick={() => {
                  document.getElementById("what-is-bace")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Start Your Journey
              </Button>

              <Link href="/hostel-life">
                <Button
                  variant="outline"
                  size="lg"
                  className="group h-14 rounded-full border-charcoal/25 bg-white/70 px-8 text-base text-charcoal shadow-md backdrop-blur-sm hover:border-saffron/50 hover:text-white"
                >
                  Explore Campus Life
                  <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 text-sm text-charcoal-light/80 lg:justify-start"
            >
              <TrustItem label="250+ Students" />
              <TrustItem label="15+ Years Legacy" />
              <TrustItem label="98% Satisfaction" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/40 p-2 shadow-2xl shadow-charcoal/10 backdrop-blur-sm">
              <div className="relative h-[22rem] w-full overflow-hidden rounded-xl sm:h-[27rem] lg:h-[33rem]">
                <Image
                  src="https://images.unsplash.com/photo-1767353461394-7dce69402122?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Students engaging in learning and spiritual community activities"
                  fill
                  priority
                  className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 45vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-charcoal/0 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.55 }}
                className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/40 bg-white/60 p-5 shadow-lg backdrop-blur-md"
              >
                <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-charcoal/60 uppercase">
                  Student Experience
                </p>
                <ul className="space-y-2 text-sm font-medium text-charcoal">
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-forest" />
                    Daily Spiritual Routine
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-saffron" />
                    Bhagavad Gita Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gold" />
                    Brotherhood & Community
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function TrustItem({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/65 px-4 py-2 shadow-sm ring-1 ring-charcoal/5 backdrop-blur-sm">
      <Check className="h-4 w-4 text-forest" />
      <span>{label}</span>
    </div>
  );
}
