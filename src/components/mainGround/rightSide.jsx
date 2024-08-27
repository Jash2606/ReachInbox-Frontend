import React from "react";
import { IoIosSend } from "react-icons/io";
import mail from "../../assets/Center/email.png";
import { IoMailOpen } from "react-icons/io5";
import { useSelector } from "react-redux";
const RightSide = () => {
  let darkview = useSelector((state) => state.counter.darkView);
  return (
    /* {`${darkview?"text-white":"text-black"}`} */
    <div
      className={`bg-black ${
        darkview ? " bg-black border-[#33383F] " : " bg-white border-[#E0E0E0]"
      } border-l-2  h-full overflow-y-scroll no-scrollbar px-2`}
    >
      <div
        className={`${
          darkview ? "text-white bg-[#23272C] " : "text-black  bg-[#ECEFF3]"
        } mt-5 rounded-lg py-2 pl-4`}
      >
        Lead Details
      </div>
      <div
        className={`${
          darkview ? "text-white" : "text-[#637381]"
        } px-6 my-10 space-y-6  `}
      >
        <div className="flex justify-between text-sm">
          <div className="">Name</div>
          <div className={`${darkview ? "text-[#B9B9B9]" : "text"}`}>
            Orlando
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <div>Contact No</div>
          <div className={`${darkview ? "text-[#B9B9B9]" : ""}`}>
            +54-9062827869
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <div>Email ID</div>
          <div className={`${darkview ? "text-[#B9B9B9]" : ""}`}>
            orlando@gmail.com
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <div>Linkedin</div>
          <div className={`${darkview ? "text-[#B9B9B9]" : ""}`}>
            linkedin.com/in/timvadde/
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <div>Company Name</div>
          <div className={`${darkview ? "text-[#B9B9B9]" : ""}`}>
            Reachinbox
          </div>
        </div>
      </div>

      <div
        className={`mt-8 rounded-lg py-2 pl-4 ${
          darkview ? "text-white bg-[#23272C]" : "text-black bg-[#ECEFF3]"
        }`}
      >
        Activities
      </div>

      <div className="my-8 px-4">
        <div className={`px-2 ${darkview ? "text-white" : "text-black"}`}>
          Campaign Name
        </div>
        <div
          className={`my-4 text-sm px-2 ${
            darkview ? "text-white" : "text-black"
          }`}
        >
          3 Steps | 5 Days in Sequence
        </div>
        <div className="px-2">
          <div className="flex my-4 items-center">
            <div>
              <img
                src={mail}
                className={`p-2 w-12  rounded-full ${
                  darkview ? "bg-[#23272C]" : "bg-[#EEF1F4]"
                }`}
              ></img>
            </div>
            <div
              className={`${
                darkview ? "text-white" : "text-black"
              } ml-10 space-y-2`}
            >
              <div>Step 1: Email</div>
              <div className="text-[#B9B9B9] text-sm flex items-center ">
                {" "}
                <IoIosSend className="mr-2" /> Sent 3rd, Feb
              </div>
            </div>
          </div>

          <div className="flex my-4 items-center">
            <div>
              <img
                src={mail}
                className={`${
                  darkview ? "bg-[#23272C]" : "bg-[#EEF1F4]"
                } w-12   p-2 rounded-full`}
              ></img>
            </div>
            {/*  {`${darkview?"text-white":"text-black"}`} */}
            <div
              className={`ml-10 space-y-2  ${
                darkview ? "text-white" : "text-black"
              }`}
            >
              <div>Step 2: Email</div>
              <div className="text-[#B9B9B9] text-sm flex items-center ">
                {" "}
                <IoMailOpen className="mr-2 text-yellow-500" /> Open 5th, Feb
              </div>
            </div>
          </div>

          <div className="flex my-4 items-center">
            <div>
              <img
                src={mail}
                className={`p-2 rounded-full w-12  ${
                  darkview ? "bg-[#23272C]" : "bg-[#EEF1F4] "
                }`}
              ></img>
            </div>
            <div
              className={`ml-10 space-y-2 ${
                darkview ? "text-white" : "text-black"
              }`}
            >
              <div>Step 3: Email</div>
              <div className="text-[#B9B9B9] text-sm flex items-center ">
                {" "}
                <IoMailOpen className="mr-2 text-yellow-500" /> Open 5th, Feb
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
