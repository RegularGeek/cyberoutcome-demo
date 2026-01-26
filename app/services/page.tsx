import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[#1E5BFF]/25 mix-blend-overlay" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="text-white/70 text-sm uppercase tracking-[0.25em]">
            Services
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold">
            Services & Capabilities
          </h1>
          <p className="mt-6 max-w-3xl text-white/80 text-lg leading-relaxed">
            From advisory and delivery to day-to-day operations—our teams help you
            secure, optimise, and scale your technology.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-full bg-[#1E5BFF] px-6 py-3 text-sm font-semibold hover:opacity-90"
            >
              Request a call
            </Link>
          </div>
        </div>
      </section>

      <Services />
      <Stats />

      <Footer />
    </main>
  );
}
