"use client";

import Link from "next/link";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: `
          radial-gradient(circle at 0% 0%, rgba(200, 98, 31, 0.35) 0%, rgba(200, 98, 31, 0.15) 30%, transparent 50%),
          radial-gradient(circle at 100% 100%, rgba(58, 90, 64, 0.35) 0%, rgba(58, 90, 64, 0.15) 30%, transparent 50%),
          #1a1a1a
        `,
      }}
    >
      {/* Content - Centered */}
      <Container className="relative z-10">
        <div className="flex items-center justify-center">
          <div className="max-w-4xl text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Where Education Meets Character, and Clarity Meets Purpose
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
              BACE is a Vedic hostel and youth development platform that
              nurtures college students through guidance, discipline,
              mentorship, and value-based living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  document
                    .getElementById("what-is-bace")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore BACE
              </Button>
              <Link href="/admissions">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-saffron"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
