"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import { motion } from "framer-motion";

export default function WhatStudentsLearn() {
  const learningOutcomes = [
    {
      number: "01",
      title: "Understanding Self & Consciousness",
      description:
        "Explore fundamental questions: Who am I beyond body and labels? What is consciousness? Through logical discussion and Vedic philosophy, gain deeper understanding of identity and purpose.",
    },
    {
      number: "02",
      title: "Mind Management & Emotional Intelligence",
      description:
        "Learn to control stress and anxiety, handle anger and fear, stay focused and disciplined. Master awareness, regulation, and control of the mind.",
    },
    {
      number: "03",
      title: "Purpose-Driven Living & Decision Making",
      description:
        "Set meaningful goals, make value-based decisions, and align daily actions with long-term purpose. Choose wisely in studies, relationships, habits, and careers.",
    },
    {
      number: "04",
      title: "Ethical Values & Character Formation",
      description:
        "Develop integrity and honesty, responsibility and self-discipline, respect for people, culture, and nature. Build sustainable success and leadership.",
    },
    {
      number: "05",
      title: "Balancing Academics, Career & Inner Growth",
      description:
        "Study with focus and clarity, work without burnout, stay grounded amid pressure. Create balance, not conflict, between achievement and growth.",
    },
    {
      number: "06",
      title: "Cultural Awareness & Identity",
      description:
        "Gain exposure to Vedic culture, Indian philosophical heritage, and meaningful traditions. Strengthen cultural confidence through reasoning and experience.",
    },
    {
      number: "07",
      title: "Service, Leadership & Social Responsibility",
      description:
        "Develop leadership through service, teamwork and empathy. Understand how personal growth connects to social good, becoming responsible citizens.",
    },
  ];

  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-saffron/10 text-saffron text-sm font-semibold rounded-full">
              Learning Path
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
            What Students{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">
              Learn
            </span>{" "}
            at BACE
          </h2>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto leading-relaxed">
            BACE offers more than information — it provides education for life.
            Students learn to understand themselves, manage their minds, and
            live with clarity.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative space-y-16">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-saffron via-forest to-saffron"></div>

          {learningOutcomes.map((outcome, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`relative ${
                      isEven
                        ? "lg:text-right lg:pr-8"
                        : "lg:col-start-2 lg:pl-8"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-white to-beige-soft border-2 border-beige rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                      {/* Number Badge */}
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-saffron to-gold text-white font-bold text-xl mb-4 ${
                          isEven
                            ? "lg:float-right lg:ml-4"
                            : "lg:float-left lg:mr-4"
                        }`}
                      >
                        {outcome.number}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                        {outcome.title}
                      </h3>
                      <p className="text-lg text-charcoal-light leading-relaxed">
                        {outcome.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot (Desktop only) */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-saffron to-gold border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Empty Column for Spacing */}
                  <div
                    className={`hidden lg:block ${isEven ? "lg:col-start-2" : ""}`}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative overflow-hidden"
        >
          <div className="bg-gradient-to-r from-forest via-forest-light to-forest rounded-3xl p-12 shadow-2xl text-center relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-saffron rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                The Outcome
              </h3>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Students don't just gain knowledge — they gain{" "}
                <strong className="text-saffron">clarity of thought</strong>,{" "}
                <strong className="text-saffron">emotional strength</strong>,{" "}
                <strong className="text-saffron">moral grounding</strong>,{" "}
                <strong className="text-saffron">purposeful direction</strong>,
                and a supportive value-based community.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
