"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import { BookOpen, Sparkles, Target } from "lucide-react";

export default function WhatIsBACE() {
  const pillars = [
    {
      icon: Target,
      title: "Character",
      description: "Building strong moral foundations",
    },
    {
      icon: Sparkles,
      title: "Clarity",
      description: "Understanding life's purpose",
    },
    {
      icon: BookOpen,
      title: "Consciousness",
      description: "Spiritual wisdom & awareness",
    },
  ];

  return (
    <Section id="what-is-bace" background="white">
      <Container>
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Text Content - Takes 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-saffron/10 text-saffron text-sm font-semibold rounded-full">
                Our Foundation
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-bold text-charcoal leading-tight">
              What is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">
                BACE
              </span>
              ?
            </h2>

            <div className="space-y-5 text-lg text-charcoal-light leading-relaxed">
              <p className="text-xl font-medium text-charcoal">
                <strong className="text-saffron">
                  Bhaktivedanta Academic and Cultural Education (BACE)
                </strong>{" "}
                is a youth-focused educational and cultural initiative inspired
                by the teachings of ISKCON.
              </p>

              <p>
                We nurture{" "}
                <strong>character, clarity, and consciousness</strong> among
                young people through timeless Vedic wisdom, practical life
                education, and value-based cultural learning.
              </p>

              <p>
                BACE addresses the intellectual, emotional, and spiritual needs
                of today's youth by blending ancient philosophy with modern
                academic thinking and personal development frameworks.
              </p>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 text-saffron font-semibold">
                <span className="w-12 h-0.5 bg-saffron"></span>
                Empowering purposeful, balanced, and spiritually grounded lives
              </div>
            </div>
          </div>

          {/* Visual Content - Takes 2 columns */}
          <div className="lg:col-span-2 relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-saffron/20 via-gold/10 to-transparent rounded-3xl blur-3xl"></div>

            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-charcoal to-charcoal-light rounded-3xl p-8 shadow-2xl border border-white/10">
              <h3 className="text-2xl font-serif font-bold text-white mb-8 text-center">
                Three Pillars of BACE
              </h3>

              <div className="space-y-6">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-saffron rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">
                            {pillar.title}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Accent */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-sm text-gray-400 italic">
                  Education for life, beyond information
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
