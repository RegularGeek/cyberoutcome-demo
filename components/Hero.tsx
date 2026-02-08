"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
};

export default function Hero() {
  const slides: Slide[] = useMemo(
    () => [
      {
        src: "/hero/slide-1.png",
        alt: "CyberOutcome African Security Operations Center",
        eyebrow: "Trusted IT Partner",
        title: "Secure. Scale. Transform.",
        description:
          "CyberOutcome helps organizations strengthen cybersecurity, modernize infrastructure, and build resilient digital operations across Africa.",
      },
      {
        src: "/hero/slide-2.png",
        alt: "Pan-African cyber defense and monitoring team",
        eyebrow: "Pan-African Cybersecurity",
        title: "Threat Ready. Always On.",
        description:
          "24/7 monitoring, rapid response, and security assurance to keep critical systems safe across borders and industries.",
      },
      {
        src: "/hero/slide-3.png",
        alt: "African technology and cloud security operations",
        eyebrow: "Cloud • Security • DevOps",
        title: "Build with Security Built-In.",
        description:
          "From identity to cloud to data protection—our teams implement security that scales with your business and your customers.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  // Auto-rotate slides (no arrows/dots)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, [slides.length]);

  const current = slides[index];

  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={[
              "absolute inset-0 transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0",
            ].join(" ")}
            aria-hidden={i !== index}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              className="object-cover object-center"
            />

            {/* Overlays for readability + brand vibe */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/85 via-[#0B1220]/60 to-transparent" />
            <div className="absolute inset-0 bg-[#1E5BFF]/15 mix-blend-overlay" />

            {/* Subtle CyberOutcome logo watermark (top-left) */}
            <div className="absolute left-6 top-24 opacity-15 md:left-12 md:top-28">
              <Image
                src="/logo.png"
                alt="CyberOutcome watermark"
                width={220}
                height={220}
                className="select-none"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          {/* Brand block */}
          <div className="mb-6 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CyberOutcome Logo"
              width={56}
              height={56}
              className="rounded"
            />
            <div>
              <p className="text-white font-semibold leading-none">CyberOutcome</p>
              <p className="text-white/70 text-sm leading-none">
                Your Partner for the Future
              </p>
            </div>
          </div>

          {/* Slide text */}
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-blue-300 uppercase">
            {current.eyebrow}
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
            {current.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base text-white/80 md:text-lg">
            {current.description}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Learn More
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/35 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
