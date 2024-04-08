import React from "react";
import Image from "next/image";
import clsx from "clsx";
import ReviewModal from "./ReviewModal";
import { ThemeContext } from "./ThemeContext";

const EmptyReviews = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className="h-full flex flex-col gap-8 items-center justify-center py-24">
      <Image
        src={"/assets/empty-review.png"}
        height={255}
        width={323}
        className="scale-75"
        alt="empty-review"
      />
      <p
        className={clsx({
          "text-[16px] font-normal": true,
          "text-dark-primary-text": theme === "light",
          "text-light-primary-text": theme === "dark",
        })}
      >
        Oops! No reviews yet.
      </p>
      <ReviewModal />
    </div>
  );
};

export default EmptyReviews;
