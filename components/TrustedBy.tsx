export default function TrustedBy() {
  const logos = [
    { name: "eTranzact", src: "https://logo.clearbit.com/etranzact.com" },
    { name: "First Bank", src: "https://logo.clearbit.com/firstbanknigeria.com" },
    { name: "Access Bank", src: "https://logo.clearbit.com/accessbankplc.com" },
    { name: "9PSB", src: "https://logo.clearbit.com/9psb.com.ng" },
    { name: "Seplat Energy", src: "https://logo.clearbit.com/seplatenergy.com" },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#0B0F14]">
          Trusted by Leading Organisations
        </h2>

        <p className="mt-4 text-center text-black/60 max-w-2xl mx-auto">
          We work with financial institutions, energy companies, and
          technology-driven organisations across Africa.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center rounded-2xl border border-black/10 bg-white p-6 grayscale hover:grayscale-0 transition"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="max-h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
