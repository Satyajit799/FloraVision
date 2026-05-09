import LogoImage from "../assets/LogoImage.png";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-6 md:py-12 relative">
      <div className="flex items-center gap-2">
        <img src={LogoImage} alt="FloraVision Logo" className="w-6 h-6" />
        <h1 className="text-xl md:text-2xl font-bold">FloraVision</h1>
      </div>
      <div
        className="hidden md:flex flex-row gap-10 text-2xl font-thin"
        style={{ fontFamily: "'Indie Flower', cursive" }}
      >
        <a href="#home">Home</a>
        <a href="#products">Plants Type <i className="ri-arrow-drop-down-fill"></i></a>
        <a href="#best">Best Of Us</a>
        <a href="#reviews">Reviews</a>
      </div>
      <div className="hidden md:flex items-center gap-8 text-2xl">
        <i className="ri-search-line"></i>
        <i className="ri-shopping-bag-4-line"></i>
      </div>
      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={menuOpen ? "ri-close-line" : "ri-menu-3-fill"}></i>
      </button>
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-[#071A08]/95 backdrop-blur-md flex flex-col gap-6 px-6 py-8 text-xl z-50"
          style={{ fontFamily: "'Indie Flower', cursive" }}
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Plants Type</a>
          <a href="#best" onClick={() => setMenuOpen(false)}>Best Of Us</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
