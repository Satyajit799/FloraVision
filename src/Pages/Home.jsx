import HeroImage from "../assets/HeroImage.jpg";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: "100%" }}
    >
      <Navbar />
      <HeroSection />
      <Trending />
    </div>
  );
};

export default Home;
