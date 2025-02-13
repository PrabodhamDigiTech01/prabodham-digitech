"use client";

const InfiniteLogos = () => {
  // Duplicate logos to create seamless infinite effect
  const logos = [
    { name: "Dabur", image: "/dabur.png" },
    { name: "Flamingo", image: "/flamingo.png" },
    { name: "Levis", image: "/levis.png" },
    { name: "Shiksha", image: "/shiksha.svg" },
    { name: "PrideOfCows", image: "/prideofcows.png" },
    { name: "Lodha", image: "/lodha.png" },
    { name: "Rossari", image: "/rossari.png" },
    { name: "RustX", image: "/rustx.png" },
    { name: "Parag", image: "/parag.png" },
    { name: "Gensis", image: "/gensis.png" },
  ];

  return (
    <section className="w-full bg-black mt-4 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-300">
          TRUSTED BY INNOVATIVE COMPANIES
        </h2>
      </div>

      <div className="relative w-full">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Scrolling Container */}
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll">
            {/* Multiple sets of logos for infinite effect */}
            {[1, 2, 3].map((set) => (
              <div key={set} className="flex items-center">
                {logos.map((logo, index) => (
                  <div
                    key={`${logo.name}-${set}-${index}`}
                    className="flex items-center justify-center w-40 h-40 mx-8 opacity-70 hover:opacity-100 transition-opacity">
                    <div
                      className={`w-32 h-32 bg-contain bg-center bg-no-repeat filter brightness-0 invert`}
                      style={{ backgroundImage: `url(${logo.image})` }}></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteLogos;
