import { useEffect, useState } from "react";
import axios from "axios";
import { RiReplyFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import Createral from "./createral";
import RightSide from "./rightSide";
import Inbox from "./inbox";

import { AiOutlineLoading } from "react-icons/ai";
import ReplyComponent from "./replyComponent";
import { replybuttonUpdate } from "../../features/feature";
import DeletionPop from "./deletionPop";

const MainGround = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let replyisOn = useSelector((state) => state.counter.replyButton);
  let darkview = useSelector((state) => state.counter.darkView);
  let deletionButton = useSelector((state) => state.counter.deletion);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        console.log("this me main")
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        const r = await res.data.data;
        setData(r);
        console.log(r)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

   if (loading) {
    return (
      <div
        className={`bg-[#ECEFF3] text-[#5B5F66] ${
          darkview ? "bg-black" : "bg-white"
        } flex h-screen w-full justify-center items-center `}
      >
        <AiOutlineLoading size={60} className=" animate-spin" />
      </div>
    );
  } 

  return (
    <div
      className={`lg:ml-[79px] mt-20  ${
        darkview ? "bg-black" : "bg-white"
      } relative`}
    >
      <div
        className="grid grid-cols-12 w-full  overflow-x-hidden no-scrollbar"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <div className="col-span-3 border border-r-2 overflow-y-auto border-opacity-50 border-y-0 border-x-0 border-slate-500 no-scrollbar">
          <Inbox />
        </div>
        <div className="col-span-6 text-white overflow-y-auto no-scrollbar">
          <Createral />
        </div>
        <div className="col-span-3 overflow-y-auto">
          <RightSide />
        </div>
      </div>
      <div
        className="cursor-pointer z-20 text-white flex items-center bottom-0 ml-[400px] mb-10 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] rounded-md px-9 py-2 absolute"
        onClick={() => {
          dispatch(replybuttonUpdate(1));
        }}
      >
        <RiReplyFill className="mr-2 text-xl" /> Reply
      </div>
      {replyisOn === 1 ? <ReplyComponent /> : null}
      {deletionButton === 1 ? <DeletionPop /> : null}
    </div>
  );
};

export default MainGround;
