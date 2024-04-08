"use client";

import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { ThemeContext } from "./components/ThemeContext";
import clsx from "clsx";
import Header from "./components/Header";

const page = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <>
      <Header />
      <main
        className={clsx({
          "p-6 flex items-center pt-36 pb-14 md:py-0": true,
          "bg-[#FAFCFD]": theme === "light",
          "bg-[#171717] text-[#FBFAFC]": theme === "dark",
        })}
      >
        <div className="max-w-7xl mx-auto grid col-span-1 md:grid-cols-2 md:gap-14 min-h-screen items-center">
          <div className="col-span-1">
            <div className="flex flex-col">
              <h1 className="text-[40px] md:text-[64px] font-bold leading-[60px] md:leading-[77.45px] text-center md:text-left">
                Find a place you will love to live!
              </h1>
              <p className="text-[18px] md:text-[24px] font-normal mt-5 md:mt-10 text-center md:text-left">
                See through the lenses of people who have lived or visited the
                neighbourhood you might have in mind.
              </p>
              <form className="w-full flex flex-col gap-8 items-center md:items-start justify-start mt-10 px-12 md:px-0">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className={clsx({
                      "w-full rounded-md pl-9 p-3 placeholder:text-[14px] placeholder:font-normal": true,
                      "bg-[#F3F7FE] border border-[#D4DCF1] placeholder:text-[#484851]":
                        theme === "light",
                      "bg-[#242428] placeholder:text-[#999999]":
                        theme === "dark",
                    })}
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <FiSearch />
                  </span>
                </div>
                <button className="bg-primary-blue text-white rounded-md px-10 py-3 hover:bg-primary-blue/80">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="col-span-1 h-[1200px] md:h-full md:p-14">
            <div className="relative h-full md:h-full w-full">
              {theme === "light" ? (
                <Image
                  src={"/assets/hero-image-light.png"}
                  fill={true}
                  objectFit="cover"
                />
              ) : (
                <Image
                  src={"/assets/hero-image-dark.png"}
                  fill={true}
                  objectFit="cover"
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
