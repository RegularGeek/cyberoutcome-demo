export default function CaseStudies() {
  const items = [
    ["Cloud hardening & guardrails", "Baseline • Policies • IaC"],
    ["SOC onboarding & tuning", "Use-cases • Alerts • Playbooks"],
    ["IAM modernization", "SSO • MFA • Privileged access"],
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <h2 className="text-2xl md:text-3xl font-semibold">Case highlights</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {items.map(([t, m]) => (
          <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold">{t}</p>
            <p className="mt-2 text-sm text-white/70">{m}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
