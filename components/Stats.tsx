export default function Stats() {
  const stats = [
    {
      value: "13+",
      label: "Years of combined industry experience",
    },
    {
      value: "95+",
      label: "Successful client engagements",
    },
    {
      value: "26+",
      label: "Enterprise & mid-market customers",
    },
    {
      value: "60+",
      label: "Security & IT projects delivered",
    },
  ];

  return (
    <section className="bg-[#0B0F14]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-4 text-center">
          {stats.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-10"
            >
              <div className="text-4xl md:text-5xl font-semibold text-[#1E5BFF]">
                {s.value}
              </div>
              <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
