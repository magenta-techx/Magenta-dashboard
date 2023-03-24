import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { BsThreeDots, BsTrash } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { TbTrash } from "react-icons/tb";
import { ItemContext } from "../contextApi/stateMang.contextApi";

const Card = ({
  detail: { account_number, bank_name, id },
  detail,
  handleClose,
  handleChangeTrue,
}) => {
  const {
    setShowAcctDelete,
    dispatch,
  } = ItemContext();

  const split = account_number.split("");
  const fitr = split?.filter((a, i) => {
    return i < 3;
  });
  const latr = split?.filter((a, i) => {
    return i >= 7;
  });
  const midfrs = split
    ?.filter((a, i) => {
      return i > 2;
    })
    .join("")
    .substring(4, 0);
  const midfth = midfrs.split("");
  const fir = midfth.splice(0, 0, "*");
  const sec = midfth.splice(1, 1, "*");
  const trd = midfth.splice(2, 2, "*");
  const fth = midfth.splice(3, 2, "*");
  const handleShowAcctDeleteMsg = (item) => {
    dispatch({ type: "Individual AcctDetails", payload: item });
    setShowAcctDelete(true);
  };
  return (
    <>
      <div
        key={id}
        className="w-[242px] bg-[#F4F5F7] h-[86px] p-4 flex flex-col gap-4 rounded-lg"
      >
        <div className="flex justify-between">
          <small className="text-[16px] font-normal- albert text-black">
            {fitr}
            {midfth?.join("")}
            {latr}
          </small>
          <div className="relative">
            <div>
              {detail.isAbtDel ? (
                <FaTimes
                  className="cursor-pointer text-[#4E00AD]"
                  onClick={() => handleClose(id)}
                />
              ) : (
                <BsThreeDots
                  className="cursor-pointer"
                  onClick={() => {
                    handleChangeTrue(id);
                  }}
                />
              )}
            </div>
            {detail.isAbtDel && (
              <div
                onClick={() => handleShowAcctDeleteMsg(detail)}
                className="absolute -left-20 sm:-left-0 w-[107px] h-[60px] bg-white  flex justify-center items-center gap-2 border border-[#AF8BDA] rounded-2xl text-[#DD55D4] cursor-pointer"
              >
                <TbTrash size="20px" className=" cursor-pointer" />
                <small className="text-sm poppins">Delete</small>
              </div>
            )}
          </div>
        </div>
        <h4 className="text-[rgba(0,0,0,0.4)] albert font-normal text-[16px]">
          {bank_name}
        </h4>
      </div>
    </>
  );
};

export default Card;
