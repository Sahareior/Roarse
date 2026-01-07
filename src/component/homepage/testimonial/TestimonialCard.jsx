// components/TestimonialCard.jsx
import StarRating from "./StarRating";

const TestimonialCard = ({ review, author, rating = 5 }) => {
  return (
    <div className="bg-white rounded-3xl border p-6 flex flex-col h-full max-w-sm mx-auto min-h-[200px]">
      {/* This ensures the card takes full height in the flex container */}
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="mb-4">
            <StarRating rating={rating} />
          </div>
          <p className="text-gray-700 text-base leading-relaxed italic flex-grow">
            "{review}"
          </p>
        </div>

        {/* Author section - always at the bottom */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-gray-900 font-medium">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;