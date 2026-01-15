export default function Industries() {
  const items = ["Banking & Fintech", "Telecoms", "Energy", "Logistics", "SaaS", "Government"];

  return (
    <section id="industries" className="mx-auto max-w-6xl px-4 pb-16">
      <h2 className="text-2xl md:text-3xl font-semibold">Industries</h2>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((x) => (
          <div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
            {x}
          </div>
        ))}
      </div>
    </section>
  );
}
