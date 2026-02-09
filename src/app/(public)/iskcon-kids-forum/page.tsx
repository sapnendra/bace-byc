"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Smile,
  Star,
  BookOpen,
  Music,
  Palette,
  Gamepad2,
  Heart,
  Sun,
  ArrowRight,
  Cloud,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

// --- Components ---

function ActivityCard({
  icon: Icon,
  title,
  desc,
  color,
  delay,
}: {
  icon: any;
  title: string;
  desc: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className={`p-8 rounded-[2.5rem] ${color} border-4 border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden`}
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
        <Icon className="w-24 h-24" />
      </div>
      <div className="bg-white/80 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
        <Icon className="w-8 h-8 text-gray-700" />
      </div>
      <h3 className="text-2xl font-black text-charcoal mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-gray-700 font-medium leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function IKFPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cloudY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main ref={containerRef} className="bg-[#FFFBF0] overflow-hidden">
      {/* --- Hero Section --- */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        {/* Playful Background Elements */}
        <motion.div
          style={{ y: cloudY }}
          className="absolute top-20 left-[10%] text-sky-200"
        >
          <Cloud className="w-32 h-32 opacity-60" fill="currentColor" />
        </motion.div>
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
          className="absolute top-40 right-[15%] text-yellow-200"
        >
          <Sun className="w-40 h-40 opacity-40 animate-spin-slow" />
        </motion.div>

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="mb-8 inline-block"
          >
            <div className="inline-flex items-center space-x-2 bg-white px-8 py-3 rounded-full border-4 border-orange-100 shadow-xl shadow-orange-100/50 transform -rotate-2 hover:rotate-0 transition-transform cursor-default">
              <Smile className="w-8 h-8 text-orange-400" />
              <span className="text-xl font-black tracking-wide text-orange-500">
                ISKCON KIDS FORUM
              </span>
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-9xl font-black text-charcoal mb-8 leading-[0.9] tracking-tight">
            Play. Learn. <br />
            <span className="text-orange-500 inline-block transform hover:scale-110 transition-transform cursor-default">
              Grow!
            </span>
          </h1>

          <p className="text-2xl font-medium text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Where ancient wisdom meets modern fun! Join us for stories, games,
            and festivals that plant seeds of love in little hearts.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/admissions">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none rounded-full px-10 py-5 text-xl font-bold shadow-xl shadow-orange-500/20 hover:scale-105 transition-transform">
                Start the Adventure
              </Button>
            </Link>
          </div>
        </Container>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-none text-white">
          <svg
            className="w-full h-24 md:h-48"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* --- Bento Grid Activities --- */}
      <section className="py-12 bg-white relative z-10">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4">
              Fun ways to learn!
            </h2>
            <p className="text-xl text-gray-400 font-medium">
              Every Sunday is a new celebration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Card */}
            <div className="lg:col-span-2">
              <ActivityCard
                icon={BookOpen}
                title="Magical Stories"
                desc="Dive into the world of Ramayana & Mahabharata. Heroes, values, and timeless lessons told in a way kids love!"
                color="bg-sky-100"
                delay={0.1}
              />
            </div>
            {/* Small Cards */}
            <ActivityCard
              icon={Palette}
              title="Creative Arts"
              desc="Drawing, coloring, and crafts that spark imagination."
              color="bg-pink-100"
              delay={0.2}
            />
            <ActivityCard
              icon={Music}
              title="Music & Dance"
              desc="Learn instruments and traditional dance forms."
              color="bg-purple-100"
              delay={0.3}
            />
            <ActivityCard
              icon={Gamepad2}
              title="Vedic Games"
              desc="Fun puzzles and team games that teach deep values."
              color="bg-green-100"
              delay={0.4}
            />
            <ActivityCard
              icon={Star}
              title="Festivals"
              desc="Grand celebrations with fancy dress and plays!"
              color="bg-yellow-100"
              delay={0.5}
            />
          </div>
        </Container>
      </section>

      {/* --- Journey Path --- */}
      <section className="py-24 bg-[#FFFBF0]">
        <Container>
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border-4 border-orange-100 relative overflow-hidden">
            {/* Dashed Path Visualization (Abstract) */}
            <div className="absolute top-1/2 left-0 w-full h-1 border-t-8 border-dashed border-gray-100 -translate-y-1/2 hidden md:block"></div>

            <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center">
              <div className="relative group">
                <div className="w-24 h-24 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-4xl font-black text-orange-400">1</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  Register
                </h3>
                <p className="text-gray-500 font-medium">
                  Sign up for the next batch tailored to your age group.
                </p>
              </div>
              <div className="relative group">
                <div className="w-24 h-24 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-4xl font-black text-sky-400">2</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Attend</h3>
                <p className="text-gray-500 font-medium">
                  Join us every Sunday for 2 hours of pure joy and learning.
                </p>
              </div>
              <div className="relative group">
                <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-4xl font-black text-green-400">3</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Grow</h3>
                <p className="text-gray-500 font-medium">
                  Watch your child bloom with confidence and good values.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link href="/admissions">
                <Button className="bg-charcoal text-white hover:bg-black px-12 py-5 rounded-full text-xl font-bold shadow-2xl">
                  Join the Family
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
