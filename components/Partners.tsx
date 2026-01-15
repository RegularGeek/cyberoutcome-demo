export default function Partners() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Partners & Certifications</h2>
        <p className="mt-2 text-white/70">Add your real partner logos later.</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
          {["AWS", "Azure", "Checkpoint", "Tenable", "Imperva"].map((x) => (
            <div key={x} className="rounded-xl border border-white/10 bg-[#0B0F14]/40 p-3 text-center text-sm text-white/70">
              {x}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
