export default function LocationsSection() {
  const locations = [
    {
      id: "nigeria",
      country: "Nigeria",
      addressLines: [
        "63a Mainland Way, Dolphin Estate,",
        "Ikoyi, Lagos, Nigeria.",
      ],
      phone: "+234 000 000 0000",
      // Replace with your exact Google Maps embed link if you want later
      mapEmbed:
        "https://www.google.com/maps?q=63a%20Mainland%20Way%20Dolphin%20Estate%20Ikoyi%20Lagos&output=embed",
    },
    {
      id: "ghana",
      country: "Ghana",
      addressLines: [
        "Silver Star Towers, 4th Floor, Airport City,",
        "Liberation Road, Accra, Ghana.",
      ],
      phone: "+233 000 000 000",
      mapEmbed:
        "https://www.google.com/maps?q=Silver%20Star%20Towers%20Airport%20City%20Accra&output=embed",
    },
    {
      id: "kenya",
      country: "Kenya",
      addressLines: ["15th Floor, I&M Towers,", "Nairobi, Kenya."],
      phone: "+254 000 000 000",
      mapEmbed:
        "https://www.google.com/maps?q=I%26M%20Towers%20Nairobi&output=embed",
    },
  ];

  return (
    <section id="locations" className="bg-white text-[#0B0F14]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        {/* Header like screenshot */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0B0F14]">
            We&apos;d Love To Hear From You
          </h2>

          <p className="mt-3 text-2xl md:text-4xl font-semibold text-[#1E5BFF]">
            OUR LOCATIONS
          </p>
        </div>

        {/* 3 columns */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {locations.map((loc) => (
            <div key={loc.id} id={loc.id} className="text-center">
              {/* small underline bar */}
              <div className="mx-auto h-2 w-28 bg-[#1E5BFF] rounded-full" />

              <h3 className="mt-6 text-3xl font-semibold text-[#1E5BFF]">
                {loc.country}
              </h3>

              <div className="mt-4 text-base text-[#0B0F14]/80 space-y-2 leading-relaxed">
                {loc.addressLines.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </div>

              <div className="mt-4 text-sm font-semibold text-[#0B0F14]">
                {loc.phone}
              </div>

              {/* Map embed */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 shadow-sm">
                <iframe
                  title={`${loc.country} map`}
                  src={loc.mapEmbed}
                  width="100%"
                  height="260"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
