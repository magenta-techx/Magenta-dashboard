import React from "react";

const AcctSuccMsg = () => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        
      }}
      className="w-[487px] h-[354px] bg-white rounded-3xl relative p-6 flex flex-col gap-6 justify-center items-center text-[#0B0B0B] text-lg font-medium"
    >
      <img className="w-[250px] h-[162.1px]" src="/assets/AcctSuccimg.png" />
      <p className="text-lg">
        Yay!! Account number {""}
        <small className="text-[#1EBF46]">successfuly</small> added
      </p>
    </div>
  );
};

export default AcctSuccMsg;
