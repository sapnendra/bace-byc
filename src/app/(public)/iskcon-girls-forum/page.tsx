"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Flower,
  Heart,
  Palette,
  Users,
  Feather,
  Sparkles,
  MessageCircle,
  ArrowRight,
  Sun,
  Star,
  Quote,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

// --- Components ---

function ValueCard({
  icon: Icon,
  title,
  desc,
  color,
}: {
  icon: any;
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      className="p-8 bg-white/50 backdrop-blur-sm rounded-[2rem] border border-white/60 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div
        className={`w-14 h-14 ${color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6`}
      >
        <Icon className={`w-7 h-7 ${color.replace("bg-", "text-")}`} />
      </div>
      <h3 className="text-xl font-serif font-bold text-charcoal mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  );
}

export default function IGFPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  return (
    <main ref={containerRef} className="bg-[#FDFBF7] overflow-hidden">
      {/* --- Hero Section --- */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-rose-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[60vh] h-[60vh] bg-amber-100/40 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02]"></div>

        <Container className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ y: heroY }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-100 shadow-sm text-rose-600 font-bold text-sm tracking-widest uppercase">
              <Flower className="w-4 h-4" />
              <span>Cultivating Grace</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.9] text-charcoal">
              Empowerment through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">
                Values
              </span>
            </h1>

            <p className="text-xl text-gray-500 max-w-xl leading-relaxed font-light">
              A nurturing sanctuary for young women to explore their inner
              strength, master life skills, and balance modern aspirations with
              timeless spiritual wisdom.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/admissions">
                <Button className="bg-charcoal text-white hover:bg-black px-8 py-4 rounded-xl text-lg shadow-xl shadow-charcoal/20">
                  Join the Circle <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual - Abstract Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 grid grid-cols-2 gap-6 p-6">
              <div className="space-y-6 mt-12">
                <div className="bg-white p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                  <Palette className="w-10 h-10 text-rose-400 mb-4" />
                  <h3 className="font-serif font-bold text-xl mb-1">
                    Creativity
                  </h3>
                  <p className="text-sm text-gray-400">Express through art</p>
                </div>
                <div className="bg-white p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rotate-[2deg] hover:rotate-0 transition-transform duration-500 translate-x-4">
                  <Heart className="w-10 h-10 text-rose-500 mb-4" />
                  <h3 className="font-serif font-bold text-xl mb-1">Emotion</h3>
                  <p className="text-sm text-gray-400">Emotional balance</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rotate-[3deg] hover:rotate-0 transition-transform duration-500">
                  <Sparkles className="w-10 h-10 text-amber-500 mb-4" />
                  <h3 className="font-serif font-bold text-xl mb-1">Grace</h3>
                  <p className="text-sm text-gray-400">Refined living</p>
                </div>
                <div className="bg-white p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rotate-[-2deg] hover:rotate-0 transition-transform duration-500 -translate-x-4">
                  <Users className="w-10 h-10 text-teal-500 mb-4" />
                  <h3 className="font-serif font-bold text-xl mb-1">Sanga</h3>
                  <p className="text-sm text-gray-400">Deep friendships</p>
                </div>
              </div>
            </div>

            {/* Soft Glow behind cards */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-200/30 to-amber-100/30 rounded-full blur-[80px] -z-10"></div>
          </motion.div>
        </Container>
      </section>

      {/* --- Vision Section --- */}
      <section className="py-24 relative">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Harmonizing Life
            </h2>
            <p className="text-lg text-gray-500">
              We empower you to excel in every role—student, professional,
              daughter, and leader—while staying rooted in devotion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              icon={Heart}
              title="Inner Balance"
              desc="Tools to manage stress and emotions with spiritual maturity."
              color="bg-rose-500 text-rose-500"
            />
            <ValueCard
              icon={Feather}
              title="Life Skills"
              desc="Mastering etiquette, communication, and graceful living."
              color="bg-amber-500 text-amber-500"
            />
            <ValueCard
              icon={Palette}
              title="Arts & Culture"
              desc="Express devotion through music, cooking, and traditional arts."
              color="bg-teal-500 text-teal-500"
            />
            <ValueCard
              icon={Users}
              title="Sisterhood"
              desc="A non-judgmental space to connect with lifelong friends."
              color="bg-indigo-500 text-indigo-500"
            />
          </div>
        </Container>
      </section>

      {/* --- Activities Showcase --- */}
      <section className="py-24 bg-white rounded-t-[4rem]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-rose-500 font-bold tracking-widest uppercase text-sm">
                Holistic Growth
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal leading-tight">
                The Art of <br /> Living Gracefully
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                IGF isn't just a class; it's a lifestyle. We curate experiences
                that bring out the best in you, blending Vedic culture with
                modern relevance.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Interactive workshops on 'Women in Vedic Culture'",
                  "Satvik culinary arts and garland making",
                  "Heart-to-heart counseling circles",
                  "Kirtan and musical instrument training",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-rose-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center group-hover:bg-rose-200 transition-colors">
                      <Star className="w-5 h-5 text-rose-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[2.5rem] bg-gray-100 overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-gray-200">
                  {/* Placeholder for Main Image */}
                  <div className="w-full h-full bg-gradient-to-br from-rose-50 to-amber-50 flex items-center justify-center">
                    <Flower className="w-32 h-32 text-rose-200 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-[#FDFBF7]">
        <Container>
          <div className="bg-charcoal rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-rose-500/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl font-serif font-bold text-white mb-6">
                Join Our Inner Circle
              </h2>
              <p className="text-white/70 text-lg mb-10">
                Whether you are a student or a working professional, find your
                tribe and grow with grace.
              </p>
              <Link href="/admissions">
                <Button className="bg-rose-500 text-white hover:bg-rose-600 border-none px-10 py-4 rounded-xl shadow-lg shadow-rose-500/25">
                  Get Connected
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
