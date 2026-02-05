import Container from "../ui/Container";
import Section from "../ui/Section";

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            What Students Learn at BACE
          </h2>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto">
            BACE offers more than information — it provides education for life.
            Students learn to understand themselves, manage their minds, and
            live with clarity.
          </p>
        </div>

        <div className="space-y-6">
          {learningOutcomes.map((outcome, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-12 gap-6 p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${
                index % 2 === 0
                  ? "bg-beige-soft"
                  : "bg-white border border-beige"
              }`}
            >
              <div className="md:col-span-2 flex items-start">
                <span className="text-5xl font-serif font-bold text-saffron/30">
                  {outcome.number}
                </span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-2xl font-semibold text-charcoal mb-3">
                  {outcome.title}
                </h3>
                <p className="text-charcoal-light leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-forest/5 p-8 rounded-lg">
          <p className="text-lg text-charcoal font-medium">
            <strong className="text-forest">Outcome:</strong> Students don't
            just gain knowledge — they gain clarity of thought, emotional
            strength, moral grounding, purposeful direction, and a supportive
            value-based community.
          </p>
        </div>
      </Container>
    </Section>
  );
}
