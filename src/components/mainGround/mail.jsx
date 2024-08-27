import React from "react";

import greenCircle from "../../assets/Center/greenCircle.png";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateThreadId, updateThreadData } from "../../features/feature";

const Mail = ({ fromEmail, subject, threadId }) => {
  let darkview = useSelector((state) => state.counter.darkView);
  const dispatch = useDispatch();

  let threadstoreID = useSelector((state) => state.counter.threadId);

  const trimDown = (subject, wordCount) => {
    const words = subject.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + "...";
    }
    return subject;
  };

  const searchThreadData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const r = await res.data.data;
      if (r.length > 0) {
        dispatch(updateThreadData(r));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleClickThread = () => {
    if (threadId === threadstoreID) {
      dispatch(updateThreadId(-1));
      dispatch(updateThreadData([]));
    } else {
      dispatch(updateThreadId(threadId));
      searchThreadData();
    }
  };

  return (
    <>
      {threadId === threadstoreID ? (
        <div
          className={`${
            darkview ? "border-[#ffffff25]" : "border-[#8b8b8b64]"
          }   py-3 border-t-2 `}
          onClick={handleClickThread}
        >
          <div className="relative">
            <div className="absolute -left-6 -top-3 h-[110px] w-[8px] bg-[#5C7CFA]"></div>
            <div className="flex justify-between">
              <div
                className={`text-lg font-normal ${
                  darkview ? "text-white" : "text-black"
                }`}
              >
                {fromEmail}
              </div>
              <div
                className={`${
                  darkview
                    ? "text-[#FCFCFC66]"
                    : "text-[#919EAB] font-thin pr-3"
                }`}
              >
                Mar 7
              </div>
            </div>
            <div
              className={`font-normal ${
                darkview ? "text-[#E1E0E0] " : "text-gray-600"
              }`}
            >
              {trimDown(subject, 7)}
            </div>
            <div className="flex mt-2">
              <div
                className={`${
                  darkview ? "bg-[#222426]" : "bg-[#F0F0F0] "
                } text-[#57E0A6]  text-sm flex items-center px-3 py-1 rounded-2xl `}
              >
                <img src={greenCircle} className="mr-1 h-3 text-lg"></img>
                Interested
              </div>
              <div
                className={`text-sm ml-2 flex items-center ${
                  darkview
                    ? "text-[#FFFFFF] bg-[#222426]"
                    : "text-black bg-[#F0F0F0]"
                } px-3 py-1 rounded-2xl `}
              >
                <IoIosSend className="mr-1 text-lg" />
                Campaign Name
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${
            darkview ? "border-[#ffffff25]" : "border-[#8b8b8b64]"
          }   py-3 border-t-2 `}
          onClick={handleClickThread}
        >
          <div>
            <div className="flex justify-between">
              <div
                className={`text-lg font-normal ${
                  darkview ? "text-white" : "text-black"
                }`}
              >
                {fromEmail}
              </div>
              <div
                className={`${
                  darkview
                    ? "text-[#FCFCFC66]"
                    : "text-[#919EAB] font-thin pr-3"
                }`}
              >
                Mar 7
              </div>
            </div>
            <div
              className={`font-normal ${
                darkview ? "text-[#E1E0E0] " : "text-gray-600"
              }`}
            >
              {trimDown(subject, 7)}
            </div>
            <div className="flex mt-2">
              <div
                className={`${
                  darkview ? "bg-[#222426]" : "bg-[#F0F0F0] "
                } text-[#57E0A6]  text-sm flex items-center px-3 py-1 rounded-2xl `}
              >
                <img src={greenCircle} className="mr-1 h-3 text-lg"></img>
                Interested
              </div>
              <div
                className={`text-sm ml-2 flex items-center ${
                  darkview
                    ? "text-[#FFFFFF] bg-[#222426]"
                    : "text-black bg-[#F0F0F0]"
                } px-3 py-1 rounded-2xl `}
              >
                <IoIosSend className="mr-1 text-lg" />
                Campaign Name
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Mail;
