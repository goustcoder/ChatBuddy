import React, { useState } from "react";

const Review = () => {
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    if (review.trim()) {
      alert(`Review Submitted: ${review}`);
      setReview("");
    } else {
      alert("Please enter a review before submitting!");
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#0d0319] to-[#000] grid grid-cols-1 ">
      <h2 className="text-white text-2xl sm:text-3xl text-center font-bold mb-4">
        Share Your Experience
      </h2>
      <div className="flex justify-center items-center flex-col   p-6   shadow-lg w-full ">
        <textarea
          className="w-full sm:max-w-[60%] p-3 mb-7 bg-[#2a2a3a] text-white border-none rounded-lg focus:outline-none"
          rows="4"
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-[#d61c7f] text-white py-2 px-6 rounded-lg hover:bg-[#b51763] transition-all cursor-pointer"
        >
          Share Your Experience
        </button>
      </div>
    </div>
  );
};

export default Review;
