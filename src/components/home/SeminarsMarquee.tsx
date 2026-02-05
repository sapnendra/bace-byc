"use client";

import Link from "next/link";
import Button from "../ui/Button";
import Section from "../ui/Section";
import Container from "../ui/Container";

export default function SeminarsMarquee() {
  // Placeholder seminar images - replace with actual images
  const seminars = [
    {
      id: 1,
      title: "Youth Leadership Summit",
      image: "/images/seminars/seminar-1.jpg",
    },
    {
      id: 2,
      title: "Vedic Philosophy Workshop",
      image: "/images/seminars/seminar-2.jpg",
    },
    {
      id: 3,
      title: "Character Development Program",
      image: "/images/seminars/seminar-3.jpg",
    },
    {
      id: 4,
      title: "Student Empowerment Event",
      image: "/images/seminars/seminar-4.jpg",
    },
    {
      id: 5,
      title: "Cultural Exchange Program",
      image: "/images/seminars/seminar-5.jpg",
    },
    {
      id: 6,
      title: "Mindfulness and Meditation",
      image: "/images/seminars/seminar-6.jpg",
    },
  ];

  // Duplicate the array for seamless infinite loop
  const duplicatedSeminars = [...seminars, ...seminars, ...seminars];

  return (
    <Section background="white" className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            Our Seminars
          </h2>
        </div>
      </Container>

      {/* Stepped Marquee Container - Full Width */}
      <div className="relative overflow-hidden mb-8 w-full group">
        {/* Row 1 - Scrolling Left to Right */}
        <div className="flex gap-6 mb-6 w-full">
          <div className="flex gap-6 animate-marquee-ltr w-max">
            {duplicatedSeminars.map((seminar, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-80 h-64 bg-beige rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gradient-to-br from-saffron/20 to-forest/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">📚</div>
                    <h3 className="font-semibold text-charcoal text-lg">
                      {seminar.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolling Right to Left (opposite direction) */}
        <div className="flex gap-6 w-full">
          <div className="flex gap-6 animate-marquee-rtl w-max">
            {duplicatedSeminars.map((seminar, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-80 h-64 bg-beige rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gradient-to-br from-forest/20 to-saffron/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">🎓</div>
                    <h3 className="font-semibold text-charcoal text-lg">
                      {seminar.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Container>
        {/* View All Button */}
        <div className="text-center pt-8">
          <Link href="/seminars">
            <Button variant="primary" size="lg">
              VIEW ALL SEMINARS
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
