import { useState } from "react";
import StarRating from "./StarRating";
import { createReview } from "../../services/review.service";

const ReviewForm = ({ productId, refreshReviews }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        productId,
        rating,
        comment,
      });

      setComment("");
      setRating(5);

      refreshReviews();

      alert("Review Added Successfully");

    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold">
        Write a Review
      </h2>

      <StarRating
        rating={rating}
        setRating={setRating}
      />

      <textarea
        rows={4}
        className="w-full border rounded-lg p-3"
        placeholder="Share your experience..."
        value={comment}
        onChange={(e)=>setComment(e.target.value)}
      />

      <button
        className="bg-green-700 text-white px-6 py-3 rounded-lg"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;