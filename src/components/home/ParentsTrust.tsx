import Link from "next/link";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function ParentsTrust() {
  const trustReasons = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Safe & Value-Based Environment",
      description:
        "A clean, substance-free atmosphere with clear lifestyle boundaries that protect students naturally.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Guidance During Vulnerable Years",
      description:
        "Students are guided by mentors, supported during challenges, and encouraged to speak openly.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      title: "Discipline Without Harsh Control",
      description:
        "Discipline is explained instead of enforced blindly, encouraging responsibility and self-control.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Academic Focus & Personal Growth",
      description:
        "Supporting college schedules and encouraging excellence while teaching balance, not withdrawal.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: "Character Development",
      description:
        "Students become respectful, grounded, emotionally stable, and clear about right and wrong.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Transparency & Trust",
      description:
        "Clear communication, open access to mentors, and honest explanation of values.",
    },
  ];

  return (
    <Section background="soft">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            Why Parents Trust BACE
          </h2>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto">
            Parents trust BACE because they see their children becoming calmer,
            more focused, developing discipline naturally, and making better
            life choices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {trustReasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-forest/10 rounded-lg flex items-center justify-center text-forest mb-4">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                {reason.title}
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
            Ready to Learn More?
          </h3>
          <p className="text-charcoal-light mb-6 max-w-2xl mx-auto">
            Parents trust BACE because it protects their children's future — not
            by controlling them, but by guiding them with care, clarity, and
            values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/parents">
              <Button variant="secondary" size="lg">
                For Parents
              </Button>
            </Link>
            <Link href="/admissions">
              <Button variant="primary" size="lg">
                Start Admission Process
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
