import Image from "next/image";

const PARTNER_LOGOS = [
  { src: "/partners/partner-1.png", alt: "Partner 1" },
  { src: "/partners/partner-2.png", alt: "Partner 2" },
  { src: "/partners/partner-3.png", alt: "Partner 3" },
  { src: "/partners/partner-4.png", alt: "Partner 4" },
  { src: "/partners/partner-5.png", alt: "Partner 5" },
  { src: "/partners/partner-6.png", alt: "Partner 6" },
];

export default function PartnersPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs tracking-[0.35em] text-slate-300">PARTNERS</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Trusted by our Partners
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            Cyberoutcome partners with forward-thinking organisations to secure infrastructure, reduce risk,
            and improve operational resilience across Africa.
          </p>

          <a
            href="mailto:sales@cyberoutcome.com?subject=Partnership%20Inquiry"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Talk to us
          </a>
        </div>
      </section>

      {/* Logos */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Partner logos
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              A snapshot of organisations we’ve supported through cybersecurity, cloud, and DevOps delivery.
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

            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 text-center">
              <p className="text-sm text-slate-600">
                Want to feature your organisation here or discuss a partnership?
              </p>
              <a
                href="mailto:sales@cyberoutcome.com?subject=Partner%20Logos%20Update"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Email sales@cyberoutcome.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
