"use client";

import React, { useState, useEffect } from "react";
import ReviewHeader from "../components/ReviewHeader";
import UserNavbar from "../components/UserNavbar";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../../../public/data/reviews";
import Image from "next/image";
import { ThemeContext } from "../components/ThemeContext";
import clsx from "clsx";
import ReviewModal from "../components/ReviewModal";
import EmptyReviews from "../components/EmptyReviews";
import AllReviews from "../components/AllReviews";

const page = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("api/reviews").then((response) => {
      response.json().then((review) => setReviews(review.reverse()));
    });
  }, [reviews]);

  return (
    <div
      className={clsx({
        "min-h-screen": true,
        "bg-[#FAFCFD]": theme === "light",
        "bg-[#171717]": theme === "dark",
      })}
    >
      <UserNavbar />
      <ReviewHeader reviews={reviews} setReviews={setReviews} />

      {reviews.length > 0 ? (
        <AllReviews reviews={reviews} />
      ) : (
        <EmptyReviews />
      )}
    </div>
  );
};

export default page;
