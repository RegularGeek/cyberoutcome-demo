import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationsSection from "@/components/LocationsSection";

export default function RegionsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[#1E5BFF]/25 mix-blend-overlay" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="text-white/80 text-sm uppercase tracking-[0.25em]">
            Regions
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
            Pan-African Delivery Footprint
          </h1>
          <p className="mt-6 max-w-3xl text-white/80 text-lg leading-relaxed">
            We operate across key African markets to deliver cybersecurity, cloud,
            DevOps, and managed services with local presence and enterprise-grade execution.
          </p>
        </div>
      </section>

      <LocationsSection />

      <Footer />
    </main>
  );
}
