import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteButton } from "../../features/feature";
import deletet from "../../assets/Center/delete.png";
import edit from "../../assets/Center/edit.png";
import maill from "../../assets/Center/markunread_mailbox.png";
import person_remove from "../../assets/Center/person_remove.png";
import watch_later from "../../assets/Center/watch_later.png";

const DropDownDelete = () => {
  const dispatch = useDispatch();

  let darkview = useSelector((state) => state.counter.darkView);
  return (
    <div className="absolute top-10 z-30 right-0 {} ">
      <div
        className={`flex cursor-pointer flex-col w-[200px] rounded-xl border border-slate-500 ${
          darkview ? "bg-black text-white" : "bg-white text-black"
        } `}
      >
        <div className="flex  p-2">
          <img src={maill} className="h-4 mt-1 mr-2" /> Mark as Read
        </div>
        <div className="flex  p-2">
          <img src={edit} className="h-4 mt-1 mr-2" /> Edit Lead
        </div>
        <div className="flex  p-2">
          <img src={person_remove} className="h-4 mt-1 mr-2" /> Remove Lead
        </div>
        <div className="flex  p-2">
          <img src={watch_later} className="h-4 mt-1 mr-2" /> Set Reminder
        </div>
        <div
          className="flex  p-2 cursor-context-menu"
          onClick={() => {
            dispatch(deleteButton(1));
          }}
        >
          <img src={deletet} className="h-4 mt-1 mr-2" /> Delete
        </div>
      </div>
    </div>
  );
};

export default DropDownDelete;
``