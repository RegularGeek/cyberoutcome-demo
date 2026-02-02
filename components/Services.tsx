import Link from "next/link";

type Category = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

const CATEGORIES: Category[] = [
  {
    title: "Cybersecurity",
    description:
      "Protect your business with risk assessments, vulnerability management, incident response support, and security monitoring tailored to your environment.",
    href: "/services/cybersecurity",
    icon: "🛡️",
  },
  {
    title: "Infrastructure",
    description:
      "Design and implement secure, reliable infrastructure across cloud and on-prem—networking, identity foundations, resilience, and scalability.",
    href: "/services/infrastructure",
    icon: "🏗️",
  },
  {
    title: "DevOps",
    description:
      "Accelerate delivery with CI/CD pipelines, Infrastructure as Code, observability, and DevSecOps automation that improves quality and control.",
    href: "/services/devops",
    icon: "⚙️",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center" />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#1E5BFF]/20 mix-blend-overlay" />

      <div className="relative mx-auto max-w-6xl px-4 py-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            We provide a range of services
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-white/80 leading-relaxed">
            As an Information Technology professional services company, we deliver
            high-quality solutions that drive business growth and long-term
            success.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-2xl bg-white p-10 shadow-lg border border-black/5 hover:-translate-y-1 hover:shadow-xl transition"
            >
              {/* Icon circle */}
              <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full bg-[#0B63CE] flex items-center justify-center shadow-sm">
                  <span className="text-3xl text-white">{c.icon}</span>
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#0B0F14]">
                {c.title}
              </h3>

              <p className="mt-4 text-[#0B0F14]/70 leading-relaxed">
                {c.description}
              </p>

              <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1E5BFF]">
                <span>View details</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
