import React from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";

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
      className="w-[472px] h-[255px] bg-white rounded-3xl relative p-6"
    >
      <div
        onClick={() => {
          setShowSelectAutoSweep(false);
          setShowWithdrawAmount("");
          document.body.style.overflow = "visible";
        }}
        className="absolute w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer top-0 -right-4"
      >
        <img src="/assets/x.png" alt="Delete image" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img
            src="/assets/Time image.png"
            className="w-[96px] h-[96px]"
            alt="Time management-cuate 2"
          />
          <p className="text-lg tracking-normal w-[265px]">
            Set an auto Hourly or Daily withdrawal sweep for your company to
            your bank account
          </p>
        </div>
        <h2 className="text-center font-medium text-2xl">{withdrawAmount}</h2>

        <div className="w-full h-full p-6 flex justify-around gap-6">
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
