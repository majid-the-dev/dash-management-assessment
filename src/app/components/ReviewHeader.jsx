"use client";

import React, { useEffect } from "react";
import { GrShareOption } from "react-icons/gr";
import { GrBookmark } from "react-icons/gr";
import { tags } from "../../../public/data/tags";
import { ThemeContext } from "./ThemeContext";
import clsx from "clsx";
import ReviewModal from "./ReviewModal";

const ReviewHeader = ({ reviews }) => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div
      className={clsx({
        "bg-[#F2F6FD]": theme === "light",
        "bg-[#171717] text-light-primary-text": theme === "dark",
      })}
    >
      <div className="max-w-7xl mx-auto py-10 p-6">
        <div className="flex flex-col gap-4 lg:flex-row justify-between lg:items-center">
          <div>
            <h1
              className={clsx({
                "text-[22px] md:text-[24px] font-medium": true,
                "text-dark-primary-text": theme === "light",
                "text-light-primary-text": theme === "dark",
              })}
            >
              Bonny and Clyde Street, Ajao Estate, Lagos
            </h1>
            <p
              className={clsx({
                "text-[16px] font-normal mt-2 md:mt-0.5": true,
                "text-dark-primary-text": theme === "light",
                "text-light-primary-text": theme === "dark",
              })}
            >
              <span className="font-medium">
                "{reviews.length}" {""}
              </span>
              Reviews{" "}
              {reviews.length > 0 &&
                "(People are raving about the selected location)"}
            </p>
          </div>
          {reviews.length > 0 && (
            <div className="flex items-center gap-5">
              <ReviewModal />
              <button className="text-primary-blue rounded-md border border-primary-blue p-3 md:p-4 hover:bg-primary-blue/90 hover:text-white">
                <GrBookmark />
              </button>
              <button className="text-primary-blue rounded-md border border-primary-blue p-3 md:p-4 hover:bg-primary-blue/90 hover:text-white">
                <GrShareOption />
              </button>
            </div>
          )}
        </div>
        {reviews.length > 0 && (
          <div className="overflow-scroll flex items-center gap-3 mt-5">
            {tags.map((tag) => (
              <button
                key={tag.id}
                className={clsx({
                  "text-[14px] font-normal whitespace-nowrap border-[0.2px] rounded-md px-3 py-1": true,
                  "bg-[#FBFAFC] text-dark-primary-text border-[#1E1E1E]":
                    theme === "light",
                  "bg-[#242428] text-light-primary-text border-[#FBFAFC]":
                    theme === "dark",
                })}
              >
                {tag.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewHeader;
