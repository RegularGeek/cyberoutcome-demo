// app/services/devops/page.tsx
import Link from "next/link";

const items = [
  {
    title: "CI/CD Pipelines",
    desc: "Build, test, and deploy automation with repeatable workflows.",
  },
  {
    title: "Infrastructure as Code",
    desc: "Provision and manage environments using Terraform and best practices.",
  },
  {
    title: "Observability",
    desc: "Metrics, logs, tracing, dashboards, and alerting that help teams respond fast.",
  },
  {
    title: "DevSecOps",
    desc: "Security checks embedded into pipelines to reduce risk early.",
  },
];

export default function DevOpsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
            SERVICES
          </p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight md:text-6xl">
            DevOps
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            We help teams ship faster and more safely with automation, CI/CD,
            Infrastructure as Code, and DevSecOps practices.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">{it.title}</h3>
              <p className="mt-3 text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Back to Services
          </Link>
        </div>
      </section>
    </main>
  );
}
