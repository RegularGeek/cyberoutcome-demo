import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import TrustedBy from "@/components/TrustedBy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />
      <Hero />

      {/* Trust & positioning */}
      <WhyChooseUs />

      {/* Core offerings */}
      <Services />

      {/* Proof points */}
      <Stats />

      {/* Trusted by logos */}
      <TrustedBy />

      {/* Contact CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 pt-10">
        <div className="rounded-3xl border border-[#1E5BFF]/30 bg-[#1E5BFF]/10 p-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Let’s talk outcomes
          </h2>
          <p className="mt-3 text-white/80 max-w-2xl">
            Tell us what you want to achieve and we’ll schedule a discovery call
            focused on security, reliability, and scale.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-3">
            <input
              className="rounded-xl bg-[#0B0F14]/60 border border-white/10 px-4 py-3 text-sm outline-none text-white placeholder:text-white/40"
              placeholder="Full name"
            />
            <input
              className="rounded-xl bg-[#0B0F14]/60 border border-white/10 px-4 py-3 text-sm outline-none text-white placeholder:text-white/40"
              placeholder="Work email"
            />
            <button className="rounded-xl bg-[#1E5BFF] px-4 py-3 text-sm font-medium hover:opacity-90">
              Request a call
            </button>
          </div>
        </div>
      </section>

      
    </main>
  );
}
