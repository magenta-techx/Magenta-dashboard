import React from "react";

const CheckCircle = ({ checkedState = "inactive" }) => {
  return (
    <>
      {checkedState === "active" ? (
        <div className="w-[27px] h-[27px] border border-[#7132BD] flex-shrink-0 flex justify-center items-center rounded-full">
          <div className="w-[10px] h-[10px] border bg-[#7132BD] rounded-full" />
        </div>
      ) : checkedState === "inactive" ? (
        <div className="w-[27px] h-[27px] border border-[#C7AFE4] flex justify-center items-center rounded-full">
          <div className="w-[10px] h-[10px] border bg-[#C7AFE4] rounded-full" />
        </div>
      ) : checkedState === "completed" ? (
        <div className="w-[27px] h-[27px] border border-[#7132BD] flex justify-center items-center rounded-full">
          <span>
            <CheckMark />
          </span>
        </div>
      ) : null}
    </>
  );
};

export const CheckMark = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="12"
      fill="none"
      viewBox="0 0 16 12"
    >
      <path
        stroke="#7132BD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.875 1.625l-8.75 8.75L1.75 6"
      ></path>
    </svg>
  );
};

export default CheckCircle;
