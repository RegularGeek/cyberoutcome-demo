import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DevOpsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-white/60 uppercase tracking-[0.25em] text-sm">
          Services
        </p>
        <h1 className="mt-3 text-4xl md:text-6xl font-semibold">DevOps</h1>
        <p className="mt-6 max-w-3xl text-white/80 leading-relaxed">
          We help teams ship faster and more safely with automation, CI/CD,
          Infrastructure as Code, and DevSecOps practices.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">CI/CD Pipelines</h3>
            <p className="mt-2 text-white/70">
              Build, test, and deploy automation with repeatable workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Infrastructure as Code</h3>
            <p className="mt-2 text-white/70">
              Provision and manage environments using Terraform and best practices.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Observability</h3>
            <p className="mt-2 text-white/70">
              Metrics, logs, tracing, dashboards, and alerting that help teams respond fast.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">DevSecOps</h3>
            <p className="mt-2 text-white/70">
              Security checks embedded into pipelines to reduce risk early.
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
