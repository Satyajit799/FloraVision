import { useStore } from "../context/StoreContext";
import Review from "../Pages/Review";

const ReviewSection = () => {
  const { reviews } = useStore();

  return (
    <section className="px-10 py-16 text-white">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold inline-block px-6 py-3 relative">
          Customer Review
          <span className="absolute top-2 right-1 w-10 h-10 border-t-4 border-r-4 border-[#c8b86a] rounded-tr-lg"></span>
          <span className="absolute -bottom-2 left-1 w-10 h-10 border-b-4 border-l-4 border-[#c8b86a] rounded-bl-lg"></span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
