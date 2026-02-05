import Container from "../ui/Container";
import Section from "../ui/Section";
import Card from "../ui/Card";

export default function WhyBACEMatters() {
  const reasons = [
    {
      title: "Education Without Inner Direction Is Incomplete",
      description:
        "Modern education trains the brain, but rarely guides the mind and character. BACE fills this gap by offering clarity about life, self, and purpose.",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Helps Students Handle Stress, Fear, and Uncertainty",
      description:
        "BACE equips students with practical inner tools for managing academic pressure, career anxiety, and emotional ups and downs.",
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
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Bridges Ancient Wisdom with Modern Life",
      description:
        "Ancient philosophy explained using logic, examples, and discussions, making it intellectually satisfying for curious young minds.",
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Builds Character Alongside Career",
      description:
        "Grades may get students jobs, but character sustains success. BACE nurtures integrity, discipline, responsibility, and respect.",
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
    },
    {
      title: "Provides Supportive Youth Community",
      description:
        "A positive peer circle, mentors and guides, meaningful discussions, and cultural engagement create a safe, growth-oriented environment.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Encourages Purpose-Driven Living",
      description:
        "Students gain direction by answering life's most important questions: Who am I? What truly matters? How can I live meaningfully?",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <Section background="beige">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            Why BACE Matters for Today's Students
          </h2>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto">
            Today's students are more informed, ambitious, and anxious than
            ever. BACE addresses the gap between academic success and inner
            fulfillment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} hover className="flex flex-col">
              <div className="w-16 h-16 bg-saffron/10 rounded-lg flex items-center justify-center text-saffron mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {reason.title}
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
