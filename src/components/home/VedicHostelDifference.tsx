"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import { X, Check } from "lucide-react";

export default function VedicHostelDifference() {
  const comparisons = [
    {
      general: "Freedom without guidance",
      bace: "Guided freedom with responsibility",
    },
    {
      general: "Strong negative peer pressure",
      bace: "Positive peer influence for growth",
    },
    {
      general: "Exposure to alcohol, smoking, unhealthy habits",
      bace: "Substance-free, clean environment",
    },
    {
      general: "Irregular routines and distractions",
      bace: "Structured daily routine with clarity",
    },
    {
      general: "Emotional struggles unnoticed",
      bace: "Active mentorship and support",
    },
    {
      general: "Focus only on survival and marks",
      bace: "Focus on character, clarity, long-term growth",
    },
  ];

  return (
    <Section background="beige">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-saffron/10 text-saffron text-sm font-semibold rounded-full">
              The Difference
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
            How BACE Is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest to-saffron">
              Different
            </span>
          </h2>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto leading-relaxed">
            Hostel life shapes a student's habits, mindset, and future. BACE
            creates an intentional living environment designed to support
            students academically, emotionally, and spiritually.
          </p>
          <p className="mt-4 text-sm text-charcoal-light italic">
            The difference is environmental and systemic, not judgmental of
            students.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* General Hostel Side - Faded Red */}
              <div className="bg-gradient-to-br from-red-50 to-gray-100 p-6 border-b-2 border-red-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-200/60 flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-red-600/70 mb-1">
                      General Hostel
                    </p>
                    <p className="text-gray-700">{comparison.general}</p>
                  </div>
                </div>
              </div>

              {/* BACE Side - Vibrant Green/Saffron */}
              <div className="bg-gradient-to-br from-forest/10 to-saffron/10 p-6 flex-grow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-forest to-saffron flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-forest mb-1">
                      BACE Vedic Hostel
                    </p>
                    <p className="text-charcoal font-medium">
                      {comparison.bace}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 relative overflow-hidden">
          <div className="bg-gradient-to-r from-white via-beige-soft to-white rounded-3xl p-12 shadow-xl border-2 border-saffron/20 text-center relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-1/4 w-48 h-48 bg-saffron rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-forest rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Direction, not discipline
              </h3>
              <p className="text-xl text-charcoal-light leading-relaxed max-w-3xl mx-auto">
                Students don't need stricter rules — they need better direction.
                BACE provides an environment where students{" "}
                <strong className="text-saffron">naturally choose</strong>{" "}
                discipline, clarity, and growth — not because they are forced,
                but because they understand why it matters.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
