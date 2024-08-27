import React, { useEffect, useState } from "react";
import { MdOutlineExpand } from "react-icons/md";

import { SlArrowDown } from "react-icons/sl";
import axios from "axios";
import messagedot from "../../assets/Center/messagedot.png";
import msgdotlight from "../../assets/Center/msgdotlight.png";
import { useSelector } from "react-redux";
import DropDownDelete from "./dropDownDelete";
const Createral = () => {
  let darkview = useSelector((state) => state.counter.darkView);
  let threadstoreId = useSelector((state) => state.counter.threadId);
  let threadstoreData = useSelector((state) => state.counter.threadData);
  const [data, setData] = useState([]);

  const [dropDown, setDropDown] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        console.log("this central")
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [threadstoreId]);

  return (
    <div className=" z-10 relative text-white h-full">
      <div
        className={`${
          darkview ? " border-[#33383F]" : "order-[#E0E0E0]"
        } border-b-2 w-full flex justify-between px-8 py-4`}
      >
        <div>
          <div className={`text-lg ${darkview ? "text-white" : "text-black"}`}>
            Orlando
          </div>
          <div
            className={`text-sm ${
              darkview ? "text-[#FFFFFF66]" : "text-[#343A40B2]"
            }`}
          >
            orladom@gmail.com
          </div>
        </div>
        <div className="flex items-center space-x-3 relative">
          <div
            className={`border flex ${
              darkview
                ? "text-white bg-[#1F1F1F] border-[#343A40]"
                : "text-black bg-white "
            } rounded-md py-2 px-3 items-center  text-sm`}
          >
            {darkview ? (
              <img src={messagedot} className="h-5 mt-1 mr-2" />
            ) : (
              <img src={msgdotlight} className="h-5 mt-1 mr-2" />
            )}
            Meeting Completed <SlArrowDown className=" ml-2" />
          </div>

          <div
            className={`${
              darkview
                ? "text-white bg-[#1F1F1F] border-[#343A40]"
                : "text-black bg-white"
            } rounded-md py-2 px-3 text-sm flex items-center  border`}
          >
            Move <SlArrowDown className=" ml-2" />
          </div>
          <div
            className={`${
              darkview
                ? "text-white bg-[#1F1F1F] border-[#343A40]"
                : "text-black bg-white"
            } rounded-md py-2 px-3 text-sm flex items-center  border`}
            onClick={() => (dropDown ? setDropDown(0) : setDropDown(1))}
          >
            ...
          </div>
          {dropDown ? <DropDownDelete /> : null}
        </div>
      </div>
      <div className="py-8 mx-8 relative flex justify-center items-center">
        <div
          className={` h-[2px] w-full ${
            darkview ? "bg-[#33383F]" : "bg-[#E0E0E0]"
          }`}
        ></div>{" "}
        {/* Line */}
        <div className="absolute inset-0 flex justify-center items-center">
          {" "}
          <div
            className={`px-4 py-1 text-sm ${
              darkview ? "text-white bg-[#171819]" : "text-black bg-[#E0E0E0]"
            }`}
          >
            {" "}
            Today
          </div>
        </div>
      </div>
      {/* messsage will be show here */}
      {threadstoreId === -1 ? (
        <div
          className={`border mx-8 rounded-md my-3 ${
            darkview
              ? "text-white border-[#343A40] bg-[#141517]"
              : "text-black bg-white"
          }`}
        >
          <div className="p-4">
            <div className="flex justify-between py-4">
              <div className="space-y-2">
                <div
                  className={`${
                    darkview ? "text-white" : "text-black"
                  } font-bold`}
                >
                  {"New Product Launch"}
                </div>
                <div
                  className={`text-sm ${
                    darkview ? "text-[#AEAEAE]" : "text-[#637381]"
                  }`}
                >
                  from: {"jeanne@icloud.com : lennon.j@mail.com"}
                </div>
                <div
                  className={`text-sm ${
                    darkview ? "text-[#AEAEAE]" : "text-[#637381]"
                  }`}
                >
                  to: {"lennon.j@mail.com"}
                </div>
              </div>
              <div
                className={`text-sm ${
                  darkview ? "text-[#7F7F7F]" : "text-[#637381]"
                }`}
              >
                20 June 2022 : 9:16 AM
              </div>
            </div>
            <div
              className={`py-4 w-2/3 ${
                darkview ? "text-[#E1E0E0]" : "text-[#172B4D]"
              }`}
            >
              Hi <span>&#10100;</span>First Name<span>&#10101;</span> <br />{" "}
              <br />I would like to introduce you to SaaSgrow, a productized
              design service specifically tailored for saas startups. Our aim is
              to help you enhance the user experience and boost the visual
              appeal of your software products.
            </div>
          </div>
        </div>
      ) : threadstoreData.length && Array.isArray(threadstoreData) ? (
        threadstoreData.map((e) => {
          function formatDate(dateString) {
            const date = new Date(dateString);

            const day = date.getUTCDate();
            const month = date.toLocaleString("en-US", { month: "long" });
            const year = date.getUTCFullYear();
            let hours = date.getUTCHours();
            const minutes = date.getUTCMinutes();

            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12;

            const minutesFormatted = minutes < 10 ? "0" + minutes : minutes;

            return `${day} ${month} ${year} : ${hours}:${minutesFormatted} ${ampm}`;
          }
          let formattedDate = formatDate(e.sentAt);
          return (
            <div
              key={e.id}
              className={`border mx-8 rounded-md my-5 ${
                darkview
                  ? "text-white border-[#343A40] bg-[#141517]"
                  : "text-black bg-white"
              }`}
            >
              <div className="p-4">
                <div className="flex justify-between py-4">
                  <div className="space-y-2">
                    <div
                      className={`${
                        darkview ? "text-white" : "text-black"
                      } font-bold`}
                    >
                      {e.subject}
                    </div>
                    <div
                      className={`text-sm ${
                        darkview ? "text-[#AEAEAE]" : "text-[#637381]"
                      }`}
                    >
                      from: {e.fromEmail}
                    </div>
                    <div
                      className={`text-sm ${
                        darkview ? "text-[#AEAEAE]" : "text-[#637381]"
                      }`}
                    >
                      to: {e.toEmail}
                    </div>
                  </div>
                  <div
                    className={`text-sm ${
                      darkview ? "text-[#7F7F7F]" : "text-[#637381]"
                    }`}
                  >
                    {formattedDate}
                  </div>
                </div>
                <div
                  className={`py-4 w-2/3 ${
                    darkview ? "text-[#E1E0E0]" : "text-[#172B4D]"
                  }`}
                  dangerouslySetInnerHTML={{ __html: e.body }}
                />
                {/* {`${darkview?"text-white":"text-black"}`} */}
              </div>
            </div>
          );
        })
      ) : null}
      {/* till here */}
      {/* {`${darkview?"text-white":"text-black"}`} */}
      <div className="py-8 mx-8 relative flex justify-center items-center">
        <div
          className={`h-[2px] w-full ${
            darkview ? "bg-[#33383F]" : "bg-[#E0E0E0]"
          }`}
        ></div>{" "}
        {/* Line */}
        <div className="absolute inset-0 flex justify-center items-center">
          {" "}
          <div
            className={` px-4 py-1 text-sm flex items-center space-x-1 ${
              darkview ? "text-white bg-[#171819]" : "text-black bg-[#E0E0E0]"
            }`}
          >
            {" "}
            <MdOutlineExpand className="mr-3 text-xl text-[#AEAEAE]" /> View all{" "}
            <span className="text-blue-500">
              {" "}
              {threadstoreId === -1 ? "4" : threadstoreData.length}{" "}
            </span>
            <span>replies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createral;
