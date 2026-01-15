export default function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-20">
      <div className="rounded-3xl border border-[#1E5BFF]/30 bg-[#1E5BFF]/10 p-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Let’s talk</h2>
        <p className="mt-2 text-white/80 max-w-2xl">
          Tell us your goal and we’ll schedule a discovery call.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-3">
          <input className="rounded-xl bg-[#0B0F14]/60 border border-white/10 px-4 py-3 text-sm outline-none" placeholder="Full name" />
          <input className="rounded-xl bg-[#0B0F14]/60 border border-white/10 px-4 py-3 text-sm outline-none" placeholder="Work email" />
          <button className="rounded-xl bg-[#1E5BFF] px-4 py-3 text-sm font-medium hover:opacity-90">
            Request a call
          </button>
        </div>
      </div>
    </section>
  );
}
