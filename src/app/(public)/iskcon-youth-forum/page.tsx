"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users,
  Target,
  Zap,
  BookOpen,
  Music,
  Heart,
  ArrowRight,
  CheckCircle2,
  Quote,
  Flame,
  Globe,
  Trophy,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

// --- Components ---

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: any;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3 bg-saffron/10 rounded-xl">
        <Icon className="w-8 h-8 text-saffron" />
      </div>
      <div>
        <h4 className="text-3xl font-bold text-charcoal">{value}</h4>
        <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
          {label}
        </p>
      </div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-saffron/20 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-charcoal text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-charcoal/20">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-charcoal mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function IYFPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <main ref={containerRef} className="bg-[#F9F5F0]">
      {/* --- Hero Section --- */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-charcoal overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-saffron/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
        </div>

        <Container className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-saffron font-bold text-sm tracking-widest uppercase">
              <Flame className="w-4 h-4" />
              <span>Ignite Your Potential</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.9]">
              Live with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-500">
                Purpose
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Join a dynamic community of young visionaries. We combine timeless
              Vedic wisdom with modern leadership skills to help you navigate
              life with confidence and clarity.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/admissions">
                <Button className="bg-saffron text-white hover:bg-saffron-dark px-8 py-4 rounded-xl text-lg shadow-lg shadow-saffron/25">
                  Join the Movement <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#activities">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg"
                >
                  Explore Activities
                </Button>
              </Link>
            </div>

            {/* Stats Strip */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div>
                <h4 className="text-3xl font-bold text-white">5K+</h4>
                <p className="text-sm text-gray-400">Youth Connected</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">50+</h4>
                <p className="text-sm text-gray-400">Chapters</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">20+</h4>
                <p className="text-sm text-gray-400">Annual Retreats</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="h-64 bg-gray-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white font-bold text-xl">
                    Retreats
                  </div>
                  <div className="absolute inset-0 bg-saffron/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="h-48 bg-gray-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white font-bold text-xl">
                    Innovation
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-gray-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white font-bold text-xl">
                    Service
                  </div>
                </div>
                <div className="h-64 bg-gray-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white font-bold text-xl">
                    Wisdom
                  </div>
                  <div className="absolute inset-0 bg-saffron/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* --- Pillars Section --- */}
      <section className="py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              More Than Just a Forum
            </h2>
            <p className="text-lg text-gray-600">
              We are creating a generation of value-driven leaders. Success is
              not just professional excellence; it's the balance of character,
              competence, and compassion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Target}
              title="Clarity"
              desc="Discover your 'Why' and align your career with your deeper purpose."
            />
            <FeatureCard
              icon={Zap}
              title="Energy"
              desc="Channel your youthful energy into focused, high-impact activities."
            />
            <FeatureCard
              icon={BookOpen}
              title="Wisdom"
              desc="Access ancient tools for modern stress management and focus."
            />
            <FeatureCard
              icon={Users}
              title="Network"
              desc="Connect with a global family of like-minded, ambitious peers."
            />
          </div>
        </Container>
      </section>

      {/* --- Activities Grid (Masonry Style) --- */}
      <section id="activities" className="py-24 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-saffron font-bold tracking-widest uppercase text-sm mb-2 block">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
                Experience the Transformation
              </h2>
            </div>
            <Link href="/events">
              <Button
                variant="outline"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
              >
                View Course Calendar
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="space-y-8">
              <div className="group rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-500">
                <div className="h-64 bg-blue-50 relative overflow-hidden">
                  {/* Placeholder for Seminar Image */}
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-blue-700 font-bold text-sm">
                    Seminars
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-charcoal mb-3">
                    Power Seminars
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Interactive sessions on "Art of Mind Control", "Stress
                    Management", and "Leadership".
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-saffron mr-2" />{" "}
                      Scientific Approach
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-saffron mr-2" /> Q&A
                      Sessions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-8 md:pt-12">
              <div className="group rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-500">
                <div className="h-64 bg-orange-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-orange-500/5 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-orange-700 font-bold text-sm">
                    Arts
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-charcoal mb-3">
                    Cultural Arts
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Express yourself through theatrical drama, music, public
                    speaking, and event management.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-saffron mr-2" />{" "}
                      Talent Showcases
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-saffron mr-2" />{" "}
                      Musical Training
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-8">
              <div className="group rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-500">
                <div className="h-64 bg-green-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-500/5 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-green-700 font-bold text-sm">
                    Retreats
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-charcoal mb-3">
                    Spiritual Retreats
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Weekend camps to holy places, trekking, meditation sessions,
                    and deep bonding.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-saffron mr-2" />{" "}
                      Digital Detox
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-saffron mr-2" />{" "}
                      Nature Connection
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-charcoal"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>

        <Container className="relative z-10">
          <div className="bg-saffron rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-white">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
                Ready to Upgrade Your Life?
              </h2>
              <p className="text-xl md:text-2xl opacity-90 mb-12 font-light">
                Join thousands of students who have found their path, purpose,
                and people at IYF.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions">
                  <Button className="bg-white text-saffron hover:bg-gray-100 px-10 py-5 rounded-xl text-lg font-bold shadow-lg">
                    Register Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-10 py-5 rounded-xl text-lg"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
