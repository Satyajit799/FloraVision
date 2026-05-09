const Review = ({ review }) => {
  return (
    <div className="bg-white/5 rounded-[30px] p-8 backdrop-blur-xl">
      <div className="flex items-center gap-4 mb-6">
        <img src={review.Image} alt={review.name} className="h-14 w-14 rounded-full object-cover" />

        <div>
          <h3 className="font-semibold text-lg">{review.name}</h3>
          <p className="text-yellow-400">
            <div className="flex gap-1 text-yellow-400">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
          </p>
        </div>
      </div>

      <p className="text-gray-300 leading-8">{review.review}</p>
    </div>
  );
};

export default Review;
