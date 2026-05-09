import Rose_Gold from "../assets/Rose Gold.png";
import Rose_Gold2 from "../assets/Rose Gold2.png";

const Trending = () => {
  return (
    <section className="px-6 md:px-10 py-16 text-white">
      <div className="text-center mb-16 relative inline-block w-full">
        <h2 className="text-3xl md:text-5xl font-bold relative inline-block px-6 py-3">
          Our Trendy Plants
          <span className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-[#c8b86a] rounded-tr-lg"></span>
          <span className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-[#c8b86a] rounded-bl-lg"></span>
        </h2>
      </div>
      <div className="flex flex-col gap-20 items-center justify-center">
        <div className="bg-white/10 backdrop-blur-2xl rounded-[50px] px-6 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-2 items-center relative max-w-300 w-full gap-6 lg:gap-0">
          <div className="flex justify-center">
            <img src={Rose_Gold} className="h-60 lg:h-100 object-contain lg:absolute lg:-top-25 lg:-left-20 lg:w-150" />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl lg:text-4xl font-bold">For Your Desks Decorations</h3>
            <p className="leading-8">
              I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference.
            </p>
            <p className="text-3xl lg:text-5xl font-bold">Rs. 599/-</p>
            <div className="flex gap-4">
              <button className="border border-white rounded-xl px-6 lg:px-8 py-3 hover:bg-white hover:text-black transition">Explore</button>
              <button className="border border-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition">
                <i className="ri-shopping-bag-4-line"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-2xl rounded-[50px] px-6 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-2 items-center relative max-w-300 w-full gap-6 lg:gap-0">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl lg:text-4xl font-bold">For Your Living Room</h3>
            <p className="leading-8">
              Transform your living room with lush, vibrant plants that bring nature indoors and create a calming atmosphere.
            </p>
            <p className="text-3xl lg:text-5xl font-bold">Rs. 799/-</p>
            <div className="flex gap-4">
              <button className="border border-white rounded-xl px-6 lg:px-8 py-3 hover:bg-white hover:text-black transition">Explore</button>
              <button className="border border-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition">
                <i className="ri-shopping-bag-4-line"></i>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={Rose_Gold2} className="h-60 lg:h-100 object-contain lg:absolute lg:-top-25 lg:-right-20 lg:w-150" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
