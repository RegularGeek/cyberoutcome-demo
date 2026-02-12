export default function WhyChooseUs() {
  const highlights = [
    {
      title: "Security-led Delivery",
      desc: "We design and implement with risk reduction as the priority.",
      icon: "🛡️",
    },
    {
      title: "Client-Centric Approach",
      desc: "Solutions tailored to your environment, industry, and goals.",
      icon: "🤝",
    },
    {
      title: "Deeply Specialized Teams",
      desc: "Senior expertise across Cybersecurity, Infrastructure and Artificial Intelligence.",
      icon: "🧠",
    },
  ];

  const metrics = [
    { value: "24/7", label: "Monitoring & response support" },
    { value: "ISO-aligned", label: "Governance & best practices" },
    { value: "Cloud-ready", label: "AWS • Azure • GCP capability" },
    { value: "Outcome-driven", label: "Security, uptime, and delivery KPIs" },
  ];

  return (
    <section id="about" className="bg-white text-[#0B0F14]">
      <div className="mx-auto max-w-6xl px-4 py-24">
        {/* Top centered intro like TigerLogic */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-xs text-black/50">
            Trusted IT Partner for Digital Success
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-semibold">
            Why Choose CyberOutcome?
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
  Cyberoutcome delivers enterprise-grade cybersecurity, cloud, and IT services
  designed to secure, optimise, and transform your business. With proven delivery
  and a modern operations mindset, we help organisations achieve secure systems,
  reliable uptime, and scalable growth.
</p>
        </div>

        {/* 3 highlight cards (still TigerLogic-like, but richer) */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-black/10 bg-white shadow-sm p-8"
            >
              <div className="h-12 w-12 rounded-xl bg-[#1E5BFF]/10 border border-[#1E5BFF]/20 flex items-center justify-center text-xl">
                {h.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold">{h.title}</h3>
              <p className="mt-3 text-base text-black/70 leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics strip */}
        <div className="mt-10 rounded-2xl border border-black/10 bg-[#0B0F14]/[0.03] px-6 py-6">
          <div className="grid gap-4 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.value} className="text-center md:text-left">
                <div className="text-[#1E5BFF] text-2xl font-semibold">
                  {m.value}
                </div>
                <div className="mt-1 text-sm text-black/65">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white border border-black px-10 py-4 text-sm font-medium hover:bg-black hover:text-white transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

