import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RegionsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0B0F14]">
      <Navbar />

      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pt-20 pb-12 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-[#1E5BFF]">
          We&apos;d Love To Hear From You
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-red-600">
          Our Locations
        </h1>
      </section>

      {/* Locations */}
      <section
        id="locations"
        className="mx-auto max-w-6xl px-4 pb-24 grid gap-10 md:grid-cols-3"
      >
        {/* Nigeria */}
        <div id="nigeria" className="space-y-6">
          <div className="h-1 w-20 bg-red-600 mx-auto" />
          <h2 className="text-2xl font-semibold text-center text-red-600">
            Nigeria
          </h2>

          <p className="text-center text-[#0B0F14]/80 leading-relaxed">
            63a Mainland Way, Dolphin Estate,
            <br />
            Ikoyi, Lagos, Nigeria.
          </p>

          <p className="text-center font-medium text-[#1E5BFF]">
            +234 916 768 2845
          </p>

          <iframe
            className="w-full h-64 rounded-xl border"
            loading="lazy"
            src="https://www.google.com/maps?q=63a%20Mainland%20Way%20Dolphin%20Estate%20Ikoyi%20Lagos&output=embed"
          />
        </div>

        {/* Ghana */}
        <div id="ghana" className="space-y-6">
          <div className="h-1 w-20 bg-red-600 mx-auto" />
          <h2 className="text-2xl font-semibold text-center text-red-600">
            Ghana
          </h2>

          <p className="text-center text-[#0B0F14]/80 leading-relaxed">
            Silver Star Towers,
            <br />
            4th Floor, Airport City,
            <br />
            Liberation Road, Accra, Ghana.
          </p>

          <p className="text-center font-medium text-[#1E5BFF]">
            +233 24 005 0974
          </p>

          <iframe
            className="w-full h-64 rounded-xl border"
            loading="lazy"
            src="https://www.google.com/maps?q=Silver%20Star%20Towers%20Airport%20City%20Accra&output=embed"
          />
        </div>

        {/* Kenya */}
        <div id="kenya" className="space-y-6">
          <div className="h-1 w-20 bg-red-600 mx-auto" />
          <h2 className="text-2xl font-semibold text-center text-red-600">
            Kenya
          </h2>

          <p className="text-center text-[#0B0F14]/80 leading-relaxed">
            PentOffice, The Mirage Tower 2,
            <br />
            Westlands, Waiyaki Way,
            <br />
            Nairobi, Kenya.
          </p>

          <p className="text-center font-medium text-[#1E5BFF]">
            +254 805 937 8218
          </p>

          <iframe
            className="w-full h-64 rounded-xl border"
            loading="lazy"
            src="https://www.google.com/maps?q=The%20Mirage%20Tower%202%20Westlands%20Nairobi&output=embed"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
