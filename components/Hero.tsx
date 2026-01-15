"use client";

import { useEffect, useState } from "react";

type Slide = {
  kicker: string;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
};

const SLIDES: Slide[] = [
  {
    kicker: "Pan-African Reach & Excellence",
    title: "Trusted IT & Cybersecurity Partner Across Africa",
    subtitle: "Certified. Experienced. Proven.",
    cta: "Learn More",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=80",
  },
  {
    kicker: "Cloud • Security • DevOps",
    title: "Build, Secure & Scale Digital Infrastructure",
    subtitle: "Modern cloud platforms with security built-in.",
    cta: "Explore Services",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=2400&q=80",
  },
  {
    kicker: "Managed Services",
    title: "Operate With Confidence, 24/7",
    subtitle: "Monitoring, response, and continuous optimisation.",
    cta: "Book a Discovery Call",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? SLIDES.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === SLIDES.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const timer = setInterval(() => next(), 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[index];

  return (
    <section className="relative h-[520px] md:h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Readability + brand overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[#1E5BFF]/30 mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-6xl px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <p className="text-sm md:text-base text-white/80">{slide.kicker}</p>

            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
              {slide.title}
            </h1>

            <p className="mt-4 text-xl md:text-2xl text-white/85">
              {slide.subtitle}
            </p>

            <div className="mt-10">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-[#1E5BFF] px-10 py-4 text-sm font-semibold text-white hover:opacity-95 transition"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white text-2xl"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white text-2xl"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
