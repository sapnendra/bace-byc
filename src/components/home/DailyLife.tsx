import Container from "../ui/Container";
import Section from "../ui/Section";

export default function DailyLife() {
  const dailySchedule = [
    {
      time: "Morning",
      icon: "🌅",
      title: "Setting the Tone",
      activities: [
        "Early rising for freshness and alertness",
        "Gentle reflective practices",
        "Light physical activity",
        "Mental clarity before the day begins",
      ],
      color: "from-saffron-light to-gold",
    },
    {
      time: "Daytime",
      icon: "📚",
      title: "Academics & Responsibilities",
      activities: [
        "Attend college or university classes",
        "Dedicated study hours",
        "Academic support and guidance",
        "Personal responsibility and discipline",
      ],
      color: "from-forest-light to-forest",
    },
    {
      time: "Food & Lifestyle",
      icon: "🍽️",
      title: "Clean and Conscious Living",
      activities: [
        "Nutritious vegetarian meals",
        "Fixed meal timings",
        "Clean, organized spaces",
        "Conscious lifestyle choices",
      ],
      color: "from-beige to-saffron-muted",
    },
    {
      time: "Evening",
      icon: "🌇",
      title: "Learning & Community",
      activities: [
        "Interactive learning sessions",
        "Group discussions",
        "Life skills and values education",
        "Cultural and intellectual engagement",
      ],
      color: "from-saffron to-saffron-light",
    },
    {
      time: "Night",
      icon: "🌙",
      title: "Rest & Recovery",
      activities: [
        "Calm atmosphere for winding down",
        "Healthy sleep routines",
        "Limited distractions",
        "Mental peace and restoration",
      ],
      color: "from-charcoal to-charcoal-light",
    },
  ];

  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            Daily Life at BACE
          </h2>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto">
            Life at BACE is designed around a simple principle:{" "}
            <strong>discipline should support freedom, not suppress it.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dailySchedule.map((period, index) => (
            <div
              key={index}
              className="bg-white border-2 border-beige rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${period.color} rounded-full flex items-center justify-center text-3xl mb-4`}
              >
                {period.icon}
              </div>
              <div className="text-sm text-saffron font-semibold mb-1">
                {period.time}
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                {period.title}
              </h3>
              <ul className="space-y-2">
                {period.activities.map((activity, i) => (
                  <li
                    key={i}
                    className="flex items-start text-sm text-charcoal-light"
                  >
                    <svg
                      className="w-4 h-4 text-forest mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-beige p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-charcoal mb-3">
              ⚖️ Discipline That Builds Freedom
            </h4>
            <ul className="space-y-2 text-charcoal-light">
              <li>• Explained, not imposed</li>
              <li>• Practiced with understanding</li>
              <li>• Supported through mentorship</li>
            </ul>
          </div>
          <div className="bg-forest/10 p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-charcoal mb-3">
              🧭 Freedom With Responsibility
            </h4>
            <ul className="space-y-2 text-charcoal-light">
              <li>• Ask questions openly</li>
              <li>• Think independently</li>
              <li>• Take ownership of actions</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center bg-saffron/5 p-6 rounded-lg border-2 border-saffron/20">
          <p className="text-lg text-charcoal font-medium">
            Daily life at BACE creates a rhythm where{" "}
            <strong className="text-saffron">
              routine strengthens discipline, discipline protects freedom, and
              freedom leads to growth.
            </strong>
          </p>
        </div>
      </Container>
    </Section>
  );
}
