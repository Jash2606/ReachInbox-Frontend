import React from "react";
import { IoIosArrowDown } from "react-icons/io";

import { useSelector } from "react-redux";
import { IoReload } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import Mail from "./mail";
const Inbox = () => {
  let noOfMessage = useSelector((state) => state.counter.noOfMsg);
  let darkview = useSelector((state) => state.counter.darkView);
  let data = useSelector((state) => state.counter.dataList);

  return (
    <div
      className={`pt-5 px-5 ${
        darkview ? "text-white border-[#33383F]" : "text-black border-[#E0E0E0]"
      } border border-l-0 border-t-0 `}
    >
      <div className="grid grid-cols-8">
        <div className="text-2xl text-nowrap col-span-6  text-[#4285F4] font-semibold ">
          <div className="flex items-center">
            All Inbox(s){" "}
            <IoIosArrowDown className="cursor pointer ml-2 mt-1" size={30} />
            <br />
          </div>

          <div className={`text-lg ${darkview ? "text-white" : "text-black"}`}>
            {noOfMessage}/25{" "}
            <span className="text-[#7F7F7F]  font-normal ">
              Inboxes selected
            </span>
          </div>
        </div>

        <div className="col-span-2 relative">
          <div
            className={`${
              darkview ? "bg-[#25262B]" : "bg-[#DFE3E8]"
            } rounded-md p-2 w-8 absolute right-2 top-2`}
          >
            <IoReload
              className="cursor pointer"
              color={darkview ? "white" : "grey"}
              size={20}
            />
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className="relative">
          <input
            placeholder=" Search"
            className={`w-full  ${
              darkview
                ? "bg-[#23272C] border-[#FFFFFF1A]"
                : "bg-[#F4F6F8]  border-[#DFE3E8]"
            } rounded-md p-1 pl-8 border`}
          />
          <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        <div className="flex relative py-4">
          <div className={`${darkview ? "text-white" : "text-black"}`}>
            <span
              className={`text-[#5C7CFA] font-bold w-8 px-3 py-1  rounded-3xl flex items-center ${
                darkview ? "bg-[#222426]" : "bg-[#ECECEC]"
              }`}
            >
              {noOfMessage}
            </span>
          </div>

          <div
            className={`flex items-center ml-2 font-medium ${
              darkview ? "text-white" : "text-black"
            }`}
          >
            New Replies
          </div>
          <div
            className={`flex items-center absolute right-0 py-1  font-medium ${
              darkview ? "text-white" : "text-black"
            }`}
          >
            Newest <FaAngleDown className="ml-3 my-1 text-xl" />
          </div>
        </div>
      </div>
      <div>
        {data.map((e) => (
          <Mail
            key={e.id}
            fromEmail={e.fromEmail}
            subject={e.subject}
            threadId={e.threadId}
          />
        ))}
      </div>
    </div>
  );
};

export default Inbox;
