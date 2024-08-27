import React, { useState } from "react";
import axios from "axios";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaCaretDown,
  FaEye,
  FaImage,
  FaRegSmile,
  FaUserMinus,
} from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { replybuttonUpdate } from "../../features/feature";

const ReplyComponent = () => {
  const darkview = useSelector((state) => state.counter.darkView);
  const dispatch = useDispatch();
  const [replyData, setReplyData] = useState({
    to: "",
    from: "",
    subject: "",
    body: "",
  });

  const handleSendReply = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        {
          to: replyData.to,
          from: replyData.from,
          subject: replyData.subject,
          body: replyData.body,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res);
    } catch {
      console.log("Reply sent successfully");
      dispatch(replybuttonUpdate(0));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      className={`${
        darkview ? "bg-gray-400/25" : "bg-slate-400/25"
      } fixed top-0 left-0 flex justify-center items-center h-full w-full z-20`}
    >
      <div
        className={`${
          darkview ? "bg-[#141517] text-white" : "bg-[#dbdee7] text-black"
        } w-1/2 mt-16 h-4/5 rounded-lg border border-[#41464B]`}
      >
        <div
          className={`flex justify-between ${
            darkview ? "bg-[#141517] text-white" : "bg-[#dbdee7] text-black"
          } items-center px-4 bg-[#23272C] rounded-t-lg py-2 border-b border-[#41464B] font-bold`}
        >
          <div className={`pl-4 text-sm`}>Reply</div>
          <div
            onClick={() => {
              dispatch(replybuttonUpdate(0));
            }}
          >
            <RxCross2
              className={`text-xl ${
                darkview ? "bg-[#141517] text-white" : "bg-[#dbdee7] text-black"
              } cursor-pointer`}
            />
          </div>
        </div>
        <div
          className={`flex text-sm py-2 ${
            darkview ? "bg-[#141517] text-white" : "bg-[#dbdee7] text-black"
          } border-b border-[#41464B] pl-8`}
        >
          <div
            className={`${
              darkview
                ? "bg-[#141517] text-[#BAB9BD]"
                : "bg-[#dbdee7] text-black"
            }`}
          >
            To :
          </div>
          <input
            className={` ${
              darkview
                ? "bg-[#141517] text-[#BAB9BD]"
                : "bg-[#dbdee7] text-black"
            } ml-4`}
            placeholder="Recipient's Email"
            name="to"
            value={replyData.to}
            onChange={handleInputChange}
          />
        </div>

        <div
          className={`flex text-sm py-2 ${
            darkview ? "bg-[#141517] text-[#BAB9BD]" : "bg-[#dbdee7] text-black"
          } border-b border-[#41464B] pl-8`}
        >
          <div
            className={`${
              darkview
                ? "bg-[#141517] text-[#BAB9BD]"
                : "bg-[#dbdee7] text-black"
            }`}
          >
            From :
          </div>
          <input
            className={`${
              darkview
                ? "bg-[#141517] text-[#BAB9BD]"
                : "bg-[#dbdee7] text-black"
            } ml-4`}
            placeholder="Your Email"
            name="from"
            value={replyData.from}
            onChange={handleInputChange}
          />
        </div>

        <div
          className={`flex text-sm ${
            darkview ? "bg-[#141517] text-[#BAB9BD]" : "bg-[#dbdee7] text-black"
          } py-2 border-b border-[#41464B] pl-8`}
        >
          <div
            className={`${
              darkview
                ? "bg-[#141517] text-[#BAB9BD]"
                : "bg-[#dbdee7] text-black"
            }`}
          >
            Subject :
          </div>
          <input
            className={`bg-transparent ml-4`}
            placeholder="Subject"
            name="subject"
            value={replyData.subject}
            onChange={handleInputChange}
          />
        </div>

        <div
          className={`flex text-sm py-2 ${
            darkview ? "bg-[#141517] text-[#BAB9BD]" : "bg-[#dbdee7] text-black"
          } border-b border-[#41464B] px-4 pr-8 pt-8 h-2/3`}
        >
          <textarea
            className={`${
              darkview
                ? "bg-[#141517] text-[#BAB9BD]"
                : "bg-[#dbdee7] text-black"
            } ml-4 w-full h-full`}
            placeholder="Message Body"
            name="body"
            value={replyData.body}
            onChange={handleTextAreaChange}
          />
        </div>

        <div
          className={`flex space-x-8 items-center ${
            darkview ? "bg-[#141517] text-[#BAB9BD]" : "bg-[#dbdee7] text-black"
          } h-12 ml-8`}
        >
          <div
            className={`bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] px-5 py-2 rounded-md flex items-center cursor-pointer`}
            onClick={handleSendReply}
          >
            Send <FaCaretDown className={`ml-4`} />
          </div>
          <div className={`flex items-center text-[#ADADAD]`}>
            <BsLightningChargeFill className={`mr-3`} />
            Variables
          </div>
          <div className={`flex items-center text-[#ADADAD]`}>
            <FaEye className={`mr-3`} />
            Preview Email
          </div>
          <div className={`flex space-x-3 text-xl text-[#ADADAD]`}>
            <div>
              <TbSquareLetterA size={20}/>
            </div>
            <div>
              <IoLinkSharp size={20}/>
            </div>
            <div>
              <FaImage size={20}/>
            </div>
            <div>
              <FaRegSmile size={20}/>
            </div>
            <div>
              <FaUserMinus size={20}/>
            </div>
            <div>
              <IoMdCode size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyComponent;
