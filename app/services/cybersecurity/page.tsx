import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

type Pillar = {
  title: string;
  description: string;
};

const PILLARS: Pillar[] = [
  {
    title: "Identity Centric Security",
    description:
      "Secure access across users, devices, and systems with strong identity controls, least privilege, and continuous verification.",
  },
  {
    title: "Application and API Security",
    description:
      "Protect applications and APIs through secure design, testing, and runtime controls to prevent abuse, vulnerabilities, and data leakage.",
  },
  {
    title: "Resilience and Risk Management",
    description:
      "Strengthen cyber resilience with practical risk management, governance controls, preparedness planning, and business-aligned security posture improvements.",
  },
  {
    title: "Infrastructure Management Solutions",
    description:
      "Harden and manage infrastructure using secure configuration, monitoring, patch hygiene, and operational best practices across environments.",
  },
  {
    title: "Threat Detection and Response",
    description:
      "Improve detection, triage, and response with monitoring strategy, alerting, playbooks, and coordinated incident handling.",
  },
  {
    title: "Data Protection and Privacy",
    description:
      "Protect sensitive data through classification, encryption strategy, access controls, auditing, and privacy-by-design practices.",
  },
  {
    title: "Cloud and Edge Security",
    description:
      "Secure cloud and edge environments with guardrails, policy, visibility, workload protection, and secure connectivity patterns.",
  },
  {
    title: "Emerging Technologies",
    description:
      "Address security for modern innovation—AI, IoT/OT, automation, and new platforms—through risk assessment and secure adoption guidance.",
  },
];

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen bg-white text-[#0B0F14]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[#1E5BFF]/20 mix-blend-overlay" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-white/80">
            Services
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white">
            Cybersecurity
          </h1>
          <p className="mt-6 max-w-3xl text-white/80 text-lg leading-relaxed">
            Our cybersecurity services are structured around eight core pillars
            that help organisations reduce risk, strengthen controls, and respond
            effectively to threats.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[#1E5BFF] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Talk to us
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          <div className="md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Our 8 Cybersecurity Pillars
            </h2>
            <p className="mt-3 text-[#0B0F14]/70 leading-relaxed">
              Explore how each pillar supports a modern security program—from
              identity and applications to cloud, data, and emerging tech.
            </p>

            <div className="mt-6 rounded-2xl border border-black/10 bg-[#F7F9FF] p-6">
              <p className="text-sm font-semibold text-[#1E5BFF]">
                Your Partner for the Future
              </p>
              <p className="mt-2 text-sm text-[#0B0F14]/70">
                We combine proven frameworks with practical implementation that
                fits your business priorities.
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm hover:shadow-md transition"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#1E5BFF]/10 border border-[#1E5BFF]/20 flex items-center justify-center">
                    <span className="text-[#1E5BFF] font-semibold">
                      {p.title.split(" ")[0][0]}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-[#0B0F14]/70 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA strip */}
            <div className="mt-10 rounded-2xl bg-[#0B0F14] text-white p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold">
                  Need help prioritising your security roadmap?
                </h3>
                <p className="mt-2 text-white/75">
                  We can map these pillars to your environment and deliver a
                  practical plan with clear outcomes.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-[#1E5BFF] px-7 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Request a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
