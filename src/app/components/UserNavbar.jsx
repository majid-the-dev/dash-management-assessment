"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { ThemeContext } from "./ThemeContext";
import clsx from "clsx";

const UserNavbar = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <nav
      className={clsx({
        "py-4 px-6": true,
        "bg-[#F2F6FD]": theme === "light",
        "bg-[#171717] text-light-primary-text": theme === "dark",
      })}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href={"/"}>
          {theme === "light" ? (
            <Image
              src={"/assets/logo-light.png"}
              width={130}
              height={29}
              alt="logo"
            />
          ) : (
            <Image
              src={"/assets/logo-dark.png"}
              width={130}
              height={29}
              alt="logo"
            />
          )}
        </Link>

        <form className="relative hidden lg:block">
          <input
            type="text"
            className={clsx({
              'rounded-md pl-10 pr-10 py-3 w-[500px] outline-none focus:shadow-md': true,
              'bg-[#FBFAFC] border border-[#D4DCF1]' : theme === 'light',
              'bg-[#242428]' : theme === 'dark'
            })}
          />
          <span className={clsx({
            'absolute left-4 top-1/2 transform -translate-y-1/2' : true,
            'text-primary-blue' : theme === 'light',
            'text-light-primary-text' : theme === 'dark',
          })}>
            <FiSearch />
          </span>
          <button type="button" className={clsx({
            'absolute right-4 top-1/2 transform -translate-y-1/2' : true,
            'text-[#0D2159]' : theme === 'light',
            'text-light-primary-text' : theme === 'dark',
          })}>
            <IoClose />
          </button>
        </form>

        <div className="flex items-center gap-4 md:gap-7">
          <div className="flex items-center gap-2">
            <p className={clsx({
              'text-[16px] font-medium hidden sm:block': true,
              'text-[#101012]' : theme === 'light',
              'text-light-primary-text' : theme === 'dark'
            })}>Welcome!</p>
            <Image
              src={"/assets/avatar.png"}
              width={36}
              height={36}
              className="rounded-full"
            />
          </div>

          <button
            onClick={toggleTheme}
            className={clsx({
              "rounded-md p-2": true,
              "bg-[#F3F7FE] border border-[#D4DCF1]": theme === "light",
              "bg-[#242428] text-white": theme === "dark",
            })}
          >
            {theme === "light" ? <MdOutlineWbSunny /> : <IoMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
