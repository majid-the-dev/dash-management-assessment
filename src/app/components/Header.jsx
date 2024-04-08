"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { ThemeContext } from "./ThemeContext";
import clsx from "clsx";

const Header = () => {

    const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <nav className={clsx({
        'py-4 px-5': true,
        'bg-[#FAFCFD]' : theme === 'light',
        'bg-[#171717]' : theme === 'dark'
    })}>
      <div className="max-w-7xl mx-auto flex justify-between">
        <Link href={"/"}>
          {theme === 'light' ? (
            <Image src={"/assets/logo-light.png"} width={130} height={29} alt="logo" />
          ) : (
            <Image src={"/assets/logo-dark.png"} width={130} height={29} alt="logo" />
          )}
        </Link>
        <div className="flex items-center gap-5">
          <Link
            href={"/login"}
            className="text-[#557FF2] text-[14px] font-semibold"
          >
            LOGIN
          </Link>

          <button onClick={toggleTheme} className={clsx({
            'rounded-md p-2': true,
            'bg-[#F3F7FE] border border-[#D4DCF1]' : theme === 'light',
            'bg-[#242428] text-white' : theme === 'dark'
          })}>
            {theme === 'light' ? <MdOutlineWbSunny /> : <IoMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
