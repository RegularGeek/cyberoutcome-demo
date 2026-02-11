import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[#1E5BFF]/25 mix-blend-overlay" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="text-white/70 text-sm uppercase tracking-[0.25em]">
            Company
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold">
            About CyberOutcome
          </h1>
          <p className="mt-6 max-w-3xl text-white/80 text-lg leading-relaxed">
            We deliver enterprise-grade cybersecurity, cloud, and managed
            services across Africa—focused on secure, reliable, scalable outcomes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[#1E5BFF] px-6 py-3 text-sm font-semibold hover:opacity-90"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      
    </main>
  );
}
