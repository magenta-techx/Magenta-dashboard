import React from "react";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../contextApi/stateMang.contextApi";

const ShowEditSucc = () => {
  const { setShowEditSucc, Get_Branch, setShowAcctDelete } = ItemContext();
  const navigate = useNavigate();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        document.body.style.overflow = "visible";
      }}
      className="w-[271px] flex border-l-8 border-l-[#1EBF46] h-fit bg-white absolute p-4 "
    >
      <div className="flex items-center gap-4 border-r flex-1">
        <img src="/assets/check-circle.png" alt="check image" />
        <div className="flex flex-col  flex-">
          <span className="font-semibold">Success</span>
          <span className="text-[#6B778C]">Changes saved</span>
        </div>
      </div>
      <div
        className="  flex-aut flex justify-center items-center px-4 text-[#C7AFE4] cursor-pointer "
        onClick={() => {
          setShowEditSucc(false);
          navigate("/branch/all");
          document.body.style.overflow = "visible";
        }}
      >
        <span>Close</span>
      </div>
    </div>
  );
};

export default ShowEditSucc;
