import Link from "next/link";

const features = [
  {
    title: "CI/CD Pipelines",
    desc: "Build, test, and deploy automation with repeatable workflows and policy checks.",
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
    desc: "Security checks embedded into pipelines to reduce risk early and ship safely.",
  },
];

export default function DevOpsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.10),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.10),transparent_40%),radial-gradient(circle_at_40%_80%,rgba(99,102,241,0.08),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
            SERVICES
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            DevOps
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            We help teams ship faster and more safely with automation, CI/CD,
            Infrastructure as Code, and DevSecOps practices.
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
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                  <span className="text-sm font-bold">
                    {f.title
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{f.desc}</p>
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-slate-100" />

              <p className="mt-4 text-sm text-slate-500">
                Outcome: faster releases, safer changes, and clearer visibility.
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Ready to modernize delivery?
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                We’ll assess your current delivery process and propose a
                practical roadmap for CI/CD, IaC, observability, and DevSecOps.
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
