import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteButton, updateThreadData } from "../../features/feature";
const DeletionPop = () => {
  const dispatch = useDispatch();
  let thread_idt = useSelector((state) => state.counter.threadId);
  let arr = useSelector((state) => state.counter.threadData);
  const handleDeleteion = async (e) => {
    e.preventDefault();
    console.log(
      "deletion trigerd",
      `https://hiring.reachinbox.xyz/api/v1/messages/${thread_idt}`
    );
    if (thread_idt === -1) {
      console.log("no allow select some thread");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      console.log(
        "deletion trigerd",
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread_idt}`,
        token
      );
      const res = await axios.delete(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread_idt}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const r = await res.data.data;
      dispatch(updateThreadData(r));
      console.log;
      dispatch(deleteButton(0));
      console.log("what is happening", r, arr);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("what is happening", arr);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center text-white bg-[#8484847D] bg-opacity-50 z-50`}
    >
      <div className={`bg-slate-900 p-8 rounded-lg items-center flex flex-col`}>
        <h2 className={`text-3xl font-bold`}>Are you sure?</h2>
        <p className={`text-sm my-12 px-16`}>
          Are you sure you want to delete this mail?
        </p>
        <div className={`flex justify-center space-x-4`}>
          <button
            className={`bg-[#25262B] text-white px-16 py-4 rounded-md focus:outline-none`}
            onClick={() => {
              dispatch(deleteButton(0));
            }}
          >
            Cancel
          </button>
          <button
            className={`bg-gradient-to-r from-[#FA5252] to-[#A91919] text-white px-16 py-4 rounded-md focus:outline-none`}
            onClick={(e) => {
              handleDeleteion(e);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletionPop;
