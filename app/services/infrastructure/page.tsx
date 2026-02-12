import Link from "next/link";

const items = [
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
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(37,99,235,0.10),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_40%_85%,rgba(14,165,233,0.10),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
            SERVICES
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Infrastructure
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            We design and implement secure, scalable infrastructure that supports
            performance, resilience, and growth across cloud and on-prem
            environments.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              ← Back to Services
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Request a consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((x) => (
            <div
              key={x.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-900">{x.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{x.desc}</p>

              <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
                Built for uptime, cost control, and audit readiness.
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Need a reliable platform foundation?
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                We’ll review your environment and recommend a secure architecture
                for performance, resilience, and growth.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
