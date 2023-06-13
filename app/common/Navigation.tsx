"use client";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { clsx } from "clsx";
import { useState } from "react";
import { OButton } from "./Common";

export default function Navigation() {
  const menuStyle = `transition-all duration-200 flex items-center fixed sm:bg-transparent top-0
  sm:flex sm:static rounded-br-[30%]
  gap-14 flex-col justify-center items-center w-screen 
  h-screen sm:gap-8 sm:h-auto bg-violet-900 sm:bg-transparent sm:flex-row sm:w-auto ease  duration-500 text-lg`;
  const [menuState, setMenuState] = useState(
    clsx({
      "top-[-100vh]": true,
    })
  );

  const switchMenuState = () => {
    if (menuState != "") {
      setMenuState("");
    } else {
      setMenuState(
        clsx({
          "top-[-100vh]": true,
        })
      );
    }
  };

  return (
    <div>
      <div className="flex  absolute z-10 w-screen top-0 left-0 fixed justify-between sm:p-3 text-white items-center">
        <h1 className=" fixed font-black sm:static left-4 top-4 z-50 text-[7vmin] sm:text-[4vmin] transition-all duration-300">
          AFood
        </h1>
        <ul className={`${menuStyle} ${menuState}`}>
          <li className="text-red-400">
            <a>Home</a>
          </li>
          <li>
            <a>Thurs</a>
          </li>
          <li>
            <a>Explore</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <OButton>Contact</OButton>
          </li>
        </ul>
      </div>
      <Bars3Icon
        className="fixed z-50 text-white h-12 w-12 top-4 right-4 sm:hidden"
        onClick={switchMenuState}
      />
    </div>
  );
}
