export default function ArtificialIntelligencePage() {
  return (
    <main className="bg-white text-gray-900">

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs tracking-[0.3em] text-slate-500">SERVICES</p>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-3">
            Artificial Intelligence
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
            We help organisations unlock business value through practical,
            secure, and responsible AI adoption. From intelligent automation
            to predictive analytics and AI-driven security enhancement,
            Cyberoutcome delivers AI solutions aligned with real business outcomes.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            <ServiceCard
              title="AI Strategy & Advisory"
              text="AI readiness assessment, use-case identification, governance design, and roadmap development."
            />

            <ServiceCard
              title="Intelligent Automation"
              text="Automation of repetitive processes using AI-driven workflows to improve efficiency and reduce cost."
            />

            <ServiceCard
              title="AI for Cybersecurity"
              text="Machine learning models and AI-enhanced detection frameworks to improve threat identification and response."
            />

            <ServiceCard
              title="Data Engineering & Analytics"
              text="Secure data pipelines and analytics platforms that enable AI-powered insights."
            />

            <ServiceCard
              title="Custom AI Solutions"
              text="Design and deployment of tailored AI models and integrations specific to your industry."
            />

            <ServiceCard
              title="Responsible & Secure AI"
              text="AI governance, model risk management, and compliance alignment for regulated environments."
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