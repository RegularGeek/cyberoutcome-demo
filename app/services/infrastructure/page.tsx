import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-white/60 uppercase tracking-[0.25em] text-sm">
          Services
        </p>
        <h1 className="mt-3 text-4xl md:text-6xl font-semibold">
          Infrastructure
        </h1>
        <p className="mt-6 max-w-3xl text-white/80 leading-relaxed">
          We design and implement secure, scalable infrastructure that supports
          performance, resilience, and growth across cloud and on-prem environments.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Infrastructure Design</h3>
            <p className="mt-2 text-white/70">
              Architecture for compute, network, identity, and connectivity.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Implementation</h3>
            <p className="mt-2 text-white/70">
              Deploy secure and reliable platforms aligned with best practices.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Cloud Migration</h3>
            <p className="mt-2 text-white/70">
              Migration planning and execution with minimal business disruption.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Resilience & Monitoring</h3>
            <p className="mt-2 text-white/70">
              Monitoring strategy, backups, DR planning, and uptime improvements.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex rounded-full bg-[#1E5BFF] px-6 py-3 text-sm font-semibold hover:opacity-90"
          >
            Back to Services
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
