"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!floatingRef.current) return;

    const svgs = floatingRef.current.querySelectorAll(".floating-svg");

    svgs.forEach((svg, index) => {
      // Initial position and rotation
      gsap.set(svg, {
        y: gsap.utils.random(-20, 20),
        x: gsap.utils.random(-20, 20),
        rotation: gsap.utils.random(-15, 15),
      });

      // Floating animation
      gsap.to(svg, {
        y: `+=${gsap.utils.random(30, 60)}`,
        x: `+=${gsap.utils.random(-30, 30)}`,
        rotation: `+=${gsap.utils.random(-30, 30)}`,
        duration: gsap.utils.random(3, 5),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-saffron via-saffron-muted to-forest pt-20">
      {/* Floating SVG Elements */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        {/* Geometric Circle */}
        <svg
          className="floating-svg absolute top-20 right-20 w-24 h-24 opacity-20"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="50" cy="50" r="20" fill="white" opacity="0.5" />
        </svg>

        {/* Triangle */}
        <svg
          className="floating-svg absolute top-40 left-10 w-32 h-32 opacity-15"
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,10 90,90 10,90"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Lotus Pattern */}
        <svg
          className="floating-svg absolute bottom-40 right-40 w-28 h-28 opacity-25"
          viewBox="0 0 100 100"
        >
          <path
            d="M50,20 Q60,40 50,60 Q40,40 50,20 M50,60 Q60,80 70,90 M50,60 Q40,80 30,90"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="50" cy="60" r="8" fill="white" opacity="0.6" />
        </svg>

        {/* Book Icon */}
        <svg
          className="floating-svg absolute top-60 left-1/4 w-20 h-20 opacity-20"
          viewBox="0 0 100 100"
        >
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            rx="2"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <line
            x1="50"
            y1="20"
            x2="50"
            y2="80"
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1="20"
            y1="40"
            x2="80"
            y2="40"
            stroke="white"
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="20"
            y1="60"
            x2="80"
            y2="60"
            stroke="white"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>

        {/* Abstract Form */}
        <svg
          className="floating-svg absolute bottom-20 left-20 w-24 h-24 opacity-15"
          viewBox="0 0 100 100"
        >
          <path
            d="M20,50 Q50,20 80,50 Q50,80 20,50"
            stroke="white"
            strokeWidth="2"
            fill="white"
            opacity="0.3"
          />
        </svg>

        {/* Light Bulb */}
        <svg
          className="floating-svg absolute top-1/3 right-1/4 w-16 h-16 opacity-20"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="40"
            r="20"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <rect
            x="40"
            y="60"
            width="20"
            height="15"
            rx="2"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <line x1="50" y1="15" x2="50" y2="5" stroke="white" strokeWidth="2" />
          <line
            x1="70"
            y1="25"
            x2="77"
            y2="18"
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1="30"
            y1="25"
            x2="23"
            y2="18"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Where Education Meets Character, and Clarity Meets Purpose
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              BACE is a Vedic hostel and youth development platform that
              nurtures college students through guidance, discipline,
              mentorship, and value-based living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Right Content - Visual Space */}
          <div className="hidden lg:block relative h-96">
            {/* Additional decorative elements can go here */}
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
