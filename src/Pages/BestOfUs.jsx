import AglaPlant from "../assets/AglaPlant.png";
const BestOfUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-28">
      <div className="flex justify-center mb-16">
        <div className="relative inline-block">
          <h2 className="text-5xl font-bold text-white px-6">Our Best o2</h2>
          <span className="absolute -top-2 right-2 w-10 h-10 border-t-4 border-r-4 border-[#c8b86a] rounded-tr-lg"></span>
          <span className="absolute -bottom-3 left-2 w-10 h-10 border-b-4 border-l-4 border-[#c8b86a] rounded-bl-lg"></span>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[60px] border border-white/10 bg-white/5 backdrop-blur-2xl">
        <div className="absolute inset-0 bg-linear-to-r from-green-900/20 via-transparent to-transparent"></div>

        <div className="relative z-10 grid lg:grid-cols-2 items-center gap-10 px-8 md:px-14 py-14">
          <div className="flex justify-center lg:justify-start">
            <img src={AglaPlant} alt="Plant" className="w-105 object-contain" />
          </div>

          <div>
            <h3 className="text-5xl font-bold leading-tight max-w-2xl text-white">
              We Have Small And Best O2 Plants Collection’s
            </h3>

            <p className="mt-8 text-white/70 text-xl leading-9 max-w-2xl">
              Oxygen-producing plants, often referred to as “O2 plants,” are
              those that release oxygen into the atmosphere through the process
              of photosynthesis.
            </p>

            <p className="mt-8 text-white/70 text-xl leading-9 max-w-2xl">
              Many plants can help filter out pollutants and toxins from the
              air, such as formaldehyde, benzene, and trichloroethylene.
            </p>

            <div className="flex items-center justify-between mt-12 flex-wrap gap-8">
              <button className="border border-white rounded-2xl px-10 py-4 text-xl hover:bg-white hover:text-black transition duration-300">
                Explore
              </button>

              <div className="flex items-center gap-8 text-white/70">
                <button className="text-4xl hover:text-white transition">
                  ‹
                </button>

                <span className="text-lg font-semibold">01/04</span>

                <button className="text-4xl hover:text-white transition">
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-green-500/10 blur-[120px] rounded-full"></div>
      </div>
    </section>
  );
};

export default BestOfUs;
