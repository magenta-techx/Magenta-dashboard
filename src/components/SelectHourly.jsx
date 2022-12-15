import React from "react";
import { useState } from "react";
import { ItemContext } from "../contextApi/stateMang.contextApi";
import {timee } from "./data";
import WithdrawalDetails from "./WithdrawalDetails";
const SelectHourly = () => {
  const { setFrequency, time, setShowSelectHourly, setTime } = ItemContext();
  const [index, setIndex] = useState(0);
  // const [last, setLast] = useState(hourrs.length - 1);
  const handleIncrease = () => {
    setIndex(index + 1);
    if (index >= timee.length - 1) setIndex(22);

    setTime(timee[index]);
  };
  const handleDecrease = () => {
    setIndex(index - 1);
    if (index <= 0) setIndex(0);
    // } else if (index === 23) setIndex(22);

    setTime(timee[index]);
  };
  const handleSubmit = () => {
    setFrequency(true);
    setShowSelectHourly(false);
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        
      }}
      className="w-[472px] h-fit bg-white rounded-3xl relative py-4"
    >
      <div
        onClick={() => {
          //     setShowWi(false);
          setShowSelectHourly(false);
               document.body.style.overflow = "visible";
        }}
        className="absolute w-[60px] h-[60px]  flex justify-center items-center rounded-full bg-[#EEE8F8] cursor-pointer top-0 -right-4"
      >
        <img src="/assets/x.png" alt="Delete image" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 p-4">
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
        <div className="w-full h-full flex justify-center">
          <div className="w-[228px] h-[52px] flex ">
            <div className="bg-[#4E00AD] w-[60%] rounded-lg h-full px-4 text-white">
              <div className="flex justify-between items-center h-full">
                <h2>{time}</h2>
                <div className="flex flex-col gap-4">
                  <img
                    onClick={handleIncrease}
                    src="/assets/Vector.png"
                    alt="Arrow up for increasing time"
                    className="cursor-pointer"
                  />
                  <img
                    onClick={handleDecrease}
                    src="/assets/Vector (2).png"
                    alt="Arrow down for decreasing time"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="w-[40%] h-full bg-[#F7F9FA] rounded-tr-lg rounded-br-lg flex justify-center items-center">
              Daily
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-[#F7F9FA] p-6 flex flex-col gap-6">
         
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="w-[299px] h-[46px] bg-[#4E00AD]  text-white  flex justify-center rounded-xl items-center "
            >
              Create Daily Withdrawal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectHourly;
