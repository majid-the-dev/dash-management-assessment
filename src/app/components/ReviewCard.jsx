import Image from "next/image";
import React from "react";
import { TbThumbUp } from "react-icons/tb";
import { TbThumbDown } from "react-icons/tb";
import { GoComment } from "react-icons/go";
import { GoStarFill } from "react-icons/go";
import { ThemeContext } from "./ThemeContext";
import clsx from "clsx";

const ReviewCard = ({
  avatar,
  userName,
  role,
  datePosted,
  review,
  likes,
  dislikes,
  comments,
  rating,
  postAsAnonymous,
}) => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  function formatDate(date) {
    const now = new Date();
    const diff = now - date;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return 'now';
    }
  }

  return (
    <div className="border-b border-[#D9D9D9] py-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={"/assets/user.png"}
            height={24}
            width={24}
            alt="user-avatar"
          />
          <p
            className={clsx({
              "flex items-center gap-1 text-[14px] font-normal": true,
              "text-dark-primary-text": theme === "light",
              "text-light-primary-text": theme === "dark",
            })}
          >
            {postAsAnonymous ? "Anonymous" : "Taiwo O."}
          </p>
          {role && <p className="font-semibold">{role && <span>{`(${role})`}</span>}</p>}
          <p
            className={clsx({
              "text-[14px] font-normal": true,
              "text-dark-primary-text/60": theme === "light",
              "text-light-primary-text/60": theme === "dark",
            })}
          >
            {formatDate(new Date(datePosted))}
          </p>
        </div>
        <p
          className={clsx({
            "flex items-center gap-2 font-normal": true,
            "text-dark-primary-text": theme === "light",
            "text-light-primary-text": theme === "dark",
          })}
        >
          <span className="text-[#EEBD42]">
            <GoStarFill />
          </span>
          {rating}.0
        </p>
      </div>
      <p
        className={clsx({
          "text-[16px] font-normal mt-4": true,
          "text-dark-primary-text": theme === "light",
          "text-light-primary-text": theme === "dark",
        })}
      >
        {review}
      </p>
      <div
        className={clsx({
          "flex items-center gap-3 mt-4": true,
          "text-[#0D2159]": theme === "light",
          "text-[#BACAF5]": theme === "dark",
        })}
      >
        <p className="flex items-center gap- text-[14px] font-normal">
          <span>
            <TbThumbUp />
          </span>
          {likes}
        </p>
        <p className="flex items-center gap-1 text-[14px] font-normal">
          <span>
            <TbThumbDown />
          </span>
          {dislikes}
        </p>
        <p className="flex items-center gap-1 text-[14px] font-normal">
          <span>
            <GoComment />
          </span>
          {comments}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
