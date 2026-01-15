export default function Services() {
  const cards = [
    {
      title: "Professional Services",
      icon: "🛡️",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=80",
      desc:
        "From solution design to deployment, our Professional Services team provides specialist-led delivery for complex IT and security initiatives.",
      featured: false,
    },
    {
      title: "Project Management Office (PMO)",
      icon: "🗂️",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
      desc:
        "We bring structure, accountability, and agility to every engagement. Our PMO ensures IT projects are delivered on time and on scope.",
      featured: true, // middle card lifted
    },
    {
      title: "Managed Services",
      icon: "🌐",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      desc:
        "We help enterprises offload day-to-day operational complexity. Through managed services, we monitor, maintain, and improve your IT environment.",
      featured: false,
    },
  ];

  return (
    <section id="services" className="bg-white text-[#0B0F14]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className={[
                "rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm",
                c.featured ? "md:-mt-8 md:shadow-lg" : "",
              ].join(" ")}
            >
              {/* top row: icon + title */}
              <div className="p-8 flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-[#1E5BFF]/10 border border-[#1E5BFF]/20 flex items-center justify-center text-xl">
                  {c.icon}
                </div>
                <h3 className="text-xl font-semibold leading-snug">{c.title}</h3>
              </div>

              {/* image block */}
              <div className="px-8">
                <div className="overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-56 w-full object-cover"
                  />
                </div>
              </div>

              {/* text */}
              <div className="p-8 pt-6">
                <p className="text-base leading-relaxed text-black/70">
                  {c.desc}
                </p>

                <div className="mt-6">
                  <a
                    href="#contact"
                    className="text-sm font-semibold text-[#1E5BFF] hover:opacity-80"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
