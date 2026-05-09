const TopSell = ({ product }) => {
  return (
    <div className="bg-white/5 rounded-[50px] p-6 backdrop-blur-xl hover:-translate-y-2 transition duration-300 relative h-130 w-98" style={{boxShadow: '0 10px 30px rgba(0,0,0,0.6)'}}>
      <img
        src={product.image}
        alt={product.name}
        className="h-80 w-80 bg-cover rounded-3xl absolute -top-15 left-1/2 transform -translate-x-1/2"
      />

      <div className="mt-6 absolute top-75 left-1/2 transform -translate-x-1/2 w-full px-6">
        <h3 className="text-2xl font-semibold">{product.name}</h3>

        <p className="text-gray-400 mt-3 leading-7 text-sm">
          Premium indoor decorative plant for fresh aesthetics.
        </p>

        <div className="flex items-center justify-between mt-6">
          <p className="text-white text-xl font-bold">{product.price}</p>

          <button className="border-2 border-gray-500 px-3 py-2 rounded-xl hover:bg-white hover:text-black transition">
            <i className="ri-shopping-bag-4-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSell;
