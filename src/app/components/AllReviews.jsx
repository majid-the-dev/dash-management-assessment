import React from "react";
import Image from "next/image";
import ReviewCard from "./ReviewCard";
import CommentForm from "./CommentForm";

const AllReviews = ({ reviews }) => {
  let isFirstReview = true;

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10 pt-3 p-6">
      <div className="col-span-3 md:col-span-2">
        {reviews &&
          reviews.map((review, index) => (
            <React.Fragment key={review._id}>
              <ReviewCard
                createdAt={review.createdAt}
                userName={review.userName}
                role={review.role}
                datePosted={review.createdAt}
                review={review.review}
                likes={review.likes}
                dislikes={review.dislikes}
                comments={review.comments}
                rating={review.rating}
                postAsAnonymous={review.postAsAnonymous}
              />
              {isFirstReview && <CommentForm key="comment-form" />}
              {isFirstReview && (isFirstReview = false)}
            </React.Fragment>
          ))}
      </div>

      <div className="col-span-3 md:col-span-1 -order-1 md:order-1">
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="col-span-1 relative w-full h-[224px] rounded-lg overflow-hidden">
            <Image
              src={"/assets/place-1.png"}
              className="rounded-lg cursor-pointer hover:scale-110"
              fill={true}
              objectFit="cover"
              alt="place-image"
            />
          </div>
          <div className="col-span-1 relative w-full h-[224px] rounded-lg overflow-hidden">
            <Image
              src={"/assets/place-2.png"}
              className="rounded-lg cursor-pointer hover:scale-110"
              fill={true}
              objectFit="cover"
              alt="place-image"
            />
          </div>
          <div className="col-span-1 relative w-full h-[224px] rounded-lg overflow-hidden">
            <Image
              src={"/assets/place-3.png"}
              className="rounded-lg cursor-pointer hover:scale-110"
              fill={true}
              objectFit="cover"
              alt="place-image"
            />
          </div>
          <div className="col-span-1 relative w-full h-[224px] rounded-lg overflow-hidden">
            <Image
              src={"/assets/place-4.jpeg"}
              className="rounded-lg"
              fill={true}
              objectFit="cover"
              alt="place-image"
            />
            <div className="bg-[#1E1E1E]/85 absolute inset-0 flex items-center justify-center">
              <button className="text-light-primary-text text-[16px] uppercase">
                view more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
