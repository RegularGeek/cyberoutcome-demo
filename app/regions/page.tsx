import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RegionsPage() {
  return (
    <>
      <Navbar />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-16">
            Our Locations
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">

            {/* Nigeria */}
            <div>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Nigeria
              </h3>
              <p className="text-gray-700">
                63a Mainland Way, Dolphin Estate,
                <br />
                Ikoyi, Lagos, Nigeria.
              </p>
            </div>

            {/* Ghana */}
            <div>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Ghana
              </h3>
              <p className="text-gray-700">
                Silver Star Towers,
                <br />
                4th Floor, Airport City,
                <br />
                Accra, Ghana.
              </p>
            </div>

            {/* Kenya */}
            <div>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Kenya
              </h3>
              <p className="text-gray-700">
                15th Floor, I&M Towers,
                <br />
                Nairobi, Kenya.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
