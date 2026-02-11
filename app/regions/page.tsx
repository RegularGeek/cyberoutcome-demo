import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RegionsPage() {
  return (
    <>
      <Navbar />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-16">
            Our Locations
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            {/* Nigeria */}
            <div>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Nigeria
              </h3>
              <p className="text-gray-700 mb-2">
                63a Mainland Way, Dolphin Estate,
                <br />
                Ikoyi, Lagos, Nigeria.
              </p>
              <p className="text-blue-600 font-semibold mb-4">
                +2347064000043
              </p>

              <iframe
                src="https://maps.google.com/maps?q=Ikoyi%20Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 rounded-lg border"
                loading="lazy"
              ></iframe>
            </div>

            {/* Ghana */}
            <div>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Ghana
              </h3>
              <p className="text-gray-700 mb-2">
                Silver Star Towers,
                <br />
                4th Floor, Airport City,
                <br />
                Accra, Ghana.
              </p>
              <p className="text-blue-600 font-semibold mb-4">
                +233503859838
              </p>

              <iframe
                src="https://maps.google.com/maps?q=Airport%20City%20Accra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 rounded-lg border"
                loading="lazy"
              ></iframe>
            </div>

            {/* Kenya */}
            <div>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Kenya
              </h3>
              <p className="text-gray-700 mb-2">
                15th Floor, I&M Towers,
                <br />
                Nairobi, Kenya.
              </p>
              <p className="text-blue-600 font-semibold mb-4">
                +254114103212
              </p>

              <iframe
                src="https://maps.google.com/maps?q=Nairobi%20Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 rounded-lg border"
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
