import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { ammenities } from "../../../public/data/ammenities";
import { ThemeContext } from "./ThemeContext";
import clsx from "clsx";
import toast from "react-hot-toast";

function ReviewModal() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const [modal, setModal] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState(
    ammenities.reduce((acc, amenity) => ({ ...acc, [amenity]: false }), {})
  );
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [postAsAnonymous, setPostAsAnonymous] = useState(false);

  const handleStarClick = (selectedRating) => {
    if (selectedRating === rating) {
      setRating(0);
    } else {
      setRating(selectedRating);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !Object.values(selectedAmenities).some((value) => value) ||
      rating === 0 ||
      review.trim() === ""
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    const selectedAmenitiesArray = Object.entries(selectedAmenities)
      .filter(([_, isSelected]) => isSelected)
      .map(([amenity]) => amenity);

    const ReviewPromise = fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amenities: selectedAmenitiesArray,
        rating,
        review,
        postAsAnonymous,
      }),
    });

    await toast.promise(ReviewPromise, {
      success: "Review submitted",
      error: "Something went wrong",
    });

    setModal(false);
  };

  const toggleAmenities = () => {
    setShowAmenities(!showAmenities);
  };

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prevAmenities) => ({
      ...prevAmenities,
      [amenity]: !prevAmenities[amenity],
    }));
  };

  const isSubmitDisabled =
    !Object.values(selectedAmenities).some((value) => value) ||
    rating === 0 ||
    review.trim() === "";

  return (
    <>
      <button
        onClick={() => setModal(true)}
        className="uppercase text-[14px] md:text-[16px] font-medium text-white bg-[#3366FF] rounded-md px-7 md:px-10 py-3 md:py-4 hover:bg-[#3366FF]/90"
      >
        Leave a review
      </button>

      {modal && (
        <div
          onClick={() => setModal(false)}
          className={clsx({
            "fixed inset-0 flex items-center justify-center z-50 px-6": true,
            "bg-[#1D3045]/95": theme === "light",
            "bg-[#1E1E1E]/95": theme === "dark",
          })}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={clsx({
              "w-full max-w-xl rounded-md border border-[#D4DCF1] p-6 animate__animated animate__pulse": true,
              "bg-[#FAFCFD]": theme === "light",
              "bg-[#171717]": theme === "dark",
            })}
          >
            <p
              className={clsx({
                "text-center text-[18px] font-medium": true,
                "text-dark-primary-text": theme === "light",
                "text-light-primary-text": theme === "dark",
              })}
            >
              Review Location
            </p>
            <h1
              className={clsx({
                "text-[20px] font-medium mt-8": true,
                "text-dark-primary-text": theme === "light",
                "text-light-primary-text": theme === "dark",
              })}
            >
              Bonny and Clyde Street, Ajao Estate, Lagos
            </h1>

            <form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleAmenities}
                  className={clsx({
                    "w-full flex items-center justify-between text-[14px] font-medium rounded-md px-4 py-4 hover:shadow-sm": true,
                    "bg-[#F3F7FE] text-dark-primary-text border border-[#D4DCF1]":
                      theme === "light",
                    "bg-[#242428] text-white": theme === "dark",
                  })}
                >
                  Select Amenities
                  <FaAngleDown
                    className={`${showAmenities ? "rotate-180" : ""}`}
                  />
                </button>
                {showAmenities && (
                  <div
                    className={clsx({
                      "absolute w-full rounded-md p-4 mt-2": true,
                      "bg-[#F3F7FE] text-[#484851]  border border-[#D4DCF1]":
                        theme === "light",
                      "bg-[#242428] text-white": theme === "dark",
                    })}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {ammenities.map((amenity) => (
                        <label
                          key={amenity}
                          className="flex items-center gap-2 text-[14px] font-normal cursor-pointer"
                        >
                          <input
                            required
                            id={amenity}
                            name={amenity}
                            type="checkbox"
                            checked={selectedAmenities[amenity]}
                            onChange={() => toggleAmenity(amenity)}
                          />
                          <span className="whitespace-nowrap">{amenity}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label
                  className={clsx({
                    "text-[14px] font-medium": true,
                    "text-dark-primary-text": theme === "light",
                    "text-light-primary-text": theme === "dark",
                  })}
                >
                  Rate Location
                </label>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <button
                      type="button"
                      key={index}
                      className={`text-[26px] cursor-pointer hover:text-[#EEBD42] ${
                        index <= rating ? "text-[#EEBD42]" : "text-gray-400"
                      }`}
                      onClick={() => handleStarClick(index)}
                    >
                      <GoStarFill />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label
                  className={clsx({
                    "text-[14px] font-medium": true,
                    "text-dark-primary-text": theme === "light",
                    "text-light-primary-text": theme === "dark",
                  })}
                >
                  Write Review
                </label>
                <textarea
                  required
                  cols="30"
                  rows="10"
                  placeholder="write review here..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className={clsx({
                    "text-[14px] outline-none border-[1px] border-[#D4DCF1] rounded-md p-3 focus:shadow-sm": true,
                    "bg-[#FBFAFC]": theme === "light",
                    "bg-inherit": theme === "dark",
                  })}
                />
              </div>

              <label className="flex items-center gap-2 text-[14px] font-normal cursor-pointer">
                <input
                  id="postAsAnonymous"
                  name="postAsAnonymous"
                  type="checkbox"
                  checked={postAsAnonymous}
                  onChange={() => setPostAsAnonymous(!postAsAnonymous)}
                />
                <span
                  className={clsx({
                    "text-[#484851]": theme === "light",
                    "text-[#999999]": theme === "dark",
                  })}
                >
                  Post as Anonymous
                </span>
              </label>

              <div className="w-full flex items-center gap-5 text-[16px]">
                <button
                  disabled={isSubmitDisabled}
                  className={clsx("w-full bg-primary-blue text-white text-[14px] font-medium rounded-md py-3", {
                    "hover:bg-primary-blue/90": !isSubmitDisabled,
                    "cursor-not-allowed bg-[#E4E9FB]": isSubmitDisabled,
                  })}
                >
                  SUBMIT
                </button>
                <button
                  type="button"
                  onClick={() => setModal(false)}
                  className="w-full text-[14px] text-primary-blue font-medium border-[0.5px] border-[#5378F6] rounded-md py-3"
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ReviewModal;
