import Home from "./Pages/Home";
import TopSellSection from "./components/TopSellSection";
import ReviewSection from "./components/ReviewSection";
import BestOfUs from "./Pages/BestOfUs";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#071A08] text-white font-sans">
      <section id="home"><Home /></section>
      <section id="products"><TopSellSection /></section>
      <section id="reviews"><ReviewSection /></section>
      <section id="best"><BestOfUs /></section>
      <Footer />
    </div>
  );
};

export default App;
