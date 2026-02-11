import Link from "next/link";

export default function InfrastructurePage() {
  return (
    <section className="bg-white pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs tracking-[0.3em] text-slate-500 mb-4">SERVICES</p>

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900">
          Infrastructure
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">
          We design and implement secure, scalable infrastructure that supports
          performance, resilience, and growth across cloud and on-prem
          environments.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card
            title="Infrastructure Design"
            desc="Architecture for compute, network, identity, and connectivity."
          />
          <Card
            title="Implementation"
            desc="Deploy secure and reliable platforms aligned with best practices."
          />
          <Card
            title="Cloud Migration"
            desc="Migration planning and execution with minimal business disruption."
          />
          <Card
            title="Resilience & Monitoring"
            desc="Monitoring strategy, backups, DR planning, and uptime improvements."
          />
        </div>

        <div className="mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Back to Services
          </Link>
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}
