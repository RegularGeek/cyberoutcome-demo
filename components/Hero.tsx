"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* Background Image (CLEAN: no baked text) */}
      <div className="absolute inset-0">
        <Image
          src="/hero-soc.png"
          alt="CyberOutcome Security Operations Center"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark + Blue overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/80 via-[#0B1220]/55 to-transparent" />
        <div className="absolute inset-0 bg-[#1E5BFF]/15 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          {/* Logo (ONLY logo overlay, not baked text) */}
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

          {/* Eyebrow */}
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-blue-300 uppercase">
            Trusted IT Partner
          </p>

          {/* Main text */}
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Secure. Scale. Transform.
          </h1>

          <p className="mt-6 max-w-2xl text-base text-white/80 md:text-lg">
            CyberOutcome helps organizations strengthen cybersecurity, modernize
            infrastructure, and build resilient digital operations across Africa.
          </p>

          {/* CTA Buttons */}
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
