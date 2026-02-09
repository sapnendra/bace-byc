"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import {
  Lightbulb,
  Shield,
  BookOpen,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

export default function WhyBACEMatters() {
  const reasons = [
    {
      title: "Education WithoutInner Direction Is Incomplete",
      description:
        "Modern education trains the brain, but rarely guides the mind and character. BACE fills this gap by offering clarity about life, self, and purpose.",
      icon: Lightbulb,
      size: "large", // Will span more columns
    },
    {
      title: "Handles Stress, Fear, and Uncertainty",
      description:
        "Practical inner tools for managing academic pressure, career anxiety, and emotional ups and downs.",
      icon: Shield,
      size: "medium",
    },
    {
      title: "Bridges Ancient Wisdom with Modern Life",
      description:
        "Ancient philosophy explained using logic, examples, and discussions—intellectually satisfying for curious minds.",
      icon: BookOpen,
      size: "medium",
    },
    {
      title: "Builds Character Alongside Career",
      description:
        "Grades may get jobs, but character sustains success. BACE nurtures integrity, discipline, and respect.",
      icon: Sparkles,
      size: "medium",
    },
    {
      title: "Supportive Youth Community",
      description:
        "A positive peer circle, mentors, meaningful discussions, and cultural engagement create a safe environment.",
      icon: Users,
      size: "medium",
    },
    {
      title: "Encourages Purpose-Driven Living",
      description:
        "Gain direction by answering: Who am I? What truly matters? How can I live meaningfully?",
      icon: Zap,
      size: "large",
    },
  ];

  return (
    <Section background="beige">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-forest/10 text-forest text-sm font-semibold rounded-full">
              Why Choose BACE
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
            Why BACE Matters for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest to-saffron">
              Today's Students
            </span>
          </h2>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto leading-relaxed">
            Today's students are more informed, ambitious, and anxious than
            ever. BACE addresses the gap between academic success and inner
            fulfillment.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isLarge = reason.size === "large";

            return (
              <div
                key={index}
                className={`group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                  isLarge ? "lg:col-span-2" : ""
                }`}
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 via-transparent to-forest/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-saffron/20 to-forest/20 rounded-2xl flex items-center justify-center text-saffron group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-forest transition-colors">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-charcoal-light leading-relaxed flex-grow">
                    {reason.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="mt-6 w-12 h-1 bg-gradient-to-r from-saffron to-forest rounded-full opacity-0 group-hover:opacity-100 group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-charcoal to-charcoal-light rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-saffron rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-forest rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Education for life, not just exams
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              BACE equips students with knowledge{" "}
              <strong className="text-saffron">and</strong> the wisdom to use it
              meaningfully.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
