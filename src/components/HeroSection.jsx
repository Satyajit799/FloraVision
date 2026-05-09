import AglaPlant from "../assets/AglaPlant.png";
import HeroLogo from "../assets/HeroLogo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen md:h-[calc(100vh-80px)] py-12 px-6 md:px-10">
      <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 h-full gap-6 md:gap-0">
        <div className="md:col-span-2 md:row-span-1 text-[#cdcaba] flex flex-col gap-4">
          <h1 className="text-5xl md:text-9xl font-bold">Earth Exhale</h1>
          <span className="text-lg md:text-2xl">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's
            natural environment and its essential role in sustaining life.
          </span>
          <div className="flex gap-4 md:gap-6 items-center flex-wrap">
            <button className="border rounded-lg px-4 md:px-6 py-2 border-white text-lg md:text-2xl hover:bg-white hover:text-black transition">
              Buy Now
            </button>
            <button className="flex items-center gap-2">
              <i className="ri-play-circle-line text-4xl md:text-6xl"></i>
              <p style={{ fontFamily: "'Indie Flower', cursive" }}>Live demo...</p>
            </button>
          </div>
        </div>
        <div className="md:col-span-2 md:row-span-1 backdrop-blur-sm max-w-full md:max-w-100 p-6 h-fit bg-white/10 rounded-2xl self-center flex flex-col gap-3 text-[#cdcaba]">
          <div className="flex items-center gap-3">
            <img src={HeroLogo} className="rounded-full h-12 w-12 object-cover shrink-0" alt="" />
            <div>
              <p className="font-semibold text-white">Ronnie Hamill</p>
              <div className="flex gap-1 text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>
            </div>
          </div>
          <p className="text-sm">
            I can't express how thrilled I am with my new natural plants! They
            bring such a fresh and vibrant energy to my home.
          </p>
        </div>
        <div className="md:col-span-1 md:row-span-2 md:row-start-1 md:col-start-3 backdrop-blur-sm bg-white/10 rounded-2xl relative text-[#cdcaba] h-80 md:h-auto">
          <img src={AglaPlant} alt="" className="absolute -top-10 md:-top-25 h-60 md:h-110 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0" />
          <div className="absolute bottom-6 md:bottom-25 left-6 md:left-10 w-auto md:w-90 flex flex-col gap-2">
            <span className="text-left font-thin text-lg md:text-2xl">Indoor Plant</span>
            <p className="text-xl md:text-4xl flex items-center justify-between">
              <span>Aglaonema plant</span>
              <i className="ri-arrow-right-s-line"></i>
            </p>
            <button className="border rounded-lg px-4 py-2 text-white border-white text-lg md:text-2xl hover:bg-white hover:text-black transition flex items-center gap-2 mt-2 md:mt-6 w-fit">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
