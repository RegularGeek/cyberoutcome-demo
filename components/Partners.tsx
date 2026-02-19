import Image from "next/image";

const PARTNER_LOGOS = [
  { src: "/partners/partner-1.png", alt: "Partner 1" },
  { src: "/partners/partner-2.png", alt: "Partner 2" },
  { src: "/partners/partner-3.png", alt: "Partner 3" },
  { src: "/partners/partner-4.png", alt: "Partner 4" },
  { src: "/partners/partner-5.png", alt: "Partner 5" },
  { src: "/partners/partner-6.png", alt: "Partner 6" },
];

export default function Partners() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs tracking-[0.35em] text-slate-500">PARTNERS</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Trusted by our Partners
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            We collaborate with organisations across finance, fintech, energy, and the public sector to
            strengthen security and deliver resilient technology outcomes across Africa.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {PARTNER_LOGOS.map((logo) => (
              <div
                key={logo.src}
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-6 shadow-sm"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={80}
                  className="h-10 w-auto object-contain opacity-90"
                />
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            Replace these placeholder logos by adding your partner images into{" "}
            <span className="font-semibold">/public/partners/</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
