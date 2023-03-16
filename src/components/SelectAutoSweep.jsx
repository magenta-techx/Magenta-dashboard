import React from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import Header from "./Header";

const SelectAutoSweep = () => {
  const {
    withdrawAmount,
    withdrawPassword,
    setWithdrawPassword,
    state: { ForEachAcctDetail },
    setShowWithdrawAmount,
    setShowWithdrawPassword,
    setShowWithdrawOTP,
    setShowSelectAutoSweep,
    setShowSelectHourly,
    freq,
    setFreq,
    showSelectDaily,
    setShowSelectDaily,
  } = ItemContext();
  const handleClick = (freq) => {
    setShowSelectHourly(
      freq === "HOURLY" ? true : freq === "DAILY" ? true : false
    );

    setShowSelectAutoSweep(false);
    setFreq(freq);
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full sm:w-[472px] h-full sm:h-[255px] bg-white sm:rounded-3xl relative  poppins"
    >
      <div
        onClick={() => {
          setShowSelectAutoSweep(false);
          setShowWithdrawAmount("");
          // document.body.style.overflow = "visible";
        }}
        className="absolute w-[60px] h-[60px] sm:flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer top-0 -right-4 hidden"
      >
        <img src="/assets/x.png" alt="Delete image" />
      </div>
      <div className="w-full bg-white  sm:hidden mb-4">
        <Header showLogo={false} handleClick={handleClick} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-4 p-4 w-full">
          <img
            src="/assets/Time image.png"
            className="self-center w-[130px] h-[130px] sm:w-[96px] sm:h-[96px] "
            alt="Time management-cuate 2"
          />
          <p className=" text-[14px] sm:text-lg tracking-normal  sm:w-[265px] font-normal">
            Set an auto Hourly or Daily withdrawal sweep for your company to
            your bank account
          </p>
        </div>
        <h2 className="text-center font-medium text-2xl">{withdrawAmount} </h2>

        <div className="w-full h-full p-4 sm:p-0  flex justify-around gap-6">
          <button
            onClick={() => handleClick("HOURLY")}
            className="w-[151px] text-white
             rounded-xl h-[48px] bg-[#4E00AD]"
          >
            Hourly
          </button>
          <button
            onClick={() => handleClick("DAILY")}
            className="w-[151px] text-white
             rounded-xl h-[48px] bg-[#CC00C1]"
          >
            Daily
          </button>
        </div>
      </div>
    </div>
  );
};
export default SelectAutoSweep;
