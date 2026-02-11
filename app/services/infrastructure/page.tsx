import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pillars = [
  {
    title: "Infrastructure Design",
    desc: "Architecture for compute, network, identity, and connectivity.",
  },
  {
    title: "Implementation",
    desc: "Deploy secure and reliable platforms aligned with best practices.",
  },
  {
    title: "Cloud Migration",
    desc: "Migration planning and execution with minimal business disruption.",
  },
  {
    title: "Resilience & Monitoring",
    desc: "Monitoring strategy, backups, DR planning, and uptime improvements.",
  },
];

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO (same structure as Cybersecurity page) */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* background */}
        <div className="absolute inset-0">
          {/* Gradient base */}
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(37,99,235,0.35),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(59,130,246,0.22),transparent_60%),linear-gradient(to_bottom,rgba(2,6,23,0.75),rgba(2,6,23,0.92))]" />
          {/* subtle grid */}
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:56px_56px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs tracking-[0.35em] text-slate-300">SERVICES</p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-6xl">
            Infrastructure
          </h1>

          <p className="mt-5 max-w-2xl text-base text-slate-200 md:text-lg">
            We design and implement secure, scalable infrastructure that supports
            performance, resilience, and growth across cloud and on-prem
            environments.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
            >
              Talk to us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT (white background like Cybersecurity page) */}
      <main className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA box (matches Cybersecurity style) */}
        <div className="mt-12 rounded-3xl bg-slate-950 px-8 py-8 text-white shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-bold">
                Need help modernising infrastructure?
              </h3>
              <p className="mt-2 text-slate-300">
                We can assess your current environment and propose a secure,
                scalable target architecture.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
            >
              Request a consultation
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
