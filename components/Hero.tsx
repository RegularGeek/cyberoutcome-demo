"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-africa-1.png"
          alt="CyberOutcome African Security Operations Center"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/logo.png"
              alt="CyberOutcome Logo"
              width={70}
              height={70}
              className="mb-4"
            />
          </div>

          {/* Eyebrow */}
          <p className="mb-3 text-sm font-semibold tracking-widest text-blue-400 uppercase">
            Trusted IT Partner
          </p>

          {/* Headline */}
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Secure. Scale. Transform.
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            CyberOutcome helps organizations strengthen cybersecurity,
            modernize infrastructure, and build resilient digital operations
            across Africa.
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
              className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
