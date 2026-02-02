type Service = {
  title: string;
  description: string;
  icon: string;
};

const SERVICES: Service[] = [
  {
    title: "Cybersecurity",
    description:
      "We offer comprehensive cybersecurity services to protect businesses from cyber threats and data breaches, including risk assessments, vulnerability testing, and incident response planning.",
    icon: "🛡️",
  },
  {
    title: "Managed Services solution",
    description:
      "Our team provides proactive monitoring and maintenance of IT systems, ensuring that they are always up and running smoothly.",
    icon: "🧰",
  },
  {
    title: "Database Security",
    description:
      "Our auditing and monitoring services help identify suspicious activities and prevent potential data breaches.",
    icon: "🗄️",
  },
  {
    title: "IT consulting",
    description:
      "Our consultants help organizations align technology strategy with business goals through expert advisory services.",
    icon: "🧑‍💼",
  },
  {
    title: "Infrastructure design and implementation",
    description:
      "We design and implement secure, scalable infrastructure solutions that support business growth.",
    icon: "🏗️",
  },
  {
    title: "Cloud solutions",
    description:
      "We help businesses migrate to the cloud, enabling agility, scalability, and cost optimization.",
    icon: "☁️",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[#1E5BFF]/20 mix-blend-overlay" />

      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            We provide a range of services
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-white/80">
            As an Information Technology professional services company, we deliver
            high-quality solutions that drive business growth and long-term success.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white p-10 shadow-lg"
            >
              <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full bg-[#0B63CE] flex items-center justify-center">
                  <span className="text-3xl text-white">{s.icon}</span>
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#0B0F14]">
                {s.title}
              </h3>
              <p className="mt-4 text-[#0B0F14]/70">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
