import React from "react";

const DeletedMsg = () => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        
      }}
      className="w-[339px] h-[205px] bg-white rounded-3xl relative p-6 flex flex-col gap-3 justify-center items-center text-[#0B0B0B] text-lg font-medium"
    >
      <p>Your {""} branch has been successfuly deleted</p>
      <img className="w-[140px] h-[78.36px]" src="/assets/TrashImage.png" />
    </div>
  );
};

export default DeletedMsg;
