"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSliderProps {
  images: string[];
  autoSlideMs?: number;
}

export default function HeroSlider({ images, autoSlideMs = 4500 }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, autoSlideMs);

    return () => window.clearInterval(timer);
  }, [images.length, autoSlideMs]);

  const visibleImages = useMemo(() => {
    return [0, 1, 2].map((offset) => {
      const imageIndex = (activeIndex + offset) % images.length;
      return {
        image: images[imageIndex],
        key: `${imageIndex}-${offset}`,
        stackIndex: offset,
        imageIndex,
      };
    });
  }, [activeIndex, images]);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="relative h-[280px] sm:h-[360px] lg:h-[460px]">
        {visibleImages
          .slice()
          .reverse()
          .map(({ image, key, stackIndex, imageIndex }) => {
            const step = 2 - stackIndex;
            return (
              <motion.button
                key={key}
                type="button"
                onClick={() => setActiveIndex(imageIndex)}
                aria-label={`Show slide ${imageIndex + 1}`}
                className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-2xl border border-white/70 bg-white/40 text-left shadow-2xl shadow-charcoal/10"
                animate={{
                  x: step * 26,
                  y: step * 22,
                  scale: 1 - step * 0.08,
                  zIndex: 30 - step,
                  opacity: 1 - step * 0.2,
                }}
                transition={{ type: "spring", stiffness: 180, damping: 24 }}
                whileHover={step === 0 ? { scale: 1.02, y: -4 } : {}}
              >
                <Image
                  src={image}
                  alt={`Jagannath Puri BACE gallery slide ${imageIndex + 1}`}
                  fill
                  loading={step === 0 ? "eager" : "lazy"}
                  priority={step === 0}
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 92vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-charcoal/10 to-transparent" />
              </motion.button>
            );
          })}
      </div>

      <div className="mt-20 flex items-center justify-between gap-4 sm:mt-16">
        <div className="flex items-center gap-2">
          {images.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                idx === activeIndex ? "w-8 bg-saffron" : "w-2.5 bg-charcoal/25 hover:bg-charcoal/45"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="rounded-full border border-charcoal/20 bg-white/80 p-2.5 text-charcoal transition hover:border-saffron hover:text-saffron"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="rounded-full border border-charcoal/20 bg-white/80 p-2.5 text-charcoal transition hover:border-saffron hover:text-saffron"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
