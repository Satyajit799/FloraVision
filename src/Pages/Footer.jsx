import LogoImage from "../assets/LogoImage.png";

const Footer = () => {
  return (
    <footer className="text-white px-10 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 text-xl lg:text-2xl">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={LogoImage} alt="FloraVision Logo" className="w-6 h-6" />
            <h2 className="text-2xl font-bold">FloraVision</h2>
          </div>
          <p className="leading-8">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <h3 className="text-2xl font-semibold mb-5">Quick Links</h3>
          <div className="flex flex-col gap-4">
            <a href="#home" className="hover:text-white transition underline">Home</a>
            <a href="#products" className="hover:text-white transition underline">Products</a>
            <a href="#reviews" className="hover:text-white transition underline">Contact</a>
            <a href="#best" className="hover:text-white transition underline">Privacy</a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-5">For Every Update.</h3>
          <div className="flex border-2 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent px-4 py-3 outline-none flex-1 min-w-0 text-white placeholder:text-white/40"
            />
            <button className="bg-white text-black font-semibold px-4 py-3 shrink-0 hover:bg-transparent hover:text-white border-l border-white transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        <div className="col-span-2 flex items-center gap-6 text-3xl font-extrabold text-white pt-6">
          <h1>FB</h1>
          <h1>TW</h1>
          <h1>LI</h1>
        </div>

        <div className="col-span-1 pt-6">
        FloraVision &copy; all right reserve
        </div>
      </div>
    </footer>
  );
};

export default Footer;
