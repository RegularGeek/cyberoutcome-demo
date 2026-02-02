import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-white/60 uppercase tracking-[0.25em] text-sm">
          Services
        </p>
        <h1 className="mt-3 text-4xl md:text-6xl font-semibold">
          Cybersecurity
        </h1>
        <p className="mt-6 max-w-3xl text-white/80 leading-relaxed">
          We help organisations reduce risk, prevent breaches, and strengthen
          cyber resilience with practical, enterprise-ready security services.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Security Assessment</h3>
            <p className="mt-2 text-white/70">
              Risk assessment, security posture review, and gap remediation planning.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Vulnerability Management</h3>
            <p className="mt-2 text-white/70">
              Vulnerability scanning, prioritisation, and remediation tracking.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Incident Response Support</h3>
            <p className="mt-2 text-white/70">
              Response planning, triage support, containment guidance, and reporting.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Security Monitoring</h3>
            <p className="mt-2 text-white/70">
              Logging visibility and alerting strategy to detect suspicious activity.
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
