export default function InfrastructurePage() {
  return (
    <main className="bg-white text-gray-900">

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs tracking-[0.3em] text-slate-500">SERVICES</p>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-3">
            Infrastructure & DevOps
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
            We design, build, and operate secure, scalable infrastructure environments
            that power modern organisations. From cloud foundations to automation,
            resilience, and continuous delivery, we ensure your technology operates
            efficiently, securely, and at scale.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            <ServiceCard
              title="Infrastructure Architecture"
              text="Design of secure cloud and hybrid environments covering compute, network, identity, and connectivity."
            />

            <ServiceCard
              title="Cloud Migration & Modernisation"
              text="Seamless migration to AWS, Azure, or hybrid environments with minimal disruption."
            />

            <ServiceCard
              title="Infrastructure as Code"
              text="Automated provisioning and configuration using Terraform and modern DevOps practices."
            />

            <ServiceCard
              title="CI/CD & Automation"
              text="Build, test, and deployment pipelines that enable faster releases and higher delivery confidence."
            />

            <ServiceCard
              title="Observability & Monitoring"
              text="Metrics, logs, tracing, and alerting frameworks that improve uptime and operational awareness."
            />

            <ServiceCard
              title="Resilience & Disaster Recovery"
              text="Backup strategy, DR planning, and high availability architecture for mission-critical systems."
            />

          </div>

        </div>
      </section>

    </main>
  );
}

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}