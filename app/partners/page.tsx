import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedBy from "@/components/TrustedBy";
import Link from "next/link";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[#1E5BFF]/25 mix-blend-overlay" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="text-white/70 text-sm uppercase tracking-[0.25em]">
            Partners
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold">
            Trusted By & Partnerships
          </h1>
          <p className="mt-6 max-w-3xl text-white/80 text-lg leading-relaxed">
            We work with organisations across finance, fintech, and energy. This
            demo page showcases client trust signals and partner positioning.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-full bg-[#1E5BFF] px-6 py-3 text-sm font-semibold hover:opacity-90"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <TrustedBy />

      
    </main>
  );
}
