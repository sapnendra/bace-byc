"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import { Sunrise, BookOpen, UtensilsCrossed, Sunset, Moon } from "lucide-react";

export default function DailyLife() {
  const dailySchedule = [
    {
      time: "Morning",
      icon: Sunrise,
      title: "Setting the Tone",
      activities: [
        "Early rising for freshness and alertness",
        "Gentle reflective practices",
        "Light physical activity",
        "Mental clarity before the day begins",
      ],
      gradient: "from-amber-400 via-orange-400 to-yellow-300",
      bgGradient: "from-amber-50 to-orange-50",
    },
    {
      time: "Daytime",
      icon: BookOpen,
      title: "Academics & Responsibilities",
      activities: [
        "Attend college or university classes",
        "Dedicated study hours",
        "Academic support and guidance",
        "Personal responsibility and discipline",
      ],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      time: "Food & Lifestyle",
      icon: UtensilsCrossed,
      title: "Clean and Conscious Living",
      activities: [
        "Nutritious vegetarian meals",
        "Fixed meal timings",
        "Clean, organized spaces",
        "Conscious lifestyle choices",
      ],
      gradient: "from-saffron via-gold to-amber-400",
      bgGradient: "from-orange-50 to-amber-50",
    },
    {
      time: "Evening",
      icon: Sunset,
      title: "Learning & Community",
      activities: [
        "Interactive learning sessions",
        "Group discussions",
        "Life skills and values education",
        "Cultural and intellectual engagement",
      ],
      gradient: "from-orange-500 via-red-400 to-pink-400",
      bgGradient: "from-orange-50 to-pink-50",
    },
    {
      time: "Night",
      icon: Moon,
      title: "Rest & Recovery",
      activities: [
        "Calm atmosphere for winding down",
        "Healthy sleep routines",
        "Limited distractions",
        "Mental peace and restoration",
      ],
      gradient: "from-indigo-600 via-purple-600 to-blue-700",
      bgGradient: "from-indigo-50 to-purple-50",
    },
  ];

  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-forest/10 text-forest text-sm font-semibold rounded-full">
              A Day in BACE
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
            Daily Life at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-forest">
              BACE
            </span>
          </h2>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto leading-relaxed">
            Life at BACE is designed around a simple principle:{" "}
            <strong>discipline should support freedom, not suppress it.</strong>
          </p>
        </div>

        {/* Horizontal Scrollable Timeline */}
        <div className="relative">
          {/* Scroll Container */}
          <div className="overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            <div className="flex gap-6 min-w-max">
              {dailySchedule.map((period, index) => {
                const Icon = period.icon;
                return (
                  <div key={index} className="snap-center w-80 flex-shrink-0">
                    <div
                      className={`bg-gradient-to-br ${period.bgGradient} rounded-3xl p-8 h-full border-2 border-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
                    >
                      {/* Icon with Gradient */}
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${period.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <Icon
                          className="w-10 h-10 text-white"
                          strokeWidth={2}
                        />
                      </div>

                      {/* Time Badge */}
                      <div className="inline-block px-4 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-bold text-charcoal mb-3">
                        {period.time}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-charcoal mb-6">
                        {period.title}
                      </h3>

                      {/* Activities */}
                      <ul className="space-y-3">
                        {period.activities.map((activity, i) => (
                          <li
                            key={i}
                            className="flex items-start text-charcoal-light"
                          >
                            <span
                              className={`w-2 h-2 rounded-full bg-gradient-to-br ${period.gradient} mt-2 mr-3 flex-shrink-0`}
                            ></span>
                            <span className="text-sm leading-relaxed">
                              {activity}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scroll Hint (Mobile) */}
          <div className="text-center mt-4 text-sm text-charcoal-light md:hidden">
            ← Swipe to explore the day →
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-saffron/10 to-gold/10 rounded-3xl p-8 border-2 border-saffron/20">
            <h4 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-saffron rounded-xl flex items-center justify-center text-white text-xl">
                ⚖️
              </span>
              Discipline That Builds Freedom
            </h4>
            <ul className="space-y-3 text-charcoal-light">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-2 mr-3"></span>
                Explained, not imposed
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-2 mr-3"></span>
                Practiced with understanding
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-2 mr-3"></span>
                Supported through mentorship
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-forest/10 to-teal-100/50 rounded-3xl p-8 border-2 border-forest/20">
            <h4 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-forest rounded-xl flex items-center justify-center text-white text-xl">
                🧭
              </span>
              Freedom With Responsibility
            </h4>
            <ul className="space-y-3 text-charcoal-light">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2 mr-3"></span>
                Ask questions openly
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2 mr-3"></span>
                Think independently
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2 mr-3"></span>
                Take ownership of actions
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-12 relative overflow-hidden">
          <div className="bg-gradient-to-r from-charcoal via-charcoal-light to-charcoal rounded-3xl p-12 shadow-2xl text-center relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-saffron rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-forest rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-4xl mx-auto">
                Daily life at BACE creates a rhythm where{" "}
                <strong className="text-saffron">
                  routine strengthens discipline, discipline protects freedom,
                  and freedom leads to growth.
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Custom Scrollbar Styles */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </Container>
    </Section>
  );
}
