import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { ItemContext } from "../contextApi/stateMang.contextApi";

const WithdrawSuccMsg = () => {
  const { withdrawAmount } = ItemContext();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="w-[487px] h-[354px] bg-white rounded-3xl relative p-6 flex flex-col gap-6 justify-center items-center text-[#0B0B0B] text-lg font-medium poppins"
    >
      <img
        className="w-[250px] h-[162.1px]"
        src="/assets/successmsg.png"
        alt="undraw_winners_re_wr1l 1"
      />
      <div className="text-lg flex gap-2">
        A withdrawal of
        <small className="text-[#1EBF46] flex items-center">
          <TbCurrencyNaira size={"20px"}/> {withdrawAmount}
        </small>{" "}
        was Successful
      </div>
    </div>
  );
};

export default WithdrawSuccMsg;
