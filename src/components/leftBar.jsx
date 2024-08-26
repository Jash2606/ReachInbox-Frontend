import React from "react";
import logoAtDark from "../assets/LeftBar/onlylogodark.png";
import logoAtLight from "../assets/LeftBar/onlylogolight.png";
import { urlRoute } from "../features/feature";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import homeD from "../assets/LeftBar/HomeD.png";
import mailD from "../assets/LeftBar/mailD.png";
import boxL from "../assets/LeftBar/boxL.png";
import planeD from "../assets/LeftBar/planeD.png";
import statD from "../assets/LeftBar/StatisticD.png";
import searchD from "../assets/LeftBar/searchD.png";
import menuD from "../assets/LeftBar/menuD.png";
import boxD from "../assets/LeftBar/boxD.png";
const LeftBar = () => {
  const [selectedItem, setSelectedItem] = useState("/"); // Initialize with the default path
  const dispatch = useDispatch();
  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    dispatch(urlRoute(path));
  };
  const darkview = useSelector((state) => state.counter.darkView);
  const noOfmessage = useSelector((state) => state.counter.noOfMsg);

  return (
    <div className="relative hidden lg:block">
      <div
        className={`${
          darkview
            ? "bg-[#101113] border-[#343A40]"
            : "bg-white border-slate-500"
        }  overflow-hidden no-scrollbar border-r-2   left-0 top-0 fixed h-screen w-[79px] flex flex-col gap-20 items-center py-6  `}
      >
        <img
          src={darkview ? logoAtDark : logoAtLight}
          className=" cursor-pointer h-9 rounded-xl object-left overflow-visible"
          alt="Logo"
        />

        <div className="text-[#AEAEAE] space-y-8">
          <div
            className={` my-1 mx-2  ${
              selectedItem === "/" ? "bg-gray-500 rounded-md" : ""
            } cursor-pointer`}
            onClick={() => handleMenuItemClick("/")}
          >
            <img src={homeD} className="h-8 hover:bg-gray-500 rounded-md " />
          </div>
          {darkview ? (
            <div
              className={` mx-2  ${
                selectedItem === "/search"
                  ? "bg-gray-500 cursor-pointer mx-3 rounded-md"
                  : "px-1"
              }`}
              onClick={() => handleMenuItemClick("/search")}
            >
              <img src={searchD} className="h-6 hover:bg-gray-500 rounded-md" />
            </div>
          ) : null}
          <div
            className={` mx-2 ${
              selectedItem === "/mail"
                ? "bg-gray-500 cursor-pointer mx-2 rounded-md"
                : ""
            }`}
            onClick={() => handleMenuItemClick("/mail")}
          >
            <img
              src={mailD}
              className="h-5 mx-1 hover:bg-gray-500 rounded-md"
            />
          </div>
          <div
            className={` mx-2 ${
              selectedItem === "/send" ? "  bg-gray-500 rounded-md" : ""
            } cursor-pointer`}
            onClick={() => handleMenuItemClick("/send")}
          >
            <img
              src={planeD}
              className="h-6 mx-1 hover:bg-gray-500 rounded-md"
            />
          </div>
          <div
            className={` mx-2 cursor-pointer ${
              selectedItem === "/stack" ? "bg-gray-500  rounded-md" : ""
            }`}
            onClick={() => handleMenuItemClick("/stack")}
          >
            <img
              src={menuD}
              className="h-6 mx-1 hover:bg-gray-500 rounded-md"
            />
          </div>
          <div
            className={`p-1 relative cursor-pointer ${
              selectedItem === "/inbox" ? "bg-gray-500 rounded-md" : ""
            }`}
            onClick={() => handleMenuItemClick("/inbox")}
          >
            {noOfmessage > 0 && (
              <div className="h-6 w-6 rounded-full z-20 absolute -right-1 -top-3 bg-red-600 text-white flex items-center justify-center">
                {noOfmessage}
              </div>
            )}
            <img
              src={darkview ? boxD : boxL}
              className={`h-6 mx-1 ${
                selectedItem === "/inbox" ? "" : "hover:bg-gray-500 rounded-md"
              }`}
            />
          </div>
          <div
            className={` mx-2 z-10 ${
              selectedItem === "/stacks" ? "bg-gray-500 rounded-md" : ""
            } cursor-pointer`}
            onClick={() => handleMenuItemClick("/stacks")}
          >
            <img
              src={statD}
              className="mx-1 h-6 hover:bg-gray-500 rounded-md"
            />
          </div>
        </div>
        <div className="absolute bottom-3 font-medium text-white bg-green-500 p-2 rounded-full">
          K K
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
