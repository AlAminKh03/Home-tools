import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://home-tools-server.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-28 mx-2 lg:mx-[180px]">
      <div className=" justify-center">
        <h4 className="text-xl text-primary font-bold">Reviews</h4>
        <h2 className="text-3xl">What our Buyers say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} testimonial={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
