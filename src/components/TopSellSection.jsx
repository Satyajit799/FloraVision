import { useStore } from "../context/StoreContext";
import TopSell from "../Pages/TopSell";

const TopSellSection = () => {
  const { products } = useStore();

  return (
    <section className="px-10 py-16 text-white">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold inline-block px-6 py-3 relative">
          Top Selling Plants
          <span className="absolute top-2 right-2 w-10 h-10 border-t-4 border-r-4 border-[#c8b86a] rounded-tr-lg"></span>
          <span className="absolute -bottom-1 left-2 w-10 h-10 border-b-4 border-l-4 border-[#c8b86a] rounded-bl-lg"></span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 place-items-center">
        {products.map((product, index) => (
          <TopSell key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default TopSellSection;
