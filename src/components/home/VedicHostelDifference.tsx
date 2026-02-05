import Container from "../ui/Container";
import Section from "../ui/Section";

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
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            How BACE Is Different from a General Hostel
          </h2>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto">
            Hostel life shapes a student's habits, mindset, and future. BACE
            creates an intentional living environment designed to support
            students academically, emotionally, and spiritually.
          </p>
          <p className="mt-4 text-sm text-charcoal-light italic">
            The difference is environmental and systemic, not judgmental of
            students.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="border-b-2 border-beige">
                <th className="text-left p-6 text-lg font-semibold text-charcoal-light">
                  General Hostel
                </th>
                <th className="text-left p-6 text-lg font-semibold text-forest">
                  BACE Vedic Hostel
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison, index) => (
                <tr
                  key={index}
                  className={`border-b border-beige/50 ${
                    index % 2 === 0 ? "bg-white" : "bg-beige-soft"
                  }`}
                >
                  <td className="p-6 text-charcoal-light">
                    {comparison.general}
                  </td>
                  <td className="p-6 text-charcoal font-medium">
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-forest mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {comparison.bace}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg text-charcoal leading-relaxed">
            Students don't need stricter rules — they need better direction.
            BACE provides an environment where students{" "}
            <strong className="text-saffron">naturally choose</strong>{" "}
            discipline, clarity, and growth — not because they are forced, but
            because they understand why it matters.
          </p>
        </div>
      </Container>
    </Section>
  );
}
