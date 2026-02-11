import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-white/70 text-sm uppercase tracking-[0.25em]">
          Contact
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold">
          We&apos;d Love To Hear From You
        </h1>
        <p className="mt-6 max-w-3xl text-white/80 text-lg leading-relaxed">
          Share what you need and we’ll respond with a recommended next step.
        </p>

        <div className="mt-10 rounded-3xl border border-[#1E5BFF]/30 bg-[#1E5BFF]/10 p-10">
          <div className="grid gap-3 md:grid-cols-3">
            <input
              className="rounded-xl bg-[#0B0F14]/60 border border-white/10 px-4 py-3 text-sm outline-none text-white placeholder:text-white/40"
              placeholder="Full name"
            />
            <input
              className="rounded-xl bg-[#0B0F14]/60 border border-white/10 px-4 py-3 text-sm outline-none text-white placeholder:text-white/40"
              placeholder="Work email"
            />
            <button className="rounded-xl bg-[#1E5BFF] px-4 py-3 text-sm font-medium hover:opacity-90">
              Send
            </button>
          </div>

          <p className="mt-4 text-xs text-white/60">
            Demo form only (we can connect it to email/CRM later).
          </p>
        </div>
      </section>

      
    </main>
  );
}
