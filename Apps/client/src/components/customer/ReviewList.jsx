import { useState } from "react";
import { Pencil, Trash2, Star } from "lucide-react";
import { updateReview, deleteReview } from "../../services/review.service";

const ReviewList = ({ reviews, currentUser, refreshReviews }) => {
  const [editingId, setEditingId] = useState(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleEdit = (review) => {
    setEditingId(review._id);
    setRating(review.rating);
    setComment(review.comment);
  };

  const handleUpdate = async (id) => {
    try {
      await updateReview(id, {
        rating,
        comment,
      });
      setRating(5);
      setComment("");
      setEditingId(null);

      refreshReviews();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this review?");

    if (!confirmDelete) return;

    try {
      await deleteReview(id);

      refreshReviews();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-6">
      {reviews.length === 0 && (
        <div className="text-center py-10 text-gray-500">No Reviews Yet</div>
      )}

      {reviews.map((review) => {
        const isOwner = String(currentUser?.userId) === String(review.user._id);

        return (
          <div key={review._id} className="bg-white rounded-2xl shadow p-6">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-lg">{review.user.name}</h3>

                <div className="flex mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className={
                        star <=
                        (editingId === review._id ? rating : review.rating)
                          ? "fill-yellow-400 text-yellow-400 cursor-pointer"
                          : "text-gray-300 cursor-pointer"
                      }
                      onClick={() => {
                        if (editingId === review._id) {
                          setRating(star);
                        }
                      }}
                    />
                  ))}
                </div>
              </div>

              {isOwner && editingId !== review._id && (
                <div className="flex gap-4">
                  <button
                    onClick={() => handleEdit(review)}
                    className="text-blue-600"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => handleDelete(review._id)}
                    className="text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              )}
            </div>

            {editingId === review._id ? (
              <>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full border rounded-lg p-3 mt-4"
                />

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => handleUpdate(review._id)}
                    className="bg-green-700 text-white px-5 py-2 rounded-lg"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => {
                      setEditingId(null);
                      setRating(5);
                      setComment("");
                    }}
                    className="border px-5 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="mt-4 text-gray-600">{review.comment}</p>

                <p className="text-sm text-gray-400 mt-3">
                  {new Date(review.createdAt).toLocaleString()}
                </p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ReviewList;
